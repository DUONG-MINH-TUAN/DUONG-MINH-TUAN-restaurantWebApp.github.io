import React from 'react';
import { useAuth } from "../context/AuthContext";
import logoGoogle from '../assets/img/logo-google-2.svg';
import { Link } from 'react-router-dom';
function SignUp() {
  const { updateRegisterInfor,
          registerInfor, 
          isRegisterLoading,
          registerUser,
          registerError,
          setRegisterError} = useAuth(); 
  const handleSignUp = async (e) => {
    
    // Kiểm tra password và confirmed password có khớp không
    if (registerInfor.password !== registerInfor.confirmedPassword) {
      setRegisterError("Passwords do not match!");
      return;
    }
    await registerUser();
};
  return (
        <section>
        <div className="form-box register-box">
            <div className="form-value">
                <form onSubmit={handleSignUp}>
                    <h2>Sign Up</h2>
                    <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input 
                            type="email" 
                            value={registerInfor.email}                      
                            onChange={(e)=> updateRegisterInfor({...registerInfor, email: e.target.value})}
                            required
                        />
                        <label htmlFor="">Email</label>

                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input 
                            type="password" 
                            value={registerInfor.password}
                            onChange={(e) => updateRegisterInfor({...registerInfor,password: e.target.value})}
                            required
                        />
                        <label htmlFor="">Password</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input 
                            type="password"
                            value={registerInfor.confirmedPassword}
                            onChange={(e)=>updateRegisterInfor({...registerInfor,confirmedPassword: e.target.value})} 
                            required
                        />
                        <label htmlFor="">Confirmed Password</label>
                    </div>
                    <button type="submit">Sign Up</button>

                    {/* alert controller */}
                    <div>
                    {registerError && (
                      <div className="alert alert-danger"> {/* Thêm class CSS tùy ý */}
                        <p>{registerError}</p>
                      </div>
                        )}
                       
                    </div>

                    {/* <!-- create two lines and one word between them --> */}
                    <div className="line-with-text"> 
                        <span className="line"></span>
                        <span className="text">OR</span>
                        <span className="line"></span>
                    </div>
                    <div className="register">
                      <p>
                        Already have an account?  <Link to="/login">Sign In</Link>
                      </p>
                      
                    </div>
                    
                    <button className="google-button"> 
                            <img src={logoGoogle} alt=""/>
                            Sign In with Google
                    </button>    

                </form>

            </div>
        </div>
    </section>
  );
};

export default SignUp
