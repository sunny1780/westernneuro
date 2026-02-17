import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src="https://customer-leo8lubv91ct4vwd.cloudflarestream.com/6358bb5d5dbe880f74576ccb6908eadb/manifest/video.m3u8" type="application/x-mpegURL" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight uppercase tracking-tight">
        Western 
          <br />
          <span>Neurological Associates</span>
        </h1>
        <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto mb-8">
        Neurology and Sleep Specialist Providing Comprehensive, Patient-Centered Care
        </p>
        <a
          href="/services"
          className="inline-block bg-[#1299ED] hover:bg-[#1a7fe6] text-white font-medium px-8 py-4 rounded-lg transition"
        >
          Explore Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
