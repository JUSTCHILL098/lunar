
import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Share2, Smartphone, Tablet, Laptop, Tv, Gamepad, ChevronLeft, ChevronRight, Check, X, Library, Globe, Calendar, Play } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

// Mock Data for Horizontal Marquee in Card 1
const libraryItems = [
  { title: "Attack on Titan", desc: "Humanity fights for survival against giant humanoid Titans." },
  { title: "Demon Slayer", desc: "A boy hunts demons to cure his sister who was turned into one." },
  { title: "One Piece", desc: "Pirates search for the ultimate treasure in a vast ocean world." },
  { title: "Jujutsu Kaisen", desc: "Students battle curses using special techniques and abilities." },
  { title: "My Hero Academia", desc: "In a world of superpowers, a boy without them strives to be a hero." },
  { title: "Chainsaw Man", desc: "A devil hunter merges with his pet devil to gain chainsaw powers." },
  { title: "Spy x Family", desc: "A spy, an assassin, and a telepath form a fake family for a mission." },
];

const NotificationItem = ({ title, time, desc, isNew }: any) => (
    <div className="flex items-start gap-3 p-3 rounded-lg border bg-zinc-950/50 border-white/10 mb-2 backdrop-blur-sm">
        <div className="mt-1 rounded-full p-1 bg-indigo-500/20">
            <Bell className="h-3 w-3 text-indigo-400" />
        </div>
        <div className="flex-1">
            <div className="flex items-center justify-between">
                <h4 className="text-xs font-medium text-white flex items-center font-mono">
                    {title}
                    {isNew && <span className="ml-2 bg-indigo-500 text-[9px] px-1 rounded text-white font-bold leading-none py-0.5">NEW</span>}
                </h4>
                <span className="text-[10px] text-zinc-500">{time}</span>
            </div>
            <p className="text-[10px] text-zinc-400 mt-1 font-mono leading-tight">{desc}</p>
            {isNew && (
                <div className="flex items-center mt-2 space-x-2">
                    <button className="flex items-center text-[9px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30 transition-colors">
                        <Check className="h-3 w-3 mr-1" /> Mark read
                    </button>
                    <button className="flex items-center text-[9px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 hover:bg-zinc-700 transition-colors">
                        <X className="h-3 w-3 mr-1" /> Dismiss
                    </button>
                </div>
            )}
        </div>
    </div>
);

const BentoGrid = () => {
  return (
    <section className="container mx-auto px-4 py-24 border-t border-zinc-800">
        <div className="mx-auto flex flex-col items-center text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white font-mono">
                Why Choose <span className="text-indigo-500">Lunar</span>?
            </h2>
            <p className="max-w-[85%] text-zinc-400 font-mono">The best anime streaming platform available</p>
        </div>

        <div className="grid w-full auto-rows-[22rem] grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
            
            {/* Card 1: Extensive Library (Horizontal Marquee) */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800 col-span-1 lg:col-span-1">
                <div className="absolute top-10 left-0 w-full overflow-hidden mask-gradient-b opacity-80">
                    <div className="flex animate-marquee gap-4 hover:[animation-play-state:paused] w-max">
                         {[...libraryItems, ...libraryItems].map((item, i) => (
                             <div key={i} className="relative w-40 p-4 rounded-xl border border-indigo-900/30 bg-indigo-950/10 hover:bg-indigo-950/20 transition-colors backdrop-blur-sm flex-shrink-0">
                                 <h4 className="text-sm font-medium text-white font-mono truncate">{item.title}</h4>
                                 <p className="text-[10px] text-zinc-400 mt-2 line-clamp-3 font-mono leading-relaxed">{item.desc}</p>
                             </div>
                         ))}
                    </div>
                </div>
                
                <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10 mt-auto bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pt-20">
                    <Library className="h-12 w-12 text-zinc-700 group-hover:scale-75 transition-all duration-300 ease-in-out origin-left mb-2" />
                    <h3 className="text-xl font-semibold text-white font-mono">Extensive Anime Library</h3>
                    <p className="text-sm text-zinc-400 font-mono">Access thousands of anime titles from every genre imaginable.</p>
                </div>

                <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-20">
                    <Button variant="ghost" size="sm" className="text-xs pointer-events-auto hover:bg-zinc-800 font-mono">
                        Browse Library <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Card 2: Notifications */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800 col-span-1 lg:col-span-2">
                <div className="absolute right-2 top-4 w-full max-w-sm h-[300px] scale-90 origin-top-right transition-all duration-300 group-hover:scale-95 z-0">
                     <div className="flex items-center justify-between mb-4 px-2">
                        <h3 className="text-sm font-medium text-white font-mono">Notifications</h3>
                        <div className="flex space-x-2">
                            <span className="px-2 py-1 text-[10px] rounded-md bg-indigo-500 text-white font-mono">All</span>
                            <span className="px-2 py-1 text-[10px] rounded-md bg-zinc-800 text-zinc-400 font-mono">Unread</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <NotificationItem title="Attack on Titan" time="Just now" desc="Season 4 Part 3 now available!" isNew={true} />
                        <NotificationItem title="Demon Slayer" time="2 hours ago" desc="New episode released!" isNew={true} />
                        <NotificationItem title="One Piece" time="Yesterday" desc="Episode 1067 is now streaming" isNew={false} />
                    </div>
                </div>
                
                <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10 mt-auto bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent w-full md:w-2/3">
                    <Bell className="h-12 w-12 text-zinc-700 group-hover:scale-75 transition-all duration-300 ease-in-out origin-left mb-2" />
                    <h3 className="text-xl font-semibold text-white font-mono">Anime Notifications</h3>
                    <p className="text-sm text-zinc-400 font-mono">Get notified when new episodes of your favorite anime are released.</p>
                </div>

                <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-20">
                    <Button variant="ghost" size="sm" className="text-xs pointer-events-auto hover:bg-zinc-800 font-mono">
                        Set Alerts <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Card 3: Cross Device Sync */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800 col-span-1 lg:col-span-2">
                 <div className="absolute right-2 top-4 w-full max-w-md h-[300px] flex flex-col items-center p-4 transition-all duration-300 group-hover:scale-105 origin-center">
                     <div className="text-center mb-6">
                        <h3 className="text-base font-medium text-white mb-1 font-mono">Continue Watching</h3>
                        <p className="text-xs text-zinc-400 font-mono">Sync across all your devices</p>
                     </div>
                     
                     <div className="w-full bg-zinc-900/50 p-4 rounded-lg border border-indigo-900/20 mb-6 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-2 font-mono">
                            <span className="text-xs font-medium text-white">Attack on Titan</span>
                            <span className="text-[10px] text-zinc-500">Episode 24</span>
                        </div>
                        <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500 w-[65%] rounded-full" />
                        </div>
                     </div>

                     <div className="grid grid-cols-5 gap-3 w-full">
                        {[
                            { icon: Smartphone, label: "Phone" },
                            { icon: Tablet, label: "Tablet" },
                            { icon: Laptop, label: "Laptop" },
                            { icon: Tv, label: "TV" },
                            { icon: Gamepad, label: "Console" }
                        ].map((device, i) => (
                            <div key={i} className="flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm">
                                <device.icon className="h-5 w-5 text-zinc-400 mb-1" />
                                <span className="text-[9px] text-zinc-500 font-mono">{device.label}</span>
                            </div>
                        ))}
                     </div>
                 </div>
                 
                 <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10 mt-auto bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent">
                    <Share2 className="h-12 w-12 text-zinc-700 group-hover:scale-75 transition-all duration-300 ease-in-out origin-left mb-2" />
                    <h3 className="text-xl font-semibold text-white font-mono">Cross-Device Sync</h3>
                    <p className="text-sm text-zinc-400 font-mono">Continue watching exactly where you left off on any device.</p>
                 </div>

                 <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-20">
                    <Button variant="ghost" size="sm" className="text-xs pointer-events-auto hover:bg-zinc-800 font-mono">
                        Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Card 4: Calendar */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800 col-span-1 lg:col-span-1">
                 <div className="absolute top-10 right-0 scale-75 origin-top-right transition-all duration-300 ease-out group-hover:scale-90">
                    <div className="bg-zinc-950 border border-indigo-800/20 rounded-md p-3 w-64 font-mono shadow-2xl">
                        <div className="flex justify-between items-center mb-4 text-xs text-white border-b border-zinc-800 pb-2">
                            <span>November 2025</span>
                            <div className="flex gap-1 text-zinc-500">
                                <ChevronLeft className="h-3 w-3 hover:text-white cursor-pointer" />
                                <ChevronRight className="h-3 w-3 hover:text-white cursor-pointer" />
                            </div>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-[10px] text-zinc-500 text-center mb-2">
                            <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-[10px] text-zinc-300 text-center">
                            {/* Spacer for empty start days */}
                            <div /><div /><div />
                            {[...Array(30)].map((_, i) => (
                                <div 
                                    key={i} 
                                    className={cn(
                                        "h-6 w-6 flex items-center justify-center rounded cursor-default", 
                                        i === 25 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' : 'hover:bg-zinc-900'
                                    )}
                                >
                                    {i + 1}
                                </div>
                            ))}
                        </div>
                    </div>
                 </div>

                 <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10 mt-auto bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent pt-20">
                    <Calendar className="h-12 w-12 text-zinc-700 group-hover:scale-75 transition-all duration-300 ease-in-out origin-left mb-2" />
                    <h3 className="text-xl font-semibold text-white font-mono">Release Calendar</h3>
                    <p className="text-sm text-zinc-400 font-mono">Track upcoming releases and never miss a premiere.</p>
                </div>

                <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-20">
                    <Button variant="ghost" size="sm" className="text-xs pointer-events-auto hover:bg-zinc-800 font-mono">
                        View Schedule <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>

        </div>
    </section>
  );
};

export default BentoGrid;
