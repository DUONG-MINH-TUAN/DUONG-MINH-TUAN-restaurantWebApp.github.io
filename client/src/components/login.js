import React from 'react';
import { useAuth } from "../context/AuthContext";
import logoGoogle from '../assets/img/logo-google-2.svg';
import SignUp from './signup';
import { Link } from 'react-router-dom';
function Login() {
  const {updateLoginInfor,loginInfor, isLoginLoading,login,loginError} = useAuth(); 
    
  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={login}>
            <h2>Login</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input 
                    type="email" 
                    className="email" 
                    
                    onChange={(e) => updateLoginInfor({...loginInfor,email: e.target.value})} required/>
              <label htmlFor="">Email</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>    
              <input type="password" 
                    className="password"  
                    
                    onChange={(e) => updateLoginInfor({...loginInfor,password:e.target.value})} required/>
              <label htmlFor="">Password</label>
            </div>
            <div className="forget">
              <label className="remember-me">
                <input type="checkbox" id="remember" name="remember" />
                <span>Remember Me</span>
              </label>
              <label className="forgot-password">
                <span>Forgot password</span>
              </label>
            </div>
            <button type ="submit" disabled={isLoginLoading}>
              {
               isLoginLoading ? "Loading...." : "Login"
              }  
            </button>
            {loginError?.error && <alert><p>
              {loginError.message}
               </p></alert>}
            {/* create two lines and one word between them */}
            <div className="line-with-text">
              <span className="line"></span>
              <span className="text">OR</span>
              <span className="line"></span>
            </div>
            <div className="register">
              <p>
                Don't have an account?  <Link to="/signup" element= {<SignUp/>}>Register</Link>
              </p>
              
            </div>
            <button className="google-button">
              <img src={logoGoogle} alt="" />
              Sign In with Google
            </button>
          </form>
        </div>
      </div>
    </section>
  
  );
};

export default Login


