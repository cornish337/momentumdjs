import { StarIcon } from '@heroicons/react/24/solid'; // Example icon

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
    <section className="py-16 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-gray-700 font-semibold">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
