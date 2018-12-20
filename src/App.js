import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from'react-router-dom';
import ProjectPlannerPage from './components/bigprojectpages/ProjectPlannerPage';
import DrinkeratorPage from './components/bigprojectpages/DrinkeratorPage';
import Home from './Home';
import CleverCapPage from './components/bigprojectpages/CleverCapPage';

class App extends Component {
  
  
  render() {
    return (
      <BrowserRouter>

      <div className="App">

  <Switch>
   <Route exact path = '/' component={Home}/>
    <Route path ='/planner' component={ProjectPlannerPage}/>
    <Route path ='/drinkerator' component={DrinkeratorPage}/>
    <Route path ='/clevercap' component = {CleverCapPage}/>
  </Switch>

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
