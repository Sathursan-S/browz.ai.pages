
import React from 'react';
import { Linkedin } from 'lucide-react';
import { TeamMember } from '../types';
import { useLanguage } from './LanguageContext';

const Team: React.FC = () => {
  const { t } = useLanguage();

  const members: TeamMember[] = [
    {
      name: "Sathursan S",
      role: t('team.roleCore'),
      link: "https://www.linkedin.com/in/sathursan-suthakaran/"
    },
    {
      name: "Samyuktha V",
      role: t('team.roleCore'),
    },
    {
      name: "Dhahlan A.S.A",
      role: t('team.roleCore'),
    },
    {
      name: "Dr. Kushan Sudheera",
      role: t('team.roleSuper'),
    },
  ];

  return (
    <section id="team" className="py-32 border-t border-white/5 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-20">
          <span className="text-gray-500 font-mono text-xs tracking-[0.2em] uppercase">{t('team.subtitle')}</span>
          <h3 className="text-4xl font-bold text-white mt-4">{t('team.title')}</h3>
          <p className="text-gray-500 mt-4 whitespace-pre-line text-sm">{t('team.dept')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {members.map((member, index) => (
            <div key={index} className="text-center group relative">
               <div className="relative w-32 h-32 mx-auto mb-6">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                 <div className="relative w-full h-full bg-[#111] rounded-full flex items-center justify-center text-3xl font-bold text-gray-700 border border-white/10 group-hover:border-primary-500/50 transition-colors">
                    {member.name.charAt(0)}
                 </div>
               </div>
               <h4 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">{member.name}</h4>
               <p className="text-primary-500 text-sm mb-3 mt-1 font-medium">{member.role}</p>
               {member.link && (
                 <a href={member.link} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-8 h-8 text-gray-500 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full">
                   <Linkedin size={14} />
                 </a>
               )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;