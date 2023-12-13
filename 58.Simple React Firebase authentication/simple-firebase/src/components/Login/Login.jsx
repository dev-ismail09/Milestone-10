import React, { useState } from "react";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        setUser(loginUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGithubSignIn = () =>{
    signInWithPopup(auth, GithubProvider)
    .then(result => {
        const loginUser = result.user;
        console.log(loginUser);
        setUser(loginUser);
    })
    .catch(error => {
        console.log("error", error.message)
    })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
        {/* user ? logout : sig in */}
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <div>
            <button onClick={handleGoogleSingIn}>Google Login</button>
            <button onClick={handleGithubSignIn}>GitHub Login</button>
        </div>
      )}
      {user && (
        <div>
          <h1>User: {user.displayName}</h1>
          <p>Email : {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
