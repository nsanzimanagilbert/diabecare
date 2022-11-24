import "./Landing.css";
import Navbar from "../components/Navbar/Navbar";
import LandingPage from "../components/LandingPage/LandingPage";
import SideButton from "../components/sideButtons/sideButtons";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Project from "../components/Projects/projects";
import Blog from "../components/Blog/Blog";
import Features from "../components/features/features";
import ReactSpeedometer from "react-d3-speedometer"
import React from 'react'


function LandingScreen() {
  return (
    <div>
      
      <Navbar />
      <SideButton />
      <LandingPage />
      {/* <ReactSpeedometer /> */}
      <About />
      <Features />
      <Project />
      
      <Blog />
      <Footer />
    </div>
  );
}

export default LandingScreen;