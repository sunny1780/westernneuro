import React from 'react';
import AffiliateInsurance from '../components/AffiliateInsurance';
import TestimonialsMarquee from '../components/Testimonials';
import WhatSets from '../components/WhatSets';
import Appointment from '../components/Appointment';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar"

function Home() {
  return (
    <div className="Home">
      <Navbar/>
      <AffiliateInsurance />
      <WhatSets />
      <TestimonialsMarquee />
<Appointment />
<Footer />
    </div>
  );
}

export default Home;

