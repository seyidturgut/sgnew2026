import React, { useState, useEffect } from 'react'
import { Send } from 'lucide-react'

const StickyContactBar = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // 200px scroll sonra göster
            if (window.scrollY > 200) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        // Form submission logic buraya
        console.log('Form submitted')
    }

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="bg-gradient-to-r from-primary via-orange-500 to-orange-400 shadow-2xl">
                <div className="container mx-auto px-4 lg:px-6">
                    <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-4 py-4 lg:py-5">
                        {/* Title - Modern & Bold */}
                        <div className="shrink-0">
                            <h3 className="text-xl lg:text-2xl font-black text-white tracking-tight">
                                Hızlı İletişim
                            </h3>
                        </div>

                        {/* Divider - Desktop Only */}
                        <div className="hidden lg:block w-px h-10 bg-white/30"></div>

                        {/* Form Fields - Responsive */}
                        <div className="flex-1 flex flex-col sm:flex-row items-stretch gap-2 lg:gap-3">
                            <input
                                type="text"
                                placeholder="Ad Soyad"
                                className="flex-1 px-4 py-3 text-sm lg:text-base bg-white/95 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-500 font-medium"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 px-4 py-3 text-sm lg:text-base bg-white/95 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-500 font-medium"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Telefon"
                                className="flex-1 px-4 py-3 text-sm lg:text-base bg-white/95 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-500 font-medium"
                            />
                        </div>

                        {/* Submit Button - Full width on mobile */}
                        <button
                            type="submit"
                            className="shrink-0 px-8 py-3 bg-white text-primary text-base lg:text-lg font-black rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 shadow-xl uppercase tracking-wide"
                        >
                            <span>Gönder</span>
                            <Send size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default StickyContactBar
