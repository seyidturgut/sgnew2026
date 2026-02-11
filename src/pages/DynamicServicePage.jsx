import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ServicePageLayout from '../components/layout/ServicePageLayout'
import ChatBubble from '../components/ChatBubble'
import TrustBadges from '../components/TrustBadges'
import { serviceMenu } from '../data/serviceMenu'

import StatsSection from '../components/StatsSection'
import {
    CheckCircle2, ArrowRight, Loader2, Star, Target, Award,
    Briefcase, Settings, Zap, ShieldCheck, PieChart, Factory,
    Ship, Cpu, Coins, Globe, TrendingUp, Users, BookOpen, Scale, ChevronRight,
    LineChart, Layers, Search, Shield
} from 'lucide-react'

// İkon Haritası - JSON'dan gelen string'i Lucide ikonuna çevirmek için
const IconMap = {
    Star, Target, Award, Briefcase, Settings, Zap, ShieldCheck,
    PieChart, Factory, Ship, Cpu, Coins, Globe, TrendingUp, Users, BookOpen, Scale, ArrowRight,
    LineChart, Layers, Search, Shield, CheckCircle2
}

const TabsContentSection = ({ section }) => {
    const [activeTab, setActiveTab] = useState(0)
    const items = section.items || []
    const activeItem = items[activeTab] || items[0]
    const isTopCentered = section.layout === 'top_center'

    if (!items.length) return null

    if (isTopCentered) {
        return (
            <div className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-secondary tracking-tight">{section.title}</h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto"></div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {items.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`rounded-lg px-4 py-2.5 text-sm lg:text-[15px] font-semibold transition-all border ${idx === activeTab ? 'bg-secondary text-white border-secondary shadow-sm' : 'bg-gray-50 text-secondary border-transparent hover:bg-gray-100'}`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-5 lg:p-7 shadow-sm space-y-4">
                    <h4 className="text-2xl lg:text-[30px] font-bold text-secondary leading-tight">{activeItem.title}</h4>
                    <div
                        className="prose prose-lg prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary prose-a:font-semibold hover:prose-a:text-primary/80 max-w-none"
                        dangerouslySetInnerHTML={{ __html: activeItem.content || '' }}
                    />
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto space-y-5">
            <div className="space-y-3">
                <h3 className="text-2xl lg:text-3xl font-bold text-secondary tracking-tight">{section.title}</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7">
                <div className="lg:col-span-3">
                    <div className="lg:sticky lg:top-20 rounded-2xl border border-gray-100 bg-white p-2 shadow-sm">
                        <div className="max-h-[520px] overflow-y-auto pr-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-1.5">
                            {items.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTab(idx)}
                                    className={`w-full text-left rounded-lg px-3 py-2.5 text-[15px] font-semibold transition-all border ${idx === activeTab ? 'bg-secondary text-white border-secondary shadow-sm' : 'bg-gray-50 text-secondary border-transparent hover:bg-gray-100'}`}
                                >
                                    <span className="inline-flex items-center gap-2">
                                        <span className={`h-1.5 w-1.5 rounded-full ${idx === activeTab ? 'bg-primary' : 'bg-gray-300'}`}></span>
                                        {item.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-9">
                    <div className="rounded-2xl border border-gray-100 bg-white p-5 lg:p-7 shadow-sm space-y-4">
                        <h4 className="text-2xl lg:text-[30px] font-bold text-secondary leading-tight">{activeItem.title}</h4>
                        <div
                            className="prose prose-lg prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary prose-a:font-semibold hover:prose-a:text-primary/80 max-w-none"
                            dangerouslySetInnerHTML={{ __html: activeItem.content || '' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const DynamicServicePage = ({ forcedSlug, forcedSubcategory }) => {
    const params = useParams()

    // Allow props to override params (for ServiceDispatcher logic)
    const category = params.category
    // If forcedSubcategory is provided (even if null), use it. Otherwise use params.
    const subcategory = forcedSubcategory !== undefined ? forcedSubcategory : params.subcategory
    const slug = forcedSlug || params.slug || params.subcategory // Fallback for 2-level routes if not dispatched

    const [pageData, setPageData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPageContent = async () => {
            setLoading(true)
            try {
                // Önce route'a özel JSON dosyasını kontrol et, bulunamazsa slug bazlı dosyaya düş
                const routeKey = [category, subcategory, slug].filter(Boolean).join('__')
                const localCandidates = [
                    `/data/${routeKey}.json`,
                    category && slug ? `/data/${category}__${slug}.json` : null,
                    category && slug ? `/data/${category}__${category}__${slug}.json` : null, // Handle implicit same-name subcategory
                    `/data/${slug}.json`
                ].filter(Boolean)

                let localData = null
                for (const candidate of localCandidates) {
                    const localResponse = await fetch(candidate)
                    if (localResponse.ok) {
                        try {
                            localData = await localResponse.json()
                            break
                        } catch (parseErr) {
                            // Bazı ortamlarda olmayan JSON dosyaları 200 + HTML dönebilir.
                            // Bu durumda bir sonraki adaya düş.
                            console.warn(`Invalid JSON for candidate: ${candidate}`, parseErr)
                        }
                    }
                }

                if (localData) {

                    // Determine content_json (Handle both flat and wrapped structures)
                    // Flat: generated by generate_tp_json.py (has sections at root)
                    // Wrapped: generated by create_vergi_json.py (has content_json property)
                    const contentValues = localData.content_json || localData;

                    setPageData({
                        ...localData,
                        content_json: contentValues,
                        hero_image: localData.hero_image || localData.hero?.image,
                        category_name: localData.category_name || localData.category,
                        title: localData.title,
                        title_highlighted: localData.title_highlighted
                    })
                    setLoading(false)
                    return
                }

                // Localde yoksa API'ye git
                const response = await fetch(`http://localhost:8888/api/get_service.php?slug=${slug}`)
                if (!response.ok) throw new Error('İçerik yüklenemedi.')
                const data = await response.json()
                setPageData(data)
            } catch (err) {
                console.error("Fetch error:", err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchPageContent()
    }, [category, subcategory, slug])

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <Loader2 className="animate-spin text-primary" size={48} />
                <p className="text-gray-500 font-medium animate-pulse">İçerik hazırlanıyor...</p>
            </div>
        )
    }

    if (error || !pageData) {
        return (
            <div className="text-center py-32 px-4 max-w-2xl mx-auto space-y-6">
                <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-red-500 mb-8">
                    <Globe size={40} />
                </div>
                <h3 className="text-3xl font-bold text-secondary">Sayfa Bulunamadı</h3>
                <p className="text-gray-500 text-lg">İstediğiniz içerik henüz veritabanına eklenmemiş veya bir bağlantı sorunu oluşmuş olabilir.</p>
                <Link to="/" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-dark transition-all">
                    Ana Sayfaya Dön <ArrowRight size={20} />
                </Link>
            </div>
        )
    }

    // Category name mapping (menüdeki isimlerle eşleşmeli)
    const categoryNameMap = {
        'vergi-finans': 'Vergi & Finans',
        'kurumsal-finans': 'Kurumsal Finans',
        'ar-ge-ve-fikri-mulkiyet': 'Ar-Ge ve Fikri Mülkiyet',
        'dis-ticaret': 'Dış Ticaret',
        'hukuk': 'Hukuk',
        'yonetim-danismanligi': 'Yönetim Danışmanlığı',
        'degerlemeler': 'Değerlemeler',
        'finansmana-erisim-ve-surdurulebilirlik': 'Finansmana Erişim ve Sürdürülebilirlik',
        'globallesme-ihracat': 'Globalleşme & İhracat',
        'globallesme-ve-ihracat': 'Globalleşme & İhracat',
        'mevzuat-uyum': 'Mevzuat & Uyum',
        'mevzuat-ve-uyum': 'Mevzuat & Uyum'
    }

    const subcategoryNameMap = {
        'vergi': 'Vergi',
        'kurumsal-finansman': 'Kurumsal Finansman',
        'finansmana-erisim': 'Finansmana Erişim',
        'surdurulebilirlik': 'Sürdürülebilirlik',
        'rpa-ve-surec-danismanligi': 'RPA ve Süreç Danışmanlığı',
        'ar-ge-yonetimi': 'Ar-Ge Yönetimi',
        'fikri-mulkiyet': 'Fikri Mülkiyet',
        'ihracat': 'İhracat',
        'ithalat': 'İthalat',
        'sozlesme-yonetimi': 'Sözleşme Yönetimi',
        'mevzuat-uyum': 'Mevzuat Uyum',
        'ar-ge': 'Ar-Ge',
        'sirket-degerleme': 'Şirket Değerleme',
        'makina-ekipman': 'Makina Ekipman',
        'eserler': 'Eserler',
        'birlesme-ve-satin-alma-ma': 'Birleşme ve Satın Alma (M&A)',
        'uluslararasi-ticaret': 'Uluslararası Ticaret'
    }

    const categoryFallbacks = {
        'vergi-finans': '/images/servisler/tax-general.webp',
        'ar-ge-ve-fikri-mulkiyet': '/images/servisler/tech-general.webp',
        'mevzuat-uyum': '/images/servisler/legal-general.webp',
        'mevzuat-ve-uyum': '/images/servisler/legal-general.webp',
        'globallesme-ihracat': '/images/servisler/global-general.webp',
        'globallesme-ve-ihracat': '/images/servisler/global-general.webp',
        'finansmana-erisim-surdurulebilirlik': '/images/servisler/finance-general.webp',
        'finansmana-erisim-ve-surdurulebilirlik': '/images/servisler/finance-general.webp',
        'kurumsal-finans': '/images/servisler/finance-general.webp',
        'dis-ticaret': '/images/servisler/global-general.webp'
    };

    const getFallbackImage = (cat) => categoryFallbacks[cat] || '/images/servisler/services-hero-business.webp';

    // Helper to find service info in menu
    const findServiceInMenu = (targetSlug) => {
        if (!targetSlug) return null;
        console.log("Searching for slug:", targetSlug);
        for (const cat of serviceMenu) {
            for (const sub of cat.subcategories || []) {
                const found = sub.items?.find(item => {
                    const itemSlug = item.href.split('/').pop();
                    return itemSlug === targetSlug || item.href.endsWith('/' + targetSlug);
                });

                if (found) {
                    console.log("Found service:", found.title, "in sub:", sub.title);
                    return { category: cat, subcategory: sub, item: found };
                }
            }
        }
        console.warn("Service NOT found for:", targetSlug);
        return null;
    };

    const serviceInfo = findServiceInMenu(slug);

    // Use found info if available, otherwise fallback to params
    const activeCategory = serviceInfo?.category || {
        title: categoryNameMap[category] || pageData.category_name,
        slug: category
    };

    const activeSubcategory = serviceInfo?.subcategory || (subcategory ? {
        title: subcategoryNameMap[subcategory] || subcategory,
        slug: subcategory
    } : null);

    // Breadcrumb oluştur
    const breadcrumb = [
        { icon: 'Home', href: '/' }, // Home icon
        { label: 'Servisler', href: '/servisler' }
    ]

    // Kategori varsa ekle
    if (activeCategory.slug) {
        // Use mapped title if available, otherwise category object's title, otherwise fallback
        const catTitle = categoryNameMap[activeCategory.slug] || activeCategory.title || pageData.category_name;
        breadcrumb.push({
            label: catTitle,
            href: `/servisler/${activeCategory.slug}`
        })
    }

    // Alt kategori varsa ekle
    if (activeSubcategory &&
        activeSubcategory.slug !== 'uluslararasi-ticaret' &&
        activeSubcategory.slug !== 'sirket-kurulusu-ve-yonetimi' &&
        activeSubcategory.slug !== 'proje-ve-urun-cozumleri' &&
        activeSubcategory.slug !== 'yasal-uyum-risk') {
        const subTitle = subcategoryNameMap[activeSubcategory.slug] || activeSubcategory.title;
        breadcrumb.push({
            label: subTitle,
            href: `/servisler/${activeCategory.slug}/${activeSubcategory.slug}`
        })
    }

    // Sayfa başlığını ekle (son eleman, href yok)
    breadcrumb.push({
        label: pageData.title + (pageData.title_highlighted ? ' ' + pageData.title_highlighted : '')
    })

    const renderContent = () => {
        const sections = pageData.content_json.sections || []
        const isCompactPage = pageData.layout_density === 'compact'

        return (
            <div className={isCompactPage ? "space-y-14 pb-14" : "space-y-24 pb-20"}>
                {sections.map((section, index) => {
                    const IconComponent = IconMap[section.icon] || Star

                    switch (section.type) {
                        // CORPORATE PREMIUM SECTIONS

                        case 'intro_text':
                            return (
                                <div key={index} className="relative -mt-12 mb-12">
                                    {/* Background Decoration */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50/30 rounded-3xl -z-10"></div>

                                    <div className="max-w-5xl mx-auto p-8 lg:p-12">
                                        {/* Decorative Element */}
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="h-1 w-12 bg-gradient-to-r from-primary to-orange-400 rounded-full"></div>
                                            <span className="text-sm font-bold text-primary uppercase tracking-wider">Hizmet Detayları</span>
                                        </div>

                                        <div
                                            className="prose prose-xl prose-slate max-w-none
                                                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                                                prose-p:first-of-type:text-2xl prose-p:first-of-type:font-light prose-p:first-of-type:text-secondary prose-p:first-of-type:leading-snug prose-p:first-of-type:mb-8
                                                prose-strong:text-primary prose-strong:font-semibold
                                                prose-headings:text-secondary"
                                            dangerouslySetInnerHTML={{ __html: section.content }}
                                        />

                                        {/* Bottom Accent */}
                                        <div className="mt-8 pt-8 border-t border-gray-200">
                                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                    <span>Profesyonel Danışmanlık</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                    <span>Uzman Kadro</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                    <span>Hızlı Çözüm</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        // Trust Badges - Always show after intro
                        case 'trust_badges':
                            return <TrustBadges key={index} />

                        // Stats Section - Always show after intro
                        case 'stats_section':
                            return <StatsSection key={index} />

                        case 'process_grid':
                            return (
                                <div key={index} className="space-y-16">
                                    <div className="max-w-3xl mx-auto text-center space-y-4">
                                        <h2 className="text-4xl font-light text-secondary">{section.title}</h2>
                                        <div className="h-1 w-20 bg-gradient-to-r from-primary to-orange-400 mx-auto rounded-full"></div>
                                        <p className="text-lg text-gray-600 font-light">{section.description}</p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                                        {section.steps.map((step, i) => {
                                            const StepIcon = IconMap[step.icon]
                                            return (
                                                <div key={i} className="relative space-y-4 p-8 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 bg-white">
                                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-orange-400 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                                                        {StepIcon ? <StepIcon size={24} /> : (step.number || i + 1)}
                                                    </div>
                                                    <h3 className="text-2xl font-medium text-secondary pt-4">{step.title}</h3>
                                                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )

                        case 'info_list':
                            return (
                                <div key={index} className="space-y-12 max-w-5xl mx-auto">
                                    <div className="text-center space-y-4">
                                        <h2 className="text-4xl font-light text-secondary">{section.title}</h2>
                                        <div className="h-1 w-20 bg-gradient-to-r from-primary to-orange-400 mx-auto rounded-full"></div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {section.items.map((item, i) => (
                                            <div key={i} className="relative pl-6 py-4 border-l-4 border-primary/30 hover:border-primary transition-colors bg-gradient-to-r from-orange-50/30 to-transparent rounded-r-lg">
                                                <h3 className="text-xl font-medium text-secondary mb-2">{item.title}</h3>
                                                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )

                        case 'services_list':
                            return (
                                <div key={index} className={`max-w-6xl mx-auto bg-gradient-to-br from-blue-50/50 via-white to-orange-50/30 rounded-3xl ${section.compact ? 'space-y-8 p-8 lg:p-10' : 'space-y-12 p-12 lg:p-16'}`}>
                                    <div className="text-center space-y-4">
                                        <h2 className={`${section.compact ? 'text-3xl' : 'text-4xl'} font-light text-secondary`}>{section.title}</h2>
                                        <div className="h-1 w-20 bg-gradient-to-r from-primary to-orange-400 mx-auto rounded-full"></div>
                                    </div>
                                    <div className={`grid grid-cols-1 md:grid-cols-2 ${section.compact ? 'gap-x-10 gap-y-6' : 'gap-x-16 gap-y-10'}`}>
                                        {section.services.map((service, i) => (
                                            <div key={i} className={`${section.compact ? 'space-y-1.5' : 'space-y-3'} group`}>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0 group-hover:scale-150 transition-transform"></div>
                                                    <div className="space-y-2">
                                                        <h3 className={`${section.compact ? 'text-lg' : 'text-xl'} font-medium text-secondary`}>{service.title}</h3>
                                                        {service.desc && <p className="text-gray-600 leading-relaxed">{service.desc}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )

                        case 'benefits_simple':
                            return (
                                <div key={index} className="bg-gradient-to-br from-secondary via-secondary to-blue-900 py-20 -mx-4 px-4">
                                    <div className="max-w-6xl mx-auto space-y-12">
                                        <div className="text-center space-y-4">
                                            <h2 className="text-4xl font-light text-white">{section.title}</h2>
                                            <div className="h-1 w-20 bg-gradient-to-r from-primary to-orange-400 mx-auto rounded-full"></div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {section.benefits.map((benefit, i) => (
                                                <div key={i} className="space-y-3 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                                                    <h3 className="text-xl font-medium text-white">{benefit.title}</h3>
                                                    <p className="text-white/80 leading-relaxed">{benefit.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )

                        case 'content_with_image':
                            return (
                                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                                    <div className={`space-y-6 ${section.image_position === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="space-y-4">
                                            <h2 className="text-4xl font-light text-secondary">{section.title}</h2>
                                            <div className="h-1 w-20 bg-gradient-to-r from-primary to-orange-400 rounded-full"></div>
                                        </div>
                                        <div
                                            className="prose prose-lg prose-slate max-w-none
                                                prose-p:text-gray-700 prose-p:leading-relaxed
                                                prose-ul:space-y-2 prose-li:text-gray-700
                                                prose-strong:text-secondary"
                                            dangerouslySetInnerHTML={{ __html: section.content }}
                                        />
                                    </div>
                                    <div className={`relative ${section.image_position === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-orange-400/10 rounded-2xl transform rotate-3"></div>
                                        <img
                                            src={section.image}
                                            alt={section.title}
                                            className="relative w-full h-auto rounded-xl shadow-2xl border-4 border-white"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = getFallbackImage(category);
                                            }}
                                        />
                                    </div>
                                </div>
                            )

                        case 'faq_clean':
                            return (
                                <div key={index} className="max-w-4xl mx-auto space-y-12">
                                    <div className="text-center space-y-4">
                                        <h2 className="text-4xl font-light text-secondary">{section.title}</h2>
                                        <div className="h-1 w-20 bg-gradient-to-r from-primary to-orange-400 mx-auto rounded-full"></div>
                                    </div>
                                    <div className="space-y-4">
                                        {section.faqs.map((faq, i) => (
                                            <details key={i} className="group border-l-4 border-gray-200 hover:border-primary transition-colors bg-white rounded-r-lg shadow-sm hover:shadow-md">
                                                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                                                    <span className="text-lg font-medium text-secondary pr-8">{faq.q}</span>
                                                    <ChevronRight className="w-5 h-5 text-primary shrink-0 transition-transform group-open:rotate-90" />
                                                </summary>
                                                <div className="px-6 pb-6 pt-2 bg-gray-50/50">
                                                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            )

                        case 'cta_simple':
                            return (
                                <div key={index} className="bg-gradient-to-br from-secondary via-secondary to-blue-900 py-20 -mx-4 px-4 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
                                    <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                                        <h2 className="text-4xl font-light text-white">{section.title}</h2>
                                        <div className="h-1 w-20 bg-gradient-to-r from-primary to-orange-400 mx-auto rounded-full"></div>
                                        <p className="text-xl font-light text-white/90">{section.description}</p>
                                        <div className="pt-4">
                                            <a
                                                href="#contact-form"
                                                className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-orange-400 text-white font-medium rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                                            >
                                                {section.button_text}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )

                        // KEEP OLD SECTIONS FOR COMPATIBILITY
                        case 'stats_highlight':
                            return (
                                <div key={index} className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-20 relative z-20">
                                    {section.stats.map((stat, i) => {
                                        const StatIcon = IconMap[stat.icon] || Star
                                        return (
                                            <div key={i} className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-2xl border border-gray-100 hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 group">
                                                <div className="flex flex-col items-center text-center space-y-4">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                                        <StatIcon size={24} />
                                                    </div>
                                                    <div className="text-4xl lg:text-5xl font-black text-primary">{stat.number}</div>
                                                    <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">{stat.label}</div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )

                        case 'feature_showcase':
                            return (
                                <div key={index} className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${section.layout === 'left' ? 'py-12' : 'py-8'}`}>
                                    <div className={`space-y-8 lg:col-span-6 ${section.layout === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="space-y-4">
                                            {section.subtitle && (
                                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100">
                                                    <Target size={14} /> {section.subtitle}
                                                </div>
                                            )}
                                            <h3 className="text-3xl lg:text-5xl font-bold text-secondary leading-tight">
                                                {section.title}
                                            </h3>
                                            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-orange-400 rounded-full"></div>
                                        </div>

                                        <div
                                            className="prose prose-lg prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-secondary max-w-none"
                                            dangerouslySetInnerHTML={{ __html: section.content }}
                                        />

                                        {section.highlights && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                                                {section.highlights.map((h, i) => (
                                                    <div key={i} className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3 border border-green-100">
                                                        <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                                                        <span className="font-semibold text-secondary text-sm">{h}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className={`relative lg:col-span-6 group ${section.layout === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple/10 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500 ease-out"></div>
                                        <div className="absolute inset-0 bg-gradient-to-tl from-secondary/10 to-blue-500/10 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 ease-out delay-75"></div>
                                        <div className="relative h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-[1.02]">
                                            <img
                                                src={section.image}
                                                alt={section.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = getFallbackImage(category);
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                        </div>
                                    </div>
                                </div>
                            )

                        case 'timeline_vertical':
                            return (
                                <div key={index} className="space-y-12">
                                    <div className="text-center max-w-3xl mx-auto space-y-4">
                                        <h3 className="text-4xl lg:text-5xl font-bold text-secondary">{section.title}</h3>
                                        <p className="text-lg text-gray-600">{section.description}</p>
                                        <div className="h-1 w-24 bg-gradient-to-r from-primary to-orange-400 rounded-full mx-auto"></div>
                                    </div>
                                    <div className="relative max-w-5xl mx-auto">
                                        {/* Timeline Line */}
                                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-purple-500 to-secondary hidden lg:block"></div>

                                        <div className="space-y-12">
                                            {section.steps.map((step, i) => {
                                                const StepIcon = IconMap[step.icon] || Target
                                                return (
                                                    <div key={i} className="relative flex gap-8 items-start group">
                                                        {/* Timeline Dot */}
                                                        <div className="hidden lg:flex w-16 h-16 bg-white rounded-full border-4 border-primary shadow-lg items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform z-10">
                                                            <StepIcon size={28} />
                                                        </div>

                                                        {/* Content Card */}
                                                        <div className="flex-1 bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all">
                                                            <div className="flex items-start justify-between gap-4 mb-4">
                                                                <div className="space-y-2">
                                                                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                                                                        {step.phase}
                                                                    </div>
                                                                    <h4 className="text-2xl font-bold text-secondary">{step.title}</h4>
                                                                </div>
                                                                <div className="text-right shrink-0">
                                                                    <div className="text-xs text-gray-500 uppercase tracking-wider">Süre</div>
                                                                    <div className="text-sm font-bold text-primary">{step.duration}</div>
                                                                </div>
                                                            </div>
                                                            <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )

                        case 'intro_block':
                            return (
                                <div key={index} className="bg-gradient-to-br from-blue-50 via-white to-orange-50 rounded-[3rem] p-10 lg:p-16 space-y-8 border border-gray-100">
                                    <div className="space-y-4">
                                        <h2 className="text-4xl lg:text-5xl font-bold text-secondary">{section.title}</h2>
                                        <p className="text-xl text-primary font-semibold">{section.subtitle}</p>
                                        <div className="h-1.5 w-32 bg-primary rounded-full"></div>
                                    </div>
                                    <div className="prose prose-lg prose-p:text-gray-600 max-w-none" dangerouslySetInnerHTML={{ __html: section.content }} />
                                    {section.highlights && (
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                                            {section.highlights.map((h, i) => (
                                                <div key={i} className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                                    <CheckCircle2 className="text-primary shrink-0" size={20} />
                                                    <span className="font-semibold text-secondary">{h}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )

                        case 'planning_steps':
                            return (
                                <div key={index} className="space-y-12">
                                    <div className="text-center max-w-3xl mx-auto space-y-4">
                                        <h3 className="text-4xl font-bold text-secondary">{section.title}</h3>
                                        <p className="text-lg text-gray-600">{section.description}</p>
                                        <div className="h-1 w-24 bg-primary rounded-full mx-auto"></div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {section.steps.map((step, i) => (
                                            <div key={i} className="relative group bg-white rounded-[2rem] p-6 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all">
                                                <div className="text-6xl font-black text-primary/10 absolute top-4 right-4">{i + 1}</div>
                                                <div className="relative z-10 space-y-4">
                                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-black text-xl">
                                                        {i + 1}
                                                    </div>
                                                    <h4 className="text-lg font-bold text-secondary">{step.title}</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )

                        case 'service_cards':
                            const colorMap = {
                                blue: 'from-blue-500 to-blue-600',
                                green: 'from-green-500 to-green-600',
                                red: 'from-red-500 to-red-600',
                                purple: 'from-purple-500 to-purple-600',
                                orange: 'from-orange-500 to-orange-600',
                                indigo: 'from-indigo-500 to-indigo-600'
                            }
                            return (
                                <div key={index} className="space-y-12 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-[3rem] p-10 lg:p-16">
                                    <div className="text-center space-y-4">
                                        <h3 className="text-4xl lg:text-5xl font-bold text-secondary">{section.title}</h3>
                                        {section.subtitle && <p className="text-lg text-gray-600">{section.subtitle}</p>}
                                        <div className="h-1 w-24 bg-gradient-to-r from-primary to-orange-400 rounded-full mx-auto"></div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {section.cards.map((card, i) => {
                                            const CardIcon = IconMap[card.icon] || Briefcase
                                            const gradientClass = colorMap[card.color] || 'from-primary to-orange-600'
                                            return (
                                                <div key={i} className="group bg-white rounded-[2rem] p-8 hover:shadow-2xl transition-all border border-gray-100 hover:border-transparent hover:-translate-y-2 duration-300">
                                                    <div className={`w-14 h-14 bg-gradient-to-br ${gradientClass} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                                                        <CardIcon size={28} />
                                                    </div>
                                                    <h4 className="text-xl font-bold text-secondary mb-3">{card.title}</h4>
                                                    <p className="text-gray-600 leading-relaxed text-sm">{card.desc}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )

                        case 'benefits_grid':
                            return (
                                <div key={index} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-[3rem] p-10 lg:p-16 space-y-12">
                                    <div className="text-center space-y-4">
                                        <h3 className="text-4xl font-bold text-secondary">{section.title}</h3>
                                        <div className="h-1 w-24 bg-primary rounded-full mx-auto"></div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {section.benefits.map((benefit, i) => (
                                            <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm">
                                                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold shrink-0">
                                                    <CheckCircle2 size={20} />
                                                </div>
                                                <div className="space-y-2">
                                                    <h4 className="font-bold text-secondary text-lg">{benefit.title}</h4>
                                                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )

                        case 'faq_section':
                            return (
                                <div key={index} className="space-y-12">
                                    <div className="text-center space-y-4">
                                        <h3 className="text-4xl font-bold text-secondary">{section.title}</h3>
                                        <div className="h-1 w-24 bg-primary rounded-full mx-auto"></div>
                                    </div>
                                    <div className="max-w-4xl mx-auto space-y-4">
                                        {section.faqs.map((faq, i) => (
                                            <details key={i} className="group bg-white rounded-2xl border border-gray-100 hover:border-primary/20 transition-all">
                                                <summary className="cursor-pointer p-6 font-bold text-secondary flex items-center justify-between">
                                                    <span>{faq.q}</span>
                                                    <ArrowRight className="group-open:rotate-90 transition-transform text-primary" size={20} />
                                                </summary>
                                                <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            )

                        case 'accordion_rich':
                            return (
                                <div key={index} className="space-y-8">
                                    <div className="space-y-4">
                                        <h3 className="text-3xl lg:text-4xl font-bold text-secondary">{section.title}</h3>
                                        <div className="h-1 w-24 bg-primary rounded-full"></div>
                                    </div>
                                    <div className="space-y-3">
                                        {(section.items || []).map((item, i) => (
                                            <details key={i} className="group bg-white rounded-2xl border border-gray-100 hover:border-primary/20 transition-all">
                                                <summary className="cursor-pointer px-5 py-4 font-bold text-secondary flex items-center justify-between gap-4">
                                                    <span>{item.title}</span>
                                                    <ArrowRight className="group-open:rotate-90 transition-transform text-primary shrink-0" size={20} />
                                                </summary>
                                                <div
                                                    className="px-5 pb-5 prose prose-lg prose-p:text-gray-600 prose-p:leading-relaxed prose-ul:space-y-2 max-w-none"
                                                    dangerouslySetInnerHTML={{ __html: item.content || '' }}
                                                />
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            )

                        case 'hero_intro':
                            return (
                                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                    <div className="space-y-8">
                                        {section.badge && (
                                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-bold uppercase tracking-tighter">
                                                <IconComponent size={16} /> {section.badge}
                                            </div>
                                        )}
                                        <div className="space-y-4">
                                            <h2 className="text-4xl lg:text-5xl font-bold text-secondary leading-tight tracking-tight">
                                                {section.title} <br />
                                                <span className="text-primary italic font-serif">{section.title_highlight}</span>
                                            </h2>
                                            <p className="text-xl text-gray-600 leading-relaxed font-light">
                                                {section.description}
                                            </p>
                                        </div>
                                        {section.features && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium">
                                                {section.features.map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <CheckCircle2 size={18} className="text-primary shrink-0" />
                                                        <span className="text-gray-700">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl group-hover:bg-primary/10 transition-all"></div>
                                        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 bg-black">
                                            {pageData.youtube_id ? (
                                                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${pageData.youtube_id}`} frameBorder="0" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
                                            ) : (
                                                <img
                                                    src={section.image || pageData.hero_image}
                                                    alt={pageData.title}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = getFallbackImage(category);
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )

                        case 'icon_grid':
                            return (
                                <div key={index} className="space-y-12">
                                    <h3 className="text-3xl font-bold text-secondary border-l-4 border-primary pl-6">{section.title}</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {section.items.map((item, i) => {
                                            const ItemIcon = IconMap[item.icon] || CheckCircle2
                                            return (
                                                <div key={i} className="group p-8 bg-white rounded-[2rem] border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all">
                                                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                                        <ItemIcon size={24} />
                                                    </div>
                                                    <h4 className="text-lg font-bold text-secondary mb-3">{item.title}</h4>
                                                    <p className="text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )

                        case 'tabs_content':
                            return <TabsContentSection key={index} section={section} />

                        case 'process_steps':
                            return (
                                <div key={index} className="space-y-16">
                                    <div className="text-center max-w-2xl mx-auto space-y-4">
                                        <h3 className="text-3xl font-bold text-secondary">{section.title}</h3>
                                        <p className="text-gray-500">{section.description}</p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {section.steps.map((step, i) => (
                                            <div key={i} className="relative group p-6">
                                                <div className="text-6xl font-black text-gray-100 group-hover:text-primary/5 absolute top-0 left-0 -z-10 transition-all">0{i + 1}</div>
                                                <h4 className="font-bold text-secondary mb-3 mt-4">{step.title}</h4>
                                                <p className="text-sm text-gray-500 leading-relaxed font-light">{step.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )

                        case 'data_table':
                            return (
                                <div key={index} className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                                    <div className="bg-gray-50 px-8 py-6 border-b border-gray-100 flex justify-between items-center">
                                        <h4 className="font-bold text-secondary">{section.title}</h4>
                                        <span className="text-xs text-gray-400 font-medium italic">{section.subtitle}</span>
                                    </div>
                                    <table className="w-full text-left">
                                        <tbody className="divide-y divide-gray-100">
                                            {section.rows.map((row, i) => (
                                                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="px-8 py-4 text-sm font-medium text-gray-700">{row.label}</td>
                                                    <td className="px-8 py-4 text-sm font-black text-primary text-right">{row.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )

                        case 'rich_text':
                            return (
                                <div key={index} className="bg-gray-50 rounded-[3rem] p-10 lg:p-16 space-y-8">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-secondary">{section.title}</h3>
                                    <div className="text-gray-700 leading-relaxed text-lg font-light space-y-4 prose prose-primary max-w-none" dangerouslySetInnerHTML={{ __html: section.html }} />
                                </div>
                            )

                        case 'report_cards':
                            return (
                                <div key={index} className="space-y-12">
                                    <div className="text-center space-y-4">
                                        <h3 className="text-3xl lg:text-4xl font-bold text-secondary">{section.title}</h3>
                                        {section.subtitle && <p className="text-gray-600">{section.subtitle}</p>}
                                        <div className="h-1 w-20 bg-gradient-to-r from-primary to-orange-400 mx-auto rounded-full"></div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                        {section.reports.map((report, i) => (
                                            <a
                                                key={i}
                                                href={report.url}
                                                className="group flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/20"
                                                target={report.url?.startsWith('http') ? '_blank' : undefined}
                                                rel={report.url?.startsWith('http') ? 'noreferrer' : undefined}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                            <path d="M14 2v6h6" />
                                                        </svg>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <div className="text-sm font-semibold text-secondary">{report.title}</div>
                                                        {report.meta && <div className="text-xs text-gray-500">{report.meta}</div>}
                                                    </div>
                                                </div>
                                                <ArrowRight className="h-4 w-4 text-primary/60 group-hover:text-primary transition-colors" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )

                        case 'text':
                            return (
                                <div key={index} className={`relative rounded-[2.5rem] p-8 lg:p-12 overflow-hidden group transition-all duration-500 hover:shadow-lg border border-transparent hover:border-primary/10 ${section.bg_color || 'bg-white'}`}>
                                    {/* Decorative Background Elements */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-primary/10 transition-all duration-500"></div>

                                    <div className="relative z-10 space-y-8">
                                        {section.title && (
                                            <div className="space-y-4">
                                                <h3 className="text-3xl lg:text-4xl font-bold text-secondary tracking-tight">
                                                    {section.title}
                                                </h3>
                                                <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                                            </div>
                                        )}
                                        <div
                                            className="prose prose-lg prose-headings:font-bold prose-headings:text-secondary prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-secondary prose-strong:font-bold prose-ul:space-y-3 prose-li:flex prose-li:items-start prose-li:before:content-['•'] prose-li:before:text-primary prose-li:before:mr-2 prose-li:before:font-bold max-w-none"
                                            dangerouslySetInnerHTML={{
                                                __html: section.content.replace(/<ul>/g, '<ul class="list-none space-y-2">').replace(/<li>/g, '<li class="flex items-start gap-3"><span class="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0"></span><span>').replace(/<\/li>/g, '</span></li>')
                                            }}
                                        />
                                    </div>
                                </div>
                            )

                        case 'image_text':
                            return (
                                <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-8">
                                    <div className={`space-y-8 lg:col-span-6 ${section.layout === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="space-y-4">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
                                                <Target size={14} /> Detaylı Bakış
                                            </div>
                                            <h3 className="text-3xl lg:text-5xl font-bold text-secondary leading-tight">
                                                {section.title}
                                            </h3>
                                            <div className="h-1.5 w-24 bg-primary rounded-full"></div>
                                        </div>

                                        <div
                                            className="text-gray-600 text-lg leading-relaxed font-light space-y-6 prose prose-lg prose-p:text-gray-600 max-w-none"
                                            dangerouslySetInnerHTML={{ __html: section.content }}
                                        />

                                        <button className="group flex items-center gap-3 text-primary font-bold text-lg hover:gap-4 transition-all">
                                            Daha Fazla Bilgi <ArrowRight className="w-5 h-5 group-hover:text-primary transition-colors" />
                                        </button>
                                    </div>

                                    <div className={`relative lg:col-span-6 group ${section.layout === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500 ease-out"></div>
                                        <div className="absolute inset-0 bg-secondary/5 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 ease-out delay-75"></div>
                                        <div className="relative h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-[1.02]">
                                            <img
                                                src={section.image}
                                                alt={section.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 decoration-clone"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = getFallbackImage(category);
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                                <span className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{section.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        case 'cta_box':
                            return (
                                <div key={index} className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                                        <h3 className="text-3xl lg:text-4xl font-black italic font-serif leading-tight">{section.title}</h3>
                                        <p className="text-white/80 text-lg font-light leading-relaxed">{section.description}</p>
                                        <div className="flex flex-wrap justify-center gap-6">
                                            <button className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl flex items-center gap-3">
                                                {section.button_text} <ArrowRight size={20} />
                                            </button>
                                            {section.secondary_button && (
                                                <button className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold border border-white/10">{section.secondary_button}</button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )

                        default: return null
                    }
                })}
            </div>
        )
    }



    return (
        <>
            <ChatBubble />

            <ServicePageLayout
                breadcrumb={breadcrumb}
                title={pageData.title}
                titleHighlighted={pageData.title_highlighted}
                description={pageData.content_json.hero?.description}
                content={renderContent()}
                heroImage={pageData.hero_image}
                fullWidth={true}
                category={category}
            />
        </>
    )
}

export default DynamicServicePage
