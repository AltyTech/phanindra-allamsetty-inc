import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy">
      <div className="container">
        <div className="page-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: January 2024</p>
        </div>
        
        <div className="policy-content">
          <section className="policy-section">
            <h2>Information We Collect</h2>
            <p>
              Phanindra Allamsetty Inc ("we," "our," or "us") collects information you provide directly to us, 
              such as when you contact us for services, subscribe to our newsletter, or communicate with us.
            </p>
          </section>

          <section className="policy-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our software development services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, security alerts, and administrative messages</li>
              <li>Respond to your comments, questions, and provide customer service</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Information Sharing and Disclosure</h2>
            <p>
              We do not sell, rent, or share your personal information with third parties except as described in this policy. 
              We may share your information in certain limited circumstances, such as with your consent or to comply with legal obligations.
            </p>
          </section>

          <section className="policy-section">
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information 
              against unauthorized access, disclosure, alteration, or destruction.
            </p>
          </section>

          <section className="policy-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:privacy@phanindra-allamsetty.com">privacy@phanindra-allamsetty.com</a><br />
              Phone: +1 (234) 567-8900<br />
              Address: Phanindra Allamsetty Inc, United States
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
