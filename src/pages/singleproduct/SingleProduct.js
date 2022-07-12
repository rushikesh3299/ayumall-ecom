import React from "react";
import "./singleproduct.css";
import { Rating } from "../../components/rating/Rating";
import { useParams } from "react-router-dom";
import { useProduct } from "../../context";

export const SingleProduct = () => {
  const { productId } = useParams();
  const { initialProductList } = useProduct();
  const individualProduct = initialProductList.find(
    (product) => product._id === productId
  );
  console.log(productId, initialProductList);

  return (
    <div className="single-product">
      <h2>Sorry this page is still underconstruction...!</h2>
      <div className="single-product-img">
        <img src={individualProduct.image} />
      </div>
      <div className="single-product-info">
        <div className="single-product-title">{individualProduct.title}</div>
        <div className="single-product-brand">{individualProduct.brand}</div>
        <div className="single-product-rating">
          <Rating productRating={individualProduct.ratings} />
        </div>
        <div className="single-product-price">{individualProduct.price}</div>
      </div>
    </div>
  );
};
