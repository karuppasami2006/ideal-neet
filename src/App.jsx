import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero3DBox from './components/Hero3DBox';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import ContactSection from './components/ContactSection';
import './App.css';
import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <h1 className="hero-title">
              Shape Your <br />
              <span className="gradient-text">Medical Future</span>
            </h1>
            <p className="hero-subtitle">
              Join Ideal NEET Academy. Experience interactive learning and expert guidance tailored to help you crack the medical entrance exams.
            </p>
            <a href="#contact" className="cta-button">
              Get Started
              <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="hero-canvas-container">
            <Suspense fallback={<div className="glass-panel" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading 3D Experience...</div>}>
              <Hero3DBox />
            </Suspense>
          </div>
        </section>
        
        <FeaturesSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
