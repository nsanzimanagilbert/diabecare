import "./features.css";
import FeatureCard from "./featureCard";
import academics from "../../assets/gluco.png";
import yoga from "../../assets/warrior.jpg";
import ecart from "../../assets/diet.jpg";

function Features() {
  return (
    <div className="container otherproject">
      <div className="row">
        <div className="col-12">
          <h4 className="mainHeading">Features</h4>
        </div>
        <FeatureCard
          title={"Gluco Tracking"}
          intro={
            "Record and Monitor blod glucose levels"
          }
          githubLink={"https://github.com/tusharjain0022/GeekNote-academics"}
          siteLink={"https://geeknote-academics.netlify.app/"}
          image={academics}
        ></FeatureCard>
        <FeatureCard
          title={"Yoga AI Traininer"}
          intro={
            "Exercise routines and workout suggestions. Check your training via AI trainer which checks your yoga pose and detect the calories burnt"
          }
          githubLink={"https://github.com/tusharjain0022/GeekNote-academics"}
          siteLink={"https://geeknote-academics.netlify.app/"}
          image={yoga}
        ></FeatureCard>
         <FeatureCard
          title={"Diet Monitoring"}
          intro={
            "Diet plans and suggestions for healthy food recipes. Log and track  meals with glycemic index"
          }
          githubLink={"https://github.com/tusharjain0022/GeekNote-academics"}
          siteLink={"https://geeknote-academics.netlify.app/"}
          image={ecart}
        ></FeatureCard>
        
      </div>
    </div>
  );
}
export default Features;
