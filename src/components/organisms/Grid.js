import React from 'react';
import './Grid.css';
import {withRouter} from 'react-router-dom';
const Grid=(props)=>{

    const gotToPage=(Page)=>{
        props.history.push("/"+Page);
    };
    console.log(props);
    return(
        <div className="Grid">
            {props.gridData.map((key,itr)=>(
                 <div className="gridElement" style={{backgroundColor:key.color}} onClick={()=>gotToPage(key.pageLink)}>
                     <div className="imgtext"><b>{key.imgtext}</b></div>
                    <img src={key.image} className="gridImage" alt={key.imgtext}></img>
                </div>
            ))}
        </div>
    );
};

export default withRouter(Grid);