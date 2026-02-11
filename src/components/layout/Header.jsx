import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, ChevronDown, Menu as MenuIcon, X } from 'lucide-react'
import DropdownMenu from './DropdownMenu'
import MobileMenu from './MobileMenu'

const Header = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className={`text-gray-600 hover:text-primary transition-colors flex items-center gap-1 h-full py-7 font-medium ${isServicesOpen ? 'text-primary' : ''}`}
                        >
                            Servisler
                            <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    <a href="/ekosistemimiz" className="text-gray-600 hover:text-primary transition-colors font-medium">Ekosistemimiz</a>
                    <a href="/medya" className="text-gray-600 hover:text-primary transition-colors font-medium">Medya & İçerikler</a>
                    <a href="/iletisim" className="text-gray-600 hover:text-primary transition-colors font-medium">İletişim</a>
                </nav>

                <div className="actions flex items-center gap-4">
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

            {/* Desktop Full Screen Menu Portal */}
            <DropdownMenu
                isOpen={isServicesOpen}
                onClose={() => setIsServicesOpen(false)}
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
