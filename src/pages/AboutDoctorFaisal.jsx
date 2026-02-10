import React from "react";
import AboutDoctorFaisalHero from "../components/AboutDoctorFaisalHero";
import AboutDrFawazFaisalBio from "../components/AboutDrFawazFaisalBio";
import EducationTraining from "../components/EducationTraining";
import Associations from "../components/Associations";

import Footer from "../components/Footer";
import AppointmentSection from "../components/AppointmentSection";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedSection from "../components/AnimatedSection";

function AboutDoctorFaisal() {
  return (
    <AnimatedPage>
      <div className="px-4 sm:px-6 md:px-10 lg:px-14">
        <AnimatedSection><AboutDoctorFaisalHero doctorImage="/images/Drfaisal.png" /></AnimatedSection>
        <AnimatedSection delay={80}><AboutDrFawazFaisalBio imageSrc="/images/Doc.png" /></AnimatedSection>
        <AnimatedSection delay={120}><EducationTraining /></AnimatedSection>
        <AnimatedSection delay={80}><Associations /></AnimatedSection>
        <AnimatedSection delay={120}><AppointmentSection /></AnimatedSection>
      </div>
      <AnimatedSection><Footer /></AnimatedSection>
    </AnimatedPage>
  );
}

export default AboutDoctorFaisal;
