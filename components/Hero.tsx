import React from "react";
import style from "./Hero.module.css";
import CTA from "./CTA";
import Image from 'next/image';


interface HeroProps{

}

export default function Hero(){
    return(
        <div className={style.Hero}>
            <div className={style.LeftFrame}> 
                <div className={style.UpperLeftFrame}>
                    <div className={style.Headers}>
                        <h1>You don't have to pay a fortune to have an excellent website</h1>
                        <h5>Get a high-converting website through custom design without spending weeks building it yourself</h5>
                    </div>
                    <CTA />
                </div>
            </div>
            {/* <Image
                src="/images/Hero-img-bg.jpg"
                width={750}
                height={500}
                alt="onion rings"
            /> */}
        </div>
    );
}