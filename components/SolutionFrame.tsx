import React from "react";
import style from "./SolutionFrame.module.css";

interface SolutionFrameProps {
  image: React.ReactNode;
}

export default function SolutionFrame({ image }: SolutionFrameProps) {
  return (
    <div className={style.SolutionFrame}>
      {image}
      <div className={style.Text}>
        <h3>That's exactly what I help with</h3>
        <h6>
          I design websites that not only look great but also build trust, drive
          results, and help your business grow consistently over time. Even
          though I’m just starting out professionally, I’ve spent countless
          focused hours learning exactly what makes visitors click, stay, and
          take action on a website. I treat every project like a partnership.
          Your success is the goal — and I’m here to build the kind of site that
          helps you get there.
        </h6>
      </div>
    </div>
  );
}
