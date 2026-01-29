import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#D9ECFF] mt-16 rounded-t-3xl">
      {/* Top rounded container */}
      <div className="max-w-8xl mx-auto px-4 md:px-6 pt-10 pb-6 rounded-rounded-t-sm">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
          {/* Logo + description + subscribe */}
          <div className="flex-1 max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-500 text-xl font-semibold shadow-sm">
                {/* Simple circular logo mark */}
                <span>~</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">
                Logo
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-5">
              We deliver comprehensive medical solutions to support better &
              faster recovery.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-stretch rounded-full bg-white overflow-hidden max-w-xs shadow-sm"
            >
              <input
                type="email"
                placeholder="Email Address..."
                className="flex-1 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 md:px-6 py-2.5 text-sm font-medium text-white bg-[#1D8CFF] hover:bg-[#1675d4] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Navigation columns */}
          <div className="flex-[1.2] grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Product</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Features</li>
                <li>Integrations</li>
                <li>Pricing</li>
                <li>Changelog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
              <ul className="space-y-2 text-gray-700">
                <li>About Us</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Customers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Resources</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Community</li>
                <li>Contact</li>
                <li>System Status</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#c4ddf6]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-gray-600">
          <p>© 2025 MACreative All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <button className="hover:text-gray-900">Terms of Service</button>
            <button className="hover:text-gray-900">API</button>
            <button className="hover:text-gray-900">
              Data Processing Agreement
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

