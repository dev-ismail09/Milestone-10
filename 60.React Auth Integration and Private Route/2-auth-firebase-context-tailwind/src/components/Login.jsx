import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { signInWithPopup } from "firebase/auth";


const Login = () => {

  const { signIn, GoogleSignUp } = useContext(AuthContext);
  // console.log(signIn)


  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password)

    signIn(email, password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      form.reset();
    })
    .catch(error =>{
      console.error(error)
    })

  }

  const handleGoogleSignUp = () =>{
    GoogleSignUp()
     .then((result)=>{
      const loggedUser = result.user;
      console.log(loggedUser);
     })
     .catch(error =>{
      console.error(error)
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
                <Link to='/register'>Create New Account !</Link>
              </label>
              <p>Forget Password? <button className="btn btn-link">Reset Now</button></p>
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
           <button onClick={handleGoogleSignUp}>Google SignUp</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
