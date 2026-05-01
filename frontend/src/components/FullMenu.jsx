import { useState } from 'react'
import { useApp } from '../context/AppContext'

const menuItems = [
  { name: 'Espresso',         price: '₹120', img: 'https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=898&auto=format&fit=crop',      desc: 'Strong and bold classic espresso.' },
  { name: 'Cappuccino',       price: '₹150', img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&fit=crop',                  desc: 'Espresso with rich steamed milk foam.' },
  { name: 'Latte',            price: '₹170', img: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?q=80&auto=format&fit=crop',                  desc: 'Smooth blend of espresso and milk.' },
  { name: 'Mocha',            price: '₹180', img: 'https://images.unsplash.com/photo-1691775755067-a9807ac8939c?w=800&auto=format&fit=crop',                  desc: 'Chocolate flavored coffee delight.' },
  { name: 'Americano',        price: '₹130', img: 'https://images.unsplash.com/photo-1593203807007-2439c613d615?q=80&auto=format&fit=crop',                  desc: 'Espresso diluted with hot water.' },
  { name: 'Caramel Macchiato',price: '₹200', img: 'https://plus.unsplash.com/premium_photo-1674327105076-36c4419864cf?q=80&auto=format&fit=crop',            desc: 'Espresso with caramel and milk.' },
  { name: 'Irish Coffee',     price: '₹220', img: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&auto=format&fit=crop',                  desc: 'Coffee with cream and Irish flavor.' },
  { name: 'Cold Brew',        price: '₹160', img: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&auto=format&fit=crop',                  desc: 'Slow brewed cold coffee.' },
]

export default function FullMenu() {
  const { setPage, addToCart, setShowCart } = useApp()
  const [added, setAdded] = useState({})

  const handleAdd = (item) => {
    addToCart(item)
    setAdded(prev => ({ ...prev, [item.name]: true }))
    setShowCart(true)
    setTimeout(() => setAdded(prev => ({ ...prev, [item.name]: false })), 1500)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#fff8f0', paddingTop: 70 }}>
      <div className="full-menu-header">CAFENA MENU</div>

      <div style={{ padding: '12px 20px' }}>
        <button className="back-btn" onClick={() => setPage('home')}>
          ← Back to Home
        </button>
      </div>

      <div className="full-menu-grid">
        {menuItems.map((item, i) => (
          <div
            className="full-menu-card"
            key={item.name}
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            <img src={item.img} alt={item.name} />
            <div className="card-title">{item.name}</div>
            <div className="card-desc">{item.desc}</div>
            <div className="card-price">{item.price}</div>
            <button
              className={`add-cart-btn ${added[item.name] ? 'added' : ''}`}
              onClick={() => handleAdd(item)}
            >
              {added[item.name] ? '✓ Added!' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>

      <footer>
        <p>©️ 2025 Cafena Coffee Shop | All Rights Reserved</p>
      </footer>
    </div>
  )
}
