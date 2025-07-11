import React from "react";
import style from "./Hero.module.css";
import CTA from "../utils/CTA";



export default function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.leftFrame}>
        <div className={style.upperLeftFrame}>
          <div className={style.headers}>
            <h1><span className={style.stuff}>Affordable Web Design</span> for Small Businesses in Birmingham</h1>
            <h3>Launch a professional, high-converting website — without overspending or doing it yourself</h3>
          </div>
          <CTA />
        </div>
      </div>
    </div>
  );
}