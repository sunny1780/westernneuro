import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import NeuromuscularDetailSection from '../components/NeuromuscularDetailSection';
import NeuromuscularTreatmentSection from '../components/NeuromuscularTreatmentSection';
import NeuromuscularFaqs from '../components/NeuromuscularFaqs';
import StayInformed from '../components/StayInformed';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';
import { neuromuscularContent } from '../data/servicesPageContent';

function Service3() {
  const { serviceSection } = neuromuscularContent;

  return (
    <AnimatedPage>
      <AnimatedSection>
        <ServiceSection
          title={serviceSection.title}
          titleLines={serviceSection.titleLines}
          description={serviceSection.description}
          image={serviceSection.image}
          imageStyle={serviceSection.imageStyle}
          layout={serviceSection.layout}
          textFirst={serviceSection.textFirst}
          descriptionColor={serviceSection.descriptionColor}
          showButtons={serviceSection.showButtons}
        />
      </AnimatedSection>
      <AnimatedSection delay={80}>
        <NeuromuscularDetailSection animate />
      </AnimatedSection>
      <AnimatedSection delay={120}>
        <NeuromuscularTreatmentSection animate />
      </AnimatedSection>
      <AnimatedSection delay={160}><NeuromuscularFaqs /></AnimatedSection>
      <AnimatedSection delay={180}><StayInformed /></AnimatedSection>
      <AnimatedSection delay={200}><AppointmentSection /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
    </AnimatedPage>
  );
}

export default Service3;
