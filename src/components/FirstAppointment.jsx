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

const documents = [
  { title: "Welcome letter", file: "/images/welcomeletter.pdf" },
  { title: "New patient registration form", file: "/images/patientregistration.pdf" },
  { title: "Medical history", file: "/images/medicalhistory.pdf" },
  { title: "Privacy Practices acknowledgment form", file: "/images/privacypractices.pdf" },
];

export default function FirstAppointment() {
  return (
    <div className="px-4 sm:px-6 md:px-16 py-6 md:py-10 text-left overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          className="text-[48px] leading-[1] font-medium text-[#11181C] mb-8"
          style={{ letterSpacing: '0.5%' }}
        >
          Your First Appointment
        </motion.h1>
        <motion.h2
          variants={fadeInUp}
          className="text-[30px] leading-[36px] font-semibold text-[#11181C] mb-4"
          style={{ letterSpacing: '0.5%' }}
        >
          What to Expect & How to Prepare
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-[16px] leading-[24px] font-normal text-[#5A666E] max-w-3xl mb-8"
          style={{ letterSpacing: '0.5%' }}
        >
          Please arrive 15 minutes early to complete the necessary paperwork. To save time, download and complete these forms in advance and bring them to your appointment.
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="text-[30px] leading-[36px] font-semibold text-[#11181C] mb-4"
          style={{ letterSpacing: '0.5%' }}
        >
          Required Documents:
        </motion.h2>
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

              {doc.file ? (
                <motion.a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1893FF] hover:bg-[#0f80dd] text-white font-semibold px-4 py-2 rounded-md transition w-fit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springBounce}
                >
                  Download
                  <span className="inline-flex items-center justify-center w-6 h-6">
                  <img src="/images/Dicon.svg" alt="" className="w-4 h-4 object-contain" />
                  </span>
                </motion.a>
              ) : (
                <motion.button
                  type="button"
                  className="inline-flex items-center gap-2 bg-[#1893FF] hover:bg-[#0f80dd] text-white font-semibold px-4 py-2 rounded-md transition w-fit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springBounce}
                >
                  Download
                  <span className="inline-flex items-center justify-center w-6 h-6">
                  <img src="/images/Dicon.svg" alt="" className="w-4 h-4 object-contain" />
                  </span>
                </motion.button>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.h3
          variants={fadeInUp}
          className="text-[30px] leading-[36px] font-semibold text-[#11181C] mb-2"
          style={{ letterSpacing: '0.5%' }}
        >
          What to Bring
        </motion.h3>
        <motion.p
          variants={fadeInUp}
          className="text-[20px] leading-[28px] font-semibold text-[#11181C] mb-4"
          style={{ letterSpacing: '0.5%' }}
        >
          Please bring the following items to your first visit:
        </motion.p>

        <motion.ul
          className="list-disc list-inside pl-4 space-y-2 max-w-2xl"
          variants={staggerContainer}
        >
          {[
            "Patient’s insurance card",
            "List of current prescriptions and/or over-the-counter medication, including dose and frequency",
            "Information about patient’s medical and surgical history",
            "Recent test results, x-rays, or relevant records",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={fadeInUp}
              className="text-[16px] leading-[24px] font-normal text-[#5A666E]"
              style={{ letterSpacing: '0.5%' }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}
