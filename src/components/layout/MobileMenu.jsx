import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { serviceMenu } from '../../data/serviceMenu';
import { X, ChevronRight, ArrowLeft, Home, Phone, Globe, ArrowUpRight, TrendingUp, Users, Settings, ArrowRight } from 'lucide-react';

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
            <div className="p-4 space-y-2 flex-1 overflow-y-auto">
                {/* Primary Nav Items */}
                <Link to="/" onClick={onClose} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400 group-hover:text-[#F37021] transition-colors">
                        <Home size={20} />
                    </div>
                    <span className="font-bold text-gray-800 text-lg">Anasayfa</span>
                </Link>

                <button
                    onClick={() => pushView({ id: 'services', title: 'Servisler' })}
                    className="w-full flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-100 shadow-sm active:scale-[0.98] transition-all"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#F37021]">
                            <Globe size={20} />
                        </div>
                        <span className="font-bold text-gray-800 text-lg">Servisler</span>
                    </div>
                    <ChevronRight size={20} className="text-gray-400" />
                </button>

                <Link to="/hakkimizda" onClick={onClose} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-100 hover:bg-gray-50 transition-colors group">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                            <Users size={20} />
                        </div>
                        <span className="font-medium text-gray-700 text-lg">Hakkımızda</span>
                    </div>
                </Link>

                <Link to="/ekosistemimiz" onClick={onClose} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-100 hover:bg-gray-50 transition-colors group">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                            <TrendingUp size={20} />
                        </div>
                        <span className="font-medium text-gray-700 text-lg">Ekosistemimiz</span>
                    </div>
                </Link>

                <Link to="/iletisim" onClick={onClose} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-100 hover:bg-gray-50 transition-colors group">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
                            <Phone size={20} />
                        </div>
                        <span className="font-medium text-gray-700 text-lg">İletişim</span>
                    </div>
                </Link>
            </div>

            <div className="p-5 border-t border-gray-100 bg-white pb-10">
                <Link to="/iletisim" onClick={onClose} className="w-full flex items-center justify-center gap-2 py-4 bg-[#F37021] text-white rounded-xl font-bold shadow-lg shadow-orange-500/20 active:scale-95 transition-transform">
                    Hemen Başvurun <ArrowRight size={20} />
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

                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2 mb-1">
                        {shouldFlatten ? 'Hizmetler' : 'Alt Alanlar'}
                    </div>

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
                <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100 bg-white shrink-0 relative z-20">
                    <div className="flex items-center gap-2 overflow-hidden">
                        {navStack.length > 1 ? (
                            <button
                                onClick={popView}
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 active:bg-gray-100 transition-colors -ml-2"
                            >
                                <ArrowLeft size={22} className="text-gray-700" />
                            </button>
                        ) : (
                            <div className="w-2" /> // Spacer
                        )}
                        <h1 className="font-bold text-lg text-gray-900 line-clamp-1 animate-fade-in">
                            {/* Show previous title if animating out, otherwise current */}
                            {isAnimatingOut
                                ? (navStack[navStack.length - 2]?.title || 'Menü')
                                : navStack[navStack.length - 1].title
                            }
                        </h1>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 transition-colors"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Viewport for Stacks */}
                <div className="relative flex-1 overflow-hidden bg-white">
                    {navStack.map((view, index) => {
                        const isLast = index === navStack.length - 1;
                        const isSecondLast = index === navStack.length - 2;

                        // Default states derived from stack position
                        let transform = 'translateX(100%)'; // Future views (shouldn't exist essentially)
                        let filter = 'none';
                        let animationClass = '';

                        if (isLast) {
                            // Current Top View
                            if (isAnimatingOut) {
                                // Sliding OUT to right
                                transform = 'translateX(100%)';
                            } else {
                                // Default Active State
                                transform = 'translateX(0%)';
                                // Only animate entry if it's not the root and not animating out
                                if (index > 0) animationClass = 'mobile-menu-slide-enter';
                            }
                        } else if (isSecondLast) {
                            // Previous View (Behind)
                            if (isAnimatingOut) {
                                // Sliding IN from left (becoming active)
                                transform = 'translateX(0%)';
                                filter = 'none';
                            } else {
                                // Default Background State
                                transform = 'translateX(-25%)';
                                filter = 'brightness(0.95)';
                            }
                        } else {
                            // Deeper history
                            transform = 'translateX(-25%)'; // Keep them stacked behind
                            filter = 'brightness(0.90)';
                        }

                        return (
                            <div
                                key={index}
                                className={`absolute inset-0 w-full h-full bg-white transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)] shadow-xl ${animationClass}`}
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
