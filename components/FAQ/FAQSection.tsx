import React from "react";
import FAQ from "./FAQ";

import style from "./FAQSection.module.css";

export default function FAQSection() {
  return (
    <div className={style.faqSection}>
      <h3 className={style.title}>FAQs</h3>
      <div className={style.faqFrame}>
        <FAQ
          background="var(--primary-100)"
          Question="How long does it take to build a website? ⏱️"
          Answer="Most projects take 2–4 weeks from start to finish, depending on the size and complexity. I’ll give you a timeline up front and keep you updated every step of the way."
        />
        <FAQ
          // background="var(--primary-100)"
          Question="Do you offer ongoing support after launch? 🤝🚀"
          Answer="Yes — I offer optional maintenance plans or ad-hoc support after your site goes live. Whether you need updates, fixes, or just peace of mind, I’ve got you covered"
        />
        <FAQ
          // background="var(--primary-100)"
          Question="Will my site be mobile-friendly? 📱"
          Answer="Absolutely. Every site I build is mpbile-friendly and responsive, meaning it looks and works great on phones, tablets, and desktops — no extra charge."
        />
        <FAQ
          background="var(--primary-100)"
          Question="What do you need from me to get started? 🧾"
          Answer="Usually just your logo, any written content or images you have, and a quick chat about your goals. If you’re not sure where to start, I can guide you through it."
        />
      </div>
    </div>
  );
}
