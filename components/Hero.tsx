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
                        <h5>We offer custom designs so that you can work without worrying whether your website is actually converting</h5>
                    </div>
                    <CTA />
                </div>
            </div>
            <Image
                src="/images/onionRings.jpeg"
                width={500}
                height={500}
                alt="onion rings"
            />
        </div>
    );
}