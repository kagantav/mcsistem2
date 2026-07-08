# Hero Başlık Marquee Bandı — Implementasyon Planı

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Hero videosunda başlık dışındaki tüm yazıları kaldırıp, altta sürekli akan (video-senkron) bir marquee bandı eklemek; aktif segmentin başlığı banttan video merkezine yükselip segment boyunca durur, sonra iner.

**Architecture:** Tek bir client bileşen (`HeroServices`) tam ekran bir overlay olarak konumlanır. Tek bir `requestAnimationFrame` döngüsü video `currentTime`'ını okur, saf `segAt()` fonksiyonuyla `{ segment index, progress }` hesaplar. `segment index` React state'e yazılır (öne çıkan başlığın `AnimatePresence` geçişini tetikler); bant `translateX`'i her karede `ref` üzerinden imperatif güncellenir (re-render yok, 60fps).

**Tech Stack:** Next.js 16.2.9, React 19, `motion` (v12, import `motion/react`), Tailwind CSS v4, TypeScript.

## Global Constraints

- Proje **Next.js 16.2.9** — `AGENTS.md`: yeni bir Next.js API'sine dokunulursa önce `node_modules/next/dist/docs/` okunmalı. (Bu iş yalnızca `"use client"` React bileşeni + CSS içerir; Next server/routing API'si kullanılmaz.)
- Motion importları **`motion/react`** paketinden (`framer-motion` DEĞİL).
- Test runner YOK. Doğrulama: `npx tsc --noEmit` (typecheck) + `npm run lint` + `npm run dev` ile gerçek uygulamada gözle kontrol.
- Başlık metinleri tam olarak: `"Akıllı Ulaşım Sistemleri"`, `"Raylı Ulaşım Sistemleri"`, `"Metro Sistemleri"`, `"Havaalanı Sistemleri"`.
- Segment sınırları korunur: `BOUNDS = [13.75, 23.75, 29]`, `fallbackDur = 36.75`, `videoId = "mc-hero-video"`.
- Görsel/motion içerik: her task'ın "deliverable"ı gerçek uygulamada gözlemlenerek doğrulanır.

---

## Dosya Yapısı

- **Modify:** `src/components/hero-services.tsx` — mevcut `HeroServices` bileşeni baştan yazılır. Alt liste/numara/daktilo kaldırılır; öne çıkan başlık + marquee bandı + tek RAF döngüsü eklenir. Saf `segAt()` fonksiyonu aynı dosyada export edilir.
- **Modify:** `src/app/page.tsx` (`Hero()`, ~157-179) — `HeroServices`'i saran `max-w-7xl ... flex` div'i kaldırılıp bileşen doğrudan section'a bağlanır (bileşen kendi tam ekran overlay'ini render eder).
- **Modify:** `src/app/globals.css` — gerekirse yardımcı sınıf; mevcut `mc-cursor` artık kullanılmaz (silinmez, başka yerde kullanılabilir — dokunma).
- **Dokunulmaz:** `src/components/video-typewriter.tsx` (kullanılmayan ölü kod).

---

### Task 1: Sadeleştirme + statik öne çıkan başlık + overlay montaj

Mevcut `HeroServices` içindeki alt hizmet listesi, "Sistemleri" alt yazısı, `01/02` numarası, dikey ayıraç ve daktilo efekti kaldırılır. Yerine, mevcut RAF/`segFor` mantığıyla sürülen, ekranın merkezinde tek bir statik başlık gelir. `page.tsx` bileşeni tam ekran overlay olarak bağlar.

**Files:**
- Modify: `src/components/hero-services.tsx` (tamamı)
- Modify: `src/app/page.tsx:170-172`

**Interfaces:**
- Consumes: `<video id="mc-hero-video">` DOM öğesi (page.tsx'te mevcut).
- Produces: `HeroServices({ videoId, fallbackDur? })` — bant ve lift sonraki task'larda eklenir. `TITLES: string[]` ve `BOUNDS: number[]` modül sabitleri.

- [ ] **Step 1: `hero-services.tsx`'i baştan yaz (sade sürüm)**

```tsx
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

const segFor = (ct: number) => {
  for (let i = 0; i < BOUNDS.length; i++) if (ct < BOUNDS[i]) return i;
  return BOUNDS.length;
};

export function HeroServices({ videoId, fallbackDur = 36.75 }: { videoId: string; fallbackDur?: number }) {
  const [seg, setSeg] = useState(0);
  const segRef = useRef(-1);

  useEffect(() => {
    const vid = document.getElementById(videoId) as HTMLVideoElement | null;
    let raf = 0;
    const tick = () => {
      const dur = vid && isFinite(vid.duration) && vid.duration > 0 ? vid.duration : fallbackDur;
      const ct = vid && isFinite(vid.currentTime) ? vid.currentTime % dur : (performance.now() / 1000) % dur;
      const i = segFor(ct);
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
```

- [ ] **Step 2: `page.tsx` `Hero()` içindeki sarmalayıcıyı kaldır**

`src/app/page.tsx` içinde bu bloğu:

```tsx
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <HeroServices videoId="mc-hero-video" />
      </div>
```

şununla değiştir:

```tsx
      <HeroServices videoId="mc-hero-video" />
```

(Bileşen artık kendi `absolute inset-0 z-10` overlay'ini render ediyor.)

- [ ] **Step 3: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: Hata yok. (`sleep`, `retype`, `AnimatePresence` liste vb. artık kullanılmadığı için kalıntı import kalmadığını doğrula — yalnızca `useEffect, useRef, useState`, `AnimatePresence, motion` kullanılıyor.)

- [ ] **Step 4: Görsel doğrulama**

Run: `npm run dev` → `http://localhost:3000`
Expected: Hero videosunda YALNIZCA tek bir başlık ortada görünür. Video ilerledikçe segment sınırlarında (~13.75s, ~23.75s, ~29s) başlık değişir: Akıllı Ulaşım Sistemleri → Raylı Ulaşım Sistemleri → Metro Sistemleri → Havaalanı Sistemleri. Alt liste, `01/02` numarası, "Sistemleri" alt yazısı ve daktilo imleci ARTIK YOK.

- [ ] **Step 5: Commit**

```bash
git add src/components/hero-services.tsx src/app/page.tsx
git commit -m "feat(hero): başlık dışı öğeleri kaldır, tek merkezî başlık + overlay montaj"
```

---

### Task 2: Saf `segAt()` — segment indeksi + ilerleme

Bant senkronizasyonu için segment içi ilerleme (`p ∈ [0,1)`) gerekir. Bu saf fonksiyon izole ve gözden geçirilebilir olur; RAF döngüsü onu kullanacak şekilde güncellenir.

**Files:**
- Modify: `src/components/hero-services.tsx`

**Interfaces:**
- Produces: `segAt(ct: number, dur: number): { i: number; p: number }` — `i` segment indeksi (`0..TITLES.length-1`), `p` segment içi ilerleme (`[0,1)`). Task 3 bunu bant `translateX` hesabında kullanır.

- [ ] **Step 1: `segAt` fonksiyonunu ekle**

`segFor` tanımının hemen altına ekle:

```tsx
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
```

- [ ] **Step 2: RAF döngüsünü `segAt` kullanacak şekilde güncelle**

`tick` içindeki segment hesabını değiştir. `progressRef` ekle (Task 3 imperatif okuma için kullanacak):

```tsx
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
```

- [ ] **Step 3: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: Hata yok. (`segFor` hâlâ tanımlı ama artık kullanılmıyorsa lint uyarısı verebilir — `segAt` içine mantığı taşıdığımız için `segFor`'u SİL.)

- [ ] **Step 4: Görsel doğrulama**

Run: `npm run dev`
Expected: Davranış Task 1 ile AYNI (başlık segment sınırlarında değişir). `segAt` sadece indeksi değil ilerlemeyi de hesaplıyor ama henüz görsel etkisi yok.

- [ ] **Step 5: Commit**

```bash
git add src/components/hero-services.tsx
git commit -m "refactor(hero): segAt ile segment indeksi + ilerleme hesabı"
```

---

### Task 3: Video-senkron marquee bandı

Altta tam genişlikte, sürekli akan bant. Başlıklar `·` ayracıyla 2× çoğaltılır. Her başlık öğesinin merkez ofseti ölçülür; `translateX` her RAF karesinde `segAt` ilerlemesinden imperatif hesaplanır, böylece segment `i` sınırında tam ortaya gelir.

**Files:**
- Modify: `src/components/hero-services.tsx`

**Interfaces:**
- Consumes: `segAt` (Task 2), `progressRef`, `segRef`.
- Produces: Bant DOM'u ve `measure()` yardımcısı (offsets + viewport merkezi ölçer).

- [ ] **Step 1: Bant için ref'ler ve state ekle**

Bileşen gövdesine (üst kısma) ekle:

```tsx
  const vpRef = useRef<HTMLDivElement | null>(null);      // bant görüş alanı (overflow hidden)
  const trackRef = useRef<HTMLDivElement | null>(null);   // kayan iz
  const itemRefs = useRef<(HTMLSpanElement | null)[]>([]); // her başlık öğesi (2× kopya)
  const offsetsRef = useRef<number[]>([]);                 // segment i için merkez ofseti, uzunluk N+1
  const vpCenterRef = useRef(0);                           // görüş alanı yatay merkezi
```

- [ ] **Step 2: `measure()` yardımcısını ve ölçüm efektini ekle**

`measure()` her başlık öğesinin iz-içi merkezini (`offsetLeft + offsetWidth/2`) ve görüş alanı merkezini hesaplar. `N = TITLES.length`; `offsets` uzunluğu `N+1` (son segment sonrası ikinci kopyanın ilk öğesi = sarma noktası).

```tsx
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
```

- [ ] **Step 3: RAF döngüsüne bant `translateX` güncellemesini ekle**

`tick` içinde, `progressRef.current = p;` satırından sonra ekle:

```tsx
      const off = offsetsRef.current;
      const track = trackRef.current;
      if (track && off.length > i + 1) {
        const from = off[i];
        const to = off[i + 1];
        const x = vpCenterRef.current - (from + (to - from) * p);
        track.style.transform = `translate3d(${x}px,0,0)`;
      }
```

- [ ] **Step 4: Bant DOM'unu render et**

`return (...)` içindeki overlay div'ine, öne çıkan başlık bloğunun ALTINA ekle:

```tsx
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
```

Not: `w-max` iz'in içeriği kadar genişlemesini sağlar; `overflow-hidden` görüş alanı taşmayı gizler. Öğe merkezleri `offsetLeft` ile ölçülür (transform'dan bağımsız).

- [ ] **Step 5: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: Hata yok.

- [ ] **Step 6: Görsel doğrulama**

Run: `npm run dev`
Expected:
1. Altta başlıklar sürekli sola akıyor (`· Akıllı Ulaşım Sistemleri · Raylı Ulaşım Sistemleri · ...`).
2. Video her yeni segmente girdiğinde, o segmentin başlığı bant ortasına (alma noktasına) tam hizalanmış oluyor.
3. Video başa sardığında (döngü) görünür bir sıçrama YOK (iki kopya aynı içerik).
4. Pencereyi yeniden boyutlandırınca hiza korunuyor.

- [ ] **Step 7: Commit**

```bash
git add src/components/hero-services.tsx
git commit -m "feat(hero): video-senkron sürekli akan marquee bandı"
```

---

### Task 4: Yükselme (lift) animasyonu

Öne çıkan başlık, segment değişiminde bant hizasından yukarı yükselir (aşağıdan `y` + `scale` büyüyerek + `opacity` netleşerek), segment boyunca durur, çıkışta aşağı iner. `AnimatePresence` `seg`'e keylenir.

**Files:**
- Modify: `src/components/hero-services.tsx`

**Interfaces:**
- Consumes: `seg` state, `motion`/`AnimatePresence`.

- [ ] **Step 1: Öne çıkan başlığa lift geçişlerini ekle**

Task 1'de eklenen `motion.h1`'i şu hale getir (yeni `initial/animate/exit/transition`):

```tsx
        <AnimatePresence mode="wait">
          <motion.h1
            key={seg}
            className="text-white font-extrabold tracking-tight leading-[1.05] text-center whitespace-nowrap text-3xl sm:text-5xl lg:text-7xl"
            style={disp}
            initial={{ opacity: 0, y: 120, scale: 0.72, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 60, scale: 0.85, filter: "blur(6px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {TITLES[seg]}
          </motion.h1>
        </AnimatePresence>
```

Not: `y: 120` başlangıçta başlığı aşağıya (bant tarafına) iter → banttan yükseliyormuş hissi. `mode="wait"` çıkış animasyonu bitmeden yeni başlık girmemesini sağlar.

- [ ] **Step 2: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: Hata yok.

- [ ] **Step 3: Görsel doğrulama**

Run: `npm run dev`
Expected: Her segment değişiminde başlık aşağıdan (bant hizasından) yukarı, büyüyerek ve netleşerek merkeze yükseliyor; segment boyunca sabit duruyor; segment bitince aşağı inip solarak çıkıyor, ardından bir sonraki başlık yükseliyor.

- [ ] **Step 4: Commit**

```bash
git add src/components/hero-services.tsx
git commit -m "feat(hero): başlığın banttan yükselme animasyonu"
```

---

### Task 5: Cila — reduced-motion, aktif öğe soldurma, sarma sağlamlığı

Erişilebilirlik fallback'i, "banttan ayrıldı" illüzyonu için aktif bant öğesinin soldurulması ve döngü sarmasının sağlamlığı.

**Files:**
- Modify: `src/components/hero-services.tsx`

**Interfaces:**
- Consumes: `useReducedMotion` (`motion/react`), `seg`.

- [ ] **Step 1: `useReducedMotion` import et ve kullan**

Import satırını güncelle:

```tsx
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
```

Bileşen gövdesinde:

```tsx
  const reduce = useReducedMotion();
```

- [ ] **Step 2: Reduced-motion'da lift'i sadeleştir**

`motion.h1` prop'larını `reduce`'a göre koşullu yap (yükselme/blur yok, sadece cross-fade):

```tsx
          <motion.h1
            key={seg}
            className="text-white font-extrabold tracking-tight leading-[1.05] text-center whitespace-nowrap text-3xl sm:text-5xl lg:text-7xl"
            style={disp}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 120, scale: 0.72, filter: "blur(6px)" }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 60, scale: 0.85, filter: "blur(6px)" }}
            transition={{ duration: reduce ? 0.3 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {TITLES[seg]}
          </motion.h1>
```

- [ ] **Step 3: Reduced-motion'da bant akışını durdur, aktif başlığı ortala**

`tick` içindeki `translateX` bloğunu, reduced-motion'da `p` yerine 0 kullanacak şekilde koşullu yap (öğe merkezde durur, sürekli akış yok). `reduce`'u effect bağımlılığından kaçınmak için `reduceRef` kullan:

```tsx
  const reduceRef = useRef(false);
  useEffect(() => { reduceRef.current = !!reduce; }, [reduce]);
```

`tick` içindeki bant bloğunu güncelle:

```tsx
      const off = offsetsRef.current;
      const track = trackRef.current;
      if (track && off.length > i + 1) {
        const pp = reduceRef.current ? 0 : p;
        const from = off[i];
        const to = off[i + 1];
        const x = vpCenterRef.current - (from + (to - from) * pp);
        track.style.transform = `translate3d(${x}px,0,0)`;
      }
```

- [ ] **Step 4: Aktif bant öğesini soldur ("ayrıldı" illüzyonu)**

Bant öğesi render'ında, öğe indeksi aktif segmente denk geliyorsa (ilk VEYA ikinci kopya: `idx % TITLES.length === seg`) opaklığı düşür:

```tsx
          {[...TITLES, ...TITLES].map((t, idx) => {
            const active = idx % TITLES.length === seg;
            return (
              <span
                key={idx}
                ref={(el) => { itemRefs.current[idx] = el; }}
                className="inline-flex items-center whitespace-nowrap font-semibold text-lg sm:text-2xl transition-opacity duration-500"
                style={{ ...disp, opacity: active ? 0.1 : undefined }}
              >
                <span className={active ? "text-white/10" : "text-white/35"}>{t}</span>
                <span className="mx-6 sm:mx-10 text-white/20">·</span>
              </span>
            );
          })}
```

Not: Aktif başlık yukarı yükselmişken banttaki karşılığı soluklaşır; segment değişince eski başlık geri belirir. `transition-opacity` yumuşak geçiş sağlar.

- [ ] **Step 5: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: Hata yok.

- [ ] **Step 6: Görsel doğrulama**

Run: `npm run dev`
Expected:
1. Aktif segmentin başlığı yukarıdayken, banttaki aynı başlık soluklaşıyor; segment değişince geri beliriyor.
2. macOS Sistem Ayarları → Erişilebilirlik → "Hareketi azalt" AÇIKken: başlık yükselmeden sadece cross-fade ile değişiyor, bant akmıyor (aktif başlık ortada sabit).
3. Video birkaç tam döngü boyunca izlendiğinde hiza ve sarma sorunsuz.

- [ ] **Step 7: Commit**

```bash
git add src/components/hero-services.tsx
git commit -m "feat(hero): reduced-motion fallback + aktif bant öğesi soldurma"
```

---

## Referans: Nihai `hero-services.tsx`

Task'lar birikimli; nihai dosyanın tamamı (çapraz kontrol için):

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const disp = { fontFamily: "var(--f-display)" };

/** Videodaki segment sınırları (saniye) — kare analizine göre */
const BOUNDS = [13.75, 23.75, 29];
const TITLES = [
  "Akıllı Ulaşım Sistemleri",
  "Raylı Ulaşım Sistemleri",
  "Metro Sistemleri",
  "Havaalanı Sistemleri",
];

/** Video zamanından segment indeksi + segment içi ilerleme (p ∈ [0,1)). */
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
  const progressRef = useRef(0);
  const reduce = useReducedMotion();
  const reduceRef = useRef(false);

  const vpRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const offsetsRef = useRef<number[]>([]);
  const vpCenterRef = useRef(0);

  useEffect(() => { reduceRef.current = !!reduce; }, [reduce]);

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
        const pp = reduceRef.current ? 0 : p;
        const from = off[i];
        const to = off[i + 1];
        const x = vpCenterRef.current - (from + (to - from) * pp);
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
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6 flex justify-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={seg}
            className="text-white font-extrabold tracking-tight leading-[1.05] text-center whitespace-nowrap text-3xl sm:text-5xl lg:text-7xl"
            style={disp}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 120, scale: 0.72, filter: "blur(6px)" }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 60, scale: 0.85, filter: "blur(6px)" }}
            transition={{ duration: reduce ? 0.3 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {TITLES[seg]}
          </motion.h1>
        </AnimatePresence>
      </div>

      <div ref={vpRef} className="absolute bottom-24 left-0 right-0 overflow-hidden">
        <div ref={trackRef} className="relative flex w-max will-change-transform">
          {[...TITLES, ...TITLES].map((t, idx) => {
            const active = idx % TITLES.length === seg;
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
```

---

## Self-Review Notları

- **Spec kapsamı:** Kaldırmalar (Task 1), başlık metni "+Sistemleri" (Task 1, TITLES), video-senkron sürekli bant (Task 3), yükselme/inme (Task 4), reduced-motion + aktif öğe soldurma + sarma (Task 5), resize re-measure (Task 3). Tümü karşılanıyor.
- **Placeholder yok:** Tüm adımlar gerçek kod içerir.
- **Tip tutarlılığı:** `segAt(ct, dur) → {i, p}` Task 2'de tanımlı, Task 3/5'te aynı imzayla kullanılıyor. `offsetsRef` uzunluğu `N+1`; `tick` `off.length > i+1` ile korunuyor.
- **Bilinen kabul:** Segment süreleri eşit olmadığından bant akış hızı segmentten segmente değişir (spec'te kabul edildi). `text-white/10` gibi Tailwind arbitrary-opacity sınıfları projede zaten kullanılıyor (`text-white/35`, `/45` mevcut).
```
