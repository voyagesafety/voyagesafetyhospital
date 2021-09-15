import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Login from "./components/login";
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
        <Route path="/Login" component={Login} />
        </div>
      </Router>
    );
  }
}


export default App;
