
import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div id="location" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Visit Our Wholesaler</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-beauty-gold/10 p-4 rounded-2xl text-beauty-gold">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1 text-slate-800">Our Showroom</h4>
                <p className="text-gray-600">227 Main Rd, Derwent Park<br />Tasmania, 7009</p>
                <a href="#" className="text-beauty-gold font-semibold flex items-center mt-2 hover:underline">
                  <Navigation size={16} className="mr-1" /> Get Directions
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-beauty-gold/10 p-4 rounded-2xl text-beauty-gold">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1 text-slate-800">Phone Support</h4>
                <p className="text-gray-600">(03) 6273 7323</p>
                <p className="text-xs text-gray-400 mt-1 uppercase">Available during business hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-beauty-gold/10 p-4 rounded-2xl text-beauty-gold">
                <Clock size={28} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1 text-slate-800">Store Hours</h4>
                <div className="grid grid-cols-2 gap-4 text-gray-600">
                  <div>
                    <p className="font-medium">Monday - Friday</p>
                    <p>9:00 AM - 5:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Saturday</p>
                    <p>9:00 AM - 1:00 PM</p>
                  </div>
                </div>
                <p className="text-red-500 font-semibold mt-4 flex items-center text-sm">
                   <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
                   Currently Closed - Opens Monday at 9:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] border-4 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.3524584282035!2d147.2847595!3d-42.8443216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa6e73b64c740001%3A0x776d65600c8b67f1!2s227%20Main%20Rd%2C%20Derwent%20Park%20TAS%207009!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute top-4 left-4 right-4 bg-white/95 p-4 rounded-xl shadow-lg flex items-center justify-between">
             <div className="flex items-center space-x-3">
               <div className="w-10 h-10 bg-beauty-gold rounded-full flex items-center justify-center text-white font-bold">T</div>
               <div>
                  <h5 className="font-bold text-slate-800 leading-none">Total Hair & Beauty</h5>
                  <p className="text-xs text-gray-500">Beauty products wholesaler</p>
               </div>
             </div>
             <div className="flex items-center text-beauty-gold">
                <span className="font-bold mr-1">3.9</span>
                <div className="flex text-[10px]">
                  {[1,2,3,4].map(i => <span key={i}>★</span>)}
                  <span className="text-gray-300">★</span>
                </div>
                <span className="text-[10px] text-gray-500 ml-1">(28)</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
