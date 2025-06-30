import React from "react";
import style from "./Link.module.css";

interface LinkProps{
    text: string;
}

export default function Link({text}:LinkProps){
    return(
        <div className={style.Link}>
            <h5 className={style.LinkText}>{text}</h5>
        </div>
    );
}