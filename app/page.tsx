import React from "react";

import Hero from "../components/Hero";
import ProblemFrame from "../components/Problem";
import { DesignerImage, SolutionFrame } from "../components/Solution";
import { Services } from "../components/Services";
import {Process} from "../components/Process";
import {FAQSection} from "../components/FAQ";
import CTASection from "../components/CTASection";

import style from "./main.module.css";

export default function main() {
  return (
    <div>
      
      <Hero />

      <ProblemFrame />

      <SolutionFrame
        image=<DesignerImage/>
      />

      <Services />

      <Process />

      <FAQSection />

      <CTASection />


    </div>
  );
}
