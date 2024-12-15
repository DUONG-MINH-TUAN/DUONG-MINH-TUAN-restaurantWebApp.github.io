import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";

import { useNavigate, useLocation} from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Signup from "./components/signup";

import ManageUser from "./components/manageUser";
import Checkout from "./components/checkout";

import Cart from "./components/cart"
import "./App.css";

function App() {
  const { accessToken, registerSuccess, setRegisterSuccess ,setUser} = useAuth();
  const location = useLocation(); // Get the current route path
  const navigate = useNavigate();
  useEffect(() => {
    if (registerSuccess) {
      navigate("/login"); // Redirect to the login page
      setRegisterSuccess(false);
    }
  }, [registerSuccess, navigate]); // Trigger when registerSuccess changes

  useEffect(() => {
    if(location.pathname === "/"){
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
  return (
    <Routes>
      
     
      <Route path="/cart" element={<Cart/>} />
      {/* <Route path="/" element={<Home/>} /> */}
      {/* <Route path="/" element={<ManageUser/>} /> */}
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/" element={accessToken ? <Home /> : <Login />} />
      {/* <Route path="/" element={< ManageUser/>} /> */}
      <Route path="/manage-user" element={< ManageUser/>} />
      {/* <Route path="/promote-to-admin" element={<PromoteAdminPage />} /> */}
      <Route path="/login" element={accessToken ? <Home /> : <Login />} />
      <Route path="/signUp" element={<Signup />} />
    </Routes>
  );
}

export default App;
