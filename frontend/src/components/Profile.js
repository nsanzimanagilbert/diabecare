import React from 'react'
import heart from "../assets/heart.jpeg"
import running from "../assets/running.jpeg"
import watch from "../assets/watch.jpeg"


const Profile = () => {
  return (
    <div className="left d-flex flex-column" style={{width:"100%"}}>

      {/* <button style={{padding:"10px", marginBottom:"10px", backgroundColor:"#000080" , color:"white", borderRadius:"50px" }}>Connect to Smart Watch</button>
      <img src={watch} alt="" />
      <img src={running} alt="" />
      <img src={heart} alt="" style={{marginTop:"20px"}}/> */}


      <div className="w_cnt">
            <div>
              <p className="h">Calories Burn</p>
              <p className="hh">Total calories burn from this exercise</p>
            </div>
            <div className="n">66 cal</div>
        </div>


        <div className="w_cnt2 d-flex flex-row justify-content-lg-between">
          <div className="w_cnt3">
            <div>
              <p className="h">Weight</p>
              <p className="hh">Weight of a Person</p>
            </div>
            <div className="n">56 Kg</div>
          </div>

          <div className="w_cnt3">
            <div>
              <p className="h">Height</p>
              <p className="hh">Height of a person</p>
            </div>
            <div className="n">99 cm</div>
          </div>
        </div>

        
          {/* <button style={{padding:"10px", marginBottom:"10px", backgroundColor:"#4cef50" , color:"white", borderColor:"#4cef50", borderRadius:"10px" }}><Link to="/nutrition" style={{color:"white", textDecoration:"none"}}>Nutrition</Link></button> */}
        
    </div>
  )
}

export default Profile