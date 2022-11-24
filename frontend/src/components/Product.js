import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className="col-md-4">
      <div className="card card-product" style={{margin:"30px auto",borderRadius:"40px",padding:"20px",width:"90%"}}>
      <Link to={product.link}>
        <img src={`${product.image}`} style={{padding:"20px",width:"90%",marginBottom:"20px"}} alt="" />

        <div className="card-description">
          <h4>{product.name}</h4>
          <p>{product.description}</p>
        </div>
        {/* <Rating value={product.rating} text={`${product.numReviews} reviews`} /> */}
      </Link>
    </div>
    </div>
    
  );
};

export default Product;