 'use client';
 
 import React from 'react';
 
 // Star Icon Component
 const StarIcon = () => (
   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
   </svg>
 );
 
 // Testimonial data
 const testimonials1 = [
   {
     id: 1,
     rating: 5,
     text: "Dr. Faisal is a gifted healer. My migraines improved greatly. His caring team goes above and beyond. Forever grateful to everyone.",
     name: "Dr. Monica Carbajal",
    //  position: "Position, Company name",
     avatar: "/images/testmonial/1.png"
   },
   {
     id: 2,
     rating: 5,
     text: "Very positive sleep study experience. Clean, comfortable facility. TJ was professional, reassuring, and made the entire process smooth and stress-free.",
     name: "Sean Nielsen",
    //  position: "Position, Company name",
     avatar: "/images/testmonial/2.png"
   },
   {
     id: 3,
     rating: 5,
     text: "Outstanding clinic. Dr. Faisal listens carefully and addresses concerns. Friendly staff consistently go above and beyond, making patients feel valued.",
     name: "Anthony Haddad",
    //  position: "Position, Company name",
     avatar: "/images/testmonial/3.png"
   },
   {
     id: 4,
     rating: 5,
     text: "My husband’s appointment went great. Antonio was friendly and professional. Staff were helpful and kind. Overall a pleasant experience.",
     name: "Kathryn Nelson",
    //  position: "Position, Company name",
     avatar: "/images/testmonial/4.png"
   }
 ];
 
 const testimonials2 = [
   {
     id: 5,
     rating: 5,
     text: "Great experience with WNA. Dr. Faisal was thorough, knowledgeable, and caring. Team was welcoming and helpful. Highly recommended.",
     name: "Mona A",
    //  position: "Position, Company name",
     avatar: "/images/testmonial/5.png"
   },
   {
     id: 6,
     rating: 5,
     text: "This office is staffed with kind, smart, fearless providers. I feel blessed being referred here. Quality is impeccable. Thank you always.",
     name: "David G",
    //  position: "Position, Company name",
     avatar: "/images/testone.png"
   },
   {
     id: 7,
     rating: 5,
     text: "This is an amazing place with amazing staff. Quick, knowledgeable, caring. Taylor and Elaine were patient, helpful, thorough. Clean location, access.",
     name: "John Manuela Garcia AmayaDoe",
    //  position: "Position, Company name",
     avatar: "/images/testtwo.png"
   },
   {
     id: 8,
     rating: 5,
     text: "From the moment I walked in, I knew I was in good hands. Dr. Elaine Chen was thorough, kind, never rushed.",
     name: "Joanne Schaeffer",
    //  position: "Position, Company name",
     avatar: "/images/testthree.png"
   }
 ];
 
 function TestimonialsMarquee() {
   const [selectedTestimonial, setSelectedTestimonial] = React.useState(null);

   React.useEffect(() => {
     const styleSheet = document.createElement("style");
     styleSheet.innerText = `
      @keyframes marquee-move {
        to {
          transform: translateX(
            calc((var(--item-width) + var(--item-gap)) * var(--numItems) * -1)
          );
        }
      }
     `;
     document.head.appendChild(styleSheet);
     
     return () => {
       document.head.removeChild(styleSheet);
     };
   }, []);
 
   const Marquee = ({ testimonials, direction = 'forwards', onCardClick }) => {
     const numItems = testimonials.length;
     const speed = '40s';
     const itemGap = '20px';
 
     return (
       <div
         className="max-w-full overflow-hidden"
        style={{
          '--speed': speed,
          '--numItems': numItems,
          '--item-width': 'min(350px, 85vw)',
          '--item-gap': itemGap,
          '--direction': direction
        }}
       >
        <div
          className="w-max flex"
          style={{
            animation: `marquee-move var(--speed) linear infinite`,
            animationDirection: direction === 'reverse' ? 'reverse' : 'normal'
          }}
        >
           {[...testimonials, ...testimonials].map((testimonial, index) => (
             <div
               key={index}
               onClick={() => onCardClick(testimonial)}
               role="button"
               tabIndex={0}
               onKeyDown={(e) => e.key === 'Enter' && onCardClick(testimonial)}
              className="group flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-200 text-left"
               style={{
                 width: 'min(350px, 85vw)',
                marginRight: 'var(--item-gap)'
               }}
             >
               {/* Stars */}
               <div className="flex gap-1 text-yellow-400 mb-4">
                 {[...Array(testimonial.rating)].map((_, i) => (
                   <StarIcon key={i} />
                 ))}
               </div>
 
               {/* Testimonial Text */}
               <p
                 className="text-gray-700 text-sm mb-6 leading-[150%] line-clamp-4 text-left"
                 style={{ fontFamily: 'Roboto, sans-serif', letterSpacing: '0' }}
               >
                 "{testimonial.text}"
               </p>
 
               {/* User Info */}
               <div className="flex items-center justify-between gap-3">
                 <div className="flex items-center gap-3">
                   <img
                     src={testimonial.avatar}
                     alt={testimonial.name}
                     className="w-12 h-12 rounded-full object-cover"
                   />
                   <div>
                     <h4 className="font-semibold text-gray-900 text-sm">
                       {testimonial.name}
                     </h4>
                     <p className="text-gray-500 text-xs">
                       {testimonial.position}
                     </p>
                   </div>
                 </div>
                 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-[#1299ED] group-hover:text-white transition-all duration-200" title="View full testimonial">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                   </svg>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
     );
   };
 
   return (
     <div className="py-12 md:py-16 bg-gray-50 relative">
      <div className="w-full max-w-none mx-0 px-0">
         {/* Header */}
         <div className="text-center mb-8 md:mb-12">
           {/* <p className="text-teal-500 text-sm font-medium mb-2">
             What Clients Say
           </p> */}
          <h2
            className="text-[48px] font-bold text-[#11181C] leading-[1] mb-4"
            style={{ letterSpacing: '0.5%', fontFamily: 'Manrope, sans-serif' }}
          >
            Trusted by Our Patients
          </h2>
          <p
            className="text-[18px] leading-[28px] font-normal text-[#687076] max-w-2xl mx-auto px-2"
            style={{ letterSpacing: '0.5%' }}
          >
            Hear from our valued patients about their experiences with our compassionate care and expert neurological treatment.
          </p>
         </div>
 
         {/* Marquee Rows */}
         <div className="flex flex-col gap-6">
           <Marquee testimonials={testimonials1} onCardClick={setSelectedTestimonial} />
           <Marquee testimonials={testimonials2} direction="reverse" onCardClick={setSelectedTestimonial} />
         </div>
       </div>

       {/* Modal - Full testimonial on click */}
       {selectedTestimonial && (
         <div
           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
           onClick={() => setSelectedTestimonial(null)}
         >
           <div
             className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 md:p-8"
             onClick={(e) => e.stopPropagation()}
           >
             <button
               onClick={() => setSelectedTestimonial(null)}
               className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
               aria-label="Close"
             >
               <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
               </svg>
             </button>
             <div className="flex gap-1 text-yellow-400 mb-4">
               {[...Array(selectedTestimonial.rating)].map((_, i) => (
                 <StarIcon key={i} />
               ))}
             </div>
             <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
               "{selectedTestimonial.text}"
             </p>
             <div className="flex items-center gap-3">
               <img
                 src={selectedTestimonial.avatar}
                 alt={selectedTestimonial.name}
                 className="w-14 h-14 rounded-full object-cover"
               />
               <h4 className="font-semibold text-gray-900">
                 {selectedTestimonial.name}
               </h4>
             </div>
           </div>
         </div>
       )}
     </div>
   );
 }
 
 export default TestimonialsMarquee;
