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
const headingPop = {
  initial: { opacity: 0, y: 36, scale: 0.94 },
  animate: { opacity: 1, y: 0, scale: 1, transition: springBounce },
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

const Westernhero = () => {
  return (
    <section className="bg-white py-12 md:py-20 px-4 sm:px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            className="text-left"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              variants={headingPop}
              className="text-[48px] sm:text-[64px] md:text-[72px] lg:text-[84px] xl:text-[96px] font-medium text-[#053759] leading-[1] mb-6 break-words"
              style={{ letterSpacing: '0.5%' }}
            >
              Western Neurological Associates
            </motion.h1>
            <motion.p
              variants={fadeInLeft}
              className="text-gray-500 text-base md:text-lg max-w-lg leading-relaxed"
            >
              Triple Board-Certified Neurologist Serving Burbank Since 2010
            </motion.p>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="w-full max-w-lg rounded-2xl overflow-hidden shadow-lg"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="/images/west.png"
                alt="Western Neurological Associates - Western Sleep Center"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Westernhero;
