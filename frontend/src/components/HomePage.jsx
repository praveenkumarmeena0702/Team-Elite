import React from 'react';
import { useApp } from '../context/AppContext';

export default function HomePage() {
  const { setPage, addToCart } = useApp();

  return (
    <>


      <main>
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" data-alt="A cinematic, high-angle shot of a master barista carefully pouring steamed milk into a dark, rich espresso to create intricate latte art. The lighting is warm and directional, highlighting the silky texture of the milk and the deep crema of the coffee. The background features the soft-focus atmosphere of a premium, modern-rustic roastery with cream-colored stone walls and subtle gold accents. The overall mood is artisanal, serene, and sophisticated." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkPxzk4o_PJc7fBByPCgCQB4XkcdxHgluwLUnQjd6uRWWR_pcR4TMXVnj45Eb76jHiMLk6lU8Jc9yFPcuBaRipAT_7YDEbcLMApPoODJxEoXTJfzb_CPQjvxGM_XaIIZitos5MnZhk5HU0CIHpL8esGkTi_pBtfsKh_1yFgvEurTPdon_6IoveAvqqNoAOH9Cvj4Azhh4caLVty76LENMcwvBRi0C7J6orJ5oDSu2axHmpHViQNfMKnfvR1mpKZqJF0keLt0y20CTF" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#12100E]/80 via-[#12100E]/40 to-transparent"></div>
          </div>
          {/* Hand-drawn Motif */}
          <div className="absolute top-20 right-[-50px] w-64 h-64 bg-illustration" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-5Qgq2_I5OqUfx61O--72wLV5ZecLt-XKsBJkquug2UqulQjTCFUyNOPVaiD6YpIPVXpz4EOh4V_TvkakBUyTsBLDpMDuifSUgLRg2uM8jG6Q8KOpn6Pj-vlNLn38COR6lMBnM9Pp3j6X1gD2ABmd7jtQ-SG8wlUL-006yE6az3Gd41Vi-M0BwMx0l2lk3q2ju_emkfJduRHmLt-VxpQaY-aObGFd6RJ7lCU9hgtmyY196ifckzd0-fHk8FEtDQS0U9EzOrb9elYK')" }}>
            <span className="material-symbols-outlined text-[120px] text-on-tertiary-container">coffee</span>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-2xl">
              <span className="font-label-caps text-label-caps text-on-tertiary-container block mb-6">ESTABLISHED 1994</span>
              <h1 className="font-headline-xl text-headline-xl text-white mb-8">Artisanal Coffee for Connoisseurs</h1>
              <p className="font-body-lg text-body-lg text-stone-300 mb-10 max-w-lg">Experience the journey of the bean from soil to sip. Hand-selected, master-roasted, and served with unwavering precision.</p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => setPage('menu')}
                  className="bg-on-tertiary-container text-white font-label-caps text-label-caps px-10 py-5 tracking-widest uppercase hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Explore Our Menu
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Roasts Section */}
        <section className="py-[120px] bg-surface relative">
          <div className="absolute left-[-40px] bottom-20 w-48 h-48 bg-illustration">
            <span className="material-symbols-outlined text-[80px] text-on-tertiary-container">eco</span>
          </div>
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <span className="font-label-caps text-label-caps text-on-tertiary-container block mb-4">SEASONAL SELECTION</span>
                <h2 className="font-headline-lg text-headline-lg text-primary">Featured Roasts</h2>
              </div>
              <a className="font-label-caps text-label-caps border-b border-primary pb-2 hover:text-on-tertiary-container transition-colors" href="#" onClick={(e) => { e.preventDefault(); setPage('menu'); }}>VIEW ALL VARIETIES</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Menu Card 1 */}
              <div className="group">
                <div className="mb-8 overflow-hidden bg-surface-container aspect-[4/5] relative">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Close-up of a premium bag of whole bean coffee resting on a rustic wooden counter." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHThwKhgcQF96GebLR3_-JYTdjoGq8ysJNciAl6rmVw316D5hMaM-10nLsyv9bJh0W6EIDUA816ETd1K8fGNQqAJAHoyo5nUltlIA8LmRrE13Gacactg7JYD0ft_5lD-m5TO_LbvKfbvCKksVFA7AfgyLTFS8zSAPCcTvNuLXKqsCHZZOf3k3fvvHywggQAxvNrNe02sRg8ij6XcI2BgY_6MjgczFFgU3rZgO_x3aVy9wE4epkkuAFUdifzrUyK-n0EJc_4GRBn67X" />
                  <div className="absolute top-4 right-4 bg-primary text-white font-label-caps text-[10px] px-3 py-1">LIGHT ROAST</div>
                </div>
                <div className="flex justify-between items-baseline border-b border-dotted border-outline-variant pb-2 mb-3">
                  <h3 className="font-headline-md text-price-display text-primary">Ethiopian Yirgacheffe</h3>
                  <span className="font-price-display text-price-display text-on-tertiary-container">₹28.00</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-label-caps text-[11px] text-outline">ORIGIN: SIDAMA</span>
                  <span className="text-outline">|</span>
                  <span className="font-label-caps text-[11px] text-outline">NOTES: JASMINE, CITRUS</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">A delicate, floral-forward cup with a bright acidity that defines the high-altitude Ethiopian terroir.</p>
                <button 
                  onClick={() => {
                    addToCart({
                      name: 'Ethiopian Yirgacheffe',
                      price: '₹28.00',
                      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHThwKhgcQF96GebLR3_-JYTdjoGq8ysJNciAl6rmVw316D5hMaM-10nLsyv9bJh0W6EIDUA816ETd1K8fGNQqAJAHoyo5nUltlIA8LmRrE13Gacactg7JYD0ft_5lD-m5TO_LbvKfbvCKksVFA7AfgyLTFS8zSAPCcTvNuLXKqsCHZZOf3k3fvvHywggQAxvNrNe02sRg8ij6XcI2BgY_6MjgczFFgU3rZgO_x3aVy9wE4epkkuAFUdifzrUyK-n0EJc_4GRBn67X'
                    });
                  }}
                  className="w-full border border-primary text-primary font-label-caps text-[12px] py-3 tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                  Add to Cart
                </button>
              </div>
              {/* Menu Card 2 */}
              <div className="group">
                <div className="mb-8 overflow-hidden bg-surface-container aspect-[4/5] relative">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A high-quality image of deep brown, oily espresso beans cascading into a modern black ceramic bowl." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqx_L2UrsPZSYBzfAKvRdHfFufWzCmgzJozzlKLkzwCAVZp46VeQ5bYuSJUy_koRRrpfxrUoGAozJGgVbI8NqaKJkz0wElBqyNk6MOYN5VEcFFeimdCefyXX8MNAnPxd7JZsBwT0O3hCHG4f6pG6iJvw4JRvrQU15ZLgbjhQZbgmGLbwVg5xACOXgFux4ZA3GrKg9gEa3tXhj4rtLqOcD_ZUCyZbT-ae7sBeAFRcClMGujjZ10uhYN0VBOrAxCc_EMXk5usArmFaYU" />
                  <div className="absolute top-4 right-4 bg-primary text-white font-label-caps text-[10px] px-3 py-1">DARK ROAST</div>
                </div>
                <div className="flex justify-between items-baseline border-b border-dotted border-outline-variant pb-2 mb-3">
                  <h3 className="font-headline-md text-price-display text-primary">Sumatran Mandheling</h3>
                  <span className="font-price-display text-price-display text-on-tertiary-container">₹24.00</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-label-caps text-[11px] text-outline">ORIGIN: INDONESIA</span>
                  <span className="text-outline">|</span>
                  <span className="font-label-caps text-[11px] text-outline">NOTES: EARTHY, SPICE</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Full-bodied and intense, our Sumatran beans are wet-hulled to produce a complex, herbal profile with low acidity.</p>
                <button 
                  onClick={() => {
                    addToCart({
                      name: 'Sumatran Mandheling',
                      price: '₹24.00',
                      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqx_L2UrsPZSYBzfAKvRdHfFufWzCmgzJozzlKLkzwCAVZp46VeQ5bYuSJUy_koRRrpfxrUoGAozJGgVbI8NqaKJkz0wElBqyNk6MOYN5VEcFFeimdCefyXX8MNAnPxd7JZsBwT0O3hCHG4f6pG6iJvw4JRvrQU15ZLgbjhQZbgmGLbwVg5xACOXgFux4ZA3GrKg9gEa3tXhj4rtLqOcD_ZUCyZbT-ae7sBeAFRcClMGujjZ10uhYN0VBOrAxCc_EMXk5usArmFaYU'
                    });
                  }}
                  className="w-full border border-primary text-primary font-label-caps text-[12px] py-3 tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                  Add to Cart
                </button>
              </div>
              {/* Menu Card 3 */}
              <div className="group">
                <div className="mb-8 overflow-hidden bg-surface-container aspect-[4/5] relative">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="An editorial style photograph of a V60 pour-over setup on a clean, cream-colored marble surface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw_xXGtSNuxqiH4uFWMAzo7RJiyJS9GHYRBN0I-T9WFOQbf0PT88EnVbpazkJL_0m-nWRn9c3BIKIrBkQW3tChUa1yRr2o3vaMDatsNLEVm2kmqLa2p_YtFh1-b7yweZRzcQFGr4BKCPnBnlmt31IJ74ty7xQ9tirSQgXpyDwh7Zba8nz-RPqeDczfS5SrWy6LwhBwOGbHVreubUj8cMQryIvsKFEMuxQSk9_Rm5saw-CqvowAAFIpiP7dJ0xjncKAw-c3BQYXVFsy" />
                  <div className="absolute top-4 right-4 bg-primary text-white font-label-caps text-[10px] px-3 py-1">MEDIUM ROAST</div>
                </div>
                <div className="flex justify-between items-baseline border-b border-dotted border-outline-variant pb-2 mb-3">
                  <h3 className="font-headline-md text-price-display text-primary">Guatemalan Antigua</h3>
                  <span className="font-price-display text-price-display text-on-tertiary-container">₹26.00</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-label-caps text-[11px] text-outline">ORIGIN: ANTIGUA VALLEY</span>
                  <span className="text-outline">|</span>
                  <span className="font-label-caps text-[11px] text-outline">NOTES: CHOCOLATE, SMOKE</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Cultivated in volcanic soil, this roast offers a balanced sweetness with distinctive smoky undertones and a cocoa finish.</p>
                <button 
                  onClick={() => {
                    addToCart({
                      name: 'Guatemalan Antigua',
                      price: '₹26.00',
                      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw_xXGtSNuxqiH4uFWMAzo7RJiyJS9GHYRBN0I-T9WFOQbf0PT88EnVbpazkJL_0m-nWRn9c3BIKIrBkQW3tChUa1yRr2o3vaMDatsNLEVm2kmqLa2p_YtFh1-b7yweZRzcQFGr4BKCPnBnlmt31IJ74ty7xQ9tirSQgXpyDwh7Zba8nz-RPqeDczfS5SrWy6LwhBwOGbHVreubUj8cMQryIvsKFEMuxQSk9_Rm5saw-CqvowAAFIpiP7dJ0xjncKAw-c3BQYXVFsy'
                    });
                  }}
                  className="w-full border border-primary text-primary font-label-caps text-[12px] py-3 tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="bg-primary text-white relative py-[120px] torn-paper-divider">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 border border-on-tertiary-container/30"></div>
                <img className="w-full h-auto object-cover custom-shadow relative z-10" data-alt="A portrait of a master roaster checking the color and aroma of roasted beans in a large professional roasting machine." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPU-sDfhcmSbTtvCDQ6UW4j2yjidhJY5SIJxocH6sekt6-_0jh0xbadOmuJWBXtkwLG6IKVePxnLnJW9vRB7eP6gr-9xik_3a73dDgS0HSwM78LjkKPWXDCcOJVhZ5Mkn78D7V3892v34pGkQfGNvbK1hJRMc3e6L6HJ8kcohDPV2C5zkA99urzFsKj2NgSz_9G4bPHx3UJ82CNFrgj1Q9qgJdbMluKfQzpaflscdUloTLaKtfHO5XpUckc2tONynQtXdhUyZJ1jJI" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-on-tertiary-container opacity-20"></div>
              </div>
              <div>
                <span className="font-label-caps text-label-caps text-on-tertiary-container block mb-6">OUR PHILOSOPHY</span>
                <h2 className="font-headline-lg text-headline-lg mb-8">Respecting the Bean, Honoring the Craft.</h2>
                <p className="font-body-lg text-body-lg text-stone-400 mb-10">
                  At Cafena, we believe that coffee is more than just a morning ritual—it is a symphony of geography, climate, and human labor. We work directly with small-scale farmers to ensure ethical practices and the highest quality yield. 
                </p>
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-on-tertiary-container text-on-tertiary-container">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>agriculture</span>
                    </div>
                    <div>
                      <h4 className="font-headline-md text-body-lg font-bold mb-2">Sustainable Sourcing</h4>
                      <p className="text-stone-500 font-body-md">Ensuring a future for specialty coffee through fair partnerships and regenerative farming.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-on-tertiary-container text-on-tertiary-container">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>precision_manufacturing</span>
                    </div>
                    <div>
                      <h4 className="font-headline-md text-body-lg font-bold mb-2">Precision Roasting</h4>
                      <p className="text-stone-500 font-body-md">Utilizing state-of-the-art roasting technology to unlock the unique flavor profile of every single origin.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / Editorial Callout */}
        <section className="py-[120px] bg-surface-container-low text-center">
          <div className="max-w-3xl mx-auto px-8">
            <span className="material-symbols-outlined text-[64px] text-on-tertiary-container mb-6">local_library</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Join the Connoisseurs Circle</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">Receive early access to our rarest micro-lots and invitations to private tasting events.</p>
            <form className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input className="flex-grow bg-transparent border-b border-primary py-4 px-2 font-label-caps focus:ring-0 focus:border-on-tertiary-container transition-all" placeholder="YOUR EMAIL ADDRESS" type="email" />
              <button type="submit" className="bg-primary text-white font-label-caps px-8 py-4 tracking-widest uppercase hover:bg-on-tertiary-container transition-all">SUBSCRIBE</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#12100E] dark:bg-stone-900 border-t border-stone-800">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-16 max-w-7xl mx-auto gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-xl font-bold text-[#C69652]">Cafena</div>
            <p className="font-serif text-sm tracking-wide uppercase text-[#FDFCF8] dark:text-stone-300">© 2024 Cafena Artisanal Roastery. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <a className="font-serif text-sm tracking-wide uppercase text-stone-400 hover:text-[#C69652] underline underline-offset-4 transition-all duration-500" href="#">Privacy Policy</a>
            <a className="font-serif text-sm tracking-wide uppercase text-stone-400 hover:text-[#C69652] underline underline-offset-4 transition-all duration-500" href="#">Terms of Service</a>
            <a className="font-serif text-sm tracking-wide uppercase text-stone-400 hover:text-[#C69652] underline underline-offset-4 transition-all duration-500" href="#">Shipping & Returns</a>
            <a className="font-serif text-sm tracking-wide uppercase text-stone-400 hover:text-[#C69652] underline underline-offset-4 transition-all duration-500" href="#">Wholesale</a>
          </div>
          <div className="flex gap-6">
            <a className="text-stone-400 hover:text-[#C69652] transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
            <a className="text-stone-400 hover:text-[#C69652] transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
            <a className="text-stone-400 hover:text-[#C69652] transition-colors" href="#"><span className="material-symbols-outlined">location_on</span></a>
          </div>
        </div>
      </footer>
    </>
  );
}
