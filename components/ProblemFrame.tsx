import React from "react";
import style from "./ProblemFrame.module.css";

export default function ProblemFrame(){
    return(
        <div className={style.ProblemFrame}>
            <h3 className={style.header}>We know running a business means juggling a hundred things, managing your website shouldn’t be one of them</h3>
            <h5>Without [missing element], [ideal client] often [undesirable outcome]. That means you’re [cost or consequence that they care about] — not because [blame], but because [real reason].
            I’m sure most of these apply to your business:</h5>
            <ul className={style.bulletPoints}>
                <li>Pain Point 1</li>
                <li>Pain Point 2</li>
                <li>Pain Point 3</li>
            </ul>
        </div>
    );
}