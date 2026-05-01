import React from 'react';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { user, page, setPage, cartCount, setShowCart } = useApp();

  return (
    <header className="bg-[#FDFCF8] dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 sticky top-0 z-50 shadow-[0px_10px_30px_rgba(198_150_82_0.05)]">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <div 
          className="font-serif text-3xl font-bold tracking-tighter text-[#12100E] dark:text-stone-100 cursor-pointer"
          onClick={() => setPage('home')}
        >
          Cafena
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <a 
            className={`font-serif text-lg tracking-tight hover:text-[#C69652] transition-colors duration-300 ${page === 'home' ? 'text-[#C69652] border-b-2 border-[#12100E] dark:border-stone-100 pb-1' : 'text-[#12100E] dark:text-stone-400 font-medium'}`}
            href="#" 
            onClick={(e) => { e.preventDefault(); setPage('home'); }}
          >
            Home
          </a>
          <a 
            className={`font-serif text-lg tracking-tight hover:text-[#C69652] transition-colors duration-300 ${page === 'about' ? 'text-[#C69652] border-b-2 border-[#12100E] dark:border-stone-100 pb-1' : 'text-[#12100E] dark:text-stone-400 font-medium'}`}
            href="#" 
            onClick={(e) => { e.preventDefault(); setPage('about'); }}
          >
            About Us
          </a>
          <a 
            className={`font-serif text-lg tracking-tight hover:text-[#C69652] transition-colors duration-300 ${page === 'menu' ? 'text-[#C69652] border-b-2 border-[#12100E] dark:border-stone-100 pb-1' : 'text-[#12100E] dark:text-stone-400 font-medium'}`}
            href="#" 
            onClick={(e) => { e.preventDefault(); setPage('menu'); }}
          >
            Our Menu
          </a>
          <a 
            className={`font-serif text-lg tracking-tight hover:text-[#C69652] transition-colors duration-300 ${page === 'contact' ? 'text-[#C69652] border-b-2 border-[#12100E] dark:border-stone-100 pb-1' : 'text-[#12100E] dark:text-stone-400 font-medium'}`}
            href="#" 
            onClick={(e) => { e.preventDefault(); setPage('contact'); }}
          >
            Contact
          </a>

          {user ? (
            <button 
              onClick={() => setPage('profile')}
              className={`flex items-center justify-center transition-colors duration-300 ${page === 'profile' ? 'text-[#C69652]' : 'text-[#12100E] dark:text-stone-400 hover:text-[#C69652]'}`}
              title="My Profile"
            >
              <span className="material-symbols-outlined text-2xl">person</span>
            </button>
          ) : (
            <a 
              className={`font-serif text-lg tracking-tight hover:text-[#C69652] transition-colors duration-300 ${page === 'login' ? 'text-[#C69652] border-b-2 border-[#12100E] dark:border-stone-100 pb-1' : 'text-[#12100E] dark:text-stone-400 font-medium'}`}
              href="#" 
              onClick={(e) => { e.preventDefault(); setPage('login'); }}
            >
              Login
            </a>
          )}
        </div>
        <div className="flex items-center gap-6">
          <button 
            className="text-[#12100E] dark:text-stone-100 hover:text-[#C69652] transition-colors duration-300 flex items-center justify-center relative"
            onClick={() => setShowCart(true)}
          >
            <span className="material-symbols-outlined text-2xl">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#C69652] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            onClick={() => setPage('menu')}
            className="bg-[#12100E] text-[#FDFCF8] font-label-caps text-label-caps px-8 py-3 tracking-widest uppercase transition-all hover:bg-on-tertiary-container active:scale-95 duration-150 ease-in-out"
          >
            Our Menu
          </button>
        </div>
      </nav>
    </header>
  );
}
