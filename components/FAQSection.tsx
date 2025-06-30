import React from "react";
import FAQ from "./FAQ";

import style from "./FAQSection.module.css";

export default function FAQSection() {
  return (
    <div className={style.FAQSection}>
      <h3 className={style.title}>FAQs</h3>
      <div className={style.FAQFrame}>
        <FAQ
          Question="What services do you offer?"
          Answer="We offer a wide range of services including product support, 
          customer service, and account management."
        />
        <FAQ
          Question="How can I reset my password?"
          Answer="Click on 'Forgot Password' on the login page, and follow 
          the instructions to reset your password."
        />
        <FAQ
          Question="Where can I view my order history?"
          Answer="You can view your order history in the 'My Account' section under 'Orders'."
        />
        <FAQ
          Question="What is your return policy?"
          Answer="You can return any item within 30 days of purchase 
          as long as it’s in its original condition.."
        />
      </div>
    </div>
  );
}
