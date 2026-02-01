import React from 'react';

const Westtwo = () => {
  return (
    <section className="bg-white py-12 md:py-20 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/Docs.png"
              alt="Western Neurological Associates - Western Sleep Center"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right - Text Content */}
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            About Western Neurological Associates
            </h2>
            <p className="text-gray-600 mb-4">
            Established in the heart of Burbank over 12 years ago, Western Neurological Associates has become the valley's premier destination for comprehensive neurological and sleep disorder treatment. Under the expert leadership of Dr. Fawaz Faisal, our practice combines cutting-edge diagnostic technology with a deeply personal approach to patient care.
            </p>
            <p className="text-gray-600 mb-4">
            We believe that exceptional neurological care extends beyond accurate diagnosis—it requires understanding each patient's unique circumstances, concerns, and goals. Our team is dedicated to providing thorough education about your condition and treatment options, ensuring you feel empowered and confident in every step of your healthcare journey.

            </p>
            {/* <p className="text-gray-600 mb-4">
              We are committed to providing quality care with compassion and
              individualized attention to each of our patients.
            </p>
            <p className="text-gray-600 mb-4">
              Our philosophy is to educate our patients and help them understand
              their condition so they can participate in their care. We offer a
              variety of Neurology sub-specialties — please see our Services page
              for more information.
            </p>
            <p className="text-gray-600">
              If you have any questions or concerns, please do not hesitate to
              contact us by phone, fax, or email. We are also working on adding
              Facebook and Twitter to keep our community informed.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Westtwo;
