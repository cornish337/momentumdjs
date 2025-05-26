import { StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link'; // Import Link for the button

const testimonials = [
  {
    quote: "Momentum DJs made our wedding unforgettable! The music selection was perfect, and everyone was dancing all night.",
    name: "Sarah & Tom L.",
    event: "Wedding Reception",
    rating: 5,
  },
  {
    quote: "Professional, energetic, and knew exactly how to read the crowd at our corporate event. Highly recommend!",
    name: "John B. - CEO, Tech Solutions Inc.",
    event: "Corporate Gala",
    rating: 5,
  },
  {
    quote: "The best DJ for any party! They kept the energy high and the playlist was fantastic for my 30th birthday.",
    name: "Emily R.",
    event: "Birthday Party",
    rating: 5,
  },
];

const TestimonialsPreview = () => {
  return (
    <section className="py-16 bg-gray-100 w-full"> {/* Updated section background */}
      <div className="container mx-auto px-4">
        {/* Title will inherit styles from globals.css: font-serif, font-bold, text-brand-secondary, text-4xl, mb-5 */}
        {/* Overriding size to text-3xl (as it was) or text-4xl (as per H2 global) - keeping H2 global style */}
        <h2 className="text-center mb-12"> {/* Removed specific text color/size, will inherit */}
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out" // Updated card background
            >
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" /> // Star color kept as text-yellow-400
                ))}
              </div>
              {/* P will inherit: font-sans, text-gray-800 (body default), mb-4, leading-relaxed */}
              {/* Overriding text color, font style */}
              <p className="font-sans text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              {/* P will inherit: font-sans, text-gray-800 (body default), mb-4, leading-relaxed */}
              {/* Overriding text color, font style, and margin */}
              <p className="font-sans font-semibold text-brand-secondary mb-1">{testimonial.name}</p>
              {/* P will inherit: font-sans, text-gray-800 (body default), mb-4, leading-relaxed */}
              {/* Overriding text color, font style, and margin */}
              <p className="font-sans text-gray-600 text-sm mb-0">{testimonial.event}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/testimonials"
            className="bg-brand-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Read More Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
