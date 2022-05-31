import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import"./Login.css"
import { auth } from '../Firebase';




const Login = () => {
  
  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
 
  const signIn = (e) => {
    e.preventDefault();
    
   auth.signInWithEmailAndPassword(email, password)
   .then((auth)=>{
     history.push("/");
  })
  .catch((error) => alert(error.message));

  };

  const Register = (e) =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth)=>{
      if (auth) {
        history.push("/");
      }
    })
    .catch((error)=>alert(error.message));
  };
  
  return (
  
    <div className='Login'>

      <Link to ="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
      alt="amazon logo" className='Login_logo'
      />
      </Link>
      <div className='Login_container'>
        <h1>Sign in</h1>
        <form>
        <h5>E-mail</h5>
        <input type="text" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}/>

        <h5>Password</h5>
        <input type="password" 
        value={password}
         onChange={(e)=> setPassword(e.target.value)}/>

        <button type='submit' className='login_button'onClick={signIn}>Sign in</button>
        </form>
        <p>By continuing, you agree to Amazon's fake clone Conditions of Use and Privacy Notice.</p>
        <button className='login_registerButton'onClick={Register}>
          Register
          </button>
      </div>
    </div>
  )
}

export default Login;
