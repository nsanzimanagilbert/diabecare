import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAllGlucose } from "../actions/glucoseActions";
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { format } from 'date-fns'

const RecordsScreen = () => {
    const dispatch = useDispatch();
  const glucoseList = useSelector((state) => state.glucoseList);
  const { loading, error, glucose } = glucoseList;

   useEffect(() => {
    dispatch(listAllGlucose())
  }, [dispatch]);

  const options = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: [1, 2, 3]
    }]
  }

  return (
    <Container>
        <div className='pageHeader'>
            <h3>The Records...</h3>
            <CardGroup>
            {glucose.map((record)=>{ return <div className=''>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{record.qty}</Card.Title>
                    <Card.Text>{record.createdAt}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                  
                </Card>
            </div>  
                         

            })}</CardGroup>
        </div>
        <div className="col-12">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
        </div>
      
    </Container>
  )
}

export default RecordsScreen
