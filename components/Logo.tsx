import React from "react";
import Image from 'next/image';
import style from "./Logo.module.css";

export default function Logo(){
    return(
        <Image 
            src="/images/onionRings.jpeg"
            width={100}
            height={100}
            alt="onion rings"
        />
    );
}