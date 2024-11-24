import {createContext,useState,useCallback, useEffect, useContext} from "react";
import {baseUrl,postRequest} from '../services/requestManager'
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [loginInfor,setLoginInfor] = useState({
        username: "",
        password: ""
    });
    const [loginError,setLoginError] = useState(null);
    const [isLoginLoading,setIsLoginLoading]= useState(false);
    const [user,setUser] = useState(null);
    
    const updateLoginInfor = (infor) => {
        setLoginInfor(infor);
    }



    
    
    // const registerUser = useCallback(async(e) => {
    //     e.preventDefault();
    //     setIsRegisterLoading(true);
    //     setRegisterError(null);
    //     const response = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerInfo));
    //     setIsRegisterLoading(false);
    //     if (response.error){
    //         return setRegisterError(response);
    //     }
    //     localStorage.setItem("User", JSON.stringify(response));
    //     setUser(response);
    // },[registerInfo]);
    
    const logout = useCallback(() => {
        localStorage.removeItem("User");
        setUser(null);
    },[])
    const login = useCallback(async(e)=>{
        e.preventDefault();
        setIsLoginLoading(true);
        setLoginError(null);
        const response = await postRequest(`${baseUrl}/users/login`, 
        JSON.stringify(loginInfor)); //json 
        if(response.error){
            return setLoginError(response);
        }
        localStorage.setItem("User", JSON.stringify(response));
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
        loginError}}>
        {children}
        </AuthContext.Provider>
    )


}

export const useAuth = () => {
    return useContext(AuthContext);
}