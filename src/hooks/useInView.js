import { useEffect, useRef, useState } from 'react';

// Simple IntersectionObserver hook
export function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
      else if (options.once) setInView(false);
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, [options.threshold]);

  return { ref, inView };
}
