import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Login = () => {
    const { signInUser } = useContext(AuthContext)

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)


        signInUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
            setSuccess('Login Successfully')
            setError('')
        })
        .catch(error =>{
            console.error(error)
            setError(error.message)
            setSuccess('')
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
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
              <p><Link to='/register'>Register your account</Link> </p>
              </label>
              <p className="text-green-400">{success}</p>
              <p className="text-red-400">{error}</p>
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
