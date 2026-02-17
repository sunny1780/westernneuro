import React from 'react';
import { motion } from 'framer-motion';

const springBounce = { type: "spring", stiffness: 280, damping: 20 };
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0, transition: springBounce },
};
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: springBounce },
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

const WestThree = () => {
  return (
    <section className="bg-white py-12 md:py-20 px-4 sm:px-6 md:px-16 overflow-visible">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Left - Text Content */}
          <motion.div className="text-left" variants={staggerContainer}>
            <motion.h2
              variants={fadeInLeft}
              className="text-[32px] sm:text-[40px] md:text-[48px] leading-[1] font-medium text-[#11181C] mb-6 break-words"
              style={{ letterSpacing: '0.5%' }}
            >
              Medical Qualifications & Experience
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 mb-8">
            Dr. Fawaz Faisal's extensive training from Stanford University and UCLA ensures expert, comprehensive neurological care.
            </motion.p>

            <motion.div className="space-y-6 mb-8" variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <h3
                  className="text-[20px] sm:text-[24px] md:text-[30px] leading-[1.2] font-semibold text-[#11181C] mb-2"
                  style={{ letterSpacing: '0.5%' }}
                >
                  Education
                </h3>
                <ul className="text-gray-600 space-y-1 list-disc list-inside">
                  <li>University of Damascus, Damascus, Syria, 1986</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3
                  className="text-[20px] sm:text-[24px] md:text-[30px] leading-[1.2] font-semibold text-[#11181C] mb-2"
                  style={{ letterSpacing: '0.5%' }}
                >
                  Training
                </h3>
                <ul className="text-gray-600 space-y-1 list-disc list-inside">
                  <li>Stanford University Hospital, Neurology</li>
                  <li>UCLA School of Medicine: Fellowship training in Sleep Disorders</li>
                  <li>UCLA School of Medicine, Clinical Neurophysiology</li>
                  <li>UCLA School of Medicine, special training in neuromuscular disorders, EMG/NCS</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3
                  className="text-[20px] sm:text-[24px] md:text-[30px] leading-[1.2] font-semibold text-[#11181C] mb-2"
                  style={{ letterSpacing: '0.5%' }}
                >
                  Board Certification
                </h3>
                <ul className="text-gray-600 space-y-1 list-disc list-inside">
                  <li>Board of Psychiatry and Neurology: certified in Neurology</li>
                  <li>Board of Sleep Medicine</li>
                  <li>Board of Clinical Neurophysiology</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3
                  className="text-[20px] sm:text-[24px] md:text-[30px] leading-[1.2] font-semibold text-[#11181C] mb-2 break-words"
                  style={{ letterSpacing: '0.5%' }}
                >
                  Academic & Administrative Appointment
                </h3>
                <ul className="text-gray-600 space-y-1 list-disc list-inside">
                  <li>Assistant Clinical Professor, UCLA</li>
                  <li>Providence Saint Joseph Hospital, Burbank, California</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3
                  className="text-[20px] sm:text-[24px] md:text-[30px] leading-[1.2] font-semibold text-[#11181C] mb-2"
                  style={{ letterSpacing: '0.5%' }}
                >
                  Hospital Appointments
                </h3>
                <ul className="text-gray-600 space-y-1 list-disc list-inside">
                  <li>Providence Saint Joseph, Burbank</li>
                  <li>UCLA Medical Center</li>
                  <li>Cedars-Sinai Medical Center</li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div className="flex flex-wrap gap-4" variants={staggerContainer}>
              <motion.a
                href="/"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={springBounce}
                className="inline-flex items-center gap-3 bg-[#1893FF] hover:bg-[#0f80dd] text-white font-semibold px-6 py-3 rounded-md transition"
              >
                Download Resume
                <span className="inline-flex items-center justify-center w-8 h-8">
                  <img src="/images/Dicon.svg" alt="" className="w-5 h-5 object-contain" />
                </span>
              </motion.a>
              <motion.a
                href="/"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={springBounce}
                className="inline-flex items-center gap-3 border border-[#94C6F1] text-[#0A8DDB] hover:bg-[#F3F8FF] font-semibold px-6 py-3 rounded-md transition"
              >
                LinkedIn
                <span className="inline-flex items-center justify-center w-8 h-8">
                  <img src="/images/Licon.svg" alt="" className="w-5 h-5 object-contain" />
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Drfaisal Image (name, blue bg, overlay all in image) */}
          <motion.div
            className="flex justify-center lg:justify-end pt-8 sticky top-10 self-start"
            variants={imageVariants}
          >
            <motion.img
              src="/images/Drfaisal.png"
              alt="Dr Faisal - Burbank Neurology Expert"
              className="w-full max-w-md h-auto object-contain"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WestThree;
