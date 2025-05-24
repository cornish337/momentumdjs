// pages/index.js
import HeroSection from '../components/sections/HeroSection';
import ServicesOverview from '../components/sections/ServicesOverview';
import TestimonialsPreview from '../components/sections/TestimonialsPreview';
import CallToActionSection from '../components/sections/CallToActionSection'; // New Import

export default function HomePage() {
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
