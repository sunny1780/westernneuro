import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "Stay Informed About Your Neurological Health",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "/images/blog.png",
  },
  {
    title: "Stay Informed About Your Neurological Health",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "/images/blghero.png",
  },
  {
    title: "Stay Informed About Your Neurological Health",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "/images/blog.png",
  },
  {
    title: "Stay Informed About Your Neurological Health",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "/images/blghero.png",
  },
  {
    title: "Stay Informed About Your Neurological Health",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "/images/blog.png",
  },
  {
    title: "Stay Informed About Your Neurological Health",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "/images/blghero.png",
  },
  {
    title: "Stay Informed About Your Neurological Health",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "/images/blog.png",
  },
  {
    title: "Stay Informed About Your Neurological Health",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "/images/blghero.png",
  },
  {
    title: "Stay Informed About Your Neurological Health",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "/images/blog.png",
  },
];

export default function BlogCard() {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white shadow-lg transition hover:shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {blog.title}
              </h3>
              <p className="mb-4 text-sm text-gray-500">
                {blog.description}
              </p>
              <Link
                to="/blogs"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#1299ED] hover:bg-[#0d7bc7] text-white py-3 px-4 font-medium transition"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}