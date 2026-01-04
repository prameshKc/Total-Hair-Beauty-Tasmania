
import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-2xl font-bold serif mb-6 block">
              TOTAL <span className="text-beauty-gold italic">Hair & Beauty</span>
            </span>
            <p className="text-gray-400 mb-6 font-light leading-relaxed">
              Your professional wholesale partner in Tasmania. We supply only the best brands for hair and beauty experts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-beauty-gold transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-beauty-gold transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-beauty-gold transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-beauty-gold transition-colors"><Mail size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-beauty-gold transition-colors">Hair Products</a></li>
              <li><a href="#" className="hover:text-beauty-gold transition-colors">Beauty Supplies</a></li>
              <li><a href="#" className="hover:text-beauty-gold transition-colors">Salon Furniture</a></li>
              <li><a href="#" className="hover:text-beauty-gold transition-colors">Wholesale Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-beauty-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-beauty-gold transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-beauty-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-beauty-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">Join our professional network for exclusive wholesale offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-slate-800 border-none rounded-l-full px-4 py-2 w-full focus:ring-1 focus:ring-beauty-gold"
              />
              <button className="bg-beauty-gold px-4 py-2 rounded-r-full font-bold">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-10 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Total Hair & Beauty Tasmania. All rights reserved. 
            <br />
            <span className="text-[10px]">ABN: 12 345 678 910</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
