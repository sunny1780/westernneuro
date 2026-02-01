import { Phone, Printer, Clock, MapPin } from 'lucide-react';

export default function AppointmentSection() {
    return (
      <div className="min-h-screen bg-white px-4 sm:px-6 md:px-16 py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 md:mb-6 leading-tight">
              We’re here to help you <br /> achieve health
            </h1>
            <p className="text-gray-500 max-w-md mb-6 md:mb-8">
              Join our expert network to contribute your knowledge, mentor
              startups, or speak at events.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 text-blue-600">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-gray-800 font-medium">818.845.2255</span>
              </div>
              <div className="flex items-center gap-3">
                <Printer className="w-5 h-5 flex-shrink-0" />
                <span className="text-gray-800 font-medium">818.845.2255</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="text-gray-800 font-medium">
                  <p>Mon - Fri: 9:00am - 4:00pm</p>
                  <p>Sat & Sun: Closed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 font-medium">
                  1218 W Olive Ave. Burbank, CA 91506
                </span>
              </div>
            </div>
          </div>
  
          {/* Right Form Card */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Appointment Details
            </h2>
  
            <form className="space-y-5">
              {/* First + Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Input"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
  
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Input"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
  
              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Input"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Input"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              {/* Procedure */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Procedure of Interest
                </label>
                <select className="w-full border rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Picnic</option>
                  <option>Consultation</option>
                  <option>Treatment</option>
                </select>
              </div>
  
              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
  
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Time <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>9 AM</option>
                    <option>10 AM</option>
                    <option>11 AM</option>
                  </select>
                </div>
              </div>
  
              {/* Note */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Note
                </label>
                <textarea
                  rows="4"
                  className="w-full border rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your note here..."
                ></textarea>
                <p className="text-right text-xs text-gray-400 mt-1">
                  35/150 words
                </p>
              </div>
  
              {/* Button */}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  