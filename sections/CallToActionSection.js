// components/sections/CallToActionSection.js
import Link from 'next/link';

export default function CallToActionSection() {
  return (
    <section className="bg-brand-primary text-white py-16 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif leading-tight">
          Ready to Make Your Event Unforgettable?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Let Momentum DJs provide the ultimate soundtrack and entertainment for your special occasion. 
          Contact us today for a personalized quote and let's start planning!
        </p>
        <Link
          href="/contact" // Link to the contact page
          className="inline-block bg-white hover:bg-gray-100 text-brand-primary text-lg font-semibold px-10 py-4 rounded-md shadow-xl transition-transform transform hover:scale-105"
        >
          Book Your Event Today
        </Link>
      </div>
    </section>
  );
}
