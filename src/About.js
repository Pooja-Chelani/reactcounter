import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img2.jpg";
import Common from "./Common";
const About=()=>{
    return(
        <>
        <Common
        name='Welcome to About page'  
        imgsrc={web} 
        description='This is a basic Counter Counter Website which lets you to Increment +1 when u click increment button and decrement by -1 when u click decrement button and reset to 0 when u click reset button. '
        visit="/Counter" 
        btname="Go Visit"/>
        
        </>
    )
}
export default About;