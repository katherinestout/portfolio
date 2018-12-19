import React, { Component } from 'react';
import PagesNav from './PagesNav';
import {  Route, BrowserRouter } from 'react-router-dom';
import './pages.css';
import App from './../../App';

//<Route exact path ='/' component={App}/>

class ProjectPlannerPage extends Component {
  
  render() {
    
    return (

<BrowserRouter>
<div className="PlannerPage">
<PagesNav/>

<Route exact path ='/' component={App}/>

      </div>

</BrowserRouter>
    );
  }
}

export default ProjectPlannerPage;