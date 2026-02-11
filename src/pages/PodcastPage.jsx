import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ArrowLeft,
    Play,
    Pause,
    SkipBack,
    SkipForward,
    Volume2,
    Clock,
    Calendar,
    Mic,
    TrendingUp
} from 'lucide-react';

// Podcast episodes data from Sistemli Girişimcilik 101
const podcastData = {
    showTitle: "Sistemli Girişimcilik 101",
    showDescription: "Sistem Global Danışmanlık tarafından hazırlanan ve girişimcilik ekosistemine dair birçok bilgi ve veriye ulaşabileceğiniz özgün podcast programı",
    coverImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80",
    episodes: [
        {
            id: 1,
            title: "#16 Girişimcilerin Yatırım Alma Yöntemlerinden Biri: Emisyon Primi Sermaye Satışı",
            description: "Sistemli Girişimcilik 101 podcast serisinin bu haftaki bölümünde girişimcilerin alması gereken önlemlerden bahsettiğimiz 'Girişimcilerin Yatırım Alma Yöntemlerinden Biri: Emisyon Primi Sermaye Satışı' konusunu ele aldık, keyifli dinlemeler.",
            date: "17 Haziran 2022",
            duration: "19:00",
            audioUrl: "#"
        },
        {
            id: 2,
            title: "#15 Girişimciler Yatırımlarında Haklarını Nasıl Koruyabilir?",
            description: "Sistemli Girişimcilik 101 podcast serisinin bu haftaki bölümünde girişimcilerin alması gereken önlemlerden bahsettiğimiz 'Girişimciler Yaptıkları Yatırımlarda Haklarını Nasıl Koruyabilir?' konusunu ele aldık, keyifli dinlemeler.",
            date: "4 Haziran 2022",
            duration: "21:00",
            audioUrl: "#"
        },
        {
            id: 3,
            title: "#14 Teknik İflas Nedir?",
            description: "Sistemli Girişimcilik 101 Podcast kanalımızın bu haftaki bölümünde, günümüzdeki birçok şirket için olumsuz sonuçlar doğurabilen aynı zamanda şirketin sona ermesine kadar gidebilen Teknik İflas durumunu anlattık, keyifli dinlemeler.",
            date: "20 Mayıs 2022",
            duration: "6:00",
            audioUrl: "#"
        },
        {
            id: 4,
            title: "#13 Bölüm 2 /jobtogo Şirketler Neden Freelancerlar ile Çalışmalı?",
            description: "Şirketlerin freelancer platformu olarak kendini tanımlayan jobtogo, değişen çalışma şekillerine hızlı adapte olmak isteyen şirketlere sunduğu çözümler sayesinde, şirketlerin daha hafif ve dinamik yapılara sahip olmasını sağlıyor. Kurucu Ortaklar Güneş ve Begüm girişimleri jobtogo'yu tanıttıkları bu bölümü keyifle dinlemenizi umuyoruz!",
            date: "29 Nisan 2022",
            duration: "5:00",
            audioUrl: "#"
        },
        {
            id: 5,
            title: "#12 Bölüm 1 /jobtogo Nedir?",
            description: "Şirketlerin freelancer platformu olarak kendini tanımlayan jobtogo, değişen çalışma şekillerine hızlı adapte olmak isteyen şirketlere sunduğu çözümler sayesinde, şirketlerin daha hafif ve dinamik yapılara sahip olmasını sağlıyor. Kurucu Ortaklar Güneş ve Begüm girişimleri jobtogo'yu tanıttıkları bu bölümü keyifle dinlemenizi umuyoruz!",
            date: "15 Nisan 2022",
            duration: "12:00",
            audioUrl: "#"
        },
        {
            id: 6,
            title: "#11 Fikri ve Sınai Haklar-Patent ve Faydalı Modeller",
            description: "Sistem'li Girişimcilik 101'in 11. bölümünde 'Fikri ve Sınai Haklar-Patent ve Faydalı Modeller' hakkında önemli ipuçlarından bahsettik.",
            date: "18 Mart 2022",
            duration: "9:00",
            audioUrl: "#"
        },
        {
            id: 7,
            title: "#10 Estonya'da Girişimcilik Ekosistemine Bakış",
            description: "Birçok unicorn'a ev sahipliği yapan Estonya, e-oturum uygulamasıyla son yıllarda globalleşmek isteyen girişimcilerin dikkatini çekiyor. Estonya'daki dijital vatandaşlık uygulaması ve girişimciler için neden önemli bir Pazar olduğundan bahsettiğimiz yayınımızı keyifle dinlemenizi umuyoruz!",
            date: "5 Kasım 2021",
            duration: "5:00",
            audioUrl: "#"
        },
        {
            id: 8,
            title: "#9 Türkiye'de Girişimcilik Ekosistemi",
            description: "Sistemli Girişimcilik 101'in 9'uncu bölümünde Türkiye'de girişimciliğin ekosistemi hakkında önemli ipuçlarından bahsettik.",
            date: "29 Ekim 2021",
            duration: "3:00",
            audioUrl: "#"
        },
        {
            id: 9,
            title: "#8 Başarılı Bir Girişim Olabilmenin İpuçları",
            description: "Sistem Girişimcilik 101'in 8'inci bölümünde başarılı bir girişime sahip olabilmek için neler yapılması gerektiğine dair önemli ipuçlarından bahsettik.",
            date: "22 Ekim 2021",
            duration: "3:00",
            audioUrl: "#"
        },
        {
            id: 10,
            title: "#7 Taşınmaz Satış Kazancı İstisnası",
            description: "Sistemli Girişimcilik 101'in 7'inci bölümünde girişimciler ve yatırımcılar için fazlasıyla önemli olan Taşınmaz Satış Kazancı İstisnası'ndan bahsettik.",
            date: "14 Ekim 2021",
            duration: "5:00",
            audioUrl: "#"
        },
        {
            id: 11,
            title: "#6 Ar-Ge ve Tasarım Merkezlerindeki Teşvik Mekanizmaları",
            description: "Sistemli Girişimcilik 101 podcast programımızın bu bölümünde Ar-Ge ve Tasarım merkezlerinde uygulanan Ar-Ge ve Tasarım indirimi, gelir vergisi stopaj desteği, SGK primi işveren desteği ve damga vergisi desteği gibi teşvik mekanizmalarından bahsettik.",
            date: "1 Ekim 2021",
            duration: "3:00",
            audioUrl: "#"
        },
        {
            id: 12,
            title: "#5 Birleşik Krallık'ta Girişimcilik",
            description: "Sistemli Girişimcilik 101 adlı podcast programımızın bu bölümünde dünyanın en güçlü ve zengin ülkelerinden Birleşik Krallık'ın, Türkiye'deki girişimciler için niçin harika bir ekosisteme sahip olduğundan bahsettik.",
            date: "24 Eylül 2021",
            duration: "6:00",
            audioUrl: "#"
        }
    ]
};

const PodcastPage = () => {
    const [currentEpisode, setCurrentEpisode] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(70);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handlePlayPause = (episode) => {
        if (currentEpisode?.id === episode.id) {
            setIsPlaying(!isPlaying);
        } else {
            setCurrentEpisode(episode);
            setIsPlaying(true);
            setCurrentTime(0);
        }
    };

    const formatDuration = (duration) => {
        return duration;
    };

    return (
        <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white pb-32">
            {/* Header */}
            <section className="py-8 border-b border-gray-700/50">
                <div className="container mx-auto px-6">
                    <Link
                        to="/medya"
                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Medya & İçerikler
                    </Link>
                </div>
            </section>

            {/* Show Header */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        {/* Cover Art */}
                        <div className="w-full lg:w-80 shrink-0">
                            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
                                <img
                                    src={podcastData.coverImage}
                                    alt={podcastData.showTitle}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Show Info */}
                        <div className="flex-1">
                            <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                                <Mic size={16} />
                                Podcast
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                                {podcastData.showTitle}
                            </h1>
                            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl">
                                {podcastData.showDescription}
                            </p>
                            <div className="flex items-center gap-6 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <TrendingUp size={16} className="text-primary" />
                                    <span className="font-bold">{podcastData.episodes.length} Bölüm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Episodes List */}
            <section className="py-8">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-black mb-6">Tüm Bölümler</h2>
                    <div className="space-y-2">
                        {podcastData.episodes.map((episode, idx) => (
                            <motion.div
                                key={episode.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.03 }}
                                className={`group flex items-center gap-4 p-4 rounded-2xl transition-all cursor-pointer ${currentEpisode?.id === episode.id
                                        ? 'bg-gray-700/50'
                                        : 'hover:bg-gray-800/50'
                                    }`}
                                onClick={() => handlePlayPause(episode)}
                            >
                                {/* Play Button */}
                                <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 hover:scale-110 transition-transform">
                                    {currentEpisode?.id === episode.id && isPlaying ? (
                                        <Pause size={20} className="text-white fill-white" />
                                    ) : (
                                        <Play size={20} className="text-white fill-white ml-1" />
                                    )}
                                </button>

                                {/* Episode Info */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-black text-white group-hover:text-primary transition-colors mb-1 truncate">
                                        {episode.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 line-clamp-2">
                                        {episode.description}
                                    </p>
                                </div>

                                {/* Meta */}
                                <div className="hidden md:flex items-center gap-6 text-sm text-gray-400 shrink-0">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} />
                                        <span>{episode.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={14} />
                                        <span>{formatDuration(episode.duration)}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Player Bar (Fixed Bottom) */}
            <AnimatePresence>
                {currentEpisode && (
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700 z-50"
                    >
                        <div className="container mx-auto px-6 py-4">
                            {/* Progress Bar */}
                            <div className="mb-4">
                                <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary rounded-full transition-all"
                                        style={{ width: `${(currentTime / 100) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-6">
                                {/* Episode Info */}
                                <div className="flex items-center gap-4 flex-1 min-w-0">
                                    <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 hidden sm:block">
                                        <img
                                            src={podcastData.coverImage}
                                            alt={currentEpisode.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="font-black text-white text-sm truncate">
                                            {currentEpisode.title}
                                        </h4>
                                        <p className="text-xs text-gray-400">
                                            {podcastData.showTitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Controls */}
                                <div className="flex items-center gap-4">
                                    <button className="w-10 h-10 rounded-full hover:bg-gray-700 flex items-center justify-center transition-colors">
                                        <SkipBack size={20} className="text-gray-300" />
                                    </button>
                                    <button
                                        onClick={() => setIsPlaying(!isPlaying)}
                                        className="w-12 h-12 rounded-full bg-white hover:scale-110 flex items-center justify-center transition-transform"
                                    >
                                        {isPlaying ? (
                                            <Pause size={24} className="text-black fill-black" />
                                        ) : (
                                            <Play size={24} className="text-black fill-black ml-1" />
                                        )}
                                    </button>
                                    <button className="w-10 h-10 rounded-full hover:bg-gray-700 flex items-center justify-center transition-colors">
                                        <SkipForward size={20} className="text-gray-300" />
                                    </button>
                                </div>

                                {/* Volume */}
                                <div className="hidden lg:flex items-center gap-3 w-32">
                                    <Volume2 size={20} className="text-gray-400" />
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={volume}
                                        onChange={(e) => setVolume(e.target.value)}
                                        className="flex-1 h-1 bg-gray-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PodcastPage;
