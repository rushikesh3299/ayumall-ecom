import "./wishlist.css";
import { useWishlist } from "../../context/index";

export const Wishlist = () => {
  const { wishlistItems, removeItemFromWishlist } = useWishlist();
  return (
    <div className="wishlist-container">
      <div className="wishlist-title">
        Your Wishlist <span>{wishlistItems.length} items</span>
      </div>

      <div className="wishlist-section">
        {wishlistItems.map((item) => {
          return (
            <div className="product-card wishlist-card" key={item._id}>
              <div
                className="cart-item-remove"
                onClick={() => removeItemFromWishlist(item._id)}
              >
                &#x2716;
              </div>
              <div className="product-card-img">
                <img src={item.image} alt="" />
              </div>
              <div className="product-card-discription">
                <div className="product-card-name">{item.title}</div>
                <div className="product-card-brand">{item.brand}</div>
                <div className="product-card-price">
                  <div>{item.price}</div>
                  <div>(10% OFF)</div>
                </div>
                <div className="product-card-quantity">{item.weight}</div>
                <button className="product-card-btn-add">Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
