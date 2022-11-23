import React from 'react'
import { Container } from 'react-bootstrap'
import "./screenstyle.css"
import { Link } from 'react-router-dom'
import ProgressMap from '../components/ProgessMap'
import Profile from '../components/Profile'


const PhysicalScreen = () => {
  return (
    <Container>
        <div className='pageHeader'>
            <h2>Physical activity</h2>
        </div>
        <div>
            
          <section className="dashboard d-flex">
            <Profile/>

            <div className="right">            
              <h4 className="catalog">Calories Burned!</h4>
              <hr/>

              <ProgressMap/>

              <h4 className="catalog">Yoga Session</h4>
              <hr/>

              <div className="scrolling d-flex">

              <Link to='/yoga-training/Tree'>
                <div className="cardc tree">
                  <p>Tree Pose
                  </p>
                  <p className="min"><br></br></p>
                  <p className="cardc_des mt-1">Helps in weight loss, increses </p>
                  <button>Start Session</button>
                </div>
              </Link>

              <Link to='/yoga-training/Chair'>
                <div className="cardc chair">
                  <p>Chair
                  </p>
                  <p className="min"><br></br></p>

                  <p className=" cardc_des mt-1">Helps in weight loss, increses </p>


                  <button>Start Session</button>
                </div>
                </Link>
              </div>

              <div className="mt-3 scrolling d-flex">
                <Link to='/yoga-training/Cobra'>
                  <div className="cobra cardc">
                    <p>Cobra Pose
                    </p>
                    <p className="min"><br></br></p>

                    <p className="cardc_des mt-1">Helps in weight loss, increses </p>
                    <button>Start Session</button>
                  </div>
                </Link>

                <Link to='/yoga-training/Dog'>
                <div className="dog cardc">
                  <p>Dog
                  </p>
                  <p className="min"><br></br></p>

                  <p className="cardc_des mt-1">Helps in weight loss, increses </p>
                  <button>Start Session</button>
                </div>
                </Link>

                

              </div>

              <div className="mt-3 scrolling d-flex">
              <Link to='/yoga-training/Shoulderstand'>
                <div className="shoulder cardc">
                  <p>Shoulder Stand
                  </p>
                  <p className="min"><br></br></p>

                  <p className="cardc_des mt-1">Helps in weight loss, increses </p>
                  <button>Start Session</button>
                </div>
                </Link>


                <Link to='/yoga-training/Warrior'>
                <div className="warrior cardc">
                  <p>Warrior
                  </p>
                  <p className="min"><br></br></p>
                  <p className="cardc_des mt-1">Helps in weight loss, increses </p>
                  <button>Start Session</button>
                </div>
                </Link>
              </div>


              <h4 className="mt-3 catalog">Exercise Session</h4>
              <hr/>

              <div className="d-flex">

                <div className="hammer cardc">
                  <p>Hammer curl
                  </p>
                  <p className="min"><br></br></p>
                  <p className="cardc_des mt-1">Helps in weight loss, increses </p>
                  <Link to="">
                  <button  >Start Session</button>
                  </Link>
                </div>

                <div className="hammer2 cardc">
                  <p>Side Curl
                  </p>
                  <p className="min"><br></br></p>
                  <p className="cardc_des mt-1">Helps in weight loss, increses </p>
                  <Link to="">
                  <button  >Start Session</button>
                  </Link>
                </div>


              </div>
            </div>
          </section>
        </div>
    </Container>
  )
}

export default PhysicalScreen
