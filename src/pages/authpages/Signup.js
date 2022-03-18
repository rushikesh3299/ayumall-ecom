import React from "react";
import "./login.css";

function Signup() {
  return (
    <div class="login-container">
      <img
        class="login-img"
        src="https://ayumall-screens.netlify.app/Assets/AyuMall.png"
        alt="Ayumall logo"
      />
      <h2>WelCome!</h2>
      <h3>Enter info below to create Account</h3>
      <div class="login-inputs">
        <input type="text" class="first-name" placeholder="First Name" />
        <input type="text" class="last-name" placeholder="Last Name" />
        <input type="email" class="email" placeholder="Your Email" />
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
        <button class="login-btn">Sign Up</button>
        <div class="login-footer">
          <div>Already have Account? Login</div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
