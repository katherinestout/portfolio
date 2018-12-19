import React from 'react';
import {NavLink} from 'react-router-dom';


const ProjectPlannerLink = () => {
    return(

        <nav>
            <ul>
                <li><NavLink to = '/planner'>Planner Link</NavLink></li>
                <li><NavLink to = '/drinkerator'>Drinkerator</NavLink></li>
                <li><NavLink exact to = '/'>Home</NavLink></li>


            </ul>
        </nav>
    )
}

export default ProjectPlannerLink;