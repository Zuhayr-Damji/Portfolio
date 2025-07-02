import React from "react";
import style from "./ProcessStep.module.css";

interface ProcessStepProps {
    StepNumber: number;
    StepText: string;
}

export default function ProcessStep({StepNumber, StepText}:ProcessStepProps){
    return (
        <div className={style.outerFrame}>
            <div className={style.numberFrame}>
                <h3>{StepNumber}</h3>
            </div>
            <div className={style.textFrame}>
                <h5>{StepText}</h5>
            </div>
        </div>
    );
}