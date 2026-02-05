import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// data
const springBounce = { type: "spring", stiffness: 300, damping: 20 };
const springSmooth = { type: "spring", stiffness: 100, damping: 15 };

const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: springSmooth,
};

const namePop = {
  initial: { opacity: 0, y: 40, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1, transition: springBounce },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const imageVariants = {
  initial: { opacity: 0, x: 80, scale: 0.85 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { ...springBounce, delay: 0.25 },
  },
};

const statVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: springBounce,
  },
};

const AboutDoctorFaisalHero = ({ doctorImage = "/images/Drfaisal.png" }) => {
  return (
    <section className="min-h-screen pl-6 pr-4 sm:pl-8 sm:pr-6 md:pl-14 md:pr-12 lg:pl-20 lg:pr-16 py-12 md:py-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 overflow-hidden">
      {/* Left column: content */}
      <motion.div
        className="flex-1 max-w-2xl text-center lg:text-left"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#053759] leading-tight"
        >
          Meet
        </motion.h1>
        <motion.h1
          variants={namePop}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#053759] mb-4 md:mb-5 leading-tight"
        >
          Dr. Fawaz Faisal
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-[#687076] text-base sm:text-lg md:text-xl mb-6 md:mb-8"
        >
          Triple Board-Certified Neurological Expert
        </motion.p>

        <motion.div variants={fadeInUp}>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={springBounce}
          >
            <Link
              to="/services"
              className="inline-block bg-[#007BFF] text-white font-medium px-5 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#0069d9] transition mb-8 md:mb-10"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-12"
          variants={staggerContainer}
        >
          <motion.div
            variants={statVariants}
            className="text-center lg:text-left"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#053759]">
              200+
            </p>
            <p className="text-sm sm:text-base text-[#053759] mt-1">
              Successful Patient Outcomes
            </p>
          </motion.div>
          <motion.div
            variants={statVariants}
            className="text-center lg:text-left"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#053759]">
              70K+
            </p>
            <p className="text-sm sm:text-base text-[#053759] mt-1">
              Safe Prescriptions Managed
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right column: doctor image + backgrounds */}
      <motion.div
        className="flex-1 w-full max-w-xl lg:max-w-3xl relative flex justify-center lg:justify-end mt-10 lg:mt-0 min-h-[400px] sm:min-h-[500px] md:min-h-[600px]"
        variants={imageVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="relative w-full max-w-lg h-[400px] sm:h-[500px] md:h-[600px] lg:h-[640px] rounded-2xl overflow-hidden"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Background elements */}
          <div className="absolute left-0 top-0 w-[8%] h-full z-0" />
          <div className="absolute left-0 top-0 w-[50%] h-full z-0" />
          <div className="absolute right-0 bottom-0 w-[58%] h-[85%] rounded-tl-[3rem] z-0" />

          {/* Doctor image */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <img
              src={doctorImage}
              alt="Dr. Fawaz Faisal"
              className="w-full h-full object-cover object-top rounded-2xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutDoctorFaisalHero;
