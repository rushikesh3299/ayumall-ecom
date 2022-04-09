import "./navbar.css";
import { useProduct } from "../../context/product-context";
import { useState } from "react";

export const Navbar = () => {
  const [dispMobNav, setDispMobNav] = useState(false);
  const { showFilterMobileNav, setShowFilterMobileNav } = useProduct();
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
          <div className="nav-link">Home</div>
          <div className="nav-link">Shop Now</div>
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
          <div className="nav-icon-link nav-icon-link-login">
            <i className="fas fa-user-circle"></i>
            <span className="nav-icon-name">Login</span>
          </div>
          <div className="nav-icon-link">
            <i className="fas fa-heart"></i>
            <span className="nav-icon-name">WishList</span>
          </div>
          <div className="nav-icon-link">
            <i className="fas fa-shopping-cart"></i>
            <span className="nav-icon-name">Cart</span>
          </div>
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
