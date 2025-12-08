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
  ExternalLink,
  CreditCard,
  Layout,
  FileText,
  CheckCircle,
  Download,
  TrendingUp,
  Megaphone,
  Star,
  Heart,
  Shield,
  BarChart,
  Sparkles
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const sponsorship = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [openStallSection, setOpenStallSection] = useState(null);
  const [openSponsorSection, setOpenSponsorSection] = useState(null);
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
    // ... (keep existing faqItems array as is)
  ];

  const stallBookingSections = [
    // ... (keep existing stallBookingSections array as is)
  ];

  const sponsorshipSections = [
    {
      id: 1,
      title: "Why Sponsor the NGO Expo?",
      icon: <TrendingUp className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Amplify Your Social Impact</h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Partner with Punjab's largest social impact gathering and showcase your commitment to community development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Megaphone className="w-10 h-10" />,
                title: "Maximum Visibility",
                desc: "10,000+ delegates, 100+ media mentions, statewide coverage",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: "CSR Alignment",
                desc: "Showcase your social responsibility to stakeholders and investors",
                color: "from-red-500 to-red-600"
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Brand Trust",
                desc: "Association with government and credible NGOs builds credibility",
                color: "from-green-500 to-green-600"
              },
              {
                icon: <BarChart className="w-10 h-10" />,
                title: "Networking ROI",
                desc: "Direct access to 500+ NGOs, corporates, and government officials",
                color: "from-purple-500 to-purple-600"
              }
            ].map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200 transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="font-bold text-gray-800 text-lg mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-orange-800 text-xl mb-2">📈 Measurable Impact</h4>
                <p className="text-orange-700">
                  Sponsors receive comprehensive impact reports including media coverage analysis, 
                  engagement metrics, and ROI assessment to demonstrate tangible social impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Sponsorship Categories",
      icon: <Star className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Title Sponsor",
                price: "₹15,00,000",
                color: "from-gold-500 to-yellow-600",
                tag: "Exclusive",
                features: ["Main stage naming rights", "Prime stall location", "All speaking slots"]
              },
              {
                title: "Co-sponsor",
                price: "₹7,50,000",
                color: "from-silver-400 to-gray-500",
                tag: "2 Available",
                features: ["Shared stage branding", "Premium stall", "Keynote opportunity"]
              },
              {
                title: "Category Sponsor",
                price: "₹4,00,000",
                color: "from-bronze-600 to-orange-700",
                tag: "4 Available",
                features: ["Theme zone naming", "Standard stall", "Panel participation"]
              },
              {
                title: "Session Sponsor",
                price: "₹2,00,000",
                color: "from-blue-500 to-blue-600",
                tag: "8 Available",
                features: ["Session naming rights", "Branding during session", "Speaker slot"]
              },
              {
                title: "In-kind Sponsor",
                price: "Value-based",
                color: "from-green-500 to-green-600",
                tag: "Flexible",
                features: ["Product/service support", "Logo placement", "Stall space"]
              },
              {
                title: "Community Partner",
                price: "₹1,00,000",
                color: "from-purple-500 to-purple-600",
                tag: "Multiple",
                features: ["Recognition in materials", "Networking access", "Certificate"]
              }
            ].map((category, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-200 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`h-3 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-gray-800 text-xl">{category.title}</h4>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium mt-2">
                        {category.tag}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-800">{category.price}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {category.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300">
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6">
            <h4 className="font-bold text-gray-800 text-xl mb-4">💡 Custom Packages Available</h4>
            <p className="text-gray-600 mb-4">
              We understand that every organization has unique goals. Contact us to discuss 
              customized sponsorship packages tailored to your specific CSR objectives and 
              branding requirements.
            </p>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-600">+91-8289066979</span>
              <span className="text-gray-400">|</span>
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-600">sponsorship@cityneeds.info</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Deliverables / Benefits Table",
      icon: <Award className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                    Benefit
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider">
                    Co-sponsor
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider">
                    Session
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { benefit: "Logo on Main Stage", title: "✓ Large", co: "✓ Medium", category: "✓ Small", session: "✓" },
                  { benefit: "Branding in Print Materials", title: "✓ Full page", co: "✓ Half page", category: "✓ Quarter", session: "Logo" },
                  { benefit: "Exhibition Stall Size", title: "6x6m", co: "4x4m", category: "3x3m", session: "3x3m" },
                  { benefit: "Speaking Opportunity", title: "3 slots", co: "2 slots", category: "1 slot", session: "1 slot" },
                  { benefit: "Media Interviews", title: "3", co: "2", category: "1", session: "-" },
                  { benefit: "Social Media Mentions", title: "15+", co: "10+", category: "5+", session: "2+" },
                  { benefit: "Delegate Passes", title: "20", co: "15", category: "10", session: "5" },
                  { benefit: "VIP Lounge Access", title: "✓", co: "✓", category: "-", session: "-" },
                  { benefit: "Post-Event Report", title: "Detailed", co: "Detailed", category: "Summary", session: "Mention" },
                  { benefit: "Recognition Certificate", title: "Platinum", co: "Gold", category: "Silver", session: "Bronze" }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      {row.benefit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-semibold text-blue-600">
                      {row.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-semibold text-purple-600">
                      {row.co}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-semibold text-green-600">
                      {row.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-semibold text-orange-600">
                      {row.session}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5">
              <h4 className="font-bold text-blue-800 mb-3">📢 Media Coverage</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700">Press conferences</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700">TV interviews</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700">Newspaper features</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700">Social media campaigns</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5">
              <h4 className="font-bold text-green-800 mb-3">🤝 Networking</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700">CEO roundtables</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700">Government meetings</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700">NGO partnerships</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700">Investor connects</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5">
              <h4 className="font-bold text-purple-800 mb-3">🎯 Branding</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-purple-700">Venue branding</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-purple-700">Digital assets</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-purple-700">Merchandise</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-purple-700">Collateral placement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Download Sponsorship Brochure",
      icon: <Download className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Complete Sponsorship Package
              </h3>
              <p className="text-gray-600 mb-8">
                Download our detailed sponsorship brochure containing complete information about 
                partnership opportunities, benefits, pricing, and success stories from previous sponsors.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-5 shadow-md">
                  <h4 className="font-bold text-gray-800 mb-3">📋 Brochure Includes:</h4>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Complete sponsorship tiers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Detailed benefits matrix</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Case studies & testimonials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Contact information</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-5 shadow-md">
                  <h4 className="font-bold text-gray-800 mb-3">📊 File Details:</h4>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center justify-between">
                      <span className="text-gray-700">Format:</span>
                      <span className="font-medium">PDF</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-700">Size:</span>
                      <span className="font-medium">5.2 MB</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-700">Pages:</span>
                      <span className="font-medium">24</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-700">Language:</span>
                      <span className="font-medium">English</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Download className="w-5 h-5" />
                  Download Brochure (PDF)
                </button>
                <button className="flex items-center justify-center gap-3 border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                  Email Me the Brochure
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Previous Sponsors",
                desc: "See who sponsored our previous events",
                icon: "🏆"
              },
              {
                title: "Impact Reports",
                desc: "View case studies and success stories",
                icon: "📈"
              },
              {
                title: "Media Kit",
                desc: "Brand guidelines and logo packs",
                icon: "🎨"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-5 text-center group hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Sponsor Enquiry Form",
      icon: <Mail className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-emerald-50 to-green-100 rounded-2xl p-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Partner With Us</h3>
                <p className="text-gray-600">
                  Fill out the form below and our sponsorship team will contact you within 24 hours 
                  to discuss partnership opportunities.
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter company name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry *
                    </label>
                    <select 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="">Select industry</option>
                      <option value="banking">Banking & Finance</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="it">IT & Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="fashion">Fashion & Retail</option>
                      <option value="automobile">Automobile</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="Full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Designation *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="Designation"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="email@company.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interested Sponsorship Category
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      "Title Sponsor",
                      "Co-sponsor", 
                      "Category Sponsor",
                      "Session Sponsor",
                      "In-kind Sponsor",
                      "Custom Package"
                    ].map((category, idx) => (
                      <label key={idx} className="flex items-center p-4 bg-white border rounded-lg cursor-pointer hover:bg-green-50 transition-colors duration-300">
                        <input 
                          type="radio" 
                          name="sponsorCategory" 
                          value={category.toLowerCase().replace(' ', '-')}
                          className="mr-3"
                        />
                        <span className="font-medium text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range *
                  </label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Select budget range</option>
                    <option value="under-2">Under ₹2 Lakhs</option>
                    <option value="2-5">₹2-5 Lakhs</option>
                    <option value="5-10">₹5-10 Lakhs</option>
                    <option value="10-15">₹10-15 Lakhs</option>
                    <option value="15-plus">₹15 Lakhs+</option>
                    <option value="discuss">Need to discuss</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message / Specific Requirements
                  </label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    rows="4"
                    placeholder="Tell us about your specific requirements, goals, or questions..."
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="sponsorTerms" 
                    className="mr-3 mt-1"
                    required
                  />
                  <label htmlFor="sponsorTerms" className="text-sm text-gray-700">
                    I agree to receive communication from CityNeeds regarding sponsorship opportunities 
                    and agree to the <a href="#" className="text-green-600 hover:underline">Terms & Conditions</a>
                  </label>
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit"
                    className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Submit Enquiry
                  </button>
                  <p className="text-gray-500 text-sm mt-4">
                    Our team will contact you within 24 working hours
                  </p>
                </div>
              </form>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800">Prefer to talk?</h4>
                  <p className="text-blue-700">Call our sponsorship team directly</p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-2xl font-bold text-blue-900">+91-8289066979</p>
                <p className="text-blue-700">Mon-Sat, 10 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const scheduleItems = [
    // ... (keep existing scheduleItems array as is)
  ];

  const participantTypes = [
    // ... (keep existing participantTypes array as is)
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

        {/* Stall Booking Section */}
        <section ref={el => sectionRefs.current[2] = el} className="py-16 px-4 bg-gradient-to-br from-gray-50/50 to-blue-50/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    🏪 Stall Booking & Registration
                </h2>
                
                <div className="space-y-4">
                    {stallBookingSections.map((section) => (
                        <div
                            key={section.id}
                            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenStallSection(openStallSection === section.id ? null : section.id)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        {section.icon}
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-xl font-bold text-gray-800">
                                            {section.title}
                                        </h3>
                                    </div>
                                </div>
                                <ChevronDown 
                                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                                        openStallSection === section.id ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            
                            <div
                                className={`px-8 overflow-hidden transition-all duration-500 ${
                                    openStallSection === section.id ? 'max-h-[2000px] py-6' : 'max-h-0'
                                }`}
                            >
                                <div className="border-t border-gray-100 pt-6">
                                    {section.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Sponsorship Section */}
        <section ref={el => sectionRefs.current[3] = el} className="py-16 px-4 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    🤝 Sponsorship Opportunities
                </h2>
                
                <div className="mb-12 text-center">
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                    Partner with Punjab's premier social impact event and showcase your commitment 
                    to community development. Choose from various sponsorship tiers designed to 
                    maximize your brand visibility and impact.
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold">
                    <Star className="w-5 h-5" />
                    Limited Slots Available - Act Fast!
                  </div>
                </div>
                
                <div className="space-y-4">
                    {sponsorshipSections.map((section) => (
                        <div
                            key={section.id}
                            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenSponsorSection(openSponsorSection === section.id ? null : section.id)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        {section.icon}
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-xl font-bold text-gray-800">
                                            {section.title}
                                        </h3>
                                    </div>
                                </div>
                                <ChevronDown 
                                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                                        openSponsorSection === section.id ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            
                            <div
                                className={`px-8 overflow-hidden transition-all duration-500 ${
                                    openSponsorSection === section.id ? 'max-h-[2000px] py-6' : 'max-h-0'
                                }`}
                            >
                                <div className="border-t border-gray-100 pt-6">
                                    {section.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Event Schedule */}
        <section ref={el => sectionRefs.current[4] = el} className="py-16 px-4">
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
        <section ref={el => sectionRefs.current[5] = el} className="py-16 px-4 bg-gradient-to-br from-gray-50/50 to-blue-50/50">
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
        <section ref={el => sectionRefs.current[6] = el} className="py-16 px-4">
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

export default sponsorship;