// src/components/Layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { 
      label: 'Event', 
      submenu: [
        { path: '/venue', label: 'Venue' },
        { path: '/program', label: 'Program' },
      ]
    },
    { path: '/stall-booking', label: 'Stall Booking' },
    { path: '/sponsorship', label: 'Sponsorship' },
    { 
      label: 'More', 
      submenu: [
        { path: '/resources', label: 'Resources' },
        { path: '/faq', label: 'FAQ' },
        { path: '/contact', label: 'Contact' },
      ]
    },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 shadow-xl backdrop-blur-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900 leading-none">NGO Expo</div>
              <div className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {currentYear}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`text-base font-medium transition-all duration-300 hover:text-blue-600 ${
                      location.pathname === item.path
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="relative">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center gap-1"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-3 w-48 bg-white rounded-xl shadow-2xl py-3 border border-gray-100 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            
            <Link
              to="/registration"
              className="ml-4 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-base font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 transform shadow-lg"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-300 overflow-hidden rounded-b-2xl ${
            isOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`block py-4 px-6 rounded-xl transition-colors duration-300 text-lg ${
                      location.pathname === item.path
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="py-4 px-6">
                    <div className="text-lg font-medium text-gray-700 mb-3">{item.label}</div>
                    <div className="pl-4 space-y-3 border-l-2 border-gray-100">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-6 mt-4 border-t border-gray-100">
              <Link
                to="/registration"
                className="block py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
