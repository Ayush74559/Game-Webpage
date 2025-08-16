import { useEffect, useRef, useState } from 'react';

export function useScroll() {
  const [y, setY] = useState(typeof window !== 'undefined' ? window.scrollY : 0);
  const raf = useRef();
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      raf.current = requestAnimationFrame(() => {
        setY(window.scrollY);
        ticking.current = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return { scrollY: y };
}
