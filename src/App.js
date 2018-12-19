import React, { Component } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';

import {BrowserRouter, Route, Switch} from'react-router-dom';
import ProjectPlannerPage from './components/bigprojectpages/ProjectPlannerPage';
import DrinkeratorPage from './components/bigprojectpages/DrinkeratorPage';
import ProjectLinks from './components/ProjectLinks';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
 

   <ProjectLinks/>
  <Switch>
   <Route exact path = '/home' component={Home}/>
    <Route path ='/planner' component={ProjectPlannerPage}/>
    <Route path ='/drinkerator' component={DrinkeratorPage}/>
  </Switch>




      </div>
      </BrowserRouter>
    );
  }
}

export default App;
