import React from 'react'
import { Container } from 'react-bootstrap'
// import SearchBar from '../components/SearchBar'
import GlycemicTable from "../components/GlycemicTable"


const dietScreen = () => {
  return (
    <Container>
        <div className='pageHeader'>
            <h2>Find Glycemic Index </h2>
            {/* <SearchBar data = {Data} placeholder={"Search Glycemic Index"}/> */}
            <GlycemicTable/>
        </div>
    </Container>
  )
}

export default dietScreen