import React from 'react';
import { useApp } from '../context/AppContext';

export default function MenuPage() {
  const { setPage, addToCart, setShowCart, cartCount } = useApp();

  const handleAddToCart = (name, price, img) => {
    addToCart({ name, price, img });
    setShowCart(true);
  };

  const drinksImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuDkxkEJGI2frIq162wK3prTipiegwz0vEw9G1t7Tz03Yz2D6Wy0RIekt7iDz0UpwUt1wDXKys74MM30SSWbh46eMU48xqq0yC8dgG22gB9SRBwFXTS3mX9RFOdvSyLTz_P9cY0FnQN7e7u8z5G17k0rZmK3DsobWFspNdfn3Sq91--bd-aMeXQqtA7N6lVEdTYBSmnNQzFfXF1S1JqCfkaHAbiznVc1Bqwz8ZVhvuDARHW1Moz-jHtdgzXbGxiUvdh0G5hdP3eCLD8z";
  const mealsImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuB3LDekoH_siv4v4SSnjXRoQGP1vGs_Xgn3CWRRnFziPap3obctUcKzpqxyMlPCw198Pr8cyhgn8bcP9BwhFwUpd-dTX__KQeGXQdVdNW3hevpQ1QEQdpga3Md0dUoN5-8OKTyxkBAmZFG1VXzmGwvm9bZTZBc_3hVhD_jVvTmuQMlHlv5Xvngeto_jdHYt5xLbqW8NiM1Kg4up-ThNFB_qNA_Aon3CiWkEfRx9JjRje0h1cRY-uTl0h2dAJZSZis8eU-0fdPK_99li";
  const dessertsImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuAYWQ1c-Sh7LBKjqrh24sWMmSvDEuE5RYvrs-JqgDrKpcDdE4gVCzQBHdkyt3dBetQx7xeHbewqDiSgRFQZ_0BTqBFJzNNLqU0eM_SEZTGG5FecxTFcG1FRFpluQ6DXHYWy2517dBiYmy5TyOOqwtWXe_AFcDhARkT81YDOXoF1O0d7txTAZWID3sGoBXJpkUbGao6V35glRkCcm0pU0A_IwuhzVklPWVurMNG2K_-lW9jionIJsFYHe62M-k5JNXSOBEAJWauskKtS";

  return (
    <>
      <main className="relative overflow-hidden bg-background text-on-background font-body-md">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-10 opacity-10 bean-bg select-none pointer-events-none">
          <span className="material-symbols-outlined text-[120px]" data-icon="coffee_bean">coffee</span>
        </div>
        <div className="absolute bottom-40 right-20 opacity-10 rotate-45 bean-bg select-none pointer-events-none">
          <span className="material-symbols-outlined text-[160px]" data-icon="coffee_bean">coffee</span>
        </div>
        
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 py-20 text-center relative z-10">
          <div className="mb-4">
            <span className="font-label-caps text-label-caps text-on-tertiary-container uppercase">Artisanal Excellence</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl mb-6">Signature Selection</h1>
          <p className="max-w-2xl mx-auto font-body-lg text-body-lg text-secondary">A curated collection of our finest roasts, seasonal ingredients, and artisanal creations designed to awaken your senses.</p>
        </section>

        {/* Menu Categories Grid */}
        <div className="max-w-7xl mx-auto px-8 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          {/* Drinks Column */}
          <section className="lg:col-span-4 flex flex-col gap-12">
            <div className="flex items-center gap-4 border-b border-outline-variant pb-4">
              <span className="material-symbols-outlined text-on-tertiary-container" data-icon="local_cafe">local_cafe</span>
              <h2 className="font-headline-lg text-headline-md">Drinks</h2>
            </div>
            <div className="flex flex-col gap-10">
              <div className="group cursor-default">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img alt="House Pour Over" className="w-full h-full object-cover filter grayscale sepia brightness-90 hover:grayscale-0 transition-all duration-700" src={drinksImage} />
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-headline-md text-xl font-bold group-hover:text-on-tertiary-container transition-colors">House Pour Over</h3>
                  <div className="dotted-leader"></div>
                  <div className="flex items-center gap-2">
                    <span className="font-price-display text-price-display">₹5.50</span>
                    <button onClick={() => handleAddToCart('House Pour Over', '₹5.50', drinksImage)} className="flex items-center justify-center p-1 rounded-full hover:bg-surface-container transition-colors text-on-tertiary-container" title="Add to Cart">
                      <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
                <p className="font-body-md text-secondary text-sm italic">Single origin Ethiopian beans with notes of jasmine and bergamot.</p>
                <div className="mt-2 flex gap-2">
                  <span className="font-label-caps text-[10px] text-outline px-2 border border-outline">LIGHT ROAST</span>
                  <span className="font-label-caps text-[10px] text-outline px-2 border border-outline">ETHIOPIA</span>
                </div>
              </div>

              <div className="group cursor-default">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img alt="Oat Milk Cortado" className="w-full h-full object-cover filter grayscale sepia brightness-90 hover:grayscale-0 transition-all duration-700" src={drinksImage} />
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-headline-md text-xl font-bold group-hover:text-on-tertiary-container transition-colors">Oat Milk Cortado</h3>
                  <div className="dotted-leader"></div>
                  <div className="flex items-center gap-2">
                    <span className="font-price-display text-price-display">₹4.75</span>
                    <button onClick={() => handleAddToCart('Oat Milk Cortado', '₹4.75', drinksImage)} className="flex items-center justify-center p-1 rounded-full hover:bg-surface-container transition-colors text-on-tertiary-container" title="Add to Cart">
                      <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
                <p className="font-body-md text-secondary text-sm italic">Double shot of espresso balanced with silky steamed oat milk.</p>
              </div>

              <div className="group cursor-default">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img alt="Honey Lavender Latte" className="w-full h-full object-cover filter grayscale sepia brightness-90 hover:grayscale-0 transition-all duration-700" src={drinksImage} />
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-headline-md text-xl font-bold group-hover:text-on-tertiary-container transition-colors">Honey Lavender Latte</h3>
                  <div className="dotted-leader"></div>
                  <div className="flex items-center gap-2">
                    <span className="font-price-display text-price-display">₹6.25</span>
                    <button onClick={() => handleAddToCart('Honey Lavender Latte', '₹6.25', drinksImage)} className="flex items-center justify-center p-1 rounded-full hover:bg-surface-container transition-colors text-on-tertiary-container" title="Add to Cart">
                      <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
                <p className="font-body-md text-secondary text-sm italic">Infused with house-made lavender syrup and local wildflower honey.</p>
              </div>

              <div className="group cursor-default">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img alt="Kyoto Cold Brew" className="w-full h-full object-cover filter grayscale sepia brightness-90 hover:grayscale-0 transition-all duration-700" src={drinksImage} />
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-headline-md text-xl font-bold group-hover:text-on-tertiary-container transition-colors">Kyoto Cold Brew</h3>
                  <div className="dotted-leader"></div>
                  <div className="flex items-center gap-2">
                    <span className="font-price-display text-price-display">₹5.00</span>
                    <button onClick={() => handleAddToCart('Kyoto Cold Brew', '₹5.00', drinksImage)} className="flex items-center justify-center p-1 rounded-full hover:bg-surface-container transition-colors text-on-tertiary-container" title="Add to Cart">
                      <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
                <p className="font-body-md text-secondary text-sm italic">Slow-dripped for 12 hours for a clean, tea-like finish.</p>
              </div>
            </div>
          </section>

          {/* Meals Column */}
          <section className="lg:col-span-4 flex flex-col gap-12">
            <div className="flex items-center gap-4 border-b border-outline-variant pb-4">
              <span className="material-symbols-outlined text-on-tertiary-container" data-icon="restaurant">restaurant</span>
              <h2 className="font-headline-lg text-headline-md">Meals</h2>
            </div>
            <div className="flex flex-col gap-10">
              <div className="group cursor-default">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img alt="Avocado Tartine" className="w-full h-full object-cover filter grayscale sepia brightness-90 hover:grayscale-0 transition-all duration-700" src={mealsImage} />
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-headline-md text-xl font-bold group-hover:text-on-tertiary-container transition-colors">Avocado Tartine</h3>
                  <div className="dotted-leader"></div>
                  <div className="flex items-center gap-2">
                    <span className="font-price-display text-price-display">₹14.00</span>
                    <button onClick={() => handleAddToCart('Avocado Tartine', '₹14.00', mealsImage)} className="flex items-center justify-center p-1 rounded-full hover:bg-surface-container transition-colors text-on-tertiary-container" title="Add to Cart">
                      <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
                <p className="font-body-md text-secondary text-sm italic">Sourdough toast, smashed avocado, chili flakes, and a poached organic egg.</p>
              </div>

              <div className="group cursor-default">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img alt="Grain Bowl" className="w-full h-full object-cover filter grayscale sepia brightness-90 hover:grayscale-0 transition-all duration-700" src={mealsImage} />
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-headline-md text-xl font-bold group-hover:text-on-tertiary-container transition-colors">Grain Bowl</h3>
                  <div className="dotted-leader"></div>
                  <div className="flex items-center gap-2">
                    <span className="font-price-display text-price-display">₹16.50</span>
                    <button onClick={() => handleAddToCart('Grain Bowl', '₹16.50', mealsImage)} className="flex items-center justify-center p-1 rounded-full hover:bg-surface-container transition-colors text-on-tertiary-container" title="Add to Cart">
                      <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
                <p className="font-body-md text-secondary text-sm italic">Quinoa, roasted seasonal vegetables, kale, and a tahini lemon dressing.</p>
              </div>

              <div className="group cursor-default">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img alt="Truffle Egg Sando" className="w-full h-full object-cover filter grayscale sepia brightness-90 hover:grayscale-0 transition-all duration-700" src={mealsImage} />
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-headline-md text-xl font-bold group-hover:text-on-tertiary-container transition-colors">Truffle Egg Sando</h3>
                  <div className="dotted-leader"></div>
                  <div className="flex items-center gap-2">
                    <span className="font-price-display text-price-display">₹12.00</span>
                    <button onClick={() => handleAddToCart('Truffle Egg Sando', '₹12.00', mealsImage)} className="flex items-center justify-center p-1 rounded-full hover:bg-surface-container transition-colors text-on-tertiary-container" title="Add to Cart">
                      <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
                <p className="font-body-md text-secondary text-sm italic">Soft scrambled eggs, truffle oil, and chives on a toasted brioche bun.</p>
              </div>

              <div className="group cursor-default">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img alt="Smoked Salmon Bagel" className="w-full h-full object-cover filter grayscale sepia brightness-90 hover:grayscale-0 transition-all duration-700" src={mealsImage} />
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-headline-md text-xl font-bold group-hover:text-on-tertiary-container transition-colors">Smoked Salmon Bagel</h3>
                  <div className="dotted-leader"></div>
                  <div className="flex items-center gap-2">
                    <span className="font-price-display text-price-display">₹15.00</span>
                    <button onClick={() => handleAddToCart('Smoked Salmon Bagel', '₹15.00', mealsImage)} className="flex items-center justify-center p-1 rounded-full hover:bg-surface-container transition-colors text-on-tertiary-container" title="Add to Cart">
                      <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
                <p className="font-body-md text-secondary text-sm italic">House-cured salmon, capers, red onion, and dill cream cheese.</p>
              </div>
            </div>
          </section>

          {/* Desserts Column */}
          <section className="lg:col-span-4 flex flex-col gap-12">
            <div className="flex items-center gap-4 border-b border-outline-variant pb-4">
              <span className="material-symbols-outlined text-on-tertiary-container" data-icon="cake">cake</span>
              <h2 className="font-headline-lg text-headline-md">Desserts</h2>
            </div>
            <div className="flex flex-col gap-10">
              <div className="group cursor-default">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img alt="Espresso Brownie" className="w-full h-full object-cover filter grayscale sepia brightness-90 hover:grayscale-0 transition-all duration-700" src={dessertsImage} />
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-headline-md text-xl font-bold group-hover:text-on-tertiary-container transition-colors">Espresso Brownie</h3>
                  <div className="dotted-leader"></div>
                  <div className="flex items-center gap-2">
                    <span className="font-price-display text-price-display">₹6.50</span>
                    <button onClick={() => handleAddToCart('Espresso Brownie', '₹6.50', dessertsImage)} className="flex items-center justify-center p-1 rounded-full hover:bg-surface-container transition-colors text-on-tertiary-container" title="Add to Cart">
                      <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
                <p className="font-body-md text-secondary text-sm italic">Fudgy dark chocolate brownie infused with our signature espresso roast.</p>
              </div>

              <div className="group cursor-default">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img alt="Lemon Poppyseed Loaf" className="w-full h-full object-cover filter grayscale sepia brightness-90 hover:grayscale-0 transition-all duration-700" src={dessertsImage} />
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-headline-md text-xl font-bold group-hover:text-on-tertiary-container transition-colors">Lemon Poppyseed Loaf</h3>
                  <div className="dotted-leader"></div>
                  <div className="flex items-center gap-2">
                    <span className="font-price-display text-price-display">₹5.00</span>
                    <button onClick={() => handleAddToCart('Lemon Poppyseed Loaf', '₹5.00', dessertsImage)} className="flex items-center justify-center p-1 rounded-full hover:bg-surface-container transition-colors text-on-tertiary-container" title="Add to Cart">
                      <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
                <p className="font-body-md text-secondary text-sm italic">Zesty lemon glaze with a moist, buttery crumb. Baked fresh daily.</p>
              </div>

              <div className="group cursor-default">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img alt="Sea Salt Cookie" className="w-full h-full object-cover filter grayscale sepia brightness-90 hover:grayscale-0 transition-all duration-700" src={dessertsImage} />
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-headline-md text-xl font-bold group-hover:text-on-tertiary-container transition-colors">Sea Salt Cookie</h3>
                  <div className="dotted-leader"></div>
                  <div className="flex items-center gap-2">
                    <span className="font-price-display text-price-display">₹4.50</span>
                    <button onClick={() => handleAddToCart('Sea Salt Cookie', '₹4.50', dessertsImage)} className="flex items-center justify-center p-1 rounded-full hover:bg-surface-container transition-colors text-on-tertiary-container" title="Add to Cart">
                      <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
                <p className="font-body-md text-secondary text-sm italic">Brown butter cookie with dark chocolate chunks and Maldon sea salt.</p>
              </div>

              <div className="group cursor-default">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img alt="Matcha Cheesecake" className="w-full h-full object-cover filter grayscale sepia brightness-90 hover:grayscale-0 transition-all duration-700" src={dessertsImage} />
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-headline-md text-xl font-bold group-hover:text-on-tertiary-container transition-colors">Matcha Cheesecake</h3>
                  <div className="dotted-leader"></div>
                  <div className="flex items-center gap-2">
                    <span className="font-price-display text-price-display">₹8.00</span>
                    <button onClick={() => handleAddToCart('Matcha Cheesecake', '₹8.00', dessertsImage)} className="flex items-center justify-center p-1 rounded-full hover:bg-surface-container transition-colors text-on-tertiary-container" title="Add to Cart">
                      <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
                <p className="font-body-md text-secondary text-sm italic">Creamy, vibrant matcha cheesecake with a toasted sesame crust.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Testimonials Section */}
        <section className="bg-surface-container py-24 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-4">
              <span className="font-label-caps text-label-caps text-on-tertiary-container uppercase">Testimonials</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg mb-16 text-on-surface">What Our Guests Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Review 1 */}
              <div className="flex flex-col items-center gap-6 p-8 bg-surface rounded-lg shadow-sm border border-outline-variant">
                <div className="flex text-on-tertiary-container">
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="font-body-md text-secondary italic">
                  "The best pour-over I've ever had. The atmosphere is serene and perfect for focusing on a good book."
                </p>
                <span className="font-label-caps text-label-caps text-primary">Eleanor Vance</span>
              </div>
              
              {/* Review 2 */}
              <div className="flex flex-col items-center gap-6 p-8 bg-surface rounded-lg shadow-sm border border-outline-variant">
                <div className="flex text-on-tertiary-container">
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="font-body-md text-secondary italic">
                  "The Truffle Egg Sando is a revelation. Truly artisanal food that complements their incredible coffee selection."
                </p>
                <span className="font-label-caps text-label-caps text-primary">Julian Thorne</span>
              </div>
              
              {/* Review 3 */}
              <div className="flex flex-col items-center gap-6 p-8 bg-surface rounded-lg shadow-sm border border-outline-variant">
                <div className="flex text-on-tertiary-container">
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="font-body-md text-secondary italic">
                  "An absolute gem in the city. The staff's knowledge of beans and brewing methods is truly impressive."
                </p>
                <span className="font-label-caps text-label-caps text-primary">Sophia Chen</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#12100E] dark:bg-stone-900 border-t border-stone-800 full-width bottom-0">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-16 max-w-7xl mx-auto gap-8">
          <div className="text-xl font-bold text-[#C69652]">Cafena</div>
          <div className="flex flex-wrap justify-center gap-8 font-serif text-sm tracking-wide uppercase">
            <a className="text-stone-400 hover:text-[#C69652] underline underline-offset-4 transition-all duration-500" href="#">Privacy Policy</a>
            <a className="text-stone-400 hover:text-[#C69652] underline underline-offset-4 transition-all duration-500" href="#">Terms of Service</a>
            <a className="text-stone-400 hover:text-[#C69652] underline underline-offset-4 transition-all duration-500" href="#">Shipping & Returns</a>
            <a className="text-stone-400 hover:text-[#C69652] underline underline-offset-4 transition-all duration-500" href="#">Wholesale</a>
          </div>
          <p className="text-[#FDFCF8] dark:text-stone-300 font-serif text-sm tracking-wide uppercase opacity-60">© 2024 Cafena Artisanal Roastery. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
