import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    Download,
    Eye,
    Calendar,
    FileText,
    CheckCircle,
    Share2,
    BookOpen,
    List
} from 'lucide-react';

// Demo guides data
const guidesData = [
    {
        id: 1,
        slug: "ar-ge-merkezi-basvuru-kilavuzu",
        title: "Ar-Ge Merkezi Başvuru Kılavuzu",
        description: "Ar-Ge merkezi başvuru sürecini adım adım anlatan kapsamlı rehber. Gerekli belgeler, süreç yönetimi ve başarı kriterleri.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        date: "20 Ocak 2026",
        steps: 12,
        views: 5670,
        type: "Başvuru Rehberi",
        category: "Ar-Ge",
        pdfUrl: "/PDF/Sirketler-icin-2026-Yol-Haritasi.pdf",
        summary: "Bu kılavuz, Ar-Ge merkezi başvuru sürecinin tüm aşamalarını detaylı olarak açıklamaktadır. Başvuru öncesi hazırlıktan, belge toplama sürecine, başvuru sonrası takip ve denetim aşamalarına kadar tüm adımları içermektedir.",
        highlights: [
            "Başvuru öncesi hazırlık",
            "Gerekli belgeler listesi",
            "Başvuru süreci adımları",
            "Değerlendirme kriterleri",
            "Başvuru sonrası süreç",
            "Sık yapılan hatalar",
            "Başarı ipuçları",
            "Örnek başvuru dosyası"
        ]
    },
    {
        id: 2,
        slug: "transfer-fiyatlandirmasi-rehberi",
        title: "Transfer Fiyatlandırması Rehberi",
        description: "Transfer fiyatlandırması uygulamaları, mevzuat gereksinimleri ve pratik örneklerle hazırlanmış detaylı rehber.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
        date: "8 Ocak 2026",
        steps: 15,
        views: 4230,
        type: "Uygulama Rehberi",
        category: "Vergi",
        pdfUrl: "/PDF/Sirketler-icin-2026-Yol-Haritasi.pdf",
        summary: "Transfer fiyatlandırması mevzuatına uyum için kapsamlı bir rehber. Emsallere uygunluk ilkesi, belgelendirme yükümlülükleri ve pratik uygulamalar.",
        highlights: [
            "Transfer fiyatlandırması nedir?",
            "Yasal düzenlemeler",
            "Belgelendirme yükümlülükleri",
            "Emsallere uygunluk yöntemleri",
            "Rapor hazırlama",
            "Risk analizi"
        ]
    },
    {
        id: 3,
        slug: "yatirim-tesvikleri-adim-adim",
        title: "Yatırım Teşvikleri Adım Adım",
        description: "Yatırım teşvik sisteminden faydalanmak için gerekli tüm adımları içeren pratik rehber.",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
        date: "22 Aralık 2025",
        steps: 10,
        views: 3890,
        type: "Başvuru Rehberi",
        category: "Teşvik",
        pdfUrl: "/PDF/Sirketler-icin-2026-Yol-Haritasi.pdf",
        summary: "Yatırım teşvik belgesi almak için gereken tüm süreçleri detaylı olarak anlatan kılavuz. Bölgesel teşvikler, sektörel destekler ve başvuru süreçleri.",
        highlights: [
            "Teşvik sistemi genel bakış",
            "Bölgesel teşvikler",
            "Sektörel destekler",
            "Başvuru süreci",
            "Gerekli belgeler",
            "Takip ve uygulama"
        ]
    },
    {
        id: 4,
        slug: "ihracat-surecleri-kilavuzu",
        title: "İhracat Süreçleri Kılavuzu",
        description: "İhracat yapmak isteyen şirketler için A'dan Z'ye tüm süreçleri kapsayan detaylı rehber.",
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
        date: "10 Aralık 2025",
        steps: 18,
        views: 4560,
        type: "Süreç Rehberi",
        category: "Dış Ticaret",
        pdfUrl: "/PDF/Sirketler-icin-2026-Yol-Haritasi.pdf",
        summary: "İhracat süreçlerini baştan sona anlatan kapsamlı kılavuz. Pazar araştırmasından, gümrük işlemlerine, ödeme yöntemlerinden lojistiğe kadar tüm aşamalar.",
        highlights: [
            "İhracata hazırlık",
            "Pazar araştırması",
            "Gümrük işlemleri",
            "Ödeme yöntemleri",
            "Lojistik süreçler",
            "İhracat destekleri"
        ]
    },
    {
        id: 5,
        slug: "sirket-kurulus-rehberi",
        title: "Şirket Kuruluş Rehberi",
        description: "Türkiye'de şirket kurmak için gerekli tüm adımları ve yasal gereksinimleri içeren rehber.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
        date: "25 Kasım 2025",
        steps: 8,
        views: 6120,
        type: "Kuruluş Rehberi",
        category: "Şirket",
        pdfUrl: "/PDF/Sirketler-icin-2026-Yol-Haritasi.pdf",
        summary: "Şirket kuruluş sürecini basitleştiren adım adım rehber. Şirket türleri, gerekli belgeler, maliyetler ve süreç yönetimi.",
        highlights: [
            "Şirket türleri",
            "Gerekli belgeler",
            "Kuruluş maliyetleri",
            "Ticaret sicil işlemleri",
            "Vergi dairesi kayıt",
            "SGK işlemleri"
        ]
    },
    {
        id: 6,
        slug: "mali-musavirlik-uygulamalari",
        title: "Mali Müşavirlik Uygulamaları",
        description: "Mali müşavirlik mesleğinin güncel uygulamalarını ve en iyi pratiklerini içeren kapsamlı rehber.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        date: "12 Kasım 2025",
        steps: 20,
        views: 3450,
        type: "Uygulama Rehberi",
        category: "Muhasebe",
        pdfUrl: "/PDF/Sirketler-icin-2026-Yol-Haritasi.pdf",
        summary: "Mali müşavirlerin günlük uygulamalarında ihtiyaç duyacakları bilgileri içeren pratik rehber. Mevzuat, uygulamalar ve örnek vakalar.",
        highlights: [
            "Meslek standartları",
            "Mevzuat güncellemeleri",
            "Müşteri ilişkileri",
            "Dijital dönüşüm",
            "Risk yönetimi",
            "En iyi uygulamalar"
        ]
    }
];

const GuidesPage = () => {
    const { guideSlug } = useParams();
    const navigate = useNavigate();
    const [selectedGuide, setSelectedGuide] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (guideSlug) {
            const guide = guidesData.find(g => g.slug === guideSlug);
            if (guide) {
                setSelectedGuide(guide);
            }
        } else {
            setSelectedGuide(null);
        }
    }, [guideSlug]);

    const handleGuideClick = (guide) => {
        navigate(`/medya/kilavuzlar/${guide.slug}`);
    };

    const handleClose = () => {
        navigate('/medya/kilavuzlar');
    };

    // If viewing a specific guide
    if (selectedGuide) {
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
                            Tüm Kılavuzlar
                        </button>
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                            <div className="flex-1">
                                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                                    {selectedGuide.type}
                                </span>
                                <h1 className="text-4xl lg:text-6xl font-black text-secondary mb-4 leading-tight">
                                    {selectedGuide.title}
                                </h1>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    {selectedGuide.summary}
                                </p>

                                {/* Meta Info */}
                                <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-primary" />
                                        <span className="font-medium">{selectedGuide.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <List size={16} className="text-primary" />
                                        <span className="font-medium">{selectedGuide.steps} adım</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Eye size={16} className="text-primary" />
                                        <span className="font-medium">{selectedGuide.views.toLocaleString()} görüntülenme</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-3 lg:w-64">
                                <a
                                    href={selectedGuide.pdfUrl}
                                    download
                                    className="flex items-center justify-center gap-2 px-6 py-4 bg-secondary text-white rounded-2xl font-bold hover:bg-gray-900 transition-colors"
                                >
                                    <Download size={18} />
                                    Kılavuzu İndir
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
                        <h2 className="text-2xl font-black text-secondary mb-6">Kılavuz İçeriği</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {selectedGuide.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-2xl p-4">
                                    <CheckCircle size={20} className="text-primary shrink-0" />
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
                                    src={`${selectedGuide.pdfUrl}#view=FitH`}
                                    className="w-full h-full"
                                    title={selectedGuide.title}
                                />
                            </div>
                        </div>

                        {/* Download CTA */}
                        <div className="mt-8 text-center">
                            <p className="text-gray-500 mb-4">
                                PDF görüntüleyici sorun yaşıyorsanız, kılavuzu indirebilirsiniz
                            </p>
                            <a
                                href={selectedGuide.pdfUrl}
                                download
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-orange-600 transition-colors"
                            >
                                <Download size={18} />
                                Kılavuzu İndir (PDF)
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
                                Kılavuzlar
                            </h1>
                            <p className="text-lg text-gray-500">
                                Adım adım rehberler ve uygulama kılavuzları
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <BookOpen size={16} />
                                <span className="font-bold">{guidesData.length} Kılavuz</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guides Grid */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {guidesData.map((guide, idx) => (
                            <motion.div
                                key={guide.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                onClick={() => handleGuideClick(guide)}
                                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-gray-200/50 transition-all cursor-pointer"
                            >
                                {/* Guide Image */}
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img
                                        src={guide.image}
                                        alt={guide.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-secondary text-xs font-bold uppercase tracking-wider">
                                            {guide.type}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center gap-2 text-white text-sm font-bold">
                                            <List size={14} />
                                            <span>{guide.steps} adım</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Guide Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-3">
                                        <CheckCircle size={12} />
                                        {guide.category}
                                    </div>

                                    <h3 className="text-xl font-black text-secondary group-hover:text-primary transition-colors mb-3 leading-tight">
                                        {guide.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-2">
                                        {guide.description}
                                    </p>

                                    {/* Meta Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <Calendar size={12} />
                                            <span className="font-medium">{guide.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <Eye size={12} />
                                            <span className="font-medium">{guide.views.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    {/* View Button */}
                                    <button className="w-full mt-4 py-3 bg-gray-50 group-hover:bg-secondary text-secondary group-hover:text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                                        Kılavuzu Görüntüle
                                        <FileText size={14} className="group-hover:translate-x-1 transition-transform" />
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

export default GuidesPage;
