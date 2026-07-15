import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate, PanInfo } from 'framer-motion';

import flyer1 from '@/assets/rnd-flyer-1.jpg';
import flyer2 from '@/assets/rnd-flyer-2.jpg';
import flyer3 from '@/assets/rnd-flyer-3.jpg';
import flyer4 from '@/assets/rnd-flyer-4.jpg';
import flyer5 from '@/assets/rnd-flyer-5.jpg';

const flyers = [
  { id: 1, url: flyer1, title: 'R&D Day Overview' },
  { id: 2, url: flyer2, title: 'Pitch Finals & Keynote Speakers' },
  { id: 3, url: flyer3, title: 'How the Day Runs' },
  { id: 4, url: flyer4, title: 'What We Offer' },
  { id: 5, url: flyer5, title: 'Organisers & Partners' },
];

export default function RnDFlyerCarousel() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const getContainerWidth = () => containerRef.current?.offsetWidth || 1;

  useEffect(() => {
    const targetX = -index * getContainerWidth();
    animate(x, targetX, {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    });
  }, [index, x]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = getContainerWidth() * 0.2;
    if (info.offset.x < -threshold && index < flyers.length - 1) {
      setIndex((i) => i + 1);
    } else if (info.offset.x > threshold && index > 0) {
      setIndex((i) => i - 1);
    } else {
      // snap back
      animate(x, -index * getContainerWidth(), { type: 'spring', stiffness: 300, damping: 30 });
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-3">
        <div className="relative overflow-hidden rounded-2xl touch-pan-y" ref={containerRef}>
          <motion.div
            className="flex cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -(flyers.length - 1) * getContainerWidth(), right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
          >
            {flyers.map((item) => (
              <div key={item.id} className="shrink-0 w-full aspect-square">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          {/* Prev */}
          <button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all z-10 ${
              index === 0
                ? 'opacity-30 cursor-not-allowed bg-white/10'
                : 'bg-white/90 hover:scale-110 opacity-80 hover:opacity-100'
            }`}
          >
            <svg className="w-5 h-5 text-[#020611]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            disabled={index === flyers.length - 1}
            onClick={() => setIndex((i) => Math.min(flyers.length - 1, i + 1))}
            className={`absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all z-10 ${
              index === flyers.length - 1
                ? 'opacity-30 cursor-not-allowed bg-white/10'
                : 'bg-white/90 hover:scale-110 opacity-80 hover:opacity-100'
            }`}
          >
            <svg className="w-5 h-5 text-[#020611]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {flyers.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-8 bg-sky-500' : 'w-2 bg-slate-400/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-sm text-slate-400 font-spacemono">
          {String(index + 1).padStart(2, '0')} / {String(flyers.length).padStart(2, '0')} — {flyers[index].title}
        </p>
      </div>
    </div>
  );
}
