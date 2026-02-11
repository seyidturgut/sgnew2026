import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight, Users, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import events from EventsPage
const eventsData = [
    {
        id: 1,
        title: "Dijital Dönüşüm Zirvesi 2026",
        date: "2026-03-15",
        time: "09:00 - 18:00",
        location: "İstanbul Kongre Merkezi",
        type: "Konferans",
        capacity: 500,
        registered: 342,
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
        description: "İş dünyasının dijital dönüşüm yolculuğunda en güncel trendler ve başarı hikayeleri."
    },
    {
        id: 2,
        title: "Ar-Ge Teşvikleri Eğitimi",
        date: "2026-02-22",
        time: "14:00 - 18:00",
        location: "Ankara Ofis",
        type: "Eğitim",
        capacity: 50,
        registered: 38,
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80",
        description: "Ar-Ge teşvik mekanizmalarını detaylı olarak ele alan kapsamlı eğitim programı."
    },
    {
        id: 3,
        title: "Transfer Fiyatlandırması Workshop",
        date: "2026-02-10",
        time: "10:00 - 16:00",
        location: "Online (Zoom)",
        type: "Workshop",
        capacity: 100,
        registered: 87,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
        description: "Transfer fiyatlandırması uygulamalarını içeren interaktif workshop."
    },
    {
        id: 4,
        title: "Yatırım Fonları Semineri",
        date: "2026-03-05",
        time: "13:00 - 17:00",
        location: "İzmir Ofis",
        type: "Seminer",
        capacity: 80,
        registered: 62,
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
        description: "Girişim sermayesi ve yatırım fonları ekosistemini detaylı inceleyen seminer."
    },
    {
        id: 5,
        title: "KOBİ Finansman Stratejileri",
        date: "2026-04-18",
        time: "09:30 - 13:30",
        location: "Bursa Ofis",
        type: "Eğitim",
        capacity: 60,
        registered: 45,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        description: "KOBİ'lerin finansman kaynaklarını çeşitlendirmesi için pratik eğitim."
    },
    {
        id: 6,
        title: "KVKK Uyum Eğitimi",
        date: "2026-05-12",
        time: "10:00 - 17:00",
        location: "Online (Teams)",
        type: "Eğitim",
        capacity: 120,
        registered: 95,
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
        description: "Kişisel verilerin korunması kanununa uyum için kapsamlı eğitim."
    }
];

const TrainingEvents = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % eventsData.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        return { daysInMonth, startingDayOfWeek, year, month };
    };

    const getEventsForDate = (date) => {
        const dateStr = date.toISOString().split('T')[0];
        return eventsData.filter(event => event.date === dateStr);
    };

    const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentMonth);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % eventsData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + eventsData.length) % eventsData.length);
    };

    // Get 3 visible events (current, next, next+1)
    const getVisibleEvents = () => {
        const events = [];
        for (let i = 0; i < 3; i++) {
            events.push(eventsData[(currentIndex + i) % eventsData.length]);
        }
        return events;
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <div className="flex flex-row items-center gap-2 mb-2">
                            <h2 className="text-4xl lg:text-5xl font-black text-secondary">Eğitim ve</h2>
                            <h2 className="text-4xl lg:text-5xl font-black text-primary">Etkinlikler</h2>
                        </div>
                        <p className="text-gray-500 text-lg">Yaklaşan seminerler, workshoplar ve eğitim programları</p>
                    </div>
                    <Link
                        to="/medya/egitim-ve-etkinlikler"
                        className="px-6 py-3 bg-secondary text-white rounded-xl font-bold hover:bg-gray-900 transition-colors"
                    >
                        Tüm Etkinlikler
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Calendar - Left Side */}
                    <div className="lg:col-span-4">
                        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 h-full flex flex-col">
                            {/* Calendar Header */}
                            <div className="flex items-center justify-between mb-6">
                                <button
                                    onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
                                    className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
                                >
                                    <ChevronLeft size={20} className="text-secondary" />
                                </button>
                                <h3 className="text-xl font-black text-secondary">
                                    {currentMonth.toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' })}
                                </h3>
                                <button
                                    onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
                                    className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
                                >
                                    <ChevronRight size={20} className="text-secondary" />
                                </button>
                            </div>

                            {/* Day Headers */}
                            <div className="grid grid-cols-7 gap-2 mb-3">
                                {['P', 'P', 'S', 'Ç', 'P', 'C', 'C'].map((day, idx) => (
                                    <div key={idx} className="text-center text-xs font-bold text-gray-400 uppercase">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            {/* Calendar Days */}
                            <div className="grid grid-cols-7 gap-2 flex-1 content-start">
                                {Array.from({ length: startingDayOfWeek }).map((_, idx) => (
                                    <div key={`empty-${idx}`} className="aspect-square"></div>
                                ))}
                                {Array.from({ length: daysInMonth }).map((_, idx) => {
                                    const day = idx + 1;
                                    const date = new Date(year, month, day);
                                    const events = getEventsForDate(date);
                                    const isToday = new Date().toDateString() === date.toDateString();

                                    return (
                                        <div
                                            key={day}
                                            className={`aspect-square rounded-xl flex items-center justify-center text-sm font-bold transition-all cursor-pointer ${isToday
                                                ? 'bg-primary text-white'
                                                : events.length > 0
                                                    ? 'bg-orange-50 text-primary hover:bg-orange-100'
                                                    : 'text-gray-600 hover:bg-gray-50'
                                                }`}
                                        >
                                            <div className="relative">
                                                {day}
                                                {events.length > 0 && !isToday && (
                                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"></div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Legend */}
                            <div className="mt-6 pt-6 border-t border-gray-100 space-y-2">
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                                    <span className="text-gray-600">Bugün</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="w-3 h-3 rounded-full bg-orange-50 border border-primary"></div>
                                    <span className="text-gray-600">Etkinlik var</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Events Carousel - Right Side (3 Cards, Slide 1 by 1) */}
                    <div className="lg:col-span-8">
                        <div className="relative">
                            {/* Carousel Container */}
                            <div className="overflow-hidden">
                                {/* Desktop: 3 cards */}
                                <div className="hidden md:grid md:grid-cols-3 gap-6">
                                    {getVisibleEvents().map((event, idx) => (
                                        <motion.div
                                            key={`${event.id}-${currentIndex}-${idx}`}
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col"
                                        >
                                            {/* Event Image */}
                                            <div className="aspect-[4/3] overflow-hidden relative">
                                                <img
                                                    src={event.image}
                                                    alt={event.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                                <div className="absolute top-3 left-3">
                                                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-secondary text-xs font-bold uppercase tracking-wider">
                                                        {event.type}
                                                    </span>
                                                </div>
                                                {event.location.includes('Online') && (
                                                    <div className="absolute top-3 right-3">
                                                        <div className="w-8 h-8 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                                                            <Video size={14} className="text-white" />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Event Content */}
                                            <div className="p-5 flex flex-col flex-1">
                                                <h3 className="text-lg font-black text-secondary mb-2 leading-tight line-clamp-2">
                                                    {event.title}
                                                </h3>

                                                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2 flex-1">
                                                    {event.description}
                                                </p>

                                                <div className="space-y-2 mb-4">
                                                    <div className="flex items-center gap-2 text-xs">
                                                        <Calendar size={14} className="text-primary" />
                                                        <span className="font-bold text-secondary">
                                                            {new Date(event.date).toLocaleDateString('tr-TR', {
                                                                day: 'numeric',
                                                                month: 'short'
                                                            })}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs">
                                                        <Clock size={14} className="text-primary" />
                                                        <span className="font-bold text-secondary">{event.time}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs">
                                                        <MapPin size={14} className="text-primary" />
                                                        <span className="font-bold text-secondary truncate">{event.location}</span>
                                                    </div>
                                                </div>

                                                {/* Capacity Bar */}
                                                <div className="mb-4">
                                                    <div className="flex items-center justify-between text-xs font-bold text-gray-400 mb-1">
                                                        <span className="flex items-center gap-1">
                                                            <Users size={12} />
                                                            {event.registered}/{event.capacity}
                                                        </span>
                                                        <span>{Math.round((event.registered / event.capacity) * 100)}%</span>
                                                    </div>
                                                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-gradient-to-r from-primary to-orange-600 rounded-full transition-all"
                                                            style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                                                        ></div>
                                                    </div>
                                                </div>

                                                <Link
                                                    to="/medya/egitim-ve-etkinlikler"
                                                    className="inline-flex items-center justify-center w-full py-3 bg-secondary text-white rounded-xl text-sm font-bold hover:bg-gray-900 transition-colors"
                                                >
                                                    Detayları Gör
                                                </Link>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Mobile: 1 card */}
                                <div className="md:hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentIndex}
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{ duration: 0.5 }}
                                            className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col"
                                        >
                                            {(() => {
                                                const event = eventsData[currentIndex];
                                                return (
                                                    <>
                                                        {/* Event Image */}
                                                        <div className="aspect-[4/3] overflow-hidden relative">
                                                            <img
                                                                src={event.image}
                                                                alt={event.title}
                                                                className="w-full h-full object-cover"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                                            <div className="absolute top-3 left-3">
                                                                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-secondary text-xs font-bold uppercase tracking-wider">
                                                                    {event.type}
                                                                </span>
                                                            </div>
                                                            {event.location.includes('Online') && (
                                                                <div className="absolute top-3 right-3">
                                                                    <div className="w-8 h-8 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                                                                        <Video size={14} className="text-white" />
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Event Content */}
                                                        <div className="p-5 flex flex-col flex-1">
                                                            <h3 className="text-lg font-black text-secondary mb-2 leading-tight line-clamp-2">
                                                                {event.title}
                                                            </h3>

                                                            <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2 flex-1">
                                                                {event.description}
                                                            </p>

                                                            <div className="space-y-2 mb-4">
                                                                <div className="flex items-center gap-2 text-xs">
                                                                    <Calendar size={14} className="text-primary" />
                                                                    <span className="font-bold text-secondary">
                                                                        {new Date(event.date).toLocaleDateString('tr-TR', {
                                                                            day: 'numeric',
                                                                            month: 'short'
                                                                        })}
                                                                    </span>
                                                                </div>
                                                                <div className="flex items-center gap-2 text-xs">
                                                                    <Clock size={14} className="text-primary" />
                                                                    <span className="font-bold text-secondary">{event.time}</span>
                                                                </div>
                                                                <div className="flex items-center gap-2 text-xs">
                                                                    <MapPin size={14} className="text-primary" />
                                                                    <span className="font-bold text-secondary truncate">{event.location}</span>
                                                                </div>
                                                            </div>

                                                            {/* Capacity Bar */}
                                                            <div className="mb-4">
                                                                <div className="flex items-center justify-between text-xs font-bold text-gray-400 mb-1">
                                                                    <span className="flex items-center gap-1">
                                                                        <Users size={12} />
                                                                        {event.registered}/{event.capacity}
                                                                    </span>
                                                                    <span>{Math.round((event.registered / event.capacity) * 100)}%</span>
                                                                </div>
                                                                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                                    <div
                                                                        className="h-full bg-gradient-to-r from-primary to-orange-600 rounded-full transition-all"
                                                                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                                                                    ></div>
                                                                </div>
                                                            </div>

                                                            <Link
                                                                to="/medya/egitim-ve-etkinlikler"
                                                                className="inline-flex items-center justify-center w-full py-3 bg-secondary text-white rounded-xl text-sm font-bold hover:bg-gray-900 transition-colors"
                                                            >
                                                                Detayları Gör
                                                            </Link>
                                                        </div>
                                                    </>
                                                );
                                            })()}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Navigation Arrows - Desktop only */}
                            <button
                                onClick={prevSlide}
                                className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl items-center justify-center hover:bg-gray-50 transition-all z-10"
                            >
                                <ChevronLeft size={24} className="text-secondary" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl items-center justify-center hover:bg-gray-50 transition-all z-10"
                            >
                                <ChevronRight size={24} className="text-secondary" />
                            </button>
                        </div>

                        {/* Dots Indicator - Outside carousel */}
                        <div className="flex justify-center gap-2 mt-6">
                            {eventsData.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-2 rounded-full transition-all ${idx === currentIndex
                                        ? 'w-8 bg-primary'
                                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainingEvents;
