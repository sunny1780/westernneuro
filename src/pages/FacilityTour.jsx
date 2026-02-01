import React from 'react';
import FacilityTourHero from '../components/FacilityTourHero';
import FacilityTourGallery from '../components/FacilityTourGallery';
import Footer from '../components/Footer';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';
import AppointmentSection from '../components/AppointmentSection';

function FacilityTour() {   
  return (
    <AnimatedPage>
      <AnimatedSection><FacilityTourHero /></AnimatedSection>
      <AnimatedSection delay={80}><FacilityTourGallery /></AnimatedSection>
      <AnimatedSection delay={120}><AppointmentSection /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
    </AnimatedPage>
  );
}

export default FacilityTour;
