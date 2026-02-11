import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Home } from 'lucide-react';
import { serviceMenu } from '../data/serviceMenu';

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-secondary overflow-hidden">
                {/* Background Image - No Gradient or Blur */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/servisler/services-hero-business.webp"
                        alt="Services Hero"
                        className="w-full h-full object-cover opacity-40"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <nav className="flex justify-center mb-10 space-x-2 text-sm text-gray-400">
                        <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
                            <Home size={14} /> Anasayfa
                        </Link>
                        <span>/</span>
                        <span className="text-primary font-medium tracking-wide">Servisler</span>
                    </nav>

                    <h1 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight">
                        Servis<span className="text-primary font-black ml-1">lerimiz</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-12">
                        Sistem Global olarak, işletmenizin büyüme yolculuğunda her aşamada ihtiyacınız olan <span className="text-white font-medium">stratejik, finansal ve yasal</span> çözümleri teknolojiyle birleştirerek sunuyoruz.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {serviceMenu.map((cat) => (
                            <a
                                key={cat.slug}
                                href={`#${cat.slug}`}
                                className="px-6 py-2.5 bg-white/5 hover:bg-primary text-white rounded-full text-sm font-medium border border-white/10 hover:border-primary transition-all backdrop-blur-md"
                            >
                                {cat.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Catalog Sections */}
            <div className="bg-gray-50 pb-20">
                {serviceMenu.map((category, catIdx) => (
                    <section key={category.slug} id={category.slug} className={`py-24 ${catIdx % 2 === 1 ? 'bg-white' : ''}`}>
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col lg:flex-row gap-16">
                                {/* Left Side: Category Info */}
                                <div className="lg:w-1/3">
                                    <div className="sticky top-32">
                                        {/* Modern Icon Box */}
                                        <div className="mb-10">
                                            <div className={`w-20 h-20 rounded-[2rem] bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-xl shadow-orange-500/20 transform -rotate-3 hover:rotate-0 transition-all duration-500`}>
                                                <category.icon size={40} strokeWidth={1.5} />
                                            </div>
                                        </div>

                                        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-8 leading-tight font-serif italic">
                                            {category.title}
                                        </h2>

                                        <p className="text-lg text-gray-600 font-light leading-relaxed mb-10 max-w-sm">
                                            {category.description}
                                        </p>

                                        <Link
                                            to="/iletisim"
                                            className="group flex items-center gap-4 text-[#F37021] font-bold text-lg hover:gap-6 transition-all"
                                        >
                                            Bilgi Alın
                                            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-[#F37021] group-hover:text-white transition-all">
                                                <ArrowRight size={18} />
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                {/* Right Side: Subcategories Grid */}
                                <div className="lg:w-2/3">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {category.subcategories.map((subcategory, gIdx) => (
                                            <div
                                                key={gIdx}
                                                className="bg-white rounded-[2.5rem] p-10 border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group relative overflow-hidden"
                                            >
                                                {/* Corner Decoration */}
                                                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-full`}></div>

                                                <div className="flex items-center gap-4 mb-8">
                                                    <div className={`${category.bgSubtle} ${category.textColor} p-3 rounded-2xl`}>
                                                        <subcategory.icon size={28} strokeWidth={2} />
                                                    </div>
                                                    <Link
                                                        to={`/servisler/${category.slug}/${subcategory.slug}`}
                                                        className="hover:text-primary transition-colors"
                                                    >
                                                        <h3 className="text-2xl font-bold text-secondary">{subcategory.title}</h3>
                                                    </Link>
                                                </div>

                                                <ul className="space-y-4 mb-8">
                                                    {subcategory.items.slice(0, 6).map((item, iIdx) => (
                                                        <li key={iIdx}>
                                                            <Link
                                                                to={item.href}
                                                                className="group/link flex items-center justify-between text-gray-500 hover:text-primary transition-all duration-300 py-1"
                                                            >
                                                                <span className="text-sm font-medium">{item.title}</span>
                                                                <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <Link
                                                    to={`/servisler/${category.slug}/${subcategory.slug}`}
                                                    className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                                                >
                                                    Tümünü Gör <ArrowRight size={16} />
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
};

export default ServicesPage;
