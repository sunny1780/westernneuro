const BlogsSection = () => {
    return (
      <section className="py-12 md:py-24 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-20">
            
            {/* Image Card */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="w-full max-w-[320px] sm:max-w-[380px] md:w-[420px] h-[280px] sm:h-[400px] md:h-[520px] bg-gray-200 rounded-2xl" />
            </div>
  
            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-[#053759] mb-4 md:mb-6">
                Blogs
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
  
  export default BlogsSection;
  