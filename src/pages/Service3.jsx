import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import InfoSection from '../components/InfoSection';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';

const neuromuscularServiceSection = {
  title: "Neuromuscular Disorders",
  titleLines: ["Neuromuscular", "Disorders"],
  description:
    "Specialized care for neuromuscular disorders using advanced EMG and nerve conduction studies for accurate diagnosis and targeted treatment.",
  image: "/images/services/disorder1.png",
  layout: "sideBySide",
  textFirst: true,
  descriptionColor: "text-[#687076]",
};

const neuromuscularInfoSection = {
  image1: "/images/services/disorder2.jpg",
  image2: "/images/services/disorder3.jpg",
  block1TextOnly: true,
  block1ImageLeft: true,
  animate: true,
  block1: {
    title1: "What Are Neuromuscular Disorders",
    desc1:
      "Neuromuscular disorders affect the peripheral nervous system, including nerves that control voluntary muscles and transmit sensory information. These conditions can cause muscle weakness, pain, numbness, and impaired mobility.",
    title2: "Electromyography (EMG)",
    desc2:
      "EMG testing measures the electrical activity of muscles at rest and during contraction, helping identify muscle or nerve dysfunction with precision and accuracy.",
  },
  block2: {
    title1: "Muscle and Nerve Disorders",
    desc1:
      "We diagnose and treat various conditions including peripheral neuropathy, carpal tunnel syndrome, radiculopathy, myopathy, and other nerve compression syndromes affecting daily function.",
    title2: "Nerve Conduction Studies",
    desc2:
      "Nerve conduction studies evaluate how well and how fast nerves send electrical signals, essential for diagnosing nerve damage, compression, or disease with detailed analysis.",
  },
  block3: {
    title1: "Our Diagnostic Process",
    desc1:
      "Dr. Faisal's specialized training in clinical neurophysiology and neuromuscular disorders ensures expert interpretation of all diagnostic tests combined with comprehensive clinical evaluation.",
    title2: "Treatment and Management",
    desc2:
      "Treatment plans are individualized based on the specific disorder and may include medications, physical therapy referrals, lifestyle modifications, and ongoing monitoring to improve function and quality of life.",
    image: "/images/services/disorder1.png",
  },
  extra: { sections: [], list: null },
};

function Service3() {
  const serviceSection = neuromuscularServiceSection;
  const infoSection = neuromuscularInfoSection;

  return (
    <AnimatedPage>
      <AnimatedSection>
        <ServiceSection
          title={serviceSection.title}
          titleLines={serviceSection.titleLines}
          description={serviceSection.description}
          image={serviceSection.image}
          textFirst={serviceSection.textFirst}
          layout={serviceSection.layout}
          descriptionColor={serviceSection.descriptionColor}
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
