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
  sections: [],
  list: null,
};

const imgStyle = { width: '100%', maxWidth: '510px', aspectRatio: '510/600', borderRadius: '17.59px' };
const imgStyleShort = { width: '100%', maxWidth: '510px', aspectRatio: '510/288', borderRadius: '17.59px' };

const InfoSection = ({
  image1 = "/images/services/3.jpg",
  image2 = "/images/services/2.jpg",
  block1 = defaultBlock1,
  block2 = defaultBlock2,
  block3,
  block3ImageRight = false,
  block3Stacked = false,
  hideBlock2 = false,
  extra = {},
  animate = false,
  block1ImageLeft = false,
  block1TextOnly = false,
  block1ImageOnly = false,
  block1ImageStyle,
  contentBlock,
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
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    elements.forEach(({ ref }) => {
      if (ref?.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [animate]);

  return (
    <section className="px-4 sm:px-6 md:px-16 py-12 md:py-16 text-left overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full space-y-16 md:space-y-24">
      {/* Section 1 - block1ImageOnly: image only; block1TextOnly: text-only; block1ImageLeft: Image left / Text right; else: Text left / Image right */}
      {block1ImageOnly ? (
        <div
          ref={imageLeftRef}
          className={`overflow-hidden rounded-[17.59px] bg-gray-100 flex justify-center w-full mx-auto ${
            inViewStates.imageLeft ? 'animate-slide-up-bounce' : 'opacity-0'
          }`}
          style={block1ImageStyle || { width: '100%', maxWidth: '1280px', aspectRatio: '1280/520', borderRadius: '17.59px' }}
        >
          {image1 && (
            <img src={image1} alt="" className="w-full h-full object-cover" style={{ borderRadius: '17.59px' }} />
          )}
        </div>
      ) : block1TextOnly ? (
        <div
          ref={textLeftRef}
          className={`space-y-12 md:space-y-16 ${
            animate && !inViewStates.textLeft ? 'opacity-0' : 'animate-slide-up-bounce'
          }`}
        >
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#333333]">
            {b1.title1}
          </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#687076]">
            {b1.desc1}
          </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#333333]">
            {b1.title2}
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#687076]">
            {b1.desc2}
          </p>
        </div>
        </div>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
        {block1ImageLeft ? (
          <>
            <div
              ref={imageLeftRef}
              className={`overflow-hidden rounded-[17.59px] bg-gray-100 flex justify-center md:justify-start w-full max-w-full ${
                inViewStates.imageLeft ? 'animate-slide-in-left-bounce' : 'opacity-0'
              }`}
              style={imgDim}
            >
              {image1 && (
                <img src={image1} alt={b1.title1} className="w-full h-full object-cover" style={{ borderRadius: '17.59px' }} />
              )}
            </div>
            <div
              ref={textRightRef}
              className={inViewStates.textRight ? 'animate-slide-in-right-bounce' : 'opacity-0'}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{b1.title1}</h2>
              <p className="text-[#687076] mb-6">{b1.desc1}</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{b1.title2}</h3>
              <p className="text-[#687076]">{b1.desc2}</p>
            </div>
          </>
        ) : (
          <>
            <div
              ref={textLeftRef}
              className={inViewStates.textLeft ? 'animate-slide-in-left-bounce' : 'opacity-0'}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{b1.title1}</h2>
              <p className="text-[#687076] mb-6">{b1.desc1}</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{b1.title2}</h3>
              <p className="text-[#687076]">{b1.desc2}</p>
      </div>
            <div
              ref={imageRightRef}
              className={`flex justify-center md:justify-end w-full max-w-full ${
                inViewStates.imageRight ? 'animate-slide-in-right-bounce' : 'opacity-0'
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

      {/* Content Block - replaces block2 and extra when provided */}
      {contentBlock ? (
        <div
          ref={extraRef}
          className={`space-y-8 md:space-y-10 text-left ${
            inViewStates.extra ? 'animate-slide-up-bounce' : 'opacity-0'
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#11181C]">
            {contentBlock.mainTitle}
          </h2>
          <p className="text-base md:text-lg text-[#687076] leading-relaxed">
            {contentBlock.intro}
          </p>
          {contentBlock.sections && contentBlock.sections.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#11181C]">
                {sec.title}
          </h3>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-[#687076] leading-relaxed pl-2">
                {sec.items && sec.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
      <>
      {/* Section 2 - block1ImageLeft: Text left / Image right; else: Image left / Text right */}
      {!hideBlock2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          {block1ImageLeft ? (
            <>
              <div
                ref={textLeftRef}
                className={inViewStates.textLeft ? 'animate-slide-in-left-bounce' : 'opacity-0'}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">{b2.title1}</h2>
                <p className="text-base md:text-lg text-[#687076] leading-relaxed mb-6">{b2.desc1}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">{b2.title2}</h2>
                <p className="text-base md:text-lg text-[#687076] leading-relaxed">{b2.desc2}</p>
              </div>
              <div
                ref={imageRightRef}
                className={`overflow-hidden rounded-[17.59px] bg-gray-100 flex justify-center md:justify-end w-full max-w-full ${
                  inViewStates.imageRight ? 'animate-slide-in-right-bounce' : 'opacity-0'
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
                className={`overflow-hidden bg-gray-100 order-2 md:order-1 flex justify-center md:justify-start w-full max-w-full ${
                  inViewStates.imageLeft ? 'animate-slide-in-left-bounce' : 'opacity-0'
                }`}
                style={imgDim}
              >
                {image2 && (
                  <img src={image2} alt={b2.title1} className="w-full h-full object-cover" style={{ borderRadius: '17.59px' }} />
                )}
              </div>
              <div
                ref={textRightRef}
                className={`order-1 md:order-2 ${inViewStates.textRight ? 'animate-slide-in-right-bounce' : 'opacity-0'}`}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">{b2.title1}</h2>
                <p className="text-base md:text-lg text-[#687076] leading-relaxed mb-6">{b2.desc1}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">{b2.title2}</h2>
                <p className="text-base md:text-lg text-[#687076] leading-relaxed">{b2.desc2}</p>
              </div>
            </>
          )}
        </div>
      )}

      {/* Block3 - Image + Text (when block3 provided) */}
      {block3 && (
        <div
          ref={block3Ref}
          className={block3Stacked ? "space-y-6" : "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start"}
        >
          {block3Stacked ? (
            <>
              <div
                ref={block3TextRef}
                className={`space-y-6 ${inViewStates.block3Text ? 'animate-slide-up-bounce' : 'opacity-0'}`}
              >
                {(() => {
                  const items = block3.items && block3.items.length
                    ? block3.items
                    : [
                        { title: block3.title1, desc: block3.desc1 },
                        { title: block3.title2, desc: block3.desc2 },
                      ];
                  return items.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-xl md:text-2xl font-bold text-[#333333] mb-3">{item.title}</h3>
                      <p className="text-sm md:text-base text-[#687076] leading-relaxed">{item.desc}</p>
                    </div>
                  ));
                })()}
              </div>
              <div
                ref={block3ImageRef}
                className={`overflow-hidden bg-gray-100 ${inViewStates.block3Image ? 'animate-slide-up-bounce' : 'opacity-0'}`}
                style={{ width: '100%', maxWidth: '100%', aspectRatio: '1280/442', borderRadius: '17.59px', ...(inViewStates.block3Image && { animationDelay: '200ms' }) }}
              >
                <img
                  src={block3.image || image1}
                  alt={block3.title1 || 'Section image'}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '17.59px' }}
                />
              </div>
            </>
          ) : (
            <>
              <div
                ref={block3ImageRef}
                className={`overflow-hidden bg-gray-100 flex justify-center ${
                  block3ImageRight ? 'md:justify-end md:order-2' : 'md:justify-start'
                } ${inViewStates.block3Image ? (block3ImageRight ? 'animate-slide-in-right-bounce' : 'animate-slide-in-left-bounce') : 'opacity-0'}`}
                style={{ width: '100%', maxWidth: '100%', aspectRatio: '1280/442', borderRadius: '17.59px' }}
              >
            <img
              src={block3.image || image1}
              alt={block3.title1 || 'Section image'}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '17.59px' }}
            />
          </div>
          <div
            ref={block3TextRef}
            className={`space-y-6 ${inViewStates.block3Text ? (block3ImageRight ? 'animate-slide-in-left-bounce' : 'animate-slide-in-right-bounce') : 'opacity-0'} ${block3ImageRight ? 'md:order-1' : ''}`}
            style={inViewStates.block3Text ? { animationDelay: '150ms' } : {}}
          >
            {(() => {
              const items = block3.items && block3.items.length
                ? block3.items
                : [
                    { title: block3.title1, desc: block3.desc1 },
                    { title: block3.title2, desc: block3.desc2 },
                  ];
              return items.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-xl md:text-2xl font-bold text-[#333333] mb-3">{item.title}</h3>
                  <p className="text-sm md:text-base text-[#687076] leading-relaxed">{item.desc}</p>
                </div>
              ));
            })()}
          </div>
            </>
          )}
      </div>
      )}

      {/* Text Section */}
      <div
        ref={extraRef}
        className={`space-y-12 md:space-y-16 ${
          inViewStates.extra ? 'animate-slide-up-bounce' : 'opacity-0'
        }`}
      >
        {extraContent.sections && extraContent.sections.map((section, index) => (
          <div key={index} className="space-y-4">
            {section.title && (
              <h2 className="text-2xl md:text-3xl font-bold text-[#333333]">
                {section.title}
        </h2>
            )}
            {section.desc && (
              <p className="text-base md:text-lg text-[#687076] leading-relaxed">
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

          <ol className="list-decimal list-inside space-y-4 text-[#687076]">
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
      </>
      )}
      </div>
    </section>
  );
};

export default InfoSection;
