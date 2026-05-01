"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, useMotionValue, useTransform, animate } from "framer-motion";

function AnimatedCounter({
  value,
  duration = 2,
  suffix = "",
}: {
  value: number;
  duration?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      });
      return controls.stop;
    }
  }, [isInView, count, value, duration]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplayValue(v));
  }, [rounded]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div ref={ref} className="font-mono text-[36px] md:text-[48px] text-white leading-none">
      {formatNumber(displayValue)}
      {suffix}
    </div>
  );
}

const stats = [
  { value: 50, suffix: "+", label: "Brands Scaled" },
  { value: 3, suffix: "x", label: "Average YoY Growth" },
  { value: 9, suffix: "+", label: "Marketplaces" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#161616] border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center gap-3 ${
                index < stats.length - 1
                  ? "md:border-r md:border-white/[0.06]"
                  : ""
              }`}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1.8} />
              <span className="font-body text-[13px] text-[#666666] uppercase tracking-[0.15em]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
