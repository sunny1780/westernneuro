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
    <section className="bg-white py-12 md:py-20 px-4 sm:px-6 md:px-16 overflow-hidden">
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
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Burbank Neurology Expert
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </motion.p>

            <motion.div className="space-y-6 mb-8" variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <h3 className="font-bold text-gray-900 mb-2">Education</h3>
                <ul className="text-gray-600 space-y-1 list-disc list-inside">
                  <li>University of Damascus, Damascus, Syria, 1986</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="font-bold text-gray-900 mb-2">Training</h3>
                <ul className="text-gray-600 space-y-1 list-disc list-inside">
                  <li>Stanford University Hospital, Neurology</li>
                  <li>UCLA School of Medicine: Fellowship training in Sleep Disorders</li>
                  <li>UCLA School of Medicine, Clinical Neurophysiology</li>
                  <li>UCLA School of Medicine, special training in neuromuscular disorders, EMG/NCS</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="font-bold text-gray-900 mb-2">Board Certification</h3>
                <ul className="text-gray-600 space-y-1 list-disc list-inside">
                  <li>Board of Psychiatry and Neurology: certified in Neurology</li>
                  <li>Board of Sleep Medicine</li>
                  <li>Board of Clinical Neurophysiology</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="font-bold text-gray-900 mb-2">Academic & Administrative Appointment</h3>
                <ul className="text-gray-600 space-y-1 list-disc list-inside">
                  <li>Assistant Clinical Professor, UCLA</li>
                  <li>Providence Saint Joseph Hospital, Burbank, California</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="font-bold text-gray-900 mb-2">Hospital Appointments</h3>
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
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </motion.a>
              <motion.a
                href="/"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={springBounce}
                className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-5 py-2.5 rounded-lg transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Drfaisal Image (name, blue bg, overlay all in image) */}
          <motion.div
            className="flex justify-center lg:justify-end pt-12 lg:pt-60"
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
