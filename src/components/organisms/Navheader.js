import React,{useState} from 'react';
import {withRouter, NavLink} from 'react-router-dom';
import '../organisms/Navheader.css';

const Navheader=(props)=>{
    const [state,setState]=useState(false);
    const openNavigation=()=>{
        setState(!state);
        let mainNav = document.getElementById('js-menu');
        mainNav.classList.toggle('activeDisplay');

    }
    return(
        <div className="Navheader">
            <span className="navbar-toggle">
                <i className="fa fa-bars" onClick={openNavigation}></i>
            </span>
            <div className="Logo">
                <NavLink exact className="NavLink" activeClassName="active" to="/">
                    Naman Banati
                </NavLink>
            </div>
            <div className="Navigation">
                <ul  className="MobileUL" id="js-menu">
                    <li>
                        <NavLink exact className="NavLink" activeClassName="active" to="/education">
                            <b>Education</b>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact className="NavLink" activeClassName="active" to="/experience">
                            <b>Experience</b>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact className="NavLink" activeClassName="active" to="/projects">
                        <b>Projects</b>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact className="NavLink" activeClassName="active" to="/contact">
                        <b>Contact</b>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default withRouter(Navheader);