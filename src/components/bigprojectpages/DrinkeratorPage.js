import React, { Component } from 'react';
import './pages.css';
import ProjectLinks from './ProjectLinks';

class DrinkeratorPage extends Component {
  render() {
    return (


<div>
<ProjectLinks/>
<div className="page">


<h1>Drinkerator</h1>

<div className="projectContent">

<h2>Planning</h2>
<div className="content">
</div>

<h3>Problem to be solved</h3>

<h3>Persona</h3>
<div className="content">
<p>For who:</p>
<p>Persona: David</p>
<p>David is a recent college grad, and is relatively new to the bar scene.
With the farmiliarity of his frat brothers and their natty bos gone, 
David is utterly lost on what to order at the bar. David doesn't want to 
appear foolish to those around him who know their drinks. 

</p>

</div>
<h3>Mechanics</h3>

<div className="content">
<p>diagram/ picture of choices and path</p>
</div>

<h2>Design</h2>
<div className="content">
<p>Front End: Bulma</p>
<p>Additional: Animate.css, GoogleFonts</p>

<p>Design Elements:
<ol>
  <li>Colorful and eye catching</li>
  <li>User friendly</li>
  <li>Easy to use</li>
  <li>Simple and Straightforward</li>
  <li>Mobile Responsive</li>
  </ol>
  </p>
  </div>

<h2>Finished Product</h2>
 
<div className="content">
<p>Built With:
 <ol>
   <li>Javascript and jQuery</li>
   <li>CSS</li>
   <li>HTML</li>
   <li>Bulma</li>
   <li>Animate.css</li>
 </ol>
</p>

</div>
</div>
      </div>
      </div>


    );
  }
}

export default DrinkeratorPage;