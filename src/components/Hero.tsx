import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Innovative Software Solutions & AI Development
          </h1>
          <p className="hero-subtitle">
            Phanindra Allamsetty Inc specializes in cutting-edge software application development 
            and artificial intelligence solutions. We transform ideas into powerful digital experiences.
          </p>
          <div className="hero-cta">
            <a href="#services" className="btn-primary">Our Services</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
