import React from "react";
import style from "./IconWithText.module.css";


interface IconWithTextProps{
    Icon: React.ReactNode;
    subText: string;
    Text: string;
}


export default function IconWithText({Icon, subText, Text}: IconWithTextProps) {
    return (
        <div className={style.iconWithText}>
            {Icon}
            <div className={style.text}>
                <h6 className={style.smallh6}>{subText}</h6>
                <h6>{Text}</h6>
            </div>
        </div>
    );
}