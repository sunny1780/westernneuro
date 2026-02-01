import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import MapSection from '../components/MapSection';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';

function BookAppointment() {
  return (
    <AnimatedPage>
      <AnimatedSection><AppointmentSection /></AnimatedSection>
      <AnimatedSection delay={80}><MapSection /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
    </AnimatedPage>
  );
}

export default BookAppointment;
