
import React from 'react';

const categories = [
  {
    title: 'Precision Haircare',
    description: 'Elevating every strand with salon-exclusive formulas.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    title: 'Aesthetic Skin',
    description: 'Clinical-grade solutions for radiance.',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800',
    span: 'md:col-span-1'
  },
  {
    title: 'Elite Equipment',
    description: 'Designing the modern salon space.',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800',
    span: 'md:col-span-1 md:row-span-2'
  },
  {
    title: 'Luxe Cosmetics',
    description: 'Artistry tools for professionals.',
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=800',
    span: 'md:col-span-1'
  }
];

const Categories: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-5xl font-bold text-stone-900 mb-4 leading-tight">Expertly <br /><span className="text-gold italic serif font-normal">Categorized</span></h2>
          <div className="w-20 h-1 bg-gold"></div>
        </div>
        <p className="text-stone-500 max-w-sm">
          Discover our curated collections, designed exclusively for the needs of the modern Tasmanian professional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        {categories.map((cat, idx) => (
          <div key={idx} className={`group relative overflow-hidden rounded-3xl cursor-pointer bento-card ${cat.span}`}>
            <img 
              src={cat.image} 
              alt={cat.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-gold transition-colors">{cat.title}</h3>
              <p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Brands Ticker */}
      <div className="mt-24 py-12 border-y border-stone-200 overflow-hidden relative">
        <div className="animate-marquee whitespace-nowrap">
          {['L\'ORÉAL', 'WELLA', 'REDKEN', 'GHD', 'KEVIN MURPHY', 'MATRIX', 'MOROCCANOIL', 'DERMALOGICA'].map((brand, i) => (
            <span key={i} className="text-stone-300 text-4xl font-bold mx-12 tracking-widest uppercase hover:text-gold transition-colors cursor-default">
              {brand}
            </span>
          ))}
          {['L\'ORÉAL', 'WELLA', 'REDKEN', 'GHD', 'KEVIN MURPHY', 'MATRIX', 'MOROCCANOIL', 'DERMALOGICA'].map((brand, i) => (
            <span key={`dup-${i}`} className="text-stone-300 text-4xl font-bold mx-12 tracking-widest uppercase hover:text-gold transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
