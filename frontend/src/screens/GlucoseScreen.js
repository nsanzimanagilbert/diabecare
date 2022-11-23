import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { createGlucose } from '../actions/glucoseActions';
import axios from 'axios';
import Font, {Text} from 'react-font'
import { FaPlus, FaMinus } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import ReactSpeedometer from "react-d3-speedometer"


function GlucoseScreen() {
   const [isLoading, setLoading] = useState(false);
   const [qty, setQty] = useState(75);
   const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      
        setLoading(false);
    }
  }, [isLoading]);



  const handleIncrement = () =>{
    setQty( (qty)=> Number( qty + 50))
  }
  const handleDecrement = () =>{
    setQty( (qty)=> Number( qty - 50))
    
  }

  const [loading, setIsLoading] = useState(false)
    const handleClick = async() => {
    await axios.post("/api/glucose", {name: 'nsanzimana gilbert', qty: qty})
  
  };
  return (
    <Container>
      <div className='pageHeader'>
        <h3>Monitor You Glucose levels</h3>
      </div>
      <div className='col-12' style={{
        alignItems: 'center',
      }}>
        <Card style={{ width: '18rem' }} className="mb-5">
          <form>
          <Card.Body>
            <InputGroup className="mb-3 glucose-form">
              <Button className='rounded-circle' variant="danger" onClick={handleDecrement}><FaMinus/></Button>
                <Form.Control className='glucose-input' value={`${qty} Mg/Dl`} font-Family='Viga'/>        
              <Button className='rounded-circle' variant="success" onClick={handleIncrement}><FaPlus/></Button>
            </InputGroup>

            <Button
              variant="info"
              className="rounded-circle"
              disabled={isLoading}
              buttonStyle={{borderRadius: 60}}
              onClick={!isLoading ? handleClick : null}
              type="submit"
              >
              {isLoading ? 'Submitting...' : 'Submit'}
            </Button>
          </Card.Body>
          </form>
          
        </Card>

        <ReactSpeedometer 
        className="mt-5"
        minValue={0}
        maxValue={315}
    value={qty}
    currentValueText="Glucose Level"
    segmentColors={[
      "#F1CA44",
      "#92F656",
      "#DAEB36",
      "#EA4335",
      "#FE0002",
    ]}
    customSegmentLabels={[
      {
        text: "Very Low",
        position: "OUTSIDE",
        color: "#555",
      },
      {
        text: "Normal",
        position: "OUTSIDE",
        color: "#555",
      },
      {
        text: "Border Line",
        position: "OUTSIDE",
        color: "#555",
      },
      {
        text: "High",
        position: "OUTSIDE",
        color: "#555",
      },
      {
        text: "Very High",
        position: "OUTSIDE",
        color: "#555",
      },
    ]}
  />

        
      </div>
        
    </Container>
  )
}

export default GlucoseScreen