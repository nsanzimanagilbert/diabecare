import React from 'react'
import { Container } from 'react-bootstrap'
import { Link} from "react-router-dom";
import img from '../assets/warrior.jpg'
import Iframe from 'react-iframe'


const RecipeDB = () => {
  return (
    <Container className="page-wrapper" style={{textAlign:"center"}}>
      <h2 style={{margin:"40px",textTransform:"none"}}>Recipe DB</h2>  
      <div className="flex">
        <div className="recipe-card" style={{margin:"30px",padding:"10px",borderRadius:"15px",border:"1px solid black",textAlign:"center",width:"300px", backgroundColor:" rgba(0,0,0,0.7)",color:"white"}}>
            <p style={{marginBottom:"0px"}}>Cuisine</p>
        </div>
        <div className="recipe-card" style={{margin:"30px",padding:"10px",borderRadius:"15px",border:"1px solid black",textAlign:"center",width:"300px"}}>
            <p style={{marginBottom:"0px"}}>Ingredient</p>
        </div>
        <div className="recipe-card" style={{margin:"30px",padding:"10px",borderRadius:"15px",border:"1px solid black",textAlign:"center",width:"300px"}}>
            <p style={{marginBottom:"0px"}}>Category</p>
        </div>
        <div className="recipe-card" style={{margin:"30px",padding:"10px",borderRadius:"15px",border:"1px solid black",textAlign:"center",width:"300px"}}>
            <p style={{marginBottom:"0px"}}>Nutrition</p>
        </div>

      </div>
      {/* <div style={{border: "2px solid #D5CC5A", overflow: "hidden", margin: "15px auto", maxWidth: "575px"}}>
      <iframe scrolling="no" src="https://cosylab.iiitd.edu.in/recipedb/search_recipe" style={{border: "0px none", marginLeft: "-36px", height: "812px", marginTop: "486px", width: "650px"}}>
      </iframe>
      </div> */}
      <iframe src="https://www.google.co.in/" name="iframe_a" height="300px" width="100%" title="Iframe Example"></iframe>
      <Iframe url="https://cosylab.iiitd.edu.in/recipedb/search_recipe"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/>
      <form className="container">
        <div className="row">
            <div className="col-md-4">
            <div class="form-group">
                <label for="exampleInputEmail1" style={{fontSize:"22px",margin:"40px 0px 20px 0px"}}>Region</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter region"></input>
                <small id="emailHelp" class="form-text text-muted">Enter any region. ( example : South Asia)</small>
            </div>
            </div>
            <div className="col-md-4">
            <div class="form-group">
                <label for="exampleInputEmail1" style={{fontSize:"22px",margin:"40px 0px 20px 0px"}}>Country</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter country"></input>
                <small id="emailHelp" class="form-text text-muted">Enter any country. ( example : China)</small>
            </div>
            </div>
            <div className="col-md-4">
            <div class="form-group">
                <label for="exampleInputEmail1" style={{fontSize:"22px",margin:"40px 0px 20px 0px"}}>Recipe Title</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter recipe"></input>
                <small id="emailHelp" class="form-text text-muted">Enter any recipe. ( example : Prawn)</small>
            </div>
            </div>
        </div>

  
  
  <button type="submit" style={{marginTop:"40px",borderRadius:"10px"}} class="btn btn-primary">Submit</button>
</form>
    </Container>
  )
}

export default RecipeDB