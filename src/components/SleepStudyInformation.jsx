import { Download } from "lucide-react";
import { motion } from "framer-motion";

const springBounce = { type: "spring", stiffness: 280, damping: 20 };
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: springBounce },
};
const cardPop = {
  initial: { opacity: 0, y: 36, scale: 0.92 },
  animate: { opacity: 1, y: 0, scale: 1, transition: springBounce },
};

const documents = [{ title: "Patient instructions for sleep study" }];

const listItems = [
  "Patient's insurance card and identification",
  "Comfortable sleepwear (two-piece pajamas recommended)",
  "Personal toiletries and any nighttime medications",
  "A book or relaxing activity for before bedtime",
  "List of current medications you're taking",
  "Clean, product-free hair (no gels, sprays, or oils)",
];

export default function SleepStudyInformation() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-16 py-12 md:py-16 text-left overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2"
        >
          Sleep Study Information
        </motion.h1>
        <motion.h2 variants={fadeInUp} className="text-lg mb-4 font-semibold">
          Preparing for Your Sleep Study
        </motion.h2>

        <motion.p variants={fadeInUp} className="max-w-3xl mb-12">
          Preparing for Your Sleep Study — If you've been scheduled for a sleep study at our facility, proper preparation is essential for accurate results. Please review the instructions below and download the complete patient guide to ensure you're fully prepared for your appointment.
        </motion.p>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-16"
          variants={staggerContainer}
        >
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              variants={cardPop}
              className="bg-sky-50 text-black rounded-xl p-6 flex flex-col justify-between shadow-md"
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(14, 165, 233, 0.2)" }}
              transition={springBounce}
            >
              <h3 className="text-lg font-semibold mb-6">{doc.title}</h3>

              <motion.button
                className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={springBounce}
              >
                Download
                <Download size={16} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.h3 variants={fadeInUp} className="text-xl font-semibold mb-2">
          What to Bring to Your Sleep Study
        </motion.h3>
        <motion.p variants={fadeInUp} className="mb-4">
          Also, please bring the following:
        </motion.p>

        <motion.ul
          className="list-disc list-inside space-y-2 max-w-2xl"
          variants={staggerContainer}
        >
          {listItems.map((item, index) => (
            <motion.li key={index} variants={fadeInUp}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}
