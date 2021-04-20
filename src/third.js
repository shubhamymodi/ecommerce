import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import "./first.css"
export default function Third(){
    return(
        <div style={{backgroundColor:"#062a35", height:"100px", marginTop:"50px"}}>

    <span className="footer">
         <a href="https://www.facebook.com/">
    <FacebookIcon style={{color:"#fff", width:"30px", height:"30px",marginRight:"15px"}}/>
    </a>
    <a href="https://www.instagram.com/">
    <InstagramIcon style={{color:"#fff", width:"30px", height:"30px",marginRight:"15px"}}/>
    </a>
    <a href="https://twitter.com/">
    <TwitterIcon style={{color:"#fff", width:"30px", height:"30px",marginRight:"15px"}}/>
    </a>
    <a href="https://www.youtube.com/">
    <YouTubeIcon style={{color:"#fff", width:"30px", height:"30px"}}/>
    </a>
        <div style={{color:"#fff",marginTop:"10px"}}>
            Copyright © 2021. Developed with ❤️ by Shubham Modi!
        </div>
        </span>
        </div>
    )
}