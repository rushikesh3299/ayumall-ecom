import React from "react";
import "./login.css";

export const Signup = () => {
  return (
    <div className="login-container">
      <img className="login-img" src="images/AyuMall.png" alt="Ayumall logo" />
      <h2>WelCome!</h2>
      <h3>Enter info below to create Account</h3>
      <div className="login-inputs">
        <input type="text" className="first-name" placeholder="First Name" />
        <input type="text" className="last-name" placeholder="Last Name" />
        <input type="email" className="email" placeholder="Your Email" />
        <input
          type="password"
          name="passwd"
          id=""
          placeholder="Enter Password"
        />
        <input
          type="password"
          name="confirm-passwd"
          id=""
          placeholder="Confirm Password"
        />
        <button className="login-btn">Sign Up</button>
        <div className="login-footer">
          <div>Already have Account? Login</div>
        </div>
      </div>
    </div>
  );
};
