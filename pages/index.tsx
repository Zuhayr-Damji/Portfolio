import React from "react";

import Logo from "../components/Logo";
import Link from "../components/Link";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Hero from "../components/Hero";

import style from "./main.module.css";
import ProblemFrame from "../components/ProblemFrame";
import SolutionFrame from "../components/SolutionFrame";

export default function main(){
    return (
        <>
            <Navbar 
            links = {
                <>
                    <Link text="Services" />
                    <Link text="About Me" />
                    <Link text="Contact Us" />
                </>
            } 
            CTA = <CTA/> 
            logo=<Logo/>
            />

            <Hero />
            <ProblemFrame />
            <SolutionFrame
             image=<Logo width={250} height={250}/>/>
        </>

    );

}