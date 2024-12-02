import logo from './logo.svg';
import './App.css';
import { useAuth } from './context/AuthContext';
import {Routes, Route, Navigate} from "react-router-dom"

import Login from './components/login';
import Home from './components/home';
import Signup from './components/signup';
import AboutUs from './components/AboutUs';
import home from './components/home';
import Contact from './components/Contact';


function App() {
  const {user} =useAuth();
  return (
    <div>

        <AboutUs.js/>
        <home.js/>
        <Contact.js/>
    </div>
  );
}


export default App;
