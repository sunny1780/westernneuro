import React from 'react';
import { Link } from 'react-router-dom';

const cards = [
  {
    image: "/images/blghero.png",
    title: "Stay Informed About Your Neurological Health",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    link: "/blogs",
  },
  {
    image: "/images/blghero.png",
    title: "Stay Informed About Your Neurological Health",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    link: "/blogs",
  },
  {
    image: "/images/blghero.png",
    title: "Stay Informed About Your Neurological Health",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    link: "/blogs",
  },
];


export default function StayInformed() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="mx-auto flex flex-col max-w-6xl w-full gap-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-[#1893FF] hover:bg-[#0f80dd] transition flex-shrink-0 self-start sm:self-center"
          >
            Learn More
            <img
              src="/images/arowicon.png"
              alt=""
              className="w-4 h-4 object-contain rotate-[-90deg]"
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
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-white bg-[#1893FF] hover:bg-[#0f80dd] transition w-fit"
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
