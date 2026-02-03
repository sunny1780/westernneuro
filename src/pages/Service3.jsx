import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import InfoSection from '../components/InfoSection';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';
import { neuromuscularContent } from '../data/servicesPageContent';

function Service3() {
  const { serviceSection, infoSection } = neuromuscularContent;
  return (
    <AnimatedPage>
      <AnimatedSection>
        <ServiceSection
          title={serviceSection.title}
          titleLines={serviceSection.titleLines}
          description={serviceSection.description}
          image={serviceSection.image}
          layout={serviceSection.layout}
        />
      </AnimatedSection>
      <AnimatedSection delay={80}>
        <InfoSection
          image1={infoSection.image1}
          image2={infoSection.image2}
          block1={infoSection.block1}
          block2={infoSection.block2}
          block3={infoSection.block3}
          extra={infoSection.extra}
          block1TextOnly={infoSection.block1TextOnly}
          block1ImageLeft={infoSection.block1ImageLeft}
          animate={infoSection.animate}
        />
      </AnimatedSection>
      <AnimatedSection delay={120}><AppointmentSection /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
    </AnimatedPage>
  );
}

export default Service3;
