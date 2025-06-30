import React from "react";
import style from "./Process.module.css"
import ProcessStep from "./ProcessStep";

export default function Process(){
    return (
        <div className={style.ProcessFrame}> 
            <div className={style.headers}>
                <h3>The Steps You'll Go Through With Us</h3>
                <h6>Here is Some Text</h6>
            </div>
            <div className={style.StepsFrame}>
                <ProcessStep StepNumber={1} StepText={"This is some text"} />
                <ProcessStep StepNumber={2} StepText={"Step 2"} />
                <ProcessStep StepNumber={3} StepText={"Step 3"} />
            </div>
        </div>
    );
}