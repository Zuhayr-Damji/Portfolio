import React from "react";
import style from "./FAQ.module.css";


interface FAQProps{
    Question: string;
    Answer: string;
}

export default function FAQ({Question, Answer}: FAQProps) {
    return(
        <div className={style.faq}>
            <h5>{Question}</h5>
            <p>{Answer}</p>
        </div>
    );
}