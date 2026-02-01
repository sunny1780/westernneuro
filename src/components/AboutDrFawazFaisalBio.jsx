import React from "react";

const AboutDrFawazFaisalBio = ({ imageSrc = "/images/dr-faisal-hero.png" }) => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
            <img
              src={imageSrc}
              alt="Dr. Fawaz Faisal"
              className="w-full h-auto object-cover object-top aspect-[4/5] lg:aspect-auto lg:min-h-[500px]"
            />
          </div>

          {/* Right: Text content */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
              About Dr. Fawaz Faisal
            </h2>

            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Dr. Fawaz Faisal is a distinguished triple board-certified
                neurologist dedicated to providing exceptional neurological care
                in Burbank. With certifications in Neurology, Sleep Medicine,
                and Clinical Neurophysiology, he brings a comprehensive
                expertise to the diagnosis and treatment of complex neurological
                conditions.
              </p>
              <p>
                As an Assistant Clinical Professor at UCLA and a practicing
                physician at Providence Saint Joseph Hospital, UCLA Medical
                Center, and Cedars-Sinai Medical Center, Dr. Faisal bridges
                academic excellence with compassionate patient care. He is
                committed to staying at the forefront of neurological research
                and innovative treatments to offer his patients the best
                possible outcomes.
              </p>
              <p>
                His approach to patient care combines rigorous scientific
                training with a genuine dedication to patient wellbeing. Dr.
                Faisal believes in thoroughly explaining conditions and
                treatment options to his patients and involving them in their
                care decisions every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDrFawazFaisalBio;
