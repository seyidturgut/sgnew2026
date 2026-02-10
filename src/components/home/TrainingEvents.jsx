import React from 'react'
import { Calendar, MapPin, Clock } from 'lucide-react'

const TrainingEvents = () =\u003e {
    // Placeholder for events - will be fetched from API/database
    const events = []

    return (
\u003csection className = "py-20 bg-gray-50"\u003e
\u003cdiv className = "container mx-auto px-4"\u003e
\u003cdiv className = "flex flex-row justify-center items-center mb-16 gap-1"\u003e
\u003ch2 className = "text-4xl font-bold text-gray-900"\u003eEğitim ve\u003c / h2\u003e
\u003ch2 className = "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-orange-500"\u003eEtkinlikler\u003c / h2\u003e
\u003c / div\u003e

{
    events.length === 0 ? (
    \u003cdiv className = "text-center py-16"\u003e
    \u003cdiv className = "bg-white rounded-2xl p-12 max-w-md mx-auto shadow-sm border border-gray-100"\u003e
    \u003cdiv className = "w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6"\u003e
    \u003cCalendar className = "w-10 h-10 text-primary" /\u003e
    \u003c / div\u003e
    \u003cp className = "text-gray-600 text-lg"\u003eYaklaşan etkinlik bulunamadı.\u003c / p\u003e
    \u003cp className = "text-gray-400 text-sm mt-2"\u003eYeni etkinliklerimizden haberdar olmak için bültenimize abone olabilirsiniz.\u003c / p\u003e
    \u003c / div\u003e
    \u003c / div\u003e
                ) : (
    \u003cdiv className = "grid md:grid-cols-2 lg:grid-cols-3 gap-8"\u003e
    {
        events.map((event, index) =\u003e(
            \u003cdiv key = { index } className = "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"\u003e
                                {
                event.image \u0026\u0026(
                    \u003cdiv className = "relative h-48 overflow-hidden"\u003e
                    \u003cimg 
                                            src = { event.image } 
                                            alt = { event.title }
                                            className = "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        /\u003e
                    \u003c/ div\u003e
        )}
    \u003cdiv className = "p-6"\u003e
    \u003ch3 className = "text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors"\u003e{ event.title } \u003c / h3\u003e
    \u003cp className = "text-gray-600 mb-4 line-clamp-2"\u003e{ event.description } \u003c / p\u003e
    \u003cdiv className = "space-y-2 text-sm text-gray-500"\u003e
    {
        event.date \u0026\u0026(
            \u003cdiv className = "flex items-center gap-2"\u003e
            \u003cCalendar size = { 16} className = "text-primary" /\u003e
            \u003cspan\u003e{ event.date }\u003c / span\u003e
            \u003c / div\u003e
        )
    }
    {
        event.time \u0026\u0026(
            \u003cdiv className = "flex items-center gap-2"\u003e
            \u003cClock size = { 16} className = "text-primary" /\u003e
            \u003cspan\u003e{ event.time }\u003c / span\u003e
            \u003c / div\u003e
        )
    }
    {
        event.location \u0026\u0026(
            \u003cdiv className = "flex items-center gap-2"\u003e
            \u003cMapPin size = { 16} className = "text-primary" /\u003e
            \u003cspan\u003e{ event.location }\u003c / span\u003e
            \u003c / div\u003e
        )
    }
    \u003c / div\u003e
    \u003c / div\u003e
    \u003c / div\u003e
                        ))
}
\u003c / div\u003e
                )}
\u003c / div\u003e
\u003c / section\u003e
    )
}

export default TrainingEvents
