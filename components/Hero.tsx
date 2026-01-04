
import React from 'react';
import { ArrowRight, Award, ShieldCheck, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Salon" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 mb-6">
            <span className="h-[1px] w-12 bg-gold"></span>
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Premier Tasmanian Wholesale</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-[1.1]">
            Artistry <span className="text-gold italic font-normal serif italic">meets</span> Excellence.
          </h1>
          
          <p className="text-xl text-stone-300 mb-10 max-w-xl font-light leading-relaxed">
            Curating the world's most prestigious hair and beauty brands for Tasmania's professional elite. Excellence is our standard.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <button className="bg-gold text-white px-10 py-5 rounded-full font-bold flex items-center justify-center hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-xl">
              Enter Showroom
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all">
              Wholesale Application
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
            <div className="flex items-center space-x-3 text-white/80">
              <ShieldCheck className="text-gold" size={24} />
              <span className="text-sm">Verified Professional Supplier</span>
            </div>
            <div className="flex items-center space-x-3 text-white/80">
              <MapPin className="text-gold" size={24} />
              <span className="text-sm">Derwent Park, Hobart</span>
            </div>
            <div className="flex items-center space-x-3 text-white/80">
              <Award className="text-gold" size={24} />
              <span className="text-sm">Industry Leader Since 1994</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
