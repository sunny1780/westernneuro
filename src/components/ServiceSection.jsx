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
              className={`mb-8 md:mb-10 transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
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
              <p className={`${descriptionColor} max-w-3xl leading-relaxed`}>
                {description}
              </p>
            </div>

            {image && (
              <div
                ref={imageRef}
                className={`w-full rounded-xl overflow-hidden transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-150 ${
                  imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
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
              className={`flex justify-center ${textFirst ? 'lg:justify-end lg:order-2' : 'lg:justify-start'} transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                imageVisible ? 'opacity-100 translate-x-0' : textFirst ? 'opacity-0 translate-x-12' : 'opacity-0 -translate-x-12'
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
              className={`${textFirst ? 'lg:order-1' : ''} transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-150 ${
                textVisible ? 'opacity-100 translate-x-0' : textFirst ? 'opacity-0 -translate-x-12' : 'opacity-0 translate-x-12'
              }`}
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
              <p className={`${descriptionColor} max-w-xl leading-relaxed`}>
                {description}
              </p>
              {/* Primary CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#1299ED] hover:bg-[#0d7bc7] text-white text-sm sm:text-base font-semibold shadow-[0_8px_24px_rgba(18,153,237,0.35)] transition-colors duration-200"
                >
                  Schedule Appointment
                </Link>
                <Link
                  to="/patient-information"
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl border border-[#1299ED] text-[#1299ED] hover:bg-[#1299ED]/5 text-sm sm:text-base font-semibold transition-colors duration-200"
                >
                  <img
                    src="/images/icon/Vector.png"
                    alt="Phone icon"
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  />
                  Contact us
                </Link>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default ServiceSection;
  