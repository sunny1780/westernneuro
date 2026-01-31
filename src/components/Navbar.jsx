import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        {/* Left: Logo + nav links */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Logo */}
          <Link to="/" className="text-lg md:text-2xl font-semibold">
            <span className="text-[#1893FF]">Logo</span>
          </Link>

          {/* Nav links - desktop */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-gray-700">
            <li className="hover:text-gray-900 cursor-pointer">About</li>
            <li>
              <Link to="/services" className="flex items-center gap-1 hover:text-gray-900">
                <span>Services</span>
                <span className="text-[10px]">▼</span>
              </Link>
            </li>
            <li className="hover:text-gray-900 cursor-pointer">
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
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-700">
            <span className="text-gray-500 text-lg">📞</span>
            <span>+1 (444) 555-6767</span>
          </div>
          <Link
            to="/book-appointment"
            className="rounded-full bg-[#1893FF] text-white text-xs sm:text-sm font-medium px-3 sm:px-4 md:px-5 py-2 shadow-sm hover:bg-[#0f80dd] transition inline-block"
          >
            Book Appointment
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4">
          <ul className="flex flex-col gap-4 text-sm text-gray-700">
            <li><Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block py-2">Services</Link></li>
            <li><Link to="/patient-information" onClick={() => setMobileMenuOpen(false)} className="block py-2">Patient Information</Link></li>
            <li><Link to="/blogs" onClick={() => setMobileMenuOpen(false)} className="block py-2">Blogs</Link></li>
            <li className="pt-2 border-t">
              <span className="text-gray-500">📞</span> +1 (444) 555-6767
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

