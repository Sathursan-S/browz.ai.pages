
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { SectionId } from '../types';

const DemoSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id={SectionId.DEMOS} ref={ref} className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-accent-400 font-mono text-sm tracking-widest uppercase bg-accent-500/10 px-3 py-1 rounded-full border border-accent-500/20">{t('demos.subtitle')}</span>
          <h3 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-4">{t('demos.title')}</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('demos.desc')}
          </p>
        </div>

        <motion.div 
          style={{ rotateX, scale, opacity, transformPerspective: 1200 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Monitor Frame */}
          <div className="relative p-2 bg-gradient-to-b from-gray-700 to-gray-900 rounded-3xl shadow-2xl border border-gray-700">
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-inner group">
              {/* Screen Glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-20 pointer-events-none z-10"></div>
              
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/GtDspiaL5lk?si=Z-v-FP7kHO_B2br2"
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Stand (Visual) */}
          <div className="w-1/3 h-4 mx-auto bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-b-xl opacity-80 mt-[-2px]"></div>
          
          {/* Reflection Effect on Floor */}
          <div className="absolute top-full left-0 w-full h-32 bg-gradient-to-b from-primary-500/10 to-transparent transform scale-y-[-1] opacity-40 blur-xl rounded-t-3xl pointer-events-none mt-4"></div>
        </motion.div>

        {/* Secondary Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 max-w-4xl mx-auto">
           {[t('demos.video2'), 'Complex Form Filling'].map((title, i) => (
             <motion.div 
               key={i}
               whileHover={{ y: -5 }}
               className="glass-panel p-5 rounded-2xl flex items-center space-x-5 cursor-pointer hover:bg-white/5 transition-colors border border-white/5 hover:border-primary-500/30 group"
             >
                <div className="w-24 h-16 bg-black rounded-lg flex items-center justify-center relative overflow-hidden border border-white/10 group-hover:border-primary-500/50 transition-colors">
                   <Play className="w-8 h-8 text-gray-500 group-hover:text-primary-400 transition-colors" />
                </div>
                <div>
                  <h5 className="text-white font-bold text-lg">{title}</h5>
                  <p className="text-sm text-gray-500 group-hover:text-primary-300/70 transition-colors">{t('demos.comingSoon')}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
