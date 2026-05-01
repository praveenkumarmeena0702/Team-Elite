import { useApp } from '../context/AppContext'

export default function Cart() {
  const { cart, cartTotal, cartCount, changeQty, removeFromCart, showCart, setShowCart } = useApp()

  if (!showCart) return null

  return (
    <>
      <div className="cart-overlay" onClick={() => setShowCart(false)} />
      <div className="cart-drawer">
        <div className="cart-header">
          <h3>🛒 Your Cart {cartCount > 0 && `(${cartCount})`}</h3>
          <button className="cart-close-btn" onClick={() => setShowCart(false)}>✕</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <div style={{ fontSize: '3rem', marginBottom: 12 }}>☕</div>
              <p>Your cart is empty.</p>
              <p style={{ fontSize: '0.85rem', color: '#b06c22', marginTop: 6 }}>
                Add some coffee to get started!
              </p>
            </div>
          ) : (
            cart.map(item => (
              <div className="cart-item-row" key={item.name}>
                <img className="cart-item-img" src={item.img} alt={item.name} />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <span>{item.price}</span>
                </div>
                <div className="qty-controls">
                  <button className="qty-btn" onClick={() => changeQty(item.name, -1)}>−</button>
                  <span className="qty-num">{item.qty}</span>
                  <button className="qty-btn" onClick={() => changeQty(item.name, 1)}>+</button>
                </div>
                <button
                  onClick={() => removeFromCart(item.name)}
                  style={{
                    background: 'none', border: 'none',
                    color: '#ff6b6b', cursor: 'pointer',
                    fontSize: '1.1rem', marginLeft: 4,
                    transition: 'transform 0.2s',
                  }}
                  onMouseOver={e => e.target.style.transform = 'scale(1.2)'}
                  onMouseOut={e => e.target.style.transform = 'scale(1)'}
                  title="Remove"
                >🗑</button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span>₹{cartTotal}</span>
            </div>
            <button
              className="btn-custom"
              style={{ width: '100%', textAlign: 'center' }}
              onClick={() => alert('Checkout coming soon! 🚀')}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
