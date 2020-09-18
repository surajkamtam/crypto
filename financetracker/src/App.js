import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import first from "./first";
import second from "./second";
import "./App.css";
import {
  Card
} from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Card id="frontcard">
          <h2 className="coin-text" >Welcome to React Crypto Application</h2>
          <div className="page-text">
           <button> <Link to={"/first"}> Welcome Page </Link> </button>
          </div>
          <div className="page-text">
          <button>   <Link to={"/second"}>Search Page </Link> </button>
          </div>
          </Card>
          <Switch>
            <Route exact path="/first" component={first} />
            <Route path="/second" component={second} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
