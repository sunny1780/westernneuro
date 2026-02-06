import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import HeadachesDetailSection from '../components/HeadachesDetailSection';
import HeadachesTreatmentSection from '../components/HeadachesTreatmentSection';
import HeadacheFaqs from '../components/HeadacheFaqs';
import StayInformed from '../components/StayInformed';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';
import { headachesContent } from '../data/servicesPageContent';

function Service2() {
  const { serviceSection } = headachesContent;

  return (
    <AnimatedPage>
      <AnimatedSection>
        <ServiceSection
          title={serviceSection.title}
          titleLines={serviceSection.titleLines}
          description={serviceSection.description}
          image={serviceSection.image}
          imageStyle={serviceSection.imageStyle}
          textFirst={serviceSection.textFirst}
          descriptionColor={serviceSection.descriptionColor}
          showButtons={serviceSection.showButtons}
        />
      </AnimatedSection>
      <AnimatedSection delay={80}>
        <HeadachesDetailSection animate />
      </AnimatedSection>
      <AnimatedSection delay={120}>
        <HeadachesTreatmentSection animate />
      </AnimatedSection>
      <AnimatedSection delay={160}><HeadacheFaqs /></AnimatedSection>
      <AnimatedSection delay={180}><StayInformed /></AnimatedSection>
      <AnimatedSection delay={200}><AppointmentSection /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
    </AnimatedPage>
  );
}

export default Service2;
