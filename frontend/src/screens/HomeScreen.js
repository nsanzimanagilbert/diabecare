import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Container } from "react-bootstrap";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const service = [
    {
      title: "Diet",
      description: "Learn the best foods for you",
      cover: `image`
    },
     {
      title: "Physical Activity",
      description: "Excerses to make you fit",
      cover: `image`

    },
     {
      title: "Glucose Tracker",
      description: "Know your glucose levels"
    },
    {
      title: "Glucose Tracker",
      description: "Know your glucose levels",
      cover: `image`
    }
  ]

  return (
    <Container className="page-wrapper">
      <h2>welcome</h2>
      {loading ? 
        <Loader/>
       : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="flex flex-center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default HomeScreen;
