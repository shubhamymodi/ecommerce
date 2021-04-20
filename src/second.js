import React from "react";
import "./first.css";
import {Container,Row,Col} from "react-bootstrap";
import MediaCard from "./categoryCard";
export default function Second(){
    return(
        <>
        <h1 id="category" className="course" style={{marginTop:"80px"}}>Categories</h1>
        <br/>

        <Container>
            <Row>
                
                <Col  sm={12} md={6} lg={4} ><a style={{textDecoration:"none"}} href="/mobile"><MediaCard  title="Mobiles" URL="https://res.cloudinary.com/shubhampersonal/image/upload/v1618763578/mobiles_qcmv6a.jpg" /></a></Col>
                <Col sm={12} md={6} lg={4} ><a style={{textDecoration:"none"}} href="/grocery"><MediaCard title="Grocery" URL="https://res.cloudinary.com/shubhampersonal/image/upload/v1618763480/grocery_lxbm0c.jpg"/></a></Col>
                <Col sm={12} md={6} lg={4} ><a style={{textDecoration:"none"}} href="/electronics"><MediaCard title="Electronics" URL="https://res.cloudinary.com/shubhampersonal/image/upload/v1618763374/elec_x9iw43.jpg"/></a> </Col>
                
               
           
                <Col sm={12} md={6} lg={4} ><a style={{textDecoration:"none"}} href="/house"><MediaCard title="House" URL="https://res.cloudinary.com/shubhampersonal/image/upload/v1618763694/home_byqnh0.png"/></a></Col>
                <Col sm={12} md={6} lg={4} ><a style={{textDecoration:"none"}} href="/fashion"><MediaCard title="Fashion" URL="https://res.cloudinary.com/shubhampersonal/image/upload/v1618763755/fashion_gochro.jpg"/></a></Col>
                <Col sm={12} md={6} lg={4} ><a style={{textDecoration:"none"}} href="/grocery"><MediaCard title="Grocery" URL="https://res.cloudinary.com/shubhampersonal/image/upload/v1618763480/grocery_lxbm0c.jpg"/></a></Col>
                
            </Row>
        </Container>
        </>
    )
}