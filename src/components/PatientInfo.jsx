import React from 'react';
import { motion } from 'framer-motion';

const springBounce = { type: "spring", stiffness: 280, damping: 20 };
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0, transition: springBounce },
};
const imageVariants = {
  initial: { opacity: 0, x: 60, scale: 0.92 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { ...springBounce, delay: 0.2 },
  },
};

const PatientInfo = () => {
  return (
    <section className="overflow-hidden py-6 md:py-10 px-4 sm:px-6 md:px-16">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row">
      {/* Left: Title + description */}
      <motion.div
        className="flex-1 flex flex-col justify-center py-6 md:py-8 lg:py-12 text-left"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          variants={fadeInLeft}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#053759] leading-tight mb-4 md:mb-6"
        >
          <span className="block">Patient</span>
          <span className="block">Resources &</span>
          <span className="block">Information</span>
        </motion.h1>
        <motion.p
          variants={fadeInLeft}
          className="text-[16px] leading-[24px] font-normal text-[#5A666E] max-w-lg"
          style={{ letterSpacing: '0.5%' }}
        >
         Everything You Need for Your Visit to Western Neurological Associates
        </motion.p>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10"
        variants={imageVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="w-full max-w-md rounded-2xl md:rounded-3xl overflow-hidden"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="/images/ptinfo.png"
            alt="Patient Information"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
};

export default PatientInfo;
