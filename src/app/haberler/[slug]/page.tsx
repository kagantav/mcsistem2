/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { blogs } from "@/lib/content";

const NAVY = "#002b4c";
const BLUE = "#2f6fe0";
const disp = { fontFamily: "var(--f-display)" };

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  return { title: post ? `${post.title} — MC Sistem` : "Haber — MC Sistem" };
}

export default async function HaberDetay({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) notFound();

  const others = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <div style={{ fontFamily: "var(--f-body)" }}>
      <SiteHeader />

      {/* HERO — kavisli breadcrumb (diğer sayfalarla aynı) */}
      <PageHero
        title={post.title}
        image={post.image}
        titleClassName="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.18] max-w-4xl mx-auto"
      />

      {/* İÇERİK */}
      <article className="bg-white text-[#10243a]">
        <div className="max-w-4xl mx-auto px-6 py-12 lg:py-16">
          {/* üst meta satırı */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link href="/haberler" className="inline-flex items-center gap-2 text-sm font-semibold text-[#5a6b82] hover:text-[#2f6fe0] transition-colors">
              <span aria-hidden>←</span> Tüm Haberler
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full text-white" style={{ background: BLUE }}>{post.category}</span>
              <span className="text-[#7587a0] text-sm">{post.date}</span>
            </div>
          </div>

          {/* görsel — temiz blok, içeriğin üstünde */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9] mb-10 lg:mb-14">
            <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
          </div>

          <div className="space-y-5 max-w-3xl mx-auto">
            {post.body.map((p, i) => (
              <p key={i} className={i === 0 ? "text-lg lg:text-xl leading-relaxed text-[#233246] font-medium" : "text-base lg:text-[17px] leading-relaxed text-[#3a4d63]"}>
                {p}
              </p>
            ))}

            <div className="pt-6">
              <Link href="/haberler" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#2f6fe0]" style={{ background: NAVY }}>
                <span aria-hidden>←</span> Tüm Haberlere Dön
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* DİĞER HABERLER */}
      {others.length > 0 && (
        <section className="py-16 lg:py-24 bg-[#f6f9fb]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 lg:mb-10" style={{ ...disp, color: NAVY }}>Diğer Haberler</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((n) => (
                <Link key={n.slug} href={`/haberler/${n.slug}`} className="group block rounded-2xl overflow-hidden bg-white border border-black/[0.07] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img src={n.image} alt={n.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <span className="absolute top-4 left-4 text-[11px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full text-white" style={{ background: NAVY }}>{n.category}</span>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-[#7587a0] mb-2">{n.date}</div>
                    <h3 className="text-base font-bold leading-snug mb-3 transition-colors group-hover:text-[#2f6fe0] line-clamp-3" style={{ ...disp, color: NAVY }}>{n.title}</h3>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: BLUE }}>Devamı →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
