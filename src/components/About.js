import React, { Component } from 'react';
import "./style/about.css";

class About extends Component {
  
  render() {
    
    return (
      <div className="About" id="about">
     
      <h2>Get to know me</h2>
      <hr/>
      

        <p>In 2017 I graduated from Hood College, 
        with a degree in Communications and a Minor in Studio Art.
        During my college years, I discovered two of my greatest passions;
        photography and coding. From 2016 - present I have ran my own photography 
        business. 
        </p>

        <p>
        While I dappled in coding for a few years, I finally took the plunge to 
        advance my career in 2018 when I earned my Full Stack Certificate from 
        George Washington University. At GW I found the same sense of reward and 
        creativity as I have always persued in photography. 
        </p>
        

        <p>Download my resume!</p>
        <button type="button" className="btn btn">
          Resume
        </button>
       
      </div>
    );
  }
}

export default About;