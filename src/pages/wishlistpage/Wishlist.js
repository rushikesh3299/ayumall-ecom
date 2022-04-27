import "./wishlist.css";
import { useWishlist, useCart } from "../../context/index";

export const Wishlist = () => {
  const { wishlistItems, removeItemFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  return (
    <div className="wishlist-container">
      {wishlistItems.length === 0 ? (
        <div className="wishist-section-empty">
          <h1>Your wishlist is empty</h1>
        </div>
      ) : (
        <div>
          <div className="wishlist-title">
            Your Wishlist has <span>{wishlistItems.length} items</span>
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
                    <button
                      className="product-card-btn-add"
                      onClick={() => {
                        removeItemFromWishlist(item._id);
                        addToCart(item);
                      }}
                    >
                      Move to cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
