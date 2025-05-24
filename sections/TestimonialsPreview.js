// components/sections/TestimonialsPreview.js
import TestimonialCard from '../ui/TestimonialCard';

const testimonials = [
  {
    quote: "Momentum DJs were absolutely fantastic at our wedding! The music was perfect, and everyone was dancing all night. Highly recommended!",
    author: "Sarah & Tom P.",
    event: "Wedding Reception",
  },
  {
    quote: "Professional, reliable, and knew exactly how to get the party started for our corporate event. The photo booth was a huge hit too!",
    author: "John B., Event Manager",
    event: "Corporate Gala",
  },
  // Add a third if design allows for a 3-column layout on larger screens
  // {
  //   quote: "The Magic Mirror photo booth was incredible fun and the attendant was super friendly. Our guests loved it!",
  //   author: "Lisa M.",
  //   event: "Birthday Party",
  // },
];

export default function TestimonialsPreview() {
  return (
    <section className="py-16 md:py-24 bg-medium-gray"> {/* Or use bg-white if preferred */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary font-serif">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Real feedback from happy customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.slice(0, 2).map((testimonial, index) => ( // Displaying 2 testimonials for a typical preview
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              event={testimonial.event}
            />
          ))}
        </div>
        <div className="text-center mt-12 md:mt-16">
            <a 
                href="/testimonials" // Placeholder link to a full testimonials page
                className="inline-block bg-brand-primary hover:bg-opacity-80 text-white text-md font-semibold px-8 py-3 rounded-md shadow-md transition-transform transform hover:scale-105"
            >
                View All Testimonials
            </a>
        </div>
      </div>
    </section>
  );
}
