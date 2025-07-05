import React from "react";
import style from "./ProblemFrame.module.css";

export default function ProblemFrame(){
    return(
        <div className={style.problemFrame}>
            <h3 className={style.header}>We know running a business means juggling a hundred things, your website shouldn’t be one of them</h3>
            <div className={style.subText}>
                <h5 className={style.subHeading}>
                    If your website doesn't look professional, clients start to question whether your business is. 
                    You're not losing leads because they're the wrong fit — you're losing them because your website doesn't earn their trust.
                    Chances are, you're facing at least one of these:
                </h5>
                <ul className={style.bulletPoints}>
                    <li><span className={style.emphasisedText}>Visitors don’t take action</span > – even though they land on your site</li>
                    <li><span className={style.emphasisedText}>You’re embarrassed to share your link</span > - because it doesn't reflect your brand</li>
                    <li>You’ve spent time (or money) on your site, but <span className={style.emphasisedText}>it’s not holding anyone's attention</span ></li>
                </ul>
            </div>
        </div>
    );
}