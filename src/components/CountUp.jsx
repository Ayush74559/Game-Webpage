import { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';

/**
 * CountUp animates numbers when scrolled into view.
 * Props:
 * - end: number (required) final value
 * - duration: ms (default 1500)
 * - decimals: number of decimal places (default 0)
 * - prefix: string (default '')
 * - suffix: string (default '')
 * - className: string
 * - once: boolean - animate only first time in view (default true)
 */
export default function CountUp({
  end,
  duration = 1500,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  once = true,
  compact = false,
}) {
  const { ref, inView } = useInView({ threshold: 0.2, once });
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);
  const rafRef = useRef();

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    const start = 0;
    const startTime = performance.now();
    const formatter = new Intl.NumberFormat(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(progress);
      const current = start + (end - start) * eased;
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [inView, end, duration, decimals]);

  const formatted = new Intl.NumberFormat(undefined, {
    notation: compact ? 'compact' : 'standard',
    compactDisplay: compact ? 'short' : undefined,
    minimumFractionDigits: compact ? Math.min(1, decimals) : decimals,
    maximumFractionDigits: compact ? Math.max(1, decimals) : decimals,
  }).format(Math.min(value, end));

  return (
  <span ref={ref} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
