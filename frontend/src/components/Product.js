import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className="card card-product">
      <Link to={`/service/${product._id}`}>
        <img src={product.image} alt="" />
        <div className="card-description">
          <h4>{product.name}</h4>
          <p>{product.description}</p>
        </div>
        {/* <Rating value={product.rating} text={`${product.numReviews} reviews`} /> */}
      </Link>
    </div>
  );
};

export default Product;
