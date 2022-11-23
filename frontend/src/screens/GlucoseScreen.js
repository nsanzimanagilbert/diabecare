import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function GlucoseScreen() {
   const [isLoading, setLoading] = useState(false);
   const [qty, setQty] = useState(30);

  useEffect(() => {
    if (isLoading) {
      
        setLoading(false);
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  const handleIncrement = () =>{
    setQty( (qty)=> Number( qty + 1))
  }
  const handleDecrement = () =>{
    setQty( (qty)=> Number( qty - 1))
  }

  const [loading, setIsLoading] = useState(false)
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
    </Container>
  )
}

export default GlucoseScreen