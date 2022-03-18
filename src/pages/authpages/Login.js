import React from "react";
import "./login.css";

function Login() {
  return (
    <div class="login-container">
      <img
        class="login-img"
        src="https://ayumall-screens.netlify.app/Assets/AyuMall.png"
        alt="Ayumall logo"
      />
      <h2>WelCome!</h2>
      <h3>Enter Your info below to Login</h3>
      <div class="login-inputs">
        <input type="text" class="userid" placeholder="User ID" />
        <input type="password" name="passwd" id="" placeholder="Password" />
        <button class="login-btn">Login</button>
        <div class="login-footer">
          <div>
            <a href="#">Forgot Password?</a>
          </div>
          <div>New to AyuMall? Sign Up</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
