
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Features from './Features';
import DemoSection from './DemoSection';
import Architecture from './Architecture';
import UseCases from './UseCases';
import Team from './Team';
import Footer from './Footer';
import Background from './Background';
import { LanguageProvider } from './LanguageContext';

const MainApp: React.FC = () => {
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

export default MainApp;
