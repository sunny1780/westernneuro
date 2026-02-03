import React, { useEffect, useRef, useState } from "react";

const defaultBlock1 = {
  title1: "Comprehensive Neurological Care",
  desc1: "Our team provides expert diagnosis and treatment for a wide range of neurological conditions, from epilepsy and headaches to sleep disorders and neuromuscular conditions. We use advanced diagnostics and evidence-based treatments tailored to each patient.",
  title2: "Patient-Centered Approach",
  desc2: "We take the time to listen, explain your condition clearly, and involve you in every step of your care plan. Your comfort and long-term wellbeing are our priority.",
};

const defaultBlock2 = {
  title1: "Sleep Medicine & Clinical Neurophysiology",
  desc1: "We offer full sleep studies, EEG, and nerve conduction studies in a comfortable setting. Our board-certified specialists help manage sleep disorders and neuromuscular conditions with the latest technology and personalized treatment plans.",
  title2: "Why Choose Us",
  desc2: "Triple board certification, academic appointments at UCLA, and active privileges at Providence Saint Joseph Hospital, UCLA Medical Center, and Cedars-Sinai ensure you receive the highest standard of care.",
};

const defaultExtra = {
  sections: [
    {
      title: "Our Services Overview",
      desc: "Western Neurological Associates and Western Sleep Center offer expert care in neurology, sleep medicine, and clinical neurophysiology. From initial consultation through ongoing management, we are committed to helping you achieve better health and quality of life.",
    },
    {
      title: "Conditions We Treat",
      desc: "Epilepsy, headaches, neuromuscular disorders, sleep apnea and other sleep disorders, nerve and muscle conditions, and more. We use advanced diagnostics including EEG and nerve conduction studies to guide treatment.",
    },
    {
      title: "Location & Appointments",
      desc: "We are located in Burbank, California. Schedule a consultation by calling 818.845.2255 or booking online. We look forward to supporting your neurological and sleep health.",
    },
  ],
  list: {
    title: "What to Expect",
    items: [
      {
        title: "Initial Consultation",
        desc: "A thorough review of your history, symptoms, and goals so we can recommend the right diagnostics and treatment plan.",
      },
      {
        title: "Diagnostic Testing",
        desc: "When needed, we arrange EEG, sleep studies, nerve conduction studies, or other tests in a comfortable, professional environment.",
      },
      {
        title: "Ongoing Care",
        desc: "Follow-up visits and care coordination to monitor your progress and adjust treatment for the best outcomes.",
      },
    ],
  },
};

const imgStyle = { width: '510.24px', maxWidth: '100%', height: '599.97px', borderRadius: '17.59px' };
const imgStyleShort = { width: '510px', maxWidth: '100%', height: '288px', borderRadius: '17.59px' };

const InfoSection = ({
  image1 = "/images/services/3.jpg",
  image2 = "/images/services/2.jpg",
  block1 = defaultBlock1,
  block2 = defaultBlock2,
  block3,
  extra = {},
  animate = false,
  block1ImageLeft = false,
  block1TextOnly = false,
  imageDimensions = "short",
}) => {
  const imgDim = imageDimensions === "tall" ? imgStyle : imgStyleShort;
  const b1 = { ...defaultBlock1, ...block1 };
  const b2 = { ...defaultBlock2, ...block2 };
  const extraContent = {
    sections: extra.sections || defaultExtra.sections,
    list: extra.list === null ? null : extra.list || defaultExtra.list,
  };
  const imageLeftRef = useRef(null);
  const textRightRef = useRef(null);
  const imageRightRef = useRef(null);
  const textLeftRef = useRef(null);
  const block3Ref = useRef(null);
  const block3ImageRef = useRef(null);
  const block3TextRef = useRef(null);
  const extraRef = useRef(null);
  const [inViewStates, setInViewStates] = useState({
    imageLeft: !animate,
    textRight: !animate,
    imageRight: !animate,
    textLeft: !animate,
    block3: !animate,
    block3Image: !animate,
    block3Text: !animate,
    extra: !animate,
  });

  useEffect(() => {
    if (!animate) return;

    const elements = [
      { key: "imageLeft", ref: imageLeftRef },
      { key: "textRight", ref: textRightRef },
      { key: "imageRight", ref: imageRightRef },
      { key: "textLeft", ref: textLeftRef },
      { key: "block3", ref: block3Ref },
      { key: "extra", ref: extraRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = elements.find((item) => item.ref.current === entry.target);
            if (match) {
              if (match.key === "block3") {
                setInViewStates((prev) => ({ ...prev, block3Image: true, block3Text: true }));
              } else {
                setInViewStates((prev) => ({ ...prev, [match.key]: true }));
              }
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [animate]);

  return (
    <section className="px-4 sm:px-6 md:px-16 py-12 md:py-16 space-y-16 md:space-y-24 text-left">
      
      {/* Section 1 - block1TextOnly: text-only; block1ImageLeft: Image left / Text right; else: Text left / Image right */}
      {block1TextOnly ? (
        <div
          ref={textLeftRef}
          className={`max-w-6xl space-y-12 md:space-y-16 transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            animate && !inViewStates.textLeft ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
          }`}
        >
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#333333]">
              {b1.title1}
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#666666]">
              {b1.desc1}
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#333333]">
              {b1.title2}
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#666666]">
              {b1.desc2}
            </p>
          </div>
        </div>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {block1ImageLeft ? (
          <>
            <div
              ref={imageLeftRef}
              className={`overflow-hidden rounded-[17.59px] bg-gray-100 flex justify-center md:justify-start transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                inViewStates.imageLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={imgDim}
            >
              {image1 && (
                <img src={image1} alt={b1.title1} className="w-full h-full object-cover" style={{ borderRadius: '17.59px' }} />
              )}
            </div>
            <div
              ref={textRightRef}
              className={`transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                inViewStates.textRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{b1.title1}</h2>
              <p className="text-gray-600 mb-6">{b1.desc1}</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{b1.title2}</h3>
              <p className="text-gray-600">{b1.desc2}</p>
            </div>
          </>
        ) : (
          <>
            <div
              ref={textLeftRef}
              className={`transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                inViewStates.textLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{b1.title1}</h2>
              <p className="text-gray-600 mb-6">{b1.desc1}</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{b1.title2}</h3>
              <p className="text-gray-600">{b1.desc2}</p>
            </div>
            <div
              ref={imageRightRef}
              className={`flex justify-center md:justify-end transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                inViewStates.imageRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={imgDim}
            >
              {image1 && (
                <img src={image1} alt={b1.title1} className="w-full h-full object-cover" style={{ borderRadius: '17.59px' }} />
              )}
            </div>
          </>
        )}
      </div>
      )}

      {/* Section 2 - block1ImageLeft: Text left / Image right; else: Image left / Text right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {block1ImageLeft ? (
          <>
            <div
              ref={textLeftRef}
              className={`transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                inViewStates.textLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">{b2.title1}</h2>
              <p className="text-base md:text-lg text-[#666666] leading-relaxed mb-6">{b2.desc1}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">{b2.title2}</h2>
              <p className="text-base md:text-lg text-[#666666] leading-relaxed">{b2.desc2}</p>
            </div>
            <div
              ref={imageRightRef}
              className={`overflow-hidden rounded-[17.59px] bg-gray-100 flex justify-center md:justify-end transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                inViewStates.imageRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={imgDim}
            >
              {image2 && (
                <img src={image2} alt={b2.title1} className="w-full h-full object-cover" style={{ borderRadius: '17.59px' }} />
              )}
            </div>
          </>
        ) : (
          <>
            <div
              ref={imageLeftRef}
              className={`overflow-hidden bg-gray-100 order-2 md:order-1 flex justify-center md:justify-start transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                inViewStates.imageLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={imgDim}
            >
              {image2 && (
                <img src={image2} alt={b2.title1} className="w-full h-full object-cover" style={{ borderRadius: '17.59px' }} />
              )}
            </div>
            <div
              ref={textRightRef}
              className={`order-1 md:order-2 transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                inViewStates.textRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">{b2.title1}</h2>
              <p className="text-base md:text-lg text-[#666666] leading-relaxed mb-6">{b2.desc1}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">{b2.title2}</h2>
              <p className="text-base md:text-lg text-[#666666] leading-relaxed">{b2.desc2}</p>
            </div>
          </>
        )}
      </div>

      {/* Block3 - Image left, Text right (when block3 provided) */}
      {block3 && (
        <div ref={block3Ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div
            ref={block3ImageRef}
            className={`overflow-hidden bg-gray-100 flex justify-center md:justify-start transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              inViewStates.block3Image ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ width: '510px', maxWidth: '100%', height: '288px', borderRadius: '17.59px' }}
          >
            <img
              src={block3.image || image1}
              alt={block3.title1}
              className="w-full h-full object-cover"
              style={{ borderRadius: '17.59px' }}
            />
          </div>
          <div
            ref={block3TextRef}
            className={`space-y-6 transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-150 ${
              inViewStates.block3Text ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">{block3.title1}</h2>
              <p className="text-base md:text-lg text-[#666666] leading-relaxed">{block3.desc1}</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">{block3.title2}</h2>
              <p className="text-base md:text-lg text-[#666666] leading-relaxed">{block3.desc2}</p>
            </div>
          </div>
        </div>
      )}

      {/* Text Section */}
      <div
        ref={extraRef}
        className={`space-y-12 md:space-y-16 transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          inViewStates.extra ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {extraContent.sections.map((section, index) => (
          <div key={index} className="space-y-4">
            {section.title && (
              <h2 className="text-2xl md:text-3xl font-bold text-[#333333]">
                {section.title}
              </h2>
            )}
            {section.desc && (
              <p className="text-base md:text-lg text-[#666666] leading-relaxed">
                {section.desc}
              </p>
            )}
          </div>
        ))}
      </div>

      {extraContent.list && extraContent.list.items && extraContent.list.items.length > 0 && (
        <div className="space-y-6">
          {extraContent.list.title && (
            <h3 className="text-xl font-semibold text-gray-900">
              {extraContent.list.title}
            </h3>
          )}

          <ol className="list-decimal list-inside space-y-4 text-gray-600">
            {extraContent.list.items.map((item, index) => (
              <li key={index}>
                {item.title && (
                  <span className="font-semibold text-gray-900">{item.title}</span>
                )}
                {item.desc && (
                  <p className="mt-2">
                    {item.desc}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
};

export default InfoSection;
