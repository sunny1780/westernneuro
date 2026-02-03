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
    <section className="px-4 sm:px-6 md:px-16 py-12 md:py-20 text-left overflow-hidden">
      <motion.div
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

        <motion.p variants={fadeInUp} className="max-w-5xl leading-relaxed">
          Western Neurological Associates is a provider for Medicare and most major
          insurance plans, and provides insurance billing. You are responsible for
          co-payments or charges that are not covered by your insurance. If you
          have questions regarding billing or which insurance plans we accept,
          please contact us. Questions regarding insurance coverage and benefits
          should be directed to your employer or insurance company.
        </motion.p>
      </motion.div>
    </section>
  );
}
  