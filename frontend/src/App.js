import React from "react";
import {useEffect} from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import SideNav from "./components/SideNav";
import DashboardScreen from "./screens/DashboardScreen";
import TestScreen from "./screens/TestScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import GlucoseScreen from "./screens/GlucoseScreen";
import PhysicalScreen from "./screens/PhysicalScreen";
import dietScreen from "./screens/dietScreen";
import LandingScreen from "./screens/LandingScreen";
import { useDispatch, useSelector } from "react-redux";
import YogaTraining from "./screens/YogaTraining";
import RecordsScreen from "./screens/RecordsScreen";
import DiabetesTest from "./screens/DiabetesTest";
import RecipeDB from './components/recipeDB';
import Recipes from './components/Recipes/projects'
import CallExpert from "./screens/CallExpert/CallExpert"


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const App = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  useEffect(() => {
    const interval1 = setInterval(()=>{
      handleOpen1();
    },300000)

    const interval2 = setInterval(()=>{
      handleOpen2();
    },180000)
    return () => {
      clearInterval(interval1)
      clearInterval(interval2)

    };
  }, []);



  return (
    <Router>
      <div className="App">
       {userInfo &&  <Header />}
        <main className="py-3">
          <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Time for Medicine 💊🩸
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Don't Forget to take medicine on time 
              </Typography>
            </Box>
          </Modal>

          <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Check your Glucose Levels 💊🩸
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                It's time to check your glucose level again 🩸
              </Typography>
            </Box>
          </Modal>
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/shipping" component={ShippingScreen} exact />
          <Route path="/test" component={TestScreen} exact />
          <Route path="/notifications" component={NotificationsScreen} exact />
          <Route path="/glucose" component={GlucoseScreen} exact />
          <Route path="/physical-activity" component={PhysicalScreen} exact />
          <Route path="/diet" component={dietScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/profile" component={ProfileScreen} exact />
          <Route path="/service/:id" component={ProductScreen} />
          <Route path="/records/:id?" component={RecordsScreen} />
          {userInfo && <Route path="/" component={HomeScreen} exact />}
          {!userInfo && <Route path="/" component={LandingScreen} exact />}

          <Route path="/dashboard" component={DashboardScreen} exact />
          <Route path="/recipedb" component={RecipeDB} exact />
          <Route path="/recipes" component={Recipes} exact />
          <Route path="/call" component={CallExpert} exact />
          <Route path="/diabetestest" component={DiabetesTest} exact />
          <Route path="/yoga-training/:pose" component={YogaTraining} exact />


        </main>
      </div>
    </Router>
  );
};

export default App;
