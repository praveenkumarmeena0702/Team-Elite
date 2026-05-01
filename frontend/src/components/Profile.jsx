import React from 'react';
import { useApp } from '../context/AppContext';

export default function Profile() {
  const { user, logout, cart, cartTotal, setPage } = useApp();

  if (!user) return null;

  const initials = user.username.slice(0, 2).toUpperCase();

  return (
    <main className="min-h-screen bg-surface font-body-md text-on-surface py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <button 
            className="flex items-center gap-2 font-label-caps text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setPage('home')}
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Back to Home
          </button>
        </div>

        <h2 className="font-headline-lg text-4xl text-primary mb-12 text-center">My Profile</h2>

        <div className="grid md:grid-cols-12 gap-8">
          {/* User Details Card */}
          <div className="md:col-span-5">
            <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 shadow-[0px_20px_40px_rgba(198,150,82,0.04)] text-center h-full">
              <div className="w-24 h-24 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-headline-md text-3xl mx-auto mb-6 shadow-md">
                {initials}
              </div>
              <h3 className="font-headline-md text-2xl text-primary mb-1">{user.username}</h3>
              <p className="text-secondary text-sm mb-8">Registered Member</p>
              
              <div className="space-y-4 text-left border-t border-outline-variant/30 pt-6">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-on-tertiary-container mt-1">mail</span>
                  <div>
                    <span className="block font-label-caps text-[10px] text-outline uppercase">Email Address</span>
                    <span className="text-on-surface">{user.email}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-on-tertiary-container mt-1">call</span>
                  <div>
                    <span className="block font-label-caps text-[10px] text-outline uppercase">Phone Number</span>
                    <span className="text-on-surface">{user.phone}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-on-tertiary-container mt-1">home_pin</span>
                  <div>
                    <span className="block font-label-caps text-[10px] text-outline uppercase">Delivery Address</span>
                    <span className="text-on-surface">{user.address || 'No address provided.'}</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-outline-variant/30 pt-6">
                <button 
                  className="flex items-center justify-center gap-2 w-full py-3 text-error hover:bg-error-container hover:text-on-error-container rounded-lg transition-colors font-label-caps text-xs uppercase tracking-widest"
                  onClick={logout}
                >
                  <span className="material-symbols-outlined text-lg">logout</span>
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Current Cart Summary */}
          <div className="md:col-span-7">
            <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30 h-full">
              <div className="flex items-center gap-3 mb-8 border-b border-outline-variant/30 pb-4">
                <span className="material-symbols-outlined text-on-tertiary-container text-2xl">shopping_bag</span>
                <h3 className="font-headline-md text-xl text-primary">Current Order Session</h3>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12 text-secondary">
                  <span className="material-symbols-outlined text-5xl mb-4 opacity-50">shopping_cart</span>
                  <p>Your cart is currently empty.</p>
                  <button 
                    className="mt-6 bg-primary text-on-primary px-8 py-3 font-label-caps text-xs uppercase tracking-widest hover:bg-on-tertiary-container transition-colors"
                    onClick={() => setPage('menu')}
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                    {cart.map(item => (
                      <div key={item.name} className="flex items-center gap-4 bg-surface p-4 rounded-lg border border-outline-variant/30">
                        <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                        <div className="flex-1">
                          <h4 className="font-bold text-on-surface">{item.name}</h4>
                          <span className="text-secondary text-sm">Qty: {item.qty}</span>
                        </div>
                        <div className="font-price-display font-bold text-on-tertiary-container">
                          ₹{(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.qty).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-outline-variant/30 pt-6 flex items-center justify-between">
                    <span className="font-headline-md text-lg text-primary">Estimated Total</span>
                    <span className="font-price-display text-2xl font-bold text-on-tertiary-container">₹{cartTotal}</span>
                  </div>

                  <button 
                    className="w-full mt-4 bg-tertiary-fixed text-on-tertiary-fixed py-4 font-label-caps text-sm uppercase tracking-widest hover:brightness-95 transition-all"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
