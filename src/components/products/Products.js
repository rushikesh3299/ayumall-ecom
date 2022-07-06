import "./products.css";
import { Rating } from "../index";
import toast from "react-hot-toast";
import {
  useProduct,
  useLogin,
  useCart,
  useWishlist,
} from "../../context/index";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const { initialProductList, productState } = useProduct();
  const { userData } = useLogin();
  const { cartItems, addToCart } = useCart();
  const { addItemToWishlist } = useWishlist();
  const navigate = useNavigate();

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

  const sortProducts = (sortBy, productList) => {
    if (sortBy === "HIGH_TO_LOW")
      return [...productList].sort((a, b) => b.price - a.price);
    else return [...productList].sort((a, b) => a.price - b.price);
  };

  const categorizeProducts = (showCategory, productList) => {
    return [...productList].filter((item) =>
      showCategory.includes(item.categoryName)
    );
  };

  const aboveRateProducts = (showRating, productList) => {
    return [...productList].filter((item) => item.ratings >= showRating);
  };

  const brandWiseProducts = (showBrand, productList) => {
    return [...productList].filter((item) => item.brand === showBrand);
  };

  const sortedProducts = productState.sortBy
    ? sortProducts(productState.sortBy, initialProductList)
    : [...initialProductList];

  const categorizedProducts = productState.showCategory.length
    ? categorizeProducts(productState.showCategory, sortedProducts)
    : [...sortedProducts];

  const aboveRatedProducts =
    productState.showRating > 0
      ? aboveRateProducts(productState.showRating, categorizedProducts)
      : [...categorizedProducts];

  const brandWisedProducts = productState.showBrand
    ? brandWiseProducts(productState.showBrand, aboveRatedProducts)
    : [...aboveRatedProducts];

  return (
    <div className="product-list-section">
      {brandWisedProducts.map((item) => (
        <div className="product-card" key={item._id}>
          <div className="product-card-img">
            <img src={item.image} alt="" />
            <i
              className="far fa-heart"
              onClick={() => addItemToWishlist(item)}
            ></i>
          </div>
          <div className="product-card-discription">
            <div className="product-card-name">{item.title}</div>
            <div className="product-card-brand">{item.brand}</div>
            <div className="product-card-price">
              <div>{item.price}Rs</div>
              <div>(15% OFF)</div>
            </div>
            <div className="product-card-quantity">{item.weight}</div>
            <Rating productRating={item.ratings} />
            {cartItems.find((prod) => item._id === prod._id) ? (
              <button
                className="product-card-btn-add"
                onClick={() => navigate("/cart")}
              >
                Go to Cart
              </button>
            ) : (
              <button
                className="product-card-btn-add"
                onClick={() => addToCartHandler(item)}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
