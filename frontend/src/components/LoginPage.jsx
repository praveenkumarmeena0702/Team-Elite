import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function LoginPage() {
  const { login, user, setPage } = useApp();
  const [isRegistering, setIsRegistering] = useState(false);
  const [form, setForm] = useState({ username: '', email: '', password: '', phone: '', address: '' });
  const [errors, setErrors] = useState({});

  if (user) {
    setPage('profile');
    return null;
  }

  const emailRegex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i;
  const phoneRegex = /^[0-9]{10}$/;

  const validate = () => {
    const errs = {};
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!emailRegex.test(form.email)) errs.email = 'Invalid email format';
    
    if (!form.password.trim()) errs.password = 'Password is required';

    if (isRegistering) {
      if (!form.username.trim()) errs.username = 'Name is required';
      if (!form.phone.trim()) errs.phone = 'Phone number is required';
      else if (!phoneRegex.test(form.phone)) errs.phone = 'Must be 10 digits';
      if (!form.address.trim()) errs.address = 'Address is required';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    try {
      const endpoint = isRegistering ? '/api/auth/register' : '/api/auth/login';
      const bodyPayload = isRegistering 
        ? {
            username: form.username,
            email: form.email,
            password: form.password,
            phone: form.phone,
            address: form.address,
          }
        : {
            email: form.email,
            password: form.password,
          };

      const API_URL = import.meta.env.VITE_API_URL || '';
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyPayload),
      });

      if (!res.ok) {
        const msg = await res.text();
        setErrors({ general: msg || (isRegistering ? 'Registration failed' : 'Login failed') });
        return;
      }

      const data = await res.json();
      // On success, backend returns the user data
      login(data);
      setPage('profile');
      
    } catch (err) {
      setErrors({ general: 'Network error. Backend might be offline.' });
    }
  };

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center py-20 px-4 font-body-md text-on-surface">
      <div className="max-w-md w-full bg-surface-container-lowest p-10 rounded-xl shadow-[0px_20px_40px_rgba(198,150,82,0.06)] border border-outline-variant/30">
        <div className="text-center mb-8">
          <span className="material-symbols-outlined text-5xl text-on-tertiary-container mb-4">
            {isRegistering ? 'person_add' : 'lock_open'}
          </span>
          <h1 className="font-headline-lg text-3xl font-bold text-primary mb-2">
            {isRegistering ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="text-on-surface-variant text-sm">
            {isRegistering 
              ? 'Join Cafena and start earning rewards with every artisanal cup.' 
              : 'Sign in to access your order history and saved preferences.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {errors.general && (
            <div className="p-4 bg-error-container text-on-error-container text-sm rounded-lg border border-error/20 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">error</span>
              {errors.general}
            </div>
          )}

          {isRegistering && (
            <div>
              <label className="font-label-caps text-xs uppercase text-on-surface-variant block mb-2">Full Name</label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Arthur Morgan"
                className={`w-full bg-transparent border-0 border-b ${errors.username ? 'border-error' : 'border-outline'} focus:ring-0 focus:border-on-tertiary-container transition-all py-3 px-0 placeholder:text-outline-variant/60`}
              />
              {errors.username && <span className="text-error text-xs mt-1 block">{errors.username}</span>}
            </div>
          )}

          <div>
            <label className="font-label-caps text-xs uppercase text-on-surface-variant block mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="arthur@example.com"
              className={`w-full bg-transparent border-0 border-b ${errors.email ? 'border-error' : 'border-outline'} focus:ring-0 focus:border-on-tertiary-container transition-all py-3 px-0 placeholder:text-outline-variant/60`}
            />
            {errors.email && <span className="text-error text-xs mt-1 block">{errors.email}</span>}
          </div>

          <div>
            <label className="font-label-caps text-xs uppercase text-on-surface-variant block mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className={`w-full bg-transparent border-0 border-b ${errors.password ? 'border-error' : 'border-outline'} focus:ring-0 focus:border-on-tertiary-container transition-all py-3 px-0 placeholder:text-outline-variant/60`}
            />
            {errors.password && <span className="text-error text-xs mt-1 block">{errors.password}</span>}
          </div>

          {isRegistering && (
            <>
              <div>
                <label className="font-label-caps text-xs uppercase text-on-surface-variant block mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="1234567890"
                  className={`w-full bg-transparent border-0 border-b ${errors.phone ? 'border-error' : 'border-outline'} focus:ring-0 focus:border-on-tertiary-container transition-all py-3 px-0 placeholder:text-outline-variant/60`}
                />
                {errors.phone && <span className="text-error text-xs mt-1 block">{errors.phone}</span>}
              </div>

              <div>
                <label className="font-label-caps text-xs uppercase text-on-surface-variant block mb-2">Delivery Address</label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="123 Roastery Lane, Apt 4B"
                  rows="2"
                  className={`w-full bg-transparent border-0 border-b ${errors.address ? 'border-error' : 'border-outline'} focus:ring-0 focus:border-on-tertiary-container transition-all py-3 px-0 placeholder:text-outline-variant/60 resize-none`}
                />
                {errors.address && <span className="text-error text-xs mt-1 block">{errors.address}</span>}
              </div>
            </>
          )}

          <button 
            type="submit" 
            className="w-full bg-primary text-on-primary font-label-caps uppercase tracking-widest py-4 hover:bg-on-tertiary-container transition-colors duration-300 active:scale-[0.98]"
          >
            {isRegistering ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-outline-variant/30 pt-6">
          <p className="text-sm text-on-surface-variant">
            {isRegistering ? 'Already have an account?' : "Don't have an account?"}
          </p>
          <button 
            onClick={() => {
              setIsRegistering(!isRegistering);
              setErrors({});
            }}
            className="mt-2 font-label-caps text-xs uppercase text-on-tertiary-container hover:text-primary transition-colors underline underline-offset-4"
          >
            {isRegistering ? 'Sign in instead' : 'Create an account'}
          </button>
        </div>
      </div>
    </main>
  );
}
