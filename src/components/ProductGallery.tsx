import React from 'react'

const ProductGallery = () => {
  const allMacarons = [
    {
      id: 1,
      name: 'Rose Petal',
      description: 'Delicate rose flavor with a hint of vanilla',
      price: '$3.50',
      color: 'rose-flavor'
    },
    {
      id: 2,
      name: 'Lavender Honey',
      description: 'Soothing lavender with sweet honey notes',
      price: '$3.50',
      color: 'lavender-flavor'
    },
    {
      id: 3,
      name: 'Salted Caramel',
      description: 'Rich caramel with a touch of sea salt',
      price: '$3.50',
      color: 'caramel-flavor'
    },
    {
      id: 4,
      name: 'Mint Chocolate',
      description: 'Fresh mint with dark chocolate ganache',
      price: '$3.50',
      color: 'mint-flavor'
    },
    {
      id: 5,
      name: 'Peach Blossom',
      description: 'Sweet peach with floral undertones',
      price: '$3.50',
      color: 'peach-flavor'
    },
    {
      id: 6,
      name: 'Vanilla Bean',
      description: 'Classic vanilla with real vanilla beans',
      price: '$3.50',
      color: 'vanilla-flavor'
    }
  ]

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Complete Collection</h2>
          <p className="section-subtitle">
            Explore our full range of handcrafted macarons, each with its own unique character
          </p>
        </div>
        
        <div className="gallery-grid">
          {allMacarons.map((macaron) => (
            <div key={macaron.id} className="gallery-card">
              <div className={`gallery-image ${macaron.color}`}>
                <span className="macaron-icon">🍪</span>
              </div>
              <div className="gallery-content">
                <h3 className="gallery-title">{macaron.name}</h3>
                <p className="gallery-description">{macaron.description}</p>
                <div className="gallery-footer">
                  <span className="gallery-price">{macaron.price}</span>
                  <button className="btn btn-small">Add to Order</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGallery 