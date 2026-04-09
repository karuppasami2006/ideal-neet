import React from 'react';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="gradient-text">About Ideal NEET Academy</h2>
          <h3 className="about-subtitle">Pioneering Medical Education with Technology</h3>
          <div className="about-text">
            <p>
              At Ideal NEET Academy, we believe that the journey to becoming a successful doctor starts with absolute conceptual clarity. Founded by passionate educators, our academy bridges the gap between traditional learning and modern technology.
            </p>
            <p>
              We are recognized for our highly personalized attention, rigorous test series, and most importantly, our implementation of 3D visual learning techniques that make the toughest concepts in Biology, Physics, and Chemistry easy to grasp and retain.
            </p>
          </div>
          
          <div className="stats-container">
            <div className="stat-box glass-panel">
              <span className="stat-number gradient-text">500+</span>
              <span className="stat-label">Doctors Made</span>
            </div>
            <div className="stat-box glass-panel">
              <span className="stat-number gradient-text">15+</span>
              <span className="stat-label">Expert Staff</span>
            </div>
            <div className="stat-box glass-panel">
              <span className="stat-number gradient-text">98%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </div>
        
        <div className="about-image-wrapper glass-panel">
          {/* This acts as a beautiful placeholder until an actual image is provided */}
          <div className="placeholder-image">
            <div className="dna-visual"></div>
            <span>Pursuing Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
}
