import React, { useState, useRef, useEffect } from "react";

const defaultAssociations = [
  {
    title: "American Board of Psychiatry and Neurology",
    abbr: "ABPN",
    year: "1934",
    className: "bg-[#1e3a5f] text-white",
    image: "/images/one.png",
  },
  {
    title: "American Board of Sleep Medicine",
    abbr: "ABSM",
    className: "text-[#0d9488]",
    image: "/images/two.png",
  },
  {
    title: "American Board of Clinical Neurophysiology",
    abbr: "ABCN",
    className: "text-[#7c3aed]",
    image: "/images/three.png",
  },
];

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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, isInView];
};

const Associations = ({ associations = defaultAssociations }) => {
  const [imageErrors, setImageErrors] = useState({});
  const [sectionRef, sectionInView] = useInView();

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
            sectionInView ? "animate-slide-up-bounce" : "opacity-0"
          }`}
        >
          Associations
        </h2>
        <p
          className={`text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-12 md:mb-16 ${
            sectionInView ? "animate-slide-up-bounce" : "opacity-0"
          }`}
          style={sectionInView ? { animationDelay: "100ms" } : {}}
        >
          Our physicians are affiliated with these prestigious local hospitals and
          board certifications.
        </p>

        {/* Certification cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {associations.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-md p-6 md:p-8 flex flex-col items-center justify-center min-h-[200px] transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 ${
                sectionInView ? "animate-pop-in" : "opacity-0"
              }`}
              style={
                sectionInView
                  ? { animationDelay: `${200 + index * 100}ms` }
                  : {}
              }
            >
              {item.image && !imageErrors[index] ? (
                <div className="w-full flex items-center justify-center min-h-[120px] md:min-h-[140px] px-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-[100px] md:max-h-[120px] w-auto max-w-full object-contain transition-transform duration-300 hover:scale-110"
                    onError={() => handleImageError(index)}
                  />
                </div>
              ) : index === 0 ? (
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#1e3a5f] flex flex-col items-center justify-center text-white border-2 border-white shadow-inner">
                  <span className="text-lg md:text-xl font-bold leading-tight">
                    {item.abbr}
                  </span>
                  {item.year && (
                    <span className="text-xs font-medium">{item.year}</span>
                  )}
                </div>
              ) : (
                <div
                  className={`text-2xl md:text-3xl font-bold ${item.className}`}
                >
                  {item.abbr}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom description */}
        <p
          className={`text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed ${
            sectionInView ? "animate-slide-up-bounce" : "opacity-0"
          }`}
          style={sectionInView ? { animationDelay: "500ms" } : {}}
        >
          Dr. Fawaz Faisal maintains active privileges at Providence Saint Joseph
          Hospital and UCLA Medical Center, holding triple board certification in
          Neurology, Sleep Medicine, and Clinical Neurophysiology.
        </p>
      </div>
    </section>
  );
};

export default Associations;
