import React from "react";
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
import RecipeDB from './components/recipeDB';
import Recipes from './components/Recipes/projects'


const App = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <Router>
      <div className="App">
       {userInfo &&  <Header />}
        <main className="py-3">
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
          <Route path="/yoga-training/:pose" component={YogaTraining} exact />


        </main>
      </div>
    </Router>
  );
};

export default App;
