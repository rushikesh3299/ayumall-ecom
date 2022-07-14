import React from "react";
import "./singleproduct.css";
import toast from "react-hot-toast";
import { Rating } from "../../components/rating/Rating";
import { useParams } from "react-router-dom";
import { useProduct, useCart, useLogin, useWishlist } from "../../context";
import { useNavigate } from "react-router-dom";

export const SingleProduct = () => {
  const { productId } = useParams();
  const { initialProductList } = useProduct();
  const { cartItems, addToCart } = useCart();
  const { userData } = useLogin();
  const navigate = useNavigate();
  const { addItemToWishlist } = useWishlist();
  const currentProduct = initialProductList.find(
    (product) => product._id === productId
  );

  const addToCartHandler = (product) => {
    if (userData.isLoggedIn) {
      addToCart(product);
    } else {
      toast("Please login first", {
        duration: 2000,
        position: "top-right",
      });
      navigate("/login");
    }
  };

  return (
    <div className="single-product">
      <div className="single-product-img">
        <img src={currentProduct.image} />
      </div>
      <div className="single-product-info">
        <div className="single-product-title">{currentProduct.title}</div>
        <div className="single-product-brand">{currentProduct.brand}</div>
        <div className="single-product-rating">
          <Rating productRating={currentProduct.ratings} />
        </div>
        <div className="single-product-price">
          Rs. {currentProduct.price} (upto 10% discount)
        </div>
        <div className="single-product-excluinfo">
          <i className="fas fa-truck"></i>
          <span>
            Fast delivery{" "}
            {currentProduct.fastDelivery ? "available" : "not available"}
          </span>
        </div>
        <div className="single-product-excluinfo">
          <i className="fas fa-check-square"></i>
          <span>Price inclusive of GST</span>
        </div>
        <div className="single-product-excluinfo">
          <i className="fas fa-cubes"></i>
          <span>
            {currentProduct.inStock ? "In stock" : "Currently not available"}
          </span>
        </div>
        <div className="single-product-btns">
          {cartItems.find((prod) => currentProduct._id === prod._id) ? (
            <button
              className="single-product-btn-cart"
              onClick={() => navigate("/cart")}
            >
              <i className="fas fa-shopping-cart"></i>
              Go to Cart
            </button>
          ) : (
            <button
              className="single-product-btn-cart"
              onClick={() => addToCartHandler(currentProduct)}
            >
              <i className="fas fa-shopping-cart"></i>
              Add to cart
            </button>
          )}
          {cartItems.find((prod) => currentProduct._id === prod._id) ? (
            <button
              className="single-product-btn-wish"
              onClick={() => navigate("/wishlist")}
            >
              <i className="fas fa-heart"></i>
              Go to wishlist
            </button>
          ) : (
            <button
              className="single-product-btn-wish"
              onClick={() => addItemToWishlist(currentProduct)}
            >
              <i className="fas fa-heart"></i>
              Add to wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
