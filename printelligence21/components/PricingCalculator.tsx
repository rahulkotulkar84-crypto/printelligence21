'use client';
export default function PricingCalculator(){ return (
  <section id="pricing" className="container py-12">
    <h2 className="text-3xl font-semibold">Pricing Calculator</h2>
    <div className="mt-6 grid md:grid-cols-2 gap-6">
      <div className="card">
        <label className="text-sm">Select product</label>
        <select className="w-full mt-2 p-2 bg-slate-800 rounded"><option>Business Cards</option></select>
        <label className="text-sm mt-4 block">Quantity</label>
        <input type="number" defaultValue={100} className="w-full mt-2 p-2 bg-slate-800 rounded"/>
        <div className="mt-4">Estimated total: <strong>$850</strong></div>
      </div>
      <div className="card">
        <h4 className="font-semibold">Compare with standard</h4>
        <div className="mt-3 text-sm">Standard: $420</div>
        <div className="mt-2">Printelligence: $850</div>
      </div>
    </div>
  </section>
) }
