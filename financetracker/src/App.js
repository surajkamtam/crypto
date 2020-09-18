import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import first from "./first";
import second from "./second";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to React Crypto Application</h2>
          <li>
            <Link to={"/first"}> first </Link>
          </li>
          <li>
            <Link to={"/second"}>Second</Link>
          </li>
          <hr />
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
