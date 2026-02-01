import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import InfoSection from '../components/InfoSection';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';
import { headachesContent } from '../data/servicesPageContent';

function Service2() {
  const { serviceSection, infoSection } = headachesContent;
  return (
    <AnimatedPage>
      <AnimatedSection>
        <ServiceSection
          title={serviceSection.title}
          description={serviceSection.description}
          image={serviceSection.image}
        />
      </AnimatedSection>
      <AnimatedSection delay={80}>
        <InfoSection
          image1={infoSection.image1}
          image2={infoSection.image2}
          block1={infoSection.block1}
          block2={infoSection.block2}
        />
      </AnimatedSection>
      <AnimatedSection delay={120}><AppointmentSection /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
    </AnimatedPage>
  );
}

export default Service2;
