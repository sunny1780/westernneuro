import React from 'react';
import PatientInfo from '../components/PatientInfo';
import AffiliateInsurance from '../components/AffiliateInsurance';
import FirstAppointment from '../components/FirstAppointment';
import SleepStudyInformation from '../components/SleepStudyInformation';
import InsurancePaymentInfo from '../components/InsurancePaymentInfo';
import PrivacyPractices from '../components/PrivacyPractices';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';



function PatientInformation() {
  return (
    <div>
      <PatientInfo />
      <AffiliateInsurance/>
      <FirstAppointment/>
      <SleepStudyInformation/>
      <InsurancePaymentInfo/>
      <PrivacyPractices/>
      <AppointmentSection/>
      <Footer/>
    </div>
  );
}

export default PatientInformation;
