import React from 'react';
import PatientInfo from '../components/PatientInfo';
import AffiliateInsurance from '../components/AffiliateInsurance';
import FirstAppointment from '../components/FirstAppointment';
import SleepStudyInformation from '../components/SleepStudyInformation';
import InsurancePaymentInfo from '../components/InsurancePaymentInfo';
import PrivacyPractices from '../components/PrivacyPractices';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';
import HospitalAffiliations from '../components/HospitalAffiliations';

function PatientInformation() {
  return (
    <AnimatedPage>
      <div className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-24 space-y-4 md:space-y-6">
        <AnimatedSection><PatientInfo /></AnimatedSection>
        <AnimatedSection delay={80}><HospitalAffiliations /></AnimatedSection>
        <AnimatedSection delay={120}><FirstAppointment /></AnimatedSection>
        <AnimatedSection delay={80}><SleepStudyInformation /></AnimatedSection>
        <AnimatedSection delay={120}><InsurancePaymentInfo /></AnimatedSection>
        <AnimatedSection delay={80}><PrivacyPractices /></AnimatedSection>
        <AnimatedSection delay={80}><AffiliateInsurance /></AnimatedSection>
        <AnimatedSection delay={120}><AppointmentSection /></AnimatedSection>
      </div>
      <AnimatedSection><Footer /></AnimatedSection>
    </AnimatedPage>
  );
}

export default PatientInformation;
