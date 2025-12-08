// src/pages/Program.jsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  Users,
  Mic,
  Award,
  MessageSquare,
  Network,
  Music,
  GraduationCap,
  Building,
  Handshake,
  Sparkles,
  ChevronRight,
  CheckCircle,
  BookOpen,
  Coffee,
  Utensils,
  Camera,
  Globe,
  Download,
  Printer,
  Share2,
  Bell,
  Star,
  MapPin,
  ExternalLink,
  Search,
  Heart,
  User,
  Users as UsersIcon,
  Zap,
  Bookmark,
  BookmarkCheck,
  Target,
  TrendingUp,
  Trophy,
  Lightbulb,
  HeartHandshake,
  School,
  Briefcase,
  Landmark,
  Mail,
  Phone,
  ArrowRight,
  ChevronLeft,
  ChevronRight as RightIcon
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Program = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const [activeTab, setActiveTab] = useState('schedule');
  const [expandedDay, setExpandedDay] = useState(0);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });

      // Floating elements
      gsap.to('.float-element', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3
      });

      // Tab content animation
      gsap.from('.tab-content', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Highlights animation
      gsap.from('.highlight-card', {
        scale: 0.8,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: '.highlights-section',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const eventSchedule = [
    {
      day: "Day 1",
      date: "31st January 2026",
      theme: "Inauguration & Community Empowerment",
      sessions: [
        {
          time: "10:00 AM",
          title: "Inaugural Ceremony",
          description: "Dignitaries' addresses, ribbon cutting, and keynote session",
          type: "ceremony",
          icon: Sparkles,
          duration: "1.5 hours",
          venue: "Main Auditorium",
          speakers: ["Chief Guest", "District Officials", "Dignitaries"]
        },
        {
          time: "11:30 AM",
          title: "Exhibition Walkthrough",
          description: "Stalls open for public and media",
          type: "exhibition",
          icon: Camera,
          duration: "1.5 hours",
          venue: "Exhibition Halls",
          speakers: ["All Exhibitors", "Media Representatives"]
        },
        {
          time: "02:00 PM",
          title: "Panel Discussion: CSR & Community Empowerment",
          description: "Exploring corporate social responsibility and community development",
          type: "panel",
          icon: MessageSquare,
          duration: "1.5 hours",
          venue: "Conference Hall 1",
          speakers: ["CSR Leaders", "NGO Experts", "Industry Veterans"]
        },
        {
          time: "04:00 PM",
          title: "Youth Engagement Session",
          description: "College student interactions and volunteer sign-ups",
          type: "workshop",
          icon: GraduationCap,
          duration: "1.5 hours",
          venue: "Youth Pavilion",
          speakers: ["Youth Leaders", "Student Volunteers", "Mentors"]
        }
      ]
    },
    {
      day: "Day 2",
      date: "1st February 2026",
      theme: "Innovation & Recognition",
      sessions: [
        {
          time: "10:00 AM",
          title: "Panel Discussion: Technology for Social Impact",
          description: "Leveraging technology for sustainable social development",
          type: "panel",
          icon: Globe,
          duration: "1.5 hours",
          venue: "Conference Hall 1",
          speakers: ["Tech Innovators", "Social Entrepreneurs", "Digital Experts"]
        },
        {
          time: "12:00 PM",
          title: "Networking Meet",
          description: "NGO–Corporate–Institution partnerships",
          type: "networking",
          icon: Network,
          duration: "2 hours",
          venue: "Networking Lounge",
          speakers: ["All Delegates", "Partnership Facilitators"]
        },
        {
          time: "02:00 PM",
          title: "Recognition Ceremony",
          description: "Certificates and awards for participants",
          type: "award",
          icon: Award,
          duration: "2 hours",
          venue: "Main Auditorium",
          speakers: ["Chief Guest", "Jury Members", "Award Winners"]
        },
        {
          time: "04:00 PM",
          title: "Cultural Segment",
          description: "Performances by youth and volunteers",
          type: "cultural",
          icon: Music,
          duration: "1.5 hours",
          venue: "Cultural Arena",
          speakers: ["Cultural Troupes", "Volunteer Artists"]
        }
      ]
    }
  ];

  const eventHighlights = [
    { icon: Users, title: "60+ NGO Stalls", description: "Exhibition spaces for NGOs", color: "bg-gradient-to-r from-green-500 to-emerald-500" },
    { icon: Briefcase, title: "20+ Corporate CSR Stalls", description: "Corporate participation zones", color: "bg-gradient-to-r from-blue-500 to-indigo-500" },
    { icon: School, title: "20+ Institution Booths", description: "Educational institutions display", color: "bg-gradient-to-r from-yellow-500 to-amber-500" },
    { icon: Landmark, title: "10 Govt. Displays", description: "Government department exhibits", color: "bg-gradient-to-r from-red-500 to-rose-500" },
    { icon: Network, title: "Networking Lounges", description: "Dedicated interaction zones", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { icon: Mic, title: "Keynote Sessions", description: "Expert talks and discussions", color: "bg-gradient-to-r from-cyan-500 to-teal-500" },
    { icon: Trophy, title: "Awards Ceremony", description: "Recognition for changemakers", color: "bg-gradient-to-r from-orange-500 to-red-500" },
    { icon: Music, title: "Cultural Performances", description: "Traditional & contemporary shows", color: "bg-gradient-to-r from-violet-500 to-purple-500" }
  ];

  const participantCategories = [
    {
      title: "NGOs",
      subtitle: "Showcase. Connect. Grow.",
      icon: HeartHandshake,
      color: "from-green-500 to-emerald-500",
      points: [
        "Exhibit your projects and impact stories",
        "Meet potential donors, CSR partners, and volunteers",
        "Network with government officials and peer NGOs",
        "Gain visibility through media and press coverage"
      ],
      takeaway: "Visibility, Funding Connections, Volunteer Enrolment"
    },
    {
      title: "Corporates",
      subtitle: "Collaborate for Impact.",
      icon: Briefcase,
      color: "from-blue-500 to-indigo-500",
      points: [
        "Explore credible NGOs for CSR partnerships",
        "Display your sustainability and CSR initiatives",
        "Engage employees as volunteers",
        "Identify local social development projects"
      ],
      takeaway: "CSR Partnerships, Brand Visibility, Impact Opportunities"
    },
    {
      title: "Educational Institutions",
      subtitle: "Engage Students in Real Change.",
      icon: School,
      color: "from-yellow-500 to-amber-500",
      points: [
        "Display your green, social, and innovation projects",
        "Encourage student volunteering and internships with NGOs",
        "Participate in social innovation discussions"
      ],
      takeaway: "Student Engagement, Visibility, Institutional Networking"
    },
    {
      title: "Government Departments",
      subtitle: "Inform. Inspire. Collaborate.",
      icon: Landmark,
      color: "from-red-500 to-rose-500",
      points: [
        "Showcase flagship schemes and welfare initiatives",
        "Engage citizens and NGOs in program implementation",
        "Build partnerships for ground-level execution"
      ],
      takeaway: "Public Awareness, NGO Collaboration, Program Outreach"
    }
  ];

  const tabs = [
    { id: 'schedule', label: 'Event Schedule', icon: Calendar },
    { id: 'highlights', label: 'Key Highlights', icon: Sparkles },
    { id: 'participants', label: 'Who Should Join', icon: Users },
    { id: 'objectives', label: 'Objectives', icon: Target }
  ];

  const toggleBookmark = (itemId) => {
    setBookmarkedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'schedule':
        return (
          <div className="space-y-8">
            {eventSchedule.map((day, dayIndex) => (
              <div key={dayIndex} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="text-3xl font-bold text-white">{day.day}</h3>
                      <p className="text-blue-100 text-lg">{day.date}</p>
                      <p className="text-blue-200 mt-2">{day.theme}</p>
                    </div>
                    <button
                      onClick={() => setExpandedDay(expandedDay === dayIndex ? null : dayIndex)}
                      className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition-colors flex items-center gap-2"
                    >
                      {expandedDay === dayIndex ? 'Collapse' : 'Expand'} Schedule
                      <ChevronRight className={`w-4 h-4 transition-transform ${expandedDay === dayIndex ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                </div>
                
                <div className={`transition-all duration-500 ${expandedDay === dayIndex ? 'max-h-[2000px]' : 'max-h-0'} overflow-hidden`}>
                  <div className="p-8 space-y-6">
                    {day.sessions.map((session, sessionIndex) => {
                      const Icon = session.icon;
                      const isBookmarked = bookmarkedItems.includes(`${dayIndex}-${sessionIndex}`);
                      
                      return (
                        <div
                          key={sessionIndex}
                          className="border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex flex-col lg:flex-row gap-6">
                            <div className="lg:w-48 flex-shrink-0">
                              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-blue-700 mb-2">{session.time}</div>
                                  <div className="text-sm text-gray-600">{session.duration}</div>
                                </div>
                                <div className="mt-4 flex items-center justify-center">
                                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-white" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex-grow">
                              <div className="flex justify-between items-start mb-4">
                                <div>
                                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{session.title}</h4>
                                  <p className="text-gray-600">{session.description}</p>
                                </div>
                                <button
                                  onClick={() => toggleBookmark(`${dayIndex}-${sessionIndex}`)}
                                  className="flex-shrink-0"
                                >
                                  {isBookmarked ? (
                                    <BookmarkCheck className="w-6 h-6 text-blue-600" />
                                  ) : (
                                    <Bookmark className="w-6 h-6 text-gray-400 hover:text-blue-600" />
                                  )}
                                </button>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex items-center gap-3">
                                  <MapPin className="w-5 h-5 text-gray-400" />
                                  <div>
                                    <p className="text-sm text-gray-500">Venue</p>
                                    <p className="font-medium">{session.venue}</p>
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                  <User className="w-5 h-5 text-gray-400" />
                                  <div>
                                    <p className="text-sm text-gray-500">Speakers</p>
                                    <p className="font-medium">{session.speakers.join(', ')}</p>
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                  <TagIcon className="w-5 h-5 text-gray-400" />
                                  <div>
                                    <p className="text-sm text-gray-500">Type</p>
                                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium rounded-full">
                                      {session.type}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'highlights':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="highlight-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`${highlight.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        );

      case 'participants':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {participantCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-lg text-gray-600 font-medium">{category.subtitle}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {category.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-2">Key Takeaway:</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {category.takeaway}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        );

      case 'objectives':
        return (
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Our Mission & Objectives
              </h3>
              
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Target className="w-7 h-7 text-blue-600" />
                    Primary Objective
                  </h4>
                  <p className="text-gray-700 text-lg">
                    To create a collaborative platform where changemakers, supporters, and enablers come together to strengthen Punjab's social ecosystem.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Lightbulb,
                      title: "Exhibit Impact",
                      description: "Showcase innovative social initiatives and impact stories"
                    },
                    {
                      icon: Handshake,
                      title: "Build Partnerships",
                      description: "Foster CSR collaborations and volunteer networks"
                    },
                    {
                      icon: Users,
                      title: "Mobilize Youth",
                      description: "Engage students and citizens in community service"
                    },
                    {
                      icon: Network,
                      title: "Encourage Collaboration",
                      description: "Promote inter-district cooperation among stakeholders"
                    }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <h5 className="text-xl font-bold text-gray-900">{item.title}</h5>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const TagIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 pt-24 pb-32">
        {/* Floating elements */}
        <div className="float-element absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="float-element absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="float-element absolute top-1/3 right-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-xl"></div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div ref={titleRef} className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Punjab NGO Expo 2026
                <span className="block text-3xl md:text-4xl lg:text-5xl text-blue-200 mt-4">
                  "Help Locally – Building Stronger Communities Together"
                </span>
              </h1>
              
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
                  <Calendar className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">31st Jan - 1st Feb 2026</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
                  <MapPin className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">PAU Ground, Ludhiana</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
                  <Users className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">10,000+ Expected Delegates</span>
                </div>
              </div>
            </div>

            {/* Stats Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: "NGO Stalls", value: "60+", icon: HeartHandshake },
                { label: "Corporate Stalls", value: "20+", icon: Briefcase },
                { label: "Institution Booths", value: "20+", icon: School },
                { label: "Govt. Displays", value: "10+", icon: Landmark }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Navigation Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-6 py-4 rounded-full font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="tab-content mb-16">
            {renderTabContent()}
          </div>

          {/* About Section */}
          <div className="bg-white rounded-3xl shadow-xl p-12 mb-16 border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              About the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Event</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                The <span className="font-bold text-blue-700">Punjab NGO Expo 2026</span> is a first-of-its-kind State Level Exhibition and Networking Platform that brings together Punjab's NGOs, Corporates, Educational Institutions, and Government Departments working for public welfare.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                The Expo will showcase innovative community initiatives, foster partnerships, and inspire citizen participation under the spirit of "Help Locally." With <span className="font-bold">10,000+ delegates</span> including volunteers, donors, media, corporates, and students expected to attend, the event will serve as a landmark collaboration to strengthen the social ecosystem of Punjab.
              </p>
            </div>
          </div>

          {/* Expected Delegates */}
          <div className="highlights-section mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Expected <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Delegates</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: GraduationCap, title: "Volunteers & Students", count: "3,000+" },
                { icon: Briefcase, title: "CSR Heads & Corporate Leaders", count: "500+" },
                { icon: Users, title: "NGO Founders & Social Entrepreneurs", count: "1,500+" },
                { icon: Star, title: "Donors & HNIs", count: "200+" },
                { icon: Camera, title: "Media & Influencers", count: "100+" },
                { icon: Landmark, title: "Government Officials", count: "300+" }
              ].map((delegate, index) => {
                const Icon = delegate.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">{delegate.title}</div>
                        <div className="text-2xl font-bold text-blue-700">{delegate.count}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* How to Participate */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              How to <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Participate</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Fill Registration Form",
                  description: "Complete the online registration form with your details",
                  icon: BookOpen
                },
                {
                  step: "02",
                  title: "Await Confirmation",
                  description: "Receive stall allotment and participation confirmation",
                  icon: CheckCircle
                },
                {
                  step: "03",
                  title: "Join Us at PAU Ground",
                  description: "Prepare materials and attend the expo in Ludhiana",
                  icon: MapPin
                }
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                      {step.step}
                    </div>
                    <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Organizers & Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Organized By</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">CityNeeds</h4>
                    <p className="text-gray-600">Punjab's leading local crowdfunding and volunteer engagement platform</p>
                    <a href="https://www.cityneeds.info" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium inline-block mt-2">
                      www.cityneeds.info ↗
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">In Collaboration With</h4>
                    <ul className="text-gray-600 space-y-2 mt-2">
                      <li className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-blue-500" />
                        District Administration, Ludhiana – Host & Official Partner
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact & Enquiries</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-100">Email</p>
                    <p className="text-xl font-bold">info@cityneeds.info</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-100">Phone</p>
                    <p className="text-xl font-bold">+91-8289066979</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-blue-300/30">
                  <p className="text-blue-200 text-sm">Issued by:</p>
                  <p className="text-lg font-bold">Deputy Commissioner, Ludhiana</p>
                  <p className="text-blue-100 text-sm">(On behalf of District Administration Ludhiana)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-12 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
                Join Punjab's largest gathering of social changemakers and community builders
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                <Link
                  to="/registration"
                  className="bg-white text-green-700 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-3 group"
                >
                  <Sparkles className="w-5 h-5" />
                  Register Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/venue"
                  className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-3 group"
                >
                  <MapPin className="w-5 h-5" />
                  View Venue Details
                </Link>
              </div>
              
              <p className="mt-12 text-green-200">
                Limited stalls available. Early registration recommended for preferred stall locations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;