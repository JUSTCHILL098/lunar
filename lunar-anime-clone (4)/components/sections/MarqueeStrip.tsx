
import React from 'react';

const animeTitles = [
    "Solo Leveling ソロレベリング", "One Piece ワンピース", "Dragon Ball ドラゴンボール", 
    "Attack on Titan 進撃の巨人", "Demon Slayer 鬼滅の刃", "Naruto ナルト", 
    "Jujutsu Kaisen 呪術廻戦", "Death Note デスノート", "Bleach ブリーチ", 
    "Hunter x Hunter ハンター×ハンター", "Fullmetal Alchemist 鋼の錬金術師", 
    "My Hero Academia 僕のヒーローアカデミア", "Chainsaw Man チェンソーマン", 
    "Tokyo Ghoul 東京喰種", "Spy x Family スパイファミリー", 
    "Violet Evergarden ヴァイオレット・エヴァーガーデン", "Vinland Saga ヴィンランド・サガ", 
    "Cowboy Bebop カウボーイビバップ", "Evangelion 新世紀エヴァンゲリオン", "Your Name 君の名は"
];

const MarqueeStrip = () => {
  return (
    <div className="py-3 border-y border-zinc-800 bg-black overflow-hidden relative z-20">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Duplicate content to create seamless loop */}
        {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0">
                {animeTitles.map((title, idx) => (
                    <div key={`${i}-${idx}`} className="flex items-center gap-16 mx-8">
                        <span className="text-lg font-medium text-zinc-400 font-mono whitespace-nowrap hover:text-white transition-colors duration-300">{title}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500/50"></span>
                    </div>
                ))}
            </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
