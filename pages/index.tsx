import React from "react";
import Image from "next/image";

import Logo from "../components/Logo";
import Link from "../components/Link";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Hero from "../components/Hero";
import ProblemFrame from "../components/ProblemFrame";
import SolutionFrame from "../components/SolutionFrame";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import Process from "../components/Process";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import TemplateImage from "../components/TemplateImage";

import style from "./main.module.css";

export default function main() {
  return (
    <div>
      <Navbar
        links={
          <>
            <Link text="Projects" />
            <Link text="About Me" />
            <Link text="Contact" />
          </>
        }
        CTA=<CTA />
        logo=<Logo/>
      />

      <Hero />

      <ProblemFrame />

      <SolutionFrame 
      image=<Image src="/images/Designer-img.jpg" width={450} height={300} alt="Designer"/> />

      <Services />

      <Process />

      <FAQSection />

      <CTASection />

      <Footer />
    </div>
  );
}
