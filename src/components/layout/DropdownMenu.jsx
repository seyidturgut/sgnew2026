import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

import { serviceMenu } from '../../data/serviceMenu';

const processMenuData = (rawMenuData) => {
    return rawMenuData.map(category => ({
        title: category.title,
        description: category.description,
        slug: category.slug,
        submenu: (category.subcategories || []).map(sub => ({
            title: sub.title,
            slug: sub.slug,
            href: sub.items ? undefined : sub.href,
            submenu: (sub.items || []).map(item => ({
                title: item.title,
                href: item.href
            }))
        }))
    }));
};

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
                category: parents[0] || "Menü"
            });
        }
    });

    return pages;
};

const pickRandomItems = (list, count) => {
    const arr = [...list];
    for (let i = arr.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, Math.min(count, arr.length));
};

const DropdownMenu = ({ isOpen, onClose, data = serviceMenu, title = "Servisler" }) => {
    const menuData = processMenuData(data);
    const allMenuPages = flattenMenuPages(menuData);

    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSubcategory, setActiveSubcategory] = useState(null);
    const [spotlightItems, setSpotlightItems] = useState([]);
    const [spotlightIndex, setSpotlightIndex] = useState(0);
    const menuRef = useRef(null);

    // Handle click outside to close
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if clicking outside menu AND it's not the toggle button in Header
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                // If it's a click on the dropdown button for this menu, the Header handles the toggle
                const isToggleButton = event.target.closest('button')?.textContent.trim().includes(title);
                if (!isToggleButton && onClose) {
                    onClose();
                }
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose, title]);

    // Set default active category or reset when menu opens/closes
    useEffect(() => {
        if (isOpen) {
            // Desktop default: open first category when menu first opens
            if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                // Try to find a sensible default or just take the first one
                const defaultCategory = menuData.find((item) => item.title === "Vergi & Finans") || menuData[0];
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
        if (activeCategory && activeCategory.submenu && activeCategory.submenu.length === 1) {
            setActiveSubcategory(activeCategory.submenu[0]);
        } else {
            setActiveSubcategory(null);
        }
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
            ref={menuRef}
            className={`fixed inset-x-0 top-[80px] bg-white text-gray-800 z-40 shadow-2xl transition-all duration-300 ease-in-out border-b border-gray-100 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
        >
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-12 gap-0 min-h-[460px]">

                    {/* COL 1: Info / Agenda (Leftmost) */}
                    <div className="col-span-12 lg:col-span-3 pr-8 border-r border-gray-100 flex flex-col">
                        <span className="text-xs font-bold text-[#F37021] tracking-widest uppercase mb-4 block">GÜNDEM</span>
                        <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">{title}</h2>
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
                    <div className="col-span-12 lg:col-span-5 pl-8 text-left">
                        {activeCategory ? (
                            <div className="animate-fade-in text-left">
                                <div className="flex items-center mb-4 pb-3 border-b border-gray-100 justify-start">
                                    <button onClick={() => setActiveCategory(null)} className="lg:hidden mr-4 text-gray-400">
                                        <ChevronLeft size={20} />
                                    </button>
                                    {/* Hide title if flattened (single subcategory) to avoid redundancy */}
                                    {!(activeCategory.submenu && activeCategory.submenu.length === 1) && (
                                        <h3 className="text-xl font-bold text-gray-900 text-left">{activeSubcategory?.title || activeCategory.title}</h3>
                                    )}
                                    {(activeCategory.submenu && activeCategory.submenu.length === 1) && (
                                        <h3 className="text-xl font-bold text-gray-900 text-left">{activeCategory.title}</h3>
                                    )}
                                </div>

                                {activeCategory.submenu && activeCategory.submenu.length > 0 ? (
                                    activeSubcategory ? (
                                        <div className="space-y-3 animate-fade-in text-left">
                                            {/* Hide Back button if flattened */}
                                            {!(activeCategory.submenu && activeCategory.submenu.length === 1) && (
                                                <button
                                                    onClick={() => setActiveSubcategory(null)}
                                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#F37021] transition-colors"
                                                >
                                                    <ChevronLeft size={14} />
                                                    Geri
                                                </button>
                                            )}

                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                                {(activeSubcategory.submenu || []).map((l3, l3idx) => (
                                                    <a
                                                        key={l3idx}
                                                        href={l3.href}
                                                        className="group flex items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2 text-gray-700 hover:text-[#F37021] hover:border-orange-200 hover:bg-orange-50 transition-all text-left"
                                                    >
                                                        <span className="text-[13px] font-medium leading-tight flex-1">
                                                            {l3.title}
                                                        </span>
                                                        <ChevronRight size={14} className="text-gray-300 group-hover:text-[#F37021] transition-colors shrink-0 ml-1.5" />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 animate-fade-in text-left">
                                            {activeCategory.submenu.map((subitem, idx) => (
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
                                            ))}
                                        </div>
                                    )
                                ) : (
                                    <p className="text-gray-500 italic text-left">Bu kategori için alt menü bulunmamaktadır.</p>
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
