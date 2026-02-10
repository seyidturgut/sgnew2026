import React, { useState, useEffect } from 'react'
import { Users, TrendingUp, Clock } from 'lucide-react'

const SocialProofTicker = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const proofs = [
        { icon: Users, text: "Ahmet B. az önce danışmanlık başvurusu yaptı", time: "2 dk önce" },
        { icon: TrendingUp, text: "Bu ay 47 firma bizimle çalışmaya başladı", time: "Bugün" },
        { icon: Clock, text: "5 kişi şu anda bu sayfayı inceliyor", time: "Şimdi" },
        { icon: Users, text: "Zeynep K. hizmet paketini satın aldı", time: "15 dk önce" },
        { icon: TrendingUp, text: "Son 24 saatte 12 yeni başvuru alındı", time: "Bugün" }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % proofs.length)
        }, 5000) // Her 5 saniyede değişir

        return () => clearInterval(interval)
    }, [])

    const current = proofs[currentIndex]
    const Icon = current.icon

    return (
        <div className="fixed bottom-24 left-6 z-40 max-w-sm animate-slideInLeft">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4 flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-400 rounded-full flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-800 font-medium leading-snug">{current.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{current.time}</p>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-100%);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .animate-slideInLeft {
                    animation: slideInLeft 0.5s ease-out;
                }
            `}</style>
        </div>
    )
}

export default SocialProofTicker
