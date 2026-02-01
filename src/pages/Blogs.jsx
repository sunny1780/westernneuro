import React from 'react';
import BlogsSection from '../components/BlogsSection';
import BlogCard from '../components/BlogCard';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';

function Blogs() {
  return (
    <AnimatedPage>
      <AnimatedSection><BlogsSection /></AnimatedSection>
      <AnimatedSection delay={80}><BlogCard /></AnimatedSection>
      <AnimatedSection delay={120}><AppointmentSection /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
    </AnimatedPage>
  );
}

export default Blogs;
