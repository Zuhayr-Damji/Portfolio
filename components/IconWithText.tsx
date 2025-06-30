import React from "react";
import style from "./IconWithText.module.css";


interface IconWithTextProps{
    Icon: React.ReactNode;
    subText: string;
    Text: string;
}


export default function IconWithText({Icon, subText, Text}: IconWithTextProps) {
    return (
        <div className={style.IconWithText}>
            {Icon}
            <p>{subText}</p>
            <h6>{Text}</h6>
        </div>
    );
}