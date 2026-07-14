/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { ParallaxImage } from "@/components/parallax-image";
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
        <div className="max-w-5xl mx-auto px-6">
          {/* büyük proje görseli */}
          <ParallaxImage src={p.image} alt={p.title} className="rounded-3xl shadow-2xl aspect-[16/9] mb-8" amount={10} />

          {/* proje bilgileri — görselin altında */}
          <div className="flex flex-wrap gap-x-12 gap-y-5 py-6 border-y border-black/[0.08] mb-12">
            {([["Konum", p.location], ["Durum", ongoing ? "Devam Ediyor" : "Tamamlandı"], ...(ongoing ? [] : [["Yıl", String(p.year)]])] as [string, string][]).map(([k, v]) => (
              <div key={k}>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7587a0] mb-1.5">{k}</dt>
                <dd className="text-lg font-extrabold" style={{ ...disp, color: NAVY }}>{v}</dd>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ ...disp, color: NAVY }}>Proje Hakkında</h2>
          <p className="text-[#5a6b82] text-base md:text-[17px] leading-relaxed mb-12">{p.longDesc}</p>

          <h2 className="text-2xl md:text-3xl font-extrabold mb-6" style={{ ...disp, color: NAVY }}>Proje Kapsamı</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-12">
            {p.scope.map((s) => (
              <div key={s} className="flex items-start gap-3 p-4 rounded-2xl border border-black/[0.07] bg-[#f6f9fb]">
                <span className="w-2 h-2 rounded-full shrink-0 mt-2" style={{ background: BLUE }} />
                <span className="text-[#3a4d63] text-sm font-medium">{s}</span>
              </div>
            ))}
          </div>

          <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-full text-white text-sm transition-colors hover:bg-[#2f6fe0]" style={{ background: NAVY }}>
            Benzer Proje İçin İletişim <span aria-hidden>→</span>
          </Link>
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
