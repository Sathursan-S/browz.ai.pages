
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Bot, Command, MousePointer2 } from 'lucide-react';
import { GITHUB_URL } from '../constants';
import { useLanguage } from './LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  // Mouse Parallax Effect State
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 15;
    const y = (clientY / innerHeight - 0.5) * 15;
    setMousePosition({ x, y });
  };

  return (
    <section 
      id="home" 
      ref={targetRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 perspective-1000"
    >
      <motion.div 
        style={{ opacity, scale, y }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-8 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          <span className="text-xs text-primary-200 tracking-wider uppercase font-medium">{t('hero.badge')}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
        >
          {t('hero.titlePrefix')} <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 text-glow">
            {t('hero.titleHighlight')}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-full hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <Bot className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>{t('hero.ctaDeploy')}</span>
          </a>
          <a
            href="#architecture"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-semibold rounded-full hover:bg-white/10 border border-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2 group"
          >
            <span>{t('hero.ctaResearch')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* 3D Visuals */}
        <div className="mt-24 relative h-80 w-full max-w-5xl mx-auto hidden md:block preserve-3d">
           {/* Card 1 - Left (Input) */}
           <motion.div 
             animate={{ 
               y: [0, -10, 0],
               rotateX: mousePosition.y * 0.5 + 5,
               rotateY: mousePosition.x * 0.5 - 5,
               z: 50
             }}
             transition={{ y: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
             className="absolute left-10 top-20 glass-card p-6 rounded-2xl border border-white/10 w-72 backdrop-blur-xl shadow-2xl z-10"
           >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg shadow-lg shadow-primary-500/20">
                  <Command className="w-5 h-5 text-white"/>
                </div>
                <div className="h-2 w-20 bg-white/20 rounded-full"></div>
              </div>
              <div className="bg-black/40 rounded-lg p-3 border border-white/5">
                <p className="text-sm text-primary-200 font-mono">"{t('hero.inputExample')}"</p>
              </div>
           </motion.div>

           {/* Card 2 - Center (Agent Brain) */}
           <motion.div 
             animate={{ 
               y: [0, -15, 0],
               rotateX: mousePosition.y,
               rotateY: mousePosition.x
             }}
             transition={{ y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 } }}
             className="absolute left-1/2 transform -translate-x-1/2 top-0 glass-card p-8 rounded-3xl border border-white/10 w-96 shadow-[0_0_50px_rgba(139,92,246,0.15)] z-20 backdrop-blur-2xl bg-[#0F0B1E]/80"
           >
              <div className="flex justify-between items-center mb-6">
                 <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                 </div>
                 <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">Orchestrator</span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Thinking...</span>
                  <span className="text-accent-400">98%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full bg-gradient-to-r from-primary-500 to-accent-500 w-3/4 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                 <div className="h-20 rounded-xl bg-white/5 border border-white/5"></div>
                 <div className="h-20 rounded-xl bg-white/5 border border-white/5"></div>
              </div>
           </motion.div>

           {/* Card 3 - Right (Action) */}
           <motion.div 
             animate={{ 
               y: [0, -12, 0],
               rotateX: mousePosition.y * 0.5 + 5,
               rotateY: mousePosition.x * 0.5 + 5,
               z: 50
              }}
             transition={{ y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 } }}
             className="absolute right-10 top-24 glass-card p-6 rounded-2xl border border-white/10 w-72 backdrop-blur-xl shadow-2xl z-10"
           >
              <div className="flex items-center justify-between mb-4">
                 <span className="text-xs text-gray-400 font-mono">EXECUTION</span>
                 <div className="p-2 bg-gradient-to-br from-accent-500 to-blue-600 rounded-lg shadow-lg shadow-blue-500/20">
                  <MousePointer2 className="w-5 h-5 text-white"/>
                </div>
              </div>
              <div className="space-y-2">
                 <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-400"></div>
                    <span className="text-xs text-gray-300">Clicking selector</span>
                 </div>
                 <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                    <span className="text-xs text-gray-500">Typing value</span>
                 </div>
              </div>
           </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
