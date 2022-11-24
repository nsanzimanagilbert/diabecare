import "./projects.css";
import ProjectComponent from "./projectComponent";
import hg from "../../assets/dish1.jpg";
import React from 'react'

function Recipes(props) {
  return (
    <div className="projectSection container" id="projects">
      <div className="row">
        <div className="col-12">
          <h3 className="mainHeading" style={{textAlign:"center",marginBottom:"40px"}}>Diabetic Recipes</h3>
          <p>Food – and good nutrition – is a tricky and essential component of diabetes management. It can be hard to make food choices that keep your blood sugar levels in range. Wherever you are in your diabetes journey, and regardless of your current eating habits, we’re here to shed light on what healthy eating can look like for people with diabetes.</p>
          <div className="flex">
        <div className="recipe-card" style={{margin:"30px",padding:"10px",borderRadius:"15px",border:"1px solid black",textAlign:"center",width:"500px", backgroundColor:" rgba(0,0,0,0.7)",color:"white"}}>
            <p style={{marginBottom:"0px"}}>Veg</p>
        </div>
        <div className="recipe-card" style={{margin:"30px",padding:"10px",borderRadius:"15px",border:"1px solid black",textAlign:"center",width:"500px"}}>
            <p style={{marginBottom:"0px"}}>Non-Veg</p>
        </div>
       

      </div>
        </div>
        <ProjectComponent
          id={0}
          img={hg}
          title={"Eating Vegan with Diabetes"}
          intro={
            "Can people with diabetes be vegan? How can you get started with a plant-based diet? Your guide to vegan diets for people with diabetes, plus some delicious recipes."
          }
          tech={"November 27,2022. 33 readers recommended"}
          githubLink={"https://github.com/houseofgeeks/hg"}
          siteLink={"https://diatribe.org/eating-vegan-diabetes"}
        />
         <ProjectComponent
          id={0}
          img={hg}
          title={"Three-Cheese Spaghetti Squash Boats"}
          intro={
            "Hands-on Time: 20 minutes Total Time: 1 hour and 30 minutes Makes: 2 servings Total Carbohydrates: 11 grams per serving This is an outrageously rich and decadent pasta"
          }
          tech={"November 27,2022. 6 readers recommended"}
          githubLink={"https://github.com/houseofgeeks/hg"}
          siteLink={"https://diatribe.org/three-cheese-spaghetti-squash-boats"}
        />
        
       
      </div>
    </div>
  );
}
export default Recipes;
