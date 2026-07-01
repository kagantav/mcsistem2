/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BLUE = "#2f6fe0";

export function GsapProjects() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const tr = track.current!;
      const getDistance = () => tr.scrollWidth - window.innerWidth;
      const panels = gsap.utils.toArray<HTMLElement>(".gp-panel");
      const bgs = gsap.utils.toArray<HTMLElement>(".gp-bg");
      let last = -1;

      const focus = () => {
        const cx = window.innerWidth / 2;
        panels.forEach((p) => {
          const c = p.getBoundingClientRect();
          const s = Math.max(-1.4, Math.min(1.4, (c.left + c.width / 2 - cx) / (window.innerWidth * 0.5)));
          const a = Math.abs(s);
          gsap.set(p, {
            transformPerspective: 1300,
            rotationY: -s * 32,
            z: -a * 240,
            scale: 1 - a * 0.06,
            filter: `brightness(${1 - a * 0.38}) saturate(${1 - a * 0.3})`,
            transformOrigin: "center center",
          });
        });
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: () => "+=" + getDistance() * 1.05,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: focus,
          onUpdate: (self) => {
            const active = Math.min(projects.length - 1, Math.floor(self.progress * projects.length));
            if (counter.current) counter.current.textContent = String(active + 1).padStart(2, "0");
            focus();
            if (active !== last) {
              last = active;
              bgs.forEach((b, i) => gsap.to(b, { opacity: i === active ? 1 : 0, duration: 0.6, overwrite: "auto" }));
            }
          },
        },
      });
      tl.to(tr, { x: () => -getDistance(), ease: "none" }, 0);
      tl.fromTo(bar.current, { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0);

      gsap.utils.toArray<HTMLElement>(".gp-img").forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.22, xPercent: -8 },
          { scale: 1.08, xPercent: 8, ease: "none", scrollTrigger: { trigger: img.closest(".gp-panel"), containerAnimation: tl, start: "left right", end: "right left", scrub: true } }
        );
      });
    },
    { scope: section }
  );

  return (
    <section ref={section} className="relative bg-[#001426] text-white overflow-hidden">
      {/* senkron bulanık arka plan */}
      <div className="absolute inset-0">
        {projects.map((p, i) => (
          <div key={p.title} className="gp-bg absolute inset-0" style={{ opacity: i === 0 ? 1 : 0 }}>
            <img src={p.image} alt="" className="w-full h-full object-cover scale-110 blur-2xl" />
          </div>
        ))}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,18,38,0.82), rgba(0,16,32,0.92))" }} />
      </div>

      <div className="relative h-screen flex flex-col justify-center pt-24 pb-8">
        <div className="px-6 mb-8 lg:mb-12 text-center">
          <h2 className="text-4xl md:text-7xl font-extrabold leading-[0.95] tracking-tight" style={{ fontFamily: "var(--f-display)" }}>
            Projelerimiz
          </h2>
        </div>

        <div ref={track} className="flex gap-6 lg:gap-8 px-6 lg:px-14 will-change-transform" style={{ transformStyle: "preserve-3d" }}>
          {projects.map((p, i) => (
            <a
              key={p.title}
              href="#"
              data-cursor
              className="gp-panel group relative shrink-0 w-[84vw] sm:w-[64vw] lg:w-[54vw] xl:w-[48vw] h-[66vh] rounded-[28px] overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img src={p.image} alt={p.title} className="gp-img w-full h-full object-cover [filter:contrast(1.07)_saturate(1.12)]" />
              </div>
              {/* sinematik grade — sade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00101e] via-[#00101e]/15 to-transparent" />
              <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 140px rgba(0,10,22,0.45)" }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(to top, rgba(47,111,224,0.22), transparent 50%)" }} />

              {/* üst: index + durum */}
              <div className="absolute top-6 left-6 right-6 sm:top-7 sm:left-8 sm:right-8 flex items-center justify-between">
                <span className="font-mono text-sm text-white/55">
                  {String(i + 1).padStart(2, "0")} <span className="text-white/25">/ {String(projects.length).padStart(2, "0")}</span>
                </span>
                <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/65">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.status === "Tamamlandı" ? "#37d39a" : "#5fa8ff" }} />
                  {p.status}
                </span>
              </div>

              {/* alt: başlık + teknik künye */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl lg:text-[2.9rem] font-extrabold leading-[1.05] sm:leading-[1.0] mb-4 sm:mb-7 max-w-[92%]" style={{ fontFamily: "var(--f-display)" }}>
                  {p.title}
                </h3>
                <div className="flex items-end gap-4 sm:gap-6 border-t border-white/15 pt-4 sm:pt-5">
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/45 mb-1.5">Konum</div>
                    <div className="text-sm text-white/90 font-medium truncate">{p.location}, {p.country}</div>
                  </div>
                  <div className="hidden sm:block w-px self-stretch bg-white/15" />
                  <div className="hidden sm:block min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/45 mb-1.5">Kapsam</div>
                    <div className="text-sm text-white/90 font-medium truncate">{p.category}</div>
                  </div>
                  <div className="ml-auto shrink-0">
                    <span className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/25 text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#00101e]">→</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[28px]" />
            </a>
          ))}

          <a href="#" data-cursor className="shrink-0 w-[64vw] sm:w-[42vw] lg:w-[28vw] h-[66vh] rounded-[28px] flex flex-col items-center justify-center text-center gap-5 border border-white/15" style={{ background: "linear-gradient(160deg,#0a3a78,#001426)" }}>
            <div className="text-2xl lg:text-3xl font-extrabold px-8" style={{ fontFamily: "var(--f-display)" }}>
              Tüm projelerimizi keşfedin
            </div>
            <span className="px-7 py-3.5 rounded-full font-semibold text-sm text-white" style={{ background: BLUE }}>
              Tüm Projeler →
            </span>
          </a>
        </div>

        <div className="px-6 lg:px-14 mt-10 flex items-center gap-5">
          <span className="font-mono text-sm text-white/55 shrink-0">
            <span ref={counter} className="text-white">01</span> <span className="text-white/30">/ {String(projects.length).padStart(2, "0")}</span>
          </span>
          <div className="flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden">
            <div ref={bar} className="h-full origin-left rounded-full" style={{ background: BLUE, transform: "scaleX(0)" }} />
          </div>
          <span className="hidden sm:block text-xs uppercase tracking-[0.22em] text-white/40 shrink-0">Kaydır →</span>
        </div>
      </div>
    </section>
  );
}
