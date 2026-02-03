import React from 'react';
import { motion } from 'framer-motion';

const springBounce = { type: "spring", stiffness: 280, damping: 22 };

export default function AnimatedSection({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        ...springBounce,
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
