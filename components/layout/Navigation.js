import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
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
  const router = useRouter(); // Initialize useRouter

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const linkClasses = (href) => {
    const isActive = router.pathname === href;
    return `px-3 py-2 rounded-md text-sm font-medium ${
      isActive ? 'text-brand-primary font-semibold' : 'text-gray-200 hover:text-brand-primary'
    }`;
  };

  const mobileLinkClasses = (href) => {
    const isActive = router.pathname === href;
    return `block px-3 py-2 rounded-md text-base font-medium ${
      isActive ? 'text-brand-primary font-semibold' : 'text-gray-200 hover:text-brand-primary'
    }`;
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
          className="text-white focus:outline-none" // Icon color
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-8 w-8 text-white" /> // Icon color
          ) : (
            <Bars3Icon className="h-8 w-8 text-white" /> // Icon color
          )}
        </button>
      </div>

      {/* Desktop Navigation - Hidden on Mobile */}
      <ul className="hidden md:flex space-x-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkClasses(link.href)}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-menu"
        className={`
          md:hidden absolute top-full right-0 left-0 bg-brand-secondary shadow-lg z-50
          transition-all duration-300 ease-in-out transform origin-top
          ${isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'}
        `}
      >
        <ul className="flex flex-col items-center space-y-2 py-4"> {/* Reduced space-y for tighter packing */}
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={closeMobileMenu} className={mobileLinkClasses(link.href)}>
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
