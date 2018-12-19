import React, { Component } from 'react';
import PagesNav from './PagesNav';
 
class DrinkeratorPage extends Component {
  
  render() {
    
    return (
      <div className="DrinkeratorPage" id="drinkerator">
     <PagesNav/>
     <Route path='/' Component={App} />

      </div>
    );
  }
}

export default DrinkeratorPage;