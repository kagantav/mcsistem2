// MC Sistem — ortak içerik verisi (mevcut siteden derlendi)

export const company = {
  name: "MC Sistem",
  tagline: "Anahtar Teslim Elektromekanik Sistem Çözümleri",
  short:
    "Türkiye merkezli müteahhit firma olarak; ulaşım ve altyapı projelerinde elektromekanik sistemlerin kurulumu, entegrasyonu, testi ve devreye alınmasını uçtan uca yürütüyoruz.",
  phone: "(+90) 312 286 26 70",
  phoneRaw: "+903122862670",
  email: "info@mcsistem.com.tr",
  offices: ["Çankaya / Ankara", "Tepebaşı / Eskişehir"],
};

export const stats = [
  { value: "8+", label: "Ülkede operasyon" },
  { value: "100+", label: "Tamamlanan proje" },
  { value: "5", label: "Uzmanlık sektörü" },
  { value: "25+", label: "Yıllık saha tecrübesi" },
];

// Kurumsal sayfası — müşteriden birebir alınan içerik
export const about = {
  paragraphs: [
    "MC Sistem, ulaştırma altyapısı ve kritik tesis projelerinde elektromekanik sistem entegrasyonu alanında faaliyet gösteren Türkiye merkezli bir taahhüt firmasıdır.",
    "Yüksek teknoloji gerektiren projelerde edindiği uygulama deneyimi ve mühendislik bilgi birikimiyle, farklı disiplinlere ait sistemlerin uyum içinde çalışmasını sağlayarak anahtar teslim projeler gerçekleştirmektedir.",
    "Kalite, güvenilirlik ve uluslararası standartları esas alan çalışma anlayışıyla MC Sistem, Türkiye'de ve uluslararası projelerde faaliyetlerini sürdürmektedir.",
  ],
  expertise: [
    "Elektromekanik Sistemler",
    "Sinyalizasyon Sistemleri",
    "Telekomünikasyon Sistemleri",
    "Kontrol ve Haberleşme Sistemleri",
    "SCADA Sistemleri",
    "Elektrifikasyon Sistemleri",
    "Akıllı Ulaşım Sistemleri (ITS)",
  ],
  expertiseNote:
    "Bu sistemler; karayolu, tünel, demiryolu, metro, havaalanı ve yer altı tesisleri gibi kritik altyapı projelerinde anahtar teslim olarak uygulanmaktadır.",
};

export const missionVision = {
  mission:
    "İleri teknoloji içeren nitelikli projelerde sahip olunan mühendislik kabiliyeti ve benimsenen kalite anlayışıyla dünya genelinde anahtar teslim projeler gerçekleştirmek.",
  vision: "Katma değeri yüksek projelerde, güvenilirliğiyle uluslararası ölçekte tercih edilen bir firma olmak.",
};

export type CoreValue = { slug: string; title: string; desc: string; image: string; tint: [string, string] };
export const coreValues: CoreValue[] = [
  { slug: "yenilikcilik", title: "Yenilikçilik", desc: "Teknolojik gelişmeleri yakından takip ederek, projelerde ve uygulama süreçlerinde katma değer oluşturan yenilikçi yaklaşımlar geliştirmektir.", image: "/kurumsal-degerler/yenilikcilik.webp", tint: ["#0a2a4a", "#123a63"] },
  { slug: "hiz", title: "Hız", desc: "Projelerin hızlı mobilizasyonunu sağlayarak planlama ve uygulama süreçlerini etkin şekilde yürütmektir.", image: "/kurumsal-degerler/hiz.webp", tint: ["#0d2f52", "#1c4f8a"] },
  { slug: "surekli-gelisim", title: "Sürekli Gelişim", desc: "Gelişimi sürekli ölçerek iyileştirmeyi esas almak ve belirlenen hedeflere ulaşmaktır.", image: "/kurumsal-degerler/surekli-gelisim.webp", tint: ["#08243f", "#0f3a66"] },
  { slug: "isg", title: "İş Sağlığı ve Güvenliği", desc: "İş sağlığını tüm faaliyetlerin ayrılmaz parçası görmek ve \"Sıfır Kaza\" hedefiyle güvenli çalışma ortamları oluşturmaktır.", image: "/kurumsal-degerler/is-guvenligi.webp", tint: ["#0a2c4d", "#17457a"] },
  { slug: "cevre", title: "Çevre Duyarlılığı", desc: "Çevre dostu yaklaşımı benimseyerek doğal kaynakları verimli kullanmak ve çevresel etkileri en aza indirmektir.", image: "/kurumsal-degerler/cevre-duyarliligi.webp", tint: ["#0b2e40", "#12506b"] },
];

export const managementSystem = {
  intro:
    "MC Sistem, vizyonu doğrultusunda kurmuş olduğu Entegre Yönetim Sisteminin sürdürülebilirliğini sağlamak amacıyla aşağıdaki hususları taahhüt etmektedir.",
  groups: [
    {
      title: "Müşteri Odaklılık ve Kalite Anlayışı",
      items: [
        "Gelişen teknolojileri ve sektördeki güncel gelişmeleri yakından takip ederek müşteri beklentilerini aşan üretim ve hizmet gerçekleştirmeyi,",
        "En uygun, en doğru ve en ekonomik çözümleri en hızlı şekilde üreterek uygunsuzlukların önüne geçmeyi ve müşteri ihtiyaçlarını en üst seviyede karşılayan güvenilir bir firma olmayı,",
        "Deneyim ve birikimini artırarak sunduğu hizmet kalitesi ile ülke ekonomisine katkıda bulunmayı,",
        "Müşteri memnuniyetini, çalışan memnuniyetini ve yüksek hizmet kalitesini tesis etmeyi.",
      ],
    },
    {
      title: "Çevrenin Korunması ve Sürdürülebilirlik",
      items: [
        "Çevre kirlenmesine etki eden şirket içi ve dışı etkenleri en aza indirerek çevrenin korunmasını sağlamayı ve gelecek nesillere saygılı bir kuruluş olmayı,",
        "Doğal kaynakları etkin ve akılcı bir şekilde kullanmayı, atık yönetiminde geri dönüşüm teknolojilerini öncelikli olarak uygulamayı,",
        "Çevre performansını artırmak amacıyla çevre yönetim sistemini sürekli iyileştirmeyi ve bu bilinci tüm faaliyet sahalarında sistematik hâle getirmeyi.",
      ],
    },
    {
      title: "İş Sağlığı ve Güvenliği (İSG)",
      items: [
        "\"Sıfır İş Kazası ve Sıfır Meslek Hastalığı\" hedefini benimseyerek risk değerlendirmesi yoluyla emniyetsiz durumları önceden tespit etmeyi ve ortadan kaldırmayı,",
        "Çalışanlarının, alt yüklenicilerinin ve ziyaretçilerinin sağlık, güvenlik ve sosyal refahını sağlamayı ve İSG kurallarına tam riayet edilmesini sağlamayı,",
        "Gerekli araç, gereç ve Kişisel Koruyucu Ekipmanların (KKE) eksiksiz bulundurulmasını ve kullanımının denetlenmesini sağlamayı,",
        "Çalışanları için düzenli sağlık gözetimi sağlayarak sağlıklı çalışma ortamları oluşturmayı.",
      ],
    },
    {
      title: "Yasal Uyum, Eğitim ve Sürekli İyileştirme",
      items: [
        "Yürürlükteki kalite, çevre ve İSG mevzuatına, yasal düzenlemelere, uygunluk yükümlülüklerine ve standart şartlarına tam uyum sağlamayı,",
        "Tüm paydaşlarının bilincini geliştirmek amacıyla düzenli eğitim ve bilinçlendirme faaliyetleri organize ederek kurumsal aile kültürünü güçlendirmeyi,",
        "Süreç yönetiminde sistem yaklaşımıyla maksimum iletişim ve verimliliği sağlamayı, verimlilik esasına dayalı sürekli iyileştirmeyi sürdürülebilir kılmayı,",
        "Stratejilerine bağlı kurumsal yönetim anlayışıyla liderlik kültürünü geliştirmeyi ve İSG performansını artırmak için yeterli kaynak ayırmayı.",
      ],
    },
  ],
  closing:
    "Kalite, Çevre ve İSG sistemlerini bir bütünlük içinde yönetmeyi, sistem etkinliğini düzenli olarak izlemeyi ve topluma örnek bir kuruluş olmayı İSG, Çevre ve Kalite Politikası olarak taahhüt etmektedir.",
};

export type Certificate = { code: string; label: string; file: string };
export const certificates: Certificate[] = [
  { code: "ISO 9001", label: "Kalite Yönetim Sistemi", file: "iso-9001.pdf" },
  { code: "ISO 14001", label: "Çevre Yönetim Sistemi", file: "iso-14001.pdf" },
  { code: "ISO 45001", label: "İş Sağlığı ve Güvenliği Yönetim Sistemi", file: "iso-45001.pdf" },
  { code: "ISO 27001", label: "Bilgi Güvenliği Yönetim Sistemi", file: "iso-27001.pdf" },
];

export type Capability = { title: string; desc: string };

export type Service = {
  key: string;
  slug: string;
  title: string;
  image: string;
  desc: string;
  longDesc: string;
  items: string[];
  benefits: Capability[];
  capabilities: Capability[]; // "Hizmet Kapsamımız"
};

export const services: Service[] = [
  {
    key: "akilli-ulasim",
    slug: "akilli-ulasim",
    title: "Akıllı Ulaşım Sistemleri",
    image: "/services/akilli-ulasim.webp",
    desc: "Trafiği gerçek zamanlı izleyen, yöneten ve güvenli kılan uçtan uca akıllı ulaşım çözümleri.",
    longDesc:
      "Akıllı Ulaşım Sistemleri (AUS), modern altyapının ayrılmaz bir parçasıdır. MC Sistem olarak otoyol ve şehir içi ulaşım hatlarında trafik yönetimini gerçek zamanlı verilerle optimize eden, güvenli ve verimli sistemler tasarlıyoruz. Tasarımdan saha kurulumuna, devreye almadan uzun vadeli bakıma kadar tüm aşamaları anahtar teslim yürütüyoruz.",
    items: [
      "Trafik İzleme ve Yönetim Sistemleri",
      "Tünel Elektromekanik Sistemleri",
      "Şehiriçi Trafik Yönetim Sistemleri",
      "Ücret Toplama Sistemleri",
    ],
    benefits: [
      { title: "Gerçek Zamanlı Veri", desc: "Saha sensörlerinden anlık akış, hız ve olay verisi." },
      { title: "Güvenlik Odaklı", desc: "Olay tespiti, acil durum yönetimi ve hızlı müdahale." },
      { title: "Ölçeklenebilir Altyapı", desc: "Şehirden otoyola, ihtiyaca göre genişleyebilen mimari." },
      { title: "Akıllı Raporlama", desc: "Karar destek verisi, KPI ve trend analiz panelleri." },
    ],
    capabilities: [
      { title: "Trafik İzleme ve Yönetim Sistemleri", desc: "Sensör ve kameralarla trafik akışını gerçek zamanlı izleyip merkezden yönetiyoruz." },
      { title: "Tünel Elektromekanik Sistemleri", desc: "Tünellerde havalandırma, aydınlatma, yangın algılama ve kontrol sistemlerini kuruyoruz." },
      { title: "Şehiriçi Trafik Yönetim Sistemleri", desc: "Sinyalizasyon ve akıllı kavşak çözümleriyle şehir içi trafik akışını optimize ediyoruz." },
      { title: "Ücret Toplama Sistemleri", desc: "Otoyol ve geçişlerde otomatik (elektronik) ücret toplama altyapısı sağlıyoruz." },
    ],
  },
  {
    key: "rayli-ulasim",
    slug: "rayli-ulasim",
    title: "Raylı Ulaşım",
    image: "/services/rayli-ulasim.webp",
    desc: "Raylı hatlarda güvenli, kesintisiz ve verimli işletme için sinyalizasyon ve enerji altyapısı.",
    longDesc:
      "Demiryolu işletmeciliği; güvenliğin ve verimliliğin aynı anda en üst düzeyde tutulması gereken karmaşık bir mühendislik alanıdır. MC Sistem olarak sinyalizasyon, telekomünikasyon ve elektromekanik altyapı çözümlerini ana hatlardan kontrol merkezlerine kadar projelerin tamamına uluslararası standartlara uygun olarak entegre ediyoruz.",
    items: ["Sinyalizasyon Sistemleri", "Telekomünikasyon Sistemleri", "Elektrifikasyon Sistemleri"],
    benefits: [
      { title: "Uluslararası Standartlar", desc: "EN 50126/50128/50129 raylı sistem güvenlik standartları." },
      { title: "Sistem Entegrasyonu", desc: "Saha ekipmanı, ağ omurgası ve kontrol merkezi tek elden." },
      { title: "Yüksek Güvenlik", desc: "SIL4 sertifikalı bileşenler ve fail-safe tasarım yaklaşımı." },
      { title: "Anahtar Teslim", desc: "Tasarımdan devreye almaya tüm aşamaları tek noktadan yönetiriz." },
    ],
    capabilities: [
      { title: "Sinyalizasyon Sistemleri", desc: "Raylı hatlarda güvenli ve kesintisiz seyahat için sinyalizasyon altyapısı kuruyoruz." },
      { title: "Telekomünikasyon Sistemleri", desc: "Haberleşme, anons ve veri iletişimi için entegre telekomünikasyon çözümleri sunuyoruz." },
      { title: "Elektrifikasyon Sistemleri", desc: "Katener ve enerji besleme sistemleriyle hatların elektrifikasyonunu gerçekleştiriyoruz." },
    ],
  },
  {
    key: "metro",
    slug: "metro-sistemleri",
    title: "Metro Sistemleri",
    image: "/services/metro.webp",
    desc: "İstasyon ve hat boyu sistemlerin SCADA ile merkezi yönetimi ve yüksek frekanslı sefer altyapısı.",
    longDesc:
      "Metro projeleri, yüksek yolcu yoğunluğunun yönetildiği, güvenliğin ve sürekliliğin tartışmasız öncelik olduğu hassas mühendislik işleridir. MC Sistem; istasyon, tünel ve teknik tesislerde kontrol, haberleşme, güvenlik ve yolcu bilgilendirme sistemlerini sürücüsüz işletmeye uygun (GoA4) seviyede, 17+ kritik alt sistemi tek elden entegre eder.",
    items: ["Elektromekanik ve SCADA Sistemleri", "Sinyalizasyon Sistemleri"],
    benefits: [
      { title: "GoA4 Hazır", desc: "Sürücüsüz işletmeye uygun tam otonom altyapı tasarımı." },
      { title: "Sahada Test Edilmiş", desc: "İstanbul metro hatlarında devreye alınmış sistemler." },
      { title: "Bütünsel Entegrasyon", desc: "17+ alt sistemi tek mimaride buluşturan yönetim." },
      { title: "Operasyonel Destek", desc: "Devreye alım sonrası 7/24 teknik destek ve bakım." },
    ],
    capabilities: [
      { title: "Elektromekanik ve SCADA Sistemleri", desc: "İstasyon ve hat boyu elektromekanik sistemleri SCADA ile merkezden izleyip yönetiyoruz." },
      { title: "Sinyalizasyon Sistemleri", desc: "Metro hatlarında yüksek frekanslı ve güvenli sefer için sinyalizasyon sistemleri kuruyoruz." },
    ],
  },
  {
    key: "havaalani",
    slug: "havaalani",
    title: "Havaalanı",
    image: "/services/havaalani.webp",
    desc: "Hava trafiğinin güvenli yönetimi için seyrüsefer, aydınlatma ve bilgi sistemleri.",
    longDesc:
      "Havalimanları; binlerce yolcunun, ekipmanın ve operasyonel sürecin birlikte çalıştığı son derece dinamik tesislerdir. MC Sistem terminal binalarında bina yönetim sistemleri (BYS), apron aydınlatması, jeneratör/UPS altyapısı, güvenlik ve haberleşme sistemlerini anahtar teslim kurar; Kuveyt T4 dahil uluslararası tecrübeyi her terminale taşır.",
    items: ["Radar ve Seyrüsefer Sistemleri", "Pist Aydınlatma", "Uçak Park Ettirme Sistemi", "Havaalanı Bilgi Sistemi"],
    benefits: [
      { title: "Yüksek Enerji Verimi", desc: "Akıllı BYS ile enerji tüketiminde %30'a varan kazanç." },
      { title: "Güvenli Operasyon", desc: "Çok katmanlı güvenlik, erişim kontrolü ve perimeter sistemleri." },
      { title: "ICAO Uyumlu", desc: "Uluslararası havacılık standartlarına tam uyum." },
      { title: "Yolcu Konforu", desc: "Bilgilendirme, iklimlendirme ve yönlendirme entegrasyonu." },
    ],
    capabilities: [
      { title: "Radar ve Seyrüsefer Sistemleri", desc: "Hava trafiğinin güvenli yönetimi için radar ve seyrüsefer yardımcı sistemleri sağlıyoruz." },
      { title: "Pist Aydınlatma", desc: "Pist, taksi yolu ve apron aydınlatma (AGL) sistemlerini kuruyor ve devreye alıyoruz." },
      { title: "Uçak Park Ettirme Sistemi", desc: "Uçakların hassas ve güvenli yanaşması için görsel yanaşma yönlendirme sistemleri sağlıyoruz." },
      { title: "Havaalanı Bilgi Sistemi", desc: "Uçuş bilgi ekranları (FIDS) ve yolcu bilgilendirme sistemlerini entegre ediyoruz." },
    ],
  },
  {
    key: "yeralti",
    slug: "yeralti-tesisleri",
    title: "Yeraltı Tesisleri",
    image: "/services/yeralti.jpg",
    desc: "Yeraltı altyapı tesisleri ve kablo galerilerinde elektromekanik sistem entegrasyonu.",
    longDesc:
      "Şehirlerin ve büyük altyapı yatırımlarının görünmeyen ama en kritik bileşeni yeraltı tesisleridir. MC Sistem; enerji dağıtım galerileri, fiber optik şebeke, kablo galerileri ve teknik tesis elektromekanik bağlantılarını uluslararası standartlara uygun projelendirir; etütten devreye almaya kadar anahtar teslim yönetir.",
    items: ["Yeraltı Altyapı Sistemleri", "Kablo Galerileri", "Elektromekanik Entegrasyon"],
    benefits: [
      { title: "Sürdürülebilir Altyapı", desc: "Uzun ömürlü tasarım ve düşük bakım maliyetli kurulum." },
      { title: "Standartlara Uygun", desc: "TS EN ve IEC standartlarında projelendirme ve uygulama." },
      { title: "Modüler Genişleme", desc: "İhtiyaca göre büyütülebilir kablo galeri tasarımı." },
      { title: "Anahtar Teslim", desc: "Etüt, tasarım, kurulum ve devreye alma tek bir elden." },
    ],
    capabilities: [
      { title: "Yeraltı Altyapı Sistemleri", desc: "Enerji dağıtım galerileri ve teknik tesis bağlantılarını uluslararası standartlarda projelendiriyoruz." },
      { title: "Kablo Galerileri", desc: "Beton/PVC galeri yapımı, koruma ve havalandırma altyapısını kuruyoruz." },
      { title: "Fiber Optik Şebeke", desc: "Backbone fiber omurgası, ek (splice) ve terminasyon işlerini yürütüyoruz." },
      { title: "Devreye Alma & Test", desc: "Hi-Pot, megger ve OTDR testleriyle altyapıyı devreye alıp raporluyoruz." },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  location: string;
  country: string;
  category: string;
  status: "Tamamlandı" | "Devam Ediyor";
  year: number;
  image: string;
  desc: string;
  longDesc: string;
  scope: string[];
};

export const projects: Project[] = [
  {
    slug: "kuzey-marmara-otoyolu",
    title: "Kuzey Marmara Otoyolu",
    location: "Kınalı–Odayeri / Kurtköy–Akyazı",
    country: "Türkiye",
    category: "Akıllı Ulaşım & Tünel Elektromekanik",
    status: "Tamamlandı",
    year: 2020,
    image: "/projects/proje-1.jpg",
    desc: "Otoyol genelinde akıllı ulaşım, tünel elektromekanik ve fiberoptik haberleşme altyapısının anahtar teslim kurulumu.",
    longDesc:
      "Türkiye'nin en büyük ulaşım altyapı yatırımlarından biri olan Kuzey Marmara Otoyolu projesinde MC Sistem; akıllı ulaşım sistemleri (AUS), tünel elektromekanik sistemleri, fiberoptik haberleşme altyapısı ve trafik kontrol sistemlerinin tasarımı, temini, kurulumu ve devreye alınmasını anahtar teslim gerçekleştirmiştir. 1000 km'yi aşan fiberoptik altyapı, 160 CCTV kamera ve 86 değişken mesaj işareti entegre edilmiştir.",
    scope: ["Akıllı Ulaşım Sistemleri (AUS)", "Tünel elektromekanik sistemleri", "Fiberoptik haberleşme altyapısı", "Trafik kontrol ve izleme", "Değişken mesaj/işaret panelleri", "Meteoroloji istasyonları"],
  },
  {
    slug: "ovit-tuneli",
    title: "Ovit Tüneli",
    location: "Rize / İkizdere",
    country: "Türkiye",
    category: "Tünel Elektromekanik Sistemleri",
    status: "Tamamlandı",
    year: 2018,
    image: "/projects/proje-2.jpg",
    desc: "Türkiye'nin en uzun çift tüplü karayolu tünellerinden birinde uçtan uca elektromekanik sistem entegrasyonu.",
    longDesc:
      "Ovit Tüneli, Doğu Karadeniz'i iç bölgelere bağlayan stratejik bir geçiştir. MC Sistem bu projede havalandırma, aydınlatma, yangın algılama, CCTV, anons ve enerji dağıtım sistemlerini anahtar teslim olarak kurmuş; tünel içi tüm kritik elektromekanik altyapıyı uluslararası standartlara uygun şekilde devreye almıştır.",
    scope: ["Tünel havalandırma kontrolü", "Aydınlatma sistemleri", "Yangın algılama ve söndürme", "CCTV ve görüntü kayıt", "Anons & acil çağrı", "Enerji dağıtım altyapısı"],
  },
  {
    slug: "ankara-metrosu",
    title: "Ankara Metrosu",
    location: "Ankara / Çayyolu",
    country: "Türkiye",
    category: "Metro Sinyalizasyon & Elektromekanik",
    status: "Tamamlandı",
    year: 2016,
    image: "/projects/proje-3.jpg",
    desc: "İstasyon ve hat boyu elektromekanik ile sinyalizasyon sistemlerinin SCADA tabanlı merkezi entegrasyonu.",
    longDesc:
      "Ankara Metrosu projesinde MC Sistem; istasyonlar ve hat boyu için elektromekanik sistemler, SCADA ile merkezi izleme/yönetim ve sinyalizasyon altyapısını entegre etmiştir. Yolcu konforu ve işletme sürekliliğini önceleyen çözümler, yüksek frekanslı ve güvenli sefer hedefiyle devreye alınmıştır.",
    scope: ["Elektromekanik sistemler", "SCADA merkezi izleme", "Sinyalizasyon altyapısı", "Enerji dağıtımı", "Yangın algılama", "Yolcu bilgilendirme"],
  },
  {
    slug: "zakho-tuneli",
    title: "Zakho Tüneli",
    location: "Duhok / Zakho",
    country: "Irak",
    category: "Tünel Elektromekanik Sistemleri",
    status: "Tamamlandı",
    year: 2019,
    image: "/projects/proje-4.jpg",
    desc: "Yurt dışı tünel projesinde elektromekanik ve kontrol sistemlerinin anahtar teslim kurulumu.",
    longDesc:
      "Irak'taki Zakho Tüneli projesinde MC Sistem, uluslararası saha tecrübesini ortaya koyarak havalandırma, aydınlatma, yangın algılama, haberleşme ve enerji sistemlerini anahtar teslim kurmuştur. Zorlu saha koşullarında uçtan uca mühendislik ve devreye alma yürütülmüştür.",
    scope: ["Havalandırma kontrolü", "Aydınlatma sistemleri", "Yangın algılama", "Haberleşme altyapısı", "Enerji dağıtımı", "Kontrol ve izleme"],
  },
  {
    slug: "kuveyt-altyapi",
    title: "Kuveyt Altyapı Projesi",
    location: "Kuveyt",
    country: "Kuveyt",
    category: "Kontrol, Haberleşme & BMS",
    status: "Tamamlandı",
    year: 2021,
    image: "/projects/proje-5.jpg",
    desc: "Terminal ve teknik tesislerde bina yönetim, güvenlik ve haberleşme sistemlerinin entegrasyonu.",
    longDesc:
      "Kuveyt'teki altyapı projesinde MC Sistem; bina yönetim sistemleri (BYS), güvenlik, haberleşme ve enerji altyapısını entegre etmiştir. Uluslararası havalimanı ve altyapı projelerindeki tecrübe, yüksek güvenlik ve enerji verimliliği hedefiyle sahaya taşınmıştır.",
    scope: ["Bina yönetim sistemleri (BYS)", "Güvenlik & CCTV", "Haberleşme altyapısı", "Yedek enerji (UPS/jeneratör)", "Erişim kontrolü", "Yangın algılama"],
  },
  {
    slug: "dudullu-bostanci-metrosu",
    title: "Dudullu–Bostancı Metrosu",
    location: "İstanbul",
    country: "Türkiye",
    category: "Metro Kontrol & Haberleşme",
    status: "Devam Ediyor",
    year: 2023,
    image: "/projects/proje-6.jpg",
    desc: "14,2 km, 13 istasyonlu GoA4 sürücüsüz hatta kontrol, haberleşme ve güvenlik sistemleri.",
    longDesc:
      "Dudullu – Bostancı Metro hattı, İstanbul Anadolu Yakası'nda 14,2 km uzunluğunda ve 13 istasyondan oluşan GoA4 sürücüsüz işletmeye uygun bir projedir. MC Sistem; istasyon, otopark, depo ve teknik tesisleri kapsayan kontrol, haberleşme ve güvenlik sistemlerini anahtar teslim kurmaktadır. Anons, CCTV, erişim kontrol, telefon, telsiz, yangın algılama ve yolcu bilgilendirme dahil 17 kritik sistem kapsamdadır.",
    scope: ["Anons sistemleri", "CCTV ve görüntü altyapısı", "Erişim kontrol sistemleri", "Telefon & telsiz haberleşmesi", "Yangın algılama", "Yolcu bilgilendirme"],
  },
  {
    slug: "umman-tunel",
    title: "Umman Tünel Projesi",
    location: "Maskat",
    country: "Umman",
    category: "Tünel Elektromekanik Sistemleri",
    status: "Devam Ediyor",
    year: 2022,
    image: "/projects/proje-7.jpg",
    desc: "Körfez bölgesinde tünel elektromekanik sistemlerinin uçtan uca kurulumu ve devreye alınması.",
    longDesc:
      "Umman'daki tünel projesinde MC Sistem; havalandırma, aydınlatma, yangın algılama, haberleşme ve enerji sistemlerini uluslararası standartlara uygun olarak kurmaktadır. Bölgesel iklim ve saha koşullarına göre optimize edilmiş mühendislik çözümleri uygulanmaktadır.",
    scope: ["Tünel havalandırması", "Aydınlatma sistemleri", "Yangın algılama", "Haberleşme altyapısı", "Enerji dağıtımı", "Kontrol ve izleme"],
  },
  {
    slug: "1915-canakkale",
    title: "1915 Çanakkale Bağlantısı",
    location: "Gelibolu – Eceabat",
    country: "Türkiye",
    category: "Elektrik & Elektromekanik Sistemler",
    status: "Devam Ediyor",
    year: 2022,
    image: "/projects/proje-8.jpg",
    desc: "Bağlantı yolları ve tesislerde elektrik ve elektromekanik sistemlerin entegrasyonu.",
    longDesc:
      "1915 Çanakkale Köprüsü bağlantı projesinde MC Sistem; bağlantı yolları ve teknik tesislerde elektrik, aydınlatma, haberleşme ve elektromekanik sistemlerin kurulumunu yürütmektedir. Yüksek görünürlük, güvenlik ve enerji verimliliği önceliklendirilmiştir.",
    scope: ["Elektrik & enerji dağıtımı", "Yol ve tesis aydınlatması", "Haberleşme altyapısı", "CCTV ve güvenlik", "Kontrol sistemleri", "Devreye alma & test"],
  },
];

export const references: { file: string; name: string }[] = [
  { file: "referans-18.png", name: "Türkiye Cumhuriyeti Devlet Demiryolları" },
  { file: "referans-10.png", name: "Karayolları Genel Müdürlüğü" },
  { file: "referans-1.png", name: "Altyapı Yatırımları Genel Müdürlüğü" },
  { file: "referans-5.png", name: "Devlet Hava Meydanları İşletmesi Genel Müdürlüğü" },
  { file: "referans-19.png", name: "T.C. Ulaştırma ve Altyapı Bakanlığı" },
  { file: "referans-20.png", name: "Umman Ulaştırma, Haberleşme ve Bilgi Teknolojileri Bakanlığı" },
  { file: "referans-cezayir.svg", name: "Cezayir Ulaştırma Bakanlığı" },
  { file: "referans-3.png", name: "Azerbaycan Cumhuriyeti Dijital Kalkınma ve Ulaştırma Bakanlığı" },
  { file: "referans-9.png", name: "Irak Ulaştırma Bakanlığı" },
  { file: "referans-17.png", name: "Suudi Arabistan Ulaştırma ve Lojistik Hizmetleri Bakanlığı" },
  { file: "referans-12.png", name: "Kuwait Directorate General of Civil Aviation (DGCA)" },
  { file: "referans-kalyon.svg", name: "Kalyon Holding" },
  { file: "referans-4.png", name: "Cengiz İnşaat Sanayi ve Ticaret A.Ş." },
  { file: "referans-13.png", name: "Limak İnşaat Sanayi ve Ticaret A.Ş." },
  { file: "referans-11.png", name: "Kolin İnşaat Turizm Sanayi ve Ticaret A.Ş." },
  { file: "referans-15.png", name: "Özgün İnşaat" },
  { file: "referans-7.png", name: "Eze İnşaat A.Ş." },
  { file: "referans-14.png", name: "Nurol İnşaat ve Ticaret A.Ş." },
  { file: "referans-2.png", name: "ASELSAN Elektronik Sanayi ve Ticaret A.Ş." },
  { file: "referans-6.png", name: "Doğuş İnşaat ve Ticaret A.Ş." },
  { file: "referans-16.png", name: "SOCAR" },
  { file: "referans-8.png", name: "IC İçtaş İnşaat Sanayi ve Ticaret A.Ş." },
];

// Bloglar (mcsistem.com.tr içeriğinden) — şimdilik mock
export type Blog = { title: string; date: string; category: string; image: string; excerpt: string };
export const blogs: Blog[] = [
  {
    title: "Anahtar Teslim Mühendislik: 25 Yıllık Yaklaşımımız",
    date: "22 Nisan 2026",
    category: "Kurumsal",
    image: "/company/sirket-clean.jpg",
    excerpt: "Çeyrek asrı aşan saha tecrübemizle anahtar teslim elektromekanik mühendisliği nasıl tanımlıyor, hangi prensiplerle çalışıyoruz? MC Sistem'in kurumsal yaklaşımını derledik.",
  },
  {
    title: "Yeni Zigana Tüneli'nde Devreye Alma Aşamasına Geçtik",
    date: "18 Mart 2026",
    category: "Proje Güncellemesi",
    image: "/projects/proje-2.jpg",
    excerpt: "Avrupa'nın en uzun karayolu tünellerinden Yeni Zigana Tüneli'nde elektromekanik sistemlerin devreye alma testleri başladı. Saha ekibimizin son güncellemelerini paylaşıyoruz.",
  },
  {
    title: "Akıllı Ulaşım Sistemlerinin Geleceği: 2026 Trendleri",
    date: "4 Şubat 2026",
    category: "Sektör",
    image: "/services/akilli-ulasim.webp",
    excerpt: "Yapay zeka destekli trafik yönetiminden 5G altyapısına, V2X iletişiminden enerji verimli sensör ağlarına — akıllı ulaşım sistemlerinde bizi bekleyen teknolojik dönüşümleri analiz ettik.",
  },
];

// Banner daktilo metinleri
export const heroWords = [
  "Akıllı Ulaşım Sistemleri",
  "Raylı Ulaşım Sistemleri",
  "Metro Sistemleri",
  "Havaalanı Sistemleri",
  "Yeraltı Tesisleri",
  "Elektromekanik Sistemler",
];
