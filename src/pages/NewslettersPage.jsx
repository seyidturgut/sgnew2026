import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    Calendar,
    Clock,
    Eye,
    Search,
    Mail,
    Download,
    Share2,
    FileText
} from 'lucide-react';

// Demo newsletters data
const newslettersData = [
    {
        id: 1,
        slug: "subat-2026-aylik-bulten",
        title: "Şubat 2026 Aylık Bülten",
        excerpt: "Şubat ayının öne çıkan gelişmeleri, vergi mevzuatı güncellemeleri ve sektörel haberler.",
        content: `
            <h2>Şubat 2026 Bültenine Hoş Geldiniz</h2>
            <p>Değerli okuyucularımız, Şubat ayının en önemli gelişmelerini sizler için derledik.</p>
            
            <h3>Bu Ayın Öne Çıkanları</h3>
            <ul>
                <li>Yeni vergi düzenlemeleri yürürlüğe girdi</li>
                <li>Ar-Ge teşvik oranları güncellendi</li>
                <li>Dijital hizmet vergisinde önemli değişiklikler</li>
                <li>KOBİ destekleri artırıldı</li>
            </ul>
            
            <h3>Vergi Mevzuatı Güncellemeleri</h3>
            <p>Şubat ayında yayımlanan yeni tebliğler ve genelgeler, özellikle transfer fiyatlandırması ve kurumlar vergisi uygulamalarında önemli değişiklikler getirdi.</p>
            
            <h3>Sektörel Gelişmeler</h3>
            <p>Teknoloji sektöründe yapılan yeni teşvik düzenlemeleri, yazılım şirketlerinin Ar-Ge faaliyetlerini destekleyecek.</p>
            
            <h3>Önümüzdeki Ay</h3>
            <p>Mart ayında beklenen önemli gelişmeler ve takip edilmesi gereken mevzuat değişiklikleri hakkında bilgiler.</p>
        `,
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
        date: "1 Şubat 2026",
        issue: "Sayı 156",
        views: 2340,
        readTime: "5 dk"
    },
    {
        id: 2,
        slug: "ocak-2026-aylik-bulten",
        title: "Ocak 2026 Aylık Bülten",
        excerpt: "2026 yılına başlarken dikkat edilmesi gereken hususlar, yeni yıl düzenlemeleri ve önemli tarihler.",
        content: `
            <h2>Yeni Yıla Merhaba!</h2>
            <p>2026 yılının ilk bülteninde, yeni yılla birlikte gelen değişiklikleri ve fırsatları ele alıyoruz.</p>
            
            <h3>2026 Yılı Değişiklikleri</h3>
            <ul>
                <li>Asgari ücret ve vergi dilimlerinde güncellemeler</li>
                <li>Yeni teşvik paketleri açıklandı</li>
                <li>Dijital dönüşüm destekleri başladı</li>
                <li>Sürdürülebilirlik raporlaması zorunlu hale geldi</li>
            </ul>
            
            <h3>Önemli Tarihler</h3>
            <p>2026 yılı için takip edilmesi gereken beyanname ve bildirim tarihleri.</p>
            
            <h3>Fırsat ve Tehditlere Genel Bakış</h3>
            <p>Yeni yılın işletmeler için sunduğu fırsatlar ve dikkat edilmesi gereken riskler.</p>
        `,
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
        date: "1 Ocak 2026",
        issue: "Sayı 155",
        views: 2156,
        readTime: "6 dk"
    },
    {
        id: 3,
        slug: "aralik-2025-aylik-bulten",
        title: "Aralık 2025 Aylık Bülten",
        excerpt: "Yıl sonu değerlendirmesi, 2025 yılının özeti ve 2026 beklentileri.",
        content: `
            <h2>2025 Yılı Değerlendirmesi</h2>
            <p>2025 yılının son bülteninde, yılın genel değerlendirmesini ve 2026 beklentilerini paylaşıyoruz.</p>
            
            <h3>2025 Yılının Öne Çıkanları</h3>
            <ul>
                <li>Ekonomik büyüme hedeflerine ulaşıldı</li>
                <li>Ar-Ge yatırımları rekor seviyede</li>
                <li>İhracat rakamları beklentileri aştı</li>
                <li>Dijital dönüşüm hızlandı</li>
            </ul>
            
            <h3>Yıl Sonu İşlemleri</h3>
            <p>Yıl sonu kapanış işlemleri, envanter çalışmaları ve dikkat edilmesi gereken hususlar.</p>
            
            <h3>2026 Beklentileri</h3>
            <p>Önümüzdeki yıl için ekonomik tahminler ve işletmelerin hazırlık yapması gereken alanlar.</p>
        `,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        date: "1 Aralık 2025",
        issue: "Sayı 154",
        views: 1980,
        readTime: "7 dk"
    },
    {
        id: 4,
        slug: "kasim-2025-aylik-bulten",
        title: "Kasım 2025 Aylık Bülten",
        excerpt: "Kasım ayı vergi takvimi, yeni düzenlemeler ve sektörel analizler.",
        content: `
            <h2>Kasım Ayı Gelişmeleri</h2>
            <p>Kasım ayının önemli gelişmelerini ve dikkat edilmesi gereken hususları derledik.</p>
            
            <h3>Vergi Takvimi</h3>
            <p>Kasım ve Aralık aylarında yapılması gereken beyanname ve ödemeler.</p>
            
            <h3>Yeni Düzenlemeler</h3>
            <ul>
                <li>E-fatura uygulamasında genişleme</li>
                <li>Yeni muhasebe standartları</li>
                <li>İstihdam teşviklerinde güncellemeler</li>
            </ul>
        `,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        date: "1 Kasım 2025",
        issue: "Sayı 153",
        views: 2090,
        readTime: "5 dk"
    },
    {
        id: 5,
        slug: "ekim-2025-aylik-bulten",
        title: "Ekim 2025 Aylık Bülten",
        excerpt: "Ekim ayı mevzuat değişiklikleri, teşvik güncellemeleri ve önemli duyurular.",
        content: `
            <h2>Ekim Ayı Bülteni</h2>
            <p>Ekim ayının öne çıkan gelişmeleri ve önemli duyuruları.</p>
            
            <h3>Mevzuat Değişiklikleri</h3>
            <p>Ekim ayında yayımlanan yeni düzenlemeler ve etkileri.</p>
            
            <h3>Teşvik Güncellemeleri</h3>
            <ul>
                <li>Yatırım teşvik belgesi başvuruları</li>
                <li>Ar-Ge merkezi destekleri</li>
                <li>İstihdam teşvikleri</li>
            </ul>
        `,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        date: "1 Ekim 2025",
        issue: "Sayı 152",
        views: 1870,
        readTime: "4 dk"
    },
    {
        id: 6,
        slug: "eylul-2025-aylik-bulten",
        title: "Eylül 2025 Aylık Bülten",
        excerpt: "Eylül ayı ekonomik göstergeler, sektörel trendler ve önemli gelişmeler.",
        content: `
            <h2>Eylül Ayı Özeti</h2>
            <p>Eylül ayının ekonomik göstergeleri ve sektörel gelişmeleri.</p>
            
            <h3>Ekonomik Göstergeler</h3>
            <p>Enflasyon, büyüme ve istihdam verileri.</p>
            
            <h3>Sektörel Trendler</h3>
            <ul>
                <li>Teknoloji sektörü büyümeye devam ediyor</li>
                <li>İhracat rakamları olumlu</li>
                <li>Yabancı yatırımlar artıyor</li>
            </ul>
        `,
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
        date: "1 Eylül 2025",
        issue: "Sayı 151",
        views: 2230,
        readTime: "6 dk"
    }
];

const NewslettersPage = () => {
    const { newsletterSlug } = useParams();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedNewsletter, setSelectedNewsletter] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (newsletterSlug) {
            const newsletter = newslettersData.find(n => n.slug === newsletterSlug);
            if (newsletter) {
                setSelectedNewsletter(newsletter);
            }
        } else {
            setSelectedNewsletter(null);
        }
    }, [newsletterSlug]);

    const handleNewsletterClick = (newsletter) => {
        navigate(`/medya/bultenler/${newsletter.slug}`);
    };

    const handleClose = () => {
        navigate('/medya/bultenler');
    };

    const filteredNewsletters = newslettersData.filter(newsletter => {
        const matchesSearch = newsletter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            newsletter.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });

    // Newsletter detail view
    if (selectedNewsletter) {
        return (
            <div className="pt-20 min-h-screen bg-white">
                {/* Newsletter Header */}
                <article className="max-w-4xl mx-auto px-6 py-16">
                    <button
                        onClick={handleClose}
                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary transition-colors mb-8"
                    >
                        <ArrowLeft size={16} />
                        Tüm Bültenler
                    </button>

                    {/* Issue Badge */}
                    <div className="mb-6">
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider">
                            {selectedNewsletter.issue}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl lg:text-6xl font-black text-secondary leading-tight mb-6">
                        {selectedNewsletter.title}
                    </h1>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar size={16} />
                            <span>{selectedNewsletter.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock size={16} />
                            <span>{selectedNewsletter.readTime} okuma</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Eye size={16} />
                            <span>{selectedNewsletter.views.toLocaleString()} görüntülenme</span>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-gray-200/50">
                        <img
                            src={selectedNewsletter.image}
                            alt={selectedNewsletter.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Newsletter Content */}
                    <div
                        className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-secondary prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-secondary prose-ul:text-gray-600 prose-ol:text-gray-600"
                        dangerouslySetInnerHTML={{ __html: selectedNewsletter.content }}
                    />

                    {/* Subscribe CTA */}
                    <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-orange-50 rounded-3xl">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex-1">
                                <h3 className="text-2xl font-black text-secondary mb-2">Bültene Abone Olun</h3>
                                <p className="text-gray-600">Aylık bültenimizi e-posta adresinize göndereceğiz</p>
                            </div>
                            <button className="flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-2xl font-bold hover:bg-gray-900 transition-colors whitespace-nowrap">
                                <Mail size={18} />
                                Abone Ol
                            </button>
                        </div>
                    </div>

                    {/* Share */}
                    <div className="mt-8 flex items-center justify-between p-6 bg-gray-50 rounded-3xl">
                        <span className="font-bold text-secondary">Bu bülteni paylaş</span>
                        <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-secondary rounded-xl font-bold hover:border-primary hover:text-primary transition-colors">
                            <Share2 size={18} />
                            Paylaş
                        </button>
                    </div>
                </article>
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
                                Bültenler
                            </h1>
                            <p className="text-lg text-gray-500">
                                Aylık bültenlerimiz ve sektörel haberler
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <FileText size={16} />
                                <span className="font-bold">{filteredNewsletters.length} Bülten</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search */}
            <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-10">
                <div className="container mx-auto px-6">
                    <div className="relative max-w-md">
                        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Bülten ara..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none font-medium text-secondary"
                        />
                    </div>
                </div>
            </section>

            {/* Newsletters Grid */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    {filteredNewsletters.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">📰</div>
                            <h3 className="text-2xl font-black text-secondary mb-2">Bülten bulunamadı</h3>
                            <p className="text-gray-500">Farklı bir arama terimi deneyin</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredNewsletters.map((newsletter, idx) => (
                                <motion.article
                                    key={newsletter.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    onClick={() => handleNewsletterClick(newsletter)}
                                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-gray-200/50 transition-all cursor-pointer"
                                >
                                    {/* Newsletter Image */}
                                    <div className="aspect-[16/10] overflow-hidden relative">
                                        <img
                                            src={newsletter.image}
                                            alt={newsletter.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-secondary text-xs font-bold uppercase tracking-wider">
                                                {newsletter.issue}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Newsletter Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-black text-secondary group-hover:text-primary transition-colors mb-3 leading-tight line-clamp-2">
                                            {newsletter.title}
                                        </h3>

                                        <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
                                            {newsletter.excerpt}
                                        </p>

                                        {/* Meta */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                                <Calendar size={12} />
                                                <span className="font-medium">{newsletter.date}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-xs text-gray-400">
                                                <div className="flex items-center gap-1">
                                                    <Clock size={12} />
                                                    <span>{newsletter.readTime}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Eye size={12} />
                                                    <span>{(newsletter.views / 1000).toFixed(1)}k</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Subscribe CTA */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                            <Mail size={32} className="text-primary" />
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black text-secondary mb-4">
                            Aylık Bültene Abone Olun
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Sektörel gelişmeler, mevzuat değişiklikleri ve önemli duyuruları kaçırmayın
                        </p>
                        <button className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-2xl font-bold hover:bg-gray-900 transition-colors text-lg">
                            <Mail size={20} />
                            Hemen Abone Ol
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewslettersPage;
