import React from 'react';
import {NavLink} from 'react-router-dom';



const PagesLinks = () => {
    return(

        <nav>
            <ul>
                <li><NavLink to = '/planner'>ProjectPlanner</NavLink></li>
                <li><NavLink to = '/drinkerator'>Drinkerator</NavLink></li>
                <li><NavLink to = '/clevercap'>CleverCap</NavLink></li>
            </ul>
        </nav>
    )
}

export default PagesLinks;