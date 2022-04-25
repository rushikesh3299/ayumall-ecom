import { useState } from "react";
import { useEffect } from "react";
import { useCart } from "../../context/index";
import "./cart.css";

export const Cart = () => {
  const [cartPrice, setCartPrice] = useState(0);
  const { cartItems, increaseItemQty, decreaseItemQty, removeItemFromCart } =
    useCart();

  useEffect(() => {
    setCartPrice(() =>
      cartItems.reduce((acc, curr) => {
        return parseInt(acc) + parseInt(curr.price) * curr.qty;
      }, 0)
    );
  }, [cartItems]);

  return (
    <div className="cart-mgmt-container">
      <div className="cart-mgmt-title">My Cart</div>
      <div className="cart-mgmt-section">
        <div className="cart-mgmt-col1">
          {cartItems.map((item) => {
            return (
              <div className="cart-card" key={item._id}>
                <div
                  className="cart-item-remove"
                  onClick={() => removeItemFromCart(item._id)}
                >
                  &#x2716;
                </div>
                <div className="cart-card-img">
                  <img src={item.image} alt="cart image" />
                </div>
                <div className="cart-card-info">
                  <div className="cart-card-title">{item.title}</div>
                  <div className="cart-card-brand">{item.brand}</div>
                  <div className="cart-card-price">{item.price} ₹</div>
                  <div className="cart-card-qty">
                    <button
                      className="cart-card-btn"
                      onClick={() => increaseItemQty(item._id)}
                    >
                      +
                    </button>
                    <span>{item.qty}</span>
                    <button
                      className="cart-card-btn"
                      onClick={() => decreaseItemQty(item)}
                    >
                      -
                    </button>
                  </div>
                  <button className="cart-card-wishlist-btn">
                    Move to Wishlist
                  </button>
                </div>
              </div>
            );
          })}
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
                  <div>{cartPrice}</div>
                </div>
                <div className="discount">
                  <div>Discount on MRP</div>
                  <div>10%</div>
                </div>
                <div className="shipping-chrg">
                  <div>Shipping Charges</div>
                  <div>
                    <span className="strike-text"></span>FREE
                  </div>
                </div>
                <div className="total-amount">
                  <div>Total Amount</div>
                  <div>{cartPrice - cartPrice / 10}</div>
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
