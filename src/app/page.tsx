/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { ReferenceLogos } from "@/components/reference-logos";
import { Magnetic } from "@/components/fx";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Cursor } from "@/components/cursor";
import { IntroLoader } from "@/components/intro-loader";
import { HeroServices } from "@/components/hero-services";
import { GsapProjects } from "@/components/gsap-projects";
import { Hizmetler } from "@/components/hizmetler";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { company, services } from "@/lib/content";

const NAVY = "#002b4c";
const BLUE = "#2f6fe0";
const display = { fontFamily: "var(--f-display)" };

export default function V1() {
  return (
    <>
      <IntroLoader />
      <SmoothScroll>
        <Cursor color={BLUE} />
        {/* sabit hero — alttaki içerik üstüne kayar */}
        <Hero />
        <div className="relative z-10" style={{ fontFamily: "var(--f-body)" }}>
          <SiteHeader />
          {/* şeffaf boşluk: sabit hero burada görünür */}
          <div className="h-screen" />
          <main className="relative bg-white text-[#10243a] shadow-[0_-30px_60px_rgba(0,0,0,0.25)]">
            <div id="hizmetler"><Hizmetler /></div>
            <div id="projeler"><GsapProjects /></div>
            <div id="referanslar"><References /></div>
            <div id="haberler"><Haberler /></div>
            <div id="iletisim"><SiteFooter /></div>
          </main>
        </div>
      </SmoothScroll>
    </>
  );
}

function TopBar() {
  return (
    <div className="text-white text-[13px]" style={{ background: NAVY }}>
      <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
        <a href={`mailto:${company.email}`} className="flex items-center gap-2 opacity-90 hover:opacity-100">
          <span>✉</span> {company.email}
        </a>
        <div className="hidden sm:flex items-center gap-5 opacity-90">
          <a href={`tel:${company.phoneRaw}`} className="hover:opacity-100">{company.phone}</a>
          <span className="opacity-40">|</span>
          <span>TR</span>
        </div>
      </div>
    </div>
  );
}

const NAV_LEFT: [string, string][] = [["Hizmetler", "/hizmetlerimiz"], ["Sektörler", "sektorler"], ["Projeler", "projeler"]];
const NAV_RIGHT: [string, string][] = [["Referanslar", "referanslar"], ["Haberler", "haberler"], ["İletişim", "iletisim"]];

function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mega, setMega] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > last && y > 260);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hizmetler", "sektorler", "projeler", "referanslar", "haberler", "iletisim"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    if (!id) return;
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMega(false);
  };

  const item = ([label, id]: [string, string]) => {
    const isPage = id.startsWith("/");
    return (
      <a
        key={label}
        href={isPage ? id : id ? `#${id}` : "#"}
        onClick={isPage ? undefined : go(id)}
        className={`relative transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:bg-[#2f6fe0] after:transition-all after:duration-300 hover:text-[#002b4c] ${active === id && id ? "text-[#002b4c] after:w-full" : "after:w-0 hover:after:w-full"}`}
      >
        {label}
      </a>
    );
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-transform duration-500 ${hidden ? "-translate-y-full" : "translate-y-0"}`} onMouseLeave={() => setMega(false)}>
        <div className={`border-b transition-all duration-300 ${scrolled ? "bg-white/85 backdrop-blur-md border-black/5 shadow-[0_6px_24px_rgba(0,16,40,0.06)]" : "bg-white border-transparent"}`}>
          <div className={`relative max-w-5xl mx-auto px-6 grid grid-cols-[1fr_auto_1fr] items-center transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
            <nav className="hidden lg:flex items-center justify-end gap-7 text-[15px] font-medium text-[#3a4d63]">
              {NAV_LEFT.map((x) => (x[0] === "Hizmetler" ? <div key={x[0]} onMouseEnter={() => setMega(true)}>{item(x)}</div> : item(x)))}
            </nav>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center justify-center shrink-0 px-7">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="MC Sistem" data-logo className={`w-auto transition-all duration-300 ${scrolled ? "h-7 lg:h-8" : "h-8 lg:h-9"}`} />
            </a>
            <nav className="hidden lg:flex items-center justify-start gap-7 text-[15px] font-medium text-[#3a4d63]">
              {NAV_RIGHT.map((x) => item(x))}
            </nav>
            <a href="#iletisim" onClick={go("iletisim")} className="lg:hidden absolute right-6 text-sm font-semibold px-5 py-2.5 rounded-full text-white" style={{ background: NAVY }}>İletişim</a>
          </div>
        </div>

        {/* Sektörler mega-menü */}
        <div className={`absolute left-0 right-0 top-full bg-white border-b border-black/5 shadow-2xl transition-all duration-300 ${mega ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`} onMouseEnter={() => setMega(true)}>
          <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-5 gap-4">
            {services.map((s) => (
              <a key={s.key} href={`/hizmet/${s.slug}`} className="group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-2.5 ring-1 ring-black/5">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="text-sm font-semibold leading-snug text-[#002b4c] group-hover:text-[#2f6fe0] transition-colors">{s.title}</div>
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="fixed inset-0 h-screen overflow-hidden bg-[#001426] z-0">
      <div className="absolute inset-0">
        <div className="mc-hero-vid w-full h-full" style={{ animationDelay: "1.35s" }}>
          <video id="mc-hero-video" autoPlay loop muted playsInline preload="auto" poster="/services/akilli-ulasim.webp" className="w-full h-full object-cover">
            <source src="/hero/main-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,16,34,0.5) 0%, rgba(0,16,34,0.28) 38%, rgba(0,16,34,0.93) 100%)" }} />
      <div className="absolute inset-0 mc-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <HeroServices videoId="mc-hero-video" />
      </div>

      <motion.div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/55 text-[11px] tracking-[0.3em] uppercase flex flex-col items-center gap-2">
        <span>Keşfet</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>↓</motion.span>
      </motion.div>
    </section>
  );
}

function References() {
  return (
    <section className="py-20 lg:py-24 overflow-hidden">
      <Reveal>
        <div className="text-center mb-12 px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold" style={{ ...display, color: NAVY }}>Referanslarımız</h2>
        </div>
      </Reveal>
      <ReferenceLogos variant="marquee" chipClass="w-56 h-32 p-6 shrink-0" />
    </section>
  );
}

const NEWS_LIST = [
  { date: "29 Ocak 2026", title: "Test ve Eğitim Merkezimizin açılışını gerçekleştirdik.", img: "/company/sirket.jpg" },
  { date: "22 Ekim 2025", title: "Azerbaycan Demiryolları (ADY) heyeti şirketimizi ziyaret etti.", img: "/projects/proje-3.jpg" },
  { date: "24 Eylül 2025", title: "2024 Yılı Olağan Genel Kurul Toplantısı gerçekleştirildi.", img: "/company/breadcrumb.jpg" },
];
const NEWS_FEAT = [
  { date: "08 Nisan 2025", title: "RAYLI SİSTEM GÜVENLİĞİNDE ÖNCÜ", excerpt: "Türkiye merkezli MC Sistem; akıllı ulaşım, raylı sistemler ve metro projelerinde uçtan uca elektromekanik çözümleriyle sektörde öncü konumda yer alıyor.", img: "/services/akilli-ulasim.webp" },
  { date: "15 Mart 2025", title: "OVİT TÜNELİ DEVREYE ALINDI", excerpt: "Tünel elektromekanik sistemlerinin kurulumu, testi ve devreye alınması süreçleri ekibimiz tarafından başarıyla tamamlandı.", img: "/projects/proje-2.jpg" },
  { date: "02 Şubat 2025", title: "METRO SİNYALİZASYON ENTEGRASYONU", excerpt: "Yeni metro hattında sinyalizasyon ve enerji altyapısı entegrasyonu, yüksek frekanslı sefer hedefiyle eksiksiz tamamlandı.", img: "/services/metro.webp" },
];

const CalIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

function Haberler() {
  const [f, setF] = useState(0);
  const feat = NEWS_FEAT[f];
  const go = (d: number) => setF((p) => (p + d + NEWS_FEAT.length) % NEWS_FEAT.length);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-12 lg:mb-14" style={{ ...display, color: NAVY }}>Son Gelişmeler</h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* sol: liste */}
          <Reveal className="flex flex-col">
            {NEWS_LIST.map((n) => (
              <a key={n.title} href="#" data-cursor className="group flex items-center gap-5 py-6 border-b border-black/10 first:pt-0">
                <div className="w-32 h-24 lg:w-40 lg:h-28 shrink-0 rounded-xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={n.img} alt={n.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#7587a0] mb-2.5">
                    <span style={{ color: BLUE }}><CalIcon /></span> {n.date}
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold leading-snug transition-colors group-hover:text-[#2f6fe0]" style={{ ...display, color: NAVY }}>{n.title}</h3>
                </div>
              </a>
            ))}
          </Reveal>

          {/* sağ: öne çıkan */}
          <Reveal delay={0.12} className="flex">
            <div className="relative flex w-full pl-4">
              <span className="absolute left-0 top-8 bottom-8 w-1.5 rounded-full" style={{ background: NAVY }} />
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl min-h-[420px] lg:min-h-0">
                <AnimatePresence mode="wait">
                  <motion.div key={f} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={feat.img} alt={feat.title} className="w-full h-full object-cover" />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,16,32,0.15) 0%, rgba(0,16,32,0.55) 55%, rgba(0,16,32,0.95) 100%)" }} />

                <div className="relative h-full flex flex-col justify-end p-8 lg:p-10 text-white min-h-[420px]">
                  <AnimatePresence mode="wait">
                    <motion.div key={f} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
                      <div className="flex items-center gap-2 text-sm text-white/80 mb-3">
                        <span style={{ color: "#7fb0ff" }}><CalIcon /></span> {feat.date}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-extrabold leading-tight max-w-md" style={display}>{feat.title}</h3>
                    </motion.div>
                  </AnimatePresence>

                  {/* oklar */}
                  <div className="absolute bottom-8 right-8 flex items-center gap-3">
                    <button onClick={() => go(-1)} aria-label="Önceki" className="w-12 h-12 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10 transition-colors">←</button>
                    <button onClick={() => go(1)} aria-label="Sonraki" className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ background: BLUE }}>→</button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl px-8 py-16 md:py-20 text-center" style={{ background: NAVY }}>
          <div className="absolute inset-0 opacity-[0.10]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1.3px, transparent 1.3px)", backgroundSize: "24px 24px" }} />
          <div className="absolute -top-24 -right-16 w-80 h-80 rounded-full blur-[100px]" style={{ background: BLUE, opacity: 0.4 }} />
          <Reveal>
            <h2 className="relative text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5" style={display}>Projenizi birlikte hayata geçirelim.</h2>
            <p className="relative text-white/70 max-w-xl mx-auto mb-8">Anahtar teslim elektromekanik çözümleriniz için uzman ekibimizle iletişime geçin.</p>
            <Magnetic className="relative inline-block px-8 py-4 rounded-full bg-white font-semibold text-sm" style={{ color: NAVY }}>İletişime Geçin →</Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="text-white" style={{ background: NAVY }}>
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <Reveal className="md:col-span-2">
          <span className="text-2xl font-extrabold" style={display}>MC<span style={{ color: BLUE }}>SİSTEM</span></span>
          <p className="mt-4 text-white/55 max-w-sm text-sm leading-relaxed">{company.short}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="font-semibold mb-4">Sektörler</div>
          <ul className="space-y-2 text-sm text-white/55">
            {services.map((s) => (<li key={s.key}><a href="#" className="hover:text-white">{s.title}</a></li>))}
          </ul>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="font-semibold mb-4">İletişim</div>
          <ul className="space-y-2 text-sm text-white/55">
            <li>{company.phone}</li>
            <li>{company.email}</li>
            {company.offices.map((o) => (<li key={o}>{o}</li>))}
          </ul>
        </Reveal>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-white/40">© 2026 MC Sistem. Tüm hakları saklıdır.</div>
      </div>
    </footer>
  );
}
