import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X,
    ChevronRight,
    ChevronLeft,
    CheckCircle,
    XCircle,
    AlertCircle,
    Mail,
    Phone,
    Building,
    User,
    Sparkles
} from 'lucide-react';

// Questions for each analysis type
const analysisQuestions = {
    "Sürdürülebilirlik & ESG Analizi": [
        {
            question: "Şirketinizin sürdürülebilirlik stratejisi var mı?",
            type: "choice",
            options: ["Evet, kapsamlı bir strateji var", "Kısmen var", "Hayır, henüz yok"],
            scores: [10, 5, 0]
        },
        {
            question: "Çevresel etki ölçümü yapıyor musunuz?",
            type: "choice",
            options: ["Düzenli olarak yapıyoruz", "Ara sıra yapıyoruz", "Yapmıyoruz"],
            scores: [10, 5, 0]
        },
        {
            question: "ESG raporlaması yapıyor musunuz?",
            type: "choice",
            options: ["Yıllık ESG raporu yayınlıyoruz", "Planlıyoruz", "Hayır"],
            scores: [10, 5, 0]
        },
        {
            question: "Sosyal sorumluluk projeleri yürütüyor musunuz?",
            type: "choice",
            options: ["Aktif olarak yürütüyoruz", "Bazen yapıyoruz", "Hayır"],
            scores: [10, 5, 0]
        },
        {
            question: "Yönetişim politikalarınız ne kadar şeffaf?",
            type: "choice",
            options: ["Tamamen şeffaf", "Kısmen şeffaf", "Şeffaf değil"],
            scores: [10, 5, 0]
        }
    ],
    "Mevzuat & Uyum Analizi": [
        {
            question: "KVKK uyum süreciniz tamamlandı mı?",
            type: "choice",
            options: ["Tamamen uyumluyuz", "Kısmen uyumluyuz", "Henüz başlamadık"],
            scores: [10, 5, 0]
        },
        {
            question: "Veri güvenliği politikalarınız var mı?",
            type: "choice",
            options: ["Kapsamlı politikalar var", "Temel politikalar var", "Hayır"],
            scores: [10, 5, 0]
        },
        {
            question: "Düzenli uyum denetimleri yapılıyor mu?",
            type: "choice",
            options: ["Düzenli yapılıyor", "Ara sıra yapılıyor", "Yapılmıyor"],
            scores: [10, 5, 0]
        },
        {
            question: "Çalışanlarınıza uyum eğitimleri veriliyor mu?",
            type: "choice",
            options: ["Düzenli eğitimler var", "Bazen veriliyor", "Verilmiyor"],
            scores: [10, 5, 0]
        },
        {
            question: "Sektörel regülasyonlara uyum seviyeniz nedir?",
            type: "choice",
            options: ["Tam uyumlu", "Çoğunlukla uyumlu", "Uyum eksiklikleri var"],
            scores: [10, 5, 0]
        }
    ],
    "Kurumsal Yetkinlik Analizi": [
        {
            question: "Liderlik geliştirme programlarınız var mı?",
            type: "choice",
            options: ["Kapsamlı programlar var", "Temel programlar var", "Hayır"],
            scores: [10, 5, 0]
        },
        {
            question: "İnovasyon kültürü ne kadar güçlü?",
            type: "choice",
            options: ["Çok güçlü", "Orta seviye", "Zayıf"],
            scores: [10, 5, 0]
        },
        {
            question: "Çalışan gelişim planları uygulanıyor mu?",
            type: "choice",
            options: ["Her çalışan için var", "Bazı pozisyonlar için var", "Hayır"],
            scores: [10, 5, 0]
        },
        {
            question: "Değişime adaptasyon hızınız nasıl?",
            type: "choice",
            options: ["Çok hızlı", "Orta", "Yavaş"],
            scores: [10, 5, 0]
        },
        {
            question: "Ekip performans değerlendirmeleri yapılıyor mu?",
            type: "choice",
            options: ["Düzenli yapılıyor", "Yıllık yapılıyor", "Yapılmıyor"],
            scores: [10, 5, 0]
        }
    ],
    "Dijital Olgunluk Analizi": [
        {
            question: "Dijital dönüşüm stratejiniz var mı?",
            type: "choice",
            options: ["Kapsamlı strateji var", "Kısmen var", "Hayır"],
            scores: [10, 5, 0]
        },
        {
            question: "İş süreçlerinizin ne kadarı dijitalleşti?",
            type: "choice",
            options: ["%75'ten fazlası", "%25-75 arası", "%25'ten az"],
            scores: [10, 5, 0]
        },
        {
            question: "Veri analitiği kullanıyor musunuz?",
            type: "choice",
            options: ["Aktif kullanıyoruz", "Bazen kullanıyoruz", "Kullanmıyoruz"],
            scores: [10, 5, 0]
        },
        {
            question: "Bulut teknolojileri kullanımınız nasıl?",
            type: "choice",
            options: ["Yaygın kullanım", "Kısmi kullanım", "Kullanmıyoruz"],
            scores: [10, 5, 0]
        },
        {
            question: "Dijital beceri geliştirme programlarınız var mı?",
            type: "choice",
            options: ["Kapsamlı programlar var", "Temel eğitimler var", "Hayır"],
            scores: [10, 5, 0]
        }
    ]
};

const SmartAnalysisModal = ({ isOpen, onClose, analysisType }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [showLeadForm, setShowLeadForm] = useState(false);
    const [leadData, setLeadData] = useState({
        name: '',
        email: '',
        phone: '',
        company: ''
    });

    const questions = analysisQuestions[analysisType] || [];
    const totalQuestions = questions.length;
    const progress = ((currentStep + 1) / totalQuestions) * 100;

    const handleAnswer = (optionIndex) => {
        const newAnswers = [...answers];
        newAnswers[currentStep] = {
            question: questions[currentStep].question,
            answer: questions[currentStep].options[optionIndex],
            score: questions[currentStep].scores[optionIndex]
        };
        setAnswers(newAnswers);

        // Auto-advance to next question
        setTimeout(() => {
            if (currentStep < totalQuestions - 1) {
                setCurrentStep(currentStep + 1);
            } else {
                setShowResults(true);
            }
        }, 300);
    };

    const calculateScore = () => {
        const totalScore = answers.reduce((sum, answer) => sum + answer.score, 0);
        const maxScore = totalQuestions * 10;
        return Math.round((totalScore / maxScore) * 100);
    };

    const getResultStatus = (score) => {
        if (score >= 75) return { status: 'Mükemmel', color: 'text-green-600', bgColor: 'bg-green-50', icon: CheckCircle };
        if (score >= 50) return { status: 'İyi', color: 'text-blue-600', bgColor: 'bg-blue-50', icon: AlertCircle };
        if (score >= 25) return { status: 'Geliştirilmeli', color: 'text-orange-600', bgColor: 'bg-orange-50', icon: AlertCircle };
        return { status: 'Yetersiz', color: 'text-red-600', bgColor: 'bg-red-50', icon: XCircle };
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleLeadSubmit = (e) => {
        e.preventDefault();
        // Here you would send the lead data to your backend
        console.log('Lead Data:', leadData);
        console.log('Analysis Results:', { analysisType, score: calculateScore(), answers });

        // Close modal after submission
        alert('Teşekkürler! Analiziniz kaydedildi. En kısa sürede sizinle iletişime geçeceğiz.');
        onClose();
        resetModal();
    };

    const resetModal = () => {
        setCurrentStep(0);
        setAnswers([]);
        setShowResults(false);
        setShowLeadForm(false);
        setLeadData({ name: '', email: '', phone: '', company: '' });
    };

    if (!isOpen) return null;

    const score = showResults ? calculateScore() : 0;
    const result = showResults ? getResultStatus(score) : null;
    const ResultIcon = result?.icon;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-primary/5 to-orange-50">
                        <div>
                            <h3 className="text-2xl font-black text-secondary">{analysisType}</h3>
                            {!showResults && !showLeadForm && (
                                <p className="text-sm text-gray-500 mt-1">Soru {currentStep + 1} / {totalQuestions}</p>
                            )}
                        </div>
                        <button
                            onClick={() => { onClose(); resetModal(); }}
                            className="w-10 h-10 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors"
                        >
                            <X size={20} className="text-gray-600" />
                        </button>
                    </div>

                    {/* Progress Bar */}
                    {!showResults && !showLeadForm && (
                        <div className="h-2 bg-gray-100">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                className="h-full bg-gradient-to-r from-primary to-orange-600"
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-8">
                        {!showResults && !showLeadForm ? (
                            // Question Screen
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="mb-8">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Sparkles size={24} className="text-primary" />
                                            <span className="text-sm font-bold text-primary uppercase tracking-wider">
                                                Değerlendirme
                                            </span>
                                        </div>
                                        <h4 className="text-3xl font-black text-secondary leading-tight">
                                            {questions[currentStep]?.question}
                                        </h4>
                                    </div>

                                    <div className="space-y-3">
                                        {questions[currentStep]?.options.map((option, idx) => (
                                            <motion.button
                                                key={idx}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handleAnswer(idx)}
                                                className={`w-full p-5 rounded-2xl border-2 text-left transition-all ${answers[currentStep]?.answer === option
                                                    ? 'border-primary bg-primary/5'
                                                    : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
                                                    }`}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span className="font-bold text-secondary">{option}</span>
                                                    {answers[currentStep]?.answer === option && (
                                                        <CheckCircle size={20} className="text-primary" />
                                                    )}
                                                </div>
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        ) : showLeadForm ? (
                            // Lead Form Screen
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <Mail size={32} className="text-primary" />
                                    </div>
                                    <h4 className="text-2xl font-black text-secondary mb-2">
                                        Detaylı Rapor İçin İletişim Bilgileriniz
                                    </h4>
                                    <p className="text-gray-600">
                                        Size özel hazırlanacak detaylı analiz raporunu e-posta ile göndereceğiz
                                    </p>
                                </div>

                                <form onSubmit={handleLeadSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-bold text-secondary mb-2">
                                            <User size={16} className="inline mr-2" />
                                            Ad Soyad *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={leadData.name}
                                            onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none"
                                            placeholder="Adınız ve soyadınız"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-secondary mb-2">
                                            <Mail size={16} className="inline mr-2" />
                                            E-posta *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={leadData.email}
                                            onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none"
                                            placeholder="ornek@sirket.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-secondary mb-2">
                                            <Phone size={16} className="inline mr-2" />
                                            Telefon *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={leadData.phone}
                                            onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none"
                                            placeholder="0555 123 45 67"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-secondary mb-2">
                                            <Building size={16} className="inline mr-2" />
                                            Şirket Adı *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={leadData.company}
                                            onChange={(e) => setLeadData({ ...leadData, company: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none"
                                            placeholder="Şirket adınız"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-secondary text-white rounded-2xl font-bold hover:bg-gray-900 transition-colors mt-6"
                                    >
                                        Detaylı Raporu Al
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            // Results Screen
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center"
                            >
                                <div className={`w-32 h-32 rounded-full ${result.bgColor} flex items-center justify-center mx-auto mb-6`}>
                                    <ResultIcon size={64} className={result.color} />
                                </div>

                                <h4 className="text-3xl font-black text-secondary mb-2">
                                    Analiz Tamamlandı!
                                </h4>

                                <div className="mb-8">
                                    <div className="text-6xl font-black text-primary mb-2">
                                        {score}%
                                    </div>
                                    <div className={`text-2xl font-bold ${result.color}`}>
                                        {result.status}
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                                    <h5 className="font-black text-secondary mb-4">Değerlendirme Özeti</h5>
                                    <div className="space-y-2 text-sm text-left">
                                        {answers.map((answer, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <div className={`w-2 h-2 rounded-full mt-1.5 ${answer.score === 10 ? 'bg-green-500' :
                                                    answer.score === 5 ? 'bg-orange-500' : 'bg-red-500'
                                                    }`} />
                                                <div className="flex-1">
                                                    <div className="font-bold text-gray-700">{answer.question}</div>
                                                    <div className="text-gray-500">{answer.answer}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => setShowLeadForm(true)}
                                    className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:bg-orange-600 transition-colors"
                                >
                                    Detaylı Rapor İçin İletişim Bilgilerimi Paylaş
                                </button>
                            </motion.div>
                        )}
                    </div>

                    {/* Footer Navigation */}
                    {!showResults && !showLeadForm && (
                        <div className="p-6 border-t border-gray-100 flex items-center justify-between">
                            <button
                                onClick={handlePrevious}
                                disabled={currentStep === 0}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft size={20} />
                                Önceki
                            </button>
                            <div className="text-sm text-gray-500">
                                {answers.length} / {totalQuestions} cevaplandı
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

const AnalysisLoop = () => {
    const [selectedAnalysis, setSelectedAnalysis] = useState(null);
    const [currentMobileSlide, setCurrentMobileSlide] = useState(0);

    const analysisItems = [
        {
            title: "Sürdürülebilirlik & ESG Analizi",
            desc: "Kurumunuzun çevresel, sosyal ve yönetişim performansını analiz edin.",
            img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80"
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
    ];

    // Auto-slide for mobile
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentMobileSlide((prev) => (prev + 1) % analysisItems.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [analysisItems.length]);

    return (
        <>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900">Kurumsal <span className="text-primary">Dönüşümünüzü Ölçün</span></h2>
                    </div>

                    {/* Desktop Grid */}
                    <div className="hidden md:grid md:grid-cols-2 gap-8">
                        {analysisItems.map((item, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="md:w-2/5 shrink-0">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-8 flex flex-col justify-center">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 mb-6">{item.desc}</p>
                                    <button
                                        onClick={() => setSelectedAnalysis(item.title)}
                                        className="self-start px-6 py-2 border border-gray-300 rounded-lg text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors"
                                    >
                                        Değerlendir
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Carousel */}
                    <div className="md:hidden relative">
                        <div className="overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentMobileSlide}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg"
                                >
                                    <div className="w-full h-48">
                                        <img src={analysisItems[currentMobileSlide].img} alt={analysisItems[currentMobileSlide].title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{analysisItems[currentMobileSlide].title}</h3>
                                        <p className="text-gray-600 mb-6">{analysisItems[currentMobileSlide].desc}</p>
                                        <button
                                            onClick={() => setSelectedAnalysis(analysisItems[currentMobileSlide].title)}
                                            className="w-full px-6 py-3 border border-gray-300 rounded-lg text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors font-bold"
                                        >
                                            Değerlendir
                                        </button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-6">
                            {analysisItems.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentMobileSlide(idx)}
                                    className={`h-2 rounded-full transition-all ${idx === currentMobileSlide
                                        ? 'w-8 bg-primary'
                                        : 'w-2 bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <SmartAnalysisModal
                isOpen={selectedAnalysis !== null}
                onClose={() => setSelectedAnalysis(null)}
                analysisType={selectedAnalysis}
            />
        </>
    );
};

export default AnalysisLoop;
