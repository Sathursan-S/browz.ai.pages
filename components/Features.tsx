
import React from 'react';
import { Mic, Search, Layers, RefreshCw, Lock, MousePointerClick } from 'lucide-react';
import { Feature } from '../types';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features: Feature[] = [
    {
      title: t('features.list.naturalLanguage.title'),
      description: t('features.list.naturalLanguage.desc'),
      icon: Mic,
    },
    {
      title: t('features.list.domAnalysis.title'),
      description: t('features.list.domAnalysis.desc'),
      icon: Search,
    },
    {
      title: t('features.list.multiAgent.title'),
      description: t('features.list.multiAgent.desc'),
      icon: Layers,
    },
    {
      title: t('features.list.selfHealing.title'),
      description: t('features.list.selfHealing.desc'),
      icon: RefreshCw,
    },
    {
      title: t('features.list.privacy.title'),
      description: t('features.list.privacy.desc'),
      icon: Lock,
    },
    {
      title: t('features.list.playwright.title'),
      description: t('features.list.playwright.desc'),
      icon: MousePointerClick,
    },
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase bg-primary-500/10 px-3 py-1 rounded-full border border-primary-500/20">{t('features.subtitle')}</span>
          <h3 className="text-4xl md:text-5xl font-bold text-white mt-6">{t('features.title')}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Blob on Hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:bg-primary-500/20 group-hover:border-primary-500/30">
                  <feature.icon className="w-7 h-7 text-gray-300 group-hover:text-primary-400 transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-200 transition-colors">{feature.title}</h4>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;