import React from "react";
import style from "./ProcessStep.module.css";

interface ProcessStepProps {
    stepHeading: string;
    stepSubHeading: string;
    inlineStyle?: React.CSSProperties  & { [key: `--${string}`]: string }; // allows CSS variables like '--c'
}


export default function ProcessStep({stepHeading, stepSubHeading, inlineStyle }: ProcessStepProps) {
    return (
        <div className={style.textFrame} style={inlineStyle}>
            <h5 className={style.heading}>{stepHeading}</h5>
            <h6 className={style.subheading}>{stepSubHeading}</h6>
        </div>
    );
}