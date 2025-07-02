import React from "react";
import Image from "next/image";

import { Navbar, Logo, Link } from "../components/Navbar";
import {CTA} from "../components/utils";
import Hero from "../components/Hero";
import ProblemFrame from "../components/Problem";
import SolutionFrame from "../components/Solution";
import { Services } from "../components/Services";
import {Process} from "../components/Process";
import {FAQSection} from "../components/FAQ";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

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
        logo=<Logo />
      />
      
      <Hero />

      <ProblemFrame />

      <SolutionFrame
        image=<Image
          src="/images/Designer-img.jpg"
          width={450}
          height={300}
          alt="Designer"
        />
      />

      <Services />

      <Process />

      <FAQSection />

      <CTASection />

      <Footer />
    </div>
  );
}
