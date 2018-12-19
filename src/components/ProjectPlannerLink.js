import React from 'react';
import {NavLink} from 'react-router-dom';


const ProjectPlannerLink = () => {
    return(

        <nav>
            <ul>
                <li><NavLink exact to = '/planner'>Planner Link</NavLink></li>
                
               
            </ul>
        </nav>
    )
}

export default ProjectPlannerLink;