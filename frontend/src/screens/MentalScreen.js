import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'



const MentalScreen = () => {
  return (
    <Container>
        <div className='pageHeader'>
            <h2>Mental Health </h2>

            <Form>
                <div className='col-12'>
                    <Form.Label htmlFor="disabledTextInput">
                    Over the last 2 weeks, how often have you had little interest or pleasure in doing things?
                    </Form.Label>

                    {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-4" style={{
                            display: 'block'
                        }}>
                            <Form.Check
                                type={type}
                                id="yes"
                                label="Not at all"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="No"
                                label="Several days	"
                            />

                            &nbsp;
                            <Form.Check
                                type={type}
                                id="More than half of the day"
                                label="More than half of the day"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="Nearly everyday"
                                label="Nearly everyday
                                "
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="3 or more times a day"
                                label="3 or more times a day"
                            />

                        </div>
                    ))}

                    <hr/>

                    <Form.Label htmlFor="disabledTextInput">
                    Over the last 2 weeks, how often have you had been feeling down, depressed or hopeless	
?
                    </Form.Label>

                    {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-4" style={{
                            display: 'block'
                        }}>
                            <Form.Check
                                type={type}
                                id="yes"
                                label="Not at all"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="No"
                                label="Several days	"
                            />

                            &nbsp;
                            <Form.Check
                                type={type}
                                id="More than half of the day"
                                label="More than half of the day"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="Nearly everyday"
                                label="Nearly everyday
                                "
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="3 or more times a day"
                                label="3 or more times a day"
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

export default MentalScreen
