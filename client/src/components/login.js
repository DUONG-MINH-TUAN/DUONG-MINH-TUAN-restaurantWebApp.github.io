import { useAuth } from "../context/AuthContext";

function Login(){
    const {updateLoginInfor,loginInfor, isLoginLoading,login,loginError} = useAuth(); 
    function handleReset(event){
      updateLoginInfor({username:"",password:""});
    }
    return (
    <form onSubmit={login}>
      <h1>Welcome to login page</h1>
      <label htmlFor ="username">Username: </label>
      <input 
      type="text" 
      className="username" 
      value={loginInfor.username} 
      onChange={(e) => updateLoginInfor({...loginInfor,username: e.target.value})}/> <br/>
      <label htmlFor ="password">Password: </label>
      <input type="text" 
      className="password"  
      value={loginInfor.password} 
      onChange={(e) => updateLoginInfor({...loginInfor,password:e.target.value})}/> <br/>
      <button type ="submit" disabled={isLoginLoading}> 
        {
          isLoginLoading ? "Loading...." : "Login"
        }
      </button>
        {loginError?.error && <alert><p>
          {loginError.message}
          </p></alert>}
          <br/>
      <button onClick={handleReset}>
        Reset
      </button>
    </form>
    ) ;

}

export default Login 