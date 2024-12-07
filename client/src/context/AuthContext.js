import { createContext, useState, useCallback, useEffect, useContext } from "react";
import { baseUrl } from '../services/requestManager';
import axios from 'axios';
import DOMPurify from 'dompurify';

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

    const updateLoginInfor = (infor) => {
        setLoginInfor(infor);
    }
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

        //sanitize the input data
        const sanitizedEmail = DOMPurify.sanitize(email.trim());
        const sanitizedPassword = DOMPurify.sanitize(password.trim());
        if (email) {
            
            if (!emailRegex.test(sanitizedEmail)) {
                errors.email = 'Invalid email format.';
                valid = false;
            }
        }
        if (password) {
            
            if (!passwordRegex.test(sanitizedPassword)) {
                errors.password = 'Password must be at least 8 characters, contain letters, numbers, and special characters.';
                valid = false;
            }
        }
        if (confirmedPassword) {
            const sanitizedConfirmedPassword = DOMPurify.sanitize(confirmedPassword.trim());
            if (sanitizedPassword !== sanitizedConfirmedPassword) {
                errors.confirmedPassword = 'Passwords do not match.';
                valid = false;
            }
        }

        setRegisterError(errors);
        return valid;
    };
    const registerUser = useCallback(async () => {
        try {
            // Validation

            if (!validateForm(registerInfor.email,registerInfor.password,registerInfor.confirmedPassword)) return;
            setIsRegisterLoading(true);
            const response = await axios.post(`${baseUrl}/signup`, registerInfor);
            setIsRegisterLoading(false);

            setUser(response);
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message;
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

    const logout = useCallback(() => {
        localStorage.removeItem("accessToken");
        axios.post(`${baseUrl}/logout`);
    }, [])
    const login = useCallback(async () => {
        try {
            if (!validateForm(loginInfor.email,loginInfor.password)) return;
            setIsLoginLoading(true);
            setLoginError(null);
            const response = await axios.post(`${baseUrl}/login`,loginInfor); 
            localStorage.setItem("accessToken", response.data.accessToken);
            setUser(response);
            setIsLoginLoading(false);
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message;
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