import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import MapSection from '../components/MapSection';

function BookAppointment() {
  return (
    <div>
      <AppointmentSection />
      <MapSection/>
      <Footer />
    </div>
  );
}

export default BookAppointment;
