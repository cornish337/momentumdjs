import Link from 'next/link';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-brand-secondary text-white py-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-serif text-3xl font-bold text-white">
          Momentum DJs
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
