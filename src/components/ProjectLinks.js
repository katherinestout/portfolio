import React from 'react';
import {NavLink} from 'react-router-dom';



const ProjectLinks = () => {
    return(

        <nav>
            <ul>
            <li><NavLink exact to = '/home'>Home</NavLink></li>
                <li><NavLink to = '/planner'>Planner Link</NavLink></li>
                <li><NavLink to = '/drinkerator'>Drinkerator</NavLink></li>
            </ul>
        </nav>
    )
}

export default ProjectLinks;