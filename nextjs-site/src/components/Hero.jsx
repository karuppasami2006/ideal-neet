"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadeddata", () => setVideoLoaded(true));
      // Attempt autoplay
      video.play().catch(() => {
        // Autoplay blocked, poster will show
      });
    }
  }, []);

  return (
    <section className="hero" id="home" aria-label="Hero section">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="hero-video-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/neet_class.png"
        aria-hidden="true"
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
      </video>

      {/* Fallback poster image (shows until video loads) */}
      {!videoLoaded && (
        <div className="hero-poster-bg" aria-hidden="true">
          <Image
            src="/images/neet_class.png"
            alt="Ideal NEET Academy classroom"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      {/* Dark overlay for readability */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Hero foreground content */}
      <div className="container hero-content">
        <div className="hero-logo-middle fade-in-up">
          <Image
            src="/images/neet_logo.jpeg"
            alt="Ideal NEET Academy"
            width={120}
            height={120}
            style={{ borderRadius: "12px" }}
          />
        </div>
        <h1 className="hero-title fade-in-up">
          Trichy&apos;s Leading <br />
          <span className="highlight">NEET Academy</span>
        </h1>
        <p className="hero-subtitle fade-in-up">
          Premium coaching for medical aspirants. Achieve your dream of becoming
          a doctor with expert faculty, high-quality study materials, and proven
          results.
        </p>
        <div className="hero-btns fade-in-up">
          <a href="#programs" className="btn btn-primary">
            Explore Programs
          </a>
          <a href="#contact" className="btn btn-outline">
            Inquire Now
          </a>
        </div>
        <div className="hero-badge fade-in-up">
          <strong>500+</strong> Students Coached Successfully
        </div>
      </div>
    </section>
  );
}
