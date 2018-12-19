import React, { Component } from 'react';
//import PagesNav from './PagesNav';
//import {  BrowserRouter } from 'react-router-dom';
import './pages.css';
import ProjectPlannerLink from '../ProjectPlannerLink';
//import App from './../../App';

//<Route exact path ='/' component={App}/>

class ProjectPlannerPage extends Component {
  
  render() {
    
    return (


<div className="PlannerPage">
<ProjectPlannerLink/>

<h1>Project Planner Page</h1>
      </div>


    );
  }
}

export default ProjectPlannerPage;