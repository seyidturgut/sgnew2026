import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, ChevronDown, Menu as MenuIcon, X } from 'lucide-react'
import DropdownMenu from './DropdownMenu'
import MobileMenu from './MobileMenu'
import { productsMenu } from '../../data/productsMenu'

const Header = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
        setIsProductsOpen(false);
    };

    const toggleProducts = () => {
        setIsProductsOpen(!isProductsOpen);
        setIsServicesOpen(false);
    };

    return (
        <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between relative">
                <Link to="/" className="logo z-50">
                    <img src="/logo.png" alt="Sistem Global" className="h-12 w-auto" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    <Link to="/" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                        <Home className="w-5 h-5" />
                    </Link>
                    <a href="/hakkimizda" className="text-gray-600 hover:text-primary transition-colors font-medium">Hakkımızda</a>

                    {/* Services Dropdown */}
                    <div className="h-full">
                        <button
                            onClick={toggleServices}
                            className={`text-gray-600 hover:text-primary transition-colors flex items-center gap-1 h-full py-7 font-medium ${isServicesOpen ? 'text-primary' : ''}`}
                        >
                            Servisler
                            <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    {/* Products Dropdown */}
                    <div className="h-full">
                        <button
                            onClick={toggleProducts}
                            className={`text-gray-600 hover:text-primary transition-colors flex items-center gap-1 h-full py-7 font-medium ${isProductsOpen ? 'text-primary' : ''}`}
                        >
                            Dijital Ürünler
                            <ChevronDown size={16} className={`transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    <a href="/ekosistemimiz" className="text-gray-600 hover:text-primary transition-colors font-medium">Ekosistemimiz</a>
                    <a href="/medya" className="text-gray-600 hover:text-primary transition-colors font-medium">Medya & İçeriklerimiz</a>
                    <a href="/iletisim" className="text-gray-600 hover:text-primary transition-colors font-medium">İletişim</a>
                </nav>

                <div className="actions flex items-center gap-4">
                    {/* Language Switcher */}
                    <div className="hidden lg:flex items-center bg-gray-50/50 rounded-full p-1 border border-gray-100 mr-2">
                        <button className="px-3 py-1.5 rounded-full text-[11px] font-black transition-all bg-[#F37021] text-white shadow-sm">
                            TR
                        </button>
                        <button className="px-3 py-1.5 rounded-full text-[11px] font-black transition-all text-gray-400 hover:text-gray-600">
                            EN
                        </button>
                    </div>

                    <a
                        href="/iletisim"
                        className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 bg-[#F37021] text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
                    >
                        Teklif Alın
                    </a>

                    {/* Hamburger Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
                        aria-label="Menüyü Aç"
                    >
                        <MenuIcon size={28} />
                    </button>
                </div>
            </div>

            {/* Desktop Full Screen Menu Portals */}
            <DropdownMenu
                isOpen={isServicesOpen}
                onClose={() => setIsServicesOpen(false)}
                title="Servisler"
            />

            <DropdownMenu
                isOpen={isProductsOpen}
                onClose={() => setIsProductsOpen(false)}
                data={productsMenu}
                title="Dijital Ürünler"
            />

            {/* Mobile Full Screen Menu */}
            {isMobileMenuOpen && (
                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                />
            )}
        </header>
    )
}

export default Header
