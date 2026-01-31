import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import InfoSection from '../components/InfoSection';


function Services() {
  return (
    <div>
      <ServiceSection/>
      <InfoSection/>
      <AppointmentSection/>
      <Footer />
    </div>
  );
}

export default Services;
