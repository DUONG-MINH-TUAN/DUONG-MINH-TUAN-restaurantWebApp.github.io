import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";

import { useNavigate, useLocation} from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Signup from "./components/signup";
import OrderTracking from "./components/orderTracking";
import ManageUser from "./components/manageUser";
import Checkout from "./components/checkout";
import FoodManagement from "./components/foodManagement";
import Cart from "./components/cart"
import "./App.css";
function App() {
  const { user,accessToken, registerSuccess, setRegisterSuccess ,setUser,setAccessToken,logout} = useAuth();
  const location = useLocation(); // Get the current route path
  const navigate = useNavigate();
  useEffect(() => {
    if (registerSuccess) {
      navigate("/login"); // Redirect to the login page
      setRegisterSuccess(false);
    }
  }, [registerSuccess]); // Trigger when registerSuccess changes

  //tự động setUser khi truy cập đường dẫn này (bao gồm việc reload page)
  useEffect(() => {
    if(location.pathname === "/" || location.pathname ==="/manage-user" || location.pathname ==="/food-management"){
      if (accessToken) {
        try {
          const decoded = jwtDecode(accessToken);
          if(!decoded){
            console.log("Error in check path name '/': there is no decoded token")
          }
          console.log("Decoded Token Payload when go to '/' path: ", decoded);
          
          setUser(decoded);
          
        } catch (error) {
          console.error("Invalid Token:", error);
        }
      }
    }
  }, [location.pathname,accessToken]);
  // useEffect(() => {
  //   const checkAccessAndLogout = async () => {
  //     // Allow access only on "/", "/login", or "/signUp"
  //     if (location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/signUp") {
  //       if (!accessToken) {
  //         await logout(); // Logout the user
  //         navigate('/login'); // Redirect to login
  //       }
  //     }
  //   };
  
  //   checkAccessAndLogout(); // Call the async function
  // }, [location.pathname, accessToken]);
  
  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     setAccessToken(localStorage.getItem('accessToken'));
  //   };
  
  //   // Lắng nghe sự kiện thay đổi trong localStorage
  //   window.addEventListener('storage', handleStorageChange);
  
  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange);
  //   };
  // }, []);
    
  
  return (
    <Routes>
      
     
      <Route path="/cart" element={<Cart/>} />
      <Route path="/" element={<Home/>} />
      
      <Route path="/checkout" element={<Checkout/>} />
      {/* <Route path="/" element={<FoodManagement />} /> */}
      <Route path="/order-management" element={<OrderTracking/>} />
      <Route path="/manage-user" element={accessToken ? < ManageUser/> : <Login/>} />
 
      <Route path="/login" element={accessToken ? <Home /> : <Login />} />
      {/* <Route path="/login" element={<Login/>} /> */}
      <Route path="/signUp" element={<Signup />} />

      <Route path="/food-management" element={accessToken ? < FoodManagement/> : <Login/>} />
    </Routes>
  );
}

export default App;
