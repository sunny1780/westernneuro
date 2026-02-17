import React from 'react';

// Your map location: Hayes Valley / Mid-Market — Van Ness, Fell St, Page St, 8th-11th St
const DEFAULT_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2012.5!2d-122.4195!3d37.776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1706745600000!5m2!1sen!2sus";

const MapSection = ({ 
  title = "Find Us",
  address = "Van Ness Ave, Hayes St, Fell St, Page St — San Francisco, CA",
  embedUrl = DEFAULT_EMBED,
  className = ""
}) => {
  return (
    <section className={`py-16 md:py-20 px-4 md:px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-[48px] font-medium text-[#11181C] leading-[1] mb-2 text-left" style={{ letterSpacing: '0.5%' }}>
            {title}
          </h2>
        )}
        {address && (
          <p className="text-gray-600 mb-6 text-left">{address}</p>
        )}
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg aspect-video w-full bg-gray-100">
          <iframe
            title="Location Map"
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
