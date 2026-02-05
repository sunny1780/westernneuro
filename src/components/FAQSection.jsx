import React, { useState } from "react";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Et facilisis aliquam sem imperdiet ut fames. Tincidunt sed leo in semper magna curabitur dictum. Dignissim id blandit porttitor habitant tortor mattis scelerisque auctor. Mi netus consectetur velit vitae viverra volutpat purus libero nisl. Ullamcorper pharetra nibh auctor tempor diam mi leo mauris dolor.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Et facilisis aliquam sem imperdiet ut fames. Tincidunt sed leo in semper magna curabitur dictum. Dignissim id blandit porttitor habitant tortor mattis scelerisque auctor.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Et facilisis aliquam sem imperdiet ut fames. Tincidunt sed leo in semper magna curabitur dictum.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Et facilisis aliquam sem imperdiet ut fames. Tincidunt sed leo in semper magna curabitur dictum.",
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <button
    type="button"
    className="w-full text-left py-4 md:py-5 border-b border-[#1F2937] flex items-start justify-between gap-4 group focus:outline-none"
    onClick={onToggle}
  >
    <div className="flex-1">
      <p className="text-sm md:text-base font-medium ">
        {faq.question}
      </p>
      {isOpen && (
        <p className="mt-2 text-xs md:text-sm  leading-relaxed">
          {faq.answer}
        </p>
      )}
    </div>
    <span className="mt-1 text-[#60A5FA] transition-transform duration-200 group-hover:translate-y-0.5">
      {isOpen ? "▴" : "▾"}
    </span>
  </button>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm md:text-base">
            Got a Question?
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? -1 : index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

