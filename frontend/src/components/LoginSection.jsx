import { useState } from 'react'
import { useApp } from '../context/AppContext'

export default function LoginSection() {
  const { login, user } = useApp()

  const [form, setForm] = useState({ username: '', email: '', password: '', phone: '' })
  const [errors, setErrors] = useState({})

  if (user) return null  // hide login if already logged in

  const emailRegex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/
  const phoneRegex = /^[0-9]{10}$/

  const validate = () => {
    const errs = {}
    if (!form.username.trim()) errs.username = 'Username is required'
    if (!form.email.trim())    errs.email    = 'Email is required'
    else if (!emailRegex.test(form.email)) errs.email = 'Invalid email format'
    if (!form.password.trim()) errs.password = 'Password is required'
    if (!form.phone.trim())    errs.phone    = 'Phone number is required'
    else if (!phoneRegex.test(form.phone)) errs.phone = 'Must be 10 digits'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    // Call Spring Boot API
    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password,
          phone: form.phone,
        }),
      })

      if (!res.ok) {
        const msg = await res.text()
        setErrors({ email: msg || 'Registration failed' })
        return
      }
    } catch {
      // Backend not running — proceed locally
      console.warn('Backend unavailable, using local state')
    }

    login({ username: form.username, email: form.email, phone: form.phone })
    setForm({ username: '', email: '', password: '', phone: '' })
    setErrors({})
  }

  const inputClass = (field) =>
    `form-input ${errors[field] ? 'invalid' : form[field] ? 'valid' : ''}`

  return (
    <section id="login" className="login-section">
      <h2 className="section-title">Login</h2>
      <div className="login-form-wrapper">
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="username"
            className={inputClass('username')}
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />
          {errors.username && <div className="error-msg">{errors.username}</div>}

          <input
            type="email"
            name="email"
            className={inputClass('email')}
            placeholder="Email / Gmail"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error-msg">{errors.email}</div>}

          <input
            type="password"
            name="password"
            className={inputClass('password')}
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error-msg">{errors.password}</div>}

          <input
            type="tel"
            name="phone"
            className={inputClass('phone')}
            placeholder="Phone Number (10 digits)"
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="error-msg">{errors.phone}</div>}

          <button type="submit" className="btn-custom" style={{ width: '100%', marginTop: 6 }}>
            Login / Register
          </button>
        </form>
      </div>
    </section>
  )
}
