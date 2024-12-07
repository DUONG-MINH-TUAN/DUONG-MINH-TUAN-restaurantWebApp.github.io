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
        if (password) {
            
            if (!passwordRegex.test(sanitizedPassword)) {
                temp.errors.password = 'Password must be at least 8 characters, contain letters, numbers, and special characters.';
                temp.valid = false;
            }
        }
        if (confirmedPassword) {
            const sanitizedConfirmedPassword = DOMPurify.sanitize(confirmedPassword.trim());
            if (sanitizedPassword !== sanitizedConfirmedPassword) {
                temp.errors.confirmedPassword = 'Passwords do not match.';
                temp.valid = false;
            }
        }

        
        return temp;
    };
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

    const logout = useCallback(() => {
        localStorage.removeItem("accessToken");
        axios.post(`${baseUrl}/logout`);
    }, [])
    const login = useCallback(async () => {
        try {
            const temp = validateForm(loginInfor.email,loginInfor.password);
            if (Object.keys(temp.errors).length > 0) {
                setLoginError(temp.errors);  // Đặt lỗi vào state
            }
            console.log(temp.errors);
            if (!temp.valid) return;
            setIsLoginLoading(true);
            setLoginError(null);
            const response = await axios.post(`${baseUrl}/login`,loginInfor); 
            localStorage.setItem("accessToken", response.data.accessToken);
            setUser(response);
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