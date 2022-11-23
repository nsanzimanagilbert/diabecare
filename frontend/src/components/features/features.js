import "./features.css";
import FeatureCard from "./featureCard";
import academics from "../../img/feature.png";
import event from "../../img/feature.png";
import ecart from "../../img/feature.png";

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
            "Strict glycaemic control, as well as routine monitoring, is a core component for preventing as well as early identification of micro as well as macrovascular complication among patients with diabetes mellitus(DM)"
          }
          githubLink={"https://github.com/tusharjain0022/GeekNote-academics"}
          siteLink={"https://geeknote-academics.netlify.app/"}
          image={academics}
        ></FeatureCard>
        <FeatureCard
          title={"Gluco Tracking"}
          intro={
            "Strict glycaemic control, as well as routine monitoring, is a core component for preventing as well as early identification of micro as well as macrovascular complication among patients with diabetes mellitus(DM)"
          }
          githubLink={"https://github.com/tusharjain0022/GeekNote-academics"}
          siteLink={"https://geeknote-academics.netlify.app/"}
          image={academics}
        ></FeatureCard>
         <FeatureCard
          title={"Gluco Tracking"}
          intro={
            "Strict glycaemic control, as well as routine monitoring, is a core component for preventing as well as early identification of micro as well as macrovascular complication among patients with diabetes mellitus(DM)"
          }
          githubLink={"https://github.com/tusharjain0022/GeekNote-academics"}
          siteLink={"https://geeknote-academics.netlify.app/"}
          image={academics}
        ></FeatureCard>
      </div>
    </div>
  );
}
export default Features;
