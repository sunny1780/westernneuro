import React from "react";
import { motion } from "framer-motion";

const springBounce = { type: "spring", stiffness: 260, damping: 20 };
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: springBounce },
};
const slideInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0, transition: springBounce },
};

const EducationTraining = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 text-left overflow-hidden">
      <motion.div
        className="max-w-4xl mr-auto ml-0 text-left"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.h2
          variants={slideInLeft}
          className="text-[48px] leading-[1] font-medium text-[#11181C] mb-4 md:mb-6"
          style={{ letterSpacing: '0.5%' }}
        >
          Medical Qualifications & Experience
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-gray-600 mb-10 md:mb-12 leading-relaxed max-w-3xl"
        >
          Dr. Fawaz Faisal's extensive training from Stanford University and UCLA ensures expert, comprehensive neurological care.
        </motion.p>

        <motion.div className="space-y-8 md:space-y-10" variants={staggerContainer}>
          {/* Education */}
          <motion.div variants={fadeInUp}>
            <h3
              className="text-[30px] leading-[36px] font-semibold text-[#11181C] mb-2"
              style={{ letterSpacing: '0.5%' }}
            >
              Education
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1.5">
              <li>University of Damascus, Damascus, Syria — 1986</li>
            </ul>
          </motion.div>

          {/* Clinical / Postgraduate Training */}
          <motion.div variants={fadeInUp}>
            <h3
              className="text-[30px] leading-[36px] font-semibold text-[#11181C] mb-2"
              style={{ letterSpacing: '0.5%' }}
            >
              Clinical / Postgraduate Training
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1.5">
              <li>Stanford University Hospital — Neurology</li>
              <li>UCLA School of Medicine — Fellowship Training in Sleep Disorders</li>
            </ul>
          </motion.div>

          {/* Board Certifications */}
          <motion.div variants={fadeInUp}>
            <h3
              className="text-[30px] leading-[36px] font-semibold text-[#11181C] mb-2"
              style={{ letterSpacing: '0.5%' }}
            >
              Board Certifications
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1.5">
              <li>Board of Psychiatry and Neurology — Certified in Neurology</li>
              <li>Board of Sleep Medicine</li>
              <li>Board of Clinical Neurophysiology</li>
            </ul>
          </motion.div>

          {/* Academic & Administrative Appointments */}
          <motion.div variants={fadeInUp}>
            <h3
              className="text-[30px] leading-[36px] font-semibold text-[#11181C] mb-2"
              style={{ letterSpacing: '0.5%' }}
            >
              Academic & Administrative Appointments
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1.5">
              <li>Assistant Clinical Professor, UCLA</li>
              <li>Providence Saint Joseph Hospital, Burbank, California</li>
            </ul>
          </motion.div>

          {/* Hospital Affiliations */}
          <motion.div variants={fadeInUp}>
            <h3
              className="text-[30px] leading-[36px] font-semibold text-[#11181C] mb-2"
              style={{ letterSpacing: '0.5%' }}
            >
              Hospital Affiliations
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1.5">
              <li>Providence Saint Joseph Hospital, Burbank</li>
              <li>UCLA Medical Center</li>
              <li>Cedars-Sinai Medical Center</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mt-12 md:mt-16"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <button
            type="button"
            className="inline-flex items-center gap-3 bg-[#1893FF] hover:bg-[#0f80dd] text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Download Resume
            <span className="inline-flex items-center justify-center w-8 h-8">
              <img src="/images/Dicon.png" alt="" className="w-4 h-4 object-contain" />
            </span>
          </button>
          </motion.div>
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[#94C6F1] text-[#1E5FBF] hover:bg-[#F3F8FF] font-semibold px-6 py-3 rounded-md transition"
          >
            LinkedIn
            <span className="inline-flex items-center justify-center w-8 h-8">
              <img src="/images/Licon.png" alt="" className="w-4 h-4 object-contain" />
            </span>
          </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EducationTraining;
