import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import logoGoogle from '../assets/img/logo-google-2.svg';
import SignUp from './signup';
import { Link } from 'react-router-dom';
import styles from '../assets/css/login.module.css';
function Login() {
  const navigate = useNavigate();
  const {updateLoginInfor,loginInfor, isLoginLoading,login,loginError} = useAuth(); 
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      
      await login();
      
    } catch (error) {
      console.error('Error: ', error);
    }
    
};
 const handleLogo = () =>{
    navigate("/");
    return;
 }
    
  return (
    <div className={styles.loginTemplate}>
    <section >
      
            <div className={styles.formBox}>
              {/* <div className="formValue"> */}
                <form onSubmit={handleLogin}>
                          <h2 className={styles.logo} onClick={()=>{handleLogo()}}>TTT</h2>
                          <h2>Login</h2>
                        <div className={styles.inputbox}>
                          <ion-icon name="mail-outline"></ion-icon>
                          <input 
                                type="email" 
                                value={loginInfor.email}
                                
                                onChange={(e) => updateLoginInfor({...loginInfor,email: e.target.value})} 
                                required
                                placeholder="Email"/>
                          <label htmlFor="email">Email</label>
                        </div>
                        <div className={styles.inputbox}>
                          <ion-icon name="lock-closed-outline"></ion-icon>    
                          <input type="password" 
                                
                                value={loginInfor.password}
                                onChange={(e) => updateLoginInfor({...loginInfor,password:e.target.value})} 
                                required
                                placeholder="password"/>
                          <label htmlFor="password">Password</label>
                        </div>
                        <div className={styles.forget}>
                          <label className={styles.rememberMe}>
                            <input type="checkbox" id="remember" name="remember" />
                            <span>Remember Me</span>
                          </label>
                          <label className={styles.forgotPassword}>
                            <span>Forgot password</span>
                          </label>
                        </div>
                        <button  type ="submit" disabled={isLoginLoading}>
                          {
                            isLoginLoading ? "Loading...." : "Login"
                          }  
                        </button>
                        


                          {/* alert controller */}
                          
                          {loginError && (
                            <div className={`${styles.alert} ${styles.alertDanger}`}> 
                            {loginError.message &&  
                                loginError.message.split('\n').map((line, index) => (
                                          <p key={index}>{line}</p>  
                                    )
                                  )
                                
                              }
                              {loginError.email && <p>{loginError.email}</p>}
                                {loginError.password && <p>{loginError.password}</p>}
                            </div>
                            
                          )}
                        {/* create two lines and one word between them */}
                        <div className={styles.lineWithText}>
                          <span className={styles.line}></span>
                          <span className={styles.text}>OR</span>
                          <span className={styles.line}></span>
                        </div>
                        <div className={styles.register}>
                          <p>
                            Don't have an account?  <Link to="/signup" element= {<SignUp/>}>Register</Link>
                          </p>
                          
                        </div>
                        {/* <button className={styles.googleButton}>
                          <img src={logoGoogle} alt="" />
                          Sign In with Google
                        </button> */}
                </form>
                
              {/* </div> */}
          </div>
      
    </section>
                          </div>
  
  );
};

export default Login


