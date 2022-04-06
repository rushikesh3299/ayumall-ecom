import "./products.css";
import { useProduct } from "../../context/product-context";

export const Products = () => {
  const { productList } = useProduct();

  return (
    <div className="product-list-section">
      {productList.map((item) => (
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
            <div className="product-card-rating-bar">
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star-half-alt"></i>
              </span>
              <span>
                <i className="far fa-star"></i>
              </span>
            </div>
            <button className="product-card-btn-add">Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};
