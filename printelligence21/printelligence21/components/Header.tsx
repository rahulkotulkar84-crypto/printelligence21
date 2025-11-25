'use client';
import Link from 'next/link';

export default function Header(){ return (
  <header className="container flex items-center justify-between py-6">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-[#0A1A35] font-bold">P</div>
      <div>
        <div className="text-xl font-semibold">Printelligence</div>
        <div className="text-xs text-slate-300">Luxury Printing & Design</div>
      </div>
    </div>
    <nav className="flex items-center gap-4">
      <Link href="#products">Products</Link>
      <Link href="#portfolio">Portfolio</Link>
      <Link href="#pricing">Pricing</Link>
      <button className="px-4 py-2 bg-amber-400 text-[#0A1A35] rounded">Book Consultation</button>
    </nav>
  </header>
) }
