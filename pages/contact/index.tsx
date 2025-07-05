import React from "react";

import style from "./contact.module.css";
import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact(){
    return (
        <div>
            <Navbar/>
            <div className={style.contact}>
                <p>Kindly use the following, <a href="https://docs.google.com/forms/d/e/1FAIpQLScCAtgok9A_njC9weQno5so-rQNPtbfb3A5Xn7A0x-mQtv1UQ/viewform?usp=header">Google Form link</a> custom form coming soon</p>
            </div>
            <Footer/>
        </div>
    );
}