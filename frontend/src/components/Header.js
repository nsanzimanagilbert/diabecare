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

  return (
    <header >
      <div className="top_nav">
        <AiOutlineBars onClick={toggle} style={{float:"left"}}/>
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
          <Link to="/">
            <Navbar.Brand className="branding">
              {/* <Image src={logo.source} alt={product.description} fluid /> */}
              <h2>DiaCheck</h2> 
             
            </Navbar.Brand>
          </Link>
          <div className="nav-items flex flex-c flex-end">
            <div className="links-container">
             <Link to="/dashboard" className="nav-link">
             <GoDashboard/> Dashboard
             </Link>
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
            <Nav.Link href="/records">
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
