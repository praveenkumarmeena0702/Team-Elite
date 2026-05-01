import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [user, setUser] = useState(null)           // logged-in user
  const [users, setUsers] = useState([])            // all registered users
  const [cart, setCart] = useState([])              // cart items
  const [page, setPage] = useState('home')          // 'home' | 'menu' | 'profile'
  const [showCart, setShowCart] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const login = (userData) => {
    setUser(userData)
    setUsers(prev => [...prev, userData])
    setShowModal(true)
    setTimeout(() => setShowModal(false), 3000)
  }

  const logout = () => {
    setUser(null)
    setPage('home')
  }

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(c => c.name === item.name)
      if (existing) {
        return prev.map(c => c.name === item.name ? { ...c, qty: c.qty + 1 } : c)
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const removeFromCart = (name) => {
    setCart(prev => prev.filter(c => c.name !== name))
  }

  const changeQty = (name, delta) => {
    setCart(prev => prev
      .map(c => c.name === name ? { ...c, qty: c.qty + delta } : c)
      .filter(c => c.qty > 0)
    )
  }

  const cartTotal = cart.reduce((sum, c) => {
    const price = parseInt(c.price.replace(/[^0-9]/g, ''))
    return sum + price * c.qty
  }, 0)

  const cartCount = cart.reduce((sum, c) => sum + c.qty, 0)

  return (
    <AppContext.Provider value={{
      user, login, logout,
      users,
      cart, addToCart, removeFromCart, changeQty, cartTotal, cartCount,
      page, setPage,
      showCart, setShowCart,
      showModal, setShowModal,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
