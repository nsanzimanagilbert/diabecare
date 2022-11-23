import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'



const PhysicalScreen = () => {
  return (
    <Container>
        <div className='pageHeader'>
            <h2>Physical activity</h2>

            <Form>
                <div className='col-12'>
                <Form.Label htmlFor="disabledTextInput">
                    Does your work involve vigorous-intensity activity that causes large
                    increases in breathing or heart rate like carrying or lifting heavy loads?

                </Form.Label>

                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-4" style={{
                        display: 'flex'
                    }}>
                        <Form.Check
                            type={type}
                            id="yes"
                            label="Yes"
                        />
                        &nbsp;
                        <Form.Check
                            type={type}
                            id="No"
                            label="No"
                        />


                    </div>
                ))}

                <Form.Label htmlFor="disabledTextInput">
                Do you walk or use a bicycle (pedal cycle) for at least 10 minutes continuously to get to and from places?

                </Form.Label>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-4" style={{
                        display: 'flex'
                    }}>
                        <Form.Check
                            type={type}
                            id="yes"
                            label="Yes"
                        />
                        &nbsp;
                        <Form.Check
                            type={type}
                            id="No"
                            label="No"
                        />


                    </div>
                ))}

                <Form.Label htmlFor="disabledTextInput">
                    Do you do any vigorous exercises that cause increase in breathing or heart rate like running or football, for at least 10 minutes continuously?

                </Form.Label>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-4" style={{
                        display: 'flex'
                    }}>
                        <Form.Check
                            type={type}
                            id="yes"
                            label="Yes"
                        />
                        &nbsp;
                        <Form.Check
                            type={type}
                            id="No"
                            label="No"
                        />


                    </div>
                ))}



                </div>


                <Button type="submit">Submit</Button>
            </Form>
        </div>
    </Container>
  )
}

export default PhysicalScreen
