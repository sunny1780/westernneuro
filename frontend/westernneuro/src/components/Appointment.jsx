import React from "react";

const Appointment = () => {
  return (
    <section className="bg-white py-16 md:py-20 px-4">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr,1.4fr] gap-10 md:gap-14 items-start">
        {/* Left content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We’re here to help you
            <br />
            achieve health
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-md">
            Join our expert network to contribute your knowledge, mentor
            startups, or speak at events.
          </p>
        </div>

        {/* Right form card */}
        <div className="bg-white rounded-2xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] border border-gray-100 px-6 md:px-8 py-6 md:py-7">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-6">
            Appointment Details
          </h3>

          <form className="space-y-5">
            {/* Name row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Input"
                  className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Input"
                  className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Input"
                className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Input"
                className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Procedure of interest */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Procedure of Interest
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Picnic</option>
                  <option>Consultation</option>
                  <option>Follow-up</option>
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400 text-xs">
                  ▼
                </span>
              </div>
            </div>

            {/* Date / Time row */}
            <div className="grid grid-cols-1 md:grid-cols-[1.3fr,0.9fr] gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="Wed 09 Sep 2025"
                    className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 pr-9 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400 text-sm">
                    📅
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="9 AM"
                    className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 pr-7 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400 text-xs">
                    ▼
                  </span>
                </div>
              </div>
            </div>

            {/* Note */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Note
              </label>
              <div className="relative">
                <textarea
                  rows={4}
                  defaultValue="An event designed to be your perfect escape. It's a day away from the daily grind, a chance to relax, recharge, and enjoy the simple pleasure of good company and a great day outdoors."
                  className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <span className="absolute right-1.5 bottom-1.5 text-[11px] text-gray-400">
                  35/150 words
                </span>
              </div>
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-[#1893FF] px-6 md:px-8 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#0f80dd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
              >
                Request Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;

