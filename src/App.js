import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Login from "./components/login";
import Information from "./components/information";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

class App extends Component {

  redirectToLogin = () => {
    return <Redirect to="/Login" />;
  };

  render() {
    return (
      <Router>
        <div>   
        <Header/>
        <Route path="/Login" component={Login} />
        <Route path="/Information" component={Information} />
        </div>
      </Router>
    );
  }
}


export default App;
