import "./Landing.css";
import Navbar from "../components/Navbar/Navbar";
import LandingPage from "../components/LandingPage/LandingPage";
import SideButton from "../components/sideButtons/sideButtons";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Project from "../components/Projects/projects";
import Blog from "../components/Blog/Blog";
import Features from "../components/features/features";
import * as GaugeChart from 'https://unpkg.com/gauge-chart@next/dist/bundle.mjs'

let element = document.querySelector('#gaugeArea')

// Properties of the gauge
let gaugeOptions = {
  hasNeedle: true,
  needleColor: 'gray',
  needleUpdateSpeed: 1000,
  arcColors: ['rgb(44, 151, 222)', 'lightgray'],
  arcDelimiters: [30],
  rangeLabel: ['0', '100'],
  centralLabel: '50',
}

function LandingScreen() {
  GaugeChart.gaugeChart(element, 300, gaugeOptions).updateNeedle(50)
  return (
    <div>
      
      <Navbar />
      <SideButton />
      <LandingPage />
      <About />
      <Features />
      <Project />
      
      <Blog />
      <Footer />
    </div>
  );
}

export default LandingScreen;