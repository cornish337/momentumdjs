// pages/contact.js
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import ContactForm from '../components/sections/ContactForm'; // Moved import here

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Get In Touch</h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-xl mx-auto">
        We'd love to hear from you! Whether you have a question about our services, need a quote for your event, or just want to say hello, please feel free to reach out.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Information Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h2>
          
          <div className="flex items-start space-x-3">
            <EnvelopeIcon className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-gray-700">Email</h3>
              <p className="text-gray-600">
                For general inquiries: <a href="mailto:info@momentumdjs.co.uk" className="text-indigo-500 hover:underline">info@momentumdjs.co.uk</a>
              </p>
              <p className="text-gray-600">
                For bookings: <a href="mailto:bookings@momentumdjs.co.uk" className="text-indigo-500 hover:underline">bookings@momentumdjs.co.uk</a>
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <PhoneIcon className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-gray-700">Phone</h3>
              <p className="text-gray-600">(+44) 0123 456 7890</p>
              <p className="text-gray-500 text-sm">(Mon-Fri, 9am - 6pm)</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <MapPinIcon className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-gray-700">Office (By Appointment)</h3>
              <p className="text-gray-600">123 Music Lane<br />London, UK, SW1A 1AA</p>
            </div>
          </div>
          
          <p className="text-gray-600 pt-4">
            We aim to respond to all inquiries within 24-48 business hours.
          </p>
        </div>

        {/* Contact Form Section */}
        <ContactForm />
      </div>
    </div>
  );
}
