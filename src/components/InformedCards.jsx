import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const cards = [
  {
    title: 'ADHD Uncovered: A Comprehensive Guide to Symptoms, Causes, and Effective Treatment',
    description:
      "If you or your child have recently been diagnosed with ADHD, or if you suspect ADHD may be present, it's completely normal to feel worried, confused, or overwhelmed.",
    image: '/images/blog/1.png',
    to: '/blog',
  },
  {
    title: 'Anxiety Disorders: Symptoms, Causes & Treatment',
    description:
      'Autism Spectrum Disorder (ASD) is one of the most complex and often misunderstood neurodevelopmental conditions affecting children and adults today.',
    image: '/images/blog/2.png',
    to: '/blog',
  },
  {
    title: 'Stay Informed About Your Neurological Health',
    description:
      "Almost everyone experiences worry at some point about health, finances, work, or relationships. Feeling anxious from time to time is a normal and even healthy response to life's uncertainties. ",
    image: '/images/blog/3.png',
    to: '/blog',
  },
];

const ArrowButton = () => (
  <div className="w-12 h-12 rounded-full bg-[#69B0E9] flex items-center justify-center flex-shrink-0">
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </div>
);

const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.threshold, options.rootMargin]);

  return [ref, isInView];
};

function InformedCards() {
  const [sectionRef, sectionInView] = useInView();

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24 px-4 sm:px-6 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3 ${
            sectionInView ? 'animate-slide-up-bounce' : 'opacity-0'
          }`}
        >
          Stay Informed About Your Neuro Care
        </h2>
        <p
          className={`text-gray-600 text-base md:text-lg text-center mb-12 md:mb-16 max-w-2xl mx-auto ${
            sectionInView ? 'animate-slide-up-bounce' : 'opacity-0'
          }`}
          style={sectionInView ? { animationDelay: '100ms' } : {}}
        >
          Stay informed with our latest insights on neurological health
        </p>

        {/* Service Cards */}
        <div className="divide-y divide-gray-200">
          {cards.map((card, index) => (
            <Link
              key={card.to + index}
              to={card.to}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 py-6 md:py-8 group block ${
                sectionInView
                  ? index % 2 === 0
                    ? 'animate-slide-in-right-bounce'
                    : 'animate-slide-in-left-bounce'
                  : 'opacity-0'
              }`}
              style={
                sectionInView
                  ? { animationDelay: `${200 + index * 120}ms` }
                  : {}
              }
            >
              {/* Image - Far Left */}
              <div className="w-full sm:w-40 md:w-48 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 aspect-[4/3]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title + Description - Right of image, heading above paragraph, left-aligned */}
              <div className="flex-1 min-w-0 text-left">
                <h3 className="text-lg md:text-xl font-bold text-[#154360] mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Arrow Button - Far Right, vertically centered */}
              <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300 self-center sm:self-auto">
                <ArrowButton />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InformedCards;
