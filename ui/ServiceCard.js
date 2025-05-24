// components/ui/ServiceCard.js
import Link from 'next/link';

export default function ServiceCard({ title, description, link, iconPlaceholder }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 transform transition-all hover:scale-105 hover:shadow-xl flex flex-col items-center text-center">
      <div className="w-20 h-20 bg-brand-primary text-white rounded-full flex items-center justify-center mb-6 text-3xl">
        {/* Placeholder for actual icon - Client to replace */}
        {iconPlaceholder || 'Icon'}
      </div>
      <h3 className="text-2xl font-semibold text-brand-secondary mb-3 font-serif">{title}</h3>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">{description}</p>
      <Link
        href={link}
        className="mt-auto inline-block bg-brand-accent hover:bg-opacity-80 text-white text-sm font-medium px-6 py-2 rounded-md transition-colors"
      >
        Learn More
      </Link>
    </div>
  );
}
