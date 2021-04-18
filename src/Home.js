import React from "react";
import { NavLink } from "react-router-dom";
import counter from "../src/img1.jpg";
import Common from "./Common";
const Home=()=>{
    return(
        <>
        <Common
        name='Amazing Counter Website' 
        imgsrc={counter} 
        
        visit="/Counter" 
        btname="Get Started"/>
        </>
    )
}
export default Home;