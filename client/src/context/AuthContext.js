import {createContext,useState,useCallback, useEffect, useContext} from "react";
import {baseUrl,postRequest} from '../services/requestManager';
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
    const registerUser = useCallback(async(e) => {
        e.preventDefault();
        setIsRegisterLoading(true);
        setRegisterError(null);
        const response = await postRequest(`${baseUrl}/register`, registerInfor);
        setIsRegisterLoading(false);
        if (response.error){
            return setRegisterError(response);
        }
        setUser(response);
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
    const login = useCallback(async(e)=>{
        e.preventDefault();
        setIsLoginLoading(true);
        setLoginError(null);
        const response = await axios.post(`${baseUrl}/login`, 
        loginInfor); //json 
        if(response.error){
            return setLoginError(response);
        }
        localStorage.setItem("accessToken", response.data.accessToken);
        setUser(response);
        setIsLoginLoading(false);
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
        isAuthenticated,}}>
        {children}
        </AuthContext.Provider>
    )


}

export const useAuth = () => {
    return useContext(AuthContext);
}