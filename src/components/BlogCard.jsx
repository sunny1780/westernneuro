import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "ADHD Uncovered: A Comprehensive Guide",
    description: "Learn about ADHD symptoms, causes, and effective treatments for children and adults. Discover how proper support can help individuals thrive.",
    image: "/images/Blog1.jpg",
  },
  {
    title: "Unraveling Autism: Understanding ASD",
    description: "A comprehensive guide to understanding, diagnosing, and treating Autism Spectrum Disorder for children and adults.",
    image: "/images/Blog2.jpg",
  },
  {
    title: "Anxiety: Understanding & Treatment",
    description: "Learn about anxiety disorders, their symptoms, causes, and effective treatment options including therapy and lifestyle changes.",
    image: "/images/Blog3.jpg",
  },
  // {
  //   title: "Stay Informed About Your Neurological Health",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  //   image: "/images/blghero.png",
  // },
  // {
  //   title: "Stay Informed About Your Neurological Health",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  //   image: "/images/blog.png",
  // },
  // {
  //   title: "Stay Informed About Your Neurological Health",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  //   image: "/images/blghero.png",
  // },
  // {
  //   title: "Stay Informed About Your Neurological Health",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  //   image: "/images/blog.png",
  // },
  // {
  //   title: "Stay Informed About Your Neurological Health",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  //   image: "/images/blghero.png",
  // },
  // {
  //   title: "Stay Informed About Your Neurological Health",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  //   image: "/images/blog.png",
  // },
];

export default function BlogCard() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-16 py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:gap-8 md:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
          >
            <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-[#11181C] mb-3 text-left">
                {blog.title}
              </h3>
              <p className="text-base text-[#687076] leading-relaxed mb-6 text-left flex-1">
                {blog.description}
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-[#1893FF] hover:bg-[#0f80dd] transition w-full"
              >
                Learn More
                <img
                  src="/images/arowicon.png"
                  alt=""
                  className="w-4 h-4 object-contain rotate-[-90deg]"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}