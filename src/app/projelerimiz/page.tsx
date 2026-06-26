import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { ProjectsGrid } from "@/components/projects-grid";

export const metadata = { title: "Projeler — MC Sistem" };

export default function Projelerimiz() {
  return (
    <div style={{ fontFamily: "var(--f-body)" }}>
      <SiteHeader />
      <PageHero title="Projeler" curveColor="#f6f9fb" />
      <section className="py-16 lg:py-24 bg-[#f6f9fb] text-[#10243a]">
        <div className="max-w-7xl mx-auto px-6">
          <ProjectsGrid />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
