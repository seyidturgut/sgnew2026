import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Home } from 'lucide-react';
import { serviceMenu } from '../data/serviceMenu';

const SubCategoryPage = ({ forcedCategory }) => {
    const params = useParams();
    const categorySlug = forcedCategory || params.category;
    const subcategorySlug = params.subcategory;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [categorySlug, subcategorySlug]);

    const category = serviceMenu.find(c => c.slug === categorySlug);

    // If subcategorySlug is present, find it. Otherwise, we might be in "All Category" mode.
    const subcategory = subcategorySlug
        ? category?.subcategories.find(s => s.slug === subcategorySlug)
        : null;

    // Determine what items to show
    let displayItems = [];
    let pageTitle = "";
    let pageDescription = "";

    if (category) {
        if (subcategory) {
            // Specific subcategory mode
            displayItems = subcategory.items.map(item => ({
                ...item,
                subParams: {
                    title: subcategory.title,
                    icon: subcategory.icon
                }
            }));
            pageTitle = subcategory.title;
            pageDescription = subcategory.description;
        } else {
            // Category root mode
            // If we have multiple subcategories, show them as cards (Navigation Mode)
            // If we have only 1 subcategory, show its items directly (Direct View)
            if (category.subcategories.length > 1) {
                displayItems = category.subcategories.map(s => ({
                    title: s.title,
                    href: `/servisler/${category.slug}/${s.slug}`,
                    description: s.description, // Optional, might use in card if I adjust layout
                    subParams: {
                        title: category.title, // Badge shows Main Category
                        icon: s.icon
                    }
                }));
                pageTitle = category.title;
                pageDescription = category.description;
            } else {
                // Aggregate all items (effectively just the one subcat's items)
                displayItems = category.subcategories.flatMap(s =>
                    s.items.map(item => ({
                        ...item,
                        subParams: {
                            title: s.title,
                            icon: s.icon
                        }
                    }))
                );
                pageTitle = category.title;
                pageDescription = category.description;
            }
        }
    }

    // Category to Image mapping pools for variety
    const categoryImagePools = {
        'vergi-finans': [
            '/images/servisler/tax-1.webp',
            '/images/servisler/tax-2.webp',
            '/images/servisler/tax-3.webp',
            '/images/servisler/tax-4.webp',
            '/images/servisler/tax-5.webp',
            '/images/servisler/tax-6.webp',
            '/images/servisler/tax-general.webp'
        ],
        'ar-ge-ve-fikri-mulkiyet': [
            '/images/servisler/tech-general.webp',
            '/images/servisler/fizibilite-hero.webp',
            '/images/servisler/services-hero-business.webp'
        ],
        'mevzuat-uyum': [
            '/images/servisler/legal-general.webp',
            '/images/servisler/due-diligence-hero.webp'
        ],
        'globallesme-ihracat': [
            '/images/servisler/global-general.webp',
            '/images/servisler/services-hero.webp'
        ],
        'finansmana-erisim-surdurulebilirlik': [
            '/images/servisler/finance-general.webp',
            '/images/servisler/fizibilite-financial.webp'
        ]
    };

    const getOptimalImage = (index, serviceHref) => {
        const pool = categoryImagePools[categorySlug] || ['/images/servisler/services-hero-business.webp'];

        // Try specific hero first
        const slug = serviceHref.split('/').pop();
        const specificHero = `/images/servisler/${slug}-hero.webp`;

        // Special case overrides
        const specialMappings = {
            'vergi-yonetim-danismanligi': '/images/servisler/yonetim-danismanligi-hero.webp',
            'birlesme-ve-satin-alma-ma': '/images/servisler/ma-hero.webp',
            'due-diligence': '/images/servisler/due-diligence-hero.webp'
        };

        if (specialMappings[slug]) return specialMappings[slug];

        // Return from pool based on index to ensure variety
        return pool[index % pool.length];
    };

    if (!category) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-3xl font-bold text-secondary mb-4">Sayfa Bulunamadı</h2>
                <p className="text-gray-600 mb-8">Aradığınız hizmet kategorisi mevcut değil.</p>
                <Link to="/servisler" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-all">
                    Tüm Servislere Dön
                </Link>
            </div>
        );
    }

    return (
        <main className="pt-20 bg-white">
            {/* Header / Breadcrumb Area - Ultra Compact */}
            <div className="bg-gray-50 border-b border-gray-100 py-4">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center gap-2 text-xs text-gray-400">
                        <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                            <Home size={12} /> Anasayfa
                        </Link>
                        <ChevronRight size={10} />
                        <Link to="/servisler" className="hover:text-primary transition-colors uppercase tracking-widest font-bold text-[10px]">Servisler</Link>
                        <ChevronRight size={10} />
                        {subcategory ? (
                            <>
                                <Link to={`/servisler/${category.slug}`} className="hover:text-primary transition-colors">{category.title}</Link>
                                <ChevronRight size={10} />
                                <span className="text-secondary font-bold">{subcategory.title}</span>
                            </>
                        ) : (
                            <span className="text-secondary font-bold">{category.title}</span>
                        )}
                    </nav>
                </div>
            </div>

            {/* Hero Section - Compact & Professional */}
            <section className="relative py-12 lg:py-16 overflow-hidden bg-[#fafafa]">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 text-center lg:text-left">
                        <div className="max-w-3xl">
                            <span className={`inline-block text-xs font-bold uppercase tracking-[0.3em] mb-4 ${category.textColor}`}>
                                {subcategory ? category.title : 'HİZMET KATEGORİSİ'}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-6 tracking-tighter leading-[1.1]">
                                {pageTitle}<span className="text-primary italic font-serif">.</span>
                            </h1>
                            <p className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                {pageDescription}
                            </p>
                        </div>

                        {/* Search Area on Right */}
                        <div className="w-full lg:w-1/3 max-w-[460px]">
                            <div className="ai-search-bar !w-full !bg-white !shadow-xl !shadow-orange-500/5 hover:!shadow-orange-500/10 !border-gray-100 transition-all cursor-pointer">
                                <div className="ai-icon bg-gradient-to-br from-[#F37021] to-[#ff8400]" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-white w-4 h-4 md:w-5 md:h-5">
                                        <path d="M12 2.5 9.9 8.1 4.3 10.2 9.9 12.3 12 17.9 14.1 12.3 19.7 10.2 14.1 8.1 12 2.5zM6.2 17.1 5.3 19.7 2.7 20.6 5.3 21.5 6.2 24.1 7.1 21.5 9.7 20.6 7.1 19.7 6.2 17.1zm11.6-2.5-.9 2.6-2.6.9 2.6.9.9 2.6.9-2.6 2.6-.9-2.6-.9-.9-2.6z" />
                                    </svg>
                                </div>
                                <div className="ai-placeholder text-gray-400 text-sm md:text-base font-medium">Uzmanımıza danışın...</div>
                                <div className="ai-badge bg-orange-50 text-primary text-[10px] font-black">AI</div>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest w-full mb-1">Popüler aramalar:</span>
                                {['Vergi Mevzuatı', 'Teşvikler', 'KDV İade'].map((tag) => (
                                    <span key={tag} className="text-[11px] bg-white border border-gray-100 text-gray-500 px-3 py-1 rounded-full hover:border-primary hover:text-primary transition-colors cursor-pointer">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid - Visual Card Design */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {displayItems.map((service, idx) => {
                            const serviceImage = getOptimalImage(idx, service.href);
                            // Fallback icon if not provided in enriched items
                            const IconComp = service.subParams?.icon || ArrowRight;
                            const subTitle = service.subParams?.title || category.title;

                            return (
                                <Link
                                    key={idx}
                                    to={service.href}
                                    className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-[0_30px_60px_-15px_rgba(243,112,33,0.12)] transition-all duration-500"
                                >
                                    {/* Visual Area */}
                                    <div className="relative h-48 overflow-hidden bg-gray-100">
                                        <img
                                            src={serviceImage}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                        {/* Subtitle/Category Badge on Image */}
                                        <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 text-white text-[9px] font-bold uppercase tracking-wider">
                                            {subTitle}
                                        </div>

                                        {/* Icon badge - floating */}
                                        <div className={`absolute -bottom-6 right-6 w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform z-10`}>
                                            <IconComp size={22} />
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="flex-1 p-8 pt-10">
                                        <h3 className="text-lg font-bold text-secondary leading-tight group-hover:text-primary transition-colors line-clamp-2 mb-4">
                                            {service.title}
                                        </h3>

                                        <div className="mt-auto flex items-center gap-2">
                                            <div className="h-0.5 w-6 bg-primary group-hover:w-12 transition-all duration-500"></div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#F37021]">İncele</span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA - Visual & Premium */}
            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="relative rounded-[3rem] overflow-hidden bg-secondary p-12 lg:p-20 group">
                        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                            <img
                                src="/images/servisler/services-hero-business.webp"
                                alt="cta background"
                                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent"></div>
                        </div>

                        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-serif italic leading-tight">
                                    Size nasıl yardımcı <br />
                                    <span className="text-primary not-italic font-sans">olabiliriz?</span>
                                </h2>
                                <p className="text-xl text-gray-400 font-light max-w-lg">
                                    İhtiyaç duyduğunuz tüm danışmanlık süreçlerinde uzman çözüm ortaklarımızla yanınızdayız.
                                </p>
                            </div>

                            <Link
                                to="/iletisim"
                                className="w-fit flex items-center gap-4 bg-white text-secondary px-10 py-5 rounded-3xl font-bold hover:bg-primary hover:text-white transition-all shadow-2xl"
                            >
                                Hemen İletişime Geçin <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SubCategoryPage;
