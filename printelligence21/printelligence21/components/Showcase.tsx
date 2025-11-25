'use client';
export default function Showcase(){ return (
  <section className="container py-12">
    <h2 className="text-3xl font-semibold">Featured Clients</h2>
    <div className="mt-6 flex gap-4 overflow-x-auto py-4">
      {['Tiffany','Mercedes','Rolex','Chanel','Dior'].map((c)=>(
        <div key={c} className="min-w-[180px] card flex items-center justify-center">{c} Logo</div>
      ))}
    </div>
  </section>
) }
