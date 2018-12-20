import React from 'react';
import {NavLink} from 'react-router-dom';
import './style/pageLinks.css';



const PagesLinks = () => {
    return(

       <div className="pageslinks">
            <ul className="pageslinksul">
                <li><button className="button"><NavLink to = '/planner'>ProjectPlanner</NavLink></button></li>
                <li><button className="button"><NavLink to = '/drinkerator'>Drinkerator</NavLink></button></li>
                <li><button className="button"><NavLink to = '/clevercap'>CleverCap</NavLink></button></li>
            </ul>
            </div>
    )
}

export default PagesLinks;