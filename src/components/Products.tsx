interface Product {
  id: number
  name: string
  description: string
  price: string
  flavor: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Rose Petal",
    description: "Delicate rose essence with a hint of vanilla, topped with edible rose petals.",
    price: "$3.50",
    flavor: "rose"
  },
  {
    id: 2,
    name: "Lavender Honey",
    description: "Soothing lavender paired with local honey for a floral, sweet experience.",
    price: "$3.50",
    flavor: "lavender"
  },
  {
    id: 3,
    name: "Mint Chocolate",
    description: "Refreshing mint ganache with dark chocolate for a classic combination.",
    price: "$3.50",
    flavor: "mint"
  },
  {
    id: 4,
    name: "Peach Bellini",
    description: "Fresh peach with a touch of prosecco for a sophisticated summer treat.",
    price: "$3.50",
    flavor: "peach"
  },
  {
    id: 5,
    name: "Vanilla Bean",
    description: "Classic vanilla bean with Madagascar vanilla for pure, creamy perfection.",
    price: "$3.50",
    flavor: "cream"
  },
  {
    id: 6,
    name: "Assorted Box",
    description: "Perfect variety pack featuring our most popular flavors in a beautiful gift box.",
    price: "$18.00",
    flavor: "mixed"
  }
]

const Products = () => {
  return (
    <section id="products" className="section products-section">
      <div className="container">
        <h2 className="section-title">Our Flavors</h2>
        <p className="section-subtitle">
          Explore our signature collection of handcrafted macarons, each with 
          its own unique personality and flavor profile.
        </p>
        <div className="grid grid-3">
          {products.map((product) => (
            <div key={product.id} className="product-card card">
              <div className={`product-image ${product.flavor}-flavor`}></div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="price">{product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products 