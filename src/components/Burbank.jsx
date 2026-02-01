import React from 'react';

const Burbank = () => {
  return (
    <section id="burbank" className="bg-white pt-12 md:pt-20 pb-6 md:pb-8 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Text Content */}
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Burbank
              <br />
              Neurology Expert
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <a
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
            >
              Read More About Dr Fawaz
            </a>
          </div>

          {/* Right - Doctor Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-md w-full">
              <img
                src="/images/Doc.png"
                alt="Dr Fawaz - Burbank Neurology Expert"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom - 3 Certification Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 md:mt-8">
          <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center min-h-[120px]">
            <img
              src="/images/one.png"
              alt="American Board of Psychiatry and Neurology"
              className="max-h-20 w-auto object-contain"
            />
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center min-h-[120px]">
            <img
              src="/images/two.png"
              alt="American Board of Sleep Medicine"
              className="max-h-20 w-auto object-contain"
            />
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center min-h-[120px]">
            <img
              src="/images/three.png"
              alt="American Board of Clinical Neurophysiology"
              className="max-h-20 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Burbank;
