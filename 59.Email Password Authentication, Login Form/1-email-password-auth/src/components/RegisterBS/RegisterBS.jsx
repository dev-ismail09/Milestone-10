import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import app from "../../firebase/firebase.config";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const RegisterBS = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

   const auth = getAuth(app);

   const handleSubmit = (event) =>{
      event.preventDefault();
      setError('');
      setSuccess('');
      const email = event.target.email.value;
      const password = event.target.password.value;
      const name = event.target.name.value;
      console.log(name, email, password);

      if(!/(?=.*[0-9])/.test(password)){
        setError('Minimum One Number');
        return;
      }

      createUserWithEmailAndPassword(auth, email, password, name)
      .then(resut => {
        const singUpUser = resut.user;
        console.log(singUpUser);
        event.target.reset();
        setError('');
        setSuccess('Create Successfully');
        
        updateUserData(resut.user, name)

      })
      .catch(error =>{
        console.log(error.message);
        setError(error.message);
        setSuccess('');
      })
   }

   const updateUserData = (user, name) =>{
    updateProfile(user, {
      displayName: name
    })
    .then(()=>{
      console.log('user name update')
    })
    .catch(error =>{
       setError(error.message)
    })
   }
   


  return (
    <div className="w-50 mx-auto mt-5">
      <h2>RegisterBS</h2>

      <form onSubmit={handleSubmit} className="custom-form">
      <div className="mb-3">
        <label htmlFor="text" className="form-label">Name</label>
        <input type="text" name="name" className="form-control" id="name" placeholder="Enter your Name" required/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" name="email" className="form-control" id="email" placeholder="Enter your email" required/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type={showPassword ? 'text' : 'password'} name="password" className="form-control" id="password" placeholder="Enter your password" required/>
        <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="rememberMe" />
        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <p className="text-danger">{error}</p>
      <p className="text-success">{success}</p>
    </form>
    <p>Already have a account? Please <Link to='/login'>Login</Link></p>
    </div>
  );
};

export default RegisterBS;
