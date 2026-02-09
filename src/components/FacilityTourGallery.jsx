import React from 'react';
import { motion } from 'framer-motion';

const springBounce = { type: "spring", stiffness: 280, damping: 20 };
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const imagePop = {
  initial: { opacity: 0, scale: 0.88 },
  animate: { opacity: 1, scale: 1, transition: springBounce },
};

const galleryItems = [
  { src: '/images/gallery/1.png', alt: "Doctor's office with diplomas" },
  { src: '/images/gallery/2.png', alt: 'Private office with bookshelf' },
  { src: '/images/gallery/3.png', alt: 'Examination room' },
  { src: '/images/gallery/4.png', alt: 'Outdoor patio' },
  { src: '/images/gallery/5.png', alt: 'Reception and hallway' },
  { src: '/images/gallery/6.png', alt: 'Reception area entrance' },
  { src: '/images/gallery/7.png', alt: 'Staff and building exterior' },
  { src: '/images/gallery/1.png', alt: 'Waiting room' },
];

const leftIndexes = [0, 2, 4, 6];
const rightIndexes = [1, 3, 5, 7];
const leftHeights = ['h-[220px] md:h-[260px]', 'h-[140px] md:h-[170px]', 'h-[220px] md:h-[260px]', 'h-[140px] md:h-[170px]'];
const rightHeights = ['h-[140px] md:h-[170px]', 'h-[220px] md:h-[260px]', 'h-[140px] md:h-[170px]', 'h-[220px] md:h-[260px]'];

export default function FacilityTourGallery() {
  return (
    <section className="bg-white py-8 md:py-12 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="grid grid-cols-2 gap-3 md:gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left column: big, small, big, small */}
          <div className="flex flex-col gap-3 md:gap-4">
            {leftIndexes.map((index, i) => {
              const item = galleryItems[index];
              return (
                <motion.div
                  key={index}
                  variants={imagePop}
                  className={`overflow-hidden rounded-lg bg-gray-200 ${leftHeights[i]}`}
                  whileHover={{ scale: 1.02 }}
                  transition={springBounce}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://placehold.co/800x600/e5e7eb/9ca3af?text=Photo+' + (index + 1);
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Right column: small, big, small, big */}
          <div className="flex flex-col gap-3 md:gap-4">
            {rightIndexes.map((index, i) => {
              const item = galleryItems[index];
              return (
                <motion.div
                  key={index}
                  variants={imagePop}
                  className={`overflow-hidden rounded-lg bg-gray-200 ${rightHeights[i]}`}
                  whileHover={{ scale: 1.02 }}
                  transition={springBounce}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://placehold.co/800x600/e5e7eb/9ca3af?text=Photo+' + (index + 1);
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
