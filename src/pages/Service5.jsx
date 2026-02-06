import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import SleepDetailSection from '../components/SleepDetailSection';
import SleepTreatmentSection from '../components/SleepTreatmentSection';
import SleepFaqs from '../components/SleepFaqs';
import StayInformed from '../components/StayInformed';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';
import { sleepDisordersContent } from '../data/servicesPageContent';

function Service5() {
  const { serviceSection } = sleepDisordersContent;

  return (
    <AnimatedPage>
      <AnimatedSection>
        <ServiceSection
          title={serviceSection.title}
          description={serviceSection.description}
          image={serviceSection.image}
          descriptionColor={serviceSection.descriptionColor}
          showButtons={serviceSection.showButtons}
        />
      </AnimatedSection>
      <AnimatedSection delay={80}>
        <SleepDetailSection animate />
      </AnimatedSection>
      <AnimatedSection delay={120}>
        <SleepTreatmentSection animate />
      </AnimatedSection>
      <AnimatedSection delay={160}><SleepFaqs /></AnimatedSection>
      <AnimatedSection delay={180}><StayInformed /></AnimatedSection>
      <AnimatedSection delay={200}><AppointmentSection /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
    </AnimatedPage>
  );
}

export default Service5;
