import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceSection = ({
    title = "Our Services",
    titleLines,
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image,
    imageStyle,
    textFirst = false,
    descriptionColor = "text-[#687076]",
    layout = "sideBySide",
    showButtons = false,
  }) => {
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const sectionRef = useRef(null);
    const [imageVisible, setImageVisible] = useState(false);
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
      const targets = layout === "stacked"
        ? [sectionRef.current]
        : [imageRef.current, textRef.current].filter(Boolean);
      if (!targets.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (layout === "stacked") {
                setImageVisible(true);
                setTextVisible(true);
              } else {
                if (entry.target === imageRef.current) setImageVisible(true);
                if (entry.target === textRef.current) setTextVisible(true);
              }
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.25 }
      );

      targets.forEach((target) => target && observer.observe(target));

      return () => observer.disconnect();
    }, [layout]);

    if (layout === "stacked") {
      return (
        <section ref={sectionRef} className="py-16 md:py-24 px-4 sm:px-6 text-left overflow-x-hidden">
          <div className="max-w-6xl mx-auto w-full">
            <div
              ref={textRef}
              className={`mb-8 md:mb-10 ${textVisible ? 'animate-slide-up-bounce' : 'opacity-0'}`}
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-[#053759] mb-4 md:mb-6 leading-tight">
                {titleLines ? (
                  <>
                    {titleLines[0]}
                    {titleLines[1] && <><br />{titleLines[1]}</>}
                  </>
                ) : (
                  title
                )}
              </h2>
              <p className={`${descriptionColor} max-w-3xl leading-relaxed mb-6`}>
                {description}
              </p>
              {showButtons && (
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/book-appointment"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white bg-[#1893FF] hover:bg-[#0f80dd] transition"
                  >
                    Schedule Appointment
                  </Link>
                  <Link
                    to="/book-appointment"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-[#1893FF] border-2 border-[#1893FF] bg-white hover:bg-[#f8fbff] transition"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Contact us
                  </Link>
                </div>
              )}
            </div>

            {image && (
              <div
                ref={imageRef}
                className={`w-full rounded-xl overflow-hidden ${imageVisible ? 'animate-slide-up-bounce' : 'opacity-0'}`}
                style={imageVisible ? { animationDelay: '150ms' } : {}}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: '420px' }}
                />
              </div>
            )}
          </div>
        </section>
      );
    }

    return (
      <section className="py-16 md:py-24 px-4 sm:px-6 text-left overflow-x-hidden">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-16 lg:gap-20">
            
            {/* Image Card */}
            <div
              ref={imageRef}
              className={`flex justify-center ${textFirst ? 'lg:justify-end lg:order-2' : 'lg:justify-start'} ${
                imageVisible ? (textFirst ? 'animate-slide-in-right-bounce' : 'animate-slide-in-left-bounce') : 'opacity-0'
              }`}
            >
              <div
                className="bg-gray-200 overflow-hidden w-full max-w-full"
                style={{ ...(imageStyle || { width: "510px", height: "600px", borderRadius: "17.59px" }), maxWidth: "100%" }}
              >
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                ) : null}
              </div>
            </div>
  
            {/* Content */}
            <div
              ref={textRef}
              className={`${textFirst ? 'lg:order-1' : ''} ${textVisible ? (textFirst ? 'animate-slide-in-left-bounce' : 'animate-slide-in-right-bounce') : 'opacity-0'}`}
              style={textVisible ? { animationDelay: '150ms' } : {}}
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-[#053759] mb-4 md:mb-6 leading-tight">
                {titleLines ? (
                  <>
                    {titleLines[0]}
                    {titleLines[1] && <><br />{titleLines[1]}</>}
                  </>
                ) : (
                  title
                )}
              </h2>
              <p className={`${descriptionColor} max-w-xl leading-relaxed mb-6`}>
                {description}
              </p>
              {showButtons && (
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/book-appointment"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white bg-[#1893FF] hover:bg-[#0f80dd] transition"
                  >
                    Schedule Appointment
                  </Link>
                  <Link
                    to="/book-appointment"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-[#1893FF] border-2 border-[#1893FF] bg-white hover:bg-[#f8fbff] transition"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Contact us
                  </Link>
                </div>
              )}
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default ServiceSection;
  