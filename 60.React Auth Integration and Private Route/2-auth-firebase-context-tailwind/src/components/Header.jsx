import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handlelogOut = () => {
    logOut()
      .then(() => {
        console.log("sign Out");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl">Auth Mater</button>
        <Link className="btn btn-ghost text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost text-xl" to="/orders">
          Orders
        </Link>
        {user && <Link className="btn btn-ghost text-xl" to="/profile">
          Profile
        </Link>}
        <Link className="btn btn-ghost text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost text-xl" to="/register">
          Register
        </Link>
        {user ? (
          <div>
            <span>{user.email}</span>
            <button onClick={handlelogOut} className="btn btn-xs">
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/login">Sign In</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
