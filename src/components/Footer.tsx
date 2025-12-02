
import React from 'react';
import { GITHUB_URL, PROJECT_NAME } from '../constants';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
             <span className="text-xs font-bold text-white">B</span>
          </div>
          <span className="text-sm font-bold text-gray-300">{PROJECT_NAME}</span>
        </div>
        
        <div className="flex items-center space-x-6 text-sm">
          <span className="text-gray-600">© {new Date().getFullYear()} University of Ruhuna</span>
          <a href={GITHUB_URL} className="text-gray-500 hover:text-white transition-colors">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
