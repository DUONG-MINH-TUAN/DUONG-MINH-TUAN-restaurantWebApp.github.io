import { createContext, useState, useCallback, useEffect, useContext } from "react";
import { baseUrl,serverUrl } from '../services/requestManager';
import axios from 'axios';
import DOMPurify from 'dompurify';
import instance from "../config/axiosInstance";
import {jwtDecode} from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [deleteQueue, setDeleteQueue,] = useState([]);
    const [loginInfor, setLoginInfor] = useState({
        email: "",
        password: ""
    });
    const [loginError, setLoginError] = useState(null);
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [registerInfor, setRegisterInfor] = useState({
        email: "",
        password: "",
        confirmedPassword: ""
    });
    const [isRegisterLoading, setIsRegisterLoading] = useState(false);
    const [registerError, setRegisterError] = useState(null);
    
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
    const [registerSuccess,setRegisterSuccess]= useState(false); 

    // Used for promote-to-admin
    const [users,setUsers] = useState(
        {
            userList: []
        }
    );
    

    // TOKEN
    // decode access token and take the payload
    const decodeAccessToken = useCallback((accessToken) =>{
        try{
        const decodedToken = jwtDecode(accessToken);
        return decodedToken;
    } catch(error){
        console.log("Error in decode the access token in login process: ",error.message);
        return;
    }
    },[])
    // check expiration for token
    const checkExpiration = useCallback((token) =>{
        if (!token) {
            console.log("No access token ");
            return false;
        } 
        try {
        const decodedToken = jwtDecode(token);
        const expTime = decodedToken.exp;
        const currentTime = Date.now() / 1000; // in second
        console.log(currentTime);
        return expTime < currentTime;
    }
        catch(error){
            return true; 
        }
        
    },[]);
    
    
    //reload access token based on refresh token
    const reloadAccessToken = async ()=>{
        try{
            // const response = await axios.get(`${baseUrl}/refresh`);
            const response = await axios.get(`${baseUrl}/refresh`, { withCredentials: true });
            if (response.data.accessToken) {
                setAccessToken(response.data.accessToken);
                localStorage.setItem('accessToken', response.data.accessToken); 
              }
            console.log("Reload access token");
        }catch(error){
            let errorMessage = 'unknown error';
            if (error.response){
                if(error.response.status === 401){
                    setLoginError({message: errorMessage});
                    logout();
                }
                errorMessage = error.response?.data?.message;
            } else if (error.request){
                errorMessage = 'No Internet';
            } else {
                errorMessage = error.message;
            }
            console.log("Error in reload access token: ",errorMessage);
            setLoginError({message: errorMessage});
            
        }
    }

    // Automatic checker for token
    useEffect(()=>{
        // 5 minutes -> check
        const intervalId = setInterval(async() => {
            if (checkExpiration(accessToken)) {
            localStorage.removeItem("accessToken");
            setAccessToken(null);
            await reloadAccessToken();  // if token is expired, reload new access token
        }
        }, 300000);  //ms 
    
        // Clean up khi component unmount
        return () => clearInterval(intervalId);
    },[accessToken])


    
    // ADMIN
    // Promote admin but get All users and verify
    const promoteAdminButGet = useCallback(async()=>{
        try{
        const response = await instance.get(`${baseUrl}/protected/promote-to-admin`);
        
       
        if(!response){
            console.log("Error in executing promoteAdmin function: ");
            console.log("Response in executing promoteAdmin function: ",response);
            return;
        }
        console.log("Response in promote admin: ",response)
        console.log("Response data: ", response.data);
        console.log("Response data length: ", response.data.length);

        setUsers({userList: response.data});
        sessionStorage.setItem('users', JSON.stringify({userList: response.data}));
        return;
        }catch(error){
            const errorMessage = error.response?.data?.message || error.message;
            console.log(errorMessage);
            return;
        }
    },[user,setUsers])

    const promoteAdminReal = async(userId) =>{
        try {
            if (!userId){
                console.log("Error in promote admin real in auth context: no found user id");
                return;
            }
            const response = await instance.post(`${baseUrl}/protected/promote-to-admin-real`,{userId});
            if(!response){
                console.log("There is no response in promote admin real in auth context");
                return;
            }
            return response.data.newAdmin;
        } catch (error) {
            console.log("Error in promote admin real in auth context: ",error.message);
        }
    }


    useEffect(() => {
        console.log("Users state updated: ", users);
    }, [users]);
    
    // SERVER
    // server checker
    const checkServerStatus = async() => {
        try{
        const response = await axios.get(`${serverUrl}/api/status`);
       
        return response.status === 200;
        } catch(error){
            console.error('Server status check failed:', error);
            return false; 
        }
    }

    useEffect(()=>{
        console.log("User: ",user);
    },[user])
    // USER
    const registerUser = useCallback(async () => {
        try {
            // Validation
            const temp = validateForm(registerInfor.email,registerInfor.password,registerInfor.confirmedPassword);
            if (Object.keys(temp.errors).length > 0) {
                setRegisterError(temp.errors);  
            }
            // console.log(temp.errors);
            if (!temp.valid) return;

            

            setIsRegisterLoading(true);
            setRegisterError(null);
            console.log("register infor",registerInfor);
            const response = await axios.post(`${baseUrl}/signup`, registerInfor);
            console.log(registerError);
            setIsRegisterLoading(false);
            setRegisterSuccess(true);

        } catch (error) {
            let errorMessage = 'Unknown error';
            if (error.response) {
                // Server returned a response with error code
                errorMessage = error.response?.data?.message || error.message;
            } else if (error.request) {
                // No response from server, possibly network issues
                errorMessage = 'No Internet';
            } else {
                // Something went wrong in setting up the request
                errorMessage = error.message;
            }
            setRegisterError({message: errorMessage});
            setIsRegisterLoading(false);
           
        }
    }, [registerInfor]);
    console.log(registerInfor);
    const updateLoginInfor = (infor) => {
        setLoginInfor(infor);
    }
    //validation and sanitization
    const validateForm = (email, password, confirmedPassword = null) => {
        const errors = {};
        
        if (!email || !password) {
            errors.message = 'Please input the email or password';
            setRegisterError(errors);
            return false;
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

        let valid = true;
        const temp = {
            valid: valid,
            errors: errors
        }
        //sanitize the input data
        const sanitizedEmail = DOMPurify.sanitize(email.trim());
        const sanitizedPassword = DOMPurify.sanitize(password.trim());
        if (email) {
            
            if (!emailRegex.test(sanitizedEmail)) {
                temp.errors.email = 'Invalid email format.';
                temp.valid = false;
            }
        }
        // if (password) {
            
        //     if (!passwordRegex.test(sanitizedPassword)) {
        //         temp.errors.password = 'Password must be at least 8 characters, contain letters, numbers, and special characters.';
        //         temp.valid = false;
        //     }
        // }
        if (confirmedPassword) {
            const sanitizedConfirmedPassword = DOMPurify.sanitize(confirmedPassword.trim());
            if (sanitizedPassword !== sanitizedConfirmedPassword) {
                temp.errors.confirmedPassword = 'Passwords do not match.';
                temp.valid = false;
            }
        }

        
        return temp;
    };


    console.log(loginInfor);
    
    
    const updateRegisterInfor = (infor) => {
        setRegisterInfor(infor);
    }

    
    const logout = useCallback( async() => {
        localStorage.removeItem("accessToken");
        setAccessToken(null);
        setLoginError(null);
        setRegisterError(null);
        await axios.post(`${baseUrl}/logout`);
    }, [])


    const login = useCallback(async () => {
        try {
            const temp = validateForm(loginInfor.email,loginInfor.password);
            if (Object.keys(temp.errors).length > 0) {
                setLoginError(temp.errors);  
            }
            console.log(temp.errors);
            if (!temp.valid) return;
            // Check the server status
            const serverStatus = await checkServerStatus();  
            if (!serverStatus) {
                setLoginError({ message: 'Server is not running!!! \nPlease start the server!!!' });
                return;
            }
            setIsLoginLoading(true);
            setLoginError(null);
            const response = await axios.post(`${baseUrl}/login`,loginInfor);
            
            console.log('Response:', response);
            // save the access token into the local storage
            localStorage.setItem("accessToken", response.data.accessToken);
            // localStorage.setItem("expiryDate",response.data.expiryDate);
            setAccessToken(response.data.accessToken);
            // setExpiryDate(response.data.expiryDate);
           
            
             //decode the payload and set the user  
            const decodedToken = decodeAccessToken(response.data.accessToken);
            if(!decodedToken){
                console.log("Error in login process: the decodedToken is null");
                return;
            }
            console.log("decodedToken: ", decodedToken);
            setUser(decodedToken);
            setIsLoginLoading(false);
        } catch (error) {
            let errorMessage = 'Unknown error';
            if (error.response) {
                // Server returned a response with error code
                errorMessage = error.response?.data?.message || error.message;
            } else  {
                // Something went wrong in setting up the request
                errorMessage = error.message;
            }
            setLoginError({message: errorMessage});
            setIsLoginLoading(false);
            
        }
    }, [loginInfor])
    const deleteUsers = async (deleteQueue) =>{
        try {
            const response = await instance.post(`${baseUrl}/protected/delete-users`,deleteQueue);
            if (!response) {
                console.log("There is no response from api endpoint of delete route");
                return;
            }
            console.log("The successfull message: ", response.data.message);
            return response.data;
        } catch (error) {
            console.log("There is error in deleting users in auth context:",error);
        }
        
    }

    const getAllUsers = useCallback(async() =>{
        try {
            const response = await instance.get(`${baseUrl}/protected/get-all-users`);
            if(!response.data.users){
                console.log("There is no users found in get all users in auth context");
                return;
            }
            return response.data.users;
        } catch (error) {
            console.log("Error in getting all users in auth context: ", error.message);
        }
        
    },[])

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            login,
            logout,
            updateLoginInfor,
            loginInfor,
            isLoginLoading,
            loginError,
            registerUser,
            registerError,
            registerInfor,
            isRegisterLoading,
            updateRegisterInfor,
            setRegisterError,
            accessToken,  
            registerSuccess,
            setRegisterSuccess,
            users,
            deleteUsers,
            setUsers,
            deleteQueue,
            setDeleteQueue,
            getAllUsers,
            promoteAdminButGet,
        }}>
            {children}
        </AuthContext.Provider>
    )


}

export const useAuth = () => {
    return useContext(AuthContext);
}