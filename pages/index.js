// pages/index.js
import HeroSection from '../components/sections/HeroSection';
import ServicesOverview from '../components/sections/ServicesOverview';
import TestimonialsPreview from '../components/sections/TestimonialsPreview';
import CallToActionSection from '../components/sections/CallToActionSection';

export default function HomePage() {
  // These props would be passed to the Layout component via _app.js
  // For now, we're just ensuring the page structure is correct.
  // We can later enhance _app.js or this page to pass these dynamically.
  // For example, pageProps.title = "Home - Momentum DJs"; 
  // pageProps.description = "Welcome to Momentum DJs...";

  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <TestimonialsPreview />
      <CallToActionSection /> {/* New Section */}
    </>
  );
}

// getStaticProps remains the same
export async function getStaticProps() {
  return {
    props: {
      title: 'Home',
      description: 'Welcome to Momentum DJs - Your premier choice for event entertainment in London & Newcastle. Professional DJs, photo booths, and more.',
    },
  };
}
