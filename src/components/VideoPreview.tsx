import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

interface VideoPreviewProps {
  src: string;
  label: string;
  onPlay: () => void;
}

// Phones get a small poster instead of downloading four looping videos.
// Desktop previews play only while visible and pause when scrolled away.
export const VideoPreview = ({ src, label, onPlay }: VideoPreviewProps) => {
  const container = useRef<HTMLButtonElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)');
    let inView = false;
    const update = () => setPlaying(media.matches && inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    }, { threshold: 0.2 });
    if (container.current) observer.observe(container.current);
    media.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
    };
  }, []);

  return (
    <button
      ref={container}
      type="button"
      onClick={onPlay}
      aria-label={label}
      className="group block w-full rounded-2xl border border-border bg-slate-100 p-3 sm:p-4 dark:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
    >
      <span className="relative block aspect-video overflow-hidden rounded-xl bg-slate-900">
        <img src={src.replace('.mp4', '-poster.jpg')} alt="" width={960} height={540} loading="lazy" className="h-full w-full object-contain" />
        {playing && <video src={src} autoPlay muted loop playsInline aria-hidden="true" className="absolute inset-0 h-full w-full object-contain" />}
        <span className="absolute inset-0 flex items-center justify-center bg-black/15 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100 transition-opacity">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg">
            <Play className="ml-1 h-7 w-7 text-sky-700" aria-hidden="true" />
          </span>
        </span>
      </span>
    </button>
  );
};
