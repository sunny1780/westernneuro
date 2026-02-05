import React from "react";

const HeadacheTextSection = () => {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-16 md:py-20 text-left">
      <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 text-[#111827]">
        <header className="space-y-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Advanced Diagnosis and Long-Term Relief for Chronic Headache Conditions
          </h2>
        </header>

        <div className="space-y-4 text-sm md:text-base leading-relaxed text-[#4B5563]">
          <p>
            Headaches are among the most common neurological complaints and can range from mild and
            occasional to chronic and disabling. When headaches become frequent, severe, or
            resistant to standard treatments, specialized neurological care is essential.
          </p>
          <p>
            Headache pain may involve the head, face, neck, or upper shoulders and is often
            accompanied by symptoms such as nausea, vomiting, light or sound sensitivity, visual
            disturbances, dizziness, or extreme fatigue. Pain typically results from irritation of
            nerves, muscles, and blood vessels surrounding the brain and skull.
          </p>
        </div>

        <section className="space-y-3">
          <h3 className="text-lg md:text-xl font-semibold text-[#111827]">
            Impact on Daily Life
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-[#4B5563]">
            Chronic headaches and migraines can significantly interfere with:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm md:text-base text-[#4B5563]">
            <li>Work productivity and cognitive performance</li>
            <li>Sleep quality and energy levels</li>
            <li>Daily routines, family responsibilities, and social activities</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default HeadacheTextSection;

