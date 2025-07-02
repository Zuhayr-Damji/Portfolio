import React from "react";
import Image from "next/image";

import style from "./TemplateImage.module.css";


export default function TemplateImage({width=100,height=100}){
    return(
        <Image 
            src="/images/OnionRings.jpeg"
            width={width}
            height={height}
            alt="onion rings"
        />
    );
}