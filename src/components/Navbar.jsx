import React, { useState, useEffect } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="nav-brand">
        <BookOpen className="brand-icon" size={32} />
        <span className="brand-text gradient-text">Ideal NEET</span>
      </div>
      
      <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
        <a href="#contact" className="nav-btn" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
      </div>

      <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </nav>
  );
}
