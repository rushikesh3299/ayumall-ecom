import "./cart.css";
import { getCart } from "../../services/cartservices/getcart";
import { useLogin } from "../../context/index";
import { useEffect, useState } from "react";

export const Cart = () => {
  const { userData } = useLogin();
  const [cartData, setCartData] = useState({});

  return (
    <div className="cart-mgmt-container">
      <div className="cart-mgmt-title">My Cart</div>
      <div className="cart-mgmt-section">
        <div className="cart-mgmt-col1">
          <div className="cart-card">
            <div className="cart-card-img">
              <img
                src="https://www.sdlindia.com/consumerayurved/images/products/dp335cc332e2379db300fd92839ca6687a_crop.jpg"
                alt="cart image"
              />
            </div>
            <div className="cart-card-info">
              <div className="cart-card-title">Swamala</div>
              <div className="cart-card-brand">Dhootpapeshwar</div>
              <div className="cart-card-price">
                Rs.120 <span>Rs.138</span> (15% OFF)
              </div>
              <div className="cart-card-qty">
                <button className="cart-card-btn">+</button>
                <span>3</span>
                <button className="cart-card-btn">-</button>
              </div>
              <button className="cart-card-wishlist-btn">
                Move to Wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="cart-mgmt-col2">
          <div className="place-order-card">
            <div className="place-order-coupan">Coupans</div>
            <input
              className="place-order-coupan-input"
              type="text"
              placeholder="Enter Coupan code here"
            />
            <div className="price-details">
              <div className="price-details-title">Price Details( 2 items)</div>
              <div className="price-details-container">
                <div className="total-mrp">
                  <div>Total MRP</div>
                  <div>₹240.00</div>
                </div>
                <div className="discount">
                  <div>Discount on MRP</div>
                  <div>₹24</div>
                </div>
                <div className="shipping-chrg">
                  <div>Shipping Charges</div>
                  <div>
                    <span className="strike-text"></span>FREE
                  </div>
                </div>
                <div className="total-amount">
                  <div>Total Amount</div>
                  <div>₹240</div>
                </div>
              </div>
              <button className="place-order-btn">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
