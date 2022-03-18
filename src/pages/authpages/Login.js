import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login-container">
      <img
        className="login-img"
        src="https://ayumall-screens.netlify.app/Assets/AyuMall.png"
        alt="Ayumall logo"
      />
      <h2>WelCome!</h2>
      <h3>Enter Your info below to Login</h3>
      <div className="login-inputs">
        <input type="text" className="userid" placeholder="User ID" />
        <input type="password" name="passwd" id="" placeholder="Password" />
        <button className="login-btn">Login</button>
        <div className="login-footer">
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
