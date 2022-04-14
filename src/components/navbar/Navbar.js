import "./navbar.css";
import { useProduct, useLogin } from "../../context/index";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
export const Navbar = () => {
  const location = useLocation();
  const [dispMobNav, setDispMobNav] = useState(false);
  const { setShowFilterMobileNav } = useProduct();
  const { userData, setUserData } = useLogin();

  const logoutHandler = () => {
    setUserData({ ...userData, isLoggedIn: false, userToken: null });
    localStorage.removeItem("token");
  };
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left-items">
          <div className="navbar-menu-icon">
            <i
              className="fas fa-bars"
              onClick={() => setDispMobNav(() => true)}
            ></i>
          </div>
          <img
            src="images/AyuMallHZ0.png"
            className="navbar-ayumall-logo"
            alt="AyuMall logo"
          />
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/products">
            Shop Now
          </Link>
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
          {userData.isLoggedIn ? (
            <div
              className="nav-icon-link nav-icon-link-login"
              onClick={() => logoutHandler(userData, setUserData)}
            >
              <i className="fas fa-user-circle"></i>
              <span className="nav-icon-name">LogOut</span>
            </div>
          ) : (
            <Link className="nav-icon-link nav-icon-link-login" to="/login">
              <i className="fas fa-user-circle"></i>
              <span className="nav-icon-name">Login</span>
            </Link>
          )}
          <Link className="nav-icon-link" to="/">
            <i className="fas fa-heart"></i>
            <span className="nav-icon-name">WishList</span>
          </Link>
          <Link className="nav-icon-link" to="/">
            <i className="fas fa-shopping-cart"></i>
            <span className="nav-icon-name">Cart</span>
          </Link>
        </div>
      </div>

      <div
        className={dispMobNav ? "mobile-nav mobile-nav-display" : "mobile-nav"}
      >
        <div className="mobile-nav-container">
          <div className="mobile-nav-close">
            <i
              className="fas fa-times"
              onClick={() => setDispMobNav(() => false)}
            ></i>
          </div>
          <div className="mobile-nav-login">
            <i className="fas fa-user-circle"></i>
          </div>
        </div>
        <div className="mobile-nav-menu-container">
          <div className="mobile-nav-menu">
            {userData.isLoggedIn ? (
              <div onClick={() => logoutHandler(userData, setUserData)}>
                Logout
              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
          <div className="mobile-nav-menu">
            <Link to="/">Home</Link>
          </div>
          <div className="mobile-nav-menu">
            <Link to="/products">Shop Now</Link>
          </div>
          <div className="mobile-nav-menu">
            <div>Orders</div>
          </div>
          <div className="mobile-nav-menu">
            <div>Best Sellers</div>
          </div>
          <div className="mobile-nav-menu">
            <div>Trending</div>
          </div>
          {location.pathname === "/products" && (
            <div
              className="mobile-nav-menu"
              onClick={() => setShowFilterMobileNav(true)}
            >
              <div>Filter</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
