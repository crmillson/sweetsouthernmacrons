const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">Our Story</h2>
        <p className="section-subtitle">
          We bring the authentic taste of Paris to your doorstep with our 
          carefully crafted macarons made from the finest ingredients.
        </p>
        <div className="grid grid-2">
          <div className="about-card card">
            <div className="about-icon">🍃</div>
            <h3>Fresh Ingredients</h3>
            <p>We use only the finest, locally-sourced ingredients to ensure 
               every macaron is a masterpiece of flavor and texture.</p>
          </div>
          <div className="about-card card">
            <div className="about-icon">🎨</div>
            <h3>Artisanal Craft</h3>
            <p>Each macaron is handcrafted with precision and care, following 
               traditional French techniques passed down through generations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 