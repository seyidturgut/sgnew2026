import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { serviceMenu } from '../../data/serviceMenu';
import { X, ChevronDown, ChevronRight, ArrowRight, Home, Phone, Globe } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [expandedSubcategory, setExpandedSubcategory] = useState(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const toggleCategory = (slug) => {
        if (expandedCategory === slug) {
            setExpandedCategory(null);
        } else {
            setExpandedCategory(slug);
            setExpandedSubcategory(null);
        }
    };

    const toggleSubcategory = (slug) => {
        if (expandedSubcategory === slug) {
            setExpandedSubcategory(null);
        } else {
            setExpandedSubcategory(slug);
        }
    };

    // If not mounted (client-side), don't render anything
    if (!mounted) return null;

    const content = (
        <div
            className={`fixed inset-0 z-[9999] bg-white transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}
            style={{ backgroundColor: '#ffffff' }}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-10">
                <Link to="/" onClick={onClose} className="flex items-center">
                    <img src="/logo.png" alt="Sistem Global" className="h-10 w-auto" />
                </Link>
                <button
                    onClick={onClose}
                    className="p-2 -mr-2 text-gray-500 hover:text-gray-900 focus:outline-none"
                    aria-label="Menüyü Kapat"
                >
                    <X size={28} strokeWidth={1.5} />
                </button>
            </div>

            {/* Content - Scrollable */}
            <div className="h-[calc(100vh-80px)] overflow-y-auto pb-20 overscroll-contain">
                <nav className="p-5 space-y-2">
                    {/* Primary Links */}
                    <Link
                        to="/"
                        onClick={onClose}
                        className="flex items-center gap-3 p-4 text-lg font-bold text-gray-800 rounded-xl bg-gray-50 active:bg-gray-100"
                    >
                        <Home size={20} className="text-[#F37021]" />
                        Anasayfa
                    </Link>

                    {/* Services Accordion */}
                    <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                        <button
                            onClick={() => toggleCategory('services-root')}
                            className="w-full flex items-center justify-between p-4 bg-white text-left"
                        >
                            <span className="flex items-center gap-3 text-lg font-bold text-gray-800">
                                <Globe size={20} className="text-[#F37021]" />
                                Servisler
                            </span>
                            <ChevronDown
                                size={20}
                                className={`text-gray-400 transition-transform duration-300 ${expandedCategory === 'services-root' ? 'rotate-180' : ''}`}
                            />
                        </button>

                        <div className={`bg-gray-50/50 transition-all duration-300 overflow-hidden ${expandedCategory === 'services-root' ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            {serviceMenu.map((category) => (
                                <div key={category.slug} className="border-t border-gray-100 last:border-b-0">
                                    <button
                                        onClick={() => toggleSubcategory(category.slug)}
                                        className="w-full flex items-center justify-between p-4 pl-6 text-left hover:bg-white transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <category.icon size={18} className="text-[#F37021]" />
                                            <span className="font-semibold text-gray-700">{category.title}</span>
                                        </div>
                                        <ChevronRight
                                            size={16}
                                            className={`text-gray-400 transition-transform duration-200 ${expandedSubcategory === category.slug ? 'rotate-90' : ''}`}
                                        />
                                    </button>

                                    {/* Subcategories & Items */}
                                    <div className={`overflow-hidden transition-all duration-300 bg-white pl-4 ${expandedSubcategory === category.slug ? 'max-h-[2000px] py-2' : 'max-h-0'}`}>
                                        {category.subcategories.map((sub) => (
                                            <div key={sub.slug} className="mb-4 last:mb-0">
                                                <div className="px-4 py-2 font-bold text-gray-900 border-l-2 border-[#F37021] ml-4 bg-orange-50/30 text-sm">
                                                    {sub.title}
                                                </div>
                                                <div className="mt-1 ml-4 border-l border-gray-100 pl-4 space-y-1">
                                                    {sub.items.map((item, idx) => (
                                                        <Link
                                                            key={idx}
                                                            to={item.href}
                                                            onClick={onClose}
                                                            className="block py-2 text-sm text-gray-600 hover:text-[#F37021] hover:underline"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Link
                        to="/hakkimizda"
                        onClick={onClose}
                        className="flex items-center gap-3 p-4 text-lg font-medium text-gray-600 rounded-xl hover:bg-gray-50"
                    >
                        Hakkımızda
                    </Link>

                    <Link
                        to="/ekosistemimiz"
                        onClick={onClose}
                        className="flex items-center gap-3 p-4 text-lg font-medium text-gray-600 rounded-xl hover:bg-gray-50"
                    >
                        Ekosistemimiz
                    </Link>

                    <Link
                        to="/iletisim"
                        onClick={onClose}
                        className="flex items-center gap-3 p-4 text-lg font-medium text-gray-600 rounded-xl hover:bg-gray-50"
                    >
                        <Phone size={20} className="text-gray-400" />
                        İletişim
                    </Link>
                </nav>

                {/* Bottom CTA */}
                <div className="p-5 mt-4">
                    <Link
                        to="/iletisim"
                        onClick={onClose}
                        className="flex items-center justify-center w-full py-4 bg-[#F37021] text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-transform"
                    >
                        Hemen Başvurun <ArrowRight size={20} className="ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    );

    return createPortal(content, document.body);
};

export default MobileMenu;
