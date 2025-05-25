import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Star, Music, Users, Calendar, Award } from 'lucide-react';

const MomentumDJsSite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Wedding DJ Services",
      description: "Make your special day unforgettable with our professional wedding DJ services. We provide music for ceremonies, receptions, and everything in between.",
      icon: <Music className="w-8 h-8" />
    },
    {
      title: "Corporate Events",
      description: "Professional DJ services for corporate events, conferences, product launches, and business celebrations.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Private Parties",
      description: "From birthday parties to anniversaries, we bring the perfect soundtrack to your private celebrations.",
      icon: <Calendar className="w-8 h-8" />
    },
    {
      title: "Club Nights",
      description: "High-energy DJ sets for clubs and nightlife venues with the latest hits and crowd favorites.",
      icon: <Award className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah & Mike",
      event: "Wedding Reception",
      text: "Momentum DJs made our wedding absolutely perfect! The music selection was spot on and kept everyone dancing all night long.",
      rating: 5
    },
    {
      name: "Corporate Client",
      event: "Annual Conference",
      text: "Professional, reliable, and great music. They understood exactly what we needed for our corporate event.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      event: "30th Birthday Party",
      text: "Amazing service! They played all the right songs and really knew how to read the crowd. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Momentum DJs</h1>
                <p className="text-sm text-gray-600">Professional DJ Services</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 pt-4">
                <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
                <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
                <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
                <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">Testimonials</a>
                <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Keep The <span className="text-yellow-400">Momentum</span> Going
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional DJ services for weddings, corporate events, private parties, and club nights. 
            We bring the energy and keep the dance floor packed all night long.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
              Book Your Event
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-800 transition-colors">
              View Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-purple-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">About Momentum DJs</h2>
              <p className="text-lg text-gray-600 mb-6">
                With years of experience in the music industry, Momentum DJs has been bringing exceptional 
                entertainment to events across the UK. Our professional DJs understand how to read a crowd 
                and create the perfect atmosphere for any occasion.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We pride ourselves on our extensive music library, state-of-the-art equipment, and 
                personalized service. Whether you're planning an intimate gathering or a large celebration, 
                we have the expertise to make your event unforgettable.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">500+</div>
                  <div className="text-gray-600">Events Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Award className="w-5 h-5 mr-3" />
                  Professional and reliable service
                </li>
                <li className="flex items-center">
                  <Music className="w-5 h-5 mr-3" />
                  Extensive music library across all genres
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 mr-3" />
                  Experienced in reading crowds
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 mr-3" />
                  Punctual and well-prepared
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Ready to Book Your Event?</h3>
              <p className="text-lg mb-8">
                Contact us today to discuss your event requirements and get a personalized quote. 
                We're here to make your celebration unforgettable!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4" />
                  <span>Call us for immediate assistance</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4" />
                  <span>Email us your event details</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4" />
                  <span>Serving the UK nationwide</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Event Type</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="private">Private Party</option>
                    <option value="club">Club Night</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Tell us about your event..."
                  ></textarea>
                </div>
                <button className="w-full bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-full">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Momentum DJs</span>
              </div>
              <p className="text-gray-300">
                Professional DJ services bringing energy and excitement to events across the UK.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Wedding DJ Services</li>
                <li>Corporate Events</li>
                <li>Private Parties</li>
                <li>Club Nights</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>Serving the UK nationwide</p>
                <p>Available 7 days a week</p>
                <p>Professional and reliable service</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Momentum DJs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MomentumDJsSite;