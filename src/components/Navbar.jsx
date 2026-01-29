import React from "react";

const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-100 bg-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        {/* Left: Logo + nav links */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-semibold">
            <span className="text-[#1893FF]">Logo</span>
          </div>

          {/* Nav links */}
          <ul className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <li className="hover:text-gray-900 cursor-pointer">About</li>
            <li className="flex items-center gap-1 hover:text-gray-900 cursor-pointer">
              <span>Services</span>
              <span className="text-[10px]">▼</span>
            </li>
            <li className="hover:text-gray-900 cursor-pointer">
              For Health Networks
            </li>
            <li className="hover:text-gray-900 cursor-pointer">Blogs</li>
          </ul>
        </div>

        {/* Right: phone + CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-700">
            <span className="text-gray-500 text-lg">📞</span>
            <span>+1 (444) 555-6767</span>
          </div>
          <button className="rounded-full bg-[#1893FF] text-white text-sm font-medium px-4 md:px-5 py-2 shadow-sm hover:bg-[#0f80dd] transition">
            Book Appointment
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

