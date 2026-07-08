"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const disp = { fontFamily: "var(--f-display)" };

/** Videodaki segment sınırları (saniye) — kare analizine göre */
const BOUNDS = [13.75, 23.75, 29];
type Segment = { title: string; items: string[] };
const SEGMENTS: Segment[] = [
  { title: "Akıllı Ulaşım Sistemleri", items: ["Trafik İzleme ve Yönetim Sistemleri", "Tünel Elektromekanik Sistemleri", "Sinyalizasyon Sistemleri"] },
  { title: "Raylı Ulaşım Sistemleri", items: ["Sinyalizasyon Sistemleri", "Telekomünikasyon Sistemleri", "Elektrifikasyon Sistemleri"] },
  { title: "Metro Sistemleri", items: ["Elektromekanik Sistemler", "Kontrol ve Haberleşme Sistemleri", "Sinyalizasyon Sistemleri"] },
  { title: "Havaalanı Sistemleri", items: ["Radar ve Seyrüsefer Sistemleri", "Pist Aydınlatma Sistemleri", "Uçak Park Ettirme Sistemleri"] },
];
const TITLES = SEGMENTS.map((s) => s.title);

const SEQ = TITLES.length;
const COPIES = 7;         // dikişsiz sonsuz bant için yeterli kopya
const CENTER_COPY = 3;    // ortaya hizalanan kopya (soluna 3 kopya dolgu kalır → boşluk yok)

// Geçiş: eski aşağı banda inerken, yeni banttan yukarı çıkar, aynı anda bant kayar — hepsi eşzamanlı.
const TRANS_W = 1.2;  // geçiş penceresi: segment değişiminden bu kadar önce başlar (bant kayması)
const SHUTTLE = 1.0;  // in/çık süresi (eşzamanlı, üst üste)

// bantta 7 kopya, düz dizi
const BAND = Array.from({ length: COPIES }, () => TITLES).flat();

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const EASE = [0.22, 1, 0.36, 1] as const;

/** Video zamanından segment indeksi + segment bitişi + segment süresi. */
function segAt(ct: number, dur: number): { i: number; segEnd: number; segDur: number } {
  const edges = [0, ...BOUNDS, dur];
  let i = BOUNDS.length;
  for (let k = 0; k < BOUNDS.length; k++) { if (ct < BOUNDS[k]) { i = k; break; } }
  return { i, segEnd: edges[i + 1], segDur: edges[i + 1] - edges[i] };
}

export function HeroServices({ videoId, fallbackDur = 36.75 }: { videoId: string; fallbackDur?: number }) {
  const [featured, setFeatured] = useState(0); // o an yukarıda gösterilen başlık indeksi
  const [liftY, setLiftY] = useState(220);     // başlığın bant hizasından merkeze kat ettiği dikey mesafe (px)
  const featRef = useRef(-1);
  const reduce = useReducedMotion();
  const reduceRef = useRef(false);

  const vpRef = useRef<HTMLDivElement | null>(null);      // bant görüş alanı (overflow hidden)
  const trackRef = useRef<HTMLDivElement | null>(null);   // kayan iz
  const itemRefs = useRef<(HTMLSpanElement | null)[]>([]); // her başlık öğesi (7× kopya)
  const offsetsRef = useRef<number[]>([]);                 // her öğenin iz-içi merkez ofseti
  const vpCenterRef = useRef(0);                           // görüş alanı yatay merkezi

  useEffect(() => { reduceRef.current = !!reduce; }, [reduce]);

  // ölçüm: öğe merkezleri, görüş alanı merkezi, dikey yükselme mesafesi
  useEffect(() => {
    const measure = () => {
      const vp = vpRef.current;
      if (!vp) return;
      vpCenterRef.current = vp.clientWidth / 2;
      const offs: number[] = [];
      for (let k = 0; k < BAND.length; k++) {
        const el = itemRefs.current[k];
        if (el) offs[k] = el.offsetLeft + el.offsetWidth / 2;
      }
      offsetsRef.current = offs;
      // başlangıç: seg0'ı ortaya park et (ilk karede boşluk olmasın)
      const track = trackRef.current;
      if (track && offs.length > SEQ * CENTER_COPY) {
        track.style.transform = `translate3d(${vpCenterRef.current - offs[SEQ * CENTER_COPY]}px,0,0)`;
      }
      // dikey yükselme mesafesi: bant merkezi ile ekran merkezi arası
      const r = vp.getBoundingClientRect();
      setLiftY(Math.max(80, r.top + r.height / 2 - window.innerHeight / 2));
    };
    measure();
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
      const { i, segEnd } = segAt(ct, dur);
      const tLeft = segEnd - ct;
      const inWin = !reduceRef.current && tLeft < TRANS_W;

      // Öne çıkan başlık: geçiş penceresi başlayınca sıradakine geçer.
      // mode="wait" + gecikmeli giriş → önce eski iner, sonra bant kayar, sonra yeni çıkar.
      const featuredIdx = inWin ? (i + 1) % SEQ : i;
      if (featuredIdx !== featRef.current) { featRef.current = featuredIdx; setFeatured(featuredIdx); }

      // Bant: pencere içinde faz-faz — in(park) → kaydır → sonrakinde park.
      const off = offsetsRef.current;
      const track = trackRef.current;
      const base = SEQ * CENTER_COPY;
      if (track && off.length > base + i + 1) {
        const cFrom = off[base + i];
        const cTo = off[base + i + 1];
        let target = cFrom;
        if (inWin) {
          const q = (TRANS_W - tLeft) / TRANS_W; // 0..1 pencere boyunca — eşzamanlı kayma
          target = cFrom + (cTo - cFrom) * easeInOut(q);
        }
        track.style.transform = `translate3d(${vpCenterRef.current - target}px,0,0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* öne çıkan başlık — eşzamanlı mekik: eski aşağı banda inerken yeni banttan yukarı çıkar (üst üste).
          grid-overlap: giriş/çıkış aynı hücrede, aynı anda animasyon. */}
      <div className="absolute inset-0 grid place-items-center px-6">
        <AnimatePresence>
          <motion.div
            key={featured}
            className="[grid-area:1/1] flex flex-col items-center gap-3 sm:gap-5"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: liftY, scale: 0.36, filter: "blur(4px)" }}
            animate={
              reduce
                ? { opacity: 1, transition: { duration: 0.3 } }
                : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: SHUTTLE, ease: EASE } }
            }
            exit={
              reduce
                ? { opacity: 0, transition: { duration: 0.2 } }
                : { opacity: 0, y: liftY, scale: 0.36, filter: "blur(4px)", transition: { duration: SHUTTLE, ease: EASE } }
            }
          >
            <h1
              className="text-white font-extrabold tracking-tight leading-[1.05] text-center whitespace-nowrap text-3xl sm:text-5xl lg:text-7xl"
              style={disp}
            >
              {SEGMENTS[featured].title}
            </h1>
            {/* alt başlıklar — yan yana, tipografik sıralı */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 sm:gap-x-9">
              {SEGMENTS[featured].items.map((it) => (
                <span
                  key={it}
                  className="inline-flex items-center gap-2 text-white/80 font-medium tracking-tight text-sm sm:text-base lg:text-xl"
                >
                  <span className="text-[#7fb0ff] text-xs sm:text-sm">➢</span>
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* alt marquee bandı — sonsuz, dikişsiz; geçişte bir yuva kayar */}
      <div ref={vpRef} className="absolute bottom-24 left-0 right-0 overflow-hidden">
        <div ref={trackRef} className="relative flex w-max will-change-transform">
          {BAND.map((t, idx) => {
            const active = idx % SEQ === featured;
            return (
              <span
                key={idx}
                ref={(el) => { itemRefs.current[idx] = el; }}
                className="inline-flex items-center whitespace-nowrap font-semibold text-lg sm:text-2xl transition-opacity duration-500"
                style={disp}
              >
                <span className={active ? "text-white/10" : "text-white/35"}>{t}</span>
                <span className="mx-6 sm:mx-10 text-white/20">·</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
