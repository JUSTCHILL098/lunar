"use client";


import { useEffect, useState } from "react";


export function Snow({ count = 40 }: { count?: number }) {
const [flakes, setFlakes] = useState<any[]>([]);


useEffect(() => {
const items = Array.from({ length: count }).map(() => ({
left: Math.random() * 100 + "%",
size: Math.random() * 3 + 1,
duration: Math.random() * 10 + 8,
delay: Math.random() * -20,
}));
setFlakes(items);
}, [count]);


return (
<div className="pointer-events-none fixed inset-0 z-0">
{flakes.map((f, i) => (
<span
key={i}
style={{
left: f.left,
width: f.size,
height: f.size,
animationDuration: f.duration + "s",
animationDelay: f.delay + "s",
}}
className="absolute top-0 rounded-full bg-white/70 animate-snow"
/>
))}
</div>
);
}
