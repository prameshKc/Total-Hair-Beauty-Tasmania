
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, UserCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'glass-nav py-3 border-b border-stone-200' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <div className="flex flex-col">
              <span className={`text-2xl font-bold tracking-tighter serif leading-none ${scrolled ? 'text-stone-900' : 'text-white'}`}>
                TOTAL <span className="text-gold italic">HB</span>
              </span>
              <span className={`text-[10px] tracking-[0.4em] font-bold uppercase ${scrolled ? 'text-stone-500' : 'text-stone-400'}`}>Tasmania</span>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center space-x-10">
              {['Collection', 'Categories', 'Concierge', 'Showroom'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className={`text-sm font-semibold tracking-widest uppercase transition-all relative group ${scrolled ? 'text-stone-600' : 'text-stone-200'} hover:text-gold`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <div className={`h-8 w-[1px] ${scrolled ? 'bg-stone-200' : 'bg-white/10'}`}></div>
            <button className={`${scrolled ? 'text-stone-600' : 'text-white'} hover:text-gold transition-colors`}>
              <Search size={18} />
            </button>
            <button className={`${scrolled ? 'text-stone-600' : 'text-white'} hover:text-gold transition-colors relative`}>
              <ShoppingBag size={18} />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold text-[10px] text-white flex items-center justify-center rounded-full">0</span>
            </button>
            <button className="flex items-center space-x-2 bg-stone-900 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold transition-all shadow-lg">
              <UserCircle size={16} />
              <span>Login</span>
            </button>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
             <button className={`${scrolled ? 'text-stone-900' : 'text-white'}`}>
                <ShoppingBag size={24} />
             </button>
             <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-stone-900' : 'text-white'}>
                {isOpen ? <X size={30} /> : <Menu size={30} />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-0 h-screen bg-stone-900 z-50 flex flex-col p-10 animate-fade-in">
          <div className="flex justify-between items-center mb-16">
            <span className="text-2xl font-bold text-white serif">TOTAL <span className="text-gold italic">HB</span></span>
            <button onClick={() => setIsOpen(false)} className="text-white"><X size={32} /></button>
          </div>
          <div className="space-y-8 flex flex-col items-center">
            {['Home', 'Categories', 'Concierge', 'Location'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bold text-white hover:text-gold transition-colors serif"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="mt-auto pb-12">
            <button className="w-full bg-gold text-white py-5 rounded-2xl font-bold uppercase tracking-widest">
              Professional Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
