import React from "react";

import Logo from "../components/Logo";
import Link from "../components/Link";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Hero from "../components/Hero";

import style from "./main.module.css";
import ProblemFrame from "../components/ProblemFrame";
import SolutionFrame from "../components/SolutionFrame";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import Process from "../components/Process";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function main() {
  return (
    <div>
      <Navbar
        links={
          <>
            <Link text="Services" />
            <Link text="About Me" />
            <Link text="Contact Us" />
          </>
        }
        CTA=<CTA />
        logo=<Logo />
      />

      <Hero />

      <ProblemFrame />

      <SolutionFrame image=<Logo width={250} height={250} /> />

      <Services />

      <Benefits />

      <Process />

      <FAQSection />

      <CTASection />

      <Footer />
    </div>
  );
}
