import Link from 'next/link';

const CallToActionSection = () => {
  return (
    <section className="bg-brand-primary text-white w-full py-16">
      <div className="container mx-auto text-center px-4">
        {/* H2 will inherit font-bold and text-4xl (default for H2) from globals.css. font-serif also from globals.css */}
        {/* Overriding with text-3xl md:text-4xl and ensuring text-white */}
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Elevate Your Event?
        </h2>
        {/* P will inherit font-sans from globals.css */}
        <p className="font-sans text-lg md:text-xl mb-8 max-w-2xl mx-auto text-orange-100">
          Contact us today to discuss your event needs and get a personalized quote. Let's make your next event unforgettable!
        </p>
        <Link
          href="/contact"
          className="bg-brand-secondary text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Book Your DJ Today!
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;
