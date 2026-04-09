import React from 'react';
import { Target, Users, BookOpen, Award } from 'lucide-react';
import './FeaturesSection.css';

export default function FeaturesSection() {
  const features = [
    {
      title: "Expert Faculty",
      description: "Learn from top medical professionals and educators with years of NEET coaching experience.",
      icon: <Users size={32} className="feature-icon" />
    },
    {
      title: "3D Assisted Learning",
      description: "Visualize complex biological structures and chemical bounds through our interactive 3D modules.",
      icon: <Target size={32} className="feature-icon" />
    },
    {
      title: "Comprehensive Study Material",
      description: "Get access to our meticulously designed study guides, previous year papers, and question banks.",
      icon: <BookOpen size={32} className="feature-icon" />
    },
    {
      title: "Regular Mock Tests",
      description: "Test your preparation with our weekly mock exams designed exactly according to the latest NTA pattern.",
      icon: <Award size={32} className="feature-icon" />
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="gradient-text">Why Choose Ideal NEET?</h2>
          <p>We provide everything you need to secure your top medical college seat.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass-panel">
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
