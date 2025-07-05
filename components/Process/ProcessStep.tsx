import React from "react";
import style from "./ProcessStep.module.css";

interface ProcessStepProps {
    StepNumber: number;
    StepHeading: string;
    StepSubHeading: string;
}

export default function ProcessStep({StepNumber, StepHeading, StepSubHeading}:ProcessStepProps){
    return (
        <div className={style.outerFrame}>
            {/* <div className={style.numberFrame}>
                <h3 className={style.stepNumber}>{StepNumber}</h3>
            </div> */}
            <div className={style.textFrame}>
                <h5 className={style.heading}>{StepHeading}</h5>
                <h6>{StepSubHeading}</h6>
            </div>
        </div>
    );
}