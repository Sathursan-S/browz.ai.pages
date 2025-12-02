
import React from 'react';
import { Plane, Mail, Database, FormInput } from 'lucide-react';
import { UseCase } from '../types';
import { useLanguage } from './LanguageContext';

const UseCases: React.FC = () => {
  const { t } = useLanguage();

  const cases: UseCase[] = [
    {
      title: t('useCases.list')[0].title,
      description: t('useCases.list')[0].desc,
      command: t('useCases.list')[0].cmd,
      icon: Plane,
    },
    {
      title: t('useCases.list')[1].title,
      description: t('useCases.list')[1].desc,
      command: t('useCases.list')[1].cmd,
      icon: Mail,
    },
    {
      title: t('useCases.list')[2].title,
      description: t('useCases.list')[2].desc,
      command: t('useCases.list')[2].cmd,
      icon: Database,
    },
    {
      title: t('useCases.list')[3].title,
      description: t('useCases.list')[3].desc,
      command: t('useCases.list')[3].cmd,
      icon: FormInput,
    },
  ];

  return (
    <section id="use-cases" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('useCases.title')}</h2>
           <p className="text-xl text-gray-400">{t('useCases.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((useCase, index) => (
            <div key={index} className="flex flex-col bg-[#0A0A0A] rounded-3xl border border-white/5 overflow-hidden hover:border-primary-500/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-primary-900/10">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary-500/10 transition-colors">
                    <useCase.icon className="w-6 h-6 text-white group-hover:text-primary-400 transition-colors" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">{useCase.title}</h4>
                </div>
                <p className="text-gray-400 mb-8 text-lg">{useCase.description}</p>
                
                <div className="bg-black/80 rounded-xl p-5 border border-white/5 group-hover:border-white/10 transition-colors">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    <span className="text-xs text-gray-500 ml-2 font-mono uppercase tracking-wider">Prompt</span>
                  </div>
                  <p className="text-primary-300 font-mono text-sm leading-relaxed">"{useCase.command}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
