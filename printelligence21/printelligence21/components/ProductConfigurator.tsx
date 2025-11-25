'use client';
import Image from 'next/image';
export default function ProductConfigurator(){
  return (
    <section id="products" className="container py-12">
      <h2 className="text-3xl font-semibold">Interactive Product Explorer</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="h-96 card flex items-center justify-center">
          <div>3D Configurator placeholder — integrate Three.js models here</div>
        </div>
        <div className="card">
          <h4 className="font-semibold">Material & Finish</h4>
          <p className="text-sm text-slate-300 mt-2">Choose from curated premium papers and artisan finishes.</p>
          <div className="mt-4">
            <label className="text-sm">Quantity</label>
            <input type="range" min={50} max={5000} defaultValue={100} className="w-full mt-2" />
            <div className="mt-3">Est. price: <strong>$850</strong></div>
            <div className="mt-4 flex gap-2"><button className="px-4 py-2 bg-amber-400 rounded">Save Design</button><button className="px-4 py-2 border rounded">Get Exact Quote</button></div>
          </div>
        </div>
      </div>
    </section>
  )
}
