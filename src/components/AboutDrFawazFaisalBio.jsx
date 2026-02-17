import React from "react";
import { motion } from "framer-motion";

const springBounce = { type: "spring", stiffness: 260, damping: 20 };
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: springBounce },
};
// data
const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: springBounce },
};
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: springBounce },
};

const AboutDrFawazFaisalBio = ({ imageSrc = "/images/dr-faisal-hero.png" }) => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left: Image */}
          <motion.div
            variants={fadeInLeft}
            className="rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
          >
            <img
              src={imageSrc}
              alt="Dr. Fawaz Faisal"
              className="w-full h-auto object-cover object-top aspect-[4/5] lg:aspect-auto lg:min-h-[500px]"
            />
          </motion.div>

          {/* Right: Text content */}
          <motion.div className="text-left" variants={staggerContainer}>
            <motion.h2
              variants={fadeInRight}
              className="text-[48px] font-medium text-[#11181C] leading-[1] mb-6 md:mb-8"
              style={{ letterSpacing: '0.5%' }}
            >
              About Dr. Fawaz Faisal
            </motion.h2>

            <motion.div className="space-y-5 text-gray-700 leading-relaxed" variants={staggerContainer}>
              <motion.p variants={fadeInUp}>
               Facing a neurological condition can be overwhelming. Dr. Fawaz Faisal combines triple board certification with over 20 years of experience to provide expert, compassionate care you can trust.With certifications in Neurology, Sleep Medicine, and Clinical Neurophysiology, he brings comprehensive expertise to the diagnosis and treatment of complex neurological conditions.
              </motion.p>
              <motion.p variants={fadeInUp}>
               As an Assistant Clinical Professor at UCLA and a practicing physician at Providence Saint Joseph Hospital, UCLA Medical Center, and Cedars-Sinai Medical Center, Dr. Faisal bridges academic excellence with compassionate patient care. He is committed to staying at the forefront of neurological research and innovative treatments to offer his patients the best possible outcomes.
              </motion.p>
              <motion.p variants={fadeInUp}>
               Dr. Faisal's approach to patient care combines rigorous scientific training with genuine dedication to patient well-being. He believes in thoroughly explaining conditions and treatment options to his patients, involving them in care decisions every step of the way.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDrFawazFaisalBio;
