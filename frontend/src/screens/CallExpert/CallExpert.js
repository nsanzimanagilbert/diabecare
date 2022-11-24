import React from 'react'
// import star from "../../utils/images/star.png"
// import "./Callexpert.css"
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
import doc1 from "../../utils/images/doc1.jpeg"
import doc2 from "../../utils/images/doc2.jpeg"
import doct3 from "../../utils/images/doc3.jpeg"
import calldoc from "../../utils/images/photo1669271647.jpeg"
import {Link} from "react-router-dom"

const CallExpert = () => {
  return (
    <div className='callexpert' style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>

      <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
        <div style={{display:"flex", flexDirection:"column"}}>
          < img style={{width:"18vw"}} src={doc1} alt="doct1"/>
          {/* <button type="button">Call</button> */}
        </div>

        <div style={{display:"flex", flexDirection:"column"}}>
          < img style={{width:"18vw"}} src={doc2} alt="doct2"/>
          {/* <button type="button">Call</button> */}

        </div>

        <div style={{display:"flex", flexDirection:"column"}}>

          < img style={{width:"18vw"}} src={doct3} alt="doct3"/>
          {/* <button type="button">Call</button> */}

        </div>
      </div>

      <div>
      <a href="http://localhost:3001/">
        < img style={{width:"18vw"}} src={calldoc} alt="doct3"/>
      </a>
      </div>

    </div>
  )
}

export default CallExpert