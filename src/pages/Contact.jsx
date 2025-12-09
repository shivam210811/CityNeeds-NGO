// src/pages/Contact.jsx
import { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Building, 
  Users,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Globe,
  Users as UsersIcon,
  HeartHandshake,
  Briefcase,
  HelpCircle
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
    interest: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // GSAP Animations
    const ctx = gsap.context(() => {
    gsap.from(".contact-card", {
  opacity: 90,
  y: 10,
  duration: 1,
  ease: "power3.out",
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".contact-grid",
    start: "top 90%",   // 🔥 triggers earlier so all cards become visible
    end: "bottom 50%", // ensures ALL cards animate properly
    toggleActions: "play none none none",
  },
});


      gsap.from('.form-card', {
        x: -30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.form-card',
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });

      gsap.from('.map-card', {
        x: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.map-card',
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        subject: '',
        message: '',
        interest: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      details: ['info@cityneeds.info', 'support@cityneeds.info'],
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-gradient-to-r from-blue-600 to-indigo-600',
      link: 'mailto:info@cityneeds.info'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91-8289066979', '+91-9876543210'],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-gradient-to-r from-green-500 to-emerald-600',
      link: 'tel:+918289066979'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['PAU Ground, Ferozepur Road', 'Ludhiana, Punjab - 141004'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-gradient-to-r from-purple-500 to-purple-600',
      link: 'https://maps.google.com/?q=PAU+Ground+Ludhiana'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-gradient-to-r from-amber-500 to-amber-600'
    }
  ];

  const departments = [
    {
      icon: UsersIcon,
      title: 'NGO Coordination',
      email: 'ngos@cityneeds.info',
      phone: '+91-9876543211'
    },
    {
      icon: Briefcase,
      title: 'Corporate Partnerships',
      email: 'partnerships@cityneeds.info',
      phone: '+91-9876543212'
    },
    {
      icon: HeartHandshake,
      title: 'Volunteer Support',
      email: 'volunteer@cityneeds.info',
      phone: '+91-9876543213'
    },
    {
      icon: Users,
      title: 'Media & PR',
      email: 'media@cityneeds.info',
      phone: '+91-9876543214'
    }
  ];

  const interestOptions = [
    'NGO Participation',
    'Corporate Sponsorship',
    'Stall Booking',
    'Volunteer Registration',
    'Media Partnership',
    'General Inquiry'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 pt-24 pb-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                <Sparkles className="w-4 h-4" />
                <span>CityNeeds HELP LOCALLY</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Get in Touch
              </h1>
              
              <p className="text-xl text-blue-100 max-w-3xl mx-auto font-medium">
                We're here to help you with any questions about the Punjab NGO Expo 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
          
            
            {/* Contact Cards Grid */}
            <div className="contact-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
  {contactDetails.map((item, index) => (
    <div
      key={index}
      className="contact-card bg-white/90 backdrop-blur-xl rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200"
    >
      {/* ICON BOX */}
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${item.bgColor} shadow-md transition-transform duration-300 hover:scale-110`}
      >
        <item.icon className="w-8 h-8 text-white drop-shadow-lg" />
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">
        {item.title}
      </h3>

      {/* DETAILS */}
      <div className="space-y-2 mb-5 text-gray-700">
        {item.details.map((detail, idx) => (
          <p key={idx}>{detail}</p>
        ))}
      </div>

      {/* LINK BUTTON */}
      {item.link && (
        <a
          href={item.link}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-all duration-300"
        >
          <span className="relative">
            Contact via {item.title.toLowerCase()}
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      )}
    </div>
  ))}
</div>


            {/* Department Contacts */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 mb-12 border border-blue-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Department Contacts</h3>
                <p className="text-gray-600">Connect with specific teams for specialized assistance</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {departments.map((dept, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <dept.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-gray-900">{dept.title}</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-600 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        {dept.email}
                      </p>
                      <p className="text-gray-600 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        {dept.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="form-card">
                <div className="sticky top-24">
                  <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-xl border border-blue-100">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                        <p className="text-gray-600 text-sm">We typically respond within 24 hours</p>
                      </div>
                    </div>
                    
                    {submitStatus === 'success' ? (
                      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center mb-6">
                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                        <p className="text-green-600">
                          Thank you for contacting us. We'll get back to you within 24 hours.
                        </p>
                      </div>
                    ) : submitStatus === 'error' ? (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center mb-6">
                        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-red-800 mb-2">Something went wrong!</h3>
                        <p className="text-red-600">
                          Please try again or contact us directly via email or phone.
                        </p>
                      </div>
                    ) : null}
                    
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            placeholder="Enter your name"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            placeholder="+91 9876543210"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Organization
                          </label>
                          <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            placeholder="Your organization name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Area of Interest *
                        </label>
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white"
                        >
                          <option value="">Select your interest</option>
                          {interestOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                          placeholder="Message subject"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="4"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                          placeholder="Type your message here..."
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 ${
                          isSubmitting 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-2xl text-white'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              
              {/* Map & Quick Info */}
              <div className="space-y-8">
                {/* Map Section */}
                <div className="map-card bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Event Venue</h2>
                      <p className="text-gray-600 text-sm">PAU Ground, Ludhiana</p>
                    </div>
                  </div>
                  
                  {/* Interactive Map */}
                  <div className="relative h-80 rounded-xl overflow-hidden border border-gray-200 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                      <div className="text-center p-6">
                        <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                        <h4 className="text-lg font-bold text-gray-900 mb-1">PAU Ground, Ludhiana</h4>
                        <p className="text-gray-600 text-sm mb-4">Ferozepur Road, Ludhiana, Punjab - 141004</p>
                        <a 
                          href="https://maps.google.com/?q=PAU+Ground+Ferozepur+Road+Ludhiana+Punjab"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 text-sm"
                        >
                          <Globe className="w-4 h-4" />
                          Open in Google Maps
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Building className="w-5 h-5 text-blue-500" />
                      <span>Punjab Agricultural University Ground</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span>Ferozepur Road, Ludhiana, Punjab - 141004</span>
                    </div>
                  </div>
                </div>
                
                {/* Quick Contact Card */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <HelpCircle className="w-8 h-8 text-blue-200" />
                    <h3 className="text-2xl font-bold">Need Immediate Assistance?</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-blue-200 mt-1" />
                      <div>
                        <p className="font-medium">Call us directly</p>
                        <a href="tel:+918289066979" className="text-xl font-bold hover:text-blue-100 transition-colors">
                          +91-8289066979
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-blue-200 mt-1" />
                      <div>
                        <p className="font-medium">Email us at</p>
                        <a href="mailto:info@cityneeds.info" className="text-lg hover:text-blue-100 transition-colors">
                          info@cityneeds.info
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-200 mt-1" />
                      <div>
                        <p className="font-medium">Response time</p>
                        <p className="text-blue-100">Within 24 hours on business days</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-blue-300/30">
                    <p className="text-blue-100 text-sm">
                      <span className="font-semibold">Emergency contact:</span> For urgent matters, call +91-9876543210
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find quick answers to common questions about the Punjab NGO Expo 2026
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  question: "What is the deadline for registration?",
                  answer: "Early bird registration ends on 15th December 2025. Final registration closes on 25th January 2026."
                },
                {
                  question: "How can I book a stall for my NGO?",
                  answer: "You can book a stall through our online portal, or contact our team directly at stallbooking@cityneeds.info"
                },
                {
                  question: "Are there any sponsorship opportunities available?",
                  answer: "Yes, we offer various sponsorship packages. Please contact partnerships@cityneeds.info for detailed information."
                },
                {
                  question: "Can I volunteer for the event?",
                  answer: "Absolutely! We welcome volunteers. Please fill out the volunteer registration form on our website or contact volunteer@cityneeds.info"
                },
                {
                  question: "What are the event timings?",
                  answer: "The expo will be open from 9:30 AM to 6:00 PM on both days (31st January & 1st February 2026)."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-8">
              <div className="text-4xl md:text-5xl font-bold mb-4">Still have questions?</div>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Our team is ready to assist you with any queries about the Punjab NGO Expo 2026
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+918289066979" 
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 transform flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call Now: +91-8289066979
              </a>
              
              <a 
                href="mailto:info@cityneeds.info" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105 transform flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-blue-300/30">
              <div className="text-lg font-bold mb-2">CityNeeds</div>
              <div className="text-md font-semibold text-blue-200 mb-4">HELP LOCALLY</div>
              <p className="text-blue-100 text-sm">
                Organized in association with District Administration, Ludhiana
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
