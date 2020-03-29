import React from 'react';
import './Experience.css';

const Experience=()=>{

    let data=[{"position":"Associate Software Developer - 2","company":"Publicis Sapient","dates":"July 2019 - Present","work":"I work here"},
    {"position":"Associate Software Developer - 2","company":"Publicis Sapient","dates":"July 2019 - Present","work":"I work here"},
    {"position":"Intern, Technology & Digital","company":"Mckinsey & Company","dates":"June 2018 - July 2018","work":"I worked here"},
    {"position":"Associate Software Developer - 2","company":"Publicis Sapient","dates":"July 2019 - Present","work":"I worked here"},
    {"position":"Associate Software Developer - 2","company":"Publicis Sapient","dates":"July 2019 - Present","work":"I worked here"}];

    return(
        <div className="experience">
            <ul className="exList">
                {
                    data.map((key,itr)=>(
                        <li className="company">
                            <div className="position">{key.position}</div>
                            <div className="companyName">{key.company}</div>
                            <div className="dates">{key.dates}</div>
                            <div className="work">{key.work}</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Experience;