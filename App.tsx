
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import AIConsultant from './components/AIConsultant';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <section id="categories" className="py-20 bg-white">
          <Categories />
        </section>
        <section id="consultant" className="py-20 bg-slate-900 text-white">
          <AIConsultant />
        </section>
        <section id="location" className="py-20 bg-gray-50">
          <ContactInfo />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
