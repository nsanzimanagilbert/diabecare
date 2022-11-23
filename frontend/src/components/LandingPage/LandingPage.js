import "./LandingPage.css";
import Landing from '../../img/landing.png'

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 textBox">
            {/* <p className="smallText">Hi there ! my name is</p> */}
            <h1 style={{color:"white"}}>
              Diabecare <br></br>
              
            </h1>
            <h2 className="smallText">
            Self-care and routine check-ups/ investigations for early identification of the complications of diabetes mellitus.
            </h2>
            <a
              href="#"
              className="link"
              target="_blank"
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
