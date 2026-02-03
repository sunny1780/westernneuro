import React from 'react';

const teamMembers = [
  {
    name: 'Sarah Derzakarian',
    title: 'Manager',
    image: '/images/team/1.png',
  },
  {
    name: 'Raul',
    title: 'Polysomnographic Technologist',
    image: '/images/team/2.png',
  },
  {
    name: 'Elaine Chen',
    title: 'PA-C',
    image: '/images/team/3.png',
  },
  {
    name: 'Antonio Ruiz',
    title: 'EEG Tech',
    image: '/images/team/4.png',
  },
  {
    name: 'Kathleen Chu',
    title: 'Manager',
    image: '/images/team/5.png',
  },
];

const WestTeam = () => {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{
        background: 'linear-gradient(to bottom, #ffffff, #e0f2fe)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 text-center mb-4">
          Meet Our Expert Team
        </h2>
        <p className="text-base md:text-lg text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          Our highly trained staff combines medical expertise with genuine compassion, working collaboratively to
          provide seamless, comprehensive care for every patient.
        </p>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-white/80 overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/5] bg-gray-100">
                <img
                  src={member.image || '/images/Team.png'}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-5 py-4 text-center">
                <h3 className="font-semibold text-[#053759] text-base md:text-lg">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WestTeam;
