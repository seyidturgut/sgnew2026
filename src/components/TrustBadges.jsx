import React from 'react'
import { Shield, Award, CheckCircle2, Star } from 'lucide-react'

const TrustBadges = () => {
    const badges = [
        {
            icon: Shield,
            title: "ISO 9001",
            subtitle: "Kalite Sertifikası"
        },
        {
            icon: Star,
            title: "4.9/5",
            subtitle: "Müşteri Memnuniyeti"
        },
        {
            icon: Award,
            title: "15+ Yıl",
            subtitle: "Sektör Deneyimi"
        },
        {
            icon: CheckCircle2,
            title: "500+",
            subtitle: "Başarılı Proje"
        }
    ]

    return (
        <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 py-12 -mx-4 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {badges.map((badge, index) => {
                        const Icon = badge.icon
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-400 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                    <Icon size={24} className="text-white" />
                                </div>
                                <h4 className="text-2xl font-bold text-secondary mb-1">{badge.title}</h4>
                                <p className="text-xs text-gray-600 font-medium">{badge.subtitle}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TrustBadges
