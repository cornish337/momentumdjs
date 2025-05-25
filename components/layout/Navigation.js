import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav>
      {/* Hamburger Menu Button - Visible on Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Open navigation menu"
          className="text-white focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Desktop Navigation - Hidden on Mobile */}
      <ul className="hidden md:flex space-x-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-white hover:text-indigo-300 px-3 py-2 rounded-md text-sm font-medium">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-menu"
        className={`
          md:hidden absolute top-16 right-0 left-0 bg-gray-800 shadow-lg z-50
          transition-all duration-300 ease-in-out transform
          ${isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
        `}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={closeMobileMenu} className="text-white hover:text-indigo-300 block px-3 py-2 rounded-md text-base font-medium">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
