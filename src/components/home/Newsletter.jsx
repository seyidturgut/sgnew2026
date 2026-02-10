import React, { useState } from 'react'
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react'

const Newsletter = () => {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('idle') // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')

        // TODO: Implement actual API call
        setTimeout(() => {
            setStatus('success')
            setEmail('')
            setTimeout(() => setStatus('idle'), 3000)
        }, 1000)
    }

    return (
        <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            {/* Left Column - Text */}
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                    Günceli yakalamak için bültenimize abone olabilirsiniz.
                                </h2>
                                <p className="text-gray-600">
                                    Sektördeki son gelişmeler, teşvikler ve etkinliklerimizden haberdar olun.
                                </p>
                            </div>

                            {/* Right Column - Form */}
                            <div>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <div className="flex-1 relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="E-posta adresiniz"
                                                required
                                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 placeholder-gray-400"
                                                disabled={status === 'loading'}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg hover:shadow-xl"
                                        >
                                            {status === 'loading' ? 'Gönderiliyor...' : 'Abone Ol'}
                                        </button>
                                    </div>

                                    {/* Status Messages */}
                                    {status === 'success' && (
                                        <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-lg">
                                            <CheckCircle2 size={20} />
                                            <span className="text-sm font-medium">Teşekkürler! Bültenimize başarıyla abone oldunuz.</span>
                                        </div>
                                    )}

                                    {status === 'error' && (
                                        <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg">
                                            <AlertCircle size={20} />
                                            <span className="text-sm font-medium">Bir hata oluştu. Lütfen tekrar deneyin.</span>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
