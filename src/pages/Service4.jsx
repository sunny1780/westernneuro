import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import InfoSection from '../components/InfoSection';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';

const nerveConductionServiceSection = {
  title: "Nerve Conduction Studies",
  description:
    "Nerve conduction studies (NCS) and electromyography (EMG) help diagnose conditions affecting nerves and muscles. We perform these tests in a comfortable setting and use results to guide your treatment plan.",
  image: "/images/services/3.jpg",
};

const nerveConductionInfoSection = {
  image1: "/images/services/1.jpg",
  image2: "/images/services/2.jpg",
  block1: {
    title1: "What Are NCS & EMG?",
    desc1:
      "Nerve conduction studies measure how well your nerves carry electrical signals. EMG assesses muscle response. Together they help diagnose neuropathy, carpal tunnel syndrome, radiculopathy, myopathy, and other conditions.",
    title2: "What to Expect",
    desc2:
      "Tests are performed in our office. You may feel brief mild sensations during the test. Results are interpreted by our board-certified specialists and discussed with you to guide next steps.",
  },
  block2: {
    title1: "When Are They Used?",
    desc1:
      "We recommend NCS/EMG when you have symptoms such as numbness, tingling, weakness, or pain that may stem from nerve or muscle disease. Testing helps confirm or rule out specific diagnoses.",
    title2: "Expert Interpretation",
    desc2:
      "Our physicians are trained in clinical neurophysiology and perform and interpret these studies to ensure accurate diagnosis and a clear plan for your care.",
  },
  extra: {},
};

function Service4() {
  const serviceSection = nerveConductionServiceSection;
  const infoSection = nerveConductionInfoSection;

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
          extra={infoSection.extra}
        />
      </AnimatedSection>
      <AnimatedSection delay={120}><AppointmentSection /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
    </AnimatedPage>
  );
}

export default Service4;
