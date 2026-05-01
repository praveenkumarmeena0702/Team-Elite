import { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'

const slides = [
  {
    bg: 'https://c4.wallpaperflare.com/wallpaper/826/178/391/coffee-beans-hot-cup-coffee-bag-wallpaper-preview.jpg',
    title: 'Fresh Coffee Every Morning',
    sub: 'Start your day with a perfect brew.',
    btn: 'Order Now',
  },
  {
    bg: 'https://c4.wallpaperflare.com/wallpaper/598/508/1011/coffee-spoon-cup-bag-wallpaper-preview.jpg',
    title: 'Rich Aroma, Perfect Taste',
    sub: 'Experience coffee crafted with passion.',
    btn: 'Explore Menu',
  },
  {
    bg: 'https://c4.wallpaperflare.com/wallpaper/315/69/166/drink-coffee-cup-coffee-beans-wallpaper-preview.jpg',
    title: 'Welcome to Cafena',
    sub: 'Where every sip tells a story.',
    btn: 'Visit Us',
  },
]

export default function Hero() {
  const { setPage } = useApp()
  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  const goTo = (idx) => {
    setCurrent(idx)
    setAnimKey(k => k + 1)
  }

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [current])

  const slide = slides[current]

  return (
    <section id="home" className="hero">
      <div
        className="carousel-slide"
        style={{ backgroundImage: `url('${slide.bg}')` }}
      >
        {/* dark overlay for readability */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.38)',
        }} />

        <div className="carousel-caption" key={animKey} style={{ position: 'relative', zIndex: 2 }}>
          <h1>{slide.title}</h1>
          <p>{slide.sub}</p>
          <button
            className="btn-custom"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {slide.btn}
          </button>
        </div>
      </div>

      <button className="carousel-btn-prev" onClick={() => goTo((current - 1 + slides.length) % slides.length)}>‹</button>
      <button className="carousel-btn-next" onClick={() => goTo((current + 1) % slides.length)}>›</button>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  )
}
