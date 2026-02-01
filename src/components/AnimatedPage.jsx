import React from 'react';

export default function AnimatedPage({ children, className = '' }) {
  return (
    <div className={`animate-fade-in-up ${className}`}>
      {children}
    </div>
  );
}
