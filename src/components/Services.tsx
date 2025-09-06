import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Full-stack application development using modern technologies like React, Node.js, Python, and cloud platforms.",
      icon: "💻"
    },
    {
      title: "Artificial Intelligence Solutions",
      description: "Machine learning models, AI-powered applications, and intelligent automation systems tailored to your business needs.",
      icon: "🤖"
    },
    {
      title: "Web Application Development",
      description: "Responsive, scalable web applications with modern UI/UX design and robust backend architecture.",
      icon: "🌐"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      icon: "📱"
    },
    {
      title: "Cloud Solutions & DevOps",
      description: "Cloud infrastructure setup, deployment automation, and scalable architecture design for modern applications.",
      icon: "☁️"
    },
    {
      title: "Technical Consulting",
      description: "Strategic technology consulting, architecture review, and technical guidance for your digital transformation journey.",
      icon: "🔧"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p className="section-subtitle">
            Comprehensive software development and AI solutions for modern businesses
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
