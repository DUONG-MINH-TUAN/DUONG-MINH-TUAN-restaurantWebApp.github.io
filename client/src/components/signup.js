import React from 'react';
import { useAuth } from "../context/AuthContext";
import logoGoogle from '../assets/img/logo-google-2.svg';
import { Link } from 'react-router-dom';
import styles from '../assets/css/login.module.css';
function SignUp() {
  const { updateRegisterInfor,
          registerInfor, 
          isRegisterLoading,
          registerUser,
          registerError,
          registerSuccess,} = useAuth(); 
  const handleSignUp = async (e) => {
    
    try{
      e.preventDefault();
    await registerUser();}
    catch(error){
      console.error('Error: ', error);
    }
};
  return (
    <div className={styles.loginTemplate}>
        <section>
        <div className={`${styles.formBox} ${styles.registerBox} `}>
            {/* <div className="form-value"> */}
                <form onSubmit={handleSignUp}>
                    <h2>Sign Up</h2>
                    <div className={styles.inputbox}>
                        <ion-icon name="mail-outline"></ion-icon>
                        <input 
                            type="email" 
                            value={registerInfor.email}                      
                            onChange={(e)=> updateRegisterInfor({...registerInfor, email: e.target.value})}
                            required
                            autoComplete="email"
                            placeholder="email"
                        />
                        <label htmlFor="">Email</label>

                    </div>
                    <div className={styles.inputbox}>
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input 
                            type="password" 
                            value={registerInfor.password}
                            onChange={(e) => updateRegisterInfor({...registerInfor,password: e.target.value})}
                            required
                            autoComplete="new-password"
                            placeholder="password"
                        />
                        <label htmlFor="">Password</label>
                    </div>
                    <div className={styles.inputbox}>
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input 
                            type="password"
                            value={registerInfor.confirmedPassword}
                            onChange={(e)=>updateRegisterInfor({...registerInfor,confirmedPassword: e.target.value})} 
                            required
                            autoComplete="new-password"
                            placeholder="confirmedPassword"
                        />
                        <label htmlFor="">Confirmed Password</label>
                    </div>
                    <button type="submit"disabled={isRegisterLoading}>
                    {
                    isRegisterLoading ? "Loading...." : "Register"
                    }  
                      </button>

                    {/* alert controller */}
                    
                    {registerError && (
                      <div className={`${styles.alert} ${styles.alertDanger}`}> 
                      {registerError.message && <p>{registerError.message}</p>}
                         {registerError.email && <p>{registerError.email}</p>}
                          {registerError.password && <p>{registerError.password}</p>}
                          {registerError.confirmedPassword && <p>{registerError.confirmedPassword}</p>}
                      </div>
                      
                        )}
                       {registerSuccess && (
                      <div className={`${styles.alert} ${styles.alertSuccess}`}> 
                      {registerSuccess.message && <p>{registerSuccess.message}</p>}
                      </div>                      
                        )}
                
                    {/* <!-- create two lines and one word between them --> */}
                    <div className={styles.lineWithText}> 
                        <span className={styles.line}></span>
                        <span className={styles.text}>OR</span>
                        <span className={styles.line}></span>
                    </div>
                    <div className={styles.register}>
                      <p>
                        Already have an account?  <Link to="/login">Sign In</Link>
                      </p>
                      
                    </div>
                    
                    <button className={styles.googleButton}> 
                            <img src={logoGoogle} alt=""/>
                            Sign In with Google
                    </button>    

                </form>

            {/* </div> */}
        </div>
    </section>
    </div>
  );
};

export default SignUp
