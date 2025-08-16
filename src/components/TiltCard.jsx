import { useRef } from 'react';

export default function TiltCard({ children, className = '', maxTilt = 10 }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotY = ((x / rect.width) - 0.5) * maxTilt;
    const rotX = -((y / rect.height) - 0.5) * maxTilt;
    el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div className={`[perspective:1000px] ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div ref={ref} className="transition-transform duration-200 will-change-transform">{children}</div>
    </div>
  );
}
