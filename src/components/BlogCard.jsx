import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "ADHD Uncovered: A Comprehensive Guide",
    description: "Learn about ADHD symptoms, causes, and effective treatments for children and adults. Discover how proper support can help individuals thrive.",
    image: "/images/Blog1.jpg",
    link: "/blog1",
  },
  {
    title: "Anxiety: Understanding & Treatment",
    description: "Learn about anxiety disorders, their symptoms, causes, and effective treatment options including therapy and lifestyle changes.",
    image: "/images/Blog3.jpg",
    link: "/blog3",
  },
  {
    title: "Autism Explained: A Complete Guide to Understanding ASD",
    description: "Learn what Autism Spectrum Disorder is, its signs, causes, diagnosis, and support options in this complete guide.",
    image: "/images/55.png",
    link: "/blog4",
  },
  {
    title: "Bronchitis Explained: Symptoms, Causes, and Effective Treatments",
    description: "Learn about bronchitis symptoms, causes, and treatments. Discover when to see a doctor and how to recover faster.",
    image: "/images/59.png",
    link: "/blog5",
  },
  {
    title: "The Common Cold: Symptoms, Causes, and Recovery",
    description: "Discover common cold symptoms, causes, and proven remedies. Learn when to rest at home and when to see a doctor.",
    image: "/images/61.jpeg",
    link: "/blog6",
  },
  {
    title: "Understanding Depression: Symptoms, Causes, and Treatments",
    description: "Understand depression symptoms, causes, and treatments. Learn how to get help and support recovery for a healthier life.",
    image: "/images/64.jpeg",
    link: "/blog7",
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
                to={blog.link}
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
