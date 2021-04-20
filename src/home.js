import React from "react";
import First from "./first";
import Second from "./second";
import Third from "./third";
import Slide from "./testimonials";

export default function Home(){
    return(
        <div>
        <First/> <br/><br/><br/>
        <Slide/>
    <Second/>
    <Third/>
    </div>
    )
}