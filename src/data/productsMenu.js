import {
    Cpu,
    Coins,
    Scale,
    Globe,
    Monitor,
    Lightbulb,
    ShieldCheck,
    TrendingUp,
    Rocket,
    BookOpen
} from 'lucide-react';

export const productsMenu = [
    {
        title: "Ar-Ge ve Fikri Mülkiyet",
        slug: "ar-ge-ve-fikri-mulkiyet",
        description: "Teknoloji yönetimi ve fikri mülkiyet çözümlerimiz.",
        icon: Cpu,
        subcategories: [
            {
                title: "Dijital Çözümler",
                slug: "dijital-cozumler",
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
        title: "Vergi ve Finans",
        slug: "vergi-ve-finans",
        description: "Finansal süreçler ve vergi yönetimi araçları.",
        icon: Coins,
        subcategories: [
            {
                title: "Finansal Araçlar",
                slug: "finansal-araclar",
                items: [
                    { title: 'Rating Value', href: '/dijital-urunler/vergi-ve-finans/rating-value' }
                ]
            }
        ]
    },
    {
        title: "Mevzuat ve Uyum",
        slug: "mevzuat-ve-uyum",
        description: "Hukuki ve mevzuat uyum teknolojileri.",
        icon: ShieldCheck,
        subcategories: [
            {
                title: "Yasal Uyum",
                slug: "yasal-uyum",
                items: [
                    { title: 'Legalmatic', href: '/dijital-urunler/mevzuat-ve-uyum/legalmatic' }
                ]
            }
        ]
    },
    {
        title: "Globalleşme ve İhracat",
        slug: "globallesme-ve-ihracat",
        description: "Uluslararası ticaret ve ekspansiyon yazılımları.",
        icon: Globe,
        subcategories: [
            {
                title: "İhracat Yazılımları",
                slug: "ihracat-yazilimlari",
                items: [
                    { title: 'Jestiyon', href: '/dijital-urunler/globallesme-ve-ihracat/jestiyon' },
                    { title: 'Quandatum', href: '/dijital-urunler/globallesme-ve-ihracat/quandatum' }
                ]
            }
        ]
    },
    {
        title: "Online danışmanlık ve eğitim platformu",
        slug: "online-danismanlik-ve-egitim",
        description: "Platform tabanlı danışmanlık ve eğitim çözümleri.",
        icon: BookOpen,
        subcategories: [
            {
                title: "Eğitim Platformları",
                slug: "egitim-platformlari",
                items: [
                    { title: 'eDanışman', href: '/dijital-urunler/online-danismanlik-ve-egitim/edanisman' }
                ]
            }
        ]
    }
];
