import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Highcharts from 'highcharts'
import { CircularProgressbar, CircularProgressbarWithChildren,  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

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
        <div className="col-12">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
        </div>  
        <div className="row">
              
          <div className="col-6">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={options}
                />
          </div> 
          <div className="col-6 flex">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={options}
                />
          </div> 
        </div> 

    </Container>
  )
}

export default DashboardScreen