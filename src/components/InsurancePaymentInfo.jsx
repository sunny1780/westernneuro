import { motion } from "framer-motion";

const springBounce = { type: "spring", stiffness: 280, damping: 20 };
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: springBounce },
};

export default function InsurancePaymentInfo() {
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
          variants={fadeInUp}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6"
        >
          Insurance and Payment Information
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-[16px] leading-[24px] font-normal text-[#5A666E] max-w-5xl"
          style={{ letterSpacing: '0.5%' }}
        >
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
  
