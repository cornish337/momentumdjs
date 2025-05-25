import { MusicalNoteIcon, BriefcaseIcon, CakeIcon } from '@heroicons/react/24/outline'; // Example icons

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
    <section className="py-16 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
