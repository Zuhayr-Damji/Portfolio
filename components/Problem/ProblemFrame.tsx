import React from "react";
import style from "./ProblemFrame.module.css";

export default function ProblemFrame(){
    return(
        <div className={style.problemFrame}>
            <h3 className={style.header}>We know running a business means juggling a hundred things, managing your website shouldn’t be one of them</h3>
            <div className={style.subText}>
                <h5>
                    If your website doesn't look professional, clients start to question whether your business is. 
                    You're not losing leads because they're the wrong fit — you're losing them because your website doesn't earn their trust.
                    Chances are, you're facing at least one of these:
                </h5>
                <ul className={style.bulletPoints}>
                    <li>Visitors land on your site but don’t take action</li>
                    <li>You’re embarrassed to share your link</li>
                    <li>You’ve spent time (or money) on your site, but it’s not converting</li>
                </ul>
            </div>
        </div>
    );
}