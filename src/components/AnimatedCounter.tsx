"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ end, label, suffix = "", duration = 2000 }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-green-700">
        {count.toLocaleString("id-ID")}{suffix}
      </div>
      <div className="text-slate-600 mt-2 font-medium">{label}</div>
    </div>
  );
}
