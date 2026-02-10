import React, { useState } from 'react'
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react'

const Newsletter = () =\u003e {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('idle') // idle, loading, success, error

    const handleSubmit = async(e) =\u003e {
        e.preventDefault()
setStatus('loading')

// TODO: Implement actual API call
setTimeout(() =\u003e {
    setStatus('success')
            setEmail('')
            setTimeout(() =\u003e setStatus('idle'), 3000)
        }, 1000)
    }

return (
\u003csection className = "py-20 bg-gradient-to-br from-orange-50 to-white"\u003e
\u003cdiv className = "container mx-auto px-4"\u003e
\u003cdiv className = "max-w-4xl mx-auto"\u003e
\u003cdiv className = "bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100"\u003e
\u003cdiv className = "grid lg:grid-cols-2 gap-8 items-center"\u003e
{/* Left Column - Text */ }
\u003cdiv\u003e
\u003ch2 className = "text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight"\u003e
                                    Günceli yakalamak için bültenimize abone olabilirsiniz.
\u003c / h2\u003e
\u003cp className = "text-gray-600"\u003e
                                    Sektördeki son gelişmeler, teşvikler ve etkinliklerimizden haberdar olun.
\u003c / p\u003e
\u003c / div\u003e

{/* Right Column - Form */ }
\u003cdiv\u003e
\u003cform onSubmit = { handleSubmit } className = "space-y-4"\u003e
\u003cdiv className = "flex flex-col sm:flex-row gap-3"\u003e
\u003cdiv className = "flex-1 relative"\u003e
\u003cMail className = "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size = { 20} /\u003e
\u003cinput
type = "email"
value = { email }
onChange = {(e) =\u003e setEmail(e.target.value)}
placeholder = "E-posta adresiniz"
required
className = "w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 placeholder-gray-400"
disabled = { status === 'loading'}
                                            /\u003e
\u003c / div\u003e
\u003cbutton
type = "submit"
disabled = { status === 'loading'}
className = "px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg hover:shadow-xl"
\u003e
{ status === 'loading' ? 'Gönderiliyor...' : 'Abone Ol' }
\u003c / button\u003e
\u003c / div\u003e

{/* Status Messages */ }
{
    status === 'success' \u0026\u0026(
        \u003cdiv className = "flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-lg"\u003e
        \u003cCheckCircle2 size = { 20} /\u003e
        \u003cspan className = "text-sm font-medium"\u003eTeşekkürler! Bültenimize başarıyla abone oldunuz.\u003c / span\u003e
        \u003c / div\u003e
    )
}

{
    status === 'error' \u0026\u0026(
        \u003cdiv className = "flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg"\u003e
        \u003cAlertCircle size = { 20} /\u003e
        \u003cspan className = "text-sm font-medium"\u003eBir hata oluştu.Lütfen tekrar deneyin.\u003c / span\u003e
        \u003c / div\u003e
    )
}
\u003c / form\u003e
\u003c / div\u003e
\u003c / div\u003e
\u003c / div\u003e
\u003c / div\u003e
\u003c / div\u003e
\u003c / section\u003e
    )
}

export default Newsletter
