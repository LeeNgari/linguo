import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import {  signInWithEmailAndPassword, signInWithPopup, signInWithRedirect  } from 'firebase/auth';
import { GoogleAuthProvider, signInAnonymously } from "firebase/auth";
import {  onAuthStateChanged  } from "firebase/auth";
export default function LogIn({app, auth}){

    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const [email, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [value, setValue] = React.useState('')
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      }
    
  
      const onLogin = (e) => {
          e.preventDefault();
          signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              navigate("home")
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
          });
         
      }
      
        
      

      function anonymous(){
        console.log("fire")
                signInAnonymously(auth)
        .then(() => {
        
            console.log("ada")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
        });
      }
     
      

    return(
        <div className="log-in-page">
           <div className="title">
                 <img src="../assets/logo3.png" alt="logo" />
            </div>
           <form className="log-in-form">
               <div className="email-sign-in">
                    
                    <div>
                       <h6 className="register">Register Now!!</h6>
                        <label>Email:</label>
                        <input type="text" value={email} onChange={handleUsernameChange} className="email" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={handlePasswordChange} className="password"/>
                    </div>
                    <button type="submit" className="submit-button"  onClick={onLogin}>Create account</button>
                    <div className="sign-in"><h6>Already have an account sign in</h6></div>
                </div>
                <div className="google-sign-in"><button>Sign in with Google</button></div>
                <div className="anonymous"><button className=".submit-button" onClick={anonymous}>Sign in annonymously</button></div>
           </form>
           <div className="continue">
                <button className="continue-button">Skip this step</button>
            </div>
        </div>
    )
}