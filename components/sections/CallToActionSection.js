import Link from 'next/link'; // Moved import to the top

const CallToActionSection = () => {
  return (
    <section className="bg-indigo-700 text-white w-full py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Elevate Your Event?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your event needs and get a personalized quote. Let's make your next event unforgettable!
        </p>
        <Link
          href="/contact"
          className="bg-white text-indigo-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Book Your DJ Today!
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;
