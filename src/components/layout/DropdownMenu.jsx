import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

const menuData = [
    {
        title: "Vergi & Finans",
        // This description appears on the left when this item is hovered/active
        description: "Sistem Global olarak, müşterilerimizin tüm paydaşlar için uzun vadeli değer yaratmasına yardımcı oluyoruz. Veri ve teknolojiyle desteklenen hizmet ve çözümlerimiz.",
        submenu: [
            {
                title: "Vergi",
                submenu: [
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
                submenu: [
                    { title: "Şirket Değerleme", href: "/servisler/vergi-finans/kurumsal-finansman/sirket-degerleme" },
                    { title: "Marka Değerleme", href: "/servisler/vergi-finans/kurumsal-finansman/marka-degerleme" },
                    { title: "Yazılım ve Teknoloji Değerleme", href: "/servisler/vergi-finans/kurumsal-finansman/yazilim-ve-teknoloji-degerleme" },
                    { title: "Özel Hak ve Lisans Değerleme", href: "/servisler/vergi-finans/kurumsal-finansman/ozel-hak-ve-lisans-degerleme" },
                    { title: "İhale Bedeli Tespiti", href: "/servisler/vergi-finans/kurumsal-finansman/ihale-bedeli-tespiti" },
                    { title: "Halka Arz Danışmanlığı", href: "/servisler/vergi-finans/kurumsal-finansman/halka-arz-danismanligi" },
                    { title: "Sektör Analiz Raporları", href: "/servisler/vergi-finans/kurumsal-finansman/sektor-analiz-raporlari" },
                    { title: "Finansal Danışmanlıklar", href: "/servisler/vergi-finans/kurumsal-finansman/finansal-danismanliklar" },
                ]
            }
        ]
    },
    {
        title: "Ar-Ge ve Fikri Mülkiyet",
        submenu: []
    },
    {
        title: "Mevzuat & Uyum",
        // This description appears on the left when this item is hovered/active
        description: "Şirketinizin yasal süreçlere tam uyum sağlaması ve risklerin yönetilmesi için kapsamlı mevzuat danışmanlığı.",
        submenu: [
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
        title: "Globalleşme & İhracat",
        // This description appears on the left when this item is hovered/active
        description: "Global pazarlara açılmanız ve ihracat potansiyelinizi artırmanız için uçtan uca çözümler.",
        submenu: [
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
        title: "Finansmana Erişim & Sürdürülebilirlik",
        description: "Büyüme hedeflerinize ulaşmanız için finansal kaynaklara erişim ve sürdürülebilir gelecek stratejileri.",
        submenu: [
            {
                title: "Finansmana Erişim",
                submenu: [
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
                submenu: [
                    { title: "Sürdürülebilirlik Raporlaması", href: "#" },
                    { title: "TSRS Raporu (Türkiye Sürdürülebilirlik Raporlama Standartları)", href: "#" },
                    { title: "Entegre Raporlama", href: "#" },
                    { title: "Refinitiv (LSEG)", href: "#" },
                    { title: "SBTi (Science Based Targets initiative)", href: "#" },
                    { title: "ISO 14064-1 Kurumsal Karbon Ayak İzi Raporu", href: "#" },
                    { title: "ISO 14046 – Su Ayak İzi Raporu", href: "#" },
                    { title: "ISO 14067 – Ürün Karbon Ayak İzi", href: "#" },
                ]
            },
            {
                title: "Birleşme ve Satın Alma (M&A)",
                submenu: [
                    { title: "Birleşme ve Satın Alma (M&A)", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/birlesme-ve-satin-alma-ma" }
                ]
            },
            {
                title: "RPA ve Süreç Danışmanlığı",
                submenu: [
                    { title: "Süreç İyileştirme Uygulamaları", href: "#" },
                    { title: "İç Denetim ve Sistem Kurulum Danışmanlığı", href: "#" },
                    { title: "Kurumsallaşma Hızlı Check Up", href: "#" },
                    { title: "Dijitalleşme Danışmanlığı", href: "#" },
                    { title: "Yıllık Lisans Kiralama ve Uyarlama Danışmanlığı", href: "#" },
                    { title: "RPA Teknik İzleme", href: "#" },
                    { title: "RPA Süreç Keşif Workshop", href: "#" },
                ]
            }
        ]
    }
];

const flattenMenuPages = (items, parents = []) => {
    const pages = [];

    items.forEach((item) => {
        const nextParents = [...parents, item.title];
        if (item.submenu && item.submenu.length > 0) {
            pages.push(...flattenMenuPages(item.submenu, nextParents));
            return;
        }
        if (item.href && item.href !== "#") {
            pages.push({
                title: item.title,
                href: item.href,
                category: parents[0] || "Servisler"
            });
        }
    });

    return pages;
};

const allMenuPages = flattenMenuPages(menuData);

const pickRandomItems = (list, count) => {
    const arr = [...list];
    for (let i = arr.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, Math.min(count, arr.length));
};

const DropdownMenu = ({ isOpen, onClose }) => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSubcategory, setActiveSubcategory] = useState(null);
    const [spotlightItems, setSpotlightItems] = useState([]);
    const [spotlightIndex, setSpotlightIndex] = useState(0);

    // Set default active category or reset when menu opens/closes
    useEffect(() => {
        if (isOpen) {
            // Desktop default: open "Vergi & Finans" when menu first opens
            if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                const defaultCategory = menuData.find((item) => item.title === "Vergi & Finans");
                setActiveCategory(defaultCategory || null);
            }
        } else {
            const timer = setTimeout(() => {
                setActiveCategory(null);
                setActiveSubcategory(null);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    useEffect(() => {
        setActiveSubcategory(null);
    }, [activeCategory]);

    useEffect(() => {
        if (!isOpen) return undefined;
        const picked = pickRandomItems(allMenuPages, 7);
        setSpotlightItems(picked);
        setSpotlightIndex(0);

        if (picked.length <= 1) return undefined;
        const timer = setInterval(() => {
            setSpotlightIndex((prev) => (prev + 1) % picked.length);
        }, 3500);
        return () => clearInterval(timer);
    }, [isOpen]);

    const activeSpotlight = spotlightItems[spotlightIndex];

    return (
        <div
            className={`fixed inset-x-0 top-[80px] bg-white text-gray-800 z-40 shadow-2xl transition-all duration-300 ease-in-out border-b border-gray-100 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
        >
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-12 gap-0 min-h-[460px]">

                    {/* COL 1: Info / Agenda (Leftmost) */}
                    <div className="col-span-12 lg:col-span-3 pr-8 border-r border-gray-100 flex flex-col">
                        <span className="text-xs font-bold text-[#F37021] tracking-widest uppercase mb-4 block">GÜNDEM</span>
                        <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Servisler</h2>
                        {activeSpotlight ? (
                            <div className="space-y-5">
                                <div className="h-[185px] rounded-xl border border-orange-100 bg-orange-50/50 p-4 overflow-hidden">
                                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#F37021] mb-2">{activeSpotlight.category}</div>
                                    <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2 min-h-[52px]">{activeSpotlight.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {activeSpotlight.category} kategorisinde öne çıkan bu hizmeti detaylı inceleyebilirsiniz.
                                    </p>
                                </div>

                                <a
                                    href={activeSpotlight.href}
                                    className="inline-flex items-center px-5 py-2.5 bg-[#F37021] text-white text-sm font-medium rounded hover:bg-[#d65f1a] transition-colors w-fit group shadow-md shadow-orange-100"
                                >
                                    Hizmeti Gör
                                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>

                                <div className="flex items-center gap-1.5">
                                    {spotlightItems.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSpotlightIndex(idx)}
                                            className={`h-1.5 rounded-full transition-all ${idx === spotlightIndex ? 'w-6 bg-[#F37021]' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                                            aria-label={`Öne çıkan hizmet ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Menüdeki hizmetlerden öne çıkan içerikler burada gösterilir.
                            </p>
                        )}
                    </div>

                    {/* COL 2: Level 1 Categories (Middle) */}
                    <div className="col-span-12 lg:col-span-4 px-8 border-r border-gray-100">
                        <div className="flex flex-col pr-1">
                            {menuData.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveCategory(activeCategory === item ? null : item)}
                                    className={`w-full text-left py-4 px-4 flex items-center justify-between transition-all duration-200 rounded-lg group ${activeCategory === item ? 'bg-orange-50 text-[#F37021]' : 'text-gray-700 hover:bg-gray-50'}`}
                                >
                                    <span className={`text-lg font-medium ${activeCategory === item ? 'font-bold' : ''}`}>{item.title}</span>
                                    {item.submenu && item.submenu.length > 0 && (
                                        <ChevronRight size={18} className={`transition-transform duration-300 ${activeCategory === item ? 'text-[#F37021] translate-x-1' : 'text-gray-400 opacity-50'}`} />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* COL 3: Level 2 Submenu (Right) - Dynamic Content */}
                    <div className="col-span-12 lg:col-span-5 pl-8">
                        {activeCategory ? (
                            <div className="animate-fade-in">
                                <div className="flex items-center mb-4 pb-3 border-b border-gray-100">
                                    <button onClick={() => setActiveCategory(null)} className="lg:hidden mr-4 text-gray-400">
                                        <ChevronLeft size={20} />
                                    </button>
                                    <h3 className="text-xl font-bold text-gray-900">{activeSubcategory?.title || activeCategory.title}</h3>
                                </div>

                                {activeCategory.submenu && activeCategory.submenu.length > 0 ? (
                                    activeSubcategory ? (
                                        <div className="space-y-3 animate-fade-in">
                                            <button
                                                onClick={() => setActiveSubcategory(null)}
                                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#F37021] transition-colors"
                                            >
                                                <ChevronLeft size={14} />
                                                Geri
                                            </button>

                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                                {(activeSubcategory.submenu || []).map((l3, l3idx) => (
                                                    <a
                                                        key={l3idx}
                                                        href={l3.href}
                                                        className="group rounded-md border border-gray-200 bg-white px-3 py-2.5 text-gray-700 hover:text-[#F37021] hover:border-orange-200 hover:bg-orange-50 transition-all"
                                                    >
                                                        <span className="inline-flex items-center justify-between w-full text-xs lg:text-sm font-medium leading-snug">
                                                            {l3.title}
                                                            <ChevronRight size={14} className="text-gray-300 group-hover:text-[#F37021] transition-colors shrink-0" />
                                                        </span>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 animate-fade-in">
                                            {activeCategory.submenu.map((subitem, idx) => (
                                                subitem.submenu && subitem.submenu.length > 0 ? (
                                                    <button
                                                        key={idx}
                                                        onClick={() => setActiveSubcategory(subitem)}
                                                        className="group text-left rounded-md border border-gray-200 bg-white px-3 py-2.5 hover:border-orange-200 hover:bg-orange-50 transition-all"
                                                    >
                                                        <span className="inline-flex items-center justify-between w-full text-sm font-semibold text-gray-800 group-hover:text-[#F37021]">
                                                            {subitem.title}
                                                            <ChevronRight size={14} className="text-gray-300 group-hover:text-[#F37021] transition-colors shrink-0" />
                                                        </span>
                                                    </button>
                                                ) : (
                                                    <a
                                                        key={idx}
                                                        href={subitem.href || "#"}
                                                        className="group rounded-md border border-gray-200 bg-white px-3 py-2.5 text-gray-700 hover:text-[#F37021] hover:border-orange-200 hover:bg-orange-50 transition-all"
                                                    >
                                                        <span className="inline-flex items-center justify-between w-full text-sm font-medium">
                                                            {subitem.title}
                                                            <ChevronRight size={14} className="text-gray-300 group-hover:text-[#F37021] transition-colors shrink-0" />
                                                        </span>
                                                    </a>
                                                )
                                            ))}
                                        </div>
                                    )
                                ) : (
                                    <p className="text-gray-500 italic">Bu kategori için alt menü bulunmamaktadır.</p>
                                )}

                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-50">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                    <ArrowRight size={24} className="text-gray-400" />
                                </div>
                                <p className="text-gray-500 text-lg">Detayları görüntülemek için sol taraftan bir kategori seçiniz.</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* Close Button or Click Overlay could go here */}
        </div>
    );
};

export default DropdownMenu;
