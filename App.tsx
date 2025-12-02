
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import DemoSection from './components/DemoSection';
import Architecture from './components/Architecture';
import UseCases from './components/UseCases';
import Team from './components/Team';
import Footer from './components/Footer';
import Background from './components/Background';
import { LanguageProvider } from './components/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white selection:bg-brand-500 selection:text-white overflow-x-hidden">
        <Background />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Features />
          <DemoSection />
          <Architecture />
          <UseCases />
          <Team />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
