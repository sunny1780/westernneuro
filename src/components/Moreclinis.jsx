import React from 'react';

const Moreclinis = () => {
  return (
    <section id="moreclinis" className="bg-white py-12 md:py-20 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center">
          {/* Left - Large Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/Docs.png"
              alt="Western Neurological Associates - Western Sleep Center"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="text-left">
            {/* Two images - cli1 smaller, cli2 bigger */}
            <div className="grid grid-cols-[1fr_1.4fr] gap-4 mb-6">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/images/cli1.png"
                  alt="Clinic waiting room"
                  className="w-full h-32 md:h-40 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/images/cli2.png"
                  alt="Clinic examination room"
                  className="w-full h-40 md:h-52 object-cover"
                />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight text-left">
              More Than a Clinic — We're Your Health Partner
            </h2>

            {/* Paragraphs */}
            <p className="text-gray-600 mb-4 text-left">
              Located in the heart of Burbank, Western Neurological Associates has
              been serving the community for over 12 years.
            </p>
            <p className="text-gray-600 mb-8 text-left">
              Our Medical Director, Dr. Fawaz Faisal is triple board certified in
              Neurology, Clinical Neurophysiology, and Sleep medicine. He has
              established Western Neurological Associates as one of the leading
              neurology practices in the valley.
            </p>

            {/* Button */}
            <a
              href="/"
              className="inline-block bg-[#1299ED] hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moreclinis;
