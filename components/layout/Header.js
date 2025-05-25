import Link from 'next/link';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Momentum DJs
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
