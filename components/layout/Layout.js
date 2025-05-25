import SeoHead from './SeoHead';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <SeoHead title={title} description={description} />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
