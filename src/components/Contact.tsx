import React from 'react'

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Ready to order? Have questions? We'd love to hear from you.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-items">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Bakery Street<br />Sweet City, SC 12345</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Call Us</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@macaronbakery.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <div>
                  <h4>Hours</h4>
                  <p>Mon-Sat: 8AM-8PM<br />Sunday: 9AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  placeholder="Your Phone" 
                />
              </div>
              <div className="form-group">
                <textarea 
                  placeholder="Your Message" 
                  rows={5}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 