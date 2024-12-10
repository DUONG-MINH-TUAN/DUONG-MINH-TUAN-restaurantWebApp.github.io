import { createContext, useState, useCallback, useEffect, useContext } from "react";
import { baseUrl,serverUrl } from '../services/requestManager';
import axios from 'axios';
import DOMPurify from 'dompurify';
import instance from "../config/axiosInstance";
import {jwtDecode} from "jwt-decode";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
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
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
    const [expiredAt,setExpiredAt] = useState(localStorage.getItem('expiredAt'));
    const checkExpiration = (token) =>{
        if (!token) {
            console.log("There is no input access token ");
            return false;
        } 
        try {
        const decodedToken = jwtDecode(token);
        const expTime = decodedToken.exp;
        const currentTime = Date.now() / 1000; // in second
        return expTime < currentTime;
    }
        catch(error){
            return true; 
        }
        
    }
    useEffect(() => {
        // Cập nhật khi giá trị trong localStorage thay đổi
        const handleStorageChange = () => {
          setAccessToken(localStorage.getItem('accessToken'));
        };
    
        // Lắng nghe sự kiện 'storage' khi localStorage thay đổi
        window.addEventListener('storage', handleStorageChange);
    
        // Clean up khi component unmount
        return () => {
          window.removeEventListener('storage', handleStorageChange);
        };
      }, []);

    const reloadAccessToken = async()=>{
        try{
            const response = await instance.post(`${baseUrl}/refresh`);
            if (response.data.accessToken) {
                setAccessToken(response.data.accessToken);
                localStorage.setItem('accessToken', response.data.accessToken); 
              }
            console.log("Reload access token");
        }catch(error){
            let errorMessage = 'unknown error';
            if (error.response){
                errorMessage = error.response?.data?.message || error.message;
            } else if (error.request){
                errorMessage = 'No Internet';
            } else {
                errorMessage = error.message;
            }
            console.log(errorMessage);
        }
    }
    useEffect(()=>{
        try{
            if(checkExpiration(accessToken)){
            reloadAccessToken();
        }else{
            const decodedToken = jwtDecode(accessToken);
            setUser(decodedToken);
            console.log(user);
        }
        }catch(error){
            let errorMessage = 'unknown error';
            if (error.response){
                errorMessage = error.response?.data?.message || error.message;
            } else if (error.request){
                errorMessage = 'No Internet';
            } else {
                errorMessage = error.message;
            }
            console.log(errorMessage);
        }
    },[accessToken]);
    const updateLoginInfor = (infor) => {
        setLoginInfor(infor);
    }
    console.log(loginInfor);
    const updateRegisterInfor = (infor) => {
        setRegisterInfor(infor);
    }
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

    const checkServerStatus = async() => {
        try{
        const response = await axios.get(`${serverUrl}/status`);
       
        return response.status === 200;
        } catch(error){
            console.error('Server status check failed:', error);
            return false; 
        }
    }
    const registerUser = useCallback(async () => {
        try {
            // Validation
            const temp = validateForm(registerInfor.email,registerInfor.password,registerInfor.confirmedPassword);
            if (Object.keys(temp.errors).length > 0) {
                setRegisterError(temp.errors);  // Đặt lỗi vào state
            }
            console.log(temp.errors);
            if (!temp.valid) return;

            

            setIsRegisterLoading(true);
            const response = await axios.post(`${baseUrl}/signup`, registerInfor);
            setIsRegisterLoading(false);

            setUser(response);
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
            setRegisterError(errorMessage);
            setIsRegisterLoading(false);
            return;
        }
    }, [registerInfor]);

    // function to create new access token 
    const refreshAccessToken = async () => {
        try {
            const response = await axios.post(`${baseUrl}/refresh`);
            localStorage.setItem('accessToken', response.data.accessToken);
        } catch (error) {
            console.error(error);
        }
    };

    
    const logout = useCallback( async() => {
        localStorage.removeItem("accessToken");
        await axios.post(`${baseUrl}/logout`);
    }, [])


    // const getUserDetails = 
    const login = useCallback(async () => {
        try {
            const temp = validateForm(loginInfor.email,loginInfor.password);
            if (Object.keys(temp.errors).length > 0) {
                setLoginError(temp.errors);  // Đặt lỗi vào state
            }
            console.log(temp.errors);
            if (!temp.valid) return;
            // Check the server status
            const serverStatus = await checkServerStatus();  // Chắc chắn rằng bạn chờ đợi kết quả từ checkServerStatus
            if (!serverStatus) {
                setLoginError({ message: 'Server is not running!!! \nPlease start the server!!!' });
                return;
            }
            setIsLoginLoading(true);
            setLoginError(null);
            const response = await axios.post(`${baseUrl}/login`,loginInfor); 
            
            // save the access token into the local storage
            localStorage.setItem("accessToken", response.data.accessToken);
            setUser(response);
            console.log("user when login: ",user);
            setIsLoginLoading(false);
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
            setLoginError(errorMessage);
            setIsLoginLoading(false);
            return;
        }
    }, [loginInfor])


    return (
        <AuthContext.Provider value={{
            user,
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
            setIsAuthenticated,
            isAuthenticated,
            setRegisterError,
        }}>
            {children}
        </AuthContext.Provider>
    )


}

export const useAuth = () => {
    return useContext(AuthContext);
}