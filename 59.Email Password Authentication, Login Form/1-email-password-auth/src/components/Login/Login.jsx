import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import app from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const emailRef = useRef();

   const auth = getAuth(app);

   const handleSubmit = (event) =>{
      event.preventDefault();
      setError('');
      setSuccess('');
      const email = event.target.email.value;
      const password = event.target.password.value;
      console.log(email, password);


      signInWithEmailAndPassword(auth, email, password)
      .then(resut => {
        const loggedUser = resut.user;
        console.log(loggedUser);
        event.target.reset();
        setError('');
        if(!loggedUser.emailVerified){
            alert('Please Verification your email')
        }
        sendVerificationEmail(resut.user);
        setSuccess('User Login successfully');
      })
      .catch(error =>{
        console.log(error.message);
        setError(error.message);
        setSuccess('');
      })
   }

   const sendVerificationEmail = (user) =>{
      sendEmailVerification(user)
      .then(result =>{
        console.log(result);
        alert('Plase Verification your email');
      })
   } 

   const handleResetPassword = event =>{

      const email = emailRef.current.value;
      console.log(email);
      if(!email){
        alert('Please provide your email');
        return;
      }
      sendPasswordResetEmail(auth, email)
      .then(()=>{
        alert('Please check your email')
      })
      .catch(error=>{
        console.log(error);
        setError(error.message)
      })

   }

  return (
    <div className="w-50 mx-auto mt-5">
      <h2>Login</h2>

      <form onSubmit={handleSubmit} className="custom-form">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" name="email" ref={emailRef} className="form-control" id="email" placeholder="Enter your email" required/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" name="password" className="form-control" id="password" placeholder="Enter your password" required/>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="rememberMe" />
        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <p className="text-danger">{error}</p>
      <p className="text-success">{success}</p>
    </form>
    <p>Forget Password? <button onClick={handleResetPassword} className="btn btn-link">Reset Password</button></p>
    <p>Now to this website? Please <Link to='/register-bs'>Register</Link></p>
    </div>
  );
};

export default Login;
