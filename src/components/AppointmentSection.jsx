import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const springBounce = { type: "spring", stiffness: 260, damping: 20 };
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: springBounce },
};
const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: springBounce },
};

export default function AppointmentSection() {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const todayStr = new Date().toISOString().split("T")[0];
    const now = new Date();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    const timeOptions = [
      { label: "9 AM", value: "09:00" },
      { label: "10 AM", value: "10:00" },
      { label: "11 AM", value: "11:00" },
      { label: "12 PM", value: "12:00" },
      { label: "1 PM", value: "13:00" },
      { label: "2 PM", value: "14:00" },
      { label: "3 PM", value: "15:00" },
      { label: "4 PM", value: "16:00" },
      { label: "5 PM", value: "17:00" },
    ];
    const isToday = selectedDate === todayStr;
    const parseMinutes = (value) => {
      const [hours, minutes] = value.split(":").map(Number);
      return hours * 60 + minutes;
    };
    useEffect(() => {
      if (!selectedDate || !selectedTime) return;
      if (selectedDate === todayStr && parseMinutes(selectedTime) <= nowMinutes) {
        setSelectedTime("");
      }
    }, [selectedDate, selectedTime, todayStr, nowMinutes]);

    return (
      <div className="bg-white px-4 sm:px-6 md:px-16 py-6 md:py-10 overflow-x-hidden">
        <motion.div
          className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Left Content */}
          <motion.div className="text-left" variants={fadeInLeft}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 md:mb-6 leading-tight">
            Ready for Expert   <br /> neurological care?
            </h1>
            <p className="text-[#687076] max-w-md mb-6 md:mb-8">
            Have questions or ready to schedule? Reach out today.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 text-blue-600">
            <div className="flex items-center gap-3 relative group">
              <img
                src="/images/ph.svg"
                alt="Phone"
                className="w-5 h-5 flex-shrink-0"
              />
              <span className="text-[#053759] font-medium">818.845.2828</span>
              <span className="pointer-events-none absolute left-0 top-0 -translate-y-full whitespace-nowrap rounded-md bg-[#11181C] text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                Contact Number
              </span>
            </div>

<div className="flex items-center gap-3 relative group">
  <img
    src="/images/tl.svg"
    alt="Fax"
    className="w-5 h-5 flex-shrink-0"
  />
  <span className="text-[#053759] font-medium">818.845.2255</span>
  <span className="pointer-events-none absolute left-0 top-0 -translate-y-full whitespace-nowrap rounded-md bg-[#11181C] text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">
    Fax Number
  </span>
</div>

              <div className="flex items-start gap-3 relative group">
                <img
                  src="/images/time.svg"
                  alt="Hours"
                  className="w-5 h-5 flex-shrink-0"
                />
                <div className="text-[#053759] font-medium">
                  <p>Mon - Thu: 9AM to 5PM</p>
                  <p>Fri: 9AM to 4PM</p>
                  <p>Sat &amp; Sun: Closed</p>
                </div>
                <span className="pointer-events-none absolute left-0 top-0 -translate-y-full whitespace-nowrap rounded-md bg-[#11181C] text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                 Working Hours
                </span>
              </div>
              <div className="flex items-start gap-3 relative group">
                <img
                  src="/images/lc.svg"
                  alt="Location"
                  className="w-5 h-5 flex-shrink-0"
                />
                <span className="text-[#053759] font-medium">
                  1218 W Olive Ave. Burbank, CA 91506
                </span>
                <span className="pointer-events-none absolute left-0 top-0 -translate-y-full whitespace-nowrap rounded-md bg-[#11181C] text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                  Location
                </span>
              </div>
            </div>
          </motion.div>
  
          {/* Right Form Card */}
          <motion.div
            className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 shadow-[0_4px_24px_rgba(0,0,0,0.06)] text-left"
            variants={fadeInRight}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6 text-left">
              Appointment Details
            </h2>

            <form className="space-y-5 text-left">
              {/* First + Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-left">
                  <label className="block text-sm font-medium mb-1 text-left">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
                  />
                </div>

                <div className="text-left">
                  <label className="block text-sm font-medium mb-1 text-left">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
                  />
                </div>
              </div>
  
              {/* Phone */}
              <div className="text-left">
                <label className="block text-sm font-medium mb-1 text-left">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
                />
              </div>

              {/* Email */}
              <div className="text-left">
                <label className="block text-sm font-medium mb-1 text-left">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
                />
              </div>

              {/* Procedure */}
              <div className="text-left">
                <label className="block text-sm font-medium mb-1 text-left">
                  Procedure of Interest
                </label>
                <div className="relative">
                  <select className="w-full border rounded-lg pl-4 pr-12 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-left appearance-none">
                    <option>Epilepsy</option>
                    <option>Headaches &amp; Migraines</option>
                    <option>Neuromuscular Disorders</option>
                    <option>Sleep Disorders</option>
                    <option>EEG Testing</option>
                    <option>Consultation</option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-left">
                  <label className="block text-sm font-medium mb-1 text-left">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={selectedDate}
                    onChange={(event) => setSelectedDate(event.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
                  />
                </div>

                <div className="text-left">
                  <label className="block text-sm font-medium mb-1 text-left">
                    Time <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      className="w-full border rounded-lg pl-4 pr-12 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-left appearance-none"
                      value={selectedTime}
                      onChange={(event) => setSelectedTime(event.target.value)}
                      disabled={!selectedDate}
                    >
                      <option value="" disabled>
                        Select Time
                      </option>
                      {timeOptions.map((option) => {
                        const optionMinutes = parseMinutes(option.value);
                        const isPast = isToday && optionMinutes <= nowMinutes;
                        return (
                          <option key={option.value} value={option.value} disabled={isPast}>
                            {option.label}
                          </option>
                        );
                      })}
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="text-left">
                <label className="block text-sm font-medium mb-1 text-left">
                  Note
                </label>
                <textarea
                  rows="4"
                  className="w-full border rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
                  placeholder="Write your note here..."
                ></textarea>
                <p className="text-right text-xs text-gray-400 mt-1">
                  35/150 words
                </p>
              </div>
  
              {/* Button */}
              <motion.button
                type="submit"
                className="bg-[#1299ED] hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Consultation
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    );
  }
  
