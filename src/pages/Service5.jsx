import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import InfoSection from '../components/InfoSection';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';

const sleepDisordersServiceSection = {
  title: "Sleep Disorders",
  description:
    "Comprehensive evaluation and treatment for sleep apnea, insomnia, restless legs syndrome, narcolepsy, and other sleep disorders. We offer sleep studies and personalized treatment to improve your sleep and overall health.",
  image: "/images/services/sleep1.jpg",
  descriptionColor: "text-[#687076]",
};

const sleepDisordersInfoSection = {
  image1: "/images/services/sleep2.jpg",
  image2: "/images/services/sleep3.jpg",
  block1: {
    title1: "The Importance of Sleep",
    desc1:
      "Sleep is absolutely essential for normal, healthy function. Scientists and medical professionals still have much to learn about this complicated physiological phenomenon.",
    title2: "Prevalence of Sleep Disorders",
    desc2:
      "According to the National Institute of Neurological Disorders and Stroke, about 40 million people in the United States suffer from chronic long-term sleep disorders each year and an additional 20 million people experience occasional sleep problems.",
  },
  block2: {
    title1: "Sleep Medicine Expertise",
    desc1:
      "We diagnose and treat sleep apnea, insomnia, restless legs syndrome, narcolepsy, and other sleep disorders. Poor sleep affects your health, mood, and safety—we help you get the right diagnosis and treatment.",
    title2: "Sleep Studies",
    desc2:
      "When indicated, we arrange in-lab or home sleep studies to evaluate breathing, sleep stages, and other factors. Results guide treatment such as CPAP, oral appliances, or other therapies.",
  },
  hideBlock2: true,
  block3: {
    image: "/images/services/sleep3.jpg",
    items: [
      {
        title: "Narcolepsy",
        desc: "A chronic neurological disorder affecting the brain's ability to regulate sleep-wake cycles, causing excessive daytime sleepiness and sudden sleep attacks that significantly impact daily activities.",
      },
      {
        title: "Restless Leg Syndrome",
        desc: "An uncomfortable sensation in the legs accompanied by an irresistible urge to move them, typically worsening during rest and evening hours, significantly disrupting sleep quality and daytime function.",
      },
      {
        title: "Sleep Apnea",
        desc: "A potentially serious disorder where breathing repeatedly stops and starts during sleep, leading to daytime fatigue, cardiovascular problems, and other health complications if left untreated.",
      },
    ],
  },
  block3Stacked: true,
  extra: {},
  animate: true,
};

function Service5() {
  const serviceSection = sleepDisordersServiceSection;
  const infoSection = sleepDisordersInfoSection;

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
          block3={infoSection.block3}
          block3Stacked={infoSection.block3Stacked}
          extra={infoSection.extra}
          hideBlock2={infoSection.hideBlock2}
          animate={infoSection.animate}
        />
      </AnimatedSection>
      <AnimatedSection delay={120}><AppointmentSection /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
    </AnimatedPage>
  );
}

export default Service5;
