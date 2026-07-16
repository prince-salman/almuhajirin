"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-xl border border-green-100 dark:border-green-900 max-w-2xl mx-auto -mt-16 relative z-20">
      <div className="flex items-center gap-2 text-green-700 dark:text-green-500 font-bold mb-6">
        <Clock size={20} />
        <span className="uppercase tracking-widest text-sm">Penutupan Gelombang 1 PPDB</span>
      </div>
      
      <div className="flex gap-4 md:gap-8 text-center">
        {[
          { label: "Hari", value: timeLeft.days },
          { label: "Jam", value: timeLeft.hours },
          { label: "Menit", value: timeLeft.minutes },
          { label: "Detik", value: timeLeft.seconds },
        ].map((unit, i) => (
          <div key={i} className="flex flex-col">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-green-50 dark:bg-green-950 rounded-2xl flex items-center justify-center mb-2">
              <span className="text-3xl md:text-5xl font-black text-green-800 dark:text-green-400">
                {unit.value.toString().padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs md:text-sm font-semibold text-slate-500 dark:text-slate-400">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
