import React from "react";
import style from "./Hero.module.css";
import CTA from "../utils/CTA";
import Image from 'next/image';



export default function Hero(){
    return(
        <div className={style.hero}>
            <div className={style.leftFrame}> 
                <div className={style.upperLeftFrame}>
                    <div className={style.headers}>
                        <h1>You don't have to pay a fortune to <span className={style.stuff}>have an excellent website</span></h1>
                        <h5>Get a high-converting website with a custom design without spending weeks building it yourself</h5>
                    </div>
                    <CTA />
                </div>
            </div>
        </div>
    );
}