import React, { useEffect, useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  signInWithGoogle,
  loginWithEmailAndPassword,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import googleLogo from "../../assets/google.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <>
      <div className="login-main-container">
        <div className="login-sub-cotainer">
          <div className="input-field-div">
            <label className="font-regular font-bold">Email:</label>
            <input
              type="text"
              className="input-box font-regular"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
          </div>
          <br />
          <div className="input-field-div">
            <label className="font-regular font-bold">Password:</label>
            <input
              type="password"
              className="input-box"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="input-field-div">
            <div className="google-btn" onClick={signInWithGoogle}>
              <img src={googleLogo} width="10%" />
              <p className="font-regular ml-1">Sign In with Google</p>
            </div>
          </div>
          <div className="input-field-div">
            <Link
              to="/reset"
              className="font-regular font-bold forget-password"
            >
              Forget Password
            </Link>
            <button
              className="login-btn"
              onClick={() => loginWithEmailAndPassword(email, password)}
            >
              Login
            </button>
          </div>
          <div className="mt-2 font-regular">
            Don't have an account?{" "}
            <Link to="/register" className="font-regular font-bold">
              Register{" "}
            </Link>
            now.
          </div>
        </div>
      </div>
    </>
  );
};
