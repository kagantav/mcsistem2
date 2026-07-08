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

  useEffect(() => {
    const vid = document.getElementById(videoId) as HTMLVideoElement | null;
    let raf = 0;
    const tick = () => {
      const dur = vid && isFinite(vid.duration) && vid.duration > 0 ? vid.duration : fallbackDur;
      const ct = vid && isFinite(vid.currentTime) ? vid.currentTime % dur : (performance.now() / 1000) % dur;
      const { i, p } = segAt(ct, dur);
      progressRef.current = p;
      if (i !== segRef.current) { segRef.current = i; setSeg(i); }
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
    </div>
  );
}
