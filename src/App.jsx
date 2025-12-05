// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
// import About from './pages/About';
// import Venue from './pages/Venue';
// import Program from './pages/Program';
// import StallBooking from './pages/StallBooking';
// import Registration from './pages/Registration';
// import Sponsorship from './pages/Sponsorship';
// import Resources from './pages/Resources';
// import FAQ from './pages/FAQ';
// import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    // Initialize GSAP
    const initGSAP = async () => {
      const gsap = await import('gsap');
      const ScrollTrigger = await import('gsap/ScrollTrigger');
      gsap.default.registerPlugin(ScrollTrigger.default);
    };
    
    if (typeof window !== 'undefined') {
      initGSAP();
    }
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/program" element={<Program />} />
          <Route path="/stall-booking" element={<StallBooking />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Layout>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1e293b',
            color: '#fff',
          },
        }}
      />
    </Router>
  );
}

export default App;