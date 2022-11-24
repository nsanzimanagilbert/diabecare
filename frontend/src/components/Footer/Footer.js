import "./Footer.css";
import Heart from "../../img/icons/Heart.svg";

function Footer() {
  return (
    <>
      <div className="container" id="contact">
        <div className="row">
          <div className="col-12 text-center contactSection">
            <h4 className="mainHeading">Connect with us</h4>
            <h4 className="smallText px-md-5 mx-md-5">
              You can reach to us via E-Mail or on Call or via any other
              platforms link provided.
            </h4>
            <a
              href="mailto:tusharjain0022@gmail.com"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <p className="readButton mt-4 mx-md-2">E-mail</p>
            </a>
            <a
              href="https://www.linkedin.com/in/tusharjain0022/"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <p className="readButton mx-md-2">Phone : 211-2000-103</p>
            </a>
          </div>
        </div>
      </div>
      <div className="footer" id="bottom">
        <p>
          Made with <img src={Heart} alt="love"></img> by Team DiabeTechCare
        </p>
      </div>
    </>
  );
}
export default Footer;
