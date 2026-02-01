import React from 'react';
import AffiliateInsurance from '../components/AffiliateInsurance';
import TestimonialsMarquee from '../components/Testimonials';
import WhatSets from '../components/WhatSets';
import InformedCards from '../components/InformedCards';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="Home">
      <AffiliateInsurance />
      <WhatSets />
      <InformedCards />
      <TestimonialsMarquee />
      <AppointmentSection/>
      <Footer />
    </div>
  );
}

export default Home;

