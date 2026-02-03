import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import OurServicesHero from '../components/OurServicesHero';
import InfoSection from '../components/InfoSection';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';

function Services() {
  return (
    <AnimatedPage>
      <AnimatedSection><OurServicesHero /></AnimatedSection>
      <AnimatedSection delay={80}><InfoSection /></AnimatedSection>
      <AnimatedSection delay={120}><AppointmentSection /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
    </AnimatedPage>
  );
}

export default Services;
