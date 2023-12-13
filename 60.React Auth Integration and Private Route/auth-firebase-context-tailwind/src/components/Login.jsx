import { getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import app from "../firebase/firebase.config";

const Login = () => {
    const [formError, setFormError] = useState('');
    const [success, setSuccess] = useState('');
    // const emailRef = useRef();

    const auth = getAuth(app);

    const handleSignIn = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('User Valid');
            setFormError('');

            sendVerificationEmail(result.user);
        })
        .catch(error =>{
            console.log(error.message);
            setFormError(error.message);
            setSuccess('');
        })
    }

    const sendVerificationEmail = (user) =>{
        sendEmailVerification(user)
        .then((result) =>{
            console.log(result)
            alert('Email verification sent!')
        })
        .catch(error =>{
            console.log(error.message);
        })
    }


    // const handleResetPassword = event =>{
    //     const email = emailRef.current.value;
    //     console.log(email);
    //     if(!email){
    //         alert('Please enter your email');
    //         return;
    //     }
    //     sendPasswordResetEmail(auth, email)
    //     .then(() =>{
    //         alert("Please Check your email")
    //     })
    //     .catch(error =>{
    //         console.log(error.message);
    //         setFormError(error.message);
    //     })

    // }
   

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
    
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to='/register'>Create New Account !</Link>
              </label>
              <p>Forget Password? <button className="btn btn-link">Reset Now</button></p>
              <p className="text-red-400">{formError}</p>
              <p className="text-green-400">{success}</p>
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
