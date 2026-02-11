import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { serviceMenu } from '../../data/serviceMenu';
import { productsMenu } from '../../data/productsMenu';
import { X, ChevronRight, ArrowLeft, Home, Phone, Globe, ArrowUpRight, TrendingUp, Users, Settings, ArrowRight, Monitor, PlaySquare } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
    const [mounted, setMounted] = useState(false);
    const [navStack, setNavStack] = useState([{ id: 'root', title: 'Menü' }]);

    // Animation states
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setNavStack([{ id: 'root', title: 'Menü' }]);
            setIsAnimatingOut(false);
        } else {
            document.body.style.overflow = 'unset';
            const t = setTimeout(() => {
                setNavStack([{ id: 'root', title: 'Menü' }]);
                setIsAnimatingOut(false);
            }, 300);
            return () => clearTimeout(t);
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const pushView = (view) => {
        if (isAnimatingOut) return;
        setNavStack(prev => [...prev, view]);
    };

    const popView = () => {
        if (navStack.length <= 1 || isAnimatingOut) return;

        setIsAnimatingOut(true);
        setTimeout(() => {
            setNavStack(prev => {
                if (prev.length <= 1) return prev;
                return prev.slice(0, -1);
            });
            setIsAnimatingOut(false);
        }, 300);
    };

    if (!mounted) return null;

    // View Components
    const MainView = () => (
        <div className="flex flex-col h-full bg-white">
            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6">

                {/* Slim Welcome Section */}
                <div className="flex items-center justify-between px-1">
                    <div>
                        <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                            Nasıl <span className="text-[#F37021]">Yardımcı</span> Olabiliriz?
                        </h2>
                    </div>
                </div>

                {/* Compact Grid for Main Categories */}
                <div className="grid grid-cols-2 gap-3">
                    {/* Services Entry Card - Slim */}
                    <button
                        onClick={() => pushView({ id: 'services', title: 'Servisler' })}
                        className="relative overflow-hidden group rounded-2xl p-4 text-left transition-all active:scale-[0.95] bg-gray-50 border border-gray-100 hover:border-orange-200"
                    >
                        <div className="absolute top-0 right-0 p-2 opacity-[0.03]">
                            <Globe size={60} strokeWidth={1} />
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-orange-100/50 flex items-center justify-center text-[#F37021] mb-3 group-hover:bg-[#F37021] group-hover:text-white transition-all duration-300">
                            <Globe size={22} />
                        </div>
                        <h3 className="text-[15px] font-bold text-gray-900">Servisler</h3>
                        <div className="text-[10px] text-gray-400 font-medium mt-1 uppercase tracking-tight">Keşfedin</div>
                    </button>

                    {/* Digital Products Entry Card - Slim */}
                    <button
                        onClick={() => pushView({ id: 'products', title: 'Dijital Ürünler' })}
                        className="relative overflow-hidden group rounded-2xl p-4 text-left transition-all active:scale-[0.95] bg-gray-50 border border-gray-100 hover:border-blue-200"
                    >
                        <div className="absolute top-0 right-0 p-2 opacity-[0.03]">
                            <Monitor size={60} strokeWidth={1} />
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-blue-100/50 flex items-center justify-center text-blue-600 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                            <Monitor size={22} />
                        </div>
                        <h3 className="text-[15px] font-bold text-gray-900">Ürünler</h3>
                        <div className="text-[10px] text-gray-400 font-medium mt-1 uppercase tracking-tight">İnceleyin</div>
                    </button>
                </div>

                {/* Compact Navigation Links */}
                <div className="space-y-1.5 px-0.5">
                    <div className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] px-1 mb-2">MENÜ</div>

                    {[
                        { to: "/", label: "Anasayfa", icon: Home, iconColor: "#F37021" },
                        { to: "/hakkimizda", label: "Hakkımızda", icon: Users, iconColor: "#3B82F6" },
                        { to: "/ekosistemimiz", label: "Ekosistemimiz", icon: TrendingUp, iconColor: "#10B981" },
                        { to: "/medya", label: "Medya & İçerik", icon: PlaySquare, iconColor: "#EC4899" },
                        { to: "/iletisim", label: "İletişim", icon: Phone, iconColor: "#8B5CF6" },
                    ].map((item, idx) => (
                        <Link
                            key={idx}
                            to={item.to}
                            onClick={onClose}
                            className="flex items-center justify-between px-4 py-3.5 rounded-xl hover:bg-gray-50 transition-all group"
                        >
                            <div className="flex items-center gap-3">
                                <item.icon size={18} style={{ color: item.iconColor }} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                                <span className="font-bold text-gray-700 text-[14px]">{item.label}</span>
                            </div>
                            <ChevronRight size={14} className="text-gray-300 group-hover:translate-x-1 group-hover:text-[#F37021] transition-all" />
                        </Link>
                    ))}
                </div>


            </div>

            <div className="p-5 border-t border-gray-100 bg-white shrink-0">
                <Link to="/iletisim" onClick={onClose} className="w-full relative overflow-hidden flex items-center justify-center gap-2 py-3.5 bg-gray-950 text-white rounded-xl font-bold text-base shadow-lg shadow-gray-200 active:scale-[0.98] transition-all group">
                    <span>Teklif Alın</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );

    const RecursiveMenuView = ({ data, titleSuffix = '' }) => (
        <div className="flex flex-col h-full bg-white">
            <div className="p-6 space-y-4 overflow-y-auto pb-24">
                <div className="flex items-center justify-between mb-4">
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] px-1">
                        {titleSuffix || 'Kategoriler'}
                    </div>
                    <div className="h-px flex-1 bg-gray-100 ml-4"></div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                    {data.map((cat) => (
                        <button
                            key={cat.slug}
                            onClick={() => pushView({ id: 'category', title: cat.title, data: cat })}
                            className="w-full group bg-white p-5 rounded-[1.5rem] flex items-center justify-between shadow-sm border border-gray-100/80 hover:border-[#F37021]/30 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 active:scale-[0.98]"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color || 'from-[#F37021] to-orange-600'} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                    <cat.icon size={26} />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-gray-900 text-[16px] leading-tight group-hover:text-[#F37021] transition-colors">{cat.title}</div>
                                    <div className="text-[12px] text-gray-500 mt-1 font-medium line-clamp-1 max-w-[220px] opacity-80">{cat.description}</div>
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#F37021]/10 transition-colors">
                                <ChevronRight size={18} className="text-gray-300 group-hover:text-[#F37021] transition-colors" />
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Quick Actions at bottom */}
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
                <div className="pointer-events-auto bg-gray-50/80 backdrop-blur-md rounded-2xl p-4 border border-gray-100 flex items-center justify-between shadow-lg">
                    <div className="text-xs font-bold text-gray-500">Yardıma mı ihtiyacınız var?</div>
                    <Link to="/iletisim" onClick={onClose} className="text-xs font-bold text-[#F37021] flex items-center gap-1">
                        Bizimle konuşun <ArrowUpRight size={14} />
                    </Link>
                </div>
            </div>
        </div>
    );

    const CategoryView = ({ category }) => {
        const shouldFlatten = category.subcategories && category.subcategories.length === 1;

        return (
            <div className="flex flex-col h-full bg-white">
                <div className="p-6 space-y-6 overflow-y-auto pb-24">

                    {/* Enhanced Header Card */}
                    <div className={`w-full p-8 rounded-[2.5rem] bg-gradient-to-br ${category.color} text-white shadow-2xl relative overflow-hidden group`}>
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-700">
                            <category.icon size={120} strokeWidth={1} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20">
                                <category.icon size={30} />
                            </div>
                            <h2 className="text-2xl font-black mb-2 leading-tight uppercase tracking-tight">{category.title}</h2>
                            <p className="text-sm opacity-90 leading-relaxed font-medium text-white/90 max-w-[90%]">{category.description}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between px-1">
                            <div className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                                {shouldFlatten ? 'UYGULAMALAR' : 'ALT ALANLAR'}
                            </div>
                            <div className="h-px flex-1 bg-gray-100 ml-4"></div>
                        </div>

                        {shouldFlatten ? (
                            <div className="grid grid-cols-1 gap-2.5">
                                {category.subcategories[0].items.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        to={item.href}
                                        onClick={onClose}
                                        className="group bg-white p-5 rounded-2xl flex items-center justify-between border border-gray-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all active:scale-[0.98]"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-orange-400 group-hover:scale-150 transition-transform" />
                                            <span className="font-bold text-gray-800 text-[15px]">{item.title}</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white transition-colors shadow-sm group-hover:shadow-md">
                                            <ArrowUpRight size={16} className="text-gray-400 group-hover:text-orange-500 transition-all" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-3">
                                {category.subcategories.map((sub, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => pushView({ id: 'subcategory', title: sub.title, data: sub, parent: category })}
                                        className="w-full group bg-white p-5 rounded-[1.5rem] flex items-center justify-between shadow-sm border border-gray-100 hover:border-orange-100 hover:shadow-lg transition-all active:scale-[0.98]"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-orange-50/80 flex items-center justify-center text-[#F37021] group-hover:bg-[#F37021] group-hover:text-white transition-all duration-300">
                                                {sub.icon ? <sub.icon size={22} /> : <Settings size={22} />}
                                            </div>
                                            <div className="text-left font-bold text-gray-800 text-[15px] group-hover:text-[#F37021] transition-colors">{sub.title}</div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#F37021]/10">
                                            <ChevronRight size={18} className="text-gray-300 group-hover:text-[#F37021]" />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    const SubCategoryView = ({ subcategory, parent }) => (
        <div className="flex flex-col h-full bg-white">
            <div className="p-6 space-y-6 overflow-y-auto pb-24">
                {/* Modern Header Section */}
                <div className="relative p-7 rounded-[2rem] bg-gray-900 text-white overflow-hidden group">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl" />
                    <div className="relative z-10">
                        <div className="text-[10px] font-bold text-orange-400 uppercase tracking-[0.3em] mb-3">{parent.title}</div>
                        <h2 className="text-2xl font-black text-white leading-tight uppercase">{subcategory.title}</h2>
                        <div className="h-1 w-12 bg-orange-500 mt-4 rounded-full" />
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] px-2 mb-4">HİZMET LİSTESİ</div>
                    <div className="grid grid-cols-1 gap-2.5">
                        {subcategory.items.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.href}
                                onClick={onClose}
                                className="group block bg-white border border-gray-100 p-5 rounded-2xl hover:border-orange-200 hover:bg-orange-50/30 transition-all shadow-sm active:scale-[0.98]"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-gray-800 text-[15px] leading-tight pr-6 group-hover:text-orange-600 transition-colors">{item.title}</span>
                                    <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#F37021] transition-all">
                                        <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white transition-all group-hover:rotate-45" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(
        <div className={`fixed inset-0 z-[9999] overflow-hidden ${isOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}>
            <style>{`
                @keyframes slideInRight {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0%); }
                }
                .mobile-menu-slide-enter {
                    animation: slideInRight 0.3s cubic-bezier(0.2, 0, 0, 1) forwards;
                }
            `}</style>

            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            />

            {/* Menu Container */}
            <div className={`absolute top-0 right-0 w-full h-full bg-white flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                {/* Header (Sticky) */}
                <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100/80 bg-white/95 backdrop-blur-xl shrink-0 relative z-20">
                    <div className="flex items-center gap-4 overflow-hidden flex-1">
                        {navStack.length > 1 ? (
                            <button
                                onClick={popView}
                                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50 hover:bg-orange-50 group transition-all active:scale-90"
                            >
                                <ArrowLeft size={22} className="text-gray-900 group-hover:text-[#F37021] transition-colors" />
                            </button>
                        ) : (
                            <Link to="/" onClick={onClose} className="py-2">
                                <img src="/logo.png" alt="Sistem Global" className="h-9 w-auto object-contain" />
                            </Link>
                        )}

                        {navStack.length > 1 && (
                            <h1 className="font-black text-lg text-gray-900 line-clamp-1 animate-fade-in flex-1 uppercase tracking-tight">
                                {isAnimatingOut
                                    ? (navStack[navStack.length - 2]?.title)
                                    : navStack[navStack.length - 1].title
                                }
                            </h1>
                        )}
                    </div>

                    <button
                        onClick={onClose}
                        className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-900 text-white hover:bg-[#F37021] transition-all active:rotate-90 duration-300"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Viewport for Stacks */}
                <div className="relative flex-1 overflow-hidden bg-white">
                    {navStack.map((view, index) => {
                        const isLast = index === navStack.length - 1;
                        const isSecondLast = index === navStack.length - 2;

                        let transform = 'translateX(100%)';
                        let filter = 'none';

                        if (isLast) {
                            if (isAnimatingOut) {
                                transform = 'translateX(100%)';
                            } else {
                                transform = 'translateX(0%)';
                            }
                        } else if (isSecondLast) {
                            if (isAnimatingOut) {
                                transform = 'translateX(0%)'; // Slides back to center
                                filter = 'none';
                            } else {
                                transform = 'translateX(-20%)'; // Slides to background
                                filter = 'brightness(0.95)';
                            }
                        } else {
                            transform = 'translateX(-20%)';
                            filter = 'brightness(0.90)';
                        }

                        return (
                            <div
                                key={index}
                                className={`absolute inset-0 w-full h-full bg-white transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-2xl`}
                                style={{
                                    zIndex: index + 10,
                                    transform,
                                    filter
                                }}
                            >
                                {view.id === 'root' && <MainView />}
                                {view.id === 'services' && <RecursiveMenuView data={serviceMenu} titleSuffix="Hizmet Kategorileri" />}
                                {view.id === 'products' && <RecursiveMenuView data={productsMenu} titleSuffix="Ürün Kategorileri" />}
                                {view.id === 'category' && <CategoryView category={view.data} />}
                                {view.id === 'subcategory' && <SubCategoryView subcategory={view.data} parent={view.parent} />}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default MobileMenu;
