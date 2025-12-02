
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, MessageSquareQuote } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-400 font-mono text-sm mb-4 tracking-widest">{t('about.concept')}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              "{t('about.quote')}"
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              {t('about.desc1')}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t('about.desc2')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-start space-x-3 hover:bg-white/10 transition-colors">
                  <Globe className="w-6 h-6 text-brand-400 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">{t('about.democratized')}</h4>
                    <p className="text-sm text-gray-500 mt-1">{t('about.democratizedDesc')}</p>
                  </div>
               </div>
               <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-start space-x-3 hover:bg-white/10 transition-colors">
                  <Cpu className="w-6 h-6 text-accent-400 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">{t('about.autonomous')}</h4>
                    <p className="text-sm text-gray-500 mt-1">{t('about.autonomousDesc')}</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-brand-500/10 blur-[100px] rounded-full"></div>
            
            <div className="relative glass-card rounded-2xl p-8 border border-white/10 shadow-2xl">
               <MessageSquareQuote className="w-12 h-12 text-brand-500 mb-6 opacity-50" />
               <p className="text-2xl font-light text-gray-200 italic mb-6 leading-relaxed">
                 "{t('about.authorQuote')}"
               </p>
               <div className="flex items-center space-x-4">
                 <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center font-bold text-xl border border-white/20">
                    S
                 </div>
                 <div>
                   <p className="text-white font-medium">Sathursan S.</p>
                   <p className="text-brand-400 text-sm">{t('about.role')}</p>
                 </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
