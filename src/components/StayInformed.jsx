import React from 'react';
import { Link } from 'react-router-dom';

const cards = [
  {
    image: "/images/Blog1.jpg",
    title: "ADHD Uncovered: A Comprehensive Guide",
    desc: "Learn about ADHD symptoms, causes, and effective treatments for children and adults. Discover how proper support can help individuals thrive.",
    link: "/blog1",
  },
  {
    image: "/images/Blog2.jpg",
    title: "Unraveling Autism: Understanding ASD",
    desc: "A comprehensive guide to understanding, diagnosing, and treating Autism Spectrum Disorder for children and adults.",
    link: "/blog2",
  },
  {
    image: "/images/Blog3.jpg",
    title: "Anxiety: Understanding & Treatment",
    desc: "Learn about anxiety disorders, their symptoms, causes, and effective treatment options including therapy and lifestyle changes.",
    link: "/blog3",
  },
];


export default function StayInformed() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="mx-auto flex flex-col max-w-6xl w-full gap-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2
            className="text-left"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(32px, 5vw, 48px)',
              lineHeight: '100%',
              letterSpacing: '0.5%',
              color: '#11181C',
            }}
          >
            Stay Informed
            <br />
            About Your Neuro Care
          </h2>
          <Link
            to="/blogs"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-[#1893FF] hover:bg-[#0f80dd] transition flex-shrink-0"
          >
            Learn More
            <img
              src="/images/srow.svg"
              alt=""
              className="w-4 h-4 object-contain"
            />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={card.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-[#11181C] mb-3 text-left">
                  {card.title}
                </h3>
                <p className="text-base text-[#687076] leading-relaxed mb-6 text-left flex-1">
                  {card.desc}
                </p>
                <Link
                  to={card.link}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-[#1893FF] hover:bg-[#0f80dd] transition w-full"
                >
                  Learn More
                  <img
                    src="/images/arowicon.png"
                    alt=""
                    className="w-4 h-4 object-contain rotate-[-90deg]"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}