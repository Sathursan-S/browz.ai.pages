
import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Brain, Globe, MessageSquare, LayoutTemplate, ShieldCheck, PlayCircle, Server } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Architecture: React.FC = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = React.useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 3D Tilt Effect based on scroll
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const steps = [
    { ...t('architecture.steps')[0], id: 1, icon: MessageSquare, color: "text-primary-400", bg: "bg-primary-400/10", border: "border-primary-400/20" },
    { ...t('architecture.steps')[1], id: 2, icon: LayoutTemplate, color: "text-secondary-400", bg: "bg-secondary-400/10", border: "border-secondary-400/20" },
    { ...t('architecture.steps')[2], id: 3, icon: Brain, color: "text-accent-400", bg: "bg-accent-400/10", border: "border-accent-400/20" },
    { ...t('architecture.steps')[3], id: 4, icon: Server, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
    { ...t('architecture.steps')[4], id: 5, icon: Globe, color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
    { ...t('architecture.steps')[5], id: 6, icon: ShieldCheck, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" }
  ];

  // Auto-play effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="architecture" ref={containerRef} className="py-32 border-y border-white/5 bg-[#050505]/50 backdrop-blur-3xl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-secondary-400 font-mono text-sm tracking-widest uppercase bg-secondary-500/10 px-3 py-1 rounded-full border border-secondary-500/20">{t('architecture.subtitle')}</span>
          <h3 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">{t('architecture.title')}</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('architecture.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Graph Side with 3D Transform */}
          <motion.div 
            style={{ rotateX, scale, perspective: 1000 }}
            className="relative aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-white/5 to-transparent rounded-[2rem] border border-white/10 p-8 flex items-center justify-center shadow-2xl overflow-hidden backdrop-blur-md"
          >
            {/* Connecting Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-[70%] h-[70%] border border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
               <div className="w-[50%] h-[50%] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
            </div>

            {/* Central Brain */}
            <motion.div 
               animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 40px rgba(168,85,247,0.2)", "0 0 80px rgba(168,85,247,0.4)", "0 0 40px rgba(168,85,247,0.2)"] }}
               transition={{ duration: 3, repeat: Infinity }}
               className="relative z-10 w-32 h-32 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center shadow-2xl border border-white/20"
            >
               <Brain className="w-14 h-14 text-white" />
            </motion.div>

            {/* Orbiting Nodes */}
            {steps.map((step, index) => {
               const angle = (index * 360) / steps.length;
               const radius = 140; // distance from center
               const isActive = index === activeStep;
               
               // Calculate position
               const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius; // -90 to start top
               const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

               return (
                 <motion.div
                   key={step.id}
                   className={`absolute w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 z-10 backdrop-blur-md ${isActive ? `scale-110 shadow-[0_0_30px_rgba(168,85,247,0.4)] ${step.bg} ${step.color} border-2 ${step.border}` : 'bg-black/40 text-gray-600 border border-white/5'}`}
                   style={{ 
                     transform: `translate(${x}px, ${y}px)`,
                   }}
                 >
                    <step.icon className="w-7 h-7" />
                 </motion.div>
               );
            })}
          </motion.div>

          {/* Explanation Side */}
          <div className="space-y-4">
             {steps.map((step, index) => (
               <div 
                 key={step.id}
                 onClick={() => setActiveStep(index)}
                 className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                   activeStep === index 
                     ? `bg-white/5 ${step.border} shadow-lg` 
                     : 'border-transparent hover:bg-white/5 opacity-50 hover:opacity-100'
                 }`}
               >
                 <div className="flex items-center space-x-4">
                   <div className={`p-3 rounded-xl ${step.bg}`}>
                     <step.icon className={`w-5 h-5 ${step.color}`} />
                   </div>
                   <div className="flex-1">
                     <h4 className={`font-bold text-lg ${activeStep === index ? 'text-white' : 'text-gray-400'}`}>
                       {step.title}
                     </h4>
                     <AnimatePresence>
                       {activeStep === index && (
                         <motion.p 
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: 'auto', opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           className="text-sm text-gray-400 mt-2 leading-relaxed"
                         >
                           {step.desc}
                         </motion.p>
                       )}
                     </AnimatePresence>
                   </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
