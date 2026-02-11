import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import InfoSection from '../components/InfoSection';
import EpilepsyDetailSection from '../components/EpilepsyDetailSection';
import EpilepsyApproachSection from '../components/EpilepsyApproachSection';
import EpilepsyFaqs from '../components/EpilepsyFaqs';
import StayInformed from '../components/StayInformed';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';
import { epilepsyContent } from '../data/servicesPageContent';

function Service1() {
  const { serviceSection, infoSection } = epilepsyContent;

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
        <EpilepsyDetailSection animate />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <EpilepsyApproachSection />
      </AnimatedSection>
      <AnimatedSection delay={120}>
        {/* <InfoSection
          image1={infoSection.image1}
          image2={infoSection.image2}
          block1={infoSection.block1}
          block1ImageOnly={infoSection.block1ImageOnly}
          block1ImageStyle={infoSection.block1ImageStyle}
          hideBlock2={infoSection.hideBlock2}
          contentBlock={infoSection.contentBlock}
          animate={infoSection.animate}
        /> */}
      </AnimatedSection>
      <AnimatedSection delay={160}><EpilepsyFaqs /></AnimatedSection>
      <AnimatedSection delay={180}><StayInformed /></AnimatedSection>
      <AnimatedSection delay={200}><AppointmentSection /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
    </AnimatedPage>
  );
}

export default Service1;
