import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight } from 'lucide-react';

const EcosystemPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-secondary">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                </div>

                {/* Animated Gradient Orbs */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-700"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-6"
                        >
                            <Globe size={16} />
                            <span>Global Vizyonumuz</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8"
                        >
                            Sistem Global <span className="text-primary italic">Ekosistemi</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
                        >
                            İş dünyasının geleceğini birlikte inşa ediyoruz. Teknoloji, danışmanlık ve yatırım ağımızı tek bir platformda topluyoruz.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Preparation Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto bg-white rounded-[3rem] p-12 lg:p-20 shadow-2xl shadow-gray-200 border border-gray-100 text-center relative overflow-hidden"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                        <div className="relative z-10 space-y-8">
                            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary/20">
                                <span className="text-4xl animate-bounce">🚀</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-black text-secondary tracking-tight">
                                İçerik <span className="text-primary">Hazırlanıyor</span>
                            </h2>

                            <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed font-medium">
                                Ekosistem sayfamız çok yakında tüm detaylarıyla, iş ortaklıklarımızla ve global açılım projelerimizle yayında olacak.
                            </p>

                            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button className="px-8 py-4 bg-secondary text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-gray-900 transition-all group shadow-xl shadow-gray-200">
                                    Bize Ulaşın
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest px-4">
                                    Yakında Buradayız
                                </div>
                            </div>
                        </div>

                        {/* Progress Bar Mockup */}
                        <div className="mt-16 w-full max-w-md mx-auto h-1.5 bg-gray-100 rounded-full overflow-hidden border border-gray-50">
                            <motion.div
                                initial={{ width: "10%" }}
                                animate={{ width: "75%" }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-primary to-orange-400"
                            ></motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default EcosystemPage;
