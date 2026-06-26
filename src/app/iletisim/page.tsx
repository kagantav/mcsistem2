import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Contact } from "@/components/contact";

export const metadata = { title: "İletişim — MC Sistem" };

export default function Iletisim() {
  return (
    <div style={{ fontFamily: "var(--f-body)" }}>
      <SiteHeader />
      <PageHero title="İletişim" />
      <section className="py-16 lg:py-24 bg-white text-[#10243a]">
        <div className="max-w-7xl mx-auto px-6">
          <Contact />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
