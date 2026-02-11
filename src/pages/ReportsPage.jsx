import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    Download,
    Eye,
    Calendar,
    FileText,
    TrendingUp,
    BarChart3,
    Share2,
    X,
    ChevronLeft,
    ChevronRight,
    ExternalLink
} from 'lucide-react';

// Demo reports data
const reportsData = [
    {
        id: 1,
        slug: "sirketler-icin-2026-yol-haritasi",
        title: "Şirketler için 2026 Yol Haritası",
        description: "2026 yılında şirketlerin dijital dönüşüm, sürdürülebilirlik ve büyüme stratejileri için kapsamlı bir rehber.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        date: "1 Ocak 2026",
        pages: 45,
        views: 3240,
        type: "Stratejik Rapor",
        category: "Dijital Dönüşüm",
        pdfUrl: "/PDF/Sirketler-icin-2026-Yol-Haritasi.pdf",
        summary: "Bu rapor, 2026 yılında şirketlerin karşılaşacağı fırsatları ve zorlukları detaylı olarak ele almaktadır. Dijital dönüşüm, yapay zeka entegrasyonu, sürdürülebilir büyüme modelleri ve global pazar trendleri konularında derinlemesine analizler sunmaktadır.",
        highlights: [
            "Dijital dönüşüm stratejileri",
            "Yapay zeka ve otomasyon",
            "Sürdürülebilir büyüme modelleri",
            "Global pazar analizi",
            "2026 trend öngörüleri"
        ]
    },
    {
        id: 2,
        slug: "turkiye-ar-ge-ekosistemi-raporu",
        title: "Türkiye Ar-Ge Ekosistemi Raporu",
        description: "Türkiye'nin Ar-Ge ekosisteminin mevcut durumu, fırsatlar ve gelecek projeksiyonları.",
        image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=800&q=80",
        date: "15 Aralık 2025",
        pages: 62,
        views: 2156,
        type: "Sektörel Rapor",
        category: "Ar-Ge",
        pdfUrl: "/PDF/Sirketler-icin-2026-Yol-Haritasi.pdf",
        summary: "Türkiye'nin Ar-Ge ekosistemini detaylı olarak inceleyen bu rapor, sektörel analizler, başarı hikayeleri ve gelecek öngörüleri sunmaktadır.",
        highlights: [
            "Sektörel Ar-Ge analizi",
            "Teşvik mekanizmaları",
            "Başarı hikayeleri",
            "Gelecek projeksiyonları"
        ]
    },
    {
        id: 3,
        slug: "kobi-dijitallesme-indeksi",
        title: "KOBİ Dijitalleşme İndeksi",
        description: "Türkiye'deki KOBİ'lerin dijitalleşme seviyesini ölçen kapsamlı bir araştırma.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        date: "20 Kasım 2025",
        pages: 38,
        views: 1890,
        type: "Araştırma",
        category: "KOBİ",
        pdfUrl: "/PDF/Sirketler-icin-2026-Yol-Haritasi.pdf",
        summary: "KOBİ'lerin dijital olgunluk seviyelerini ölçen ve sektörel karşılaştırmalar sunan detaylı bir araştırma raporu.",
        highlights: [
            "Dijital olgunluk analizi",
            "Sektörel karşılaştırmalar",
            "En iyi uygulamalar",
            "Dijitalleşme önerileri"
        ]
    },
    {
        id: 4,
        slug: "yatirim-tesvikleri-analizi",
        title: "Yatırım Teşvikleri Analizi",
        description: "2025-2026 döneminde yürürlükte olan yatırım teşvik mekanizmalarının detaylı analizi.",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
        date: "5 Kasım 2025",
        pages: 52,
        views: 2567,
        type: "Analiz",
        category: "Finans",
        pdfUrl: "/PDF/Sirketler-icin-2026-Yol-Haritasi.pdf",
        summary: "Güncel yatırım teşvik sistemlerini, başvuru süreçlerini ve sektörel avantajları detaylı olarak ele alan kapsamlı bir analiz.",
        highlights: [
            "Teşvik mekanizmaları",
            "Başvuru süreçleri",
            "Sektörel avantajlar",
            "Vaka çalışmaları"
        ]
    },
    {
        id: 5,
        slug: "global-ticaret-trendleri",
        title: "Global Ticaret Trendleri",
        description: "2026 yılı global ticaret trendleri ve Türkiye'ye etkileri üzerine detaylı bir inceleme.",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
        date: "18 Ekim 2025",
        pages: 71,
        views: 3120,
        type: "Trend Raporu",
        category: "Global Ticaret",
        pdfUrl: "/PDF/Sirketler-icin-2026-Yol-Haritasi.pdf",
        summary: "Küresel ticaret dinamiklerini, yeni pazarları ve Türkiye'nin konumunu analiz eden stratejik bir rapor.",
        highlights: [
            "Global pazar analizi",
            "Yeni fırsatlar",
            "Türkiye'nin konumu",
            "Stratejik öneriler"
        ]
    },
    {
        id: 6,
        slug: "vergi-mevzuati-degisiklikleri",
        title: "Vergi Mevzuatı Değişiklikleri",
        description: "2026 yılında yürürlüğe girecek vergi mevzuatı değişikliklerinin detaylı analizi.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
        date: "2 Ekim 2025",
        pages: 29,
        views: 1745,
        type: "Mevzuat",
        category: "Vergi",
        pdfUrl: "/PDF/Sirketler-icin-2026-Yol-Haritasi.pdf",
        summary: "Yeni vergi düzenlemelerini, etkileri ve uyum stratejilerini detaylı olarak açıklayan bir rehber.",
        highlights: [
            "Yeni düzenlemeler",
            "Sektörel etkiler",
            "Uyum stratejileri",
            "Pratik öneriler"
        ]
    }
];

const ReportsPage = () => {
    const { reportSlug } = useParams();
    const navigate = useNavigate();
    const [selectedReport, setSelectedReport] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (reportSlug) {
            const report = reportsData.find(r => r.slug === reportSlug);
            if (report) {
                setSelectedReport(report);
            }
        } else {
            setSelectedReport(null);
        }
    }, [reportSlug]);

    const handleReportClick = (report) => {
        navigate(`/medya/raporlar/${report.slug}`);
    };

    const handleClose = () => {
        navigate('/medya/raporlar');
    };

    // If viewing a specific report
    if (selectedReport) {
        return (
            <div className="pt-20 min-h-screen bg-white">
                {/* Header */}
                <section className="py-12 bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-6">
                        <button
                            onClick={handleClose}
                            className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary transition-colors mb-6"
                        >
                            <ArrowLeft size={16} />
                            Tüm Raporlar
                        </button>
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                            <div className="flex-1">
                                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                                    {selectedReport.type}
                                </span>
                                <h1 className="text-4xl lg:text-6xl font-black text-secondary mb-4 leading-tight">
                                    {selectedReport.title}
                                </h1>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    {selectedReport.summary}
                                </p>

                                {/* Meta Info */}
                                <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-primary" />
                                        <span className="font-medium">{selectedReport.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FileText size={16} className="text-primary" />
                                        <span className="font-medium">{selectedReport.pages} sayfa</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Eye size={16} className="text-primary" />
                                        <span className="font-medium">{selectedReport.views.toLocaleString()} görüntülenme</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-3 lg:w-64">
                                <a
                                    href={selectedReport.pdfUrl}
                                    download
                                    className="flex items-center justify-center gap-2 px-6 py-4 bg-secondary text-white rounded-2xl font-bold hover:bg-gray-900 transition-colors"
                                >
                                    <Download size={18} />
                                    Raporu İndir
                                </a>
                                <button className="flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-gray-200 text-secondary rounded-2xl font-bold hover:border-primary hover:text-primary transition-colors">
                                    <Share2 size={18} />
                                    Paylaş
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Highlights */}
                <section className="py-12 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-6">
                        <h2 className="text-2xl font-black text-secondary mb-6">Rapor İçeriği</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {selectedReport.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-2xl p-4">
                                    <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                                    <span className="font-bold text-secondary text-sm">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PDF Viewer */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100">
                            <div className="aspect-[8.5/11] w-full">
                                <iframe
                                    src={`${selectedReport.pdfUrl}#view=FitH`}
                                    className="w-full h-full"
                                    title={selectedReport.title}
                                />
                            </div>
                        </div>

                        {/* Download CTA */}
                        <div className="mt-8 text-center">
                            <p className="text-gray-500 mb-4">
                                PDF görüntüleyici sorun yaşıyorsanız, raporu indirebilirsiniz
                            </p>
                            <a
                                href={selectedReport.pdfUrl}
                                download
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-orange-600 transition-colors"
                            >
                                <Download size={18} />
                                Raporu İndir (PDF)
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    // List view
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
                        Medya & İçerikler
                    </Link>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div>
                            <h1 className="text-4xl lg:text-6xl font-black text-secondary mb-2">
                                Raporlar
                            </h1>
                            <p className="text-lg text-gray-500">
                                Sektörel analizler ve araştırma raporlarımız
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <BarChart3 size={16} />
                                <span className="font-bold">{reportsData.length} Rapor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reports Grid */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reportsData.map((report, idx) => (
                            <motion.div
                                key={report.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                onClick={() => handleReportClick(report)}
                                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-gray-200/50 transition-all cursor-pointer"
                            >
                                {/* Report Image */}
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img
                                        src={report.image}
                                        alt={report.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-secondary text-xs font-bold uppercase tracking-wider">
                                            {report.type}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center gap-2 text-white text-sm font-bold">
                                            <FileText size={14} />
                                            <span>{report.pages} sayfa</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Report Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-3">
                                        <TrendingUp size={12} />
                                        {report.category}
                                    </div>

                                    <h3 className="text-xl font-black text-secondary group-hover:text-primary transition-colors mb-3 leading-tight">
                                        {report.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-2">
                                        {report.description}
                                    </p>

                                    {/* Meta Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <Calendar size={12} />
                                            <span className="font-medium">{report.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <Eye size={12} />
                                            <span className="font-medium">{report.views.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    {/* View Button */}
                                    <button className="w-full mt-4 py-3 bg-gray-50 group-hover:bg-secondary text-secondary group-hover:text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                                        Raporu Görüntüle
                                        <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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

export default ReportsPage;
