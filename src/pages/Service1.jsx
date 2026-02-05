import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import InfoSection from '../components/InfoSection';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';

const epilepsyServiceSection = {
  title: "Epilepsy",
  description:
    "Expert care for epilepsy management with advanced diagnostics, personalized treatment plans, and ongoing support to help you achieve optimal seizure control and quality of life.",
  image: "/images/services/1.jpg",
  descriptionColor: "text-[#687076]",
};

const epilepsyInfoSection = {
  image1: "/images/services/2.jpg",
  image2: "/images/services/3.jpg",
  block1: {
    title1: "Understanding Epilepsy",
    desc1:
      "Epilepsy is a chronic neurological condition characterized by recurrent seizures that are caused by abnormal cerebral nerve cell activity. There is a distinction between a patient who has one seizure and a patient who has epilepsy.",
    title2: "Types of Epilepsy",
    desc2:
      "Epilepsy can be classified as either idiopathic or symptomatic. Idiopathic epilepsy has no known cause, and the person has no other signs of neurological disease or mental deficiency. Symptomatic epilepsy results from a known condition such as stroke, head injury, poisoning, Lennox-Gastaut syndrome, or cerebral palsy.",
  },
  block2: {
    title1: "Incidence and Prevalence of Epilepsy",
    desc1:
      "More than 2 million people in the United States and over 50 million worldwide suffer from epilepsy. In the United States, more than 300,000 people with epilepsy are under the age of 14, and more than 500,000 are over the age of 65.",
    title2: "Our Treatment Approach",
    desc2:
      "Dr. Faisal utilizes advanced EEG technology and comprehensive neurological evaluation to accurately diagnose epilepsy type and develop individualized treatment strategies tailored to your specific needs.",
  },
  extra: {
    sections: [
      {
        title: "Diagnostic Services",
        desc: "We offer comprehensive neurological examination, electroencephalogram (EEG) testing, medication management, seizure trigger identification, and thorough patient education to help you manage your condition effectively.",
      },
    ],
    list: null,
  },
  animate: true,
};

function Service1() {
  const serviceSection = epilepsyServiceSection;
  const infoSection = epilepsyInfoSection;

  return (
    <AnimatedPage>
      <AnimatedSection>
        <ServiceSection
          title={serviceSection.title}
          description={serviceSection.description}
          image={serviceSection.image}
          descriptionColor={serviceSection.descriptionColor}
        />
      </AnimatedSection>
      <AnimatedSection delay={80}>
        <InfoSection
          image1={infoSection.image1}
          image2={infoSection.image2}
          block1={infoSection.block1}
          block2={infoSection.block2}
          extra={infoSection.extra}
          animate={infoSection.animate}
        />
      </AnimatedSection>
      <AnimatedSection delay={120}><AppointmentSection /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
    </AnimatedPage>
  );
}

export default Service1;
