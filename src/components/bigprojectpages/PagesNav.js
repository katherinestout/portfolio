import React from 'react';
import {NavLink} from 'react-router-dom';


const PagesNav = () => {
    return(

        <nav>
            <ul>
                <li><NavLink exact to = '/'>Home</NavLink></li>
                <h1>h</h1>
                <li>GitHub Code</li>
            </ul>
        </nav>
    )
}

export default PagesNav;