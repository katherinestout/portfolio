import React, { Component } from 'react';
import PagesNav from './PagesNav';
import App from './../../App';
import { Route , BrowserRouter} from 'react-router-dom';

class ProjectPlannerPage extends Component {
  
  render() {
    
    return (

      <BrowserRouter>
      <div className="ProjectPlannerPage" id="planner">
     <PagesNav/>
     <Route path='/' Component={App} />

      </div>
      </BrowserRouter>
    );
  }
}

export default ProjectPlannerPage;