import React from "react";
import style from "./main.module.css";
import Logo from "../components/Logo";
import Link from "../components/Link";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";

export default function main(){
    return (
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
    );
}