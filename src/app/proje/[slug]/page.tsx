/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { projects } from "@/lib/content";

const NAVY = "#002b4c";
const BLUE = "#2f6fe0";
const disp = { fontFamily: "var(--f-display)" };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjeDetay({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const others = projects.filter((x) => x.slug !== slug).slice(0, 3);
  const ongoing = p.status === "Devam Ediyor";

  return (
    <div style={{ fontFamily: "var(--f-body)" }}>
      <SiteHeader />

      <PageHero title={p.title} image={p.image} />

      {/* İÇERİK */}
      <section className="py-16 lg:py-24 bg-white text-[#10243a]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
          <div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] mb-10">
              <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ ...disp, color: NAVY }}>Proje Hakkında</h2>
            <p className="text-[#5a6b82] text-base md:text-[17px] leading-relaxed mb-10">{p.longDesc}</p>

            <h2 className="text-2xl md:text-3xl font-extrabold mb-6" style={{ ...disp, color: NAVY }}>Proje Kapsamı</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {p.scope.map((s) => (
                <div key={s} className="flex items-start gap-3 p-4 rounded-2xl border border-black/[0.07] bg-[#f6f9fb]">
                  <span className="w-2 h-2 rounded-full shrink-0 mt-2" style={{ background: BLUE }} />
                  <span className="text-[#3a4d63] text-sm font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* meta panel */}
          <aside className="lg:sticky lg:top-28 rounded-3xl border border-black/[0.07] p-7 bg-[#f6f9fb]">
            <h3 className="font-bold mb-5" style={{ ...disp, color: NAVY }}>Proje Bilgileri</h3>
            <dl className="space-y-4 text-sm">
              {[["Konum", `${p.location}`], ["Ülke", p.country], ["Kategori", p.category], ["Yıl", String(p.year)], ["Durum", ongoing ? "Devam Ediyor" : "Tamamlandı"]].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-black/5 pb-3 last:border-0">
                  <dt className="text-[#7587a0]">{k}</dt>
                  <dd className="font-semibold text-right" style={{ color: NAVY }}>{v}</dd>
                </div>
              ))}
            </dl>
            <Link href="/iletisim" className="mt-6 inline-flex w-full items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-full text-white text-sm" style={{ background: NAVY }}>
              Benzer Proje İçin İletişim →
            </Link>
          </aside>
        </div>
      </section>

      {/* DİĞER PROJELER */}
      <section className="py-16 lg:py-24 bg-[#f6f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8" style={{ ...disp, color: NAVY }}>Diğer Projeler</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link key={o.slug} href={`/proje/${o.slug}`} className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <img src={o.image} alt={o.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold leading-snug group-hover:text-[#7fb0ff] transition-colors" style={disp}>{o.title}</h3>
                  <p className="text-white/60 text-xs mt-1">{o.location}</p>
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
