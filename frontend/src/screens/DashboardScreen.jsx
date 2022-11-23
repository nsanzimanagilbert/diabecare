import React from 'react'
import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Highcharts from 'highcharts'
import { CircularProgressbar, CircularProgressbarWithChildren,  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';

import ReactSpeedometer from "react-d3-speedometer"

function DashboardScreen() {
  return (
    <Container>
        <h1>Monitor your health status</h1>
          <Row>
            <div id='chartContainer'>
                <ReactSpeedometer maxValue={250} minValue={0} value={70} segments={1}/>
            </div>
          </Row>
    </Container>
  )
}

export default DashboardScreen