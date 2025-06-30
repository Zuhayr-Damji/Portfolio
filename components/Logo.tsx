import React from "react";
import Image from 'next/image';
import style from "./Logo.module.css";

export default function Logo({width=100,height=100}){
    return(
        <Image 
            src="/images/onionRings.jpeg"
            width={width}
            height={height}
            alt="onion rings"
        />
    );
}