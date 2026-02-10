import React from 'react'
import {
    CircleDollarSign,
    TrendingUp,
    FileText,
    Globe,
    Code,
    ArrowRight
} from 'lucide-react'

const Services = () => {
    const services = [
        {
            title: "Vergi ve Finans",
            description: "Ulusal ve uluslararası planlama, vergi indirimi, teşvik ve istisnalardan yararlanma ile cezai yaptırımları önleme hizmetlerimiz",
            icon: <CircleDollarSign className="w-12 h-12 text-primary" strokeWidth={1.5} />
        },
        {
            title: "Finansmana Erişim & Sürdürülebilirlik",
            description: "Çeşitli devlet destekleriyle şirketlerin finansmana erişmesini kolaylaştıran, büyüme yolculuğuna rehberlik eden hizmetlerimiz",
            icon: <TrendingUp className="w-12 h-12 text-primary" strokeWidth={1.5} />
        },
        {
            title: "Mevzuat ve Uyum",
            description: "Yasal düzenlemelere tam uyum sağlayarak riskleri minimize eden, operasyonel süreçlerinizi güvenle yürütmenizi sağlayan çözümlerimiz",
            icon: <FileText className="w-12 h-12 text-primary" strokeWidth={1.5} />
        },
        {
            title: "Globalleşme & İhracat",
            description: "Uluslararası pazarlara açılma, ihracat teşvikleri ve stratejik pazar araştırması ile global büyüme hedeflerinizi destekliyoruz",
            icon: <Globe className="w-12 h-12 text-primary" strokeWidth={1.5} />
        },
        {
            title: "Yazılım Proje ve Ürün Çözümleri",
            description: "Özel Yazılım Geliştirme\nDijital Dönüşüm\nSistem Entegrasyonu",
            icon: <Code className="w-12 h-12 text-primary" strokeWidth={1.5} />
        }
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-row justify-center items-center mb-16 gap-0">
                    <h2 className="text-4xl font-bold text-gray-900">Hizmet</h2>
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-orange-500">lerimiz</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                            <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed whitespace-pre-line">{service.description}</p>
                            <a href="#" className="inline-flex items-center gap-2 text-primary font-medium mt-6 group-hover:gap-3 transition-all">
                                Detayları İncele
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
