import { useEffect, useRef } from 'react';

export default function Reveal({ as: T = 'div', className = '', delay = 0, children }) {
  const r = useRef(null);
  useEffect(() => {
    const el = r.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { el.classList.add('in'); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <T ref={r} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${className}`}>{children}</T>;
}
