import React from 'react';
import "./Footer.css";

const Footer=()=>{
    return(
        <div className="Footer">
            <hr className="ruler" />
            <div className="love">
                Made with <i className="fa fa-heart" ></i> in India
            </div>
            <div className="accounts">
                <a href="https://www.facebook.com/naman.banati" ><i className="fa fa-facebook-official notext" style={{"font-size":"36px"}} /></a>
                <a href="https://in.linkedin.com/in/naman-banati"><i className="fa fa-linkedin-square" style={{"font-size":"36px"}}/></a>
                <a href="https://www.youtube.com/channel/UCcIdqGudmenCY6vGb2l6RqQ"><i className="fa fa-youtube-play" style={{"font-size":"36px"}}/></a>
                <a href="mailto:naman.banati@gmail.com"><i className="fa fa-envelope" style={{"font-size":"36px"}}/></a>
            </div>
        </div>
    );
}


export default Footer;