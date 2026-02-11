import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    Calendar,
    Clock,
    User,
    Tag,
    Search,
    TrendingUp,
    Eye,
    Share2,
    BookOpen
} from 'lucide-react';

// Article categories
const categories = [
    { id: 'all', name: 'Hepsi' },
    { id: 'ar-ge', name: 'AR-GE' },
    { id: 'covid-19', name: 'Covid-19' },
    { id: 'globallesme', name: 'Globalleşme' },
    { id: 'isletme-cozumleri', name: 'İşletme Çözümleri' },
    { id: 'kvkk', name: 'KVKK' },
    { id: 'marka', name: 'Marka' },
    { id: 'patent', name: 'Patent' },
    { id: 'risk-mevzuat', name: 'Risk ve Mevzuat Yönetimi' },
    { id: 'vergi', name: 'Vergi' }
];

// Demo articles data
const articlesData = [
    {
        id: 1,
        slug: "yapay-zeka-is-surecleri",
        title: "Yapay Zeka ve İş Süreçlerinde Dijital Dönüşüm",
        excerpt: "Yapay zeka teknolojilerinin iş süreçlerine entegrasyonu, şirketlerin verimliliğini nasıl artırıyor ve geleceğin iş modellerini nasıl şekillendiriyor?",
        content: `
            <p>Yapay zeka (AI) teknolojileri, modern iş dünyasında devrim niteliğinde değişiklikler yaratmaya devam ediyor. Şirketler, operasyonel verimliliği artırmak, müşteri deneyimini iyileştirmek ve rekabet avantajı elde etmek için AI çözümlerine yatırım yapıyor.</p>
            
            <h2>AI'nın İş Süreçlerine Etkisi</h2>
            <p>Yapay zeka, tekrarlayan görevlerin otomasyonundan karmaşık karar alma süreçlerine kadar geniş bir yelpazede kullanılıyor. Özellikle makine öğrenimi algoritmaları, büyük veri setlerini analiz ederek değerli içgörüler sunuyor.</p>
            
            <h3>Temel Uygulama Alanları:</h3>
            <ul>
                <li><strong>Müşteri Hizmetleri:</strong> Chatbot'lar ve sanal asistanlar 7/24 destek sağlıyor</li>
                <li><strong>Tahmine Dayalı Analitik:</strong> Satış tahminleri ve talep planlaması</li>
                <li><strong>Süreç Otomasyonu:</strong> RPA ile manuel işlemlerin otomasyonu</li>
                <li><strong>Karar Destek Sistemleri:</strong> Veri odaklı stratejik kararlar</li>
            </ul>
            
            <h2>Başarılı Uygulama İçin Öneriler</h2>
            <p>AI projelerinde başarı için net bir strateji, kaliteli veri ve doğru ekip yapısı kritik önem taşıyor. Şirketlerin öncelikle pilot projelerle başlaması ve kademeli olarak ölçeklendirmesi öneriliyor.</p>
            
            <blockquote>
                "Yapay zeka, sadece bir teknoloji değil, iş yapış şeklimizi kökten değiştiren bir paradigma değişimidir."
            </blockquote>
            
            <p>Sonuç olarak, AI'nın iş süreçlerine entegrasyonu artık bir lüks değil, rekabetçi kalabilmek için bir zorunluluk haline gelmiştir.</p>
        `,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
        author: "Dr. Ahmet Yılmaz",
        authorAvatar: "https://i.pravatar.cc/100?img=12",
        date: "10 Şubat 2026",
        readTime: "8 dk",
        views: 4520,
        category: "isletme-cozumleri",
        tags: ["Yapay Zeka", "Dijital Dönüşüm", "Teknoloji"]
    },
    {
        id: 2,
        slug: "surdurulebilir-buyume-stratejileri",
        title: "Sürdürülebilir Büyüme Stratejileri ve ESG",
        excerpt: "Çevresel, sosyal ve kurumsal yönetişim (ESG) kriterlerinin işletme stratejilerine entegrasyonu ve sürdürülebilir büyüme modelleri.",
        content: `
            <p>Sürdürülebilirlik, artık sadece bir trend değil, iş dünyasının temel bir gerekliliği haline geldi. ESG kriterleri, yatırımcılar ve paydaşlar için kritik bir değerlendirme aracı olarak öne çıkıyor.</p>
            
            <h2>ESG'nin Üç Boyutu</h2>
            <p>Çevresel (Environmental), Sosyal (Social) ve Kurumsal Yönetişim (Governance) kriterleri, şirketlerin uzun vadeli değer yaratma kapasitesini ölçüyor.</p>
            
            <h3>Uygulama Adımları:</h3>
            <ol>
                <li>Mevcut durumun değerlendirilmesi</li>
                <li>Hedeflerin belirlenmesi</li>
                <li>Stratejinin oluşturulması</li>
                <li>İzleme ve raporlama</li>
            </ol>
            
            <p>Sürdürülebilir büyüme, sadece çevresel sorumluluk değil, aynı zamanda ekonomik başarı ve sosyal etki anlamına geliyor.</p>
        `,
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
        author: "Prof. Ayşe Demir",
        authorAvatar: "https://i.pravatar.cc/100?img=45",
        date: "3 Şubat 2026",
        readTime: "6 dk",
        views: 3210,
        category: "globallesme",
        tags: ["Sürdürülebilirlik", "ESG", "Strateji"]
    },
    {
        id: 3,
        slug: "vergi-planlamasi-yeni-yaklasimlar",
        title: "Vergi Planlamasında Yeni Yaklaşımlar ve Dijital Vergi",
        excerpt: "Dijital ekonominin vergi sistemlerine etkisi ve şirketlerin yeni vergi düzenlemelerine uyum stratejileri.",
        content: `
            <p>Dijital ekonominin hızlı gelişimi, geleneksel vergi sistemlerini zorluyor. OECD'nin BEPS (Base Erosion and Profit Shifting) projesi, global vergi düzenlemelerinde köklü değişikliklere yol açıyor.</p>
            
            <h2>Dijital Vergi Nedir?</h2>
            <p>Dijital hizmet vergisi, teknoloji şirketlerinin dijital platformlar üzerinden elde ettikleri gelirlerin vergilendirilmesini amaçlıyor.</p>
            
            <h3>Şirketler İçin Öneriler:</h3>
            <ul>
                <li>Transfer fiyatlandırması politikalarının gözden geçirilmesi</li>
                <li>Dijital varlıkların doğru sınıflandırılması</li>
                <li>Uluslararası vergi uyumunun sağlanması</li>
                <li>Proaktif vergi planlaması</li>
            </ul>
            
            <p>Vergi planlaması artık sadece maliyet optimizasyonu değil, aynı zamanda risk yönetimi ve uyum stratejisidir.</p>
        `,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
        author: "Mehmet Kaya",
        authorAvatar: "https://i.pravatar.cc/100?img=33",
        date: "25 Ocak 2026",
        readTime: "10 dk",
        views: 2890,
        category: "vergi",
        tags: ["Vergi", "Dijital Ekonomi", "BEPS"]
    },
    {
        id: 4,
        slug: "ar-ge-tesvikleri-2026",
        title: "2026 Ar-Ge Teşvikleri ve Yenilikçi Projeler",
        excerpt: "Güncel Ar-Ge teşvik mekanizmaları, başvuru süreçleri ve başarılı proje örnekleri.",
        content: `
            <p>Ar-Ge teşvikleri, şirketlerin inovasyon kapasitesini artırmak ve rekabet gücünü güçlendirmek için kritik bir araçtır. 2026 yılında yürürlükte olan teşvik mekanizmaları, önceki yıllara göre daha kapsamlı ve erişilebilir hale geldi.</p>
            
            <h2>Temel Teşvik Türleri</h2>
            <ul>
                <li><strong>Ar-Ge Merkezi Teşviki:</strong> Kurumlar vergisi indirimi ve sigorta primi desteği</li>
                <li><strong>Teknogirişim Sermaye Desteği:</strong> Erken aşama girişimler için finansman</li>
                <li><strong>TÜBİTAK Destekleri:</strong> Proje bazlı hibeler</li>
                <li><strong>Patent Teşvikleri:</strong> Fikri mülkiyet hakları için destek</li>
            </ul>
            
            <h2>Başvuru Süreci</h2>
            <p>Başarılı bir Ar-Ge teşvik başvurusu için proje planının detaylı hazırlanması, bütçenin doğru oluşturulması ve süreç yönetiminin etkin yapılması gerekiyor.</p>
            
            <blockquote>
                "Ar-Ge teşvikleri, sadece maliyet avantajı değil, aynı zamanda kurumsal inovasyon kültürünün geliştirilmesi için bir fırsattır."
            </blockquote>
        `,
        image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=800&q=80",
        author: "Zeynep Arslan",
        authorAvatar: "https://i.pravatar.cc/100?img=47",
        date: "12 Ocak 2026",
        readTime: "12 dk",
        views: 3456,
        category: "ar-ge",
        tags: ["Ar-Ge", "Teşvikler", "İnovasyon"]
    },
    {
        id: 5,
        slug: "kvkk-uyum-sureci",
        title: "KVKK Uyum Süreci ve Veri Güvenliği",
        excerpt: "Kişisel Verilerin Korunması Kanunu'na uyum için adım adım rehber ve en iyi uygulamalar.",
        content: `
            <p>KVKK (Kişisel Verilerin Korunması Kanunu), şirketlerin kişisel veri işleme faaliyetlerini düzenleyen temel mevzuattır. Uyum süreci, sadece yasal bir zorunluluk değil, aynı zamanda müşteri güveninin tesis edilmesi için kritik öneme sahiptir.</p>
            
            <h2>KVKK'nın Temel İlkeleri</h2>
            <ol>
                <li>Hukuka ve dürüstlük kurallarına uygun olma</li>
                <li>Doğru ve gerektiğinde güncel olma</li>
                <li>Belirli, açık ve meşru amaçlar için işlenme</li>
                <li>İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü olma</li>
                <li>İlgili mevzuatta öngörülen süre kadar muhafaza edilme</li>
            </ol>
            
            <h2>Uyum Adımları</h2>
            <ul>
                <li>Veri envanterinin çıkarılması</li>
                <li>Aydınlatma metinlerinin hazırlanması</li>
                <li>Veri işleme politikalarının oluşturulması</li>
                <li>Teknik ve idari tedbirlerin alınması</li>
                <li>Çalışan eğitimlerinin verilmesi</li>
            </ul>
            
            <p>KVKK uyumu, sürekli bir süreçtir ve düzenli olarak gözden geçirilmelidir.</p>
        `,
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
        author: "Can Öztürk",
        authorAvatar: "https://i.pravatar.cc/100?img=51",
        date: "28 Aralık 2025",
        readTime: "9 dk",
        views: 5120,
        category: "kvkk",
        tags: ["KVKK", "Veri Güvenliği", "Uyum"]
    },
    {
        id: 6,
        slug: "marka-tescil-stratejileri",
        title: "Marka Tescil Stratejileri ve Uluslararası Koruma",
        excerpt: "Marka tescil süreçleri, uluslararası koruma stratejileri ve fikri mülkiyet hakları yönetimi.",
        content: `
            <p>Marka, bir işletmenin en değerli varlıklarından biridir. Doğru bir marka stratejisi ve etkili koruma mekanizmaları, uzun vadeli başarı için kritik öneme sahiptir.</p>
            
            <h2>Marka Tescil Süreci</h2>
            <p>Türkiye'de marka tescili, Türk Patent ve Marka Kurumu (TÜRKPATENT) tarafından yürütülmektedir. Süreç ortalama 6-12 ay sürmektedir.</p>
            
            <h3>Tescil Adımları:</h3>
            <ol>
                <li>Marka araştırması</li>
                <li>Başvuru hazırlığı</li>
                <li>Resmi başvuru</li>
                <li>İnceleme süreci</li>
                <li>İlan ve itiraz süreci</li>
                <li>Tescil belgesi</li>
            </ol>
            
            <h2>Uluslararası Koruma</h2>
            <p>Madrid Protokolü, tek bir başvuru ile birden fazla ülkede marka koruması sağlama imkanı sunuyor.</p>
            
            <blockquote>
                "Marka, sadece bir logo değil, işletmenizin kimliği ve müşterilerinizle kurduğunuz güven ilişkisinin sembolüdür."
            </blockquote>
        `,
        image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=800&q=80",
        author: "Dr. Elif Şahin",
        authorAvatar: "https://i.pravatar.cc/100?img=26",
        date: "15 Aralık 2025",
        readTime: "7 dk",
        views: 2340,
        category: "marka",
        tags: ["Marka", "Fikri Mülkiyet", "Tescil"]
    },
    {
        id: 7,
        slug: "patent-basvuru-sureci",
        title: "Patent Başvuru Süreci ve Buluş Koruması",
        excerpt: "Patent başvurusu nasıl yapılır? Buluşların korunması ve patent stratejileri hakkında bilmeniz gerekenler.",
        content: `
            <p>Patent, bir buluşun sahibine belirli bir süre boyunca tekel hakkı veren yasal bir koruma mekanizmasıdır. Ar-Ge yatırımlarının korunması ve ticarileştirilmesi için kritik öneme sahiptir.</p>
            
            <h2>Patent Türleri</h2>
            <ul>
                <li><strong>Buluş Patenti:</strong> Yeni bir ürün veya yöntem</li>
                <li><strong>Faydalı Model:</strong> Mevcut bir ürünün iyileştirilmesi</li>
                <li><strong>Tasarım Tescili:</strong> Ürünün görünümünün korunması</li>
            </ul>
            
            <h2>Başvuru Süreci</h2>
            <p>Patent başvurusu, teknik bir süreçtir ve uzman desteği alınması önerilir. Başvuru öncesi detaylı bir araştırma yapılmalıdır.</p>
            
            <h3>Kritik Noktalar:</h3>
            <ul>
                <li>Yenilik kriteri</li>
                <li>Buluş basamağı</li>
                <li>Sanayiye uygulanabilirlik</li>
                <li>Açıklama yeterliliği</li>
            </ul>
            
            <p>Patent stratejisi, sadece koruma değil, aynı zamanda ticarileşme ve lisanslama fırsatlarını da içermelidir.</p>
        `,
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
        author: "Deniz Yıldız",
        authorAvatar: "https://i.pravatar.cc/100?img=68",
        date: "5 Aralık 2025",
        readTime: "11 dk",
        views: 2780,
        category: "patent",
        tags: ["Patent", "Buluş", "Fikri Mülkiyet"]
    },
    {
        id: 8,
        slug: "risk-yonetimi-mevzuat-uyumu",
        title: "Risk Yönetimi ve Mevzuat Uyumu Stratejileri",
        excerpt: "Kurumsal risk yönetimi çerçeveleri, mevzuat uyum süreçleri ve en iyi uygulamalar.",
        content: `
            <p>Etkin risk yönetimi ve mevzuat uyumu, modern işletmelerin sürdürülebilirliği için vazgeçilmezdir. Düzenleyici gereksinimlerin karmaşıklığı ve değişim hızı, proaktif bir yaklaşımı zorunlu kılıyor.</p>
            
            <h2>Risk Yönetimi Çerçevesi</h2>
            <p>ISO 31000 standardı, risk yönetimi için uluslararası kabul görmüş bir çerçeve sunuyor.</p>
            
            <h3>Temel Adımlar:</h3>
            <ol>
                <li>Risk tanımlama</li>
                <li>Risk analizi</li>
                <li>Risk değerlendirme</li>
                <li>Risk muamelesi</li>
                <li>İzleme ve gözden geçirme</li>
            </ol>
            
            <h2>Mevzuat Uyumu</h2>
            <p>Compliance programları, sadece yasal gereksinimleri karşılamakla kalmaz, aynı zamanda kurumsal itibarı korur ve paydaş güvenini artırır.</p>
            
            <ul>
                <li>Uyum politikalarının oluşturulması</li>
                <li>Eğitim ve farkındalık programları</li>
                <li>İç kontrol sistemleri</li>
                <li>Düzenli denetimler</li>
            </ul>
            
            <blockquote>
                "Risk yönetimi, sadece tehditleri minimize etmek değil, fırsatları maksimize etmek anlamına gelir."
            </blockquote>
        `,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        author: "Cem Aydın",
        authorAvatar: "https://i.pravatar.cc/100?img=14",
        date: "20 Kasım 2025",
        readTime: "10 dk",
        views: 3120,
        category: "risk-mevzuat",
        tags: ["Risk Yönetimi", "Uyum", "Mevzuat"]
    }
];

const ArticlesPage = () => {
    const { articleSlug } = useParams();
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (articleSlug) {
            const article = articlesData.find(a => a.slug === articleSlug);
            if (article) {
                setSelectedArticle(article);
            }
        } else {
            setSelectedArticle(null);
        }
    }, [articleSlug]);

    const handleArticleClick = (article) => {
        navigate(`/medya/makaleler/${article.slug}`);
    };

    const handleClose = () => {
        navigate('/medya/makaleler');
    };

    const filteredArticles = articlesData.filter(article => {
        const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Article detail view
    if (selectedArticle) {
        return (
            <div className="pt-20 min-h-screen bg-white">
                {/* Article Header */}
                <article className="max-w-4xl mx-auto px-6 py-16">
                    <button
                        onClick={handleClose}
                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary transition-colors mb-8"
                    >
                        <ArrowLeft size={16} />
                        Tüm Makaleler
                    </button>

                    {/* Category Badge */}
                    <div className="mb-6">
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider">
                            {categories.find(c => c.id === selectedArticle.category)?.name}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl lg:text-6xl font-black text-secondary leading-tight mb-6">
                        {selectedArticle.title}
                    </h1>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <img
                                src={selectedArticle.authorAvatar}
                                alt={selectedArticle.author}
                                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg"
                            />
                            <div>
                                <div className="font-bold text-secondary">{selectedArticle.author}</div>
                                <div className="text-sm text-gray-500">Yazar</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar size={16} />
                            <span>{selectedArticle.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock size={16} />
                            <span>{selectedArticle.readTime} okuma</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Eye size={16} />
                            <span>{selectedArticle.views.toLocaleString()} görüntülenme</span>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-gray-200/50">
                        <img
                            src={selectedArticle.image}
                            alt={selectedArticle.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Article Content */}
                    <div
                        className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-secondary prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-secondary prose-ul:text-gray-600 prose-ol:text-gray-600 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:text-secondary prose-blockquote:font-medium"
                        dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                    />

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <div className="flex flex-wrap gap-3">
                            {selectedArticle.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 rounded-full bg-gray-50 text-secondary text-sm font-bold hover:bg-primary hover:text-white transition-colors cursor-pointer"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Share */}
                    <div className="mt-8 flex items-center justify-between p-6 bg-gray-50 rounded-3xl">
                        <span className="font-bold text-secondary">Bu makaleyi paylaş</span>
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
                                Makaleler
                            </h1>
                            <p className="text-lg text-gray-500">
                                Uzman görüşleri ve sektörel yazılar
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <BookOpen size={16} />
                                <span className="font-bold">{filteredArticles.length} Makale</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-10">
                <div className="container mx-auto px-6">
                    {/* Search */}
                    <div className="mb-6">
                        <div className="relative max-w-md">
                            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Makale ara..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none font-medium text-secondary"
                            />
                        </div>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${selectedCategory === category.id
                                        ? 'bg-secondary text-white shadow-lg shadow-gray-200'
                                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    {filteredArticles.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">📝</div>
                            <h3 className="text-2xl font-black text-secondary mb-2">Makale bulunamadı</h3>
                            <p className="text-gray-500">Farklı bir kategori veya arama terimi deneyin</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredArticles.map((article, idx) => (
                                <motion.article
                                    key={article.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    onClick={() => handleArticleClick(article)}
                                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-gray-200/50 transition-all cursor-pointer"
                                >
                                    {/* Article Image */}
                                    <div className="aspect-[16/10] overflow-hidden relative">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-secondary text-xs font-bold uppercase tracking-wider">
                                                {categories.find(c => c.id === article.category)?.name}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Article Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-black text-secondary group-hover:text-primary transition-colors mb-3 leading-tight line-clamp-2">
                                            {article.title}
                                        </h3>

                                        <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
                                            {article.excerpt}
                                        </p>

                                        {/* Author & Meta */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={article.authorAvatar}
                                                    alt={article.author}
                                                    className="w-8 h-8 rounded-full object-cover"
                                                />
                                                <span className="text-xs font-bold text-gray-600">{article.author}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-xs text-gray-400">
                                                <div className="flex items-center gap-1">
                                                    <Clock size={12} />
                                                    <span>{article.readTime}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Eye size={12} />
                                                    <span>{(article.views / 1000).toFixed(1)}k</span>
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
        </div>
    );
};

export default ArticlesPage;
