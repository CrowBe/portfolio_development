import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import NavBar from './pageElements/Navbar';
import history from "./../history";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage"
import ProjectsPage from "./pages/ProjectsPage"
import '../styles/main.css';

class App extends Component {

  render() {
    
      return (
        <Router history={history}>
            <div className="AppDiv">
                <NavBar/>
                <Switch>
                    <Route exact path="/web_portfolio" component={HomePage} />
                    <Route path="/aboutme" component={AboutMePage} />
                    <Route path="/projects" component={ProjectsPage}  />
                </Switch>
            </div>
        </Router>
      );
  }
}

export default App;
