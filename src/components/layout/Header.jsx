import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, ChevronDown, Menu as MenuIcon, X } from 'lucide-react'
import DropdownMenu from './DropdownMenu'

const Header = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between relative">
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="Sistem Global" className="h-12" />
                </Link>

                <nav className="hidden lg:flex items-center gap-8">
                    <Link to="/" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                        <Home className="w-5 h-5" />
                    </Link>
                    <a href="#" className="text-gray-600 hover:text-primary transition-colors font-medium">Hakkımızda</a>

                    {/* Services Dropdown */}
                    <div
                        className=""
                    >
                        <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="text-gray-600 hover:text-primary transition-colors flex items-center gap-1 py-4 font-medium h-full"
                        >
                            Servisler
                            <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    <a href="#" className="text-gray-600 hover:text-primary transition-colors font-medium">Dijital Ürünler</a>
                    <a href="#" className="text-gray-600 hover:text-primary transition-colors font-medium">Ekosistemimiz</a>
                    <a href="#" className="text-gray-600 hover:text-primary transition-colors font-medium">Medya & İçeriklerimiz</a>
                    <a href="#" className="text-gray-600 hover:text-primary transition-colors font-medium">İletişim</a>
                </nav>

                <div className="actions">
                    {/* Hamburger Menu Mobile */}
                </div>
            </div>

            {/* Full Screen Menu Portal */}
            <DropdownMenu
                isOpen={isServicesOpen}
                onClose={() => setIsServicesOpen(false)}
            />
        </header>
    )
}

export default Header
