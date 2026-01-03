"use client";


import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Play, MessageCircle } from 'lucide-react';
import { Meteors } from '../ui/meteors';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] overflow-hidden pt-20 pb-0 text-center bg-black">
      
      {/* Layer 0: Video Background (Hidden by mask, revealed by text) */}
      <div className="absolute inset-0 z-0">
          <video 
            src="https://api.lunaranime.ru/static/intro.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
      </div>

      {/* Layer 1: Mask Layer (Black BG + White Text = Video Text) */}
      <div className="absolute inset-0 z-10 bg-black mix-blend-multiply flex flex-col items-center justify-center pointer-events-none select-none space-y-2">
          <div className="space-y-2 max-w-5xl mx-auto px-4 flex flex-col items-center w-full">
             {/* Spacer for Badge */}
             <div className="h-7 w-40 opacity-0"></div>
             
             {/* The Knockout Text - Reduced Size */}
             <h1 className="text-[12vw] md:text-[8rem] lg:text-[9rem] font-black text-white leading-none tracking-tighter font-mono py-2">
                LUNAR
             </h1>

             {/* Spacer for Subtitles/Buttons */}
             <div className="h-20 w-full opacity-0"></div>
          </div>
      </div>

      {/* Layer 2: Meteors (On top of black mask) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
         <Meteors number={7} />
      </div>

      {/* Layer 3: Content Layer (Badge, Subtitles, Buttons) */}
      <div className="relative z-30 space-y-2 max-w-5xl mx-auto px-4 flex flex-col items-center w-full">
        
        {/* Badge */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
          <div className="rounded-md font-semibold transition-colors shadow bg-indigo-500/20 text-indigo-500 border border-indigo-500 px-3 py-1 text-xs inline-flex items-center gap-1.5 cursor-default hover:bg-indigo-500/30 backdrop-blur-md font-mono">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            0 users watching now
          </div>
        </motion.div>

        {/* Invisible Text to hold layout space matching Layer 1 - Reduced Size */}
        <motion.div 
            className="relative w-full select-none pointer-events-none"
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.4, type: "spring", duration: 1.5 }}
        >
             <h1 className="text-[12vw] md:text-[8rem] lg:text-[9rem] font-black text-transparent leading-none tracking-tighter font-mono py-2">
                LUNAR
             </h1>
        </motion.div>

        {/* Subtitles & Buttons */}
        <div className="space-y-4 -mt-6 relative">
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mx-auto max-w-[700px] text-zinc-400 text-lg sm:text-xl font-mono"
            >
            Your Complete Anime Entertainment Platform
            </motion.p>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mx-auto max-w-[700px] text-xs text-zinc-500 sm:text-sm font-mono"
            >
            Thousands of series in English & German and more
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-row gap-4 justify-center pt-2"
            >
            <Button className="h-11 px-8 bg-indigo-600 hover:bg-indigo-700 font-mono text-sm shadow-[0_0_25px_rgba(79,70,229,0.6)] hover:shadow-[0_0_40px_rgba(79,70,229,0.8)] transition-all duration-300 border border-indigo-500/50">
                <Play className="mr-2 h-4 w-4" fill="currentColor" /> Start Watching
            </Button>
            <Button variant="outline" className="h-11 px-8 border-zinc-700 hover:border-indigo-500 hover:text-indigo-500 bg-transparent font-mono text-sm">
                <MessageCircle className="mr-2 h-4 w-4" /> Discord
            </Button>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
