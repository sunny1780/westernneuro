import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import InfoSection from '../components/InfoSection';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';

function Service5() {
  return (
    <AnimatedPage>
      <AnimatedSection><ServiceSection title="Service 5" /></AnimatedSection>
      <AnimatedSection delay={80}><InfoSection /></AnimatedSection>
      <AnimatedSection delay={120}><AppointmentSection /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
    </AnimatedPage>
  );
}

export default Service5;
