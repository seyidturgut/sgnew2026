import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    BookOpen,
    FileText,
    Newspaper,
    BookMarked,
    Folder,
    Video,
    Mic,
    Search,
    ArrowRight
} from 'lucide-react';

const categories = [
    {
        title: "Eğitim ve Etkinlikler",
        slug: "egitim-ve-etkinlikler",
        icon: BookOpen,
        color: "from-blue-600 to-blue-700",
        description: "Seminerler, workshoplar ve eğitim programları",
        count: 12
    },
    {
        title: "Raporlar",
        slug: "raporlar",
        icon: FileText,
        color: "from-indigo-600 to-indigo-700",
        description: "Sektörel analizler ve araştırma raporları",
        count: 24
    },
    {
        title: "Makaleler",
        slug: "makaleler",
        icon: Newspaper,
        color: "from-purple-600 to-purple-700",
        description: "Uzman görüşleri ve sektörel yazılar",
        count: 45
    },
    {
        title: "Kılavuzlar",
        slug: "kilavuzlar",
        icon: Search,
        color: "from-pink-600 to-pink-700",
        description: "Adım adım rehberler ve uygulamalar",
        count: 18
    },
    {
        title: "Bültenler",
        slug: "bultenler",
        icon: BookMarked,
        color: "from-orange-600 to-orange-700",
        description: "Aylık haber bültenleri ve güncellemeler",
        count: 36
    },
    {
        title: "Tanıtım Dökümanları",
        slug: "tanitim-dokumanlari",
        icon: Folder,
        color: "from-emerald-600 to-emerald-700",
        description: "Ürün ve hizmet tanıtım materyalleri",
        count: 15
    },
    {
        title: "V-Blog",
        slug: "v-blog",
        icon: Video,
        color: "from-red-600 to-red-700",
        description: "Video içerikler ve görsel anlatımlar",
        count: 28
    },
    {
        title: "Podcast",
        slug: "podcast",
        icon: Mic,
        color: "from-cyan-600 to-cyan-700",
        description: "Sesli içerikler ve söyleşiler",
        count: 22
    }
];

const MediaPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-secondary via-gray-900 to-gray-950 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-6">
                            Bilgi Merkezi
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                            Medya & <span className="text-primary italic">İçeriklerimiz</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                            Sektörel bilgi, uzman görüşleri ve güncel içeriklerimizle iş dünyasına değer katıyoruz.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((category, idx) => {
                            const Icon = category.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Link
                                        to={`/medya/${category.slug}`}
                                        className="group block h-full"
                                    >
                                        <div className="bg-white rounded-3xl p-8 h-full border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-gray-200/50 transition-all hover:-translate-y-2 relative overflow-hidden">
                                            {/* Gradient Background on Hover */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                            <div className="relative z-10">
                                                {/* Icon */}
                                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                                                    <Icon size={28} />
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-xl font-black text-secondary group-hover:text-white transition-colors mb-3 leading-tight">
                                                    {category.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors mb-6 leading-relaxed">
                                                    {category.description}
                                                </p>

                                                {/* Footer */}
                                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-white/20">
                                                    <span className="text-xs font-bold text-gray-400 group-hover:text-white/60 uppercase tracking-wider">
                                                        {category.count} İçerik
                                                    </span>
                                                    <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-white/20 flex items-center justify-center">
                                                        <ArrowRight size={14} className="text-gray-400 group-hover:text-white transition-transform group-hover:translate-x-1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-black text-secondary mb-4">
                            Öne Çıkan <span className="text-primary">İçerikler</span>
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            En çok okunan ve izlenen içeriklerimize göz atın
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="group bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all">
                                <div className="aspect-video bg-gradient-to-br from-primary to-orange-600 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-6xl font-black text-white/20">SG</span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Rapor</span>
                                    <h3 className="text-xl font-black text-secondary mt-2 mb-3 group-hover:text-primary transition-colors">
                                        2026 Dijital Dönüşüm Trendleri
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-6">
                                        İş dünyasında dijital dönüşümün geleceğini şekillendiren trendler ve öngörüler.
                                    </p>
                                    <button className="text-sm font-bold text-secondary hover:text-primary transition-colors flex items-center gap-2">
                                        Devamını Oku
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MediaPage;
