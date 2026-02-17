import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import EpilepsyDetailSection from '../components/EpilepsyDetailSection';
import EpilepsyApproachSection from '../components/EpilepsyApproachSection';
import EpilepsyFaqs from '../components/EpilepsyFaqs';
import StayInformed from '../components/StayInformed';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';
import { epilepsyContent } from '../data/servicesPageContent';

function Service1() {
  const { serviceSection } = epilepsyContent;

  return (
    <AnimatedPage>
      <div style={{ fontFamily: 'Inter, sans-serif' }}>
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
        <EpilepsyDetailSection animate />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <EpilepsyApproachSection />
      </AnimatedSection>
      <AnimatedSection delay={160}><EpilepsyFaqs /></AnimatedSection>
      <AnimatedSection delay={180}><StayInformed /></AnimatedSection>
      <AnimatedSection delay={200}><AppointmentSection /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
      </div>
    </AnimatedPage>
  );
}

export default Service1;
