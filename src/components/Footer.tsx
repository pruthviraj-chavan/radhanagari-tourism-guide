
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">About Radhanagari</h3>
            <p className="text-gray-200 mb-4">
              Discover Maharashtra's first wildlife sanctuary, home to diverse flora, fauna, and breathtaking natural beauty.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-gray-200 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-200 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-200 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-200 hover:text-white">Home</Link></li>
              <li><Link to="/radhanagari-hotels-homestays" className="text-gray-200 hover:text-white">Hotels & Homestays</Link></li>
              <li><Link to="/radhanagari-food-guide" className="text-gray-200 hover:text-white">Food Guide</Link></li>
              <li><Link to="/radhanagari-wildlife-safari" className="text-gray-200 hover:text-white">Wildlife & Safari</Link></li>
              <li><Link to="/blog" className="text-gray-200 hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-200 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-earth" />
                <span className="text-gray-200">
                  Forest Department Office, Radhanagari Wildlife Sanctuary, Kolhapur, Maharashtra
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-earth" />
                <span className="text-gray-200">+91 9988776655</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-earth" />
                <span className="text-gray-200">info@radhanagari-tourism.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-200 mb-4">Subscribe to our newsletter for latest updates and travel tips.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-earth"
              />
              <button className="w-full bg-earth text-forest font-medium py-2 px-4 rounded hover:bg-earth-dark transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-forest-light mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Radhanagari Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
