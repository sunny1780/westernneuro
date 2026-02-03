import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import OurServicesHero from '../components/OurServicesHero';
import Servicesall from '../components/Servicesall';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';

function Services() {
  return (
    <AnimatedPage>
      <AnimatedSection><OurServicesHero /></AnimatedSection>
      <AnimatedSection delay={40}><Servicesall /></AnimatedSection>
      <AnimatedSection delay={120}><AppointmentSection /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
    </AnimatedPage>
  );
}

export default Services;
