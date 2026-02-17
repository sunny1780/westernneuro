import React from 'react';
import { motion } from 'framer-motion';

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

const teamMembers = [
  { name: 'Sarah Derzakarian', title: 'Manager', image: '/images/team/1.png' },
  { name: 'Raul', title: 'Polysomnographic Technologist', image: '/images/team/2.png' },
  { name: 'Elaine Chen', title: 'PA-C', image: '/images/team/3.png' },
  { name: 'Antonio Ruiz', title: 'EEG Tech', image: '/images/team/4.png' },
  { name: 'Kathleen Chu', title: 'Manager', image: '/images/team/5.png' },
];

const WestTeam = () => {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #ffffff, #e0f2fe)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <motion.h2
            variants={fadeInUp}
            className="text-[32px] sm:text-[40px] md:text-[48px] font-medium text-[#11181C] leading-[1] text-center mb-4 break-words"
            style={{ letterSpacing: '0.5%' }}
          >
            Meet Our Expert Team
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto"
          >
            Our highly trained staff combines medical expertise with genuine compassion, working collaboratively to
            provide seamless, comprehensive care for every patient.
          </motion.p>

          {/* Team Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
            variants={staggerContainer}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={cardPop}
                className="bg-white rounded-2xl shadow-sm border border-[#D9EAFB] overflow-hidden flex flex-col"
                whileHover={{ y: -4, boxShadow: "0 10px 24px rgba(15,23,42,0.08)" }}
                transition={springBounce}
              >
                <div className="p-3">
                  <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
                    <img
                      src={member.image || '/images/Team.png'}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="px-4 pb-4 text-center">
                  <h3 className="font-semibold text-[#053759] text-sm md:text-base">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">{member.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WestTeam;
