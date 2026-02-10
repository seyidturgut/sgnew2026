
import React from 'react'
import ServicePageLayout from '../../../components/layout/ServicePageLayout'
import { motion } from 'framer-motion'
import { Star, Target, Award, Briefcase, Settings, Zap, ShieldCheck, PieChart, Factory, Ship, Cpu, Coins, Globe, TrendingUp, Users, BookOpen, Scale, ArrowRight } from 'lucide-react'

const SirketKurulusuDanismanligi = () => {
    const breadcrumb = [{"label": "Anasayfa", "href": "/"}, {"label": "Şirket Kuruluşu", "href": null}]

    const content = (
        <div className="space-y-16">
            
            <section className="mb-16 transition-all duration-300"><h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 border-l-4 border-primary pl-6">İçerik</h2><div className="prose prose-lg max-w-none text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: `Henüz içerik eklenmedi.` }} /></section>
        </div>
    )

    return (
        <ServicePageLayout
            breadcrumb={breadcrumb}
            title="Şirket Kuruluşu"
            titleHighlighted=""
            heroImage="/chark.webp"
            content={content}
        />
    )
}

export default SirketKurulusuDanismanligi
