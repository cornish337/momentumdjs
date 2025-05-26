import { ArrowDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-brand-primary via-orange-600 to-orange-700 text-white w-full py-20 md:py-32">
      <div className="container mx-auto text-center px-4">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-white">
          Unforgettable Events, Powered by Music - Momentum DJs
        </h1>
        <p className="font-sans text-lg md:text-xl mb-8 text-orange-100">
          Crafting the perfect soundtrack for your special moments.
        </p>
        <Link 
          href="/contact" 
          className="bg-brand-secondary text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get a Quote
        </Link>
        <div className="mt-16 animate-bounce">
          <ArrowDownIcon className="h-8 w-8 mx-auto text-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
