import logo from './logo.svg';
import './App.css';
import { useAuth } from './context/AuthContext';
import {Routes, Route, Navigate} from "react-router-dom"

import Login from './components/login';
import Home from './components/home';
import Signup from './components/signup';
function App() {
  const {accessToken} =useAuth();
  return (
    
        <Routes>
            {/* <Route path="/" element={<Home/>}/>  */}
            
            {/* <Route path="/login" element ={user ? <Home/> : <Login/>}/> */} 
            <Route path="/" element={accessToken ? <Home/> : <Login/>}/> 
            <Route path="/login" element={<Login/>}/>
            <Route path="/signUp" element ={<Signup/>}/>
        </Routes>
    
  );
}

export default App;
