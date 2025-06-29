import React from "react";
import style from "./CTA.module.css"

function onClick(){
    console.log("Button clicked");
}

export default function CTA(){
    return (
        <button 
            className={style.CTA}
            onClick={onClick}>
            Find out More
        </button>
    );
}