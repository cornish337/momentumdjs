// components/layout/Layout.js
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Momentum DJs` : 'Momentum DJs - Professional DJ & Event Services'}</title>
        <meta name="description" content={description || 'Momentum DJs provides top-tier DJ services, photo booths, and entertainment for weddings, corporate events, and parties.'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> {/* Client to provide favicon.ico in /public */}
      </Head>
      <div className="flex flex-col min-h-screen bg-light-gray">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
