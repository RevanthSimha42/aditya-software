import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="highlight">Aditya Software Solutions</span>
        </h1>
        <p className="hero-subtitle">
          Transforming ideas into powerful digital experiences
        </p>
        <div className="hero-buttons">
          <a href="#services" className="btn btn-primary">Our Services</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <img src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Digital Transformation" className="main-image" />
      </div>
    </section>
  );
};

export default Hero;