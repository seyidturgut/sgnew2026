import React from 'react'

const AnalysisLoop = () => {
    const analysisItems = [
        {
            title: "Sürdürülebilirlik & ESG Analizi",
            desc: "Kurumunuzun çevresel, sosyal ve yönetişim performansını analiz edin.",
            img: "https://sg2026.ey08.co.uk/wp-content/uploads/Sürdürülebilirlik.webp"
        },
        {
            title: "Mevzuat & Uyum Analizi",
            desc: "KVKK, ESG, ve regülasyonlara uyum seviyenizi tespit edin.",
            img: "https://sg2026.ey08.co.uk/wp-content/uploads/Mevzuat-Uyum-Assessmenti.webp"
        },
        {
            title: "Kurumsal Yetkinlik Analizi",
            desc: "Ekiplerin inovasyon, liderlik ve adaptasyon düzeyini değerlendirin.",
            img: "https://sg2026.ey08.co.uk/wp-content/uploads/Kurumsal-Yetkinlik-Analizi.webp"
        },
        {
            title: "Dijital Olgunluk Analizi",
            desc: "İş süreçlerinizin dijital dönüşüme uygunluğunu ölçün.",
            img: "https://sg2026.ey08.co.uk/wp-content/uploads/dijital-analiz.webp"
        },
    ]

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">Kurumsal <span className="text-primary">Dönüşümünüzü Ölçün</span></h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {analysisItems.map((item, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="md:w-2/5 shrink-0">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-8 flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 mb-6">{item.desc}</p>
                                <button className="self-start px-6 py-2 border border-gray-300 rounded-lg text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors">
                                    Değerlendir
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AnalysisLoop
