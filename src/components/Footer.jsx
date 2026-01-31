const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-600 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Brand + Subscribe */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="text-lg font-semibold text-gray-900">
                MediCura
              </span>
            </div>

            <p className="text-sm mb-6 max-w-xs">
              We deliver comprehensive medical solutions to support better &
              faster recovery
            </p>

            <div className="flex items-center bg-white rounded-full p-1 shadow-sm w-full max-w-md">
              <input
                type="email"
                placeholder="Email Address..."
                className="flex-[2] min-w-0 px-4 py-2 text-sm focus:outline-none rounded-full"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 text-sm font-medium rounded-full transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-500">Features</a></li>
              <li><a href="#" className="hover:text-blue-500">Integrations</a></li>
              <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-500">Changelog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Blog</a></li>
              <li><a href="#" className="hover:text-blue-500">Careers</a></li>
              <li><a href="#" className="hover:text-blue-500">Customers</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-500">Community</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
              <li><a href="#" className="hover:text-blue-500">System Status</a></li>
              <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-100 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm gap-4">
          <p>© 2025 MACreative All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <a href="#" className="hover:text-blue-500">Terms of Service</a>
            <a href="#" className="hover:text-blue-500">API</a>
            <a href="#" className="hover:text-blue-500">
              Data Processing Agreement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
