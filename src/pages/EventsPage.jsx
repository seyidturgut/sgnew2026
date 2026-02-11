import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Calendar,
    MapPin,
    Clock,
    Users,
    ArrowLeft,
    X,
    Download,
    Share2,
    ChevronLeft,
    ChevronRight,
    Video,
    User
} from 'lucide-react';

// Demo events data
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
        description: "İş dünyasının dijital dönüşüm yolculuğunda en güncel trendler, başarı hikayeleri ve geleceğe dair öngörülerin paylaşılacağı kapsamlı bir zirve.",
        speakers: [
            { name: "Dr. Ahmet Yılmaz", title: "CEO, TechCorp", avatar: "https://i.pravatar.cc/100?img=12" },
            { name: "Ayşe Demir", title: "CTO, InnovateTech", avatar: "https://i.pravatar.cc/100?img=45" }
        ],
        agenda: [
            { time: "09:00 - 10:00", title: "Kayıt ve Kahvaltı" },
            { time: "10:00 - 11:30", title: "Açılış Konuşması: Dijital Dönüşümün Geleceği" },
            { time: "11:30 - 13:00", title: "Panel: Yapay Zeka ve İş Süreçleri" },
            { time: "13:00 - 14:00", title: "Öğle Yemeği" },
            { time: "14:00 - 16:00", title: "Workshop: Bulut Teknolojileri" },
            { time: "16:00 - 18:00", title: "Networking ve Kapanış" }
        ]
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
        description: "Ar-Ge teşvik mekanizmalarını detaylı olarak ele alan, başvuru süreçlerini adım adım anlatan kapsamlı bir eğitim programı.",
        speakers: [
            { name: "Mehmet Kaya", title: "Ar-Ge Danışmanı", avatar: "https://i.pravatar.cc/100?img=33" }
        ],
        agenda: [
            { time: "14:00 - 15:00", title: "Ar-Ge Teşvik Sistemine Giriş" },
            { time: "15:00 - 16:30", title: "Başvuru Süreçleri ve Gerekli Belgeler" },
            { time: "16:30 - 17:00", title: "Kahve Molası" },
            { time: "17:00 - 18:00", title: "Soru & Cevap" }
        ]
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
        description: "Transfer fiyatlandırması uygulamalarını, mevzuat değişikliklerini ve pratik örnekleri içeren interaktif bir workshop.",
        speakers: [
            { name: "Prof. Zeynep Arslan", title: "Vergi Hukuku Uzmanı", avatar: "https://i.pravatar.cc/100?img=47" }
        ],
        agenda: [
            { time: "10:00 - 11:30", title: "Transfer Fiyatlandırması Temelleri" },
            { time: "11:30 - 13:00", title: "Vaka Çalışmaları" },
            { time: "13:00 - 14:00", title: "Öğle Arası" },
            { time: "14:00 - 16:00", title: "Pratik Uygulamalar" }
        ]
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
        description: "Girişim sermayesi ve yatırım fonları ekosistemini detaylı olarak inceleyen, yatırımcı ve girişimcileri buluşturan bir seminer.",
        speakers: [
            { name: "Can Öztürk", title: "Fon Yöneticisi", avatar: "https://i.pravatar.cc/100?img=51" },
            { name: "Elif Şahin", title: "Angel Investor", avatar: "https://i.pravatar.cc/100?img=26" }
        ],
        agenda: [
            { time: "13:00 - 14:00", title: "Yatırım Fonları Ekosistemi" },
            { time: "14:00 - 15:30", title: "Başarılı Yatırım Hikayeleri" },
            { time: "15:30 - 16:00", title: "Networking Kahve Molası" },
            { time: "16:00 - 17:00", title: "Yatırımcı-Girişimci Buluşması" }
        ]
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
        description: "KOBİ'lerin finansman kaynaklarını çeşitlendirmesi, büyüme stratejileri geliştirmesi için tasarlanmış pratik bir eğitim.",
        speakers: [
            { name: "Deniz Yıldız", title: "Finans Danışmanı", avatar: "https://i.pravatar.cc/100?img=68" }
        ],
        agenda: [
            { time: "09:30 - 11:00", title: "Finansman Kaynakları" },
            { time: "11:00 - 12:30", title: "Kredi ve Teşvik Mekanizmaları" },
            { time: "12:30 - 13:30", title: "Soru & Cevap" }
        ]
    },
    {
        id: 6,
        title: "Blockchain ve Fintech Konferansı",
        date: "2026-05-02",
        time: "10:00 - 19:00",
        location: "Ankara Kongre Merkezi",
        type: "Konferans",
        capacity: 300,
        registered: 198,
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
        description: "Blockchain teknolojisi ve fintech inovasyonlarının iş dünyasına etkilerini ele alan, sektör liderlerini bir araya getiren konferans.",
        speakers: [
            { name: "Cem Aydın", title: "Blockchain Uzmanı", avatar: "https://i.pravatar.cc/100?img=14" },
            { name: "Selin Kara", title: "Fintech Girişimci", avatar: "https://i.pravatar.cc/100?img=32" }
        ],
        agenda: [
            { time: "10:00 - 11:00", title: "Kayıt ve Hoşgeldin Kahvesi" },
            { time: "11:00 - 13:00", title: "Blockchain Teknolojisine Giriş" },
            { time: "13:00 - 14:00", title: "Öğle Yemeği" },
            { time: "14:00 - 16:00", title: "Fintech Trendleri ve Uygulamaları" },
            { time: "16:00 - 17:30", title: "Panel: Geleceğin Finansı" },
            { time: "17:30 - 19:00", title: "Networking Kokteyli" }
        ]
    }
];

const EventsPage = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [view, setView] = useState('grid'); // 'grid' or 'calendar'

    useEffect(() => {
        window.scrollTo(0, 0);
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

    const addToCalendar = (event, type) => {
        const startDate = new Date(event.date + 'T' + event.time.split(' - ')[0]);
        const endDate = new Date(event.date + 'T' + event.time.split(' - ')[1]);

        if (type === 'google') {
            const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
            window.open(googleUrl, '_blank');
        } else if (type === 'apple') {
            // ICS file generation would go here
            alert('Apple Calendar entegrasyonu yakında eklenecek');
        }
    };

    const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentMonth);

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Header */}
            <section className="py-12 bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <Link
                        to="/medya"
                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary transition-colors mb-6"
                    >
                        <ArrowLeft size={16} />
                        Medya & İçerikler
                    </Link>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div>
                            <h1 className="text-4xl lg:text-6xl font-black text-secondary mb-2">
                                Eğitim ve Etkinlikler
                            </h1>
                            <p className="text-lg text-gray-500">
                                Seminerler, workshoplar ve eğitim programlarımız
                            </p>
                        </div>

                        {/* View Toggle */}
                        <div className="flex gap-2 p-1 bg-white rounded-2xl border border-gray-200">
                            <button
                                onClick={() => setView('grid')}
                                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${view === 'grid' ? 'bg-secondary text-white' : 'text-gray-400 hover:text-secondary'}`}
                            >
                                Liste Görünümü
                            </button>
                            <button
                                onClick={() => setView('calendar')}
                                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${view === 'calendar' ? 'bg-secondary text-white' : 'text-gray-400 hover:text-secondary'}`}
                            >
                                Takvim Görünümü
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calendar View */}
            {view === 'calendar' && (
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-xl shadow-gray-200/50">
                            {/* Calendar Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50">
                                <button
                                    onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
                                    className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <h2 className="text-2xl font-black text-secondary">
                                    {currentMonth.toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' })}
                                </h2>
                                <button
                                    onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
                                    className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>

                            {/* Calendar Grid */}
                            <div className="p-6">
                                {/* Day Headers */}
                                <div className="grid grid-cols-7 gap-4 mb-4">
                                    {['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'].map(day => (
                                        <div key={day} className="text-center text-sm font-bold text-gray-400 uppercase tracking-wider">
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                {/* Calendar Days */}
                                <div className="grid grid-cols-7 gap-4">
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
                                                className={`aspect-square rounded-2xl border p-2 transition-all cursor-pointer ${isToday
                                                        ? 'border-primary bg-primary/5'
                                                        : events.length > 0
                                                            ? 'border-gray-200 bg-gray-50 hover:border-primary hover:shadow-lg'
                                                            : 'border-gray-100 hover:border-gray-200'
                                                    }`}
                                            >
                                                <div className={`text-sm font-bold mb-1 ${isToday ? 'text-primary' : 'text-secondary'}`}>
                                                    {day}
                                                </div>
                                                <div className="space-y-1">
                                                    {events.slice(0, 2).map(event => (
                                                        <div
                                                            key={event.id}
                                                            onClick={() => setSelectedEvent(event)}
                                                            className="text-[10px] font-bold bg-secondary text-white px-2 py-1 rounded-lg truncate hover:bg-primary transition-colors"
                                                        >
                                                            {event.title}
                                                        </div>
                                                    ))}
                                                    {events.length > 2 && (
                                                        <div className="text-[10px] font-bold text-gray-400 px-2">
                                                            +{events.length - 2} daha
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Grid View */}
            {view === 'grid' && (
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {eventsData.map((event, idx) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    onClick={() => setSelectedEvent(event)}
                                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-gray-200/50 transition-all cursor-pointer"
                                >
                                    {/* Event Image */}
                                    <div className="aspect-video overflow-hidden relative">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-secondary text-xs font-bold uppercase tracking-wider">
                                                {event.type}
                                            </span>
                                        </div>
                                        {event.location.includes('Online') && (
                                            <div className="absolute top-4 right-4">
                                                <div className="w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                                                    <Video size={18} className="text-white" />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Event Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-black text-secondary group-hover:text-primary transition-colors mb-4 leading-tight">
                                            {event.title}
                                        </h3>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center gap-3 text-sm text-gray-500">
                                                <Calendar size={16} className="text-primary" />
                                                <span className="font-medium">
                                                    {new Date(event.date).toLocaleDateString('tr-TR', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric'
                                                    })}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-gray-500">
                                                <Clock size={16} className="text-primary" />
                                                <span className="font-medium">{event.time}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-gray-500">
                                                <MapPin size={16} className="text-primary" />
                                                <span className="font-medium">{event.location}</span>
                                            </div>
                                        </div>

                                        {/* Capacity Bar */}
                                        <div className="mb-4">
                                            <div className="flex items-center justify-between text-xs font-bold text-gray-400 mb-2">
                                                <span className="flex items-center gap-1">
                                                    <Users size={12} />
                                                    {event.registered} / {event.capacity} Katılımcı
                                                </span>
                                                <span>{Math.round((event.registered / event.capacity) * 100)}%</span>
                                            </div>
                                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-primary to-orange-600 rounded-full transition-all"
                                                    style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        <button className="w-full py-3 bg-secondary text-white rounded-xl font-bold hover:bg-gray-900 transition-colors">
                                            Detayları Görüntüle
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Event Detail Modal */}
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                        onClick={() => setSelectedEvent(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[3rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        >
                            {/* Modal Header with Image */}
                            <div className="relative">
                                <div className="aspect-[21/9] overflow-hidden rounded-t-[3rem]">
                                    <img
                                        src={selectedEvent.image}
                                        alt={selectedEvent.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <button
                                    onClick={() => setSelectedEvent(null)}
                                    className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                                >
                                    <X size={20} className="text-secondary" />
                                </button>
                                <div className="absolute bottom-6 left-6">
                                    <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-secondary text-sm font-bold uppercase tracking-wider">
                                        {selectedEvent.type}
                                    </span>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8 lg:p-12">
                                <h2 className="text-3xl lg:text-5xl font-black text-secondary mb-6 leading-tight">
                                    {selectedEvent.title}
                                </h2>

                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    {selectedEvent.description}
                                </p>

                                {/* Event Info Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-gray-50 rounded-2xl p-6">
                                        <Calendar size={24} className="text-primary mb-3" />
                                        <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Tarih</div>
                                        <div className="text-lg font-black text-secondary">
                                            {new Date(selectedEvent.date).toLocaleDateString('tr-TR', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded-2xl p-6">
                                        <Clock size={24} className="text-primary mb-3" />
                                        <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Saat</div>
                                        <div className="text-lg font-black text-secondary">{selectedEvent.time}</div>
                                    </div>
                                    <div className="bg-gray-50 rounded-2xl p-6">
                                        <MapPin size={24} className="text-primary mb-3" />
                                        <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Konum</div>
                                        <div className="text-lg font-black text-secondary">{selectedEvent.location}</div>
                                    </div>
                                </div>

                                {/* Speakers */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-black text-secondary mb-6">Konuşmacılar</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {selectedEvent.speakers.map((speaker, idx) => (
                                            <div key={idx} className="flex items-center gap-4 bg-gray-50 rounded-2xl p-6">
                                                <img
                                                    src={speaker.avatar}
                                                    alt={speaker.name}
                                                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                                                />
                                                <div>
                                                    <div className="font-black text-secondary text-lg">{speaker.name}</div>
                                                    <div className="text-sm text-gray-500 font-medium">{speaker.title}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Agenda */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-black text-secondary mb-6">Etkinlik Programı</h3>
                                    <div className="space-y-3">
                                        {selectedEvent.agenda.map((item, idx) => (
                                            <div key={idx} className="flex gap-4 items-start bg-gray-50 rounded-2xl p-6">
                                                <div className="shrink-0 w-24 text-sm font-black text-primary">
                                                    {item.time}
                                                </div>
                                                <div className="font-bold text-secondary">
                                                    {item.title}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="flex-1 py-4 bg-secondary text-white rounded-2xl font-bold hover:bg-gray-900 transition-colors">
                                        Kayıt Ol
                                    </button>
                                    <button
                                        onClick={() => addToCalendar(selectedEvent, 'google')}
                                        className="flex-1 py-4 bg-white border-2 border-gray-200 text-secondary rounded-2xl font-bold hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Download size={18} />
                                        Google Takvim
                                    </button>
                                    <button className="py-4 px-6 bg-white border-2 border-gray-200 text-secondary rounded-2xl font-bold hover:border-primary hover:text-primary transition-colors">
                                        <Share2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EventsPage;
