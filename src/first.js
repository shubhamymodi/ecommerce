import React from "react";
import Menu from "./navbar";
import "./first.css";
import girl from "./images/01.png"
import {Container,Row,Col} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import CountUp from "react-countup";

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade';
import { ImUsers, ImBooks,ImLaptop } from "react-icons/im";
import { GiAlliedStar } from "react-icons/gi";
export default function First(){
    return(
        <div style={{objectFit:"cover",overflow:"hidden"}} >
    <Menu />
    
   <div>
   <Fade left>
      <div className="bigHeading">
       
       Favorite brands & <br/>hottest trends
          <br/>
          <Button className="btn1" href="#category" style={{paddingTop:"9px",paddingBottom:'9px',marginLeft:"10px",color:"#fff"}} variant="contained" color="primary">
       Shop Now
      </Button>

      <Button  href="/cart" variant="outlined" className="button2">Cart
      </Button>
          
      </div>
    </Fade>
      
    <Fade top>
 
    <img className="slider-img" src={girl} alt="img"/>
    </Fade>

    </div>

    <div className="wave">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#add8e6" fill-opacity="1" d="M0,192L80,160C160,128,320,64,480,58.7C640,53,800,107,960,138.7C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>

    
        <Container className="cardCont">
            <Row>
                <Col style={{zIndex:"10"}} xl={3} lg={3} md={6}>
                                <Card style={{borderRadius:"0",borderStyle:'solid',borderColor:"#062a35"}}>
                    <CardContent>
                        <Typography className="cardText">
                        <ImUsers/>
                        <CountUp
                        start={0}
                        end={30454}
                        duration={2.5}
                        />
                        
                        
                        </Typography>
                        <div>Satisfied Clients</div>
                    </CardContent>
                    
                    </Card>
                </Col>

                <Col style={{zIndex:"10"}} xl={3} lg={3} md={6}>
                                <Card style={{borderRadius:"0",borderStyle:'solid',borderColor:"#062a35"}}>
                    <CardContent>
                        <Typography className="cardText">
                        <ImBooks/>
                        <CountUp
                        start={0}
                        end={45}
                        duration={3}
                        />
                        </Typography>
                        <div>Available Brands</div>
                    </CardContent>
                    
                    </Card>
                </Col>

                <Col style={{zIndex:"10"}} xl={3} lg={3} md={6}>
                                <Card style={{borderRadius:"0",borderStyle:'solid',borderColor:"#062a35"}}>
                    <CardContent>
                        <Typography className="cardText">
                        <GiAlliedStar/>
                        <CountUp
                        start={0}
                        end={4.4}
                        duration={3}
                        decimals={2}
                        />
                        </Typography>
                        <div>Average Rating</div>
                    </CardContent>
                    
                    </Card>
                </Col>

                <Col style={{zIndex:"10"}} xl={3} lg={3} md={6}>
                                <Card style={{borderRadius:"0",borderStyle:'solid',borderColor:"#062a35"}}>
                    <CardContent>
                        <Typography className="cardText">
                        <ImLaptop/>
                        <CountUp
                        start={0}
                        end={5}
                        duration={3}
                        />
                        </Typography>
                        <div>Categories</div>
                    </CardContent>
                    
                    </Card>
                </Col>
            </Row>
        </Container>
        

    
    
        
        </div>
        
    )
}