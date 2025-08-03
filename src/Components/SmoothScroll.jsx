import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3,              // slower scrolling, increase for even slower
      easing: (t) => t * (2 - t), // ease out function for natural slow down
      smooth: true,
      direction: 'vertical',
      lerp: 0.1,                // smooth interpolation
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
