import React, { useState, useEffect } from 'react'
import { X, Gift } from 'lucide-react'

const ExitIntentPopup = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [hasShown, setHasShown] = useState(false)

    useEffect(() => {
        const handleMouseLeave = (e) => {
            // Fare ekranın üst kısmından çıkıyorsa (çıkış niyeti)
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true)
                setHasShown(true)
            }
        }

        document.addEventListener('mouseleave', handleMouseLeave)
        return () => document.removeEventListener('mouseleave', handleMouseLeave)
    }, [hasShown])

    if (!isVisible) return null

    return (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-scaleIn">
                {/* Close Button */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    <X size={24} />
                </button>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Gift size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-secondary text-center mb-3">
                    Bekleyin! 🎁
                </h3>
                <p className="text-gray-600 text-center mb-6">
                    Ücretsiz danışmanlık hakkınızı kaçırmayın! Formu doldurun, size özel çözümler sunalım.
                </p>

                {/* Mini Form */}
                <form className="space-y-3">
                    <input
                        type="email"
                        placeholder="Email adresiniz"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-gradient-to-r from-primary to-orange-400 text-white font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                        Ücretsiz Danışmanlık Al
                    </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                    Spam göndermiyoruz. Dilediğiniz zaman abonelikten çıkabilirsiniz.
                </p>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out;
                }
            `}</style>
        </div>
    )
}

export default ExitIntentPopup
