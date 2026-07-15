
import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useScrollAnimations = () => {
  useEffect(() => {
    const loadScrollTrigger = async () => {
      // Load ScrollTrigger plugin
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Animate feature blocks
      gsap.utils.toArray('.feature-block').forEach((element: any, index) => {
        gsap.fromTo(element, 
          {
            opacity: 0,
            y: 100,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Animate section headers
      gsap.utils.toArray('.section-header').forEach((element: any) => {
        gsap.fromTo(element,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Animate cards with stagger
      gsap.utils.toArray('.advantage-card').forEach((element: any, index) => {
        gsap.fromTo(element,
          {
            opacity: 0,
            scale: 0.8,
            rotation: -10
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Parallax effect for illustrations
      gsap.utils.toArray('.parallax-element').forEach((element: any) => {
        gsap.to(element, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    };

    loadScrollTrigger();

    return () => {
      // Cleanup ScrollTrigger instances
      if (typeof window !== 'undefined') {
        const ScrollTrigger = (window as any).ScrollTrigger;
        if (ScrollTrigger) {
          ScrollTrigger.getAll().forEach((st: any) => st.kill());
        }
      }
    };
  }, []);
};
