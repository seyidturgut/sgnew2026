import React from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Logo and Tagline */}
                    <div className="lg:col-span-1">
                        <img src="/logo.png" alt="Sistem Global" className="h-10 mb-6" />
                        <p className="text-gray-500 text-sm leading-relaxed">
                            1996’dan bu güne … yenilikçi iş modelleri ve inovatif dijital çözümlerle katma değerli hizmet sunuyoruz
                        </p>
                    </div>

                    {/* Kurumsal */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-primary">Kurumsal</h3>
                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">Yolculuğumuz</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Yönetim Kurulumuz</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Değerlerimiz</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Vizyon, Misyon</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">KVKK Hakkında</a></li>
                        </ul>
                    </div>

                    {/* İletişim */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-primary">İletişim</h3>
                        <ul className="space-y-4 text-gray-600 text-sm">
                            <li className="flex gap-3">
                                <MapPin size={18} className="text-primary shrink-0" />
                                <span>Eski Büyükdere Cad. Huzur Mh. No:67 4 Levent Plaza Kat:5 34396 Sarıyer</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary shrink-0" />
                                <a href="mailto:info@sistemglobal.com.tr" className="text-primary hover:underline">info@sistemglobal.com.tr</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary shrink-0" />
                                <span>+90 212 709 08 50</span>
                            </li>
                        </ul>
                    </div>

                    {/* Servislerimiz */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-primary">Servislerimiz</h3>
                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">Vergi ve Finans</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Ar-Ge Yönetimi</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Mevzuat ve Uyum</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Globalleşme</a></li>
                        </ul>
                    </div>

                    {/* Ekosistemimiz */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-primary">Ekosistemimiz</h3>
                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">Kobiler</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Mali Müşavirler</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">İş Ortağı Programı</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Yatırım Ağı</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
