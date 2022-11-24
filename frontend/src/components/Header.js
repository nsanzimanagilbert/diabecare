import React from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "./logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { logout } from "../actions/userActions";
import {FaFileMedicalAlt, FaRunning} from 'react-icons/fa'
import {AiOutlineBars} from 'react-icons/ai'
import {MdFoodBank, MdBloodtype} from 'react-icons/md'
import { GoDashboard} from 'react-icons/go'
import {GiHotMeal} from 'react-icons/gi'
import {AiFillNotification} from 'react-icons/ai'
import {IoMdVideocam} from 'react-icons/io'
import logo from "./images";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
  };

  const [isOpen, setIsOpen] = useState(true)
  const toggle = ()=> setIsOpen(!isOpen)

  Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">Wikipedia.com</a>'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Temperature (°C)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Reggane',
        data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
            22.0, 17.8]
    }, {
        name: 'Tallinn',
        data: [-2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5,
            2.0, -0.9]
    }]
});
      

  return (
    <header >
      <div className="top_nav">
        <AiOutlineBars onClick={toggle} style={{float:"left"}}/>
        <Link to="/"><h2 style={{color:"white",float:"left",margin:"5px 15px"}}>DiaCheck</h2> </Link>
        </div>
        {userInfo ? ( <div className="person-nav">
              <NavDropdown title={userInfo.name} id="username">
                <Link to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </Link>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
              </div>
            ) : (
              <div className="person-nav">
              <Nav.Link href="/login">
                <i className="fas fa-user"></i>Sign In
              </Nav.Link>
              </div>
            )}
      <nav expand="lg"  className="main-nav" style={{display: isOpen ?  "block" : "none" , width:"200px"}}>
        
        <div className="nav-items-container flex flex-c">
          {/* <Link to="/">

            <h2 style={{color:"white"}}>DiaCheck</h2> 
          </Link> */}
          <div className="nav-items flex flex-c flex-end">
            <div className="links-container">
             
            <Link to='/diet' className="nav-link">
              <GiHotMeal/> Diet
            </Link>
            <Link to="/glucose" className="nav-link">
             <MdBloodtype/> Blood Glucose
             </Link>
             <Link to="/physical-activity" className="nav-link">
                <FaRunning/> Physical Activity
             </Link>
          
             <Link to="/notifications" className="nav-link">
             <GoDashboard/> Notifications
             </Link>
             <Link to="/records" className="nav-link">
             <FaFileMedicalAlt/> My Records
             </Link>
            <Nav.Link href="localhost:4050/sessions">
              {" "}
                <IoMdVideocam/> Call Expert
            </Nav.Link>
            
            </div>
            
          </div>
         </div>
        
      </nav>
    </header>
  );
};

export default Header;
