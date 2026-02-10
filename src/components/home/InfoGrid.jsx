import React from 'react'
import { FileText, BookOpen, Mic, Video } from 'lucide-react'

const InfoGrid = () => {
    const items = [
        {
            id: "01",
            title: "Raporlar",
            desc: "Kurumlara özel analiz, istatistik ve değerlendirme sonuçlarının paylaşıldığı raporlardır.",
            icon: <FileText className="w-8 h-8 text-white" />
        },
        {
            id: "02",
            title: "Tanıtım Dökümanları",
            desc: "Servislerimizi tanıtan ve süreçleri açıklayan detaylı dökümanlar.",
            icon: <BookOpen className="w-8 h-8 text-white" />
        },
        {
            id: "03",
            title: "Kılavuzlar",
            desc: "Uygulama adımlarını ve mevzuat gerekliliklerini içeren rehberler.",
            icon: <BookOpen className="w-8 h-8 text-white" />
        },
        {
            id: "04",
            title: "Podcast",
            desc: "Uzmanlarımızla sektörel gelişmeleri değerlendirdiğimiz sesli içerikler.",
            icon: <Mic className="w-8 h-8 text-white" />
        }
    ]

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl font-bold">Tanıtım <span className="text-primary">Dökümanları</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item) => (
                        <div key={item.id} className="relative group p-8 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-colors border border-gray-700 hover:border-primary/50">
                            <div className="absolute top-4 right-4 text-4xl font-bold text-gray-700 group-hover:text-gray-600 transition-colors">
                                {item.id}
                            </div>
                            <div className="mb-6 bg-primary w-14 h-14 rounded-xl flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                            <a href="#" className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all">
                                Devamını Oku
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default InfoGrid
