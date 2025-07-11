import React from "react";
import Image from "next/image";

import style from "./CTASection.module.css";
import CTA from "../utils/CTA";

export default function CTASection() {
  return (
    <div className={style.ctaSection}>
      {/* Background image */}
      <Image
        src="/images/website-designing-img-tinted.jpg"
        alt="Website design background"
        fill
        priority
        quality={75}
        sizes="100vw"
        className={style.bgImage}
      />

      {/* Content on top of background */}
      <div className={style.contentWrapper}>
        <div className={style.headers}>
          <h3>Let's build your dream website</h3>
          <h5>We'll handle the hard work - you just enjoy the results</h5>
        </div>
        <div className={style.ctaFrame}>
          <CTA />
          <div>
            <p>No coding required · Money-back Guarantee · No Commitment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
