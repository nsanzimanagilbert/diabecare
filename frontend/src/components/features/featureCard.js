import "./features.css";
import React from 'react'

function FeatureCard(props) {
  return (
    <div className="col-12 col-md-4 my-3 my-md-0">
      <div className=" otherProjectCard" style={{height:"310px"}}>
        <div className="imgContainer">
          <img src={props.image} alt="project"></img>
        </div>{" "}
        <div className="text">
          <h4>{props.title}</h4>
          <p>{props.intro}</p>
          
        </div>
      </div>
    </div>
  );
}
export default FeatureCard;
