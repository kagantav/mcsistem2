"use client";

import { motion } from "motion/react";
import { Reveal } from "./reveal";

const NAVY = "#173a6b";
const BLUE = "#2f6fe0";

type P = { n: string; lat: number; lng: number; hub?: boolean };
const points: P[] = [
  { n: "Türkiye", lat: 39.9, lng: 32.8, hub: true },
  { n: "Azerbaycan", lat: 40.4, lng: 49.8 },
  { n: "Irak", lat: 33.3, lng: 44.4 },
  { n: "Kuveyt", lat: 29.3, lng: 47.9 },
  { n: "Suudi Arabistan", lat: 24.7, lng: 46.7 },
  { n: "Umman", lat: 23.6, lng: 58.4 },
  { n: "Rusya", lat: 55.7, lng: 37.6 },
  { n: "Çekya", lat: 50.0, lng: 14.4 },
  { n: "Danimarka", lat: 55.7, lng: 12.6 },
];

const W = 1000,
  H = 560;
const proj = (lat: number, lng: number): [number, number] => [
  ((lng - 8) / 54) * W,
  ((58 - lat) / 38) * H,
];

export function CountriesMap() {
  const hub = points.find((p) => p.hub)!;
  const [hx, hy] = proj(hub.lat, hub.lng);
  const targets = points.filter((p) => !p.hub);

  return (
    <section className="py-20 lg:py-28 bg-[#f6f8fb] border-y border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[13px] uppercase tracking-[0.22em] font-bold" style={{ color: BLUE }}>
              Uluslararası Operasyon
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold" style={{ fontFamily: "var(--f-manrope)", color: NAVY }}>
              8+ ülkede sahadayız
            </h2>
            <p className="mt-4 text-[#5a6b82]">
              Türkiye merkezli gücümüzü, dört bir yandaki projelerle sınırların ötesine taşıyoruz.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" style={{ overflow: "visible" }}>
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={BLUE} stopOpacity="0.5" />
                <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* hafif nokta zemini */}
            {Array.from({ length: 13 }).map((_, r) =>
              Array.from({ length: 23 }).map((_, c) => (
                <circle key={`${r}-${c}`} cx={c * 45 + 10} cy={r * 45 + 10} r={1.4} fill="#173a6b" opacity={0.08} />
              ))
            )}

            {/* yaylar */}
            {targets.map((t, i) => {
              const [x, y] = proj(t.lat, t.lng);
              const cx = (hx + x) / 2;
              const cy = (hy + y) / 2 - Math.hypot(x - hx, y - hy) * 0.28;
              const d = `M ${hx} ${hy} Q ${cx} ${cy} ${x} ${y}`;
              return (
                <g key={t.n}>
                  <motion.path
                    d={d}
                    fill="none"
                    stroke={BLUE}
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.85 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, delay: 0.2 + i * 0.13, ease: "easeInOut" }}
                  />
                  {/* yay üzerinde ilerleyen ışık */}
                  <motion.circle
                    r={3.5}
                    fill={BLUE}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1, 1, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, delay: 0.4 + i * 0.13, repeat: Infinity, repeatDelay: 2.2 }}
                    style={{ offsetPath: `path('${d}')` } as React.CSSProperties}
                  >
                    <animateMotion dur="2.4s" begin={`${0.4 + i * 0.13}s`} repeatCount="indefinite" path={d} />
                  </motion.circle>

                  {/* hedef nokta */}
                  <motion.circle
                    cx={x}
                    cy={y}
                    r={5}
                    fill="#fff"
                    stroke={NAVY}
                    strokeWidth={2}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.13, type: "spring", stiffness: 300, damping: 14 }}
                    style={{ transformBox: "fill-box", transformOrigin: "center" }}
                  />
                  <text x={x} y={y - 12} textAnchor="middle" fontSize={15} fontWeight={700} fill={NAVY} style={{ fontFamily: "var(--f-manrope)" }}>
                    {t.n}
                  </text>
                </g>
              );
            })}

            {/* merkez (Türkiye) */}
            <circle cx={hx} cy={hy} r={36} fill="url(#glow)" />
            <motion.circle
              cx={hx}
              cy={hy}
              r={10}
              fill={NAVY}
              animate={{ scale: [1, 1.18, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            />
            <circle cx={hx} cy={hy} r={4} fill="#fff" />
            <text x={hx} y={hy + 30} textAnchor="middle" fontSize={17} fontWeight={800} fill={NAVY} style={{ fontFamily: "var(--f-manrope)" }}>
              Türkiye
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
