
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import Hero from './components/sections/Hero';
import MarqueeStrip from './components/sections/MarqueeStrip';
import Overview from './components/sections/Overview';
import BentoGrid from './components/sections/BentoGrid';
import Footer from './components/Footer';
import { Home, Library, Heart, Search, User } from 'lucide-react';
import { Button } from './components/ui/button';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { IconMark } from './components/IconMark';

const navItems = [
  { name: "Home", url: "#", icon: Home },
  { name: "Browse", url: "#overview", icon: Library },
  { name: "Favorites", url: "#", icon: Heart },
  { name: "Search", url: "#", icon: Search },
  { name: "Profile", url: "#", icon: User },
];

function App() {
  const [provider, setProvider] = useState("1st");

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Navbar with Geist Mono & Shadcn integrated */}
      <Navbar 
        items={navItems} 
        onProviderChange={setProvider}
        defaultActive="Home"
      />

      <main className="flex flex-col min-h-screen">
        
        {/* Hero Section with Video BG */}
        <Hero />
        
        {/* Infinite Scrolling Anime Titles */}
        <MarqueeStrip />

        {/* Overview Cards */}
        <Overview />

        {/* Feature Highlights with Glassmorphism */}
        <section id="features" className="border-t border-zinc-800 bg-zinc-950/50 py-24">
            <div className="container mx-auto px-4">
                <div className="mx-auto flex flex-col items-center text-center mb-12 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tighter">
                        Our <span className="text-indigo-500">Features</span>
                    </h2>
                    <p className="text-zinc-400 font-mono">Everything you need for the ultimate anime experience</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Feature 1 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative p-[1px] rounded-lg bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
                    >
                         <div className="bg-zinc-950 rounded-lg p-6 h-full border border-white/5 flex flex-col">
                            <h3 className="text-xl font-bold text-white font-mono">Social Features</h3>
                            <p className="text-sm text-zinc-400 mt-2 mb-4 font-mono">Connect with other anime fans</p>
                            <ul className="space-y-3 flex-grow">
                                <li className="flex items-start text-sm font-mono text-zinc-300">
                                    <IconMark className="mr-2 h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                                    <span>Watch Together - Synchronized viewing with friends</span>
                                </li>
                                <li className="flex items-start text-sm font-mono text-zinc-300">
                                    <IconMark className="mr-2 h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                                    <span>Live Time Chatbox - Chat while watching</span>
                                </li>
                                <li className="flex items-start text-sm font-mono text-zinc-300">
                                    <IconMark className="mr-2 h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                                    <span>Comment Section - With GIF, timestamp, replies & mentions support</span>
                                </li>
                                <li className="flex items-start text-sm font-mono text-zinc-300">
                                    <IconMark className="mr-2 h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                                    <span>Notifications - Stay updated on replies and mentions</span>
                                </li>
                                <li className="flex items-start text-sm font-mono text-zinc-300">
                                    <IconMark className="mr-2 h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                                    <span>Community Events - Join watch parties and discussions</span>
                                </li>
                            </ul>
                         </div>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative p-[1px] rounded-lg bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
                    >
                         <div className="bg-zinc-950 rounded-lg p-6 h-full border border-white/5 flex flex-col">
                            <h3 className="text-xl font-bold text-white font-mono">Personalization</h3>
                            <p className="text-sm text-zinc-400 mt-2 mb-4 font-mono">Make your experience unique</p>
                            <ul className="space-y-3 flex-grow">
                                <li className="flex items-start text-sm font-mono text-zinc-300">
                                    <IconMark className="mr-2 h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                                    <span>Profile Customization - Picture, banner & name</span>
                                </li>
                                <li className="flex items-start text-sm font-mono text-zinc-300">
                                    <IconMark className="mr-2 h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                                    <span>Avatar Decoration - Show off your style</span>
                                </li>
                                <li className="flex items-start text-sm font-mono text-zinc-300">
                                    <IconMark className="mr-2 h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                                    <span>Leveling Up - Earn XP by watching and engaging</span>
                                </li>
                                <li className="flex items-start text-sm font-mono text-zinc-300">
                                    <IconMark className="mr-2 h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                                    <span>Save Subtitle Preference - Remember your language settings</span>
                                </li>
                                <li className="flex items-start text-sm font-mono text-zinc-300">
                                    <IconMark className="mr-2 h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                                    <span>Easily change between providers - Switch seamlessly</span>
                                </li>
                            </ul>
                         </div>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative p-[1px] rounded-lg bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
                    >
                         <div className="bg-zinc-950 rounded-lg p-6 h-full border border-white/5 flex flex-col">
                            <h3 className="text-xl font-bold text-white font-mono">Technical Features</h3>
                            <p className="text-sm text-zinc-400 mt-2 mb-4 font-mono">Advanced tools for anime lovers</p>
                            <ul className="space-y-3 flex-grow">
                                <li className="flex items-start text-sm font-mono text-zinc-300">
                                    <IconMark className="mr-2 h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                                    <span>High Quality Streaming - Up to 4K resolution</span>
                                </li>
                                <li className="flex items-start text-sm font-mono text-zinc-300">
                                    <IconMark className="mr-2 h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                                    <span>Multi-language Support - Subtitles in various languages</span>
                                </li>
                                <li className="flex items-start text-sm font-mono text-zinc-300">
                                    <IconMark className="mr-2 h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                                    <span>Clip Anime - Create and share your favorite moments</span>
                                </li>
                                <li className="flex items-start text-sm font-mono text-zinc-300">
                                    <IconMark className="mr-2 h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                                    <span>Torrent Streamer - Stream directly from torrents</span>
                                </li>
                                <li className="flex items-start text-sm font-mono text-zinc-300">
                                    <IconMark className="mr-2 h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                                    <span>Quests - Earn exclusive avatar decoration by doing quests</span>
                                </li>
                            </ul>
                         </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Bento Grid */}
        <BentoGrid />

        {/* Final CTA */}
        <section className="border-t border-zinc-800 py-24">
             <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center space-y-8"
                >
                    <div className="inline-flex items-center rounded-md border border-indigo-500 text-indigo-500 bg-indigo-500/20 px-3 py-1.5 text-xs font-semibold font-mono shadow cursor-default hover:bg-indigo-500/30 transition-colors duration-300">
                        <span className="inline-flex items-center">
                            <IconMark className="h-4 w-4 mr-1" />
                        </span>
                        Join Thousands of Happy Users
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-mono">
                        Ready to Start Watching?
                    </h2>
                    
                    <p className="text-zinc-400 font-mono max-w-lg text-lg">
                        Dive into the world of anime - free and ad-free. No credit card required.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
                        <Button className="h-11 px-8 text-sm bg-indigo-600 hover:bg-indigo-700 font-mono shadow">
                            <Zap className="mr-2 h-5 w-5" /> Get Started
                        </Button>
                         <Button variant="outline" className="h-11 px-8 text-sm border-zinc-700 hover:border-indigo-500 hover:text-indigo-500 font-mono bg-background shadow-sm">
                            <IconMark className="mr-2 h-5 w-5" /> Browse Catalog
                        </Button>
                    </div>
                </motion.div>
             </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
