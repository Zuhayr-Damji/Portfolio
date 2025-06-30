import React from "react";
import style from "./CTASection.module.css";
import CTA from "./CTA";

export default function CTASection() {
  return (
    <div className={style.CTASection}>
      <h3>Let's build your dream website</h3>
      <h5>We'll handle the hard work - you just enjoy the results</h5>
      <div className={style.CTAFrame}>
        <CTA />
        <div>
            <p>No coding required · Money-back Guarantee · No Commitment</p>
        </div>
      </div>
    </div>
  );
}
