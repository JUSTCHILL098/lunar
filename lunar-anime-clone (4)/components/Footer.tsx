import React from 'react';
import { IconMark } from './IconMark';

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-black pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <IconMark className="h-6 w-6 text-indigo-500" />
            <span className="text-lg font-bold text-white font-mono">LUNAR</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 font-mono">
            <a href="#overview" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">Overview</a>
            <a href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">Features</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">Terms</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">Privacy</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-xs text-zinc-500 font-mono">
          © 2025 Lunar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
