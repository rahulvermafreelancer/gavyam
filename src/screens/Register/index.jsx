import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import "./index.css";
import googleLogo from "../../assets/google.png";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <>
      <div className="login-main-container">
        <div className="login-sub-cotainer">
          <div className="input-field-div">
            <label className="font-regular font-bold">Name:</label>
            <input
              type="text"
              className="input-box font-regular"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
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
              <p className="font-regular ml-1">Register with Google</p>
            </div>
          </div>
          <div className="input-field-div">
            <Link
              to="/reset"
              className="font-regular font-bold forget-password"
            >
              Forget Password
            </Link>
            <button className="login-btn" onClick={register}>
              Register
            </button>
          </div>
          <div className="mt-2 font-regular">
            Already have an account?{" "}
            <Link to="/login" className="font-regular font-bold">
              Login{" "}
            </Link>
            now.
          </div>
        </div>
      </div>
    </>
  );
};
