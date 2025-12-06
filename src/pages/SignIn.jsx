import { useState } from "react";
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignIn({ onSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async () => {
    try {
      let userCredential;
      if (isSignUp) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      }
      onSignIn(userCredential.user);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="sign-in-container" style={{textAlign:"center"}}>
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <br/>
      <br/>
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <br/>
      <br/>
      <button className="buttons" onClick={handleAuth}>{isSignUp ? "Sign Up" : "Sign In"}</button>
      <p onClick={() => setIsSignUp(!isSignUp)} style={{ cursor: "pointer", color: "blue" }}>
        {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
      </p>
    </div>
  );
}