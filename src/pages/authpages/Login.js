import React from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginHandler } from "../../services/login-handler";
import { useLogin } from "../../context/index";

export const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: null,
    password: null,
  });
  const [isPasswdVisible, setIsPasswdVisible] = useState(false);
  const { userData, setUserData } = useLogin();
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <img className="login-img" src="images/AyuMall.png" alt="Ayumall logo" />
      <h2>WelCome!</h2>
      <h3>Enter Your info below to Login</h3>
      <form
        className="login-inputs"
        onSubmit={(e) => {
          e.preventDefault();
          loginHandler(loginFormData, userData, setUserData, navigate);
        }}
      >
        <input
          type="text"
          className="userid"
          placeholder="User ID"
          onChange={(e) =>
            setLoginFormData({ ...loginFormData, email: e.target.value })
          }
        />
        <div className="paswword-field">
          <input
            type={isPasswdVisible ? "text" : "password"}
            name="passwd"
            id=""
            placeholder="Password"
            onChange={(e) =>
              setLoginFormData({ ...loginFormData, password: e.target.value })
            }
          />
          <span
            className="passwd-visible"
            onClick={() => setIsPasswdVisible(!isPasswdVisible)}
          >
            {isPasswdVisible ? (
              <i className="far fa-eye"></i>
            ) : (
              <i className="far fa-eye-slash"></i>
            )}
          </span>
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
        <button
          className="login-btn dummy"
          onClick={(e) =>
            setLoginFormData({
              ...loginFormData,
              email: "test@gmail.com",
              password: "test123",
            })
          }
        >
          Login with dummy creds
        </button>
        <div className="login-footer">
          <div>
            <a href="#">Forgot Password?</a>
          </div>
          <div>
            New to AyuMall? <NavLink to="/signup">Sign Up</NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};
