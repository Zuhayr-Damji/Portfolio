import React from "react";
import { Navbar } from "../../components/Navbar";
import style from "./about.module.css";
import Footer from "../../components/Footer";

export default function about() {
    return (
        <div className={style.aboutContainer}>
            <Navbar />
            <div className={style.text}>
                <h2>About Me</h2>
                <h6>
                    I am a freelance web designer who's just starting out professionally.
                    I was born in Birmingham, England in 2007. My goal is to help small
                    businesses make a stronger impression online through thoughtful,
                    user-focused design. I’m passionate about building websites that not
                    only look great but also clearly communicate what a business stands
                    for and drive real results. I’m constantly learning, experimenting,
                    and refining my skills to stay on top of modern design practices — and
                    I enjoy turning ideas into clean, functional websites that feel
                    intuitive to use.
                </h6>
            </div>
            <Footer />
        </div>
    );
}
