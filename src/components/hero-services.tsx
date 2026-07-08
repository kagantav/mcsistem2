"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const disp = { fontFamily: "var(--f-display)" };

/** Videodaki segment sınırları (saniye) — kare analizine göre */
const BOUNDS = [13.75, 23.75, 29];
const TITLES = [
  "Akıllı Ulaşım Sistemleri",
  "Raylı Ulaşım Sistemleri",
  "Metro Sistemleri",
  "Havaalanı Sistemleri",
];

/**
 * Video zamanından segment indeksi + segment içi ilerleme.
 * Kenarlar: [0, ...BOUNDS, dur] → segment i: [edges[i], edges[i+1]).
 */
function segAt(ct: number, dur: number): { i: number; p: number } {
  const edges = [0, ...BOUNDS, dur];
  let i = BOUNDS.length;
  for (let k = 0; k < BOUNDS.length; k++) { if (ct < BOUNDS[k]) { i = k; break; } }
  const span = edges[i + 1] - edges[i];
  const p = span > 0 ? Math.min(1, Math.max(0, (ct - edges[i]) / span)) : 0;
  return { i, p };
}

export function HeroServices({ videoId, fallbackDur = 36.75 }: { videoId: string; fallbackDur?: number }) {
  const [seg, setSeg] = useState(0);
  const segRef = useRef(-1);
  const progressRef = useRef(0); // segment içi ilerleme, imperatif okuma için

  const vpRef = useRef<HTMLDivElement | null>(null);      // bant görüş alanı (overflow hidden)
  const trackRef = useRef<HTMLDivElement | null>(null);   // kayan iz
  const itemRefs = useRef<(HTMLSpanElement | null)[]>([]); // her başlık öğesi (2× kopya)
  const offsetsRef = useRef<number[]>([]);                 // segment i için merkez ofseti, uzunluk N+1
  const vpCenterRef = useRef(0);                           // görüş alanı yatay merkezi

  useEffect(() => {
    const N = TITLES.length;
    const measure = () => {
      const vp = vpRef.current;
      if (!vp) return;
      vpCenterRef.current = vp.clientWidth / 2;
      const offs: number[] = [];
      for (let k = 0; k <= N; k++) {
        const el = itemRefs.current[k];
        if (el) offs[k] = el.offsetLeft + el.offsetWidth / 2;
      }
      offsetsRef.current = offs;
    };
    measure();
    // Custom font (--f-display) yüklenince genişlikler değişebilir → yeniden ölç
    if (typeof document !== "undefined" && "fonts" in document) {
      (document as Document).fonts.ready.then(measure).catch(() => {});
    }
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const vid = document.getElementById(videoId) as HTMLVideoElement | null;
    let raf = 0;
    const tick = () => {
      const dur = vid && isFinite(vid.duration) && vid.duration > 0 ? vid.duration : fallbackDur;
      const ct = vid && isFinite(vid.currentTime) ? vid.currentTime % dur : (performance.now() / 1000) % dur;
      const { i, p } = segAt(ct, dur);
      progressRef.current = p;
      if (i !== segRef.current) { segRef.current = i; setSeg(i); }

      const off = offsetsRef.current;
      const track = trackRef.current;
      if (track && off.length > i + 1) {
        const from = off[i];
        const to = off[i + 1];
        const x = vpCenterRef.current - (from + (to - from) * p);
        track.style.transform = `translate3d(${x}px,0,0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* öne çıkan başlık — video merkezinde */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6 flex justify-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={seg}
            className="text-white font-extrabold tracking-tight leading-[1.05] text-center whitespace-nowrap text-3xl sm:text-5xl lg:text-7xl"
            style={disp}
          >
            {TITLES[seg]}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* alt marquee bandı — sürekli akan başlıklar */}
      <div ref={vpRef} className="absolute bottom-24 left-0 right-0 overflow-hidden">
        <div ref={trackRef} className="relative flex w-max will-change-transform">
          {[...TITLES, ...TITLES].map((t, idx) => (
            <span
              key={idx}
              ref={(el) => { itemRefs.current[idx] = el; }}
              className="inline-flex items-center whitespace-nowrap text-white/35 font-semibold text-lg sm:text-2xl"
              style={disp}
            >
              {t}
              <span className="mx-6 sm:mx-10 text-white/20">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
