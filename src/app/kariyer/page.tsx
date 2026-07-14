import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { company } from "@/lib/content";

const NAVY = "#002b4c";
const BLUE = "#2f6fe0";
const disp = { fontFamily: "var(--f-display)" };

export const metadata = { title: "Kariyer — MC Sistem" };

const VALUES = [
  { t: "Saha Deneyimi", d: "Yurt içi ve yurt dışı büyük altyapı projelerinde uçtan uca mühendislik tecrübesi." },
  { t: "Gelişim Kültürü", d: "Sürekli öğrenmeyi ve teknik gelişimi destekleyen, ekip odaklı bir çalışma ortamı." },
  { t: "Uluslararası Vizyon", d: "8+ ülkede yürütülen projelerle küresel ölçekte kariyer fırsatları." },
];

export default function Kariyer() {
  return (
    <div style={{ fontFamily: "var(--f-body)" }}>
      <SiteHeader />

      <PageHero title="Kariyer" image="/company/sirket-clean.jpg" />

      <section className="py-16 lg:py-28 bg-white text-[#10243a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5" style={{ ...disp, color: NAVY }}>
              Ekibimize Katılın
            </h2>
            <p className="text-[#5a6b82] text-base md:text-lg leading-relaxed">
              MC Sistem; akıllı ulaşım, raylı sistemler, metro ve havaalanı projelerinde geleceğin altyapısını kuran
              mühendisler, teknisyenler ve saha uzmanlarıyla büyüyor. Kendini geliştirmek isteyen yetkin profesyonelleri
              ekibimize bekliyoruz.
            </p>
          </Reveal>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-14 lg:mt-20 grid sm:grid-cols-3 gap-5 lg:gap-6">
          {VALUES.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-[#f6f9fb] border border-black/[0.05] px-7 py-8">
                <span className="block h-1 w-8 rounded-full mb-5" style={{ background: BLUE }} />
                <h3 className="text-lg font-bold tracking-tight mb-2.5" style={{ ...disp, color: NAVY }}>{v.t}</h3>
                <p className="text-[#5a6b82] text-[13.5px] leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="max-w-3xl mx-auto px-6 mt-16 lg:mt-20 text-center">
          <Reveal>
            <div className="rounded-3xl border border-black/[0.07] bg-[#f6f9fb] px-8 py-12">
              <h3 className="text-2xl font-extrabold tracking-tight mb-3" style={{ ...disp, color: NAVY }}>Başvuru Yapın</h3>
              <p className="text-[#5a6b82] mb-7">Özgeçmişinizi aşağıdaki e-posta adresine iletebilirsiniz.</p>
              <a
                href={`mailto:${company.email}?subject=Kariyer Başvurusu`}
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#2f6fe0]"
                style={{ background: NAVY }}
              >
                CV Gönder <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
