import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const spring = { type: "spring", stiffness: 260, damping: 24 };
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};
const fadeInUp = {
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0, transition: spring },
};

const cards = [
  {
    title: "ADHD Uncovered: A Comprehensive Guide to Symptoms, Causes, and Effective Treatment",
    description:
      "If you or your child have recently been diagnosed with ADHD, or if you suspect ADHD may be present, it’s completely normal to feel worried, confused, or overwhelmed.",
    image: "/images/blog/1.png",
    to: "/blogs",
  },
  {
    title: "Anxiety Disorders: Symptoms, Causes & Treatment",
    description:
      "Autism Spectrum Disorder (ASD) is one of the most complex and often misunderstood neurodevelopmental conditions affecting children and adults today.",
    image: "/images/blog/2.png",
    to: "/blogs",
  },
  {
    title: "Stay Informed About Your Neurological Health",
    description:
      "Almost everyone experiences worry at some point about health, finances, work, or relationships. Feeling anxious from time to time is a normal and even healthy response to life’s uncertainties. ",
    image: "/images/blog/3.png",
    to: "/blogs",
  },
];

const StayInformedSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={spring}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Stay Informed About Your Neuro Care
          </h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...spring, delay: 0.1 }}
          >
            <Link
              to="/blogs"
              className="inline-flex items-center justify-center gap-2 bg-[#1299ED] hover:bg-[#0d7bc7] text-white font-medium px-5 py-2.5 rounded-xl transition flex-shrink-0 w-fit"
            >
              Learn More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100 flex flex-col group"
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              {/* Image */}
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/400x250/e5e7eb/9ca3af?text=Image";
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>
                <Link
                  to={card.to}
                  className="flex items-center justify-center gap-2 bg-[#1299ED] hover:bg-[#0d7bc7] text-white font-medium px-6 py-3 rounded-xl transition w-full"
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StayInformedSection;
