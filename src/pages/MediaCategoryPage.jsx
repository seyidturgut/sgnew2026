import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import EventsPage from './EventsPage';
import ReportsPage from './ReportsPage';
import ArticlesPage from './ArticlesPage';
import GuidesPage from './GuidesPage';
import NewslettersPage from './NewslettersPage';
import PodcastPage from './PodcastPage';
import {
    ArrowLeft,
    Calendar,
    Clock,
    Download,
    Eye,
    Share2,
    ChevronRight
} from 'lucide-react';

// Demo content for each category
const categoryContent = {
    "raporlar": {
        title: "Raporlar",
        items: [
            { title: "2026 Ekonomik Görünüm Raporu", date: "1 Ocak 2026", pages: 45, views: 3240, type: "Ekonomik Analiz" },
            { title: "Türkiye Ar-Ge Ekosistemi Raporu", date: "15 Aralık 2025", pages: 62, views: 2156, type: "Sektörel Rapor" },
            { title: "KOBİ Dijitalleşme İndeksi", date: "20 Kasım 2025", pages: 38, views: 1890, type: "Araştırma" },
            { title: "Yatırım Teşvikleri Analizi", date: "5 Kasım 2025", pages: 52, views: 2567, type: "Analiz" },
            { title: "Global Ticaret Trendleri", date: "18 Ekim 2025", pages: 71, views: 3120, type: "Trend Raporu" },
            { title: "Vergi Mevzuatı Değişiklikleri", date: "2 Ekim 2025", pages: 29, views: 1745, type: "Mevzuat" }
        ]
    },
    "makaleler": {
        title: "Makaleler",
        items: [
            { title: "Yapay Zeka ve İş Süreçleri", date: "10 Şubat 2026", author: "Dr. Ahmet Yılmaz", views: 4520, type: "Teknoloji" },
            { title: "Sürdürülebilir Büyüme Stratejileri", date: "3 Şubat 2026", author: "Prof. Ayşe Demir", views: 3210, type: "Strateji" },
            { title: "Vergi Planlamasında Yeni Yaklaşımlar", date: "25 Ocak 2026", author: "Mehmet Kaya", views: 2890, type: "Finans" },
            { title: "Girişim Sermayesi Ekosistemi", date: "12 Ocak 2026", author: "Zeynep Arslan", views: 3456, type: "Yatırım" },
            { title: "Dijital Pazarlama Trendleri", date: "28 Aralık 2025", author: "Can Öztürk", views: 5120, type: "Pazarlama" },
            { title: "Kurumsal Yönetişim İlkeleri", date: "15 Aralık 2025", author: "Dr. Elif Şahin", views: 2340, type: "Yönetim" }
        ]
    },
    "kilavuzlar": {
        title: "Kılavuzlar",
        items: [
            { title: "Ar-Ge Merkezi Başvuru Kılavuzu", date: "20 Ocak 2026", steps: 12, views: 5670, type: "Başvuru" },
            { title: "Transfer Fiyatlandırması Rehberi", date: "8 Ocak 2026", steps: 15, views: 4230, type: "Rehber" },
            { title: "Yatırım Teşvikleri Adım Adım", date: "22 Aralık 2025", steps: 10, views: 3890, type: "Teşvik" },
            { title: "İhracat Süreçleri Kılavuzu", date: "10 Aralık 2025", steps: 18, views: 4560, type: "İhracat" },
            { title: "Şirket Kuruluş Rehberi", date: "25 Kasım 2025", steps: 8, views: 6120, type: "Kuruluş" },
            { title: "Mali Müşavirlik Uygulamaları", date: "12 Kasım 2025", steps: 20, views: 3450, type: "Uygulama" }
        ]
    },
    "bultenler": {
        title: "Bültenler",
        items: [
            { title: "Şubat 2026 Aylık Bülten", date: "1 Şubat 2026", issue: "Sayı 156", views: 2340, type: "Aylık" },
            { title: "Ocak 2026 Aylık Bülten", date: "1 Ocak 2026", issue: "Sayı 155", views: 2156, type: "Aylık" },
            { title: "Aralık 2025 Aylık Bülten", date: "1 Aralık 2025", issue: "Sayı 154", views: 1980, type: "Aylık" },
            { title: "Kasım 2025 Aylık Bülten", date: "1 Kasım 2025", issue: "Sayı 153", views: 2090, type: "Aylık" },
            { title: "Ekim 2025 Aylık Bülten", date: "1 Ekim 2025", issue: "Sayı 152", views: 1870, type: "Aylık" },
            { title: "Eylül 2025 Aylık Bülten", date: "1 Eylül 2025", issue: "Sayı 151", views: 2230, type: "Aylık" }
        ]
    },
    "tanitim-dokumanlari": {
        title: "Tanıtım Dökümanları",
        items: [
            { title: "Sistem Global Kurumsal Tanıtım", date: "15 Ocak 2026", pages: 24, views: 4560, type: "Kurumsal" },
            { title: "Dijital Ürünler Kataloğu", date: "5 Ocak 2026", pages: 36, views: 3890, type: "Katalog" },
            { title: "Danışmanlık Hizmetleri Broşürü", date: "20 Aralık 2025", pages: 16, views: 3210, type: "Broşür" },
            { title: "Ar-Ge Çözümleri Sunumu", date: "8 Aralık 2025", pages: 28, views: 2780, type: "Sunum" },
            { title: "Yatırım Fonları Tanıtımı", date: "25 Kasım 2025", pages: 20, views: 3450, type: "Tanıtım" },
            { title: "Global Ofisler Rehberi", date: "10 Kasım 2025", pages: 12, views: 2120, type: "Rehber" }
        ]
    },
    "v-blog": {
        title: "V-Blog",
        items: [
            { title: "CEO'dan Mesajlar: 2026 Vizyonu", date: "12 Şubat 2026", duration: "12:45", views: 8920, type: "Söyleşi" },
            { title: "Ar-Ge Teşvikleri Nasıl Alınır?", date: "5 Şubat 2026", duration: "18:30", views: 6540, type: "Eğitim" },
            { title: "Başarı Hikayesi: TechStart", date: "28 Ocak 2026", duration: "15:20", views: 5670, type: "Vaka" },
            { title: "Dijital Dönüşüm Yol Haritası", date: "15 Ocak 2026", duration: "22:15", views: 7890, type: "Rehber" },
            { title: "Yatırımcı Buluşmaları", date: "2 Ocak 2026", duration: "25:40", views: 4320, type: "Etkinlik" },
            { title: "2025 Yılı Değerlendirmesi", date: "20 Aralık 2025", duration: "16:50", views: 9120, type: "Analiz" }
        ]
    },
    "podcast": {
        title: "Podcast",
        items: [
            { title: "İş Dünyası Sohbetleri #45", date: "10 Şubat 2026", duration: "42:30", views: 3450, type: "Söyleşi" },
            { title: "Girişimcilik Hikayeleri #28", date: "3 Şubat 2026", duration: "38:15", views: 2890, type: "Hikaye" },
            { title: "Finans Günlüğü #67", date: "25 Ocak 2026", duration: "35:20", views: 3120, type: "Analiz" },
            { title: "Teknoloji ve Gelecek #52", date: "18 Ocak 2026", duration: "45:10", views: 4230, type: "Teknoloji" },
            { title: "Liderlik Dersleri #33", date: "10 Ocak 2026", duration: "40:25", views: 2670, type: "Liderlik" },
            { title: "Global Perspektif #19", date: "28 Aralık 2025", duration: "48:35", views: 3890, type: "Global" }
        ]
    }
};

const MediaCategoryPage = () => {
    const { category } = useParams();

    // Redirect to EventsPage for events category
    if (category === 'egitim-ve-etkinlikler') {
        return <EventsPage />;
    }

    // Redirect to ReportsPage for reports category
    if (category === 'raporlar') {
        return <ReportsPage />;
    }

    // Redirect to ArticlesPage for articles category
    if (category === 'makaleler') {
        return <ArticlesPage />;
    }

    // Redirect to GuidesPage for guides category
    if (category === 'kilavuzlar') {
        return <GuidesPage />;
    }

    // Redirect to NewslettersPage for newsletters category
    if (category === 'bultenler') {
        return <NewslettersPage />;
    }

    // Redirect to PodcastPage for podcast category
    if (category === 'podcast') {
        return <PodcastPage />;
    }

    const content = categoryContent[category];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);

    if (!content) {
        return (
            <div className="pt-20 min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl font-black text-secondary mb-4">Kategori Bulunamadı</h2>
                    <Link to="/medya" className="text-primary font-bold hover:underline">
                        Medya sayfasına dön
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Header */}
            <section className="py-12 bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <Link
                        to="/medya"
                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary transition-colors mb-6"
                    >
                        <ArrowLeft size={16} />
                        Tüm Kategoriler
                    </Link>
                    <h1 className="text-4xl lg:text-6xl font-black text-secondary">
                        {content.title}
                    </h1>
                </div>
            </section>

            {/* Content Grid */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {content.items.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-gray-200/50 transition-all cursor-pointer"
                            >
                                {/* Type Badge */}
                                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                                    {item.type}
                                </span>

                                {/* Title */}
                                <h3 className="text-xl font-black text-secondary group-hover:text-primary transition-colors mb-4 leading-tight">
                                    {item.title}
                                </h3>

                                {/* Meta Info */}
                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Calendar size={14} />
                                        <span>{item.date}</span>
                                    </div>
                                    {item.duration && (
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Clock size={14} />
                                            <span>{item.duration}</span>
                                        </div>
                                    )}
                                    {item.pages && (
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Download size={14} />
                                            <span>{item.pages} sayfa</span>
                                        </div>
                                    )}
                                    {item.steps && (
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <ChevronRight size={14} />
                                            <span>{item.steps} adım</span>
                                        </div>
                                    )}
                                    {item.author && (
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <span className="font-medium">{item.author}</span>
                                        </div>
                                    )}
                                    {item.issue && (
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <span className="font-medium">{item.issue}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <Eye size={14} />
                                        <span>{item.views.toLocaleString()} görüntülenme</span>
                                    </div>
                                    <button className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-primary flex items-center justify-center transition-colors">
                                        <Share2 size={14} className="text-gray-400 group-hover:text-white" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MediaCategoryPage;
