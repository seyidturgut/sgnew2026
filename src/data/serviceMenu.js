import {
    Coins,
    Zap,
    Scale,
    Globe,
    TrendingUp,
    FileText,
    LineChart,
    Target,
    ShieldCheck,
    Briefcase,
    Ship,
    Users,
    Settings,
    Monitor,
    Code
} from 'lucide-react';

export const serviceMenu = [
    {
        title: "Vergi & Finans",
        slug: "vergi-finans",
        description: "Sistem Global olarak, müşterilerimizin tüm paydaşlar için uzun vadeli değer yaratmasına yardımcı oluyoruz. Veri ve teknolojiyle desteklenen hizmet ve çözümlerimiz.",
        icon: Coins,
        color: "from-[#F37021] to-orange-400",
        bgSubtle: "bg-orange-50",
        textColor: "text-[#F37021]",
        subcategories: [
            {
                title: "Vergi",
                slug: "vergi",
                icon: FileText,
                description: "Vergi yönetimi, tasdik ve uyum süreçlerinde uzman danışmanlık.",
                items: [
                    { title: 'Vergi Yönetim Danışmanlığı', href: '/servisler/vergi-finans/vergi/vergi-yonetim-danismanligi' },
                    { title: "Transfer Fiyatlandırması", href: "/servisler/vergi-finans/vergi/transfer-fiyatlandirmasi" },
                    { title: "Kurumlar ve Gelir Vergisi Tasdiki", href: "/servisler/vergi-finans/vergi/kurumlar-ve-gelir-vergisi-tasdiki" },
                    { title: "KDV İade", href: "/servisler/vergi-finans/vergi/kdv-iade" },
                    { title: "Arge ve Tasarım İndirimi Raporu", href: "/servisler/vergi-finans/vergi/ar-ge-ve-tasarim-indirimi-raporu" },
                    { title: "Due Diligence", href: "/servisler/vergi-finans/vergi/due-diligence" },
                    { title: "Outsource Bordro Yönetimi", href: "/servisler/vergi-finans/vergi/outsource-bordro-yonetimi" },
                    { title: "Şirket Kuruluşu Danışmanlığı", href: "/servisler/vergi-finans/vergi/sirket-kurulusu-danismanligi" },
                    { title: "SGK Teşvik Danışmanlığı", href: "/servisler/vergi-finans/vergi/sgk-tesvik-danismanligi" },
                ]
            },
            {
                title: "Kurumsal Finansman",
                slug: "kurumsal-finansman",
                icon: LineChart,
                description: "Şirket değerleme, halka arz ve stratejik finansal danışmanlık.",
                items: [
                    { title: "Şirket Değerleme", href: "/servisler/vergi-finans/kurumsal-finansman/sirket-degerleme" },
                    { title: "Marka Değerleme", href: "/servisler/vergi-finans/kurumsal-finansman/marka-degerleme" },
                    { title: "Yazılım ve Teknoloji Değerleme", href: "/servisler/vergi-finans/kurumsal-finansman/yazilim-ve-teknoloji-degerleme" },
                    { title: "Özel Hak ve Lisans Değerleme", href: "/servisler/vergi-finans/kurumsal-finansman/ozel-hak-ve-lisans-degerleme" },
                    { title: "İhale Bedeli Tespiti", href: "/servisler/vergi-finans/kurumsal-finansman/ihale-bedeli-tespiti" },
                    { title: "Halka Arz Danışmanlığı", href: "/servisler/vergi-finans/kurumsal-finansman/halka-arz-danismanligi" },
                    { title: "Sektör Analiz Raporları", href: "/servisler/vergi-finans/kurumsal-finansman/sektor-analiz-raporlari" },
                    { title: "Finansal Danışmanlıklar", href: "/servisler/vergi-finans/kurumsal-finansman/finansal-danismanliklar" },
                ]
            },
            {
                title: "Finansal Araçlar",
                slug: "finansal-araclar",
                icon: Monitor,
                description: "Finansal süreçler ve vergi yönetimi araçları.",
                items: [
                    { title: 'Rating Value', href: '/dijital-urunler/vergi-ve-finans/rating-value' }
                ]
            }
        ]
    },
    {
        title: "Ar-Ge ve Fikri Mülkiyet",
        slug: "ar-ge-ve-fikri-mulkiyet",
        description: "Ar-Ge yatırımlarını hızlandıran teşvik ve fon danışmanlığı ile fikri mülkiyet haklarınızı koruyan uzman çözümler.",
        icon: Zap,
        color: "from-[#F37021] to-orange-400",
        bgSubtle: "bg-orange-50",
        textColor: "text-[#F37021]",
        subcategories: [
            {
                title: "Ar-Ge Yönetimi",
                slug: "ar-ge-yonetimi",
                icon: Target,
                description: "Teknopark, Ar-Ge Merkezi ve hibe fon yönetim danışmanlığı.",
                items: [
                    { title: "Teknopark Danışmanlığı", href: "/servisler/ar-ge-ve-fikri-mulkiyet/ar-ge-yonetimi/teknopark-danismanligi" },
                    { title: "Ar-Ge Merkezi Danışmanlığı", href: "/servisler/ar-ge-ve-fikri-mulkiyet/ar-ge-yonetimi/ar-ge-merkezi-danismanligi" },
                    { title: "Yatırım Teşvik Danışmanlığı", href: "/servisler/ar-ge-ve-fikri-mulkiyet/ar-ge-yonetimi/yatirim-tesvik-danismanligi" },
                    { title: "TÜBİTAK Fonlarına Erişim Danışmanlığı", href: "/servisler/ar-ge-ve-fikri-mulkiyet/ar-ge-yonetimi/tubitak-destekleri" },
                    { title: "Dahilde İşleme Rejimi Danışmanlığı", href: "/servisler/ar-ge-ve-fikri-mulkiyet/ar-ge-yonetimi/dahilde-isleme-rejimi-danismanligi" },
                    { title: "Tasarım Merkezi Danışmanlığı", href: "/servisler/ar-ge-ve-fikri-mulkiyet/ar-ge-yonetimi/tasarim-merkezi-danismanligi" },
                    { title: "Uluslararası Projeler ve Kalkınma Danışmanlığı", href: "/servisler/ar-ge-ve-fikri-mulkiyet/ar-ge-yonetimi/uluslararasi-projeler-ve-kalkinma-danismanligi" },
                    { title: "Teknoloji Odaklı Sanayi Hamlesi", href: "/servisler/ar-ge-ve-fikri-mulkiyet/ar-ge-yonetimi/teknoloji-odakli-sanayi-hamlesi" },
                    { title: "Uluslararası Fon Programları", href: "/servisler/ar-ge-ve-fikri-mulkiyet/ar-ge-yonetimi/uluslararasi-fon-programlari" },
                    { title: "Ticaret Bakanlığı İhracat Destekleri", href: "/servisler/ar-ge-ve-fikri-mulkiyet/ar-ge-yonetimi/ticaret-bakanligi-ihracat-destekleri" },
                    { title: "E-Turquality Programı", href: "/servisler/ar-ge-ve-fikri-mulkiyet/ar-ge-yonetimi/e-turquality-programi" },
                    { title: "KOSGEB Destekleri", href: "/servisler/ar-ge-ve-fikri-mulkiyet/ar-ge-yonetimi/kosgeb-destekleri" }
                ]
            },
            {
                title: "Fikri Mülkiyet",
                slug: "fikri-mulkiyet",
                icon: ShieldCheck,
                description: "Marka, tasarım ve patent tescili ile haklarınızın korunması.",
                items: [
                    { title: "Marka, Tasarım, Patent Başvuruları", href: "/servisler/ar-ge-ve-fikri-mulkiyet/fikri-mulkiyet/marka-tasarim-patent-basvurulari" },
                    { title: "Patent İhlal Analizleri", href: "/servisler/ar-ge-ve-fikri-mulkiyet/fikri-mulkiyet/patent-ihlal-analizleri" }
                ]
            },
            {
                title: "Dijital Çözümler",
                slug: "dijital-cozumler",
                icon: Monitor,
                description: "Ar-Ge ve teknoloji projelerinizi yöneten dijital platformlar.",
                items: [
                    { title: 'HaaS', href: '/dijital-urunler/ar-ge-ve-fikri-mulkiyet/haas' },
                    { title: 'Sparks', href: '/dijital-urunler/ar-ge-ve-fikri-mulkiyet/sparks' },
                    { title: 'Agra', href: '/dijital-urunler/ar-ge-ve-fikri-mulkiyet/agra' },
                    { title: 'Argera', href: '/dijital-urunler/ar-ge-ve-fikri-mulkiyet/argera' },
                    { title: 'Marqby', href: '/dijital-urunler/ar-ge-ve-fikri-mulkiyet/marqby' },
                ]
            }
        ]
    },
    {
        title: "Mevzuat & Uyum",
        slug: "mevzuat-uyum",
        description: "Şirketinizin yasal süreçlere tam uyum sağlaması ve risklerin yönetilmesi için kapsamlı mevzuat danışmanlığı.",
        icon: Scale,
        color: "from-[#F37021] to-orange-400",
        bgSubtle: "bg-orange-50",
        textColor: "text-[#F37021]",
        subcategories: [
            {
                title: "Yasal Uyum ve Risk",
                slug: "yasal-uyum-risk",
                icon: Briefcase,
                description: "KVKK, Şirketler Hukuku ve yasal risk yönetimi.",
                items: [
                    { title: "Ar-Ge Yönetimi ve Yasal Çerçeveye Uyum Danışmanlığı", href: "/servisler/mevzuat-ve-uyum/ar-ge-yonetimi-ve-yasal-cerceveye-uyum-danismanligi" },
                    { title: "Sözleşme Risk Yönetimi", href: "/servisler/mevzuat-ve-uyum/sozlesme-risk-yonetimi" },
                    { title: "Kişisel Veri Yönetimi ve Uyum Danışmanlığı", href: "/servisler/mevzuat-ve-uyum/kisisel-veri-yonetimi-ve-uyum-danismanligi" },
                    { title: "Aile Anayasası ve Kurumsallaşma Hizmetleri", href: "/servisler/mevzuat-ve-uyum/aile-anayasasi-ve-kurumsallasma-hizmetleri" },
                    { title: "Birleşme ve Devralma (M&A) Danışmanlığı", href: "/servisler/mevzuat-ve-uyum/birlesme-ve-devralma-ma-danismanligi" },
                    { title: "Genel Kurul Danışmanlığı", href: "/servisler/mevzuat-ve-uyum/genel-kurul-danismanligi" },
                    { title: "İş Süreçleri ve Uyum Danışmanlığı", href: "/servisler/mevzuat-ve-uyum/is-surecleri-ve-uyum-danismanligi" },
                    { title: "Pay Devri ve Pay Sahipliği Sözleşmeleri Danışmanlığı", href: "/servisler/mevzuat-ve-uyum/pay-devri-ve-pay-sahipligi-sozlesmeleri-danismanligi" },
                    { title: "Rekabet Uyum ve Strateji Danışmanlığı", href: "/servisler/mevzuat-ve-uyum/rekabet-uyum-ve-strateji-danismanligi" },
                    { title: "Şirket Kurma, TTK Uygulama ve Sicil İşleri Danışmanlığı", href: "/servisler/mevzuat-ve-uyum/sirket-kurma-ttk-uygulama-ve-sicil-isleri-danismanligi" },
                    { title: "Startup Destek ve Uyum Danışmanlığı", href: "/servisler/mevzuat-ve-uyum/startup-destek-ve-uyum-danismanligi" },
                ]
            },
            {
                title: "Yasal Uyum",
                slug: "yasal-uyum",
                icon: ShieldCheck,
                description: "Hukuki ve mevzuat uyum teknolojileri.",
                items: [
                    { title: 'Legalmatic', href: '/dijital-urunler/mevzuat-ve-uyum/legalmatic' }
                ]
            }
        ]
    },
    {
        title: "Globalleşme & İhracat",
        slug: "globallesme-ihracat",
        description: "Global pazarlara açılmanız ve ihracat potansiyelinizi artırmanız için uçtan uca çözümler.",
        icon: Globe,
        color: "from-[#F37021] to-orange-400",
        bgSubtle: "bg-orange-50",
        textColor: "text-[#F37021]",
        subcategories: [
            {
                title: "Uluslararası Ticaret",
                slug: "uluslararasi-ticaret",
                icon: Ship,
                description: "Pazar analizi, yurtdışı şirket kurma ve ihracat desteği.",
                items: [
                    { title: "Pazara Giriş Projeleri Desteği", href: "/servisler/globallesme-ve-ihracat/pazara-giris-projeleri-destegi" },
                    { title: "Pazar Analizi ve Hedef Pazar Tespiti", href: "/servisler/globallesme-ve-ihracat/pazar-analizi-ve-hedef-pazar-tespiti" },
                    { title: "Yurtdışı Şirket Kurma", href: "/servisler/globallesme-ve-ihracat/yurtdisi-sirket-kurma" },
                    { title: "İhracat Danışmanlığı ve İhracata Başlangıç", href: "/servisler/globallesme-ve-ihracat/ihracat-danismanligi-ve-ihracata-baslangic" },
                    { title: "İhracat Geliştirme", href: "/servisler/globallesme-ve-ihracat/ihracat-gelistirme" },
                    { title: "Ticaret Bakanlığı İhracat Destekleri", href: "/servisler/globallesme-ve-ihracat/ticaret-bakanligi-ihracat-destekleri" },
                    { title: "E-Turquality Programı", href: "/servisler/globallesme-ve-ihracat/e-turquality-programi" },
                ]
            },
            {
                title: "İhracat Yazılımları",
                slug: "ihracat-yazilimlari",
                icon: Globe,
                description: "Uluslararası ticaret ve ekspansiyon yazılımları.",
                items: [
                    { title: 'Jestiyon', href: '/dijital-urunler/globallesme-ve-ihracat/jestiyon' },
                    { title: 'Quandatum', href: '/dijital-urunler/globallesme-ve-ihracat/quandatum' }
                ]
            }
        ]
    },
    {
        title: "Finansmana Erişim & Sürdürülebilirlik",
        slug: "finansmana-erisim-surdurulebilirlik",
        description: "Büyüme hedeflerinize ulaşmanız için finansal kaynaklara erişim ve sürdürülebilir gelecek stratejileri.",
        icon: TrendingUp,
        color: "from-[#F37021] to-orange-400",
        bgSubtle: "bg-orange-50",
        textColor: "text-[#F37021]",
        subcategories: [
            {
                title: "Finansmana Erişim",
                slug: "finansmana-erisim",
                icon: Coins,
                description: "Devlet destekleri, hibe ve teşvik fonlarına erişim.",
                items: [
                    { title: "Ticaret Bakanlığı Destekleri", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/finansmana-erisim/ticaret-bakanligi-destekleri" },
                    { title: "TÜBİTAK Destekleri", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/finansmana-erisim/tubitak-destekleri" },
                    { title: "Yatırım Teşvik Danışmanlığı", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/finansmana-erisim/yatirim-tesvik-danismanligi" },
                    { title: "E-Turquality Programı", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/finansmana-erisim/e-turquality-programi" },
                    { title: "KOSGEB Destekleri", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/finansmana-erisim/kosgeb-destekleri" },
                    { title: "Dahilde İşleme Rejimi Danışmanlığı", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/finansmana-erisim/dahilde-isleme-rejimi-danismanligi" },
                ]
            },
            {
                title: "Sürdürülebilirlik",
                slug: "surdurulebilirlik",
                icon: Globe,
                description: "ESG, karbon ayak izi ve sürdürülebilirlik raporlaması.",
                items: [
                    { title: "Sürdürülebilirlik Raporlaması", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/surdurulebilirlik/surdurulebilirlik-raporlamasi" },
                    { title: "TSRS Raporu (TSR Standartları)", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/surdurulebilirlik/tsrs-raporu" },
                    { title: "Entegre Raporlama", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/surdurulebilirlik/entegre-raporlama" },
                    { title: "Refinitiv (LSEG) ve SBTi Destekleri", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/surdurulebilirlik/refinitiv-lseg" },
                    { title: "ISO 14064 Karbon Ayak İzi Raporu", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/surdurulebilirlik/iso-14064-1-kurumsal-karbon-ayak-izi-raporu" },
                    { title: "ISO 14046 Su Ayak İzi Raporu", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/surdurulebilirlik/iso-14046-su-ayak-izi-raporu" },
                ]
            },
            {
                title: "Birleşme ve Satın Alma (M&A)",
                slug: "birlesme-ve-satin-alma-ma",
                icon: Users,
                description: "Şirket evlilikleri, satın alma ve yatırım fizibilitesi.",
                items: [
                    { title: "Birleşme ve Satın Alma (M&A)", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/birlesme-ve-satin-alma-ma" },
                    { title: "Yatırım Fizibilitesi Hizmetleri", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/birlesme-ve-satin-alma-ma/yatirim-fizibilitesi-hizmetleri" },
                    { title: "Yönetim Danışmanlığı Hizmetleri", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/birlesme-ve-satin-alma-ma/yonetim-danismanligi-hizmetleri" }
                ]
            },
            {
                title: "RPA ve Süreç Danışmanlığı",
                slug: "rpa-ve-surec-danismanligi",
                icon: Settings,
                description: "Dijitalleşme, RPA ve süreç iyileştirme çözümleri.",
                items: [
                    { title: "Süreç İyileştirme Uygulamaları", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/rpa-ve-surec-danismanligi/surec-iyilestirme-uygulamalari" },
                    { title: "İç Denetim ve Sistem Kurulumu", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/rpa-ve-surec-danismanligi/ic-denetim-ve-sistem-kurulum-danismanligi" },
                    { title: "Kurumsallaşma Check Up", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/rpa-ve-surec-danismanligi/kurumsallasma-hizli-check-up" },
                    { title: "Dijitalleşme Danışmanlığı", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/rpa-ve-surec-danismanligi/dijitallesme-danismanligi" },
                    { title: "RPA Teknik İzleme & Workshop", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/rpa-ve-surec-danismanligi/rpa-teknik-izleme" },
                ]
            }
        ]
    },
    {
        title: "Yazılım: Proje ve Ürün Çözümleri",
        slug: "yazilim-proje-urun-cozumleri",
        description: "Dijital dönüşümünüzü hızlandıran teknoloji çözümleri.",
        icon: Monitor,
        color: "from-indigo-500 to-purple-600",
        bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        subcategories: [
            {
                title: "Proje ve Ürün Çözümleri",
                slug: "proje-ve-urun-cozumleri",
                icon: Code,
                items: [
                    { title: 'Dijital Çözümler ve Teknoloji Platformları', href: '/servisler/yazilim-proje-urun-cozumleri/dijital-cozumler-teknoloji-platformlari' },
                    { title: 'Yazılım Geliştirme Hizmetleri', href: '/servisler/yazilim-proje-urun-cozumleri/yazilim-gelistirme-hizmetleri' },
                    { title: 'Destek Çözümler', href: '/servisler/yazilim-proje-urun-cozumleri/destek-cozumler' },
                    { title: 'Dijital Hizmetler', href: '/servisler/yazilim-proje-urun-cozumleri/dijital-hizmetler' },
                ]
            }
        ]
    }
];
