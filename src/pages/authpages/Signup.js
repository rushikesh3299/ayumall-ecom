import React from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signupHandler } from "../../services/signup-handler";
import { useLogin } from "../../context/index";

export const Signup = () => {
  const [signupFormData, setSignupFormData] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmPassword: null,
  });
  const { userData, setUserData } = useLogin();

  const navigate = useNavigate();
  return (
    <div className="login-container">
      <img className="login-img" src="images/AyuMall.png" alt="Ayumall logo" />
      <h2>WelCome!</h2>
      <h3>Enter info below to create Account</h3>
      <form
        className="login-inputs"
        onSubmit={(e) => {
          e.preventDefault();
          signupHandler(signupFormData, userData, setUserData, navigate);
        }}
      >
        <input
          type="text"
          className="first-name"
          placeholder="First Name"
          onChange={(e) =>
            setSignupFormData({ ...signupFormData, firstName: e.target.value })
          }
        />
        <input
          type="text"
          className="last-name"
          placeholder="Last Name"
          onChange={(e) =>
            setSignupFormData({ ...signupFormData, lastName: e.target.value })
          }
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          onChange={(e) =>
            setSignupFormData({ ...signupFormData, email: e.target.value })
          }
        />
        <input
          type="password"
          name="passwd"
          id="password"
          placeholder="Enter Password"
          onChange={(e) =>
            setSignupFormData({ ...signupFormData, password: e.target.value })
          }
        />
        <input
          type="password"
          name="confirm-passwd"
          id="confirmPassword"
          placeholder="Confirm Password"
          onChange={(e) =>
            setSignupFormData({
              ...signupFormData,
              confirmPassword: e.target.value,
            })
          }
        />
        {signupFormData.password != signupFormData.confirmPassword && (
          <p className="match-password">Passwords are not matching</p>
        )}
        <button className="login-btn">Sign Up</button>
        <div className="login-footer">
          <div>
            Already have Account? <NavLink to="/login">Login</NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};
