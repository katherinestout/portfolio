import React, { Component } from 'react';
import "./style/footer.css";

class Footer extends Component {
  render() {
    return (
    <div className="Footer">
    <div class="footer-copyright text-center py-3"> 
        <a href="https://www.github.com/katherinestout">       
            &#169; 2018 Katherine Stout
            <i class="fab fa-github"></i>
        </a>
        </div>
      </div>
    );
  }
}

export default Footer;