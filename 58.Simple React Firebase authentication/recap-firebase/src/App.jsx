import { useState } from "react";
import "./App.css";
import { GithubAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  const handlerGoogleSignUp = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const loginUser = result.user;
        setUser(loginUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handlerGithubSignUp = () => {
    signInWithPopup(auth , GithubProvider)
    .then(result => {
      const loginUser = result.user;
      setUser(loginUser);
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handlerSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("SignOut");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Vite + React</h1>
      <div className="card">
        {user ? (
          <button onClick={handlerSignOut}>Sign Out</button>
        ) : (
          <div>
            <button onClick={handlerGoogleSignUp}>Sign Up</button>
            <button onClick={handlerGithubSignUp}>Sign Up With GitHub</button>
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
    </div>
  );
}

export default App;
