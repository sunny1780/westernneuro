import React, { useState, useRef, useEffect } from "react";

const defaultAssociations = [
  {
    title: "American Board of Psychiatry and Neurology",
    abbr: "ABPN",
    year: "1934",
    className: "bg-[#1e3a5f] text-white",
    image: "/images/three.png",
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
    image: "/images/one.png",
  },
  {
    title: "Additional Association",
    abbr: "",
    className: "text-[#7c3aed]",
    image: "/images/thee.png",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          className={`text-[48px] font-medium text-[#11181C] leading-[1] mb-4 ${
            sectionInView ? "animate-slide-up-bounce" : "opacity-0"
          }`}
          style={{ letterSpacing: '0.5%' }}
        >
          Associations
        </h2>
        {/* <p
          className={`text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-12 md:mb-16 ${
            sectionInView ? "animate-slide-up-bounce" : "opacity-0"
          }`}
          style={sectionInView ? { animationDelay: "100ms" } : {}}
        >
          Our physicians are affiliated with these prestigious local hospitals and
          board certifications.
        </p> */}

        {/* Certification cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {associations.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md p-4 flex items-center justify-center min-h-[180px] ${
                sectionInView ? "animate-pop-in" : "opacity-0"
              }`}
              style={
                sectionInView
                  ? { animationDelay: `${200 + index * 100}ms` }
                  : {}
              }
            >
              {item.image && !imageErrors[index] ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-60 w-auto max-w-full object-contain shadow-none filter-none"
                  onError={() => handleImageError(index)}
                />
              ) : index === 0 ? (
                <div className="w-20 h-20 rounded-full bg-[#1e3a5f] flex flex-col items-center justify-center text-white border-2 border-white shadow-inner">
                  <span className="text-lg font-bold leading-tight">
                    {item.abbr}
                  </span>
                  {item.year && (
                    <span className="text-xs font-medium">{item.year}</span>
                  )}
                </div>
              ) : (
                <div className={`text-2xl font-bold ${item.className}`}>
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
