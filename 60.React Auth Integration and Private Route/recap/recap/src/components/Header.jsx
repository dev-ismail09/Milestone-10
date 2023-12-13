import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";


const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () =>{
      logOut()
      .then(()=>{
        console.log('sign out done')
      })
      .catch(error =>{
        console.error(error)
      })
    }

  return (
    <div>
      <div className="navbar bg-cyan-300 text-black">
        <button className="btn btn-ghost text-xl">Auth Master</button>
        <Link to='/'><button className="btn btn-ghost text-xl">Home</button></Link>
        <Link to='/login'><button className="btn btn-ghost text-xl">Login</button></Link>
        <Link to='/register'><button className="btn btn-ghost text-xl">Register</button></Link>
        <Link to='/profile'><button className="btn btn-ghost text-xl">Profile</button></Link>
        {
          user ? 
          <div>
            <span>{user.email}</span>
            <button onClick={handleSignOut} className="btn btn-xs ml-2">Sign Out</button>
          </div> 
          : 
          <Link to='/login'>Login</Link>
        }
      </div>
    </div>
  );
};

export default Header;
