import React, { useState } from 'react'
import { X, Send, MessageCircle } from 'lucide-react'

const ChatBubble = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // API call buraya
        setIsOpen(false)
        setFormData({ name: '', email: '', phone: '', message: '' })
    }

    return (
        <>
            {/* Chat Bubble Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-primary to-orange-400 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 ${isOpen ? 'rotate-90' : ''
                    }`}
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slideUp">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary to-orange-400 p-4 text-white">
                        <h3 className="font-bold text-lg">Hızlı İletişim</h3>
                        <p className="text-sm text-white/90">Size nasıl yardımcı olabiliriz?</p>
                    </div>

                    {/* Content - Single Step Form */}
                    <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="bg-gray-100 rounded-xl p-4 text-sm text-gray-700">
                                👋 Merhaba! Size özel bir teklif hazırlayalım.
                            </div>
                            <input
                                type="text"
                                placeholder="Ad Soyad"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                required
                                autoFocus
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Telefon"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                            <textarea
                                placeholder="Mesajınız (opsiyonel)"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={3}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                            />
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-orange-400 text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                Gönder
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
            `}</style>
        </>
    )
}

export default ChatBubble
