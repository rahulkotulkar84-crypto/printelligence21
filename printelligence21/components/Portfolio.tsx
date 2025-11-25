'use client';
import Image from 'next/image';
export default function Portfolio(){ return (
  <section id="portfolio" className="container py-12">
    <h2 className="text-3xl font-semibold">Portfolio</h2>
    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {[...Array(8)].map((_,i)=>(
        <div key={i} className="h-40 card overflow-hidden relative">
          <Image src={`/assets/product_mockup_businesscard.jpg`} alt={`Project ${i+1}`} fill style={{objectFit:'cover'}} />
          <div className="absolute bottom-2 left-2 text-sm">Project {i+1}</div>
        </div>
      ))}
    </div>
  </section>
) }
