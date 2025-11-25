'use client';
import Image from 'next/image';
export default function Hero(){ return (
  <section className="container flex flex-col lg:flex-row items-center gap-8 py-12">
    <div className="flex-1">
      <h1 className="text-5xl text-white font-playfair">Where Luxury <span style={{color:'#D4AF37'}}>Meets Precision</span> in Printing</h1>
      <p className="mt-4 text-slate-300 max-w-xl">Bespoke materials, artisan finishing, and white-glove service — designed for brands that demand excellence.</p>
      <div className="mt-6 flex gap-4">
        <button className="px-6 py-3 bg-amber-400 text-[#0A1A35] rounded font-semibold">Explore Collection</button>
        <button className="px-6 py-3 border rounded">Book Consultation</button>
      </div>
      <div className="mt-6 text-sm text-slate-400">Trusted by 500+ luxury brands</div>
    </div>
    <div className="flex-1 relative">
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
        <Image src="/assets/hero_craftsmanship_1.jpg" alt="Hero" width={1200} height={700} style={{width:'100%', height:'auto'}} />
      </div>
    </div>
  </section>
) }
