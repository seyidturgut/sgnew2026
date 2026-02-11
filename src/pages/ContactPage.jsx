import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    Globe,
    ChevronRight,
    MessageSquare,
    ArrowRight,
    Building2,
    Send
} from 'lucide-react';

const officesData = {
    turkey: [
        {
            city: "İSTANBUL",
            address: "Eski Büyükdere Cad. Huzur Mh. No:67 4 Levent Plaza Kat:5 34396 Sarıyer",
            phone: "(+90 212) 709 08 50",
            fax: "(+90 212) 283 11 50",
            email: "info@sistemglobal.com.tr"
        },
        {
            city: "ANKARA",
            address: "Beştepe Mah. Nergiz Sk. No: 7/2 Via Flat İş Merkezi No: 60-61 Söğütözü",
            phone: "(+90 312) 442 20 40",
            fax: "(+90 312) 442 20 63",
            email: "info@sistemglobal.com.tr"
        },
        {
            city: "İZMİR",
            address: "Kazım Dirik Mah. 296 Sk No: 8/702 Bornova / İZMİR",
            phone: "(+90 232) 483 27 61",
            fax: "(+90 232) 483 27 62",
            email: "info@sistemglobal.com.tr"
        },
        {
            city: "GAZİANTEP",
            address: "İncilipınar Mh. Nişantaşı Sk. Elit İş Merkezi No:11 Kat:5/5 Şehitkamil",
            phone: "(+90 342) 215 02 67",
            fax: "(+90 342) 215 02 68",
            email: "info@sistemglobal.com.tr"
        },
        {
            city: "BURSA",
            address: "Konak Mah. Kudret Sk. Elitpark Park Sit. Ofisler Apt. No:12/27 Nilüfer / BURSA",
            phone: "(+90 224) 453 10 15",
            fax: "(+90 224) 239 30 70",
            email: "info@sistemglobal.com.tr"
        },
        {
            city: "ADANA",
            address: "Süleyman Demirel Blv. Gölvadi Evleri No:59 A Blok Asma Kat Çukurova",
            phone: "(+90 322) 881 01 50",
            fax: "(+90 322) 239 68 68",
            email: "info@sistemglobal.com.tr"
        },
        {
            city: "ANTALYA",
            address: "Yenigün Mah. Kızılırmak Cad Plaza A2 Blok No:22/2-602 Muratpaşa / ANTALYA",
            phone: "(+90 242) 244 7 244",
            fax: "(+90 242) 244 8 244",
            email: "info@sistemglobal.com.tr"
        },
        {
            city: "KAYSERİ",
            address: "Gevher Nesibe Mah. Gür Sok. Ofisim Kayseri İş Merkezi B-Blok Kat : 12 No: 10/69 Kocasinan / KAYSERİ",
            phone: "(+90 352) 222 65 65",
            email: "info@sistemglobal.com.tr"
        }
    ],
    global: [
        {
            city: "LONDRA",
            country: "United Kingdom",
            address: "5 Beaufort Court Admirals Way London E14 9XL",
            email: "info@sistemglobal.com.tr"
        },
        {
            city: "BERLİN",
            country: "Germany",
            address: "Sistem Global GmbH Belziger Str. 69-71 / 10823 Berlin",
            email: "info@sistemglobal.com.tr"
        },
        {
            city: "AMSTERDAM",
            country: "Netherlands",
            address: "Goudse Rijweg 382 3031CK Rotterdam",
            email: "info@sistemglobal.com.tr"
        },
        {
            city: "BRÜKSEL",
            country: "Belgium",
            address: "Rue de la presse 4 1000 Brussels",
            email: "info@sistemglobal.com.tr"
        },
        {
            city: "DUBAI",
            country: "UAE",
            address: "Al Barsha Heights, Dubai Internet City AI Ameri Tower – Office 03, Floor 12",
            email: "info@sistemglobal.com.tr"
        },
        {
            city: "SİNGAPUR",
            country: "Singapore",
            address: "Anson Road. No: #14–06 Building No:10. Postal Code 079903",
            email: "info@sistemglobal.com.tr"
        },
        {
            city: "TAŞKENT",
            country: "Uzbekistan",
            address: "Amur Temur Ko’chasi, 107-uy",
            email: "info@sistemglobal.com.tr"
        }
    ]
};

const ContactPage = () => {
    const [activeTab, setActiveTab] = useState('turkey');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 min-h-screen bg-white font-sans overflow-x-hidden text-secondary antialiased">
            {/* Minimalist Hero Section */}
            <section className="relative py-24 bg-gray-950 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(243,112,33,0.1),transparent_50%)]"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                            İletişim Kurun
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                            Size Nasıl <span className="text-primary italic">Yardımcı</span> Olabiliriz?
                        </h1>
                        <p className="text-xl text-gray-400 font-medium max-w-xl">
                            Dünyanın her yerindeki ofislerimizle global çözümler sunuyoruz. Bize ulaşın, ekosistemimize dahil olun.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Contact Cards */}
            <section className="relative -mt-12 mb-20 z-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Phone, title: "Bizi Arayın", desc: "Global hatlarımız üzerinden bize ulaşın", value: "+90 212 709 08 50", color: "bg-blue-600" },
                            { icon: Mail, title: "E-Posta Gönderin", desc: "Tüm talepleriniz için tek adres", value: "info@sistemglobal.com.tr", color: "bg-primary" },
                            { icon: MessageSquare, title: "Canlı Destek", desc: "Hızlı çözümler için uzman ekibimiz burada", value: "Online", color: "bg-emerald-600" }
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx }}
                                className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex items-start gap-6 hover:-translate-y-1 transition-transform cursor-pointer"
                            >
                                <div className={`${card.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg`}>
                                    <card.icon size={24} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">{card.title}</div>
                                    <div className="text-lg font-black text-secondary leading-tight mb-1">{card.value}</div>
                                    <div className="text-sm text-gray-500 font-medium">{card.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Offices Section - Compact & Modern Tabs */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Left Side: Navigation & Info */}
                        <div className="lg:w-1/3 shrink-0">
                            <div className="sticky top-32 space-y-8">
                                <div>
                                    <h2 className="text-4xl font-black text-secondary tracking-tight mb-4">Küresel Ağımız</h2>
                                    <p className="text-gray-500 font-medium leading-relaxed">
                                        Ofislerimizin her biri kendi bölgesinde yerel uzmanlık ve global vizyonla hizmet vermektedir.
                                    </p>
                                </div>

                                <div className="space-y-3 p-2 bg-gray-50 rounded-[2rem] border border-gray-100">
                                    <button
                                        onClick={() => setActiveTab('turkey')}
                                        className={`w-full flex items-center justify-between px-6 py-5 rounded-2xl font-bold transition-all ${activeTab === 'turkey' ? 'bg-white text-secondary shadow-lg shadow-gray-200 border border-gray-100' : 'text-gray-400 hover:text-secondary'}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeTab === 'turkey' ? 'bg-primary text-white' : 'bg-gray-200/50 text-gray-400'}`}>
                                                <Building2 size={20} />
                                            </div>
                                            <span>Türkiye Ofislerimiz</span>
                                        </div>
                                        <ChevronRight size={18} className={activeTab === 'turkey' ? 'text-primary' : 'opacity-0'} />
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('global')}
                                        className={`w-full flex items-center justify-between px-6 py-5 rounded-2xl font-bold transition-all ${activeTab === 'global' ? 'bg-white text-secondary shadow-lg shadow-gray-200 border border-gray-100' : 'text-gray-400 hover:text-secondary'}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeTab === 'global' ? 'bg-secondary text-white' : 'bg-gray-200/50 text-gray-400'}`}>
                                                <Globe size={20} />
                                            </div>
                                            <span>Global Ofislerimiz</span>
                                        </div>
                                        <ChevronRight size={18} className={activeTab === 'global' ? 'text-primary' : 'opacity-0'} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Offices Grid */}
                        <div className="lg:w-2/3">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                >
                                    {officesData[activeTab].map((office, idx) => (
                                        <div key={idx} className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-gray-200/50 transition-all">
                                            <div className="flex items-center justify-between mb-6">
                                                <h3 className="text-xl font-black text-secondary group-hover:text-primary transition-colors tracking-tight uppercase">
                                                    {office.city}
                                                </h3>
                                                {office.country && (
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] px-3 py-1 bg-gray-50 rounded-full border border-gray-100">
                                                        {office.country}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="space-y-4">
                                                <div className="flex gap-4">
                                                    <MapPin size={18} className="text-gray-300 shrink-0 mt-1" />
                                                    <p className="text-sm text-gray-500 font-medium leading-relaxed italic">
                                                        {office.address}
                                                    </p>
                                                </div>

                                                {office.phone && (
                                                    <div className="flex items-center gap-4 pt-2">
                                                        <Phone size={16} className="text-primary shrink-0" />
                                                        <span className="text-sm font-bold text-secondary">{office.phone}</span>
                                                    </div>
                                                )}

                                                <div className="flex items-center gap-4">
                                                    <Mail size={16} className="text-primary shrink-0" />
                                                    <span className="text-sm font-medium text-gray-600 underline decoration-primary/30 underline-offset-4">{office.email}</span>
                                                </div>
                                            </div>

                                            <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-xs font-bold text-gray-400">Haritada Görüntüle</span>
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                    <ArrowRight size={14} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple Contact Form Area */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="bg-secondary rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

                        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                            <div className="lg:w-1/2 space-y-6">
                                <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">Bizimle Hemen <span className="text-primary italic">İletişime</span> Geçin</h2>
                                <p className="text-gray-400 text-lg font-medium leading-relaxed">
                                    Projeleriniz, danışmanlık ihtiyaçlarınız veya ekosistem ortaklığı hakkında konuşalım.
                                </p>
                                <div className="flex items-center gap-4 pt-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className={`w-12 h-12 rounded-full border-4 border-secondary bg-gray-800 bg-[url('https://i.pravatar.cc/100?img=${i + 10}')] bg-cover`}></div>
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-400 font-bold tracking-wide">
                                        <span className="text-white">500+</span> Uzman kadromuzla yanınızdayız
                                    </span>
                                </div>
                            </div>

                            <div className="lg:w-1/2 w-full">
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 lg:p-10 rounded-[2.5rem] space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input type="text" placeholder="Adınız" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors" />
                                        <input type="email" placeholder="E-Posta" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors" />
                                    </div>
                                    <textarea placeholder="Mesajınız" rows="4" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white w-full focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                                    <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group">
                                        Mesajı Gönder
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
