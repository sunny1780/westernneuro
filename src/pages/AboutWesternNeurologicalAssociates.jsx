import React from 'react';
import Westernhero from '../components/Westernhero';
import Westtwo from '../components/Westtwo';
import WestThree from '../components/WestThree';
import WestLogos from '../components/WestLogos';
import WestTeam from '../components/WestTeam';
import TestimonialsMarquee from '../components/Testimonials';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';

function AboutWesternNeurologicalAssociates() {
  return (
    <div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-24">
        <Westernhero />
        <Westtwo />
        <WestThree />
        <WestLogos />
        <WestTeam />
        <TestimonialsMarquee />
        <AppointmentSection />
      </div>
      <Footer />
    </div>
  );
}

export default AboutWesternNeurologicalAssociates;
