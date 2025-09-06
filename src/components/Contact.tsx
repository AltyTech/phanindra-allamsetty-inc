import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p className="section-subtitle">
            Ready to transform your ideas into innovative software solutions?
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>📧 Email</h3>
              <p><a href="mailto:contact@phanindra-allamsetty.com">contact@phanindra-allamsetty.com</a></p>
            </div>
            <div className="contact-item">
              <h3>📞 Phone</h3>
              <p><a href="tel:+1234567890">+1 (234) 567-8900</a></p>
            </div>
            <div className="contact-item">
              <h3>🏢 Business</h3>
              <p>Phanindra Allamsetty Inc<br />
              Software Development & AI Solutions<br />
              United States</p>
            </div>
            <div className="contact-item">
              <h3>⏰ Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM (EST)<br />
              Saturday: 10:00 AM - 4:00 PM (EST)<br />
              Sunday: Closed</p>
            </div>
          </div>
          <div className="contact-form">
            <h3>Get in Touch</h3>
            <form className="form">
              <div className="form-row">
                <input type="text" placeholder="Your Name" className="form-input" required />
                <input type="email" placeholder="Your Email" className="form-input" required />
              </div>
              <input type="text" placeholder="Subject" className="form-input" required />
              <textarea placeholder="Your Message" className="form-textarea" rows={5} required></textarea>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
