import React from 'react';
import { useApp } from '../context/AppContext';

export default function AboutPage() {
  const { setPage } = useApp();

  return (
    <>
      {/* Main Content Canvas */}
      <main className="bg-surface text-on-surface selection:bg-on-tertiary-container selection:text-white font-body-md">
        {/* Hero Split Layout Section */}
        <section className="max-w-7xl mx-auto px-8 py-20 md:py-32 grid md:grid-cols-2 gap-16 items-center overflow-hidden">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="font-label-caps text-on-tertiary-container uppercase tracking-[0.2em] block">Our Heritage</span>
              <h1 className="font-headline-xl text-primary leading-none">Who's Behind Cafena</h1>
            </div>
            <div className="space-y-6 max-w-lg">
              <p className="font-body-lg text-on-surface-variant">
                Founded in the heart of the artisanal district, Cafena began as a small passion project between three lifelong friends who shared a singular obsession: the perfect pull. 
              </p>
              <p className="font-body-md text-on-surface-variant">
                We believe that coffee is more than just a morning ritual; it is a meticulous craft that bridges the gap between science and soul. Our team travels directly to high-altitude estates to source beans that tell a story of their origin, ensuring that every sip supports sustainable farming and unparalleled quality.
              </p>
              <div className="pt-4">
                <button className="border border-primary px-8 py-4 font-label-caps text-primary hover:bg-primary hover:text-white transition-all duration-300 active:scale-95">
                  MEET THE ROASTERS
                </button>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -top-10 -right-10 w-64 h-64 border border-outline-variant/30 rounded-full mix-blend-multiply pointer-events-none"></div>
            <div className="relative z-10 aspect-[4/5] overflow-hidden bg-surface-variant">
              <img className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700" data-alt="A focused professional barista in a leather apron carefully pouring steaming water from a gooseneck kettle into a glass pour-over dripper." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOtdlQQyzNVlarJbksrgCy4uL2mI6Vv6wHZ8X9UNYkyk8qLKHInY3s3UnFibueBcyoyl6Lf6GaI-imCRU9n7PH2HL71mOZ2sBJtgB_aZI5ePIX1AV4eM06Z8HS4EXp6R9BisXn71WDDP6cQZT52B-OYwy7aqEDdAyj7e42UEcsZSenoeuYPgBHvS4KGU2M7Jswt03fD0F-IjPu0Nilvoa2Wr68xMU7K07dFrxLcehqcLBW1HisIbe0-aX0LBBfOAL49Qy4priW4a48" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-tertiary-fixed text-on-tertiary-fixed p-8 max-w-[240px] shadow-xl">
              <p className="font-serif italic text-lg leading-relaxed">"We don't just roast beans; we preserve the character of the soil they grew in."</p>
              <p className="font-label-caps mt-4 text-xs">— MARCUS V., HEAD ROASTER</p>
            </div>
          </div>
        </section>

        {/* Decorative Background Motif */}
        <div className="w-full h-24 overflow-hidden opacity-10 pointer-events-none select-none">
          <div className="flex gap-20 justify-center animate-pulse">
            <span className="material-symbols-outlined text-6xl">coffee</span>
            <span className="material-symbols-outlined text-6xl">oven_gen</span>
            <span className="material-symbols-outlined text-6xl">coffee</span>
            <span className="material-symbols-outlined text-6xl">temp_preferences_custom</span>
            <span className="material-symbols-outlined text-6xl">coffee</span>
          </div>
        </div>

        {/* Key Stats Section */}
        <section className="bg-surface-container py-24 md:py-32 border-y border-outline-variant/20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
              <div className="text-center space-y-2 border-r border-outline-variant/30 last:border-0">
                <span className="font-headline-lg text-on-tertiary-container block">42+</span>
                <span className="font-label-caps text-on-surface-variant text-xs">Coffee Varieties</span>
              </div>
              <div className="text-center space-y-2 border-r border-outline-variant/30 last:border-0">
                <span className="font-headline-lg text-on-tertiary-container block">15k</span>
                <span className="font-label-caps text-on-surface-variant text-xs">Happy Customers</span>
              </div>
              <div className="text-center space-y-2 border-r border-outline-variant/30 last:border-0">
                <span className="font-headline-lg text-on-tertiary-container block">08</span>
                <span className="font-label-caps text-on-surface-variant text-xs">Master Roasters</span>
              </div>
              <div className="text-center space-y-2 border-r border-outline-variant/30 last:border-0">
                <span className="font-headline-lg text-on-tertiary-container block">12</span>
                <span className="font-label-caps text-on-surface-variant text-xs">Origin Countries</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="max-w-7xl mx-auto px-8 py-32 grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 flex items-center justify-center bg-on-tertiary-container/10 text-on-tertiary-container mb-6">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            </div>
            <h3 className="font-headline-md text-primary">Ethical Sourcing</h3>
            <p className="font-body-md text-on-surface-variant">We bypass traditional auction systems to pay farmers 30% above fair-trade market prices, ensuring the longevity of coffee heritage.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 flex items-center justify-center bg-on-tertiary-container/10 text-on-tertiary-container mb-6">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
            </div>
            <h3 className="font-headline-md text-primary">Precision Roasting</h3>
            <p className="font-body-md text-on-surface-variant">Each batch is monitored with digital precision but finished by the instinct of a master who understands the crack of the bean.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 flex items-center justify-center bg-on-tertiary-container/10 text-on-tertiary-container mb-6">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_cafe</span>
            </div>
            <h3 className="font-headline-md text-primary">The Freshness Vow</h3>
            <p className="font-body-md text-on-surface-variant">Our beans are shipped within 24 hours of roasting. If it's not fresh, it doesn't leave our doors. Quality is non-negotiable.</p>
          </div>
        </section>

        {/* Image Gallery / Visual Break */}
        <section className="w-full grid grid-cols-2 md:grid-cols-4 h-[400px]">
          <div className="overflow-hidden">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 grayscale-[30%] hover:grayscale-0" data-alt="..." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa2wZdQPiPV0x0nArj48hVmxc_rpUaZ1CY-3SipAS8na6o6q5jI9ja11D1QdpxsUSCafd-JpaihwOX1E_3gAwYvynuCvq8axVfc1TnsZXoTxliTaYXvQxLPXzxyuMvMZlau8XQ6-0BpzNVLe2ZxMUoo2-200z33Efzvg-OAoGv4IjHlKjmxSn2mWDNTCPjmdh2mBXPpUvRLJHfuVfONPvfDaJkwynHWi1uK1lCNxmZQayBZRPZr7t2J-faWdMBiqqYM78T1dl4WYqb" />
          </div>
          <div className="overflow-hidden">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 grayscale-[30%] hover:grayscale-0" data-alt="..." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeMrlcXHit3jxjoVnW3epM6FFOcOWoqW71f7ku1hM-PQca8lldGVjt_fFE1Ku24uz8ichI3uM7plikx_oIyjjx4Cuh_7X8MRTK6l8m18H9ziX3XOhTmXoT30Hxw-Mym6B7iDUGb3L9X5sctaq_TFPgtGizdxZJYqATootcNLBdwY901zE9k4yTw6b4XZLd5s3yMlDGiNY_zRcARrdfO64ni4-RSt8iRm7aVWJeb3QyY8jV3qqOseC9Rn9U2oKxYA9gkpzKHDCohD6Q" />
          </div>
          <div className="overflow-hidden">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 grayscale-[30%] hover:grayscale-0" data-alt="..." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLoNP9lsTL5uUquXPfSy9iaLDn-BC2Hc__IrcME5QZHXs1NRvCr0u9_394jZXIwN2Ur7PgHFpljwX3Qk_sY0xxFT3AMbDp5wwvGSKnlnCpzyyAzDIO92lL2S3A0jYbz_RubfJKA-OuPeOHxVAWiBvcM0RjCIZKdpeMSIPKKGGm6tF3qGwTXx_IilHdnmXHqzpaXIcX2xo_wMq0zRBVRotJK7AY5iSEMhzEZRiRnLGjV4GlQa_voGGW7qV9UZ_KDq1rVEaqU9Yt6pZ_" />
          </div>
          <div className="overflow-hidden">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 grayscale-[30%] hover:grayscale-0" data-alt="..." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ1ZZgvRA4htmP571WkDF6qiPqcJYI9IjF38ly2ur2vAHqDCc7aGnVd0hi6VEGVIq1KbycTrUzvDRqa8yXysNyYTvs8BAR8x8sQI52gXaGCnWOoouvZLMyQ33v-7ELhSYArt-w7StBrE6tt-C8Mp83zqtwaxiHVBWF5qGCA2bWYsn3usGiUGRwM8OCRbyPV4mvXHKKg-Ts7715Y9czDF-0pXbi9-rHSYywsW-5PsYEVLKSkX-_KK_9QFZyYi16pY6sTYXoRCdm0Gfj" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#12100E] dark:bg-stone-900 border-t border-stone-800 text-[#FDFCF8] dark:text-stone-300 relative mt-8">
        {/* Mountain-range Divider Mockup */}
        <div className="absolute top-0 left-0 w-full h-8 organic-divider bg-[#12100E] -translate-y-[99%]"></div>
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-16 max-w-7xl mx-auto gap-8">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <span className="text-xl font-bold text-[#C69652] font-headline-md tracking-tighter">Cafena</span>
            <p className="font-serif text-sm tracking-wide text-stone-400 max-w-xs text-center md:text-left">Artisanal Roastery dedicated to the pursuit of the perfect cup since 2014.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="font-serif text-sm tracking-wide uppercase text-stone-400 hover:text-[#C69652] underline underline-offset-4 transition-colors" href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a className="font-serif text-sm tracking-wide uppercase text-stone-400 hover:text-[#C69652] underline underline-offset-4 transition-colors" href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a>
            <a className="font-serif text-sm tracking-wide uppercase text-stone-400 hover:text-[#C69652] underline underline-offset-4 transition-colors" href="#" onClick={(e) => e.preventDefault()}>Shipping & Returns</a>
            <a className="font-serif text-sm tracking-wide uppercase text-stone-400 hover:text-[#C69652] underline underline-offset-4 transition-colors" href="#" onClick={(e) => e.preventDefault()}>Wholesale</a>
          </div>
          <p className="font-serif text-sm tracking-wide uppercase text-stone-500">© 2024 Cafena Artisanal Roastery. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
