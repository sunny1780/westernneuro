const BlogsSection = () => {
    return (
    <section className="py-12 md:py-24 text-left px-4 sm:px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-20">
            
            {/* Image - Left */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="w-full max-w-[320px] sm:max-w-[380px] md:w-[420px] rounded-2xl overflow-hidden">
                <img
                  src="/images/blghero.png"
                  alt="Blogs"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
  
            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2
              className="text-[30px] sm:text-[44px] md:text-[54px] lg:text-[70px] xl:text-[70px] font-medium text-[#053759] leading-[1] mb-4 md:mb-6"
              style={{ letterSpacing: '0.5%', fontFamily: 'Inter, sans-serif' }}
            >
              Neurological Health Insights & Education
            </h2>
              <p className="max-w-xl leading-relaxed text-[#687076]">
              Expert Articles on Brain Health, Sleep, and Neurological Wellness
            </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default BlogsSection;
  