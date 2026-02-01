import React from 'react';

const WestTeam = () => {
  const teamMembers = [
    { name: 'Full name', title: 'Job title' },
    { name: 'Full name', title: 'Job title' },
    { name: 'Full name', title: 'Job title' },
  ];

  return (
    <section
      className="py-12 md:py-20 px-4 sm:px-6"
      style={{
        background: 'linear-gradient(to bottom, white, #e0f2fe)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Our Team
        </h2>
        <p className="text-base md:text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our physicians are affiliated with these local hospitals
        </p>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-md overflow-hidden"
            >
              <div className="aspect-square">
                <img
                  src="/images/Team.png"
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-900">{member.name}</h3>
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
