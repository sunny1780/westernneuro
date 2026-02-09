import React from 'react';
import { motion } from 'framer-motion';

const springBounce = { type: "spring", stiffness: 280, damping: 20 };
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const cardPop = {
  initial: { opacity: 0, y: 28, scale: 0.92 },
  animate: { opacity: 1, y: 0, scale: 1, transition: springBounce },
};

const WestLogos = () => {
  const logos = [
    { src: '/images/one.png', alt: 'American Board of Psychiatry and Neurology' },
    { src: '/images/two.png', alt: 'American Board of Sleep Medicine' },
    { src: '/images/three.png', alt: 'American Board of Clinical Neurophysiology' },
    { src: '/images/thee.png', alt: 'Amercan Board of Neurology'},

  ];

  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={cardPop}
              className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center min-h-[140px]"
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.1)" }}
              transition={springBounce}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-24 w-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WestLogos;
