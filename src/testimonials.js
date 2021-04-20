import React from "react";
import { Carousel } from 'react-bootstrap';
import "./testimonials.css";
import d1 from "./images/d1.jpg";

import d3 from "./images/d3.jpg";

import d5 from "./images/d5.jpg";
import d6 from "./images/d6.jpg";
export default function Slide(){
  return(
    <>
    <Carousel interval={2000} style={{backgroundColor:"#ef8172"}}>
  <Carousel.Item interval={2000} className="container-fluid"
  >
  

          <img style={{width:"100%",height:"10%"}} src={d1} alt="d1"/>
  </Carousel.Item>
  <Carousel.Item interval={2000} className="container-fluid"
  >
  
          <img style={{width:"100%",height:"10%"}} src={d5} alt="d2"/>
  </Carousel.Item>
  <Carousel.Item interval={2000} className="container-fluid"
  >
 
          <img style={{width:"100%",height:"10%"}} src={d3} alt="d3"/>
  </Carousel.Item>
  <Carousel.Item interval={2000} className="container-fluid"
  >
  
          <img style={{width:"100%",height:"10%"}} src={d6} alt="d4"/>
  </Carousel.Item>
</Carousel>


    </>
  )
}