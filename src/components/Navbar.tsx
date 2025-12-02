
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ChevronDown } from 'lucide-react';
import { GITHUB_URL, PROJECT_NAME } from '../constants';
import { SectionId } from '../types';
import { useLanguage } from './LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const NavLink = ({ to, label }: { to: string; label: string }) => (
    <button
      onClick={() => scrollTo(to)}
      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium px-3 py-2"
    >
      {label}
    </button>
  );

  const toggleLanguage = (lang: 'en' | 'ta' | 'si') => {
    setLanguage(lang);
    setLangMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <nav 
        className={`
          transition-all duration-300 ease-in-out
          ${scrolled 
            ? 'glass-panel rounded-full px-6 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] bg-black/40' 
            : 'bg-transparent px-6 py-4'
          }
          w-full max-w-5xl flex items-center justify-between
        `}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => scrollTo(SectionId.HOME)}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg group-hover:shadow-primary-500/50 transition-shadow">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="text-lg font-bold text-white tracking-tight">
            {PROJECT_NAME}
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLink to={SectionId.FEATURES} label={t('nav.features')} />
          <NavLink to={SectionId.DEMOS} label={t('nav.demos')} />
          <NavLink to={SectionId.ARCHITECTURE} label={t('nav.architecture')} />
          <NavLink to={SectionId.USE_CASES} label={t('nav.useCases')} />
          <NavLink to={SectionId.TEAM} label={t('nav.team')} />
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-xs font-medium uppercase tracking-wide px-2 py-1 rounded hover:bg-white/5"
            >
              <span>{language}</span>
              <ChevronDown size={12} />
            </button>
            
            {langMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 glass-card rounded-xl overflow-hidden py-1 z-50 animate-fade-in">
                <button onClick={() => toggleLanguage('en')} className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 ${language === 'en' ? 'text-primary-400' : 'text-gray-300'}`}>English</button>
                <button onClick={() => toggleLanguage('ta')} className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 ${language === 'ta' ? 'text-primary-400' : 'text-gray-300'}`}>தமிழ்</button>
                <button onClick={() => toggleLanguage('si')} className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 ${language === 'si' ? 'text-primary-400' : 'text-gray-300'}`}>සිංහල</button>
              </div>
            )}
          </div>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
             <button 
                onClick={() => setLanguage(language === 'en' ? 'ta' : language === 'ta' ? 'si' : 'en')}
                className="text-gray-300 text-xs font-bold uppercase border border-white/20 rounded px-2 py-1"
              >
                {language}
              </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X /> : <Menu />}
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 glass-panel rounded-2xl p-6 flex flex-col space-y-4 md:hidden z-40 animate-fade-in-down">
          <NavLink to={SectionId.FEATURES} label={t('nav.features')} />
          <NavLink to={SectionId.DEMOS} label={t('nav.demos')} />
          <NavLink to={SectionId.ARCHITECTURE} label={t('nav.architecture')} />
          <NavLink to={SectionId.USE_CASES} label={t('nav.useCases')} />
          <NavLink to={SectionId.TEAM} label={t('nav.team')} />
          <div className="pt-4 border-t border-white/10 flex justify-center">
             <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-primary-400"
            >
              <Github size={18} />
              <span>{t('nav.viewCode')}</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
