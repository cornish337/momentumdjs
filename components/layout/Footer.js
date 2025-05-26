import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-brand-secondary text-gray-400 py-8 mt-8">
      <div className="container mx-auto text-center">
        <p className="mb-2">© {new Date().getFullYear()} Momentum DJs. All rights reserved.</p>
        <div className="space-x-4">
          <Link href="/privacy-policy" className="text-gray-300 hover:text-brand-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-gray-300 hover:text-brand-primary transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
