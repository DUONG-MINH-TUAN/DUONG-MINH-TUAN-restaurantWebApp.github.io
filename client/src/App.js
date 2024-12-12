import React,{useEffect } from 'react';
import { useAuth } from './context/AuthContext';
import { Routes, Route } from "react-router-dom";
import PromoteAdminPage from './components/PromoteAdminPage';
import { useNavigate } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import Signup from './components/signup';
import BasicDemo from './components/ProductList';
import './App.css';

function App() {
  const { accessToken,registerSuccess, setRegisterSuccess } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (registerSuccess) {
        navigate('/login'); // Redirect to the login page
        setRegisterSuccess(false);
    }
}, [registerSuccess, navigate]); // Trigger when registerSuccess changes
  return (
    
      <Routes>
        {/* Define routes for your app */}
        {/* <Route path="/" element={<BasicDemo/>} /> */}
        <Route path="/" element={accessToken ? <Home/> : <Login/>} />
        <Route path="/promote-to-admin" element={<PromoteAdminPage />} />
        <Route path="/login" element={accessToken ? <Home/> : <Login />} />
        <Route path="/signUp" element={<Signup/>} />
      </Routes>
    
  );
}

export default App;
