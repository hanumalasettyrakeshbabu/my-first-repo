import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Simplecounter from "./components/simplecounter"
import Menu from "./components/menu"
import Grocery from "./grocery_menu"
import { Nav, Navbar } from "react-bootstrap"
import {HashRouter, BrowserRouter as Router, Route, NavLink, Switch, Link } from "react-router-dom"
import Home from "./components/Home"
class App extends React.Component {
  
  render() {
    return (
      <React.Fragment>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');
      </style>
        <div className="App">
        <HashRouter basename="/">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/" >
            <Link to = "/">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

              <Nav className="ml-auto" >
                <Nav.Item>
                  <Link to="/simpleimageslider">Image-Slider</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/todolist">Todo-Lists</Link>
                </Nav.Item>
                <Nav.Item>
                <Link to="/menuprototype">Menu</Link>
                  
                </Nav.Item>

              </Nav>
            </Navbar.Collapse>
          </Navbar>

          
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route  exact path="/simpleimageslider" component={Simplecounter}></Route>
              <Route  exact path="/todolist" component={Grocery}></Route>
              <Route  exact path="/menuprototype" component={Menu}></Route>
            </Switch>
          
        </HashRouter>
          
        </div>
        <footer className="footers">
          <div className="w-50 p-2 mx-auto mb-1 d-inline-block">
            <div class="row">
              <div className="col-md-12"><span>Follow Us On Social Media Platforms</span></div>
            </div>
            <div className="row">
              <div className="col-md-12 flex-center">
                <a href="https://www.instagram.com/rakesh_h.2415/" target="_blank" rel="noopener noreferrer"><button className="btn" title="Instagram Page"><i class="fa fa-instagram " style={{fontSize:"24px"}} ></i></button></a>
                <a href="https://www.facebook.com/rakeshbabu.hanumalasetty" target="_blank" rel="noopener noreferrer" title="Facebook Page"><button className="btn"><i class="fa fa-facebook-f" style={{fontSize:"24px"}}></i></button></a>
                <a href="https://twitter.com/Rakesh24161?s=09" target="_blank" rel="noopener noreferrer" title="Twitter Page"><button className="btn"><i class="fa fa-twitter" style={{fontSize:"24px"}}></i></button></a>
              </div>
            </div>
          </div>
          <div className=" w-50 p-2 mx-auto d-inline-block">
            <div className="row">
              <div className="col-md-5">
                <span>Email-Us</span>
              </div>
              <div className="col-md-4">
                <span>Contact-Us</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 flex-center">
                <span>
                  <i class="fa fa-envelope" aria-hidden="true"></i>  <span>: rakeshbabu393@gmail.com</span>
                </span>
              </div>
              <div className="row">
                <div className="col-md-12 flex-center">
                  <span>
                    <i class="fa fa-phone" aria-hidden="true"></i>  <span>: +91-8072853329</span>
                  </span>
                </div>
              </div>
            </div>

          </div>



        </footer>


      </React.Fragment>
    )
  }
}
export default App;
