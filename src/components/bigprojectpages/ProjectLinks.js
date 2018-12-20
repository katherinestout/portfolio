import React from 'react';
import {NavLink} from 'react-router-dom';
import './pagesNav.css';



const ProjectLinks = () => {
    return(

  <div id = "navbar">
            <ul>
                
                <li><NavLink exact to = '/'>Home</NavLink></li>
                <li><NavLink to = '/planner'>ProjectPlanner</NavLink></li>
                <li><NavLink to = '/drinkerator'>Drinkerator</NavLink></li>
                <li><NavLink to = '/clevercap'>CleverCap</NavLink></li>
            </ul>
            </div>
    )
}

export default ProjectLinks;