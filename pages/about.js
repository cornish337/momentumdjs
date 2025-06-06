// pages/about.js

export async function getStaticProps() {
  return {
    props: {
      title: "About Us - Momentum DJs",
      description: "Learn more about the history, team, and passion of Momentum DJs.",
    },
  };
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16"> {/* Updated padding */}
      {/* H1 will inherit: font-serif, text-5xl, font-bold, text-brand-secondary, mb-6 from globals.css */}
      <h1 className="text-center">About Momentum DJs</h1> {/* Added text-center */}
      {/* This div centers the text block and applies spacing between paragraphs */}
      {/* Paragraphs inside will inherit text-gray-800, leading-relaxed, and mb-4 (though space-y-6 handles it) */}
      <div className="max-w-3xl mx-auto space-y-6 text-gray-800"> {/* Centered text, increased space-y */}
        <p>
          Welcome to Momentum DJs, where music meets unforgettable moments. We are a passionate team of professional DJs dedicated to providing exceptional entertainment for a wide range of events. Our journey began with a simple love for music and a desire to share that passion with others, transforming ordinary gatherings into extraordinary celebrations.
        </p>
        <p>
          With years of experience in the industry, we have honed our skills in reading crowds, mixing genres seamlessly, and creating the perfect ambiance for any occasion. Whether it's a wedding, a corporate event, a birthday party, or any other special celebration, we work closely with our clients to understand their vision and tailor our services to meet their unique needs.
        </p>
        <p>
          Our commitment goes beyond just playing music. We believe in creating experiences. From the initial consultation to the last dance, we are dedicated to providing a professional, reliable, and engaging service. Our state-of-the-art equipment ensures crystal-clear sound, and our extensive music library spans across decades and genres, guaranteeing something for everyone.
        </p>
        <p>
          At Momentum DJs, we are more than just DJs; we are event partners. We are driven by the energy of the crowd and the joy of seeing people connect through music. Let us bring the momentum to your next event!
        </p>
      </div>
    </div>
  );
}
