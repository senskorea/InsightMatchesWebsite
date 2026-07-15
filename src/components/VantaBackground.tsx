
import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

interface VantaBackgroundProps {
  children: React.ReactNode;
  effect?: 'NET' | 'WAVES' | 'BIRDS' | 'FOG';
}

export const VantaBackground = ({ children, effect = 'NET' }: VantaBackgroundProps) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    const loadVanta = async () => {
      // Load Three.js
      if (!window.THREE) {
        const script1 = document.createElement('script');
        script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        document.head.appendChild(script1);
        
        await new Promise((resolve) => {
          script1.onload = resolve;
        });
      }

      // Load Vanta
      if (!window.VANTA) {
        const script2 = document.createElement('script');
        script2.src = `https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.${effect.toLowerCase()}.min.js`;
        document.head.appendChild(script2);
        
        await new Promise((resolve) => {
          script2.onload = resolve;
        });
      }

      // Initialize Vanta effect
      if (vantaRef.current && window.VANTA && window.VANTA[effect]) {
        const effectInstance = window.VANTA[effect]({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x73c1a0,
          backgroundColor: 0xf8fafc,
          points: 10.00,
          maxDistance: 20.00,
          spacing: 15.00
        });
        
        setVantaEffect(effectInstance);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [effect]);

  useEffect(() => {
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="relative w-full h-full">
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
