import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import "./first.css";
import { scroller } from "react-scroll";
import { Nav, NavDropdown, Form,Button, FormControl, Navbar } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
  
    
  
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      

<Navbar style={{zIndex:"+10",position:"absolute",top:"0",width:"100%",backgroundColor:'rgb(0,0,0,0.8)'}} fixed="top"  expand="lg">
  <Navbar.Brand style={{paddingRight:"20px"}} href="/"> <span className="mentor">Shop</span> <span className="mate"> Mate</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link style={{paddingRight:"20px"}} className="loginBtn" href="/">Home</Nav.Link>
      {/* <Nav.Link style={{paddingRight:"20px"}} className="loginBtn" href="/lawyers">All Lawyers</Nav.Link> */}
      <Nav.Link style={{paddingRight:"20px"}} className="loginBtn" href="/mobile">Mobiles</Nav.Link>
      <Nav.Link style={{paddingRight:"20px"}} className="loginBtn" href="/grocery">Grocery</Nav.Link>
      <Nav.Link style={{paddingRight:"20px"}} className="loginBtn" href="/electronics">Electronics</Nav.Link>
      <Nav.Link style={{paddingRight:"20px"}} className="loginBtn" href="/house">House</Nav.Link>
      <Nav.Link style={{paddingRight:"20px"}} className="loginBtn" href="/fashion">Fashion</Nav.Link>
      

       
      
    </Nav>
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
    
  </Navbar.Collapse>

</Navbar>

    </div>
  );
}
