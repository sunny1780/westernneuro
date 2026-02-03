import React, { useEffect, useRef, useState } from 'react';

const EEGTwo = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const bottomRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);

  useEffect(() => {
    const targets = [
      { ref: textRef, set: setTextVisible },
      { ref: imageRef, set: setImageVisible },
      { ref: bottomRef, set: setBottomVisible },
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const t = targets.find(({ ref }) => ref.current === entry.target);
            if (t) t.set(true);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach(({ ref }) => ref.current && observer.observe(ref.current));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 md:px-16 bg-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-10 items-start text-left">
        <div
          ref={textRef}
          className={`space-y-6 min-w-0 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}
        >
          <div className="space-y-1.5">
            <h2 className="text-2xl md:text-3xl font-bold text-[#11181C]">What is an EEG</h2>
            <p className="text-base leading-snug text-[#687076]">
              An electroencephalogram (EEG) is a non-invasive test that records electrical activity in the
              brain using small sensors attached to the scalp. This painless procedure provides valuable
              information about brain function.
            </p>
          </div>

          <div className="space-y-1.5">
            <h2 className="text-2xl md:text-3xl font-bold text-[#11181C]">Why You Need an EEG</h2>
            <p className="text-base leading-snug text-[#687076]">
              Your doctor may order an EEG to diagnose or monitor epilepsy and seizure disorders,
              evaluate unexplained episodes of confusion, assess brain activity after head injury,
              or investigate sleep disorders.
            </p>
          </div>

          <div className="space-y-1.5">
            <h2 className="text-2xl md:text-3xl font-bold text-[#11181C]">
              Instructions For EEG Testing - Preparation
            </h2>
            <p className="text-base leading-snug text-[#687076]">
              Wash your hair the night before with regular shampoo. Do not apply hair products (gels,
              sprays, oils) before the test. Eat normally and take your regular medications unless
              instructed otherwise.
            </p>
          </div>

          <div className="space-y-1.5">
            <h2 className="text-2xl md:text-3xl font-bold text-[#11181C]">What to Expect During Testing</h2>
            <p className="text-base leading-snug text-[#687076]">
              The test is completely painless and typically takes 45-60 minutes. Small electrodes are placed
              on your scalp. You&apos;ll be asked to relax, breathe deeply, or sleep during portions of the test.
            </p>
          </div>
        </div>

        <div
          ref={imageRef}
          className={`flex justify-center md:justify-end transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-150 ${
            imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
        >
          <div className="rounded-2xl overflow-hidden bg-gray-100 shadow-sm max-w-[520px] w-full">
            <img
              src="/images/EEG.png"
              alt="EEG preparation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div
        ref={bottomRef}
        className={`max-w-6xl mx-auto w-full mt-10 md:mt-12 text-left transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          bottomVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="space-y-1.5">
          <h2 className="text-2xl md:text-3xl font-bold text-[#11181C]">What to Bring</h2>
          <p className="text-base leading-snug text-[#687076]">
            Bring a list of your medications. Wear comfortable clothing and arrive with clean, product-free hair. Electrodes and paste are easily removed after the test.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EEGTwo;
