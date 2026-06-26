/* eslint-disable @next/next/no-img-element */
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ReferenceLogos } from "@/components/reference-logos";
import { company, stats } from "@/lib/content";

const NAVY = "#002b4c";
const BLUE = "#2f6fe0";
const disp = { fontFamily: "var(--f-display)" };

export const metadata = { title: "Kurumsal — MC Sistem" };

const CERTS = [
  { code: "ISO 9001", label: "Kalite Yönetimi" },
  { code: "ISO 14001", label: "Çevre Yönetimi" },
  { code: "ISO 45001", label: "İş Sağlığı & Güvenliği" },
];

export default function Hakkimizda() {
  return (
    <div style={{ fontFamily: "var(--f-body)" }}>
      <SiteHeader />

      <PageHero title="Hakkımızda" image="/company/sirket.jpg" />

      {/* HAKKIMIZDA */}
      <section id="hakkimizda" className="py-16 lg:py-28 bg-white text-[#10243a]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img src="/company/sirket.jpg" alt="MC Sistem" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#3a4d63] text-xl md:text-2xl leading-relaxed font-medium mb-10" style={disp}>{company.short}</p>
            <div className="flex flex-wrap gap-x-10 gap-y-6">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <span className="block h-[3px] w-7 mb-2.5" style={{ background: BLUE }} />
                  <div className="text-3xl lg:text-4xl font-extrabold" style={{ ...disp, color: NAVY }}>{s.value}</div>
                  <div className="mt-1 text-xs text-[#6a7a90]">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* KALİTE POLİTİKAMIZ — minimal, görsel sertifika madalyonları */}
      <section id="kalite" className="relative py-20 lg:py-32 bg-[#001426] text-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full blur-[150px] opacity-20" style={{ background: BLUE }} />
        <div className="absolute inset-0 mc-grid opacity-[0.12]" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4" style={disp}>Kalite Politikamız</h2>
            <p className="text-white/55 text-lg max-w-xl mx-auto mb-14 lg:mb-20">Uluslararası standartlarda sertifikalı, sürdürülebilir süreçler.</p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {CERTS.map((c, i) => (
              <Reveal key={c.code} delay={i * 0.1}>
                <div className="group relative rounded-[28px] border border-white/10 bg-white/[0.03] px-8 py-12 hover:bg-white/[0.06] hover:border-[#2f6fe0]/45 hover:-translate-y-1.5 transition-all duration-300">
                  <div className="relative mx-auto mb-7 w-20 h-20">
                    <span className="absolute inset-0 rounded-full border border-white/15 group-hover:scale-110 transition-transform duration-500" />
                    <span className="absolute inset-0 rounded-full border-2 opacity-50 group-hover:opacity-100 transition-opacity" style={{ borderColor: BLUE, clipPath: "inset(0 0 50% 0)" }} />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="#7fb0ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    </span>
                  </div>
                  <div className="text-3xl lg:text-[2rem] font-extrabold tracking-tight" style={disp}>{c.code}</div>
                  <div className="text-sm text-white/50 mt-2">{c.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
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
