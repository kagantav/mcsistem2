/* eslint-disable @next/next/no-img-element */
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ReferenceLogos } from "@/components/reference-logos";
import { Accordion } from "@/components/accordion";
import { CertCards } from "@/components/cert-cards";
import { ValueCards } from "@/components/value-cards";
import { MissionVision } from "@/components/mission-vision";
import { ParallaxImage } from "@/components/parallax-image";
import { about, managementSystem } from "@/lib/content";

const NAVY = "#002b4c";
const BLUE = "#2f6fe0";
const disp = { fontFamily: "var(--f-display)" };

export const metadata = { title: "Kurumsal — MC Sistem" };

export default function Hakkimizda() {
  return (
    <div style={{ fontFamily: "var(--f-body)" }}>
      <SiteHeader />

      <PageHero title="Hakkımızda" image="/company/sirket-clean.jpg" />

      {/* HAKKIMIZDA */}
      <section className="py-16 lg:py-28 bg-white text-[#10243a]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <ParallaxImage src="/company/sirket-clean.jpg" alt="MC Sistem" className="rounded-[1.6rem] shadow-2xl aspect-[4/5] sm:aspect-[4/3] lg:aspect-[5/6]" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 mb-9">
              {about.paragraphs.map((p) => (
                <p key={p} className="text-[#3a4d63] text-base lg:text-lg leading-relaxed">{p}</p>
              ))}
            </div>

            <h3 className="text-sm font-bold tracking-tight mb-4" style={{ ...disp, color: NAVY }}>Uzmanlık Alanları</h3>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-6">
              {about.expertise.map((e) => (
                <li key={e} className="flex items-center gap-3 text-[#233246] text-sm font-medium">
                  <span className="h-px w-5 shrink-0" style={{ background: BLUE }} />
                  {e}
                </li>
              ))}
            </ul>
            <p className="text-[#6a7a90] text-sm leading-relaxed mb-8">{about.expertiseNote}</p>

            <a
              href="/hizmetlerimiz"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#2f6fe0]"
              style={{ background: NAVY }}
            >
              Faaliyet Alanlarını İnceleyin <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* VİZYON & MİSYON */}
      <MissionVision />

      {/* KURUMSAL DEĞERLER — editoryal slider */}
      <section className="py-16 lg:py-28 bg-[linear-gradient(120deg,#ffffff_0%,#ffffff_52%,#eef4fa_100%)]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-12 lg:mb-16" style={{ ...disp, color: NAVY }}>
              Kurumsal Değerlerimiz
            </h2>
          </Reveal>
          <ValueCards />
        </div>
      </section>

      {/* ENTEGRE YÖNETİM SİSTEMİ + SERTİFİKALAR */}
      <section className="relative py-20 lg:py-32 bg-[#001426] text-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full blur-[150px] opacity-20" style={{ background: BLUE }} />
        <div className="absolute inset-0 mc-grid opacity-[0.12]" />

        <div className="relative max-w-3xl mx-auto px-6 text-center mb-14 lg:mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6" style={disp}>Entegre Yönetim Sistemi</h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">{managementSystem.intro}</p>
          </Reveal>
        </div>

        <div className="relative max-w-3xl mx-auto px-6">
          <Reveal delay={0.1}>
            <Accordion items={managementSystem.groups} />
          </Reveal>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 mt-20 lg:mt-24">
          <CertCards />
        </div>
      </section>

      {/* REFERANSLAR — grid (hepsi görünür) */}
      <section className="py-16 lg:py-24 bg-[#f6f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-center mb-12 lg:mb-14" style={{ ...disp, color: NAVY }}>Referanslarımız</h2></Reveal>
          <ReferenceLogos variant="grid" chipClass="aspect-[3/2] p-5" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
