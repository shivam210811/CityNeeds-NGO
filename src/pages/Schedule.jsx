// src/pages/Schedule.jsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, MapPin, ChevronRight, Award, MessageSquare, Handshake, Music, Users as UsersIcon, Mic, Globe, Coffee, Trophy, Star, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0);
  const scheduleRef = useRef(null);
  const delegatesRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // GSAP Animations
    const ctx = gsap.context(() => {
      gsap.from('.schedule-item', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.schedule-container',
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });

      gsap.from('.delegate-card', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '.delegates-section',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      gsap.from('.timeline-line', {
        scaleY: 0,
        transformOrigin: 'top center',
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const scheduleData = {
    day1: [
      {
        time: '09:30 AM - 11:00 AM',
        session: 'Inaugural Ceremony',
        description: 'Dignitaries\' addresses, ribbon cutting, and keynote session',
        icon: Mic,
        color: 'bg-gradient-to-r from-blue-600 to-indigo-600',
        speakers: ['Chief Guest', 'Deputy Commissioner', 'CityNeeds Founder'],
        venue: 'Main Stage',
        type: 'ceremony'
      },
      {
        time: '11:00 AM - 01:00 PM',
        session: 'Exhibition Walkthrough',
        description: 'Stalls open for public and media',
        icon: Globe,
        color: 'bg-gradient-to-r from-green-500 to-emerald-600',
        speakers: ['All Exhibitors', 'Media Representatives'],
        venue: 'Exhibition Hall',
        type: 'exhibition'
      },
      {
        time: '01:30 PM - 03:00 PM',
        session: 'Panel Discussion I',
        description: 'CSR & Community Empowerment',
        icon: MessageSquare,
        color: 'bg-gradient-to-r from-purple-500 to-purple-600',
        speakers: ['CSR Heads', 'NGO Leaders', 'Community Experts'],
        venue: 'Conference Hall A',
        type: 'panel'
      },
      {
        time: '03:30 PM - 05:00 PM',
        session: 'Youth Engagement',
        description: 'College student interactions and volunteer sign-ups',
        icon: Users,
        color: 'bg-gradient-to-r from-amber-500 to-amber-600',
        speakers: ['Student Leaders', 'Volunteer Coordinators'],
        venue: 'Youth Zone',
        type: 'engagement'
      }
    ],
    day2: [
      {
        time: '10:00 AM - 11:30 AM',
        session: 'Panel Discussion II',
        description: 'Technology for Social Impact',
        icon: MessageSquare,
        color: 'bg-gradient-to-r from-indigo-500 to-purple-600',
        speakers: ['Tech Entrepreneurs', 'Digital Innovators', 'Social Impact Leaders'],
        venue: 'Conference Hall A',
        type: 'panel'
      },
      {
        time: '12:00 PM - 02:00 PM',
        session: 'Networking Meet',
        description: 'NGO–Corporate–Institution partnerships',
        icon: Handshake,
        color: 'bg-gradient-to-r from-teal-500 to-teal-600',
        speakers: ['All Participants', 'Partnership Managers'],
        venue: 'Networking Lounge',
        type: 'networking'
      },
      {
        time: '02:30 PM - 04:00 PM',
        session: 'Recognition Ceremony',
        description: 'Certificates and awards for participants',
        icon: Trophy,
        color: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
        speakers: ['Award Recipients', 'Jury Members'],
        venue: 'Main Stage',
        type: 'ceremony'
      },
      {
        time: '04:30 PM - 06:00 PM',
        session: 'Cultural Segment',
        description: 'Performances by youth and volunteers',
        icon: Music,
        color: 'bg-gradient-to-r from-pink-500 to-rose-600',
        speakers: ['Cultural Teams', 'Volunteer Groups'],
        venue: 'Cultural Stage',
        type: 'cultural'
      }
    ]
  };

  const delegateTypes = [
    {
      category: 'Volunteers & Students',
      count: '4000+',
      icon: Users,
      color: 'bg-gradient-to-r from-blue-600 to-indigo-600',
      description: 'Youth volunteers and student delegates from across Punjab'
    },
    {
      category: 'CSR Heads & Corporate Leaders',
      count: '500+',
      icon: Handshake,
      color: 'bg-gradient-to-r from-green-500 to-emerald-600',
      description: 'Corporate representatives and CSR decision makers'
    },
    {
      category: 'NGO Founders & Social Entrepreneurs',
      count: '1000+',
      icon: UsersIcon,
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      description: 'Social sector leaders and change makers'
    },
    {
      category: 'Donors & HNIs',
      count: '200+',
      icon: Award,
      color: 'bg-gradient-to-r from-amber-500 to-amber-600',
      description: 'Philanthropists and high net-worth individuals'
    },
    {
      category: 'Media & Influencers',
      count: '100+',
      icon: Mic,
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      description: 'Journalists, media houses, and social influencers'
    },
    {
      category: 'Government Officials',
      count: '200+',
      icon: Globe,
      color: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      description: 'Officials from various government departments'
    }
  ];

  const renderScheduleDay = (day) => {
    const data = day === 0 ? scheduleData.day1 : scheduleData.day2;
    
    return (
      <div className="timeline-container relative">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-indigo-600 timeline-line hidden md:block"></div>
        
        {data.map((item, index) => (
          <div key={index} className="schedule-item relative mb-8 md:mb-12 last:mb-0">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-start gap-4 md:w-1/3">
                <div className="flex flex-col items-center">
                  <div className={`${item.color} w-8 h-8 rounded-full flex items-center justify-center z-10`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  {index < data.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 mt-2 md:hidden"></div>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{item.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{item.venue}</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.session}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Users className="w-4 h-4" />
                      <span className="font-medium">Featured Speakers:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.speakers.map((speaker, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm">
                          {speaker}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="mt-6 flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 group">
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'ceremony': return 'bg-blue-100 text-blue-800';
      case 'panel': return 'bg-purple-100 text-purple-800';
      case 'exhibition': return 'bg-green-100 text-green-800';
      case 'networking': return 'bg-teal-100 text-teal-800';
      case 'engagement': return 'bg-amber-100 text-amber-800';
      case 'cultural': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type) => {
    switch(type) {
      case 'ceremony': return 'Ceremony';
      case 'panel': return 'Panel Discussion';
      case 'exhibition': return 'Exhibition';
      case 'networking': return 'Networking';
      case 'engagement': return 'Youth Engagement';
      case 'cultural': return 'Cultural Event';
      default: return 'Session';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-white">
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
                  <span>CityNeeds HELP LOCALLY Event Schedule (Tentative)</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Punjab NGO Expo 2026 <span className="block text-3xl md:text-4xl mt-4">Event Schedule</span>
              </h1>
              
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Plan your experience with our detailed event schedule. Connect with the right sessions and speakers.
              </p>
            </div>
            
            {/* Event Details */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center min-w-[200px]">
                <div className="text-white text-sm mb-2">Dates</div>
                <div className="text-2xl font-bold text-white">31 Jan - 1 Feb</div>
                <div className="text-blue-100 text-sm">2026</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center min-w-[200px]">
                <div className="text-white text-sm mb-2">Venue</div>
                <div className="text-2xl font-bold text-white">PAU Ground</div>
                <div className="text-blue-100 text-sm">Ludhiana</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center min-w-[200px]">
                <div className="text-white text-sm mb-2">Total Sessions</div>
                <div className="text-2xl font-bold text-white">8</div>
                <div className="text-blue-100 text-sm">Over 2 Days</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center min-w-[200px]">
                <div className="text-white text-sm mb-2">Expected</div>
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-blue-100 text-sm">Delegates</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Navigation */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 py-4">
            {['Day 1: 31st Jan 2026', 'Day 2: 1st Feb 2026'].map((day, index) => (
              <button
                key={index}
                onClick={() => setActiveDay(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeDay === index
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule Content */}
      <div className="py-16 schedule-container" ref={scheduleRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Day Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className={`w-3 h-8 rounded-full ${
                  activeDay === 0 ? 'bg-blue-500' : 'bg-indigo-500'
                }`}></div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {activeDay === 0 ? 'Day 1: Inauguration & Engagement' : 'Day 2: Networking & Recognition'}
                </h2>
              </div>
              <p className="text-gray-600 text-lg">
                {activeDay === 0 
                  ? 'Kickstart the expo with inspiring sessions and youth engagement' 
                  : 'Connect with partners and celebrate achievements'}
              </p>
            </div>

            {/* Schedule Content */}
            <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 shadow-xl border border-blue-100">
              {renderScheduleDay(activeDay)}
            </div>

            {/* Schedule Notes */}
            <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Star className="w-6 h-6 text-amber-500" />
                Important Notes
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>All timings are in Indian Standard Time (IST)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Registration counter opens at 8:30 AM on both days</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Exhibition stalls remain open from 10:00 AM to 6:00 PM</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Lunch will be served from 1:00 PM to 2:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Expected Delegates Section */}
      <div className="py-20 bg-gradient-to-b from-white to-blue-50 delegates-section" ref={delegatesRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expected <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Delegates</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join 10,000+ changemakers, supporters, and enablers from across Punjab
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {delegateTypes.map((delegate, index) => (
              <div 
                key={index}
                className="delegate-card bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`${delegate.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <delegate.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{delegate.count}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{delegate.category}</h3>
                  <p className="text-gray-600">{delegate.description}</p>
                </div>
                
                <div className="h-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"
                    style={{ width: `${Math.random() * 40 + 60}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Delegates Counter */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-center text-white">
            <div className="text-5xl md:text-6xl font-bold mb-4">10,000+</div>
            <h3 className="text-2xl font-bold mb-2">Total Expected Delegates</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              A diverse gathering of volunteers, corporates, NGOs, government officials, and social entrepreneurs
              coming together to build stronger communities in Punjab
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 md:p-12 text-center border border-blue-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Don't Miss Out on Punjab's Premier Social Impact Gathering
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Link
                  to="/registration"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform flex items-center justify-center gap-3"
                >
                  <Calendar className="w-5 h-5" />
                  Register for Expo
                </Link>
                
                <Link
                  to="/stall-booking"
                  className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg border-3 border-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 transform flex items-center justify-center gap-3"
                >
                  <Coffee className="w-5 h-5" />
                  Book Your Stall
                </Link>
              </div>
              
              <div className="mt-6">
                <p className="text-gray-600 mb-2">Organized by</p>
                <div className="text-xl font-bold text-blue-700">CityNeeds</div>
                <div className="text-lg font-semibold text-indigo-600">HELP LOCALLY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;