import { Link } from 'react-router-dom';

const socialIcons = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/westernneurofacebook',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/user/westernneuro',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Yelp',
    href: 'https://www.yelp.com/biz/western-neurological-associates-burbank',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.02 2.002c.47.02 1.03.28 1.37.64.28.3.4.67.38 1.08l-.3 6.11c-.02.42-.2.79-.53 1.08-.35.31-.8.43-1.25.35-.46-.08-.83-.35-1.06-.77L7.45 5.14c-.24-.4-.27-.86-.1-1.3.17-.44.52-.78.98-.95l2.72-1c.25-.09.52-.13.77-.12zM3.73 9.88c.28-.3.67-.47 1.08-.5l6.11-.38c.42-.02.8.12 1.12.42.34.32.52.74.52 1.2 0 .46-.18.88-.52 1.2l-4.57 4.26c-.34.32-.77.47-1.22.44-.46-.03-.86-.26-1.13-.65l-1.66-2.43c-.27-.39-.38-.86-.3-1.33.08-.47.32-.88.7-1.19zM14.02 12.02c.12-.45.4-.8.83-1.01l5.64-2.86c.39-.2.84-.2 1.25.02.41.22.68.6.76 1.05l.48 2.86c.08.46-.03.92-.33 1.27-.3.35-.73.56-1.19.57l-6.11.18c-.45.01-.87-.17-1.17-.51-.3-.34-.41-.78-.32-1.22zM10.03 13.86c.36.3.56.72.56 1.18l.03 6.12c0 .43-.16.83-.46 1.12-.3.3-.7.46-1.12.46h-2.9c-.47 0-.91-.2-1.2-.57-.3-.36-.4-.83-.3-1.28l1.33-5.96c.1-.45.4-.82.83-1.03.44-.2.92-.16 1.32.1l1.91 1.86zM13.95 14.03c.44-.18.91-.14 1.31.1l4.83 2.91c.36.22.6.57.67.98.08.42 0 .84-.24 1.19l-1.66 2.43c-.27.39-.67.62-1.13.65-.46.03-.89-.12-1.23-.44l-4.57-4.26c-.33-.31-.51-.73-.52-1.19 0-.46.17-.88.5-1.2.03-.03.06-.05.09-.07z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer
      className="rounded-t-[3rem] font-sans"
      style={{ backgroundColor: '#e7f5ff' }}
    >
      <div className="w-full px-6 sm:px-10 lg:px-14 py-12 md:py-16 overflow-x-hidden text-left">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[2.2fr_0.9fr_0.9fr] gap-12 md:gap-16 items-start">
          {/* Left Column - Logo, Contact, Social */}
          <div className="space-y-6">
            <div>
              <img
                src="/images/logo.png"
                alt="Western Neurological Associates"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <div>
            
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[120px_1.8fr_1fr] items-start gap-6">
              <div>
                <p className="text-[#0A8DDB] text-xs uppercase tracking-wide font-semibold mb-2">Phone</p>
                <a href="tel:8188452255" className="text-[#0A8DDB] font-semibold text-sm">
                  818.845.2255
                </a>
              </div>
              <div className="min-w-0">
                <p className="text-[#0A8DDB] text-xs uppercase tracking-wide font-semibold mb-2">Location</p>
                <p className="text-[#0A8DDB] font-semibold text-sm whitespace-nowrap">
                  1218 W Olive Ave. Burbank, CA 91506
                </p>
              </div>
              <div>
                <p className="text-[#0A8DDB] text-xs uppercase tracking-wide font-semibold mb-2">Social Links</p>
                <div className="flex gap-3">
                  {socialIcons.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={item.name}
                      className="hover:opacity-80 transition-opacity"
                      style={{ color: '#0A8DDB' }}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[#0A8DDB] text-xs pt-6 text-left">
              © Copyright 2022 Western Neurological Associates
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="text-left">
            <h4 className="font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-5 text-left">
              <li>
                <Link to="/" className="text-[#0A8DDB] hover:text-blue-900 text-sm font-semibold">
                  About
                </Link>
              </li>
              <li>
                <Link to="/patient-information" className="text-[#0A8DDB] hover:text-blue-900 text-sm font-semibold">
                  Patient Information
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#0A8DDB] hover:text-blue-900 text-sm font-semibold">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-[#0A8DDB] hover:text-blue-900 text-sm font-semibold">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/book-appointment" className="text-[#0A8DDB] hover:text-blue-900 text-sm font-semibold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Services */}
          <div className="text-left">
            <h4 className="font-bold text-base mb-4">Services</h4>
            <ul className="space-y-5 text-left">
              <li>
                <Link to="/services" className="text-[#0A8DDB] hover:text-blue-900 text-sm font-semibold">
                  Epilepsy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#0A8DDB] hover:text-blue-900 text-sm font-semibold">
                  Headaches
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#0A8DDB] hover:text-blue-900 text-sm font-semibold">
                  Neuromuscular disorders
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#0A8DDB] hover:text-blue-900 text-sm font-semibold">
                  Sleep Disorders
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#0A8DDB] hover:text-blue-900 text-sm font-semibold">
                  EEG (Electroencephalogram)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
