import React, { Component } from "react";
import './App.css';
import Login from "./components/login";
import Information from "./components/information";
import error from "./components/error";
import Header from "./components/Header/Header";
import { server, YES} from "./constants";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

const isLoggedIn = () => {
  return localStorage.getItem(server.LOGIN_PASSED) === YES;
  // return localStorage.getItem("Token") !== null;
};

const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

class App extends Component {

  redirectToLogin = () => {
    return <Redirect to="/login" />;
  };
  
  render() {
    return (
      <Router>
        
        <Header/>
        <Switch>
        <Route exact path="/">
              <Redirect to="/login" />
            </Route>           
        <Route path="/login" component={Login} />
        <SecuredRoute path="/Information" component={Information} />
        <Route path="*" component={error}/>
        </Switch>
      </Router>
    );
  }
}


export default App;
