import React from 'react'
import { Phone } from 'lucide-react'

const StickyCTA = () => {
    return (
        <a
            href="tel:+902121234567"
            className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2 bg-gradient-to-br from-primary to-orange-400 text-white px-4 py-6 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
        >
            <Phone size={24} className="group-hover:rotate-12 transition-transform" />
            <span className="text-xs font-bold writing-mode-vertical transform rotate-180 whitespace-nowrap">
                HEMEN ARA
            </span>
        </a>
    )
}

export default StickyCTA
