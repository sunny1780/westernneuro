import React from 'react';
import { motion } from 'framer-motion';

const springBounce = { type: "spring", stiffness: 280, damping: 20 };
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const headingPop = {
  initial: { opacity: 0, y: 36, scale: 0.94 },
  animate: { opacity: 1, y: 0, scale: 1, transition: springBounce },
};
const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: springBounce },
};

export default function FacilityTourHero() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 text-center overflow-hidden">
      <motion.div
        className="max-w-3xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          variants={headingPop}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#053759] mb-6 md:mb-8"
        >
          Facility Tour
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-base md:text-lg leading-relaxed text-[#687076]"
        >
          Take a virtual tour of our state-of-the-art neurology practice located in the heart of Burbank. Our facility features advanced diagnostic equipment, comfortable examination rooms, and a welcoming atmosphere designed with your care and comfort in mind.
        </motion.p>
      </motion.div>
    </section>
  );
}
