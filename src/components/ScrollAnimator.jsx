import Reveal from './Reveal';

export default function ScrollAnimator({
  items = [],
  render,
  baseDelay = 0,
  step = 80,
  variant = 'up',
  distance = 16,
  duration = 600,
  className = '',
}) {
  return (
    <div className={className}>
      {items.map((it, i) => (
        <Reveal
          key={i}
          delay={baseDelay + i * step}
          variant={variant}
          distance={distance}
          duration={duration}
        >
          {render(it, i)}
        </Reveal>
      ))}
    </div>
  );
}
