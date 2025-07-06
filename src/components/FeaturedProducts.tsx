import React from 'react'

const FeaturedProducts = () => {
  const featuredMacarons = [
    {
      id: 1,
      name: 'Cherry Limeade',
      description: 'Bright and zesty, like a Sonic cherry limeade—tangy lime cuts the sweet cherry for perfect balance.',
      price: '$3.00',
      color: 'cherry-limeade-flavor'
    },
    {
      id: 2,
      name: 'Blue Raspberry',
      description: 'Sweet-tart candy, lemonade freshness, with a nostalgic blue raspberry twist.',
      price: '$3.00',
      color: 'blue-raspberry-flavor'
    },
    {
      id: 3,
      name: 'Strawberry Lemonade',
      description: 'A classic blend—fresh strawberries with tart citrus, creamy and refreshing.',
      price: '$3.00',
      color: 'strawberry-lemonade-flavor'
    }
  ]

  return (
    <section className="featured-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Weekly Flavors</h2>
          <p className="section-subtitle">
            Beat the heat with our twist on tangy lemonade. 
          </p>
        </div>
        
        <div className="featured-grid">
          {featuredMacarons.map((macaron) => (
            <div key={macaron.id} className="featured-card">
              <div className={`featured-image ${macaron.color}`}>
                <span className="macaron-icon">🍪</span>
              </div>
              <div className="featured-content">
                <h3 className="featured-title">{macaron.name}</h3>
                <p className="featured-description">{macaron.description}</p>
                <div className="featured-price">{macaron.price}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="featured-cta">
          <button className="btn btn-primary">View All Flavors</button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts 