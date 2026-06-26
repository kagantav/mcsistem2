/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { ScopePanels } from "@/components/scope-panels";
import { services } from "@/lib/content";

const NAVY = "#002b4c";
const BLUE = "#2f6fe0";
const disp = { fontFamily: "var(--f-display)" };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

const vidSrc = (key: string) => `/services/hover/${key}.${key === "yeralti" ? "mp4" : "webm"}`;

export default async function HizmetDetay({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== slug);

  return (
    <div style={{ fontFamily: "var(--f-body)" }}>
      <SiteHeader />

      <PageHero title={s.title} image={s.image} />

      {/* GİRİŞ: video + açıklama + benefits */}
      <section className="py-16 lg:py-24 bg-white text-[#10243a]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-slate-100 order-2 lg:order-1">
            <video src={vidSrc(s.key)} autoPlay muted loop playsInline poster={s.image} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-5" style={{ ...disp, color: NAVY }}>{s.title}</h2>
            <p className="text-[#5a6b82] text-base md:text-[17px] leading-relaxed mb-8">{s.longDesc}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {s.benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4 p-4 rounded-2xl border border-black/[0.07] hover:border-[#2f6fe0]/30 hover:bg-[#f6f9fb] transition-all">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0 mt-1.5" style={{ background: BLUE }} />
                  <div>
                    <h4 className="font-bold text-sm mb-1" style={{ ...disp, color: NAVY }}>{b.title}</h4>
                    <p className="text-[#6a7a90] text-xs leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HİZMET KAPSAMIMIZ — genişleyen paneller (foto yerine açıklama) */}
      <section className="py-16 lg:py-24 bg-[#f6f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ ...disp, color: NAVY }}>
              Hizmet <span style={{ color: BLUE }}>Kapsamımız</span>
            </h2>
          </div>
          <ScopePanels items={s.capabilities} />
        </div>
      </section>

      {/* DİĞER HİZMETLER */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8" style={{ ...disp, color: NAVY }}>Diğer Hizmetler</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {others.map((o) => (
              <Link key={o.key} href={`/hizmet/${o.slug}`} className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                <img src={o.image} alt={o.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold leading-snug group-hover:text-[#7fb0ff] transition-colors" style={disp}>{o.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
