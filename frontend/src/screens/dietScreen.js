import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const dietScreen = () => {
  return (
    <Container>
        <div className='pageHeader'>
            <h2>Dietary Information</h2>

            <Form>
                <div className='col-12'>
                    <Form.Label htmlFor="disabledTextInput">
                    How often did you eat a portion of vegetables?
                    </Form.Label>

                    {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-3" style={{
                            display: 'block'
                        }}>
                            <Form.Check
                                type={type}
                                id="Never or very rarely"
                                label="Never or very rarely"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="Once a week or less often"
                                label="Once a week or less often"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="2-4 times a week"
                                label="2-4 times a week"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="1-2 times a week"
                                label="1-2 times a week"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="3 or more times a day"
                                label="3 or more times a day"
                            />

                        </div>
                    ))}

                    <Form.Label htmlFor="disabledTextInput">
                    How often did you eat a portion of fruit?
                    </Form.Label>

                    {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-3" style={{
                            display: 'block'
                        }}>
                            <Form.Check
                                type={type}
                                id="Never or very rarely"
                                label="Never or very rarely"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="Once a week or less often"
                                label="Once a week or less often"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="2-4 times a week"
                                label="2-4 times a week"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="1-2 times a week"
                                label="1-2 times a week"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="3 or more times a day"
                                label="3 or more times a day"
                            />

                        </div>
                    ))}


                    <Form.Label htmlFor="disabledTextInput">
                    How oftten did you drink sugary drinks?
                    • Include non-diet fizzy drinks, squashes, mixers, energy drinks, fruit juices or coffee, tea or other hot drinks with sugar or flavoured syrups.
                    </Form.Label>

                    {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-3" style={{
                            display: 'block'
                        }}>
                            <Form.Check
                                type={type}
                                id="Never or very rarely"
                                label="Never or very rarely"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="Once a week or less often"
                                label="Once a week or less often"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="2-4 times a week"
                                label="2-4 times a week"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="1-2 times a week"
                                label="1-2 times a week"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="3 or more times a day"
                                label="3 or more times a day"
                            />

                        </div>
                    ))}

                    <Form.Label htmlFor="disabledTextInput">
                    How often did you use full fat cheese and full-fat spread (butter or a full fat margarine), on your bread, potatoes, sandwiches or vegetables?
                    </Form.Label>

                    {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-3" style={{
                            display: 'block'
                        }}>
                            <Form.Check
                                type={type}
                                id="Never or very rarely"
                                label="Never or very rarely"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="Once a week or less often"
                                label="Once a week or less often"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="2-4 times a week"
                                label="2-4 times a week"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="1-2 times a week"
                                label="1-2 times a week"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="3 or more times a day"
                                label="3 or more times a day"
                            />

                        </div>
                    ))}

                    <Form.Label htmlFor="disabledTextInput">
                    How often did you eat processed meat?
                    </Form.Label>

                    {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-3" style={{
                            display: 'block'
                        }}>
                            <Form.Check
                                type={type}
                                id="Never or very rarely"
                                label="Never or very rarely"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="Once a week or less often"
                                label="Once a week or less often"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="2-4 times a week"
                                label="2-4 times a week"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="1-2 times a week"
                                label="1-2 times a week"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="3 or more times a day"
                                label="3 or more times a day"
                            />

                        </div>
                    ))}

                    <Form.Label htmlFor="disabledTextInput">
                    How often did you eat 'fast foods' from a take-away or in a restaurant?
                    </Form.Label>

                    {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-3" style={{
                            display: 'block'
                        }}>
                            <Form.Check
                                type={type}
                                id="Never or very rarely"
                                label="Never or very rarely"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="Once a week or less often"
                                label="Once a week or less often"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="2-4 times a week"
                                label="2-4 times a week"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="1-2 times a week"
                                label="1-2 times a week"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="3 or more times a day"
                                label="3 or more times a day"
                            />

                        </div>
                    ))}

                    <Form.Label htmlFor="disabledTextInput">
                    How often did you drink alcohol?
                    </Form.Label>

                    {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-3" style={{
                            display: 'block'
                        }}>
                            <Form.Check
                                type={type}
                                id="Never or very rarely"
                                label="Never or very rarely"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="Once a week or less often"
                                label="Once a week or less often"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="2-4 times a week"
                                label="2-4 times a week"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="1-2 times a week"
                                label="1-2 times a week"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="3 or more times a day"
                                label="3 or more times a day"
                            />

                        </div>
                    ))}

                    <Form.Label htmlFor="disabledTextInput">
                    How often did you eat a portion of bread?
                    </Form.Label>

                    {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-3" style={{
                            display: 'block'
                        }}>
                            <Form.Check
                                type={type}
                                id="Never or very rarely"
                                label="Never or very rarely"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="Once a week or less often"
                                label="Once a week or less often"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="2-4 times a week"
                                label="2-4 times a week"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="1-2 times a week"
                                label="1-2 times a week"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="3 or more times a day"
                                label="3 or more times a day"
                            />

                        </div>
                    ))}

                    <Form.Label htmlFor="disabledTextInput">
                    Are you concerned about your weight?
                    </Form.Label>

                    {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-3" style={{
                            display: 'block'
                        }}>
                            <Form.Check
                                type={type}
                                id="Not at all"
                                label="Not at all"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="A little concerned"
                                label="A little concerned"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="Moderately concerned"
                                label="Moderately concerned"
                            />
                            &nbsp;
                            <Form.Check
                                type={type}
                                id="Very concerned"
                                label="Very concerned"
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

export default dietScreen
