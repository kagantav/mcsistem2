import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { ServicesList } from "@/components/services-list";

export const metadata = { title: "Hizmetlerimiz — MC Sistem" };

export default function Hizmetlerimiz() {
  return (
    <div style={{ fontFamily: "var(--f-body)" }}>
      <SiteHeader />
      <PageHero title="Hizmetlerimiz" />
      <section className="py-16 lg:py-28 bg-white text-[#10243a]">
        <div className="max-w-7xl mx-auto px-6">
          <ServicesList />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
