import { ArrowDownIcon } from '@heroicons/react/24/outline'; // Example icon
import Link from 'next/link'; // Moved import to the top

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-full py-20 md:py-32">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Unforgettable Events, Powered by Music - Momentum DJs
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Crafting the perfect soundtrack for your special moments.
        </p>
        <Link href="/contact" className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
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
