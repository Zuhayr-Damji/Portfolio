import React from "react";
import style from "./Process.module.css"
import ProcessStep from "./ProcessStep";
import Timeline from "./Timeline";

export default function Process(){
    return (
        <div className={style.processFrame}> 
            <div className={style.headers}>
                <h3>The Steps You'll Go Through With Us</h3>
                <h6>Here’s How We’ll Build Your Website Together</h6>
            </div>
            <Timeline />
        </div>
    );
}