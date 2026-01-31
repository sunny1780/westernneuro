const ServiceSection = () => {
    return (
      <section className="py-24 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
            
            {/* Image Card */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-[320px] sm:w-[380px] md:w-[420px] h-[480px] sm:h-[520px] bg-gray-200 rounded-2xl" />
            </div>
  
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-[#053759] mb-4 md:mb-6">
                Our Services
              </h2>
              <p className="text-gray-400 max-w-xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default ServiceSection;
  