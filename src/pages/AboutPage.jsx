import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight, Award, Shield } from 'lucide-react';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 min-h-screen bg-white font-sans text-secondary">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-white">
                {/* Subtle Background Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 skew-x-12 translate-x-32 z-0"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold uppercase tracking-wider mb-6"
                        >
                            <Users size={16} />
                            <span>Biz Kimiz?</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-6xl lg:text-8xl font-black text-secondary leading-[1] mb-8"
                        >
                            Geleceği <br />
                            <span className="text-primary italic">Tasarlıyoruz.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-gray-500 mb-10 max-w-2xl leading-relaxed font-medium"
                        >
                            30 yılı aşkın tecrübemizle, teknoloji ve danışmanlığı birleştirerek işletmelerin küresel yolculuğuna eşlik ediyoruz.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Preparation Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto rounded-[4rem] p-12 lg:p-24 bg-gray-950 text-center relative overflow-hidden shadow-2xl"
                    >
                        {/* Abstract Background Art */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                            <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[100px]"></div>
                            <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-600 rounded-full blur-[100px]"></div>
                        </div>

                        <div className="relative z-10 space-y-10">
                            <div className="flex justify-center gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                    <Award size={28} />
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                    <Shield size={28} />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
                                    İçerik <span className="text-primary">Hazırlanıyor</span>
                                </h2>
                                <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                                    Sistem Global'in hikayesini, değerlerini ve vizyonunu tüm ayrıntılarıyla yakında bu sayfada keşfedeceksiniz.
                                </p>
                            </div>

                            <div className="pt-6">
                                <button className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 group shadow-xl shadow-primary/20">
                                    Bizimle Tanışın
                                    <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Animated Loading Indicator */}
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-white/5">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="w-1/3 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                            ></motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
