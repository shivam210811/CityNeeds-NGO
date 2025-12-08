// src/components/Layout/Navbar.jsx - Complete Enhanced Version
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Circle } from 'lucide-react';
import Logo from "../../assets/logo_dark.png";

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

  // Check if a dropdown should be highlighted based on active subpage
  const isDropdownActive = (item) => {
    return item.submenu?.some(subItem => location.pathname === subItem.path);
  };

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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-64 h-12 overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <img 
                src={Logo} 
                alt="CityNeeds Help Locally Logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.path ? (
                  <div className="relative">
                    <Link
                      to={item.path}
                      className={`text-base font-medium transition-all duration-300 relative px-2 py-1 ${
                        location.pathname === item.path
                          ? 'text-blue-600 font-semibold'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.label}
                      
                      {/* Active Indicator - Animated Border */}
                      {location.pathname === item.path && (
                        <>
                          {/* Bottom border */}
                          <span className="absolute -bottom-1 left-2 right-2 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"></span>
                          {/* Animated pulse effect */}
                          <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-ping-slow"></span>
                        </>
                      )}
                      
                      {/* Hover Indicator */}
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </div>
                ) : (
                  <div className="relative">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className={`text-base font-medium transition-all duration-300 flex items-center gap-1 px-2 py-1 relative ${
                        isDropdownActive(item)
                          ? 'text-blue-600 font-semibold'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.label}
                      
                      {/* Active indicator for dropdown */}
                      {isDropdownActive(item) && (
                        <>
                          <Circle className="w-1.5 h-1.5 text-blue-600 absolute -top-0.5 -right-0.5" fill="currentColor" />
                          <span className="absolute -bottom-1 left-2 right-2 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                        </>
                      )}
                      
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                      
                      {/* Hover indicator */}
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-full transition-all duration-300"></span>
                    </button>
                    
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-48 bg-white rounded-xl shadow-2xl py-3 border border-gray-100 z-50 before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-4 before:h-4 before:bg-white before:rotate-45 before:border-t before:border-l before:border-gray-100">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block px-6 py-3 text-sm transition-all duration-300 relative group ${
                              location.pathname === subItem.path
                                ? 'text-blue-600 font-medium'
                                : 'text-gray-700 hover:text-blue-600'
                            }`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.label}
                            
                            {/* Active indicator for submenu items */}
                            {location.pathname === subItem.path && (
                              <>
                                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-r-full"></span>
                                <Circle className="w-1.5 h-1.5 text-blue-600 absolute right-3 top-1/2 transform -translate-y-1/2" fill="currentColor" />
                              </>
                            )}
                            
                            {/* Hover indicator */}
                            <span className="absolute left-0 top-0 bottom-0 w-0 bg-gradient-to-b from-blue-600 to-purple-600 rounded-r-full group-hover:w-1 transition-all duration-300"></span>
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
              className="ml-4 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-base font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 transform shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Register Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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
            isOpen ? 'max-h-[600px] opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`block py-4 px-6 rounded-xl transition-all duration-300 text-lg relative overflow-hidden group ${
                      location.pathname === item.path
                        ? 'text-white font-semibold shadow-lg'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {location.pathname === item.path ? (
                      <>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                        <div className="relative flex items-center justify-between">
                          {item.label}
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></div>
                            <ChevronDown className="w-5 h-5 transform rotate-90 text-white" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-between">
                        {item.label}
                        <ChevronDown className="w-5 h-5 transform -rotate-90 text-gray-400" />
                      </div>
                    )}
                  </Link>
                ) : (
                  <div className="py-4 px-6">
                    <div className={`text-lg font-medium mb-3 flex items-center justify-between ${
                      isDropdownActive(item) ? 'text-blue-600' : 'text-gray-700'
                    }`}>
                      {item.label}
                      {isDropdownActive(item) && (
                        <Circle className="w-2 h-2 text-blue-600" fill="currentColor" />
                      )}
                    </div>
                    <div className="pl-6 space-y-3 border-l-2 border-gray-100">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`block py-2 transition-all duration-300 relative pl-4 ${
                            location.pathname === subItem.path
                              ? 'text-blue-600 font-semibold'
                              : 'text-gray-600 hover:text-blue-600'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                          {location.pathname === subItem.path && (
                            <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-r-full"></span>
                          )}
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
                className="block py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10">Register Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;