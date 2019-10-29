import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import history from "./../history";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe"
import '../styles/main.css';

class App extends Component {

  render() {
      const { token } = this.props;

      return (
          <Router history={history}>
              <div className="AppDiv">
                  { token && <h4>User Logged In!</h4>}
                  <Switch>
                      <Route exact path="/" component={HomePage} />
                      <Route path="/aboutme" component={AboutMe} />
                  </Switch>
              </div>
          </Router>
      );
  }
}

export default App;
