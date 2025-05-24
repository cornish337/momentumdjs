// components/sections/ServicesOverview.js
import ServiceCard from '../ui/ServiceCard';

const services = [
  {
    title: 'DJ Hire',
    description: 'Professional DJs for any event, playing your music, your way. Experienced in all genres.',
    link: '/djs', // Placeholder link, update when actual pages exist
    iconPlaceholder: '🎧', // Example emoji icon
  },
  {
    title: 'Photo Booths',
    description: 'Fun & interactive magic mirror photo booths to capture memories and entertain your guests.',
    link: '/photo-booths', // Placeholder link
    iconPlaceholder: '📸',
  },
  {
    title: 'Corporate Events',
    description: 'Reliable and engaging entertainment solutions for your corporate functions, parties, and conferences.',
    link: '/corporate-events', // Placeholder link
    iconPlaceholder: '💼',
  },
  {
    title: 'Weddings',
    description: 'Creating the perfect soundtrack for your special day. Bespoke wedding DJ and entertainment packages.',
    link: '/weddings', // Placeholder link
    iconPlaceholder: '💍',
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary font-serif">
            What We Offer
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Tailored entertainment solutions to make your event unforgettable.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              link={service.link}
              iconPlaceholder={service.iconPlaceholder}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
