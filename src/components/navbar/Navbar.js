import "./navbar.css";
import { useState } from "react";

function Navbar() {
  const [dispMobNav, setDispMobNav] = useState(false);

  return (
    <div>
      <div className="navbar">
        <div className="navbar-left-items">
          <a className="navbar-menu-icon" href="#">
            <i
              className="fas fa-bars"
              onClick={() => setDispMobNav(() => true)}
            ></i>
          </a>
          <img
            src="https://ayumall-screens.netlify.app/Assets/AyuMallHZ0.png"
            className="navbar-ayumall-logo"
            alt="AyuMall logo"
          />
          <a className="nav-link" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Shop Now
          </a>
        </div>
        <div className="navbar-right-items">
          <div className="navbar-search-container">
            <i className="fas fa-search"></i>
            <input
              type="text"
              className="navbar-search"
              placeholder="Search here"
            />
          </div>
          <a className="nav-icon-link nav-icon-link-login" href="#">
            <i className="fas fa-user-circle"></i>
            <span className="nav-icon-name">Login</span>
          </a>
          <a className="nav-icon-link" href="#">
            <i className="fas fa-heart"></i>
            <span className="nav-icon-name">WishList</span>
          </a>
          <a className="nav-icon-link" href="#">
            <i className="fas fa-shopping-cart"></i>
            <span className="nav-icon-name">Cart</span>
          </a>
        </div>
      </div>

      <div
        className={dispMobNav ? "mobile-nav mobile-nav-display" : "mobile-nav"}
      >
        <div className="mobile-nav-container">
          <a href="#" className="mobile-nav-close">
            <i
              className="fas fa-times"
              onClick={() => setDispMobNav(() => false)}
            ></i>
          </a>
          <div className="mobile-nav-login">
            <i className="fas fa-user-circle"></i>
          </div>
        </div>
        <div className="mobile-nav-menu-container">
          <div className="mobile-nav-menu">
            <a href="#">Home</a>
          </div>
          <div className="mobile-nav-menu">
            <a href="#">Shop Now</a>
          </div>
          <div className="mobile-nav-menu">
            <a href="#">Orders</a>
          </div>
          <div className="mobile-nav-menu">
            <a href="#">Best Sellers</a>
          </div>
          <div className="mobile-nav-menu">
            <a href="#">Trending</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
