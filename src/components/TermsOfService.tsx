import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="terms-of-service">
      <div className="container">
        <div className="page-header">
          <h1>Terms of Service</h1>
          <p className="last-updated">Last updated: January 2024</p>
        </div>
        
        <div className="terms-content">
          <section className="terms-section">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by Phanindra Allamsetty Inc ("Company," "we," "our," or "us"), 
              you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="terms-section">
            <h2>Description of Service</h2>
            <p>
              Phanindra Allamsetty Inc provides software development services, including but not limited to:
            </p>
            <ul>
              <li>Custom software application development</li>
              <li>Artificial intelligence and machine learning solutions</li>
              <li>Web and mobile application development</li>
              <li>Technical consulting and architecture services</li>
              <li>Cloud solutions and DevOps services</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>Client Responsibilities</h2>
            <p>As a client of our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information necessary for project completion</li>
              <li>Respond to requests for information in a timely manner</li>
              <li>Pay all fees according to the agreed terms</li>
              <li>Respect intellectual property rights</li>
              <li>Use our services in compliance with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>Intellectual Property</h2>
            <p>
              Upon full payment of all fees, clients will own the custom software developed specifically for them. 
              However, we retain the right to reusable code components, methodologies, and general knowledge gained 
              during the development process.
            </p>
          </section>

          <section className="terms-section">
            <h2>Limitation of Liability</h2>
            <p>
              In no event shall Phanindra Allamsetty Inc be liable for any indirect, incidental, special, 
              consequential, or punitive damages, including without limitation, loss of profits, data, use, 
              goodwill, or other intangible losses.
            </p>
          </section>

          <section className="terms-section">
            <h2>Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the United States, 
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="terms-section">
            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:legal@phanindra-allamsetty.com">legal@phanindra-allamsetty.com</a><br />
              Phone: +1 (234) 567-8900<br />
              Address: Phanindra Allamsetty Inc, United States
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
