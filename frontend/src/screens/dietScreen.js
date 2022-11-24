import React from 'react'
import { Container } from 'react-bootstrap'
// import SearchBar from '../components/SearchBar'
import GlycemicTable from "../components/GlycemicTable"
import { Link} from "react-router-dom";
import img from '../assets/question.jpg'
import recipedb from '../assets/recipedb.png'
import recipe from '../assets/dish1.jpg'


const dietScreen = () => {
  return (
    <Container className="page-wrapper">
      <h2 style={{margin:"40px",textTransform:"none"}}>Diet</h2>
      
      <div className="container" style={{marginTop:"40px"}}>
          <div className="row">
                    <div className="col-md-4">
                    <div className="card card-product" style={{margin:"30px auto",borderRadius:"40px",padding:"20px",width:"90%"}}>
                        <Link to='/'>
                          <img src={img} style={{padding:"20px",width:"90%",marginBottom:"20px"}} alt="" />
                          <div className="card-description">
                            <h4>Diet Questions</h4>
                            <p>description</p>
                          </div>
                          
                        </Link>
                      </div>
                      </div>
                      <div className="col-md-4">
                    <div className="card card-product" style={{margin:"30px auto",borderRadius:"40px",padding:"20px",width:"90%"}}>
                        <a href='https://cosylab.iiitd.edu.in/recipedb/#search'>
                          <img src={recipedb} style={{padding:"20px",width:"90%",marginBottom:"20px"}} alt="" />
                          <div className="card-description">
                            <h4>Recipe DB</h4>
                            <p>description</p>
                          </div>
                          
                        </a>
                      </div>
                      </div>
                      <div className="col-md-4">
                    <div className="card card-product" style={{margin:"30px auto",borderRadius:"40px",padding:"20px",width:"90%"}}>
                        <Link to='/recipes'>
                          <img src={recipe} style={{padding:"20px",width:"90%",marginBottom:"20px"}} alt="" />
                          <div className="card-description">
                            <h4>Diabetic Recipes</h4>
                            <p>description</p>
                          </div>
                          
                        </Link>
                      </div>
                      </div> 
          </div>
          
>>>>>>> 0336bcebf372bd6e4db5e79d53982e4b045b0c12
        </div>


      <h2>Find Glycemic Index</h2>
      <GlycemicTable/>
    
    </Container>
  )
}

export default dietScreen