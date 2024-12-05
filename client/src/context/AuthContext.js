import {createContext,useState,useCallback, useEffect, useContext} from "react";
import {baseUrl} from '../services/requestManager';
import axios from 'axios';
const AuthContext = createContext();

export const AuthProvider = ({children}) => { 
    const [loginInfor,setLoginInfor] = useState({
        email: "",
        password: ""
    });
    const [loginError,setLoginError] = useState(null);
    const [isLoginLoading,setIsLoginLoading]= useState(false);
    const [user,setUser] = useState(null);
    const [registerInfor,setRegisterInfor] = useState({
        email: "",
        password: "",
        confirmedPassword: ""
    });
    const [isRegisterLoading,setIsRegisterLoading]= useState(false);
    const [registerError,setRegisterError] = useState(null);
    const [isAuthenticated,setIsAuthenticated]=useState(false);

    const updateLoginInfor = (infor) => {
        setLoginInfor(infor);
    }
    const updateRegisterInfor = (infor) => {
        setRegisterInfor(infor);
    }
    const registerUser = useCallback(async() => {
        try{
        
        setIsRegisterLoading(true);
        setRegisterError(null);
        const response = await axios.post(`${baseUrl}/signup`, registerInfor);
        setIsRegisterLoading(false);
        
        setUser(response);
        } catch(error){
            const errorMessage = error.response?.data?.message || error.message;
            setRegisterError(errorMessage);
            setIsRegisterLoading(false);
            return ;
        }
    },[registerInfor]);

    // function to create new access token 
    const refreshAccessToken = async () => {
        try {
            const response = await axios.post(`${baseUrl}/refresh`);
            localStorage.setItem('accessToken', response.data.accessToken);
        } catch (error) {
            console.error(error);
        }
    };

    const logout = useCallback(() => {
        localStorage.removeItem("accessToken");
        axios.post(`${baseUrl}/logout`);
    },[])
    const login = useCallback(async()=>{
        
        try{
        setIsLoginLoading(true);
        setLoginError(null);
        const response = await axios.post(`${baseUrl}/login`, 
        loginInfor); //json 
        // if(response.error){
        //     return setLoginError(response);
        // }
        localStorage.setItem("accessToken", response.data.accessToken);
        setUser(response);
        setIsLoginLoading(false);
    }catch(error){
        const errorMessage = error.response?.data?.message || error.message;
        setLoginError(errorMessage);
        setIsLoginLoading(false);
        return ;
    }
    },[loginInfor])

    
    return (
        <AuthContext.Provider value = {{
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
        setRegisterError,}}>
        {children}
        </AuthContext.Provider>
    )


}

export const useAuth = () => {
    return useContext(AuthContext);
}