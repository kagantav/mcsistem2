"use client";

import { motion } from "motion/react";

/* Akan ışık çizgileri — TCDD'deki soyut görselin daha canlı versiyonu */
export function FlowLines({ className = "" }: { className?: string }) {
  const W = 600;
  const H = 460;
  // sağ-orta odak noktasına akan eğriler
  const fx = 470;
  const fy = 230;
  const starts = [
    [20, 60],
    [10, 150],
    [30, 250],
    [15, 350],
    [40, 420],
    [120, 30],
    [90, 440],
  ];
  const paths = starts.map(([sx, sy]) => {
    const cx = (sx + fx) / 2 + 40;
    const cy = sy < fy ? sy - 30 : sy + 50;
    return `M ${sx} ${sy} Q ${cx} ${cy} ${fx} ${fy}`;
  });

  return (
    <div className={"relative " + className}>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto overflow-visible">
        <defs>
          <linearGradient id="fl" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#173a6b" stopOpacity="0.15" />
            <stop offset="60%" stopColor="#2f6fe0" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#36c6ff" stopOpacity="1" />
          </linearGradient>
          <radialGradient id="flGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#36c6ff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#36c6ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {paths.map((d, i) => (
          <g key={i}>
            <motion.path
              d={d}
              fill="none"
              stroke="url(#fl)"
              strokeWidth={1.5}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: i * 0.12, ease: "easeInOut" }}
            />
            <circle r={3} fill="#36c6ff">
              <animateMotion dur={`${3 + i * 0.4}s`} begin={`${i * 0.3}s`} repeatCount="indefinite" path={d} />
            </circle>
          </g>
        ))}

        {/* odak parıltısı + nabız */}
        <circle cx={fx} cy={fy} r={60} fill="url(#flGlow)" />
        <motion.circle
          cx={fx}
          cy={fy}
          r={9}
          fill="#2f6fe0"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
        <circle cx={fx} cy={fy} r={3.5} fill="#fff" />
      </svg>
    </div>
  );
}
