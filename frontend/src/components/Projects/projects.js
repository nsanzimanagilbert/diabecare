import "./projects.css";
import ProjectComponent from "./projectComponent";
import hg from "../../img/hg.jpg";

function Project(props) {
  return (
    <div className="projectSection container" id="projects">
      <div className="row">
        <div className="col-12">
          <h3 className="mainHeading">Diabetes Library</h3>
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
        <ProjectComponent
          id={0}
          img={hg}
          title={"Gestational diabetes (GDM) "}
          intro={
            "Gestational diabetes mellitus (GDM) is a severe and neglected threat to maternal and child health. Many women with GDM experience pregnancy-related complications including high blood pressure, large birth weight babies and obstructed labour. Approximately half of women with a history of GDM go on to develop type 2 diabetes within five to ten years after delivery."
          }
          tech={"There were an estimated 223 million women (20-79 years) living with diabetes. This number is projected to increase to 343 million by 2045"}
          githubLink={"https://github.com/houseofgeeks/hg"}
          siteLink={"https://www.idf.org/our-activities/care-prevention/gdm.html"}
        />
       
      </div>
    </div>
  );
}
export default Project;
