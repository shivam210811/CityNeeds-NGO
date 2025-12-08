// src/pages/About.jsx
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Handshake, 
  Award, 
  Globe, 
  Mail, 
  Phone, 
  Building, 
  GraduationCap, 
  Landmark, 
  HeartHandshake, 
  ChevronRight, 
  Sparkles,
  Users as UsersIcon,
  Network,
  MessageSquare,
  Music,
  Users2,
  Briefcase,
  School,
  Building2,
  Wifi,
  Mic,
  Trophy,
  ChevronLeft,
  ChevronRight as ChevronRightIcon
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import local images
import bgImage1 from '../assets/bgImage1.PNG'; // Example: Event venue
import bgImage2 from '../assets/bgImage2.PNG'; // Example: Networking
import bgImage3 from '../assets/bgImage3.PNG'; // Example: Exhibition
import bgImage4 from '../assets/bgImage2.PNG'; // Example: Cultural event
import bgImage5 from '../assets/bgImage1.PNG'; // Example: Volunteers

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel images array
  const carouselImages = [
    { src: bgImage1, title: "Event Venue", description: "PAU Ground, Ludhiana - The heart of Punjab NGO Expo 2026" },
    { src: bgImage2, title: "Networking Sessions", description: "Connect with changemakers from across Punjab" },
    { src: bgImage3, title: "Exhibition Stalls", description: "Showcase your initiatives to 10,000+ delegates" },
    { src: bgImage4, title: "Cultural Performances", description: "Celebrating Punjab's rich cultural heritage" },
    { src: bgImage5, title: "Volunteer Engagement", description: "Youth participation in community service" }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Cards animation
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      // Carousel animation
      gsap.from('.carousel-container', {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.carousel-container',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      // Carousel slide animation
      const slides = carouselRef.current?.querySelectorAll('.carousel-slide');
      slides?.forEach((slide, index) => {
        gsap.from(slide, {
          x: index % 2 === 0 ? 100 : -100,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        });
      });

      // Floating animation
      gsap.to('.floating-card', {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3
      });
    });

    // Auto slide carousel
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const participationTypes = [
    {
      color: 'bg-gradient-to-r from-blue-600 to-indigo-600',
      title: 'NGOs',
      subtitle: 'Showcase. Connect. Grow.',
      icon: HeartHandshake,
      points: [
        'Exhibit your projects and impact stories',
        'Meet potential donors, CSR partners, and volunteers',
        'Network with government officials and peer NGOs',
        'Gain visibility through media and press coverage'
      ],
      takeaway: 'Visibility, Funding Connections, Volunteer Enrolment'
    },
    {
      color: 'bg-gradient-to-r from-green-500 to-emerald-600',
      title: 'Corporates',
      subtitle: 'Collaborate for Impact.',
      icon: Building,
      points: [
        'Explore credible NGOs for CSR partnerships',
        'Display your sustainability and CSR initiatives',
        'Engage employees as volunteers',
        'Identify local social development projects'
      ],
      takeaway: 'CSR Partnerships, Brand Visibility, Impact Opportunities'
    },
    {
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      title: 'Educational Institutions',
      subtitle: 'Engage Students in Real Change.',
      icon: GraduationCap,
      points: [
        'Display your green, social, and innovation projects',
        'Encourage student volunteering and internships with NGOs',
        'Participate in social innovation discussions'
      ],
      takeaway: 'Student Engagement, Visibility, Institutional Networking'
    },
    {
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      title: 'Government & Public Welfare Departments',
      subtitle: 'Inform. Inspire. Collaborate.',
      icon: Landmark,
      points: [
        'Showcase flagship schemes and welfare initiatives',
        'Engage citizens and NGOs in program implementation',
        'Build partnerships for ground-level execution'
      ],
      takeaway: 'Public Awareness, NGO Collaboration, Program Outreach'
    }
  ];

  const highlights = [
    { icon: Users2, title: '60+ NGO Exhibition Stalls', color: 'bg-gradient-to-r from-blue-600 to-indigo-600' },
    { icon: Briefcase, title: '20+ Corporate CSR Stalls', color: 'bg-gradient-to-r from-green-500 to-emerald-600' },
    { icon: School, title: '20+ Educational Institution Booths', color: 'bg-gradient-to-r from-purple-500 to-purple-600' },
    { icon: Building2, title: '10 Government Department Displays', color: 'bg-gradient-to-r from-red-500 to-red-600' },
    { icon: Network, title: 'Networking Lounges & Interaction Zones', color: 'bg-gradient-to-r from-indigo-500 to-purple-600' },
    { icon: MessageSquare, title: 'Keynote Sessions & Panel Discussions', color: 'bg-gradient-to-r from-blue-500 to-cyan-600' },
    { icon: Trophy, title: 'Recognition Ceremony', color: 'bg-gradient-to-r from-amber-500 to-yellow-600' },
    { icon: Music, title: 'Cultural Performances', color: 'bg-gradient-to-r from-pink-500 to-rose-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 pt-24 pb-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              {/* CityNeeds Brand */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>CityNeeds HELP LOCALLY in association with District Administration Ludhiana</span>
                </div>
              </div>
              
              <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold text-white mb-6">
                Punjab NGO Expo 2026
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-bold">
                "Help Locally – Building Stronger Communities Together"
              </p>
            </div>
            
            {/* Event Details */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center min-w-[200px]">
                <div className="text-white text-sm mb-2">Dates</div>
                <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white">
                  <Calendar className="w-6 h-6" />
                  31 Jan - 1 Feb 2026
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center min-w-[200px]">
                <div className="text-white text-sm mb-2">Venue</div>
                <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white">
                  <MapPin className="w-6 h-6" />
                  PAU Ground, Ludhiana
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center min-w-[200px]">
                <div className="text-white text-sm mb-2">Expected</div>
                <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white">
                  <Users className="w-6 h-6" />
                  10,000+ Delegates
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Carousel Section */}
      <div className="carousel-container py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Glimpse of Previous NGO Expo
            </span>
          </h2>
          
          <div ref={carouselRef} className="relative overflow-hidden rounded-3xl shadow-2xl">
            {/* Carousel Slides */}
            <div className="relative h-[500px] md:h-[600px]">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-slide absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="relative h-full">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="max-w-2xl">
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {image.title}
                          </h3>
                          <p className="text-lg md:text-xl text-blue-100">
                            {image.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
              aria-label="Next slide"
            >
              <ChevronRightIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white font-medium">
              {currentSlide + 1} / {carouselImages.length}
            </div>
          </div>

          {/* Carousel Thumbnails */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {carouselImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden rounded-xl transition-all duration-300 transform ${
                  index === currentSlide 
                    ? 'ring-4 ring-blue-500 ring-offset-2 scale-105' 
                    : 'hover:scale-105 hover:shadow-lg'
                }`}
              >
                <img
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-24 md:h-32 object-cover"
                />
                <div className={`absolute inset-0 ${
                  index === currentSlide ? 'bg-blue-500/20' : 'bg-black/20'
                } transition-colors duration-300`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  {index === currentSlide && (
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <ChevronRightIcon className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div ref={sectionRef} className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-3 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                About the Event
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  The <span className="font-bold text-blue-700">Punjab NGO Expo 2026</span> is a first-of-its-kind State Level Exhibition and Networking Platform that brings together Punjab's NGOs, Corporates, Educational Institutions, and Government Departments working for public welfare.
                </p>
                
                <p className="text-lg text-gray-700">
                  The Expo will showcase innovative community initiatives, foster partnerships, and inspire citizen participation under the spirit of "Help Locally." With <span className="font-bold">10,000+ delegates</span> including volunteers, donors, media, corporates, and students expected to attend, the event will serve as a landmark collaboration to strengthen the social ecosystem of Punjab.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Globe className="w-6 h-6 text-blue-600" />
                    Organized By
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h4 className="font-bold text-blue-700 mb-2">CityNeeds</h4>
                      <p className="text-gray-600">Punjab's leading local crowdfunding and volunteer engagement platform</p>
                      <a href="https://www.cityneeds.info" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 mt-2 inline-block font-medium">
                        www.cityneeds.info <span className="text-sm">↗</span>
                      </a>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h4 className="font-bold text-blue-700 mb-2">In Collaboration With</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-blue-500" />
                          <span>District Administration, Ludhiana</span>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Key <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Highlights</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((item, index) => (
                  <div 
                    key={index}
                    ref={el => cardsRef.current[index] = el}
                    className="floating-card bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className={`${item.color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Participation Types */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Inviting Participation From
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {participationTypes.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`${item.color} rounded-2xl p-4 shadow-md`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                        <p className="text-gray-600 font-medium">{item.subtitle}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-5 border-t border-gray-200">
                      <p className="font-bold text-gray-800">Takeaway:</p>
                      <p className="text-lg font-semibold text-blue-700">{item.takeaway}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-white text-center shadow-2xl">
              <h2 className="text-3xl font-bold mb-6">Ready to Participate?</h2>
              
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join Punjab's premier social impact gathering. Be part of the movement to build stronger communities together.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-6 items-center mb-8">
                <a 
                  href="mailto:info@cityneeds.info" 
                  className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  info@cityneeds.info
                </a>
                
                <a 
                  href="tel:+918289066979" 
                  className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  +91-8289066979
                </a>
              </div>
              
              <div className="mt-8">
                <p className="font-semibold">Issued by: Deputy Commissioner, Ludhiana</p>
                <p className="text-blue-200 text-sm">On behalf of District Administration Ludhiana</p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-blue-300/30">
                <div className="text-xl font-bold mb-1">CityNeeds</div>
                <div className="text-lg font-semibold text-blue-200">HELP LOCALLY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;