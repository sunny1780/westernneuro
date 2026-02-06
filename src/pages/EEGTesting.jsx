import React from 'react';
import EEGHero from '../components/EEGHero';
import EEGTwo from '../components/EEBTwo';
import EEGFaqs from '../components/EEGFaqs';
import StayInformed from '../components/StayInformed';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';

const EEGtesting = () => {
  return (
    <>
      <EEGHero />
      <EEGTwo />
      <EEGFaqs />
      <StayInformed />
      <AppointmentSection />
      <Footer />
    </>
  );
};

export default EEGtesting;
