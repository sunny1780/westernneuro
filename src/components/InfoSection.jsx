import React from "react";

const InfoSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-16 py-12 md:py-16 space-y-16 md:space-y-24 text-left">
      
      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold  mb-4">
            Lorem Ipsum: Dolor sit amet
          </h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <h3 className="text-xl font-semibold  mb-2">
            Lorem Ipsum
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="bg-gray-200 rounded-2xl h-48 sm:h-64 w-full min-h-[180px]" />
      </div>

      {/* Section 2 (reversed) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="bg-gray-200 rounded-2xl h-48 sm:h-64 w-full min-h-[180px]" />

        <div>
          <h2 className="text-2xl font-semibold  mb-4">
            Lorem Ipsum: Dolor sit amet
          </h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <h3 className="text-xl font-semibold  mb-2">
            Lorem Ipsum
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* Text Heavy Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold ">
          Lorem Ipsum: Dolor sit amet
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <h3 className="text-xl font-semibold">
          Lorem Ipsum
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <h3 className="text-xl font-semibold">
          Lorem Ipsum Dolor
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* List Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">
          Lorem Ipsum Dolor
        </h3>

        <ol className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-semibold">Lorem Ipsum</span>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </li>

          <li>
            <span className="font-semibold">Lorem Ipsum</span>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </li>

          <li>
            <span className="font-semibold text-gray-300">Lorem Ipsum</span>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default InfoSection;
