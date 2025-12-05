// src/components/Layout/Footer.jsx
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Heart className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">NGO Expo</h3>
                <p className="text-sm text-gray-400">{currentYear}</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Connecting NGOs, donors, and changemakers to create sustainable social impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Venue', 'Program', 'Stall Booking'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  New Delhi Convention Center<br />
                  Pragati Maidan, New Delhi
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+911234567890" className="text-gray-400 hover:text-white">
                  +91 12345 67890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:info@ngoexpo.com" className="text-gray-400 hover:text-white">
                  info@ngoexpo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {currentYear} NGO Expo. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Made with <Heart className="w-4 h-4 inline text-red-500 animate-pulse" /> for social impact
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;