// src/pages/Venue.jsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import bgImage from "../assets/bgImage2.PNG";
import venueImg1 from "../assets/bgImage3.PNG";
import venueImg2 from "../assets/bgImage1.PNG";
import venueImg3 from "../assets/bgImage2.PNG";
import venueImg4 from "../assets/bgImage3.PNG";
import venueImg5 from "../assets/bgImage1.PNG";
import {
  MapPin,
  Navigation,
  Globe,
  Phone,
  Mail,
  Clock,
  Users,
  CheckCircle,
  ChevronRight,
  Calendar,
  Shield,
  Video,
  Download,
  Printer,
  Share2,
  Compass,
  Maximize2,
  Wifi,
  Car,
  Coffee,
  Toilet,
  Building,
  Utensils,
  Stethoscope,
  Train,
  Plane,
  Bus,
  Hospital,
  Home,
  ArrowRight,
  ChevronLeft,
  ChevronRight as RightIcon,
  Map,
  Image,
  Car as CarIcon,
  Users as UsersIcon,
  Target,
  Zap,
  Battery,
  Tv,
  Mic,
  Camera,
  Volume2,
  Lightbulb
} from 'lucide-react';

const Venue = () => {
  const containerRef = useRef(null);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  
  const galleryImages = [
    { id: 1, src: venueImg1, title: "Grand Auditorium", description: "Spacious hall with 1200+ seating capacity" },
    { id: 2, src: venueImg2, title: "Exhibition Hall", description: "Perfect for NGO stalls and exhibitions" },
    { id: 3, src: venueImg3, title: "Networking Lounge", description: "Premium networking spaces" },
    { id: 4, src: venueImg4, title: "Food Court", description: "Multi-cuisine dining experience" },
    { id: 5, src: venueImg5, title: "Parking Area", description: "Secure parking for 1000+ vehicles" }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const venueDetails = {
    name: "Punjab Agricultural University (PAU) Ground",
    fullAddress: "PAU Ground, Fengzhou Road, Ludhiana, Punjab 141004",
    coordinates: { lat: 30.9010, lng: 75.8573 },
    googleMapsLink: "https://maps.google.com/?q=Punjab+Agricultural+University+Ludhiana",
    contact: { phone: "+91-8289066979", email: "info@cityneeds.info" },
    capacity: "10,000+ delegates",
    area: "50,000+ sq.ft.",
    parking: "1,000+ vehicles",
    wifi: "High-speed connectivity",
    openingHours: "8:00 AM - 10:00 PM"
  };

  const keyFeatures = [
    {
      id: 1,
      title: "Grand Auditorium",
      icon: Mic,
      color: "from-purple-500 to-pink-500",
      description: "State-of-the-art auditorium with premium acoustics and seating for 1,200+ delegates",
      specs: [
        { icon: Users, label: "Capacity", value: "1,200+" },
        { icon: Volume2, label: "Sound System", value: "Dolby Atmos" },
        { icon: Tv, label: "Display", value: "4K LED Wall" },
        { icon: Lightbulb, label: "Lighting", value: "LED Stage Lights" }
      ]
    },
    {
      id: 2,
      title: "Exhibition Hall",
      icon: Building,
      color: "from-blue-500 to-cyan-500",
      description: "Spacious 20,000 sq.ft. hall perfect for exhibitions and NGO stalls",
      specs: [
        { icon: Maximize2, label: "Area", value: "20,000 sq.ft." },
        { icon: Target, label: "Stalls", value: "200+" },
        { icon: Wifi, label: "Internet", value: "1 Gbps" },
        { icon: Battery, label: "Power", value: "24/7 Backup" }
      ]
    },
    {
      id: 3,
      title: "Meeting Rooms",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      description: "15+ private conference rooms for sessions and networking",
      specs: [
        { icon: Building, label: "Rooms", value: "15+" },
        { icon: Tv, label: "Equipment", value: "Full AV Setup" },
        { icon: Users, label: "Capacity", value: "50-100 each" },
        { icon: Coffee, label: "Service", value: "Catering Available" }
      ]
    },
    {
      id: 4,
      title: "Food Court",
      icon: Utensils,
      color: "from-orange-500 to-amber-500",
      description: "Multi-cuisine dining with 500+ seating capacity",
      specs: [
        { icon: Users, label: "Seating", value: "500+" },
        { icon: Coffee, label: "Outlets", value: "10+" },
        { icon: Shield, label: "Hygiene", value: "5-Star Rating" },
        { icon: Clock, label: "Timing", value: "24/7 Service" }
      ]
    }
  ];

  const venueSpecifications = [
    { icon: Wifi, label: "WiFi Speed", value: "1 Gbps", color: "text-blue-600" },
    { icon: Car, label: "Parking", value: "1,000+ slots", color: "text-green-600" },
    { icon: Toilet, label: "Restrooms", value: "50+ units", color: "text-purple-600" },
    { icon: Stethoscope, label: "Medical", value: "24/7 facility", color: "text-red-600" },
    { icon: Shield, label: "Security", value: "CCTV coverage", color: "text-gray-700" },
    { icon: Battery, label: "Power Backup", value: "100% uptime", color: "text-amber-600" },
    { icon: Coffee, label: "Food Courts", value: "10+ outlets", color: "text-orange-600" },
    { icon: Users, label: "Capacity", value: "10,000+", color: "text-indigo-600" }
  ];

  const transportation = [
    {
      type: "By Air",
      icon: Plane,
      details: "Sri Guru Ram Das Jee International Airport",
      distance: "10 km",
      time: "25 mins",
      fare: "₹500-700",
      color: "from-purple-500 to-pink-500",
      tips: ["Taxi available 24/7", "Pre-paid taxi counter"]
    },
    {
      type: "By Train",
      icon: Train,
      details: "Ludhiana Railway Station",
      distance: "8 km",
      time: "20 mins",
      fare: "₹300-500",
      color: "from-blue-500 to-indigo-500",
      tips: ["Auto rickshaws available", "App-based cabs"]
    },
    {
      type: "By Bus",
      icon: Bus,
      details: "Ludhiana Bus Stand",
      distance: "6 km",
      time: "15 mins",
      fare: "₹200-400",
      color: "from-green-500 to-emerald-500",
      tips: ["City buses every 10 mins", "Shared autos available"]
    },
    {
      type: "By Road",
      icon: CarIcon,
      details: "Via NH-95 & NH-44",
      distance: "City Center",
      time: "Varies",
      fare: "Parking available",
      color: "from-orange-500 to-red-500",
      tips: ["Ample parking space", "EV charging stations"]
    }
  ];

  const nextGalleryImage = () => {
    setActiveGalleryImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevGalleryImage = () => {
    setActiveGalleryImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleDownloadMap = () => {
    alert("Venue map downloaded successfully!");
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt="PAU Ground Venue"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                The Venue
                <span className="block text-3xl md:text-4xl lg:text-5xl text-blue-200 mt-4">
                  Punjab Agricultural University Ground
                </span>
              </h1>
              
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-white font-medium">{venueDetails.fullAddress}</span>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: UsersIcon, label: "Capacity", value: venueDetails.capacity, color: "from-blue-500 to-cyan-500" },
                { icon: Maximize2, label: "Area", value: venueDetails.area, color: "from-green-500 to-emerald-500" },
                { icon: CarIcon, label: "Parking", value: venueDetails.parking, color: "from-purple-500 to-pink-500" },
                { icon: Clock, label: "Timing", value: venueDetails.openingHours, color: "from-amber-500 to-orange-500" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white/80 text-sm">{stat.label}</div>
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Premium <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience world-class facilities designed for impactful events
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {keyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${
                      activeFeature === index
                        ? 'border-blue-500 shadow-xl scale-105'
                        : 'border-gray-100 hover:border-blue-200 hover:shadow-xl'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-5`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </button>
                );
              })}
            </div>

            {/* Feature Details */}
            {keyFeatures[activeFeature] && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="lg:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {keyFeatures[activeFeature].title} Details
                    </h3>
                    <p className="text-gray-700 mb-6 text-lg">
                      {keyFeatures[activeFeature].description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {keyFeatures[activeFeature].specs.map((spec, idx) => {
                        const Icon = spec.icon;
                        return (
                          <div key={idx} className="bg-white rounded-xl p-4 flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">{spec.label}</p>
                              <p className="font-bold text-gray-900 text-lg">{spec.value}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="lg:w-1/3">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-6 text-white">
                      <h4 className="text-lg font-bold mb-4">Why This Feature?</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                          <span>Enhances participant experience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                          <span>State-of-the-art technology</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                          <span>Professional event support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                          <span>Flexible configuration options</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery & Virtual Tour Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Visual <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Experience</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our venue through stunning visuals and interactive tours
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Gallery */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="relative h-80 md:h-96">
                  <img
                    src={galleryImages[activeGalleryImage].src}
                    alt={galleryImages[activeGalleryImage].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {galleryImages[activeGalleryImage].title}
                      </h3>
                      <p className="text-blue-100">
                        {galleryImages[activeGalleryImage].description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={prevGalleryImage}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={nextGalleryImage}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <RightIcon className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-gray-700">
                      Image {activeGalleryImage + 1} of {galleryImages.length}
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {galleryImages.map((image, index) => (
                      <button
                        key={image.id}
                        onClick={() => setActiveGalleryImage(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                          activeGalleryImage === index ? 'ring-2 ring-blue-500' : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Virtual Tour */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                      <Video className="w-4 h-4" />
                      <span className="text-sm font-medium">Interactive Experience</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4">360° Virtual Tour</h3>
                    <p className="text-blue-100 mb-6 text-lg">
                      Experience PAU Ground from anywhere in the world with our immersive virtual tour. Navigate through different halls, explore facilities, and get a feel of the venue before you arrive.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3">
                        <Compass className="w-5 h-5 text-blue-200" />
                        <span className="text-lg">Interactive navigation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Image className="w-5 h-5 text-blue-200" />
                        <span className="text-lg">High-resolution 360° views</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Map className="w-5 h-5 text-blue-200" />
                        <span className="text-lg">Detailed floor plans</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <button className="w-full bg-white text-blue-700 font-bold py-4 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 mb-4 text-lg">
                      <Compass className="w-5 h-5" />
                      Start Virtual Tour
                    </button>
                    <p className="text-blue-200 text-center text-sm">
                      Compatible with all devices. No installation required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Technical <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Specifications</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive infrastructure for seamless event execution
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {venueSpecifications.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <Icon className={`w-12 h-12 mb-4 ${spec.color}`} />
                      <div className="text-2xl font-bold text-gray-900 mb-1">{spec.value}</div>
                      <div className="text-gray-600">{spec.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How to <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Reach</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conveniently accessible from all major transportation hubs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {transportation.map((transport, index) => {
                const Icon = transport.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${transport.color} flex items-center justify-center mb-5`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{transport.type}</h3>
                    <p className="text-gray-600 text-sm mb-4">{transport.details}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Distance</span>
                        <span className="font-medium">{transport.distance}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Time</span>
                        <span className="font-medium">{transport.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Approx. Fare</span>
                        <span className="font-medium">{transport.fare}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="text-sm text-gray-500 mb-2">Tips:</div>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {transport.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <ChevronRight className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Google Maps Integration */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-bold mb-3">Need Directions?</h3>
                  <p className="text-blue-100 mb-4 text-lg">
                    Get real-time navigation to PAU Ground with Google Maps. Our venue is conveniently located in the heart of Ludhiana with easy access from all major routes.
                  </p>
                  <a
                    href={venueDetails.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
                  >
                    <Navigation className="w-5 h-5" />
                    Open in Google Maps
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleDownloadMap}
                    className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Map
                  </button>
                  <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-lg hover:bg-white/30 transition-colors">
                    <Printer className="w-4 h-4" />
                    Print Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Registration CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Visit Our Venue?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Experience Punjab's premier event space for the NGO Expo 2026. Book your stall or register as a delegate today!
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 items-center mb-12">
              <a
                href={`tel:${venueDetails.contact.phone}`}
                className="bg-white text-blue-700 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-3 group text-lg"
              >
                <Phone className="w-5 h-5" />
                {venueDetails.contact.phone}
              </a>
              
              <a
                href={`mailto:${venueDetails.contact.email}`}
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-3 group text-lg"
              >
                <Mail className="w-5 h-5" />
                {venueDetails.contact.email}
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
              <p className="text-white font-medium mb-2 text-lg">Organized by</p>
              <div className="text-2xl font-bold text-white">CityNeeds Help Locally</div>
              <p className="text-blue-200 mt-2">
                In association with District Administration Ludhiana
              </p>
              <p className="text-blue-100 text-sm mt-2">
                Punjab's leading local crowdfunding and volunteer engagement platform
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Venue;