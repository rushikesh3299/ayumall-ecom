import "./navbar.css";
import { useProduct } from "../../context/product-context";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [dispMobNav, setDispMobNav] = useState(false);
  const { setShowFilterMobileNav } = useProduct();
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
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/products">
            Shop Now
          </NavLink>
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
          <NavLink className="nav-icon-link nav-icon-link-login" to="/login">
            <i className="fas fa-user-circle"></i>
            <span className="nav-icon-name">Login</span>
          </NavLink>
          <NavLink className="nav-icon-link" to="/">
            <i className="fas fa-heart"></i>
            <span className="nav-icon-name">WishList</span>
          </NavLink>
          <NavLink className="nav-icon-link" to="/">
            <i className="fas fa-shopping-cart"></i>
            <span className="nav-icon-name">Cart</span>
          </NavLink>
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
            <div>Home</div>
          </div>
          <div className="mobile-nav-menu">
            <div>Shop Now</div>
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
          <div
            className="mobile-nav-menu"
            onClick={() => setShowFilterMobileNav(true)}
          >
            <div>Filter</div>
          </div>
        </div>
      </div>
    </div>
  );
};
