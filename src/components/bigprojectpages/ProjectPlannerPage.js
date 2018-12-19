import React, { Component } from 'react';
import PagesNav from './PagesNav';
import App from './../../App.js';
import {Route, BrowserRouter } from 'react-router-dom';

class ProjectPlannerPage extends Component {
  
  render() {
    
    return (

<BrowserRouter>
<div className="ProjectPlannerPage" id="planner">
<PagesNav/>
<Route exact path ='/' component={App}/>


<h1>Hi</h1>
      </div>

      </BrowserRouter>
    );
  }
}

export default ProjectPlannerPage;