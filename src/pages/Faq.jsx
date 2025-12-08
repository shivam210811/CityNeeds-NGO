// FAQPage.jsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import bgImage from '../assets/bgImage1.PNG'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ChevronDown, 
  Calendar, 
  MapPin, 
  Users, 
  Target, 
  Award,
  Building,
  School,
  Briefcase,
  Globe,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FAQPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out"
      });

      gsap.from(titleRef.current.children, {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.3
      });

      // Section animations
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          gsap.from(section, {
            y: 80,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.1
          });
        }
      });

      // Floating elements
      gsap.to(".float-element", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const faqItems = [
    {
      id: 1,
      question: "What is Punjab NGO Expo 2026?",
      answer: "The Punjab NGO Expo 2026 is a first-of-its-kind State Level Exhibition and Networking Platform that brings together Punjab's NGOs, Corporates, Educational Institutions, and Government Departments working for public welfare. It aims to showcase innovative community initiatives and foster partnerships under the spirit of 'Help Locally'."
    },
    {
      id: 2,
      question: "When and where will the event take place?",
      answer: "📅 Dates: 31st January and 1st February 2026\n📍 Venue: PAU Ground, Ludhiana, Punjab"
    },
    {
      id: 3,
      question: "Who is organizing this event?",
      answer: "Organized by CityNeeds in association with District Administration Ludhiana. CityNeeds is Punjab's leading local crowdfunding and volunteer engagement platform."
    },
    {
      id: 4,
      question: "What are the main objectives of the expo?",
      answer: "• Exhibit impactful social initiatives\n• Build partnerships for CSR and volunteering\n• Mobilize youth and citizens for community service\n• Encourage inter-district collaboration among NGOs and institutions"
    },
    {
      id: 5,
      question: "Who should participate in this expo?",
      answer: "• NGOs - Showcase projects and connect with donors\n• Corporates - Explore CSR partnerships\n• Educational Institutions - Engage students in social work\n• Government Departments - Showcase welfare schemes\n• Volunteers & Students - Participate in community service"
    },
    {
      id: 6,
      question: "What are the key highlights of the event?",
      answer: "• 60+ NGO Exhibition Stalls\n• 20+ Corporate CSR Stalls\n• 20+ Educational Institution Booths\n• 10 Government Department Displays\n• Networking Lounges & Panel Discussions\n• Recognition Ceremony for Social Changemakers\n• Cultural Performances"
    },
    {
      id: 7,
      question: "How can I register for the expo?",
      answer: "Step 1: Fill out the registration form\nStep 2: Await confirmation and stall allotment details\nStep 3: Prepare your display materials and join us at PAU Ground, Ludhiana"
    },
    {
      id: 8,
      question: "Is there any registration fee?",
      answer: "For detailed information about participation fees and packages, please contact us at info@cityneeds.info or call +91-8289066979"
    },
    {
      id: 9,
      question: "What are the expected attendance numbers?",
      answer: "We expect 10,000+ delegates including volunteers, donors, CSR heads, media, government officials, and students."
    },
    {
      id: 10,
      question: "Will there be any awards or recognition?",
      answer: "Yes! We have a Recognition Ceremony for Social Changemakers where outstanding contributors to community welfare will be honored with certificates and awards."
    }
  ];

  const scheduleItems = [
    {
      day: "Day 1 – 31st Jan 2026",
      sessions: [
        { time: "10:00 AM", title: "Inaugural Ceremony", desc: "Dignitaries' addresses, ribbon cutting, and keynote session" },
        { time: "11:00 AM", title: "Exhibition Walkthrough", desc: "Stalls open for public and media" },
        { time: "2:00 PM", title: "Panel Discussion I", desc: "CSR & Community Empowerment" },
        { time: "4:00 PM", title: "Youth Engagement", desc: "College student interactions and volunteer sign-ups" }
      ]
    },
    {
      day: "Day 2 – 1st Feb 2026",
      sessions: [
        { time: "10:00 AM", title: "Panel Discussion II", desc: "Technology for Social Impact" },
        { time: "12:00 PM", title: "Networking Meet", desc: "NGO–Corporate–Institution partnerships" },
        { time: "2:00 PM", title: "Recognition Ceremony", desc: "Certificates and awards for participants" },
        { time: "4:00 PM", title: "Cultural Segment", desc: "Performances by youth and volunteers" }
      ]
    }
  ];

  const participantTypes = [
    {
      color: "bg-green-500",
      icon: <Globe className="w-8 h-8" />,
      title: "NGOs",
      subtitle: "Showcase. Connect. Grow.",
      points: [
        "Exhibit your projects and impact stories",
        "Meet potential donors, CSR partners, and volunteers",
        "Network with government officials and peer NGOs",
        "Gain visibility through media coverage"
      ],
      takeaway: "Visibility, Funding Connections, Volunteer Enrolment"
    },
    {
      color: "bg-blue-500",
      icon: <Briefcase className="w-8 h-8" />,
      title: "Corporates",
      subtitle: "Collaborate for Impact.",
      points: [
        "Explore credible NGOs for CSR partnerships",
        "Display your sustainability and CSR initiatives",
        "Engage employees as volunteers",
        "Identify local social development projects"
      ],
      takeaway: "CSR Partnerships, Brand Visibility, Impact Opportunities"
    },
    {
      color: "bg-yellow-500",
      icon: <School className="w-8 h-8" />,
      title: "Educational Institutions",
      subtitle: "Engage Students in Real Change.",
      points: [
        "Display your green, social, and innovation projects",
        "Encourage student volunteering and internships",
        "Participate in social innovation discussions",
        "Connect with industry and social sector"
      ],
      takeaway: "Student Engagement, Visibility, Institutional Networking"
    },
    {
      color: "bg-red-500",
      icon: <Building className="w-8 h-8" />,
      title: "Government Departments",
      subtitle: "Inform. Inspire. Collaborate.",
      points: [
        "Showcase flagship schemes and welfare initiatives",
        "Engage citizens and NGOs in program implementation",
        "Build partnerships for ground-level execution",
        "Receive direct feedback from stakeholders"
      ],
      takeaway: "Public Awareness, NGO Collaboration, Program Outreach"
    }
  ];

return (
    <div 
        ref={containerRef}
        className="min-h-screen relative overflow-hidden"
        style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.9)), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat'
        }}
    >
        {/* Floating decorative elements */}
        <div className="float-element absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="float-element absolute bottom-20 right-10 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="float-element absolute top-1/3 right-1/4 w-24 h-24 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>

        {/* Hero Section */}
        <section className="relative py-20 md:py-28 px-4">
            <div className="max-w-6xl mx-auto">
                <div ref={heroRef} className="text-center mb-12">
                    <div ref={titleRef} className="inline-block">
                        <span className="block text-lg md:text-xl font-semibold text-green-600 mb-2">
                            🌿 PUNJAB NGO EXPO 2026
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            Help Locally
                        </h1>
                        <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                            Building Stronger Communities Together
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">Dates</h3>
                                <p className="text-gray-600">31st Jan - 1st Feb 2026</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">Venue</h3>
                                <p className="text-gray-600">PAU Ground, Ludhiana</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                <Users className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">Expected Delegates</h3>
                                <p className="text-gray-600">10,000+ Attendees</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* About Section */}
        <section ref={el => sectionRefs.current[0] = el} className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <Target className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About the Event</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        The Expo will showcase innovative community initiatives, foster partnerships, and inspire citizen participation under the spirit of "Help Locally." With 10,000+ delegates including volunteers, donors, media, corporates, and students expected to attend, the event will serve as a landmark collaboration to strengthen the social ecosystem of Punjab.
                    </p>
                </div>
            </div>
        </section>

        {/* Who Should Participate */}
        <section ref={el => sectionRefs.current[1] = el} className="py-16 px-4 bg-gradient-to-br from-blue-50/50 to-green-50/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    🤝 Who Should Participate?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {participantTypes.map((type, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform hover:-translate-y-2 transition-all duration-300 group"
                            onMouseEnter={(e) => {
                                gsap.to(e.currentTarget, {
                                    scale: 1.02,
                                    duration: 0.3,
                                    ease: "power2.out"
                                });
                            }}
                            onMouseLeave={(e) => {
                                gsap.to(e.currentTarget, {
                                    scale: 1,
                                    duration: 0.3,
                                    ease: "power2.out"
                                });
                            }}
                        >
                            <div className={`${type.color} p-6 text-white`}>
                                <div className="flex items-center gap-4">
                                    {type.icon}
                                    <div>
                                        <h3 className="text-xl font-bold">{type.title}</h3>
                                        <p className="text-white/90">{type.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <ul className="space-y-3 mb-6">
                                    {type.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <div className={`w-2 h-2 rounded-full mt-2 ${type.color.replace('500', '400')}`}></div>
                                            <span className="text-gray-700">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className="pt-4 border-t border-gray-100">
                                    <p className="text-sm font-semibold text-gray-500">Takeaway:</p>
                                    <p className="font-bold text-gray-800">{type.takeaway}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Event Schedule */}
        <section ref={el => sectionRefs.current[2] = el} className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    🗓️ Event Schedule
                </h2>
                
                <div className="space-y-8">
                    {scheduleItems.map((day, dayIndex) => (
                        <div key={dayIndex} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <Calendar className="w-6 h-6 text-blue-600" />
                                <h3 className="text-2xl font-bold text-gray-800">{day.day}</h3>
                            </div>
                            
                            <div className="space-y-4">
                                {day.sessions.map((session, sessionIndex) => (
                                    <div 
                                        key={sessionIndex}
                                        className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-green-50/50 hover:from-blue-100/50 hover:to-green-100/50 transition-all duration-300 group cursor-pointer"
                                        onMouseEnter={(e) => {
                                            gsap.to(e.currentTarget, {
                                                x: 10,
                                                duration: 0.3,
                                                ease: "power2.out"
                                            });
                                        }}
                                        onMouseLeave={(e) => {
                                            gsap.to(e.currentTarget, {
                                                x: 0,
                                                duration: 0.3,
                                                ease: "power2.out"
                                            });
                                        }}
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                                                <span className="font-bold text-blue-600">{session.time}</span>
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-gray-800 text-lg">{session.title}</h4>
                                            <p className="text-gray-600">{session.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section ref={el => sectionRefs.current[3] = el} className="py-16 px-4 bg-gradient-to-br from-gray-50/50 to-blue-50/50">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    ❓ Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                    {faqItems.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                            >
                                <span className="text-lg font-semibold text-gray-800 pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown 
                                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                                        openFaq === faq.id ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            
                            <div
                                className={`px-6 overflow-hidden transition-all duration-500 ${
                                    openFaq === faq.id ? 'max-h-96 py-5' : 'max-h-0'
                                }`}
                            >
                                <div className="text-gray-600 whitespace-pre-line leading-relaxed border-t border-gray-100 pt-5">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Contact & Registration */}
        <section ref={el => sectionRefs.current[4] = el} className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                    <div className="text-center mb-8">
                        <Award className="w-12 h-12 mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Make an Impact?
                        </h2>
                        <p className="text-blue-100 text-lg">
                            Join Punjab's largest social impact gathering
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                            <h3 className="text-xl font-bold mb-4">📞 Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5" />
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <p className="text-blue-100">info@cityneeds.info</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5" />
                                    <div>
                                        <p className="font-medium">Phone</p>
                                        <p className="text-blue-100">+91-8289066979</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                            <h3 className="text-xl font-bold mb-4">💡 How to Participate</h3>
                            <ol className="space-y-3 list-decimal list-inside">
                                <li>Fill out the registration form</li>
                                <li>Await confirmation and stall allotment details</li>
                                <li>Prepare your display materials</li>
                                <li>Join us at PAU Ground, Ludhiana!</li>
                            </ol>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <a
                            href="/registration"
                            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
                            onMouseEnter={(e) => {
                                gsap.to(e.currentTarget, {
                                    scale: 1.05,
                                    duration: 0.3,
                                    ease: "power2.out"
                                });
                            }}
                            onMouseLeave={(e) => {
                                gsap.to(e.currentTarget, {
                                    scale: 1,
                                    duration: 0.3,
                                    ease: "power2.out"
                                });
                            }}
                        >
                            Register Now
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center">
                    <p className="text-gray-400 mb-2">
                        Organized by <span className="font-bold text-white">CityNeeds</span> – Punjab's leading local crowdfunding and volunteer engagement platform
                    </p>
                    <p className="text-gray-400">
                        In collaboration with <span className="font-bold text-white">District Administration, Ludhiana</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-6">
                        📍 PAU Ground, Fengzhou Road, Ludhiana, Punjab 141004
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        🏛 Issued by: Deputy Commissioner, Ludhiana (On behalf of District Administration Ludhiana)
                    </p>
                </div>
            </div>
        </footer>
    </div>
);
};

export default FAQPage;