import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { NewsGrid } from "@/components/news-grid";

export const metadata = { title: "Bülten — MC Sistem" };

export default function Haberler() {
  return (
    <div style={{ fontFamily: "var(--f-body)" }}>
      <SiteHeader />
      <PageHero title="Bülten" />
      <section className="py-16 lg:py-24 bg-white text-[#10243a]">
        <div className="max-w-7xl mx-auto px-6">
          <NewsGrid />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
