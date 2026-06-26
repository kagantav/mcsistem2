/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import { Reveal } from "./reveal";

const NAVY = "#002b4c";
const BLUE = "#2f6fe0";
const RANGE = 130;

type C = { n: string; code: string; note: string };
const items: C[] = [
  { n: "Türkiye", code: "tr", note: "Genel Merkez" },
  { n: "Azerbaycan", code: "az", note: "Saha Operasyonu" },
  { n: "Irak", code: "iq", note: "Zakho Tüneli" },
  { n: "Kuveyt", code: "kw", note: "Altyapı Projesi" },
  { n: "Suudi Arabistan", code: "sa", note: "Saha Operasyonu" },
  { n: "Umman", code: "om", note: "Saha Operasyonu" },
  { n: "Rusya", code: "ru", note: "Saha Operasyonu" },
  { n: "Çekya", code: "cz", note: "Saha Operasyonu" },
  { n: "Danimarka", code: "dk", note: "Saha Operasyonu" },
];

function Flag({ it, center, mx, onHover }: { it: C; center: number; mx: MotionValue<number>; onHover: () => void }) {
  const scale = useSpring(useTransform(mx, [center - RANGE, center, center + RANGE], [1, 1.85, 1], { clamp: true }), { stiffness: 300, damping: 22 });
  const y = useSpring(useTransform(mx, [center - RANGE, center, center + RANGE], [0, -24, 0], { clamp: true }), { stiffness: 300, damping: 22 });
  const ring = useSpring(useTransform(mx, [center - 45, center, center + 45], [0, 1, 0], { clamp: true }), { stiffness: 300, damping: 22 });

  return (
    <motion.button onMouseEnter={onHover} style={{ scale, y }} className="relative origin-bottom shrink-0">
      <img src={`/flags/${it.code}.svg`} alt={it.n} className="w-[clamp(42px,6.2vw,76px)] aspect-[4/3] rounded-[4px] object-cover ring-1 ring-black/10 shadow-md" />
      <motion.span className="absolute -inset-[3px] rounded-[7px] ring-2 pointer-events-none" style={{ opacity: ring, ["--tw-ring-color" as string]: BLUE }} />
    </motion.button>
  );
}

export function CountriesBoard() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [centers, setCenters] = useState<number[]>([]);
  const [active, setActive] = useState(0);
  const mx = useMotionValue(-9999);

  useEffect(() => {
    const measure = () => {
      const row = rowRef.current;
      if (!row) return;
      const rr = row.getBoundingClientRect();
      const kids = Array.from(row.children) as HTMLElement[];
      setCenters(kids.map((k) => { const r = k.getBoundingClientRect(); return r.left - rr.left + r.width / 2; }));
    };
    measure();
    window.addEventListener("resize", measure);
    const t = setTimeout(measure, 300); // fontlar/yerleşim sonrası
    return () => { window.removeEventListener("resize", measure); clearTimeout(t); };
  }, []);

  const c = items[active];

  return (
    <section className="py-24 lg:py-32 bg-[#f6f8fb] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{ fontFamily: "var(--f-display)", color: NAVY }}>
            8+ ülkede sahadayız
          </h2>
        </Reveal>

        <div className="h-24 lg:h-28 flex flex-col items-center justify-end mb-8">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="flex flex-col items-center">
              <span className="text-3xl lg:text-5xl font-extrabold tracking-tight" style={{ fontFamily: "var(--f-display)", color: NAVY }}>
                {c.n}
              </span>
              <span className="mt-1.5 flex items-center gap-2 text-sm text-[#5a6b82]">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: BLUE }} />
                {c.note}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          ref={rowRef}
          onMouseMove={(e) => {
            const r = rowRef.current!.getBoundingClientRect();
            mx.set(e.clientX - r.left);
          }}
          onMouseLeave={() => mx.set(-9999)}
          className="flex items-end justify-center gap-3 sm:gap-5 lg:gap-7 h-[120px]"
        >
          {items.map((it, i) => (
            <Flag key={it.code} it={it} center={centers[i] ?? -9999} mx={mx} onHover={() => setActive(i)} />
          ))}
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#9aabbd]">bayrakların üzerinde gezin</p>
      </div>
    </section>
  );
}
