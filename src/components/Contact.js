import React, { Component } from 'react';
import "./style/contact.css";



class Contact extends Component {
  render() {
    return (
    <div className="Contact" id="contact">
      <h2>Contact Me</h2>
      <hr/>
    
    <div className="icons">

    <p><i class="fab fa-github"></i> <a href ="https://www.github.com/katherinestout">Github</a>
     <i class="fas fa-envelope-open"></i>  Email
    <i class="fab fa-linkedin"></i> LinkedIn
    <i class="fas fa-phone"></i> Cell</p> 
    </div>

    </div>
    );
  }
}

export default Contact;
