import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { serviceMenu } from '../../data/serviceMenu';
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
            // Reset stack when opening? No, maybe keep state. 
            // Better to reset for clean start if closed.
            // But let's check if we want persistent state during session. 
            // User usually expects reset.
            setNavStack([{ id: 'root', title: 'Menü' }]);
            setIsAnimatingOut(false);
        } else {
            document.body.style.overflow = 'unset';
            // Wait for close animation
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
        if (isAnimatingOut) return; // Prevent interaction during animation
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
        }, 300); // Match transition duration
    };

    if (!mounted) return null;

    // View Components
    const MainView = () => (
        <div className="flex flex-col h-full bg-white">
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">

                {/* Hero / Services Entry */}
                <button
                    onClick={() => pushView({ id: 'services', title: 'Servisler' })}
                    className="w-full relative overflow-hidden group rounded-3xl p-6 text-left shadow-lg shadow-orange-500/10 transition-transform active:scale-[0.98]"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F37021] to-orange-600" />
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

                    <div className="relative flex items-center justify-between z-10">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/10">
                                <Globe size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white leading-none">Servisler</h3>
                                <p className="text-orange-100 text-sm mt-1.5 font-medium">Tüm hizmetlerimizi keşfedin</p>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
                            <ChevronRight size={20} />
                        </div>
                    </div>
                </button>

                {/* Primary Navigation Group */}
                <div className="bg-gray-50 rounded-3xl p-2">
                    <div className="space-y-1">
                        <Link to="/" onClick={onClose} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all group">
                            <div className="w-10 h-10 rounded-xl bg-orange-100/50 text-[#F37021] flex items-center justify-center group-hover:bg-[#F37021] group-hover:text-white transition-colors">
                                <Home size={20} />
                            </div>
                            <span className="font-bold text-gray-700 text-base flex-1">Anasayfa</span>
                        </Link>
                    </div>
                </div>

                {/* Navigation Links Group */}
                <div className="bg-gray-50 rounded-3xl p-2 space-y-1">
                    <Link to="/hakkimizda" onClick={onClose} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all group">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                <Users size={20} />
                            </div>
                            <span className="font-medium text-gray-700 text-base">Hakkımızda</span>
                        </div>
                        <ChevronRight size={16} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
                    </Link>

                    <div className="h-px bg-gray-200/50 mx-4" />

                    {/* Dijital Ürünler - New Item */}
                    <Link to="/dijital-urunler" onClick={onClose} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all group">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                <Monitor size={20} />
                            </div>
                            <span className="font-medium text-gray-700 text-base">Dijital Ürünler</span>
                        </div>
                        <ChevronRight size={16} className="text-gray-300 group-hover:text-indigo-500 transition-colors" />
                    </Link>

                    <div className="h-px bg-gray-200/50 mx-4" />

                    <Link to="/ekosistemimiz" onClick={onClose} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all group">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                                <TrendingUp size={20} />
                            </div>
                            <span className="font-medium text-gray-700 text-base">Ekosistemimiz</span>
                        </div>
                        <ChevronRight size={16} className="text-gray-300 group-hover:text-green-500 transition-colors" />
                    </Link>

                    <div className="h-px bg-gray-200/50 mx-4" />

                    {/* Medya & İçeriklerimiz - New Item */}
                    <Link to="/medya" onClick={onClose} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all group">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center">
                                <PlaySquare size={20} />
                            </div>
                            <span className="font-medium text-gray-700 text-base">Medya & İçeriklerimiz</span>
                        </div>
                        <ChevronRight size={16} className="text-gray-300 group-hover:text-pink-500 transition-colors" />
                    </Link>

                    <div className="h-px bg-gray-200/50 mx-4" />

                    <Link to="/iletisim" onClick={onClose} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all group">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                                <Phone size={20} />
                            </div>
                            <span className="font-medium text-gray-700 text-base">İletişim</span>
                        </div>
                        <ChevronRight size={16} className="text-gray-300 group-hover:text-purple-500 transition-colors" />
                    </Link>
                </div>
            </div>

            <div className="p-6 border-t border-gray-100 bg-white/80 backdrop-blur-md pb-10">
                <Link to="/iletisim" onClick={onClose} className="w-full flex items-center justify-center gap-2 py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg shadow-xl shadow-gray-200 active:scale-95 transition-transform">
                    Teklif Alın <ArrowRight size={20} />
                </Link>
            </div>
        </div>
    );

    const ServicesView = () => (
        <div className="flex flex-col h-full bg-gray-50">
            <div className="p-4 space-y-3 overflow-y-auto pb-20">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2 mb-2">Hizmet Kategorileri</div>
                {serviceMenu.map((cat) => (
                    <button
                        key={cat.slug}
                        onClick={() => pushView({ id: 'category', title: cat.title, data: cat })}
                        className="w-full bg-white p-5 rounded-2xl flex items-center justify-between shadow-sm border border-gray-100 active:scale-[0.98] transition-transform"
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-md`}>
                                <cat.icon size={22} />
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-gray-900 text-[15px]">{cat.title}</div>
                                <div className="text-[11px] text-gray-400 mt-0.5 font-medium line-clamp-1 max-w-[200px]">{cat.description}</div>
                            </div>
                        </div>
                        <ChevronRight size={18} className="text-gray-300" />
                    </button>
                ))}
            </div>
        </div>
    );

    const CategoryView = ({ category }) => {
        // Flatten if there is only 1 subcategory
        const shouldFlatten = category.subcategories && category.subcategories.length === 1;

        return (
            <div className="flex flex-col h-full bg-gray-50">
                <div className="p-4 space-y-3 overflow-y-auto pb-20">

                    {/* Header Card */}
                    <div className={`w-full p-6 rounded-3xl bg-gradient-to-br ${category.color} text-white shadow-lg mb-4`}>
                        <category.icon size={32} className="mb-3 opacity-90" />
                        <h2 className="text-2xl font-bold mb-1">{category.title}</h2>
                        <p className="text-sm opacity-80 leading-relaxed text-white/90">{category.description}</p>
                    </div>

                    {!shouldFlatten && (
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2 mb-1">
                            Alt Alanlar
                        </div>
                    )}

                    {shouldFlatten ? (
                        // Render items directly (skipping the single subcategory level)
                        <div className="space-y-2">
                            {category.subcategories[0].items.map((item, idx) => (
                                <Link
                                    key={idx}
                                    to={item.href}
                                    onClick={onClose}
                                    className="bg-white p-4 rounded-xl flex items-center justify-between border border-gray-100 active:bg-orange-50 transition-colors"
                                >
                                    <span className="font-medium text-gray-700 text-sm pr-4">{item.title}</span>
                                    <ArrowUpRight size={18} className="text-gray-300 flex-shrink-0" />
                                </Link>
                            ))}
                        </div>
                    ) : (
                        // Render subcategories as buttons
                        category.subcategories.map((sub, idx) => (
                            <button
                                key={idx}
                                onClick={() => pushView({ id: 'subcategory', title: sub.title, data: sub, parent: category })}
                                className="w-full bg-white p-5 rounded-2xl flex items-center justify-between shadow-sm border border-gray-100 active:scale-[0.98] transition-transform"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#F37021]">
                                        {sub.icon ? <sub.icon size={20} /> : <Settings size={20} />}
                                    </div>
                                    <span className="font-bold text-gray-800 text-sm text-left">{sub.title}</span>
                                </div>
                                <ChevronRight size={18} className="text-gray-300" />
                            </button>
                        ))
                    )}
                </div>
            </div>
        );
    };

    const SubCategoryView = ({ subcategory, parent }) => (
        <div className="flex flex-col h-full bg-gray-50">
            <div className="p-4 space-y-3 overflow-y-auto pb-20">
                {/* Simple Header */}
                <div className="px-2 mb-2">
                    <div className="text-xs font-medium text-gray-400">{parent.title}</div>
                    <div className="text-xl font-bold text-gray-900 leading-tight">{subcategory.title}</div>
                </div>

                <div className="space-y-2">
                    {subcategory.items.map((item, idx) => (
                        <Link
                            key={idx}
                            to={item.href}
                            onClick={onClose}
                            className="bg-white p-4 rounded-xl flex items-center justify-between border border-gray-100 active:bg-orange-50 transition-colors"
                        >
                            <span className="font-medium text-gray-700 text-sm pr-4">{item.title}</span>
                            <ArrowUpRight size={18} className="text-gray-300 flex-shrink-0" />
                        </Link>
                    ))}
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
                <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100 bg-white/80 backdrop-blur-md shrink-0 relative z-20">
                    <div className="flex items-center gap-4 overflow-hidden flex-1">
                        {navStack.length > 1 ? (
                            <button
                                onClick={popView}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-colors"
                            >
                                <ArrowLeft size={20} className="text-gray-900" />
                            </button>
                        ) : (
                            <Link to="/" onClick={onClose} className="py-2">
                                <img src="/logo.png" alt="Sistem Global" className="h-8 w-auto object-contain" />
                            </Link>
                        )}

                        {navStack.length > 1 && (
                            <h1 className="font-bold text-lg text-gray-900 line-clamp-1 animate-fade-in flex-1">
                                {isAnimatingOut
                                    ? (navStack[navStack.length - 2]?.title)
                                    : navStack[navStack.length - 1].title
                                }
                            </h1>
                        )}
                    </div>

                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors active:scale-90 transform duration-200"
                    >
                        <X size={22} />
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
                                {view.id === 'services' && <ServicesView />}
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
