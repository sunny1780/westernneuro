import React, { useRef, useState, useEffect } from 'react';

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
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, isInView];
};

const Moreclinis = () => {
  const [leftRef, leftInView] = useInView();
  const [rightRef, rightInView] = useInView();

  return (
    <section id="moreclinis" className="bg-white py-12 md:py-20 px-4 sm:px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center">
          {/* Left - Large Image */}
          <div
            ref={leftRef}
            className={`rounded-2xl overflow-hidden ${leftInView ? 'animate-slide-in-left-bounce' : 'opacity-0'}`}
          >
            <div className="group">
              <img
                src="/images/Docs.png"
                alt="Western Neurological Associates - Western Sleep Center"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div ref={rightRef} className="text-left">
            {/* Two images - cli1 smaller, cli2 bigger */}
            <div className="grid grid-cols-[1fr_1.4fr] gap-4 mb-6">
              <div
                className={`rounded-xl overflow-hidden ${rightInView ? 'animate-pop-in' : 'opacity-0'}`}
                style={rightInView ? { animationDelay: '0ms' } : {}}
              >
                <img
                  src="/images/cli1.png"
                  alt="Clinic waiting room"
                  className="w-full h-32 md:h-40 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div
                className={`rounded-xl overflow-hidden ${rightInView ? 'animate-pop-in' : 'opacity-0'}`}
                style={rightInView ? { animationDelay: '100ms' } : {}}
              >
                <img
                  src="/images/cli2.png"
                  alt="Clinic examination room"
                  className="w-full h-40 md:h-52 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Heading */}
            <div
              className={`mt-16 ${rightInView ? 'animate-slide-up-bounce' : 'opacity-0'}`}
              style={rightInView ? { animationDelay: '200ms' } : {}}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight text-left">
                More Than a Clinic — We're Your Health Partner
              </h2>
            </div>

            {/* Paragraphs */}
            <div
              className={`${rightInView ? 'animate-slide-up-bounce' : 'opacity-0'}`}
              style={rightInView ? { animationDelay: '350ms' } : {}}
            >
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
            </div>

            {/* Button */}
            <div
              className={`${rightInView ? 'animate-pop-in' : 'opacity-0'}`}
              style={rightInView ? { animationDelay: '500ms' } : {}}
            >
              <a
                href="/about"
                className="inline-block bg-[#1299ED] hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-0.5"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moreclinis;
