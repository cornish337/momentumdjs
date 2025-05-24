/ components/layout/Navbar.js
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-secondary text-white shadow-md">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-xl font-bold hover:text-brand-primary transition-colors">
              Momentum DJs
            </Link>
            {/* Placeholder for actual logo: <Image src="/images/logo.png" alt="Momentum DJs Logo" width={150} height={40} /> */}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-200 hover:text-brand-primary focus:outline-none focus:text-brand-primary"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu items */}
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row md:mx-6 text-center">
            <Link href="/" className="my-2 text-sm font-medium hover:text-brand-primary md:mx-4 md:my-0 transition-colors">Home</Link>
            <Link href="/#services" className="my-2 text-sm font-medium hover:text-brand-primary md:mx-4 md:my-0 transition-colors">Services</Link> 
            {/* Simple anchor link to a section on the homepage for now */}
            <Link href="/about" className="my-2 text-sm font-medium hover:text-brand-primary md:mx-4 md:my-0 transition-colors">About</Link>
            <Link href="/contact" className="my-2 text-sm font-medium hover:text-brand-primary md:mx-4 md:my-0 transition-colors">Contact</Link>
          </div>

          <div className="flex justify-center md:block mt-4 md:mt-0">
            <Link href="/contact" className="px-4 py-2 bg-brand-primary hover:bg-opacity-80 text-white text-sm font-medium rounded-md transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
