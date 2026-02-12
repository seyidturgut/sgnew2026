import React from 'react'
import { Link } from 'react-router-dom'
import {
    Coins,
    Zap,
    Scale,
    Globe,
    TrendingUp,
    Monitor,
    ArrowRight,
    Search
} from 'lucide-react'

const Services = () => {
    const services = [
        {
            title: "Vergi & Finans",
            slug: "vergi-finans",
            description: "Vergi yönetimi, tasdik ve kurumsal finansman süreçlerinde uçtan uca uzman danışmanlık.",
            icon: <Coins className="w-8 h-8 text-[#F37021]" strokeWidth={2} />,
            color: "from-orange-500/20 to-orange-600/5",
            borderColor: "group-hover:border-orange-200"
        },
        {
            title: "Ar-Ge ve Fikri Mülkiyet",
            slug: "ar-ge-ve-fikri-mulkiyet",
            description: "Teknopark, Ar-Ge merkezi yönetimi ve fikri mülkiyet haklarının korunmasında stratejik çözümler.",
            icon: <Zap className="w-8 h-8 text-blue-500" strokeWidth={2} />,
            color: "from-blue-500/20 to-blue-600/5",
            borderColor: "group-hover:border-blue-200"
        },
        {
            title: "Mevzuat & Uyum",
            slug: "mevzuat-uyum",
            description: "KVKK, yasal uyum ve risk yönetimi süreçlerinde mevzuata tam uyum güvencesi.",
            icon: <Scale className="w-8 h-8 text-emerald-500" strokeWidth={2} />,
            color: "from-emerald-500/20 to-emerald-600/5",
            borderColor: "group-hover:border-emerald-200"
        },
        {
            title: "Globalleşme & İhracat",
            slug: "globallesme-ihracat",
            description: "Uluslararası ticaret, pazar analizi ve yurtdışı şirket kurulumu ile global pazarlarda büyüme.",
            icon: <Globe className="w-8 h-8 text-indigo-500" strokeWidth={2} />,
            color: "from-indigo-500/20 to-indigo-600/5",
            borderColor: "group-hover:border-indigo-200"
        },
        {
            title: "Finansmana Erişim & Sürdürülebilirlik",
            slug: "finansmana-erisim-surdurulebilirlik",
            description: "Hibe, teşvik yönetimi ve ESG odaklı sürdürülebilirlik stratejileri ile finansal güçlenme.",
            icon: <TrendingUp className="w-8 h-8 text-purple-500" strokeWidth={2} />,
            color: "from-purple-500/20 to-purple-600/5",
            borderColor: "group-hover:border-purple-200"
        },
        {
            title: "Yazılım: Proje ve Ürün Çözümleri",
            slug: "yazilim-proje-urun-cozumleri",
            description: "Dijital dönüşüm, özel yazılım geliştirme ve teknoloji platformları ile geleceği inşa edin.",
            icon: <Monitor className="w-8 h-8 text-rose-500" strokeWidth={2} />,
            color: "from-rose-500/20 to-rose-600/5",
            borderColor: "group-hover:border-rose-200"
        }
    ]

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-50/50 blur-[120px] rounded-full -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/50 blur-[100px] rounded-full -z-10 animate-pulse delay-700"></div>

            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100/50 text-[#F37021] text-sm font-bold tracking-wide uppercase">
                        <Search size={14} />
                        Uzmanlık Alanlarımız
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">Hizmet</h2>
                        <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] via-orange-500 to-orange-600 tracking-tight">lerimiz</h2>
                    </div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
                        Sistem Global olarak, işletmenizin her aşamasında değer katan profesyonel danışmanlık ve teknoloji çözümleri sunuyoruz.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link
                            to={`/servisler/${service.slug}`}
                            key={index}
                            className={`group relative bg-white border border-gray-100 p-8 lg:p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-start text-left ${service.borderColor}`}
                        >
                            {/* Card Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]`}></div>

                            {/* Icon Container using Glassmorphism */}
                            <div className="relative z-10 w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 border border-gray-100 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 group-hover:bg-white group-hover:shadow-xl">
                                {service.icon}
                            </div>

                            <div className="relative z-10 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed font-medium">
                                    {service.description}
                                </p>
                            </div>

                            <div className="relative z-10 mt-auto pt-8 flex items-center gap-2 text-primary text-sm font-bold group/btn">
                                <span className="uppercase tracking-widest">Detayları İncele</span>
                                <div className="p-1.5 rounded-full bg-primary/10 group-hover/btn:bg-primary group-hover/btn:text-white transition-all duration-300">
                                    <ArrowRight size={16} />
                                </div>
                            </div>

                            {/* Decorative line */}
                            <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-primary/5 rounded-tr-3xl group-hover:border-primary/20 transition-colors"></div>
                        </Link>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="mt-20 text-center">
                    <p className="text-gray-500 text-sm font-medium">
                        İhtiyacınıza en uygun hizmeti bulamadınız mı?
                        <Link to="/iletisim" className="text-primary hover:underline ml-1 font-bold">Bizimle iletişime geçin.</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services
