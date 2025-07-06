import React from 'react'

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Our Story</h2>
            <p className="about-description">
              We started as a small family bakery with a passion for creating the perfect macaron. 
              Every batch is made by hand using traditional French techniques and the finest ingredients 
              sourced from local suppliers.
            </p>
            <p className="about-description">
              Our commitment to quality and attention to detail has made us a favorite among 
              macaron lovers in the community. We believe that every bite should be a moment 
              of pure joy and indulgence.
            </p>
            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">🌟</span>
                <span className="feature-text">Handcrafted with Love</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🌱</span>
                <span className="feature-text">Premium Ingredients</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🎨</span>
                <span className="feature-text">Unique Flavors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 