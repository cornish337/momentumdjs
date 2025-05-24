// components/layout/Footer.js
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-secondary text-gray-300 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">
          {/* Placeholder for social icons */}
          <span className="mx-2 hover:text-brand-primary transition-colors cursor-pointer">Facebook</span>
          <span className="mx-2 hover:text-brand-primary transition-colors cursor-pointer">Instagram</span>
          <span className="mx-2 hover:text-brand-primary transition-colors cursor-pointer">Twitter</span>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Momentum DJs. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Website by [Your Agency/Name or Placeholder] - Client to update
        </p>
      </div>
    </footer>
  );
}
