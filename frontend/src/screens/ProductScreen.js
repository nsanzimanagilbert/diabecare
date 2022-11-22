import React, { useState, useEffect } from "react";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const countInStock = Number(product.countInStock);
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Back
      </Link>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error} </Message>
      ) : (
        <Row>
          <Col md={3}>
            <Image src={product.image} alt={product.description} fluid />
          </Col>
          <Col md={9}>
            <ListGroup variant="flush">
              
                <h3>{product.name}</h3>
            
              
              <Row>
                {product.description}
              </Row>
              <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className="btn btn-block"
                    type="button"
                    disabled
                  >
                    Take survey
                  </Button>
                </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
