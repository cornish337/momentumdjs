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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Our DJ Services</h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
        At Momentum DJs, we offer a comprehensive range of professional DJ services to cater to any event type and musical taste. We are committed to providing high-quality entertainment and creating the perfect atmosphere for your special occasion.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.slug} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">{service.name}</h2>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <Link href={`/services/${service.slug}`} className="inline-flex items-center text-indigo-500 hover:text-indigo-700 font-medium transition-colors">
              Learn More
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl text-gray-700 mb-4">Don't see exactly what you're looking for?</p>
        <Link href="/contact" className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105">
          Contact Us for a Custom Quote
        </Link>
      </div>
    </div>
  );
}
