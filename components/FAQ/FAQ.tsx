import React from "react";
import style from "./FAQ.module.css";


interface FAQProps{
    Question: string;
    Answer: string;
    background?:string; 
}

export default function FAQ({Question, Answer,background}: FAQProps) {
    return(
        <div className={style.faq} style={{ background: background || "white"}}>
            <h5 className={style.question}>{"Q. " + Question}</h5>
            <h6 className={style.answer}>{"A. " + Answer}</h6>
        </div>
    );
}