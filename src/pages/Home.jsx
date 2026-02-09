import React from 'react';
import Hero from '../components/Hero';
import Herotwo from '../components/Herotwo';
import AffiliateInsurance from '../components/AffiliateInsurance';
import Burbank from '../components/Burbank';
import Associations from '../components/Associations';
import Moreclinis from '../components/Moreclinis';
import TestimonialsMarquee from '../components/Testimonials';
import WhatSets from '../components/WhatSets';
import Allservices from '../components/Allservices';
// import InformedCards from '../components/InformedCards';
// import StayInformedSection from '../components/StayInformedSection';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import StayInformed from '../components/StayInformed';

function Home() {
  return (
    <div className="Home">
      <Hero />
      <Herotwo />
      <Burbank />
      <Moreclinis />
      <AffiliateInsurance />
      <Allservices />
      <WhatSets />
      <Associations />
      <TestimonialsMarquee />
      {/* <InformedCards />
      <StayInformedSection /> */}
      <StayInformed />
      <AppointmentSection/>
      <Footer />
    </div>
  );
}

export default Home;

