// src/components/Layout/Footer.jsx
import { Link } from 'react-router-dom';
import logo from "../../assets/logo_dark.png"
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white">
        <div className="container px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

            {/* Brand */}
            <div>
              <div className="flex items-center">
                <img src={logo} alt="CityNeeds Logo" className="w-60 h-40 object-contain" />
               
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
                    SCO-21, Feroze Gandhi Market Rd,<br />
                    Feroz Gandhi Market, Jila Kacheri Area,<br />
                    Model Gram, Ludhiana, Punjab 141001
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href="tel:+918289066979" className="text-gray-400 hover:text-white">
                    8289066979
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href="mailto:Info@Cityneeds.Info" className="text-gray-400 hover:text-white">
                    Info@Cityneeds.Info
                  </a>
                </div>

                {/* WhatsApp Chatbot */}
                <a
                  href="https://wa.me/1615063805"
                  target="_blank"
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-6 h-6"
                  />
                  : 161 506 3805
                </a>

              </div>
            </div>

            {/* Google Map */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Location</h4>
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.492834944686!2d75.82994887427374!3d30.90084577749086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83b8311fac27%3A0xbe5611e8c94c3fd7!2sCity%20Needs!5e0!3m2!1sen!2sin!4v1764929500596!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="City Needs Location"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">© {currentYear} CityNeeds Help Locally. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">
              Made with <Heart className="w-4 h-4 inline text-red-500 animate-pulse" /> for social impact
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/1615063805"
        className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full shadow-xl hover:bg-green-600 transition z-50"
        target="_blank"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          className="w-8 h-8"
          alt="WhatsApp"
        />
      </a>
    </>
  );
};

export default Footer;
