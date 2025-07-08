import React from "react";
import style from "./SolutionFrame.module.css";

interface SolutionFrameProps {
  image: React.ReactNode;
}

export default function SolutionFrame({ image }: SolutionFrameProps) {
  return (
    <div className={style.solutionFrame}>
      {image}
      <div className={style.text}>
        <h3>That's exactly what I help with</h3>
        <div className={style.subText}>
          <h6>
            I design <span className="emphasisedText">websites that not only look great but get results</span>,
            help your business grow consistently over time, and build trust.
          </h6>
          <h6>
            Even though I’m just starting out professionally, <span className="emphasisedText">I’ve spent countless
              hours learning exactly what makes visitors click</span>, stay, and
            take action on a website.
          </h6>
          <h6>
            <span className="emphasisedText">I treat every project like a partnership</span>. Your success is the goal —
            and I’m here to build the kind of site that helps you get there.
          </h6>
        </div>
      </div>
    </div>
  );
}
