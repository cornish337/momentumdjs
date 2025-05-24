// components/sections/HeroSection.js
import Link from 'next/link';

export default function HeroSection() {
  return (
    // Client to replace 'bg-brand-secondary' with a high-quality background image or video
    // For example: style={{ backgroundImage: "url('/images/hero-background.jpg')" }} className="bg-cover bg-center ..."
    <section className="bg-brand-secondary text-white min-h-[calc(100vh-60px)] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"> 
      {/* Adjust min-h if navbar height changes. 60px is a typical navbar height. Or use min-h-screen and adjust padding if navbar is transparent or overlays */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight">
          {/* Option 1: */}
          {/* Unforgettable Events Start Here */}
          {/* Option 2: */}
          Momentum DJs: Feel The Energy
          {/* Option 3 (Client to choose or provide their own): */}
          {/* Crafting Your Perfect Soundtrack */}
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed">
          {/* Option 1: */}
          Professional DJ services, dynamic photo booths, and complete event entertainment solutions in London & Newcastle.
          {/* Option 2 (Client to choose or provide their own): */}
          {/* Experience the difference with our expert team, state-of-the-art equipment, and passion for music. */}
        </p>
        <div>
          <Link
            href="/contact"
            className="inline-block bg-brand-primary hover:bg-opacity-80 text-white text-lg font-semibold px-8 py-4 rounded-md shadow-lg transition-transform transform hover:scale-105"
          >
            Get Your Free Quote
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          {/* Optional: Add a secondary, more subtle CTA or info here */}
          {/* Or call us: +44 (0) 7808 191 848 */}
        </p>
      </div>
    </section>
  );
}
