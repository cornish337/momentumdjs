import { MusicalNoteIcon, BriefcaseIcon, CakeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'; // Import Link for the button

const services = [
  {
    name: 'Weddings',
    description: 'Crafting the perfect musical atmosphere for your special day. From ceremony to reception, we ensure every moment is memorable.',
    icon: MusicalNoteIcon,
  },
  {
    name: 'Corporate Events',
    description: 'Professional DJ services to elevate your company gatherings, product launches, and holiday parties with the right vibe.',
    icon: BriefcaseIcon,
  },
  {
    name: 'Parties & Celebrations',
    description: 'Birthdays, anniversaries, or any celebration – we bring the energy and tunes to make your party a hit.',
    icon: CakeIcon,
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-16 bg-light-gray w-full"> {/* Updated background */}
      <div className="container mx-auto px-4">
        {/* Title will inherit styles from globals.css: font-serif, font-bold, text-brand-secondary, text-4xl, mb-5 */}
        {/* Overriding size to text-3xl (as it was) or text-4xl (as per H2 global) - keeping H2 global style */}
        <h2 className="text-center mb-12"> {/* Removed specific text color/size, will inherit */}
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-brand-primary hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <service.icon className="h-12 w-12 text-brand-primary mb-4" /> {/* Updated icon color */}
              {/* H3 will inherit: font-serif, font-bold, text-3xl, mb-4, text-gray-700 */}
              {/* Overriding size to text-xl (as it was) and mb-2 */}
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3> {/* Removed specific text color, will inherit */}
              {/* P will inherit: font-sans, text-gray-800 (body default), mb-4, leading-relaxed */}
              {/* Overriding text color to text-gray-600 as specified */}
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="bg-brand-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Explore All Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
