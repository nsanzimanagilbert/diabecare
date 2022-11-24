import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { createGlucose } from '../actions/glucoseActions';
import axios from 'axios';
import Font, {Text} from 'react-font'
import { FaPlus, FaMinus, FaPlusCircle } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import ReactSpeedometer from "react-d3-speedometer";
import MedicineRecord from '../components/MedicineRecord';


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
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container>
      <div className='pageHeader'>
        <h3>Monitor You Glucose levels</h3>
      </div>
      <div className='row'> 
        <div className="col-6">
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

        </div>

        <div className="col-6">        
        
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

        
      </div>

      <div className="row">
        <div className="col-6">
          <Card className="mb-1" style={{ height: '50%'}}>
            <Card.Header>
              <Text style={{ fontWeight: "bold"}} className='mb-0'>Add Your Medications</Text>
            </Card.Header>
            <Card.Body>
              <MedicineRecord/>             
            </Card.Body>          
          </Card>
        </div>

        <div className="col-6">
          <Card className="mb-1" style={{ height: '50%'}}>
            <Card.Header>
              <Text style={{ fontWeight: "bold"}} className='mb-0'>How are you feeling?</Text>
            </Card.Header>
            <Card.Body className='flex'>
           
              <h3>&#129298;</h3>         
              <h3>&#128577;</h3>         
              <h3>&#128528;</h3>  
              <h3>&#128512;</h3>  
              <h3>&#128513;</h3>           
              
            </Card.Body>          
          </Card>
        </div>

        <div className='col-12'>
        <Card className="mb-5 mt-0" style={{ height: '50%'}}>
            <Card.Header>
              <Text style={{ fontWeight: "bold"}} className='mb-0'>Comment</Text>
            </Card.Header>
            <Card.Body >           
            <Form.Group className="mx-3" controlId="exampleForm.ControlTextarea1">
              {/* <Form.Label>Comments</Form.Label> */}
              <Form.Control as="textarea" rows={3} placeholder="leave your comment here....."/>
            </Form.Group>
            </Card.Body>          
          </Card>
        
        </div>     
        

      </div>

        
    </Container>
  )
}

export default GlucoseScreen