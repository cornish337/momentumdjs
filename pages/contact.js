// pages/contact.js
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import ContactForm from '../components/sections/ContactForm';

export async function getStaticProps() {
  return {
    props: {
      title: "Contact Us - Momentum DJs",
      description: "Get in touch with Momentum DJs for bookings, inquiries, or custom quotes. Call or email us today!",
    },
  };
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16"> {/* Updated padding */}
      {/* H1 inherits: font-serif, text-5xl, font-bold, text-brand-secondary, mb-6. Added text-center */}
      <h1 className="text-center">Get In Touch</h1>
      {/* P inherits: font-sans, text-gray-800, leading-relaxed, mb-4. Added text-center, max-w-2xl, mb-12 */}
      <p className="text-center max-w-2xl mx-auto mb-12">
        We'd love to hear from you! Whether you have a question about our services, need a quote for your event, or just want to say hello, please feel free to reach out.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Information Section */}
        <div className="space-y-6">
          {/* H2 inherits: font-serif, text-4xl, font-bold, text-brand-secondary, mb-5. Overriding mb-6 */}
          <h2 className="mb-6">Contact Information</h2>
          
          <div className="flex items-start space-x-3">
            <EnvelopeIcon className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" /> {/* Icon color updated */}
            <div>
              {/* H3 inherits: font-serif, text-3xl, font-bold, text-gray-700, mb-4. Overriding size to text-xl, mb-1 */}
              <h3 className="text-xl font-semibold mb-1">Email</h3>
              {/* P inherits font-sans, text-gray-800. Overriding to text-gray-700. Links inherit brand colors. */}
              <p className="text-gray-700">
                For general inquiries: <a href="mailto:info@momentumdjs.co.uk" className="hover:underline">info@momentumdjs.co.uk</a>
              </p>
              <p className="text-gray-700">
                For bookings: <a href="mailto:bookings@momentumdjs.co.uk" className="hover:underline">bookings@momentumdjs.co.uk</a>
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <PhoneIcon className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" /> {/* Icon color updated */}
            <div>
              <h3 className="text-xl font-semibold mb-1">Phone</h3>
              <p className="text-gray-700">(+44) 0123 456 7890</p>
              <p className="text-gray-600 text-sm">(Mon-Fri, 9am - 6pm)</p> {/* Slightly lighter for secondary info */}
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <MapPinIcon className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" /> {/* Icon color updated */}
            <div>
              <h3 className="text-xl font-semibold mb-1">Office (By Appointment)</h3>
              <p className="text-gray-700">123 Music Lane<br />London, UK, SW1A 1AA</p>
            </div>
          </div>
          
          <p className="text-gray-600 pt-4"> {/* Kept slightly lighter */}
            We aim to respond to all inquiries within 24-48 business hours.
          </p>
        </div>

        {/* Contact Form Section - styling handled in ContactForm.js */}
        <ContactForm />
      </div>
    </div>
  );
}
