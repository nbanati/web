import React from 'react';
import Me from '../../images/namanweb.png';
import './Introduction.css';

const Introduction=()=>{
    return(
        <div className="introduction">
            <div className="introductionText">
                <h3>Hi!</h3>
                <p>I am a software developer based in Delhi, India. I like movies, .......</p>
            </div>
            <img className="myimage" src={Me} alt="Me"></img>
        </div>
    );
};

export default Introduction;