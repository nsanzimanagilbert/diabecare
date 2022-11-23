import "./projects.css";
import ProjectComponent from "./projectComponent";
import hg from "../../img/hg.jpg";

function Project(props) {
  return (
    <div className="projectSection container" id="projects">
      <div className="row">
        <div className="col-12">
          <h3 className="mainHeading">Diabetes Dictionary</h3>
        </div>
        <ProjectComponent
          id={0}
          img={hg}
          title={"Type 1 diabetes"}
          intro={
            "Type 1 diabetes is caused by an autoimmune reaction where the body’s defence system attacks the cells that produce insulin. As a result, the body produces very little or no insulin. The exact causes of this are not yet known, but are linked to a combination of genetic and environmental conditions."
          }
          tech={"Around 10% of all people with diabetes have type 1 diabetes."}
          githubLink={"https://github.com/houseofgeeks/hg"}
          siteLink={"https://www.idf.org/aboutdiabetes/type-1-diabetes.html"}
        />
        <ProjectComponent
          id={0}
          img={hg}
          title={"Type 2 diabetes"}
          intro={
            "Type 2 diabetes is most commonly diagnosed in older adults, but is increasingly seen in children, adolescents and younger adults due to rising levels of obesity, physical inactivity and poor diet."
          }
          tech={"Type 2 diabetes is the most common type of diabetes, accounting for around 90% of all diabetes cases."}
          githubLink={"https://github.com/houseofgeeks/hg"}
          siteLink={"https://www.idf.org/aboutdiabetes/type-2-diabetes.html"}
        />
       
      </div>
    </div>
  );
}
export default Project;
