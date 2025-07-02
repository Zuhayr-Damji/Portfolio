import React from "react";
import style from "./Link.module.css";

interface LinkProps{
    text: string;
}

export default function Link({text}:LinkProps){
    return(
        <div className={style.link}>
            <h6 className={style.linkText}>{text}</h6>
        </div>
    );
}