import React from 'react';
import BlogsSection from '../components/BlogsSection';
import BlogCard from '../components/BlogCard';
import AppointmentSection from '../components/AppointmentSection';  
import Footer from '../components/Footer';


function Blogs() {
  return (
    <div>
      <BlogsSection />
      <BlogCard/>
      <AppointmentSection/>
      <Footer/>
    </div>
  );
}

export default Blogs;
