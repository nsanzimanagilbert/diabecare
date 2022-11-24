import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import { listAllGlucose } from "../actions/glucoseActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Container } from "react-bootstrap";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const glucoseList = useSelector((state) => state.glucoseList)
  const {glucose} = glucoseList;
  
  // useEffect(() => {
  //   dispatch(listProducts());
  //   dispatch(listAllGlucose)
  // }, [dispatch]);

  const service = [
    {
      name: "Diet",
      description: "Learn the best foods for you",
      image: '/images/diet.png',
      link:'/diet'
    },
     {
      name: "Physical Activity",
      description: "Excerses to make you fit",
      image: 'images/exercise.png',
      link:'/physical-activity'

    },
    {
      name: "Glucose Tracker",
      description: "Know your glucose levels",
      image: 'images/glucose.png',
      link:'/glucose'
    },
    {
      name: "Mental Health Wellbeing",
      description: "Track your mental health",
      image: 'images/mental.jpeg',
      link:'/glucose'
    }
  ]
  return (
    <Container className="page-wrapper">
      <h2 style={{margin:"40px",textTransform:"none"}}>Keep your diabetes in check!</h2>
      {loading ? 
        <Loader/>
       : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="container" style={{marginTop:"40px"}}>
          <div className="row">
            {service.map((product) => (
            <Product key={product._id} product={product} />
          ))}
          </div>
          
        </div>
      )}
    </Container>
  );
};

export default HomeScreen;