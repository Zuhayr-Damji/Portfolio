import React from "react";
import style from "./Process.module.css"
import ProcessStep from "./ProcessStep";

export default function Process(){
    return (
        <div className={style.processFrame}> 
            <div className={style.headers}>
                <h3>The Steps You'll Go Through With Us</h3>
                <h6>Here is Some Text</h6>
            </div>
            <div className={style.stepsFrame}>
                <ProcessStep StepNumber={1} StepText={"We have with a call where I ask you some questions about your business"} />
                <ProcessStep StepNumber={2} StepText={"I create a design. Once you approve it, I begin development and bring your vision to life"} />
                <ProcessStep StepNumber={3} StepText={"Your website goes live. Your site starts doing what it was built to do: grow your business."} />
            </div>
        </div>
    );
}