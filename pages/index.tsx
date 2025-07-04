import React from "react";

import { Navbar, Logo, Link } from "../components/Navbar";
import {CTA} from "../components/utils";
import Hero from "../components/Hero";
import ProblemFrame from "../components/Problem";
import { DesignerImage, SolutionFrame } from "../components/Solution";
import { Services } from "../components/Services";
import {Process, ProcessStep, Timeline} from "../components/Process";
import {FAQSection} from "../components/FAQ";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

import style from "./main.module.css";

export default function main() {
  return (
    <div>
      <Navbar/>
      
      <Hero />

      <ProblemFrame />

      <SolutionFrame
        image=<DesignerImage/>
      />

      <Services />

      <Process />

      <FAQSection />

      <CTASection />

      <Footer />

    </div>
  );
}
