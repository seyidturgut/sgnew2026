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
                    { title: "Teknoloji Odaklı Sanayi Hamlesi", href: "/servisler/finansmana-erisim-ve-surdurulebilirlik/finansmana-erisim/teknoloji-odakli-sanayi-hamlesi" },
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
            }
        ]
    }
];

const DropdownMenu = ({ isOpen, onClose }) => {
    const [activeCategory, setActiveCategory] = useState(null);

    // Set default active category or reset when menu opens/closes
    useEffect(() => {
        if (isOpen) {
            // Optionally set the first category with submenu as active initially
            // const firstWithSub = menuData.find(item => item.submenu && item.submenu.length > 0);
            // setActiveCategory(firstWithSub || null);
        } else {
            const timer = setTimeout(() => setActiveCategory(null), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-x-0 top-[80px] bg-white text-gray-800 z-40 shadow-2xl transition-all duration-300 ease-in-out border-b border-gray-100 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
        >
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-12 gap-0">

                    {/* COL 1: Info / Agenda (Leftmost) */}
                    <div className="col-span-12 lg:col-span-3 pr-8 border-r border-gray-100">
                        <span className="text-xs font-bold text-[#F37021] tracking-widest uppercase mb-4 block">GÜNDEM</span>
                        <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Hizmetlerimiz</h2>
                        <p className="text-gray-600 text-sm leading-relaxed mb-8">
                            Sistem Global olarak, müşterilerimizin tüm paydaşlar için uzun vadeli değer yaratmasına yardımcı oluyoruz.
                        </p>
                        <a href="#" className="inline-flex items-center px-5 py-3 bg-[#F37021] text-white text-sm font-medium rounded hover:bg-[#d65f1a] transition-colors w-fit group shadow-md shadow-orange-100">
                            İletişime Geç
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* COL 2: Level 1 Categories (Middle) */}
                    <div className="col-span-12 lg:col-span-4 px-8 border-r border-gray-100">
                        <div className="flex flex-col">
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
                    <div className="col-span-12 lg:col-span-5 pl-8 min-h-[400px]">
                        {activeCategory ? (
                            <div className="animate-fade-in">
                                <div className="flex items-center mb-8 pb-4 border-b border-gray-100">
                                    <button onClick={() => setActiveCategory(null)} className="lg:hidden mr-4 text-gray-400">
                                        <ChevronLeft size={20} />
                                    </button>
                                    <h3 className="text-xl font-bold text-gray-900">{activeCategory.title}</h3>
                                </div>

                                {activeCategory.submenu && activeCategory.submenu.length > 0 ? (
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                        {activeCategory.submenu.map((subitem, idx) => (
                                            <div key={idx} className="group">
                                                {/* If subitem has its own submenu, treat as Header + List */}
                                                {subitem.submenu && subitem.submenu.length > 0 ? (
                                                    // Header Style
                                                    <div className="mb-4">
                                                        <h4 className="text-lg font-bold text-gray-900 mb-3">{subitem.title}</h4>
                                                        <div className="space-y-2">
                                                            {subitem.submenu.map((l3, l3idx) => (
                                                                <a key={l3idx} href={l3.href} className="block text-gray-600 hover:text-[#F37021] py-1 transition-colors text-sm">
                                                                    {l3.title}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    // Standard Link Style (fallback for items without children)
                                                    <a
                                                        href={subitem.href || "#"}
                                                        className="block py-2 text-gray-600 hover:text-[#F37021] hover:pl-2 transition-all duration-300 border-l-2 border-transparent hover:border-[#F37021]"
                                                    >
                                                        <span className="font-medium text-sm lg:text-base">{subitem.title}</span>
                                                    </a>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-500 italic">Bu kategori için alt menü bulunmamaktadır.</p>
                                )}

                                {activeCategory.description && (
                                    <div className="mt-12 p-6 bg-orange-50 rounded-xl border border-orange-100">
                                        <p className="text-[#F37021] font-medium leading-relaxed">
                                            {activeCategory.description}
                                        </p>
                                    </div>
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
