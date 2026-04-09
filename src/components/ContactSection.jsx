import React from 'react';
import { Phone, MapPin, Send } from 'lucide-react';
import './ContactSection.css';

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    // Dummy WhatsApp link that can be replaced later
    window.open('https://wa.me/1234567890?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20Ideal%20NEET%20Academy', '_blank');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="gradient-text">Get In Touch</h2>
          <p>Ready to secure your medical future? Contact us today.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card glass-panel">
            <h3 className="card-title">Follow For Details</h3>
            <p className="card-desc">Check out our latest classes, student success stories, and announcements.</p>
            
            <div className="social-links">
              <a href="#" className="social-btn instagram">
                <div style={{ width: '24px', height: '24px', background: '#e1306c', borderRadius: '4px' }}></div>
                <span>@idealneet</span>
              </a>
              <a href="#" className="social-btn facebook">
                <div style={{ width: '24px', height: '24px', background: '#1877f2', borderRadius: '4px' }}></div>
                <span>Ideal NEET Academy</span>
              </a>
            </div>
            
            <div className="address-info mt-top">
              <div className="info-row">
                <MapPin className="icon" size={20} />
                <span>123 Education Hub, Main St, City, Country</span>
              </div>
            </div>
          </div>

          <div className="contact-cta glass-panel custom-bg">
            <div className="cta-content">
              <h3>Fastest Way to Reach Us</h3>
              <p>We've found that messaging us on WhatsApp is the quickest way to get all your queries answered immediately directly by our counselors.</p>
              
              <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
                <Phone size={24} />
                Chat on WhatsApp
                <Send size={18} className="send-icon" />
              </button>
              <p className="small-text">* Average response time is under 15 minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
