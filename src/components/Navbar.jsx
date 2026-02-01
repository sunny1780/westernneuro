import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phoneIcon = (
    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const chevronDown = (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <header
      className="w-full sticky top-0 z-50 font-sans"
      style={{ background: "linear-gradient(to right, #96C7F2, white)" }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        {/* Left: Logo + nav links */}
        <div className="flex items-center gap-6 md:gap-10">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src="/images/logo.png" alt="Western Neurological Associates - Western Sleep Center" className="h-auto w-40" />
          </Link>

          {/* Nav links - desktop */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-gray-800">
            <li className="flex items-center gap-1 hover:text-gray-900 cursor-pointer">
              About
              {chevronDown}
            </li>
            <li>
              <Link to="/services" className="flex items-center gap-1 hover:text-gray-900">
                <span>Services</span>
                {chevronDown}
              </Link>
            </li>
            <li>
              <Link to="/patient-information" className="hover:text-gray-900">
                Patient Information
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-gray-900">
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: phone + CTA + mobile menu btn */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-800">
            {phoneIcon}
            <span>818.845.2255</span>
          </div>
          <Link
            to="/book-appointment"
            className="rounded-md bg-[#1893FF] text-white text-sm font-semibold px-5 py-2.5 shadow-sm hover:bg-[#0f80dd] transition inline-block"
          >
            Book Appointment
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/50"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden px-4 py-4 font-sans"
          style={{ background: "linear-gradient(to bottom, rgba(150,199,242,0.3), white)" }}
        >
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-800">
            <li><Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block py-2">Services</Link></li>
            <li><Link to="/patient-information" onClick={() => setMobileMenuOpen(false)} className="block py-2">Patient Information</Link></li>
            <li><Link to="/blogs" onClick={() => setMobileMenuOpen(false)} className="block py-2">Blogs</Link></li>
            <li className="pt-2 border-t border-gray-200 flex items-center gap-2">
              {phoneIcon}
              818.845.2255
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

