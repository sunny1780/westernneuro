import React from 'react';
import Hero from '../components/Hero';
import Herotwo from '../components/Herotwo';
import AffiliateInsurance from '../components/AffiliateInsurance';
import Burbank from '../components/Burbank';
import Associations from '../components/Associations';
import Moreclinis from '../components/Moreclinis';
import TestimonialsMarquee from '../components/Testimonials';
import WhatSets from '../components/WhatSets';
import InformedCards from '../components/InformedCards';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="Home">
      <Hero />
      <Herotwo />
      <Burbank />
      <Moreclinis />
      <AffiliateInsurance />
      <WhatSets />
      <Associations />
      <TestimonialsMarquee />
      <InformedCards />
      <AppointmentSection/>
      <Footer />
    </div>
  );
}

export default Home;

