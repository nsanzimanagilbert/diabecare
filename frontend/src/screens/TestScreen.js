import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Container } from 'react-bootstrap'

const TestScreen = () => {

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
        <HighchartsReact
        highcharts={Highcharts}
        options={{
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}}
        />
  </Container>
  )
}

export default TestScreen