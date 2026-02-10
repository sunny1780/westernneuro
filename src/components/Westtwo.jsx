import React from 'react';
import { motion } from 'framer-motion';

const springBounce = { type: "spring", stiffness: 280, damping: 20 };
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: springBounce },
};
const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: springBounce },
};
const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: springBounce },
};

const Westtwo = () => {
  return (
    <section className="bg-white py-12 md:py-20 px-4 sm:px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left - Image */}
          <motion.div
            variants={fadeInLeft}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/images/Docs.png"
                alt="Western Neurological Associates - Western Sleep Center"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div className="text-left" variants={staggerContainer}>
            <motion.h2
              variants={fadeInRight}
              className="text-[48px] font-medium text-[#11181C] leading-[1] mb-6"
              style={{ letterSpacing: '0.5%' }}
            >
              Expert Neurology & Sleep Care
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 mb-4">
              Established in the heart of Burbank over 12 years ago, Western Neurological Associates has become the valley's premier destination for comprehensive neurological and sleep disorder treatment. Under the expert leadership of Dr. Fawaz Faisal, our practice combines cutting-edge diagnostic technology with a deeply personal approach to patient care.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-600 mb-4">
              We believe that exceptional neurological care extends beyond accurate diagnosis—it requires understanding each patient's unique circumstances, concerns, and goals. Our team is dedicated to providing thorough education about your condition and treatment options, ensuring you feel empowered and confident in every step of your healthcare journey.
            </motion.p>
            {/* <p className="text-gray-600 mb-4">
              We are committed to providing quality care with compassion and
              individualized attention to each of our patients.
            </p>
            <p className="text-gray-600 mb-4">
              Our philosophy is to educate our patients and help them understand
              their condition so they can participate in their care. We offer a
              variety of Neurology sub-specialties — please see our Services page
              for more information.
            </p>
            <p className="text-gray-600">
              If you have any questions or concerns, please do not hesitate to
              contact us by phone, fax, or email. We are also working on adding
              Facebook and Twitter to keep our community informed.
            </p> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Westtwo;
