import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ServicePageLayout from '../components/layout/ServicePageLayout'
import {
    CheckCircle2, ArrowRight, Loader2, Star, Target, Award,
    Briefcase, Settings, Zap, ShieldCheck, PieChart, Factory,
    Ship, Cpu, Coins, Globe, TrendingUp, Users, BookOpen, Scale
} from 'lucide-react'

// İkon Haritası - JSON'dan gelen string'i Lucide ikonuna çevirmek için
const IconMap = {
    Star, Target, Award, Briefcase, Settings, Zap, ShieldCheck,
    PieChart, Factory, Ship, Cpu, Coins, Globe, TrendingUp, Users, BookOpen, Scale, ArrowRight
}

const DynamicServicePage = () => {
    const { slug } = useParams()
    const [pageData, setPageData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPageContent = async () => {
            setLoading(true)
            try {
                const response = await fetch(`http://localhost:8888/api/get_service.php?slug=${slug}`)
                if (!response.ok) throw new Error('İçerik yüklenemedi.')
                const data = await response.json()
                setPageData(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchPageContent()
    }, [slug])

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <Loader2 className="animate-spin text-primary" size={48} />
                <p className="text-gray-500 font-medium animate-pulse">İçerik hazırlanıyor...</p>
            </div>
        )
    }

    if (error || !pageData) {
        return (
            <div className="text-center py-32 px-4 max-w-2xl mx-auto space-y-6">
                <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-red-500 mb-8">
                    <Globe size={40} />
                </div>
                <h3 className="text-3xl font-bold text-secondary">Sayfa Bulunamadı</h3>
                <p className="text-gray-500 text-lg">İstediğiniz içerik henüz veritabanına eklenmemiş veya bir bağlantı sorunu oluşmuş olabilir.</p>
                <Link to="/" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-dark transition-all">
                    Ana Sayfaya Dön <ArrowRight size={20} />
                </Link>
            </div>
        )
    }

    const breadcrumb = [
        { label: 'Servisler', href: '/servisler' },
        { label: pageData.category_name, href: `/servisler/${pageData.category_slug}` },
        { label: pageData.title }
    ]

    const renderContent = () => {
        const sections = pageData.content_json.sections || []

        return (
            <div className="space-y-24 pb-20">
                {sections.map((section, index) => {
                    const IconComponent = IconMap[section.icon] || Star

                    switch (section.type) {
                        case 'hero_intro':
                            return (
                                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                    <div className="space-y-8">
                                        {section.badge && (
                                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-bold uppercase tracking-tighter">
                                                <IconComponent size={16} /> {section.badge}
                                            </div>
                                        )}
                                        <div className="space-y-4">
                                            <h2 className="text-4xl lg:text-5xl font-bold text-secondary leading-tight tracking-tight">
                                                {section.title} <br />
                                                <span className="text-primary italic font-serif">{section.title_highlight}</span>
                                            </h2>
                                            <p className="text-xl text-gray-600 leading-relaxed font-light">
                                                {section.description}
                                            </p>
                                        </div>
                                        {section.features && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium">
                                                {section.features.map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <CheckCircle2 size={18} className="text-primary shrink-0" />
                                                        <span className="text-gray-700">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl group-hover:bg-primary/10 transition-all"></div>
                                        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 bg-black">
                                            {pageData.youtube_id ? (
                                                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${pageData.youtube_id}`} frameBorder="0" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
                                            ) : (
                                                <img src={pageData.hero_image} alt={pageData.title} className="w-full h-full object-cover" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )

                        case 'icon_grid':
                            return (
                                <div key={index} className="space-y-12">
                                    <h3 className="text-3xl font-bold text-secondary border-l-4 border-primary pl-6">{section.title}</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {section.items.map((item, i) => {
                                            const ItemIcon = IconMap[item.icon] || CheckCircle2
                                            return (
                                                <div key={i} className="group p-8 bg-white rounded-[2rem] border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all">
                                                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                                        <ItemIcon size={24} />
                                                    </div>
                                                    <h4 className="text-lg font-bold text-secondary mb-3">{item.title}</h4>
                                                    <p className="text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )

                        case 'process_steps':
                            return (
                                <div key={index} className="space-y-16">
                                    <div className="text-center max-w-2xl mx-auto space-y-4">
                                        <h3 className="text-3xl font-bold text-secondary">{section.title}</h3>
                                        <p className="text-gray-500">{section.description}</p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {section.steps.map((step, i) => (
                                            <div key={i} className="relative group p-6">
                                                <div className="text-6xl font-black text-gray-100 group-hover:text-primary/5 absolute top-0 left-0 -z-10 transition-all">0{i + 1}</div>
                                                <h4 className="font-bold text-secondary mb-3 mt-4">{step.title}</h4>
                                                <p className="text-sm text-gray-500 leading-relaxed font-light">{step.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )

                        case 'data_table':
                            return (
                                <div key={index} className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                                    <div className="bg-gray-50 px-8 py-6 border-b border-gray-100 flex justify-between items-center">
                                        <h4 className="font-bold text-secondary">{section.title}</h4>
                                        <span className="text-xs text-gray-400 font-medium italic">{section.subtitle}</span>
                                    </div>
                                    <table className="w-full text-left">
                                        <tbody className="divide-y divide-gray-100">
                                            {section.rows.map((row, i) => (
                                                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="px-8 py-4 text-sm font-medium text-gray-700">{row.label}</td>
                                                    <td className="px-8 py-4 text-sm font-black text-primary text-right">{row.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )

                        case 'rich_text':
                            return (
                                <div key={index} className="bg-gray-50 rounded-[3rem] p-10 lg:p-16 space-y-8">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-secondary">{section.title}</h3>
                                    <div className="text-gray-700 leading-relaxed text-lg font-light space-y-4 prose prose-primary max-w-none" dangerouslySetInnerHTML={{ __html: section.html }} />
                                </div>
                            )

                        case 'cta_box':
                            return (
                                <div key={index} className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                                        <h3 className="text-3xl lg:text-4xl font-black italic font-serif leading-tight">{section.title}</h3>
                                        <p className="text-white/80 text-lg font-light leading-relaxed">{section.description}</p>
                                        <div className="flex flex-wrap justify-center gap-6">
                                            <button className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl flex items-center gap-3">
                                                {section.button_text} <ArrowRight size={20} />
                                            </button>
                                            {section.secondary_button && (
                                                <button className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold border border-white/10">{section.secondary_button}</button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )

                        default: return null
                    }
                })}
            </div>
        )
    }

    return (
        <ServicePageLayout
            breadcrumb={breadcrumb}
            title={pageData.title}
            titleHighlighted={pageData.title_highlighted}
            content={renderContent()}
            heroImage={pageData.hero_image}
            fullWidth={true}
        />
    )
}

export default DynamicServicePage
