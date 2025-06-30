import React from "react";
import style from "./SolutionFrame.module.css";

interface SolutionFrameProps {
    image: React.ReactNode;
}

export default function SolutionFrame({image}:SolutionFrameProps){
    return (
        <div className={style.SolutionFrame}>
            {image}
            <div className={style.Text}>
                <h3>That's where we come in</h3>
                <h6>
                    We do ____ that ____(outcome they care about), what differentiates you, if appropriate position your service as a partner in their success e.g your website should work as hard as you do. Mention how you have authority in this field e.g we’ve worked with ___ companies or done 2000 years of experience
                </h6>
            </div>
        </div>
    );
}