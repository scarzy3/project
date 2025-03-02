import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Demo } from './components/Demo';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Demo />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;