import { useInView } from '../hooks/useInView';

// Variants: up, down, left, right, zoom, fade
export default function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
  variant = 'up',
  distance = 16,
  duration = 600,
}) {
  const { ref, inView } = useInView({ threshold: 0.12, once: true });

  const hiddenTransform = (() => {
    switch (variant) {
      case 'down':
        return `translateY(-${distance}px)`;
      case 'left':
        return `translateX(${distance}px)`;
      case 'right':
        return `translateX(-${distance}px)`;
      case 'zoom':
        return 'scale(0.96)';
      case 'fade':
        return 'none';
      case 'up':
      default:
        return `translateY(${distance}px)`;
    }
  })();

  const showTransform = variant === 'zoom' ? 'scale(1)' : 'none';

  return (
    <Tag
      ref={ref}
      className={`${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? showTransform : hiddenTransform,
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </Tag>
  );
}
