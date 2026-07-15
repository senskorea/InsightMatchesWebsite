
import { useEffect } from 'react';

export const useCardTiltEffect = () => {
  useEffect(() => {
    function clamp(num: number, min: number, max: number) { 
      return Math.max(min, Math.min(num, max)); 
    }

    const cards = document.querySelectorAll('.card-tilt');
    
    cards.forEach((card) => {
      const cardElement = card as HTMLElement;
      const initialTransform = cardElement.style.transform;
      
      const handlePointerMove = (e: PointerEvent) => {
        const rect = cardElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const maxTilt = 13;
        const tiltX = clamp(((y - centerY) / centerY) * maxTilt, -maxTilt, maxTilt);
        const tiltY = clamp(((x - centerX) / centerX) * -maxTilt, -maxTilt, maxTilt);
        cardElement.style.transition = 'transform 0.12s cubic-bezier(.22,1,.36,1)';
        cardElement.style.transform = `${initialTransform} scale(1.045) perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      };

      const handlePointerLeave = () => {
        cardElement.style.transition = 'transform 0.35s cubic-bezier(.22,1,.36,1)';
        cardElement.style.transform = initialTransform;
      };

      const handlePointerEnter = () => {
        cardElement.style.transition = 'transform 0.18s cubic-bezier(.22,1,.36,1)';
      };

      const handleFocus = () => {
        cardElement.style.transition = 'transform 0.15s cubic-bezier(.22,1,.36,1)';
        cardElement.style.transform = `${initialTransform} scale(1.045)`;
      };

      const handleBlur = () => {
        cardElement.style.transition = 'transform 0.35s cubic-bezier(.22,1,.36,1)';
        cardElement.style.transform = initialTransform;
      };

      cardElement.addEventListener('pointermove', handlePointerMove);
      cardElement.addEventListener('pointerleave', handlePointerLeave);
      cardElement.addEventListener('pointerenter', handlePointerEnter);
      cardElement.addEventListener('focus', handleFocus);
      cardElement.addEventListener('blur', handleBlur);

      return () => {
        cardElement.removeEventListener('pointermove', handlePointerMove);
        cardElement.removeEventListener('pointerleave', handlePointerLeave);
        cardElement.removeEventListener('pointerenter', handlePointerEnter);
        cardElement.removeEventListener('focus', handleFocus);
        cardElement.removeEventListener('blur', handleBlur);
      };
    });
  }, []);
};
