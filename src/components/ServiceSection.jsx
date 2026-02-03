import React, { useEffect, useRef, useState } from 'react';

const ServiceSection = ({
    title = "Our Services",
    titleLines,
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image,
    imageStyle,
    textFirst = false,
    descriptionColor = "text-gray-400",
  }) => {
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const [imageVisible, setImageVisible] = useState(false);
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
      const targets = [imageRef.current, textRef.current].filter(Boolean);
      if (!targets.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (entry.target === imageRef.current) {
                setImageVisible(true);
              }
              if (entry.target === textRef.current) {
                setTextVisible(true);
              }
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.25 }
      );

      targets.forEach((target) => observer.observe(target));

      return () => observer.disconnect();
    }, []);

    return (
      <section className="py-24 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
            
            {/* Image Card */}
            <div
              ref={imageRef}
              className={`flex justify-center ${textFirst ? 'lg:justify-end lg:order-2' : 'lg:justify-start'} transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                imageVisible ? 'opacity-100 translate-x-0' : textFirst ? 'opacity-0 translate-x-12' : 'opacity-0 -translate-x-12'
              }`}
            >
              <div
                className="bg-gray-200 overflow-hidden"
                style={imageStyle || { width: "510.24px", maxWidth: "100%", height: "599.97px", borderRadius: "17.59px" }}
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
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default ServiceSection;
  