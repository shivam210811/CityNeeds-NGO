// src/pages/Home.jsx
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Target, Heart, ArrowRight, Sparkles, Globe, Users2, Star, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Counter Component
const Counter = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let startTime = null;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        // Ease out function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        const currentCount = Math.floor(easeOutQuart * end);
        
        setCount(currentCount);
        
        if (progress < duration) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(animateCount);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="inline-block">
      {prefix}{count}{suffix}
    </span>
  );
};

// Stat Counter Component with Icon
const StatCounter = ({ end, label, icon: Icon, color, duration = 2000, suffix = "" }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl -z-10"></div>
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-50 to-purple-50"></div>
      
      <div className={`${color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500`}>
        <Icon className="w-10 h-10 text-white" />
      </div>
      
      <h3 className="text-5xl font-bold text-gray-900 mb-3 text-center">
        {inView ? <Counter end={end} duration={2000} suffix={suffix} /> : "0" + suffix}
      </h3>
      <p className="text-gray-600 text-center font-semibold text-lg">{label}</p>
    </div>
  );
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const highlights = [
    { 
      icon: Users2, 
      value: 150, 
      label: "NGOs Participating", 
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      suffix: "+"
    },
    { 
      icon: Calendar, 
      value: 3, 
      label: "Days of Impact", 
      color: "bg-gradient-to-r from-purple-500 to-purple-600" 
    },
    { 
      icon: Target, 
      value: 10000, 
      label: "Expected Visitors", 
      color: "bg-gradient-to-r from-green-500 to-green-600",
      suffix: "+"
    },
    { 
      icon: Heart, 
      value: 50, 
      label: "Partners", 
      color: "bg-gradient-to-r from-pink-500 to-pink-600",
      suffix: "+"
    },
  ];

  const statItems = [
    { value: 150, label: "NGOs", color: "bg-blue-50", textColor: "text-blue-600", suffix: "+" },
    { value: 10000, label: "Visitors", color: "bg-purple-50", textColor: "text-purple-600", suffix: "+" },
    { value: 50, label: "Partners", color: "bg-green-50", textColor: "text-green-600", suffix: "+" },
    { value: 25, label: "Speakers", color: "bg-pink-50", textColor: "text-pink-600", suffix: "+" },
  ];

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="container relative z-10 px-4">
          <div className="max-w-6xl mx-auto text-center">
            {/* Event Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200 shadow-sm">
              <Sparkles className="w-5 h-5" />
              <span className="text-base font-semibold">India's Largest CityNeeds Help Locally</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-gray-900">Punjab NGO Expo</span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                2026
                {/* {new Date().getFullYear()} */}
              </span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Connecting NGOs, Donors & Changemakers for a Better Tomorrow
            </p>
            
            {/* Event Details */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-gray-500 mb-12">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="font-medium">31st Jan & 1st Feb, 2026</span>
              </div>
              <div className="hidden sm:block text-blue-400">•</div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                <span className="font-medium">📍 PAU Ground, Ludhiana</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link
                to="/registration"
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform flex items-center justify-center gap-3"
              >
                <span>Register Now</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                to="/stall-booking"
                className="group px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg border-3 border-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 transform flex items-center justify-center gap-3"
              >
                <span>Book a Stall</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/sponsorship"
                className="group px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform flex items-center justify-center gap-3"
              >
                <span>Become Sponsor</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Animated scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="animate-bounce w-8 h-14 border-3 border-gray-400 rounded-full flex justify-center">
                <div className="w-2 h-4 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mt-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights with Counters */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Event <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Highlights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the scale and impact of India's premier NGO gathering
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <StatCounter
                key={index}
                end={item.value}
                label={item.label}
                icon={item.icon}
                color={item.color}
                suffix={item.suffix || ""}
                duration={2000}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Section with Animated Stats */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Creating <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Global Impact</span> Together
              </h2>
              
              <div className="space-y-6 mb-10">
                {[
                  { 
                    title: 'International Partnerships', 
                    desc: 'Connect with NGOs from 20+ countries',
                    icon: Globe,
                    color: 'text-blue-600'
                  },
                  { 
                    title: 'Expert Sessions', 
                    desc: 'Learn from 25+ international speakers',
                    icon: Star,
                    color: 'text-purple-600'
                  },
                  { 
                    title: 'Collaboration Opportunities', 
                    desc: 'Cross-border project partnerships',
                    icon: Users,
                    color: 'text-green-600'
                  },
                  { 
                    title: 'Funding Networks', 
                    desc: 'Access global CSR and donor networks',
                    icon: Target,
                    color: 'text-pink-600'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className={`${item.color} bg-opacity-10 p-3 rounded-xl`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 transform"
              >
                Learn More About Expo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            {/* Animated Stats Visualization */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="grid grid-cols-2 gap-6 mb-8">
                {statItems.map((stat, index) => (
                  <div key={index} className={`${stat.color} rounded-2xl p-6 text-center`}>
                    <div className={`text-4xl font-bold ${stat.textColor} mb-2`}>
                      <Counter 
                        end={stat.value} 
                        duration={2500} 
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="text-gray-700 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center">
                <div className="text-2xl font-bold mb-2">3 Days of Impact</div>
                <p className="opacity-90">March 15-17, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Stats Section */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Impact <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Statistics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real numbers that showcase the magnitude of our collective impact
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 500, label: "Projects Showcased", suffix: "+", duration: 2500 },
              { value: 100, label: "Workshops", suffix: "+", duration: 2000 },
              { value: 75, label: "Expert Speakers", suffix: "+", duration: 2200 },
              { value: 1000, label: "Volunteer Hours", suffix: "+", duration: 2800 },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
                  <Counter end={item.value} duration={item.duration} suffix={item.suffix} />
                </div>
                <div className="text-gray-700 font-semibold text-lg">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-12">
              <div className="text-4xl md:text-5xl font-bold mb-4">
                <Counter end={10000} duration={3000} suffix="+ Visitors" prefix="" />
              </div>
              <p className="text-xl opacity-90">Expected to join the expo</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90">
              Join India's premier platform for NGOs, donors, and social entrepreneurs.
              Be part of the change you want to see in the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/registration"
                className="group px-12 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform flex items-center justify-center gap-3"
              >
                <span>Register as Visitor</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                to="/stall-booking"
                className="group px-12 py-5 bg-transparent border-3 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 transform flex items-center justify-center gap-3"
              >
                <span>Book Your Stall</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            
            <p className="mt-12 text-blue-100 text-lg">
              Limited stalls available! Book now to secure your spot.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;