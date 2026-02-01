import React from "react";

const EducationTraining = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 text-left">
      <div className="max-w-4xl mr-auto ml-0 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
          Education & Training
        </h2>
        <p className="text-gray-600 mb-10 md:mb-12 leading-relaxed max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation.
        </p>

        <div className="space-y-8 md:space-y-10">
          {/* Education */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
              Education
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1.5">
              <li>University of Damascus, Damascus, Syria, 1986</li>
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
              Training
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1.5">
              <li>Stanford University Hospital, Neurology</li>
              <li>UCLA School of Medicine: Fellowship training in Sleep Disorders</li>
              <li>UCLA School Of Medicine, Clinical Neurophysiology</li>
              <li>UCLA School of Medicine, special training in neuromuscular disorders, EMG/NCS</li>
            </ul>
          </div>

          {/* Board Certification */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
              Board Certification
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1.5">
              <li>Board of Psychiatry and Neurology: certified in Neurology</li>
              <li>Board of Sleep Medicine</li>
              <li>Board of Clinical Neurophysiology</li>
            </ul>
          </div>

          {/* Academic & Administrative Appointment */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
              Academic & Administrative Appointment
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1.5">
              <li>Assistant Clinical Professor, UCLA</li>
              <li>Providence Saint Joseph Hospital, Burbank, California</li>
            </ul>
          </div>

          {/* Hospital Appointments */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
              Hospital Appointments
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1.5">
              <li>Providence Saint Joseph, Burbank</li>
              <li>UCLA Medical Center</li>
              <li>Cedars-Sinai Medical Center</li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-12 md:mt-16">
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-[#007bff] text-white font-medium px-5 py-2.5 rounded-lg hover:bg-[#0069d9] transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </button>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#0077b5] text-[#0077b5] font-medium px-5 py-2.5 rounded-lg hover:bg-[#0077b5]/5 transition"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default EducationTraining;
