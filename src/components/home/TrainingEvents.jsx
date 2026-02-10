import React from 'react'
import { Calendar, MapPin, Clock } from 'lucide-react'

const TrainingEvents = () => {
    // Placeholder for events - will be fetched from API/database
    const events = []

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-row justify-center items-center mb-16 gap-1">
                    <h2 className="text-4xl font-bold text-gray-900">Eğitim ve</h2>
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-orange-500">Etkinlikler</h2>
                </div>

                {events.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="bg-white rounded-2xl p-12 max-w-md mx-auto shadow-sm border border-gray-100">
                            <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Calendar className="w-10 h-10 text-primary" />
                            </div>
                            <p className="text-gray-600 text-lg">Yaklaşan etkinlik bulunamadı.</p>
                            <p className="text-gray-400 text-sm mt-2">Yeni etkinliklerimizden haberdar olmak için bültenimize abone olabilirsiniz.</p>
                        </div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                                {event.image && (
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                )}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                                    <div className="space-y-2 text-sm text-gray-500">
                                        {event.date && (
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} className="text-primary" />
                                                <span>{event.date}</span>
                                            </div>
                                        )}
                                        {event.time && (
                                            <div className="flex items-center gap-2">
                                                <Clock size={16} className="text-primary" />
                                                <span>{event.time}</span>
                                            </div>
                                        )}
                                        {event.location && (
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} className="text-primary" />
                                                <span>{event.location}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default TrainingEvents
