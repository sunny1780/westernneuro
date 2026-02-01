import React from 'react';
import { Link } from 'react-router-dom';

const blogImage = '/images/blog.png';

// Simple neuron/neuro icon SVG for center card
const NeuronIcon = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-10"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="2" fill="none" />
    <circle cx="100" cy="100" r="15" fill="white" />
    <path d="M100 40 L100 25 M100 160 L100 175" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M40 100 L25 100 M160 100 L175 100" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M55 55 L45 45 M145 55 L155 45 M55 145 L45 155 M145 145 L155 155" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M70 70 Q100 50 130 70 M70 130 Q100 150 130 130 M70 70 Q50 100 70 130 M130 70 Q150 100 130 130" stroke="white" strokeWidth="1.5" fill="none" opacity="0.7" />
  </svg>
);

const ImageCard = ({ className, zIndex }) => (
  <div className={`rounded-2xl overflow-hidden shadow-lg flex-shrink-0 bg-gray-200 group/card ${className}`} style={{ zIndex }}>
    <img
      src={blogImage}
      alt="Neuro care"
      className="w-full h-full object-cover"
      onError={(e) => { e.target.style.display = 'none'; }}
    />
  </div>
);

function InformedCards() {
  return (
    <section className="bg-white py-16 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-sans">
            Stay Informed
            <br />
            <span className="text-gray-900">About Your Dental Care</span>
          </h2>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-lg shrink-0 font-sans"
            style={{ backgroundColor: '#1A87D6' }}
          >
            Learn More
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* 5 Cards - Overlapping carousel layout */}
        <div className="flex justify-center items-center gap-0 overflow-visible">
          {/* Card 1 - Left */}
          <ImageCard
            className="w-[180px] md:w-[220px] lg:w-[240px] h-[220px] md:h-[260px] lg:h-[280px] -mr-6 md:-mr-10 lg:-mr-12"
            zIndex={5}
          />

          {/* Card 2 */}
          <ImageCard
            className="w-[200px] md:w-[240px] lg:w-[260px] h-[240px] md:h-[280px] lg:h-[300px] -mr-6 md:-mr-10 lg:-mr-12"
            zIndex={10}
          />

          {/* Card 3 - Center (large) - Hover effect */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl w-[280px] md:w-[340px] lg:w-[380px] h-[300px] md:h-[360px] lg:h-[400px] flex-shrink-0 z-20 group"
          >
            <img
              src={blogImage}
              alt="Neuro care"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            {/* Blue overlay + content - visible on hover */}
            <div className="absolute inset-0 bg-[#1A87D6] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <NeuronIcon />
              <div
                className="absolute left-4 top-8"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
              >
                <span className="text-white font-semibold text-sm tracking-wide uppercase">
                  Blog & News
                </span>
              </div>
              <div className="absolute bottom-8 left-6 right-6 flex flex-col items-start">
                <p className="text-white text-lg md:text-xl font-bold leading-tight mb-4">
                  Tips for Neuro Health
                </p>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <ImageCard
            className="w-[200px] md:w-[240px] lg:w-[260px] h-[240px] md:h-[280px] lg:h-[300px] -ml-6 md:-ml-10 lg:-ml-12"
            zIndex={10}
          />

          {/* Card 5 - Right */}
          <ImageCard
            className="w-[180px] md:w-[220px] lg:w-[240px] h-[220px] md:h-[260px] lg:h-[280px] -ml-6 md:-ml-10 lg:-ml-12"
            zIndex={5}
          />
        </div>
      </div>
    </section>
  );
}

export default InformedCards;
