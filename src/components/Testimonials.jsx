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
     text: "This office is staffed with kind, smart, and fearless healthcare providers and staff. I truly consider it a blessing that I was referred here. I have nothing but the highest admiration for the staff. Consequently, it can sometimes be difficult to get scheduled in a short time (if needed). However, the quality of staff is impeccable. I cannot express the gratitude I have since I began treatment here. Thank you.",
     name: "David G",
    //  position: "Position, Company name",
     avatar: "/images/testone.png"
   },
   {
     id: 2,
     rating: 5,
     text: "This is an amazing place with amazing staff. Quick, and knowledgeable. Taylor was very helpful and very patient. She listened to me and made sure to pass along the information. Then Elaine confirmed all the information and gave me a coordination and mobility test. I really loved coming here. I haven’t felt so taken care of in the many medical facilities I’ve been to. This was a clean, well located place, with parking and easy access. Thank you so much to all the staff there answering our calls and questions!",
     name: "John Manuela Garcia AmayaDoe",
    //  position: "Position, Company name",
     avatar: "/images/testtwo.png"
   },
   {
     id: 3,
     rating: 5,
     text: "From moment I walked in I knew I was in good hands. Front girls at desk were top notch & so nice. Medical Assistant who took my intake was wonderful too(sorry forgot her name), very nice & thorough. Then I saw Dr. Elaine Chen. OMG! I've never in my life had a doctor who explained EVERYTHING so thoroughly. Then, even asked if I had any questions. Most doctors I've seen in the past just want to get you in & get you out. Never did I feel rushed, which for me is unheard of. She was a joy to deal with. I actually felt like a person & not a number. Thank You Dr. Chen for explaining everything to me so well!! Will make this my regular clinic from now on.",
     name: "Joanne Schaeffer",
    //  position: "Position, Company name",
     avatar: "/images/testthree.png"
   },
   {
     id: 4,
     rating: 5,
     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
     name: "Name Surname",
    //  position: "Position, Company name",
     avatar: "/images/testfour.png"
   }
 ];
 
 const testimonials2 = [
   {
     id: 5,
     rating: 5,
     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
     name: "Name Surname",
    //  position: "Position, Company name",
     avatar: "/images/testfive.png"
   },
   {
     id: 6,
     rating: 5,
     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
     name: "Name Surname",
    //  position: "Position, Company name",
     avatar: "/images/testone.png"
   },
   {
     id: 7,
     rating: 5,
     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
     name: "Name Surname",
    //  position: "Position, Company name",
     avatar: "/images/testtwo.png"
   },
   {
     id: 8,
     rating: 5,
     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
     name: "Name Surname",
    //  position: "Position, Company name",
     avatar: "/images/testthree.png"
   }
 ];
 
 function TestimonialsMarquee() {
   React.useEffect(() => {
     const styleSheet = document.createElement("style");
     styleSheet.innerText = `
       @keyframes marquee-move {
         to {
           transform: translateX(calc(-100cqw - var(--item-gap)));
         }
       }
     `;
     document.head.appendChild(styleSheet);
     
     return () => {
       document.head.removeChild(styleSheet);
     };
   }, []);
 
   const Marquee = ({ testimonials, direction = 'forwards' }) => {
     const numItems = testimonials.length;
     const speed = '40s'; // Testimonials ke liye thoda slow
     const itemGap = '20px';
 
     return (
       <div
         className="max-w-full overflow-hidden"
         style={{
           '--speed': speed,
           '--numItems': numItems,
           '--item-width': 'min(350px, 85vw)',
           '--item-gap': itemGap,
           '--direction': direction,
           maskImage: 'linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)'
         }}
       >
         <div
           className="w-max flex"
           style={{
             '--track-width': `calc(var(--item-width) * ${numItems})`,
             '--track-gap': `calc(var(--item-gap) * ${numItems})`
           }}
         >
           {[...testimonials, ...testimonials].map((testimonial, index) => (
             <div
               key={index}
               className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
               style={{
                 width: 'min(350px, 85vw)',
                 marginRight: 'var(--item-gap)',
                 animation: `marquee-move var(--speed) linear infinite ${direction}`
               }}
             >
               {/* Stars */}
               <div className="flex gap-1 text-yellow-400 mb-4">
                 {[...Array(testimonial.rating)].map((_, i) => (
                   <StarIcon key={i} />
                 ))}
               </div>
 
               {/* Testimonial Text */}
               <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                 "{testimonial.text}"
               </p>
 
               {/* User Info */}
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
             </div>
           ))}
         </div>
       </div>
     );
   };
 
   return (
     <div className="py-12 md:py-16 bg-gray-50">
       <div className="container mx-auto px-4 sm:px-6">
         {/* Header */}
         <div className="text-center mb-8 md:mb-12">
           <p className="text-teal-500 text-sm font-medium mb-2">
             What Clients Say
           </p>
           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             
Testimonials

           </h2>
           <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
           Hear from our valued patients about their experiences with our compassionate care and expert neurological treatment.
           </p>
         </div>
 
         {/* Marquee Rows */}
         <div className="flex flex-col gap-6">
           <Marquee testimonials={testimonials1} />
           <Marquee testimonials={testimonials2} direction="reverse" />
         </div>
       </div>
     </div>
   );
 }
 
 export default TestimonialsMarquee;
