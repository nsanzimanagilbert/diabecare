import "./LandingPage.css";
import Landing from '../../img/landing.png'
import React from 'react'

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 textBox">
            {/* <p className="smallText">Hi there ! my name is</p> */}
            <h1 style={{color:"white"}}>
              Diacheck <br></br>
              
            </h1>
            <h2 className="smallText">
            Keep your diabetes in check !
            </h2>
            <a
              href="/login"
              className="link"
              rel="noreferrer"
              
            >
              <h3 style={{color:"white"}}>Get Started</h3>
            </a>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <img src={Landing} alt="Landing" className="landing"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
