import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Phanindra Allamsetty Inc</h2>
          <p className="section-subtitle">
            Leading the future of software development and artificial intelligence
          </p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Founded with a vision to bridge the gap between innovative technology and practical business solutions, 
              Phanindra Allamsetty Inc has established itself as a premier software development company specializing 
              in application development and AI solutions.
            </p>
            <p>
              Our expertise spans across full-stack development, machine learning, artificial intelligence, 
              and modern web technologies. We pride ourselves on delivering scalable, efficient, and 
              user-centric applications that drive business growth and digital transformation.
            </p>
            <p>
              With a commitment to excellence and innovation, we work closely with our clients to understand 
              their unique challenges and develop tailored solutions that exceed expectations.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
