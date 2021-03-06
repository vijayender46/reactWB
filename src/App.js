import React from 'react';
// import logo from './logo.svg';
// import $ from "jquery";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Home from './Home';
import FindDestination from './FindDestination';
import About from './About';
import ContactUs from './ContactUs';
import Error from './Error';
// import Sliderlist from './Sliderlist';
import Navbar from './Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
 

const App = () => {
  return (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component = { Home } />
      <Route exact path="/FindDestination" component = { FindDestination } />
      <Route exact path="/About" component = { About } />
      <Route exact path="/ContactUs" component = { ContactUs } />      
      <Route component = {Error} /> 
      <Redirect to="/" />
    </Switch>
  </>
     
  )
}

export default App; 
