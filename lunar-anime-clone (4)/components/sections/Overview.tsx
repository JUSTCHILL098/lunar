import React from 'react';
import { motion } from 'framer-motion';
import { Library, Globe, Heart } from 'lucide-react';

const Overview = () => {
    const cards = [
        {
            title: "Massive Library",
            desc: "Explore thousands of anime from every genre and era",
            icon: Library,
            badge: "Popular",
            color: "text-indigo-500",
            borderColor: "hover:border-indigo-500/30",
            badgeColor: "text-indigo-500 bg-indigo-500/20 border-indigo-500"
        },
        {
            title: "Global Content",
            desc: "Access anime from Japan, with English and German localization",
            icon: Globe,
            badge: "International",
            color: "text-indigo-400",
            borderColor: "hover:border-indigo-500/30",
            badgeColor: "text-indigo-400 bg-indigo-400/20 border-indigo-400"
        },
        {
            title: "Favorites List",
            desc: "Create your personal watchlist of favorite anime series",
            icon: Heart,
            badge: "Essential",
            color: "text-indigo-600",
            borderColor: "hover:border-indigo-500/30",
            badgeColor: "text-indigo-600 bg-indigo-600/20 border-indigo-600"
        }
    ];

  return (
    <section id="overview" className="container mx-auto px-4 py-24">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-12 space-y-4"
        >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white font-mono">
                <span className="inline-block bg-indigo-500/10 px-2 rounded text-indigo-400">Overview</span>
            </h2>
            <p className="text-zinc-400 font-mono text-sm sm:text-base max-w-[85%]">
                Everything you need for your perfect anime experience
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cards.map((card, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`relative group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-500 ease-in-out ${card.borderColor} shadow-lg`}
                >
                    <span className="absolute top-2 right-2">
                        <div className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold border ${card.badgeColor} transition-colors duration-300 font-mono`}>
                            {card.badge}
                        </div>
                    </span>
                    <div className="flex flex-col items-center space-y-4 pt-4">
                        <div className="p-3 bg-zinc-900/50 rounded-full">
                            <card.icon className={`h-8 w-8 ${card.color}`} />
                        </div>
                        <div className="space-y-2 text-center">
                            <h3 className="font-bold text-white text-lg font-mono">{card.title}</h3>
                            <p className="text-sm text-zinc-400 font-mono leading-relaxed">{card.desc}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
  );
};

export default Overview;
