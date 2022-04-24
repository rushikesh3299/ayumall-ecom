import "./products.css";
import { Rating } from "../index";
import { useProduct, useLogin, useCart } from "../../context/index";

export const Products = () => {
  const { initialProductList, productState } = useProduct();
  const { userData } = useLogin();
  const { addToCart } = useCart();

  const addToCartHandler = (product) => {
    if (userData.isLoggedIn) {
      addToCart(product);
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

  return (
    <div className="product-list-section">
      {aboveRatedProducts.map((item) => (
        <div className="product-card" key={item._id}>
          <div className="product-card-img">
            <img src={item.image} alt="" />
            <i className="far fa-heart"></i>
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
            <button
              className="product-card-btn-add"
              onClick={() => addToCartHandler(item)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
