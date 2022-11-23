import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Highcharts from 'highcharts'
import { CircularProgressbar, CircularProgressbarWithChildren,  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function DashboardScreen() {
 

  return (
    <Container>
        <h1>Monitor your health status</h1>
       <div style={{ width: 200, height: 200 }} >
          <CircularProgressbarWithChildren value={67} styles={{
            trail: {
              strokeLinecap: 'butt',
              transform: 'rotate(-126deg)',
              transformOrigin: 'center center',
            },
           
            
            text: {
              fill: '#ddd',
            }
          }}
          
          strokeWidth={10}
           circleRatio={0.5}>
            <div style={{ fontSize: 20, marginTop: -5 }}>
              <strong>67</strong> Ml/g
            </div>
          </CircularProgressbarWithChildren>
          <Row>
            <div id='chartContainer'></div>
          </Row>
      </div>
    </Container>
  )
}

export default DashboardScreen