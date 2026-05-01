import { useApp } from '../context/AppContext'

const featured = [
  {
    img: 'https://c1.wallpaperflare.com/preview/486/244/921/coffee-leaves-cups-wooden.jpg',
    name: 'Espresso',
    desc: 'Strong and bold shot of pure coffee.',
    price: '₹120',
  },
  {
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=60',
    name: 'Cappuccino',
    desc: 'Perfect mix of espresso, milk & foam.',
    price: '₹150',
  },
  {
    img: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?q=80&auto=format&fit=crop',
    name: 'Latte',
    desc: 'Rich creamy coffee with steamed milk.',
    price: '₹180',
  },
  {
    img: 'https://images.unsplash.com/photo-1691775755067-a9807ac8939c?w=800&auto=format&fit=crop',
    name: 'Mocha',
    desc: 'Chocolate flavored coffee delight.',
    price: '₹200',
  },
]

export default function MenuSection() {
  const { setPage, addToCart, setShowCart } = useApp()

  const handleAdd = (item) => {
    addToCart(item)
    setShowCart(true)
  }

  return (
    <section id="menu">
      <h2 className="section-title">Our Coffee Menu</h2>

      <div className="menu-container">
        {featured.map((item, i) => (
          <div
            className="menu-item"
            key={item.name}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <span className="price">{item.price}</span>
            <br />
            <button
              className="btn-custom"
              style={{ marginTop: 10, padding: '7px 18px', fontSize: '0.82rem' }}
              onClick={() => handleAdd(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="view-more-container">
        <button className="btn-custom" onClick={() => setPage('menu')}>
          View More ›
        </button>
      </div>
    </section>
  )
}
