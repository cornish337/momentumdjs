// pages/gallery.js

export async function getStaticProps() {
  return {
    props: {
      title: "Gallery - Momentum DJs",
      description: "See Momentum DJs in action! Browse photos and videos from our past events.",
    },
  };
}

export default function GalleryPage() {
  const photoPlaceholders = Array.from({ length: 6 }, (_, i) => i + 1); // For 6 photos
  const videoPlaceholders = Array.from({ length: 2 }, (_, i) => i + 1); // For 2 videos

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page Title (h1) - inherits global styles */}
      <h1 className="text-center">Our Gallery</h1>
      
      <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
        Step into the experience! Here's a glimpse of the energy and atmosphere we bring to events.
      </p>

      {/* Photo Section */}
      {/* H2 inherits: font-serif, text-4xl, font-bold, text-brand-secondary, mb-5. Overriding mb-8, text-left */}
      <h2 className="text-left mb-8">Event Photos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {photoPlaceholders.map((num) => (
          <div key={`photo-${num}`} className="bg-gray-200 rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1 group">
            <img 
              src={`https://via.placeholder.com/400x400.png/FF6B00/FFFFFF?text=Event+Photo+${num}`} 
              alt={`Placeholder Event Photo ${num}`} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
            />
          </div>
        ))}
      </div>

      {/* Video Section */}
      {/* H2 inherits: font-serif, text-4xl, font-bold, text-brand-secondary, mb-5. Overriding mb-8, text-left, mt-16 */}
      <h2 className="text-left mb-8 mt-16">Event Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {videoPlaceholders.map((num) => (
          <div key={`video-${num}`} className="bg-black rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title={`Placeholder Video Title ${num}`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
