// pages/services/index.js
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export async function getStaticProps() {
  return {
    props: {
      title: "Our Services - Momentum DJs",
      description: "Explore the range of professional DJ services offered by Momentum DJs for weddings, corporate events, parties, and more.",
    },
  };
}

const services = [
  {
    name: "Wedding DJ Services",
    slug: "wedding-dj",
    description: "Tailored music and entertainment to make your wedding day unforgettable. From romantic ceremonies to lively receptions.",
  },
  {
    name: "Corporate Event DJs",
    slug: "corporate-events",
    description: "Professional DJ services for company parties, conferences, product launches, and award ceremonies. ",
  },
  {
    name: "Private Parties & Celebrations",
    slug: "private-parties",
    description: "Birthdays, anniversaries, graduations, or any special occasion – we bring the perfect soundtrack.",
  },
  {
    name: "Club & Bar DJs",
    slug: "club-bar-djs",
    description: "Experienced DJs to keep the energy high and the dance floor packed at your venue.",
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16"> {/* Updated padding */}
      {/* H1 inherits: font-serif, text-5xl, font-bold, text-brand-secondary, mb-6 */}
      <h1 className="text-center">Our DJ Services</h1> {/* Removed specific styles, added text-center */}
      {/* P inherits: font-sans, text-gray-800, leading-relaxed, mb-4. Added mb-12, max-w-3xl */}
      <p className="text-center max-w-3xl mx-auto mb-12">
        At Momentum DJs, we offer a comprehensive range of professional DJ services to cater to any event type and musical taste. We are committed to providing high-quality entertainment and creating the perfect atmosphere for your special occasion.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div 
            key={service.slug} 
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-t-4 border-brand-primary"
          >
            {/* H3 inherits: font-serif, text-3xl, font-bold, text-gray-700, mb-4. Overriding mb-3 */}
            <h3 className="mb-3">{service.name}</h3>
            {/* P inherits: font-sans, text-gray-700 (overriding body default), mb-4, leading-relaxed */}
            <p className="text-gray-700">{service.description}</p> {/* text-gray-700 specified as per instructions */}
            {/* Link inherits: text-brand-primary, hover:text-orange-700, font-medium */}
            <Link href={`/services/${service.slug}`} className="inline-flex items-center font-medium"> {/* Removed specific text colors */}
              Learn More
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        {/* P has specified styles */}
        <p className="text-xl text-gray-700 mb-4 font-sans">Don't see exactly what you're looking for?</p>
        {/* Link has specified styles */}
        <Link 
          href="/contact" 
          className="bg-brand-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Contact Us for a Custom Quote
        </Link>
      </div>
    </div>
  );
}
