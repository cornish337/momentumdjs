import { StarIcon } from '@heroicons/react/24/solid';

// 1. Define Data Source
const testimonialsData = [
  { quote: "Momentum DJs made our wedding unforgettable! The music selection was perfect, and everyone was dancing all night.", name: "Sarah & Tom L.", event: "Wedding Reception", rating: 5 },
  { quote: "Professional, energetic, and knew exactly how to read the crowd at our corporate event. Highly recommend!", name: "John B. - CEO, Tech Solutions Inc.", event: "Corporate Gala", rating: 5 },
  { quote: "The best DJ for any party! They kept the energy high and the playlist was fantastic for my 30th birthday.", name: "Emily R.", event: "Birthday Party", rating: 5 },
  { quote: "Absolutely fantastic! Momentum DJs understood the vibe we wanted perfectly for our anniversary.", name: "David & Susan P.", event: "Anniversary Celebration", rating: 5 },
  { quote: "Our product launch was a massive success, and the soundtrack provided by Momentum DJs was a key part of it. Smooth transitions and great energy.", name: "Michael K. - Event Coordinator", event: "Product Launch", rating: 4 }
];

// 3. Implement getStaticProps
export async function getStaticProps() {
  return {
    props: {
      title: "Client Testimonials - Momentum DJs",
      description: "Read what our satisfied clients have to say about their experience with Momentum DJs.",
      testimonials: testimonialsData,
    },
  };
}

// 4. Create the Page Component (TestimonialsPage)
export default function TestimonialsPage({ testimonials }) {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page Title (h1) - inherits global styles */}
      <h1 className="text-center">What Our Clients Say</h1>
      
      {/* Introductory paragraph */}
      <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
        We're proud to have played a part in so many successful events. Here's a selection of feedback from our valued clients.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-lg p-8 flex flex-col border-t-4 border-brand-accent"
          >
            {/* Star Icons */}
            <div className="flex mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
              ))}
            </div>
            
            {/* Quote */}
            <p className="font-sans text-gray-700 italic mb-4 flex-grow">"{testimonial.quote}"</p>
            
            {/* Author Name - mt-auto pushes it to the bottom */}
            <p className="font-sans font-semibold text-brand-secondary mt-auto pt-4">{testimonial.name}</p>
            
            {/* Event */}
            <p className="font-sans text-gray-600 text-sm">{testimonial.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
