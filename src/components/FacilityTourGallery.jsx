import React from 'react';

const galleryItems = [
  { src: '/images/gallery/1.png', alt: "Doctor's office with diplomas" },
  { src: '/images/gallery/2.png', alt: 'Private office with bookshelf' },
  { src: '/images/gallery/3.png', alt: 'Examination room' },
  { src: '/images/gallery/4.png', alt: 'Outdoor patio' },
  { src: '/images/gallery/5.png', alt: 'Reception and hallway' },
  { src: '/images/gallery/6.png', alt: 'Reception area entrance' },
  { src: '/images/gallery/7.png', alt: 'Staff and building exterior' },
  { src: '/images/gallery/1.png', alt: 'Waiting room' },
];

export default function FacilityTourGallery() {
  return (
    <section className="bg-white py-8 md:py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* 4 rows × 2 columns - exact collage layout */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-gray-200">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover aspect-[4/3]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/800x600/e5e7eb/9ca3af?text=Photo+' + (index + 1);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
