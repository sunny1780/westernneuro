import { motion } from "framer-motion";

const springBounce = { type: "spring", stiffness: 300, damping: 20 };
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const headingPop = {
  initial: { opacity: 0, y: 32, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: springBounce },
};
const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: springBounce },
};

export default function PrivacyPractices() {
  return (
    <section className="px-4 sm:px-6 md:px-16 py-6 md:py-8 text-left overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          variants={headingPop}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6"
        >
          Privacy Practices
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-[16px] leading-[24px] font-normal text-[#5A666E] max-w-5xl"
          style={{ letterSpacing: '0.5%' }}
        >
          Our Notice of Privacy Practices describes how medical information about you may be used and disclosed and how you can get access to this information. It is given to all new patients and a copy is available upon request.
        </motion.p>
      </motion.div>
    </section>
  );
}
  
