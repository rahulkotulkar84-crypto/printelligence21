'use client';
export default function AIAssistant(){ return (
  <section className="container py-12">
    <h2 className="text-3xl font-semibold">AI Design Assistant</h2>
    <div className="mt-6 grid md:grid-cols-3 gap-6">
      <div className="col-span-2 card">
        <p className="text-slate-300">Answer a few questions and get tailored templates and material recommendations.</p>
        <div className="mt-4 grid grid-cols-2 gap-3"><input placeholder="Business type" className="p-2 bg-slate-800 rounded"/><select className="p-2 bg-slate-800 rounded"><option>Style: Minimalist</option></select></div>
        <div className="mt-4"><button className="px-4 py-2 bg-amber-400 rounded">Start with AI</button></div>
      </div>
      <div className="card">
        <h4 className="font-semibold">Template Picks</h4>
        <ul className="mt-3 text-sm text-slate-300 space-y-2"><li>Luxury business card — foil edge</li><li>Folded invitation — letterpress</li></ul>
      </div>
    </div>
  </section>
) }
