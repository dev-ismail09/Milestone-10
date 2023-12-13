import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

const Register = () => {

    const [formerror, setFormError] = useState('');
    const [success, setSuccess] = useState('');

    const auth = getAuth(app);

    const handleSubmit = event =>{
        event.preventDefault();
        setSuccess('');
        setFormError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(name, email, password)

        if(!/(?=.*?[A-Z])/.test(password)){
            setFormError('At least one upper case');
            return;
        }
        else if(!/(?=.*?[a-z])/.test(password)){
            setFormError('At least one lower case English letter');
            return;
        }
        else if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
            setFormError('At least one special character');
            return;
        }
    


        createUserWithEmailAndPassword(auth, email, password, name)
        .then(result =>{
            const signUpUser = result.user;
            console.log(signUpUser);
            setSuccess('Crate Account Successfully');
            setFormError('');
            event.target.reset();

            updateProfileData(result.user, name)
            
        })
        .catch(error =>{
            console.log(error.message);
            setFormError(error.message);
            setSuccess('');
        })

    }

    const updateProfileData = (user, name) =>{
        updateProfile(user, {
            displayName: name
        })
        .then(()=>{
            console.log('user name update')
        })
        .catch(error=>{
            console.log(error.message)
        })
    }



  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
    
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
                <Link to='/login'>Already have a account? Login!</Link>
              </label>
                <p className="text-red-500">{formerror}</p>
                <p className="text-green-400">{success}</p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
