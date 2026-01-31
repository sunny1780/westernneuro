import React from "react";

const blogs = Array.from({ length: 9 });

export default function BlogCard() {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((_, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white shadow-lg transition hover:shadow-xl p-4 sm:p-5"
          >
            <div className="mb-4 h-32 sm:h-40 w-full rounded-xl bg-gray-200 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h18M3 19h18M5 7h14v10H5z"
                  />
                </svg>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Blog title heading will go here
              </h3>
              <p className="mb-4 text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>

              <button className="w-full rounded-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 font-medium transition">
                Learn More →
              </button>
          </div>
        ))}
      </div>
    </div>
  );
}