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
                
                <Switch>
                    <Route exact path="/aboutme" component={AboutMePage} />
                    <Route exact path="/projects" component={ProjectsPage}  />
                    <Route path="/" component={HomePage} />
                </Switch>
                <NavBar/>
            </div>
        </Router>
      );
  }
}

export default App;
