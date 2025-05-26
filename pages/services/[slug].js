import Link from 'next/link';
import { useRouter } from 'next/router';

// Replicated services data (as per instruction, ideally this would come from a shared lib/data source)
const services = [
  {
    name: "Wedding DJ Services",
    slug: "wedding-dj",
    description: "Tailored music and entertainment to make your wedding day unforgettable. From romantic ceremonies to lively receptions.",
    // Placeholder for more detailed content if needed later
    longDescription: "Our Wedding DJ Services are fully customizable to match your unique style and vision. We work with you on every detail, from pre-ceremony music to the last dance, ensuring a seamless and magical experience. Our package includes professional sound systems, lighting options, and a vast music library spanning all genres."
  },
  {
    name: "Corporate Event DJs",
    slug: "corporate-events",
    description: "Professional DJ services for company parties, conferences, product launches, and award ceremonies.",
    longDescription: "Elevate your corporate events with Momentum DJs. We provide sophisticated DJ services that align with your brand image and event objectives. Whether it's a high-energy holiday party, an elegant awards gala, or background music for a networking event, we deliver professionalism and the perfect soundtrack."
  },
  {
    name: "Private Parties & Celebrations",
    slug: "private-parties",
    description: "Birthdays, anniversaries, graduations, or any special occasion – we bring the perfect soundtrack.",
    longDescription: "Make your next private party truly special with Momentum DJs. We cater to all types of celebrations, from intimate gatherings to large-scale bashes. Tell us your theme, preferred genres, and guest demographics, and we'll create a playlist that keeps everyone entertained."
  },
  {
    name: "Club & Bar DJs",
    slug: "club-bar-djs",
    description: "Experienced DJs to keep the energy high and the dance floor packed at your venue.",
    longDescription: "Momentum DJs offers experienced club and bar DJs skilled in various genres, including House, Techno, R&B, Hip Hop, and Top 40. We know how to read the crowd, build energy, and keep your patrons engaged and on the dance floor all night long."
  },
];

export async function getStaticPaths() {
  const paths = services.map((service) => ({
    params: { slug: service.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      service,
      title: `${service.name} - Momentum DJs`,
      // Using the main description for meta description as longDescription might be too long
      description: service.description, 
    },
  };
}

export default function ServicePage({ service }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* H1 inherits: font-serif, text-5xl, font-bold, text-brand-secondary, mb-6 */}
      <h1 className="text-left">{service.name}</h1> {/* text-left as specified */}
      
      {/* P inherits: font-sans, text-gray-800, leading-relaxed, mb-4 */}
      <p className="text-lg text-gray-700 max-w-3xl mb-4">{service.description}</p>
      
      <p className="mt-4 text-lg text-gray-600 max-w-3xl">
        More details about our comprehensive {service.name.toLowerCase()} are coming soon. 
        We tailor every event to your specific needs, ensuring a perfect experience. 
        Please don't hesitate to reach out for a personalized consultation.
      </p>

      <div className="mt-8 p-8 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500 max-w-3xl">
        [Service-specific image or feature section will be here]
      </div>

      <div className="mt-12 max-w-3xl"> {/* max-w-3xl to align with content width */}
        <Link
          href="/contact"
          className="inline-block bg-brand-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Inquire About {service.name}
        </Link>
      </div>
    </div>
  );
}
