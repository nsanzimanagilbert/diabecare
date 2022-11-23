import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { createGlucose } from '../actions/glucoseActions';
import axios from 'axios';
import ReactSpeedometer from "react-d3-speedometer"


function GlucoseScreen() {
   const [isLoading, setLoading] = useState(false);
   const [qty, setQty] = useState(30);
   const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      
        setLoading(false);
    }
  }, [isLoading]);



  const handleIncrement = () =>{
    setQty( (qty)=> Number( qty + 1))
  }
  const handleDecrement = () =>{
    setQty( (qty)=> Number( qty - 1))
    
  }

  const [loading, setIsLoading] = useState(false)
    const handleClick = async() => {
    await axios.post("/api/glucose", {type: 'glucose', qty: qty})
  
  };
  return (
    <Container>
      <div className='pageHeader'>
      <h3>

      Monitor You Glucose levels
      </h3>
      </div>

      <InputGroup className="mb-3 glucose-form">
        <Button className='btn btn-minus' variant="outline-secondary" onClick={handleDecrement}>-</Button>
        <Form.Control className='glucose-input' value={`${qty} Mg/Dl`}/>
        <Button className='btn btn-plus' variant="outline-secondary" onClick={handleIncrement}>+</Button>
      </InputGroup>
      <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Submitting...' : 'Submit'}
    </Button>
    <Row>
            <div id='chartContainer'>
                <ReactSpeedometer maxValue={250} minValue={0} value={70} segments={1}/>
            </div>
          </Row>
    </Container>
  )
}

export default GlucoseScreen