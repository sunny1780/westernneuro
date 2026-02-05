import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import InfoSection from '../components/InfoSection';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';
import HeadacheTextSection from '../components/HeadacheTextSection';

const headachesServiceSection = {
  title: "Headaches & Migraines",
  titleLines: ["Headaches &", "Migraines"],
  description:
    "Specialized treatment for headaches and migraines using evidence-based approaches to reduce frequency, severity, and impact on your daily life.",
  image: "/images/services/head1.jpg",
  imageStyle: { width: "510.24px", maxWidth: "100%", height: "599.97px", borderRadius: "17.59px" },
  textFirst: true,
  descriptionColor: "text-[#687076]",
};

const headachesInfoSection = {
  image1: "/images/services/head2.jpg",
  image2: "/images/services/head3.png",
  block1ImageLeft: true,
  imageDimensions: "short",
  animate: true,
  block1: {
    title1: "Types of Headaches",
    desc1:
      "We diagnose and treat various headache types including tension headaches, migraines, cluster headaches, and secondary headaches caused by underlying conditions. Each type requires specific treatment approaches.",
    title2: "Our Treatment Approach",
    desc2:
      "Dr. Faisal conducts thorough neurological examinations to identify headache patterns and triggers, developing personalized treatment plans to provide effective relief and prevent future episodes.",
  },
  extra: {
    sections: [
      {
        title: "Treatment Options",
        desc: "We offer preventive medication therapy, acute headache relief medications, lifestyle modification counseling, trigger identification, and advanced treatment options for chronic conditions.",
      },
    ],
    list: null,
  },
  block2: {
    title1: "Headache & Migraine Care",
    desc1:
      "We evaluate and treat all types of headaches—migraine, tension-type, cluster, and others. Our approach combines accurate diagnosis with preventive and acute treatments tailored to your pattern and goals.",
    title2: "Prevention & Acute Relief",
    desc2:
      "We help you reduce headache frequency with preventive therapies and improve acute relief with the right medications and lifestyle adjustments. Your comfort and daily function are our focus.",
  },
};

function Service2() {
  const serviceSection = headachesServiceSection;
  const infoSection = headachesInfoSection;

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
        />
      </AnimatedSection>
      {/* <AnimatedSection delay={80}>
        <InfoSection
          image1={infoSection.image1}
          image2={infoSection.image2}
          block1={infoSection.block1}
          block2={infoSection.block2}
          extra={infoSection.extra}
          block1ImageLeft={infoSection.block1ImageLeft}
          imageDimensions={infoSection.imageDimensions}
          animate={infoSection.animate}
        />
      </AnimatedSection> */}
      <AnimatedSection delay={80}>
        <HeadacheTextSection />
      </AnimatedSection>
      <AnimatedSection delay={140}><AppointmentSection /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
    </AnimatedPage>
  );
}

export default Service2;
