import React from 'react'
import { ChevronRight } from 'lucide-react'

const ServicePageLayout = ({
    breadcrumb,
    title,
    titleHighlighted,
    content,
    sidebarTitle = "İletişime Geçin",
    sidebarSubtitle = "Sorularınız için uzmanlarımız size ulaşsın.",
    heroImage = "/chark.webp",
    heroStyle = { backgroundPosition: 'center top', backgroundSize: 'cover' },
    fullWidth = false
}) => {

    const FormSection = ({ isFull = false }) => (
        <div className={`bg-white p-8 rounded-2xl shadow-2xl shadow-gray-200 border-t-[6px] border-primary relative overflow-hidden ${isFull ? 'lg:p-12' : ''}`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/30 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <div className="relative z-10 mb-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900">{sidebarTitle}</h3>
                <p className="text-gray-500 text-sm mt-2">{sidebarSubtitle}</p>
            </div>

            <form className={`space-y-5 relative z-10 ${isFull ? 'max-w-4xl mx-auto' : ''}`}>
                <div className={isFull ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-5'}>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 ml-1">AD SOYAD</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-5 py-3.5 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm placeholder-gray-300" placeholder="Adınız Soyadınız" />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 ml-1">E-POSTA</label>
                        <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-5 py-3.5 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm placeholder-gray-300" placeholder="mail@sirketiniz.com" />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 ml-1">MESAJINIZ</label>
                    <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-5 py-3.5 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm placeholder-gray-300 resize-none" placeholder="Nasıl yardımcı olabiliriz?"></textarea>
                </div>

                <button type="button" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wider">
                    Gönder
                </button>
            </form>
        </div>
    );

    return (
        <div className="bg-white pt-20">
            {/* Breadcrumb Section */}
            <div className="container mx-auto px-4 py-4 border-b border-gray-100">
                <nav className="flex items-center gap-2 text-sm text-gray-500 overflow-x-auto whitespace-nowrap lg:whitespace-normal">
                    <a href="/" className="hover:text-brand transition-colors">Anasayfa</a>
                    {breadcrumb.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
                            {item.href ? (
                                <a href={item.href} className="hover:text-brand transition-colors">{item.label}</a>
                            ) : (
                                <span className="text-gray-400">{item.label}</span>
                            )}
                        </React.Fragment>
                    ))}
                </nav>
            </div>

            {/* Hero Header Area */}
            <div
                className="relative py-12 lg:py-24 border-b border-gray-100 overflow-hidden"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    ...heroStyle
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="w-full lg:w-7/12">
                            <h1 className="text-5xl lg:text-7xl font-serif font-medium leading-[1.05] tracking-tight">
                                <span className="text-primary block mb-1">{title}</span>
                                <span className="text-white block">{titleHighlighted}</span>
                            </h1>
                            <div className="mt-10 flex flex-wrap gap-4">
                                <a href="#content-start" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-bold text-sm shadow-xl shadow-primary/20 transform hover:-translate-y-0.5">
                                    Detayları İnceleyin
                                </a>
                                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg hover:bg-white hover:text-secondary transition-all font-bold text-sm transform hover:-translate-y-0.5">
                                    Hemen Başvurun
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <main className="container mx-auto px-4 py-12 lg:py-20 max-w-7xl">
                <div id="content-start" className={`grid grid-cols-1 ${fullWidth ? 'lg:grid-cols-1' : 'lg:grid-cols-12'} gap-12 lg:gap-16 scroll-mt-24`}>

                    {/* Left/Main Column */}
                    <div className={`${fullWidth ? 'col-span-1' : 'lg:col-span-7'} space-y-12`}>
                        {content}
                    </div>

                    {/* Sidebar Column (Only if not fullWidth) */}
                    {!fullWidth && (
                        <div id="contact-form" className="lg:col-span-5 scroll-mt-24">
                            <div className="sticky top-24 space-y-8">
                                <FormSection />
                                <div className="bg-secondary text-white p-8 rounded-2xl text-center">
                                    <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold mb-2">Hemen Arayın</p>
                                    <a href="tel:+902127090850" className="text-2xl font-bold block hover:text-primary transition-colors">+90 212 709 08 50</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Bottom CTA Section (Only if fullWidth) */}
                {fullWidth && (
                    <div id="contact-form" className="mt-20 border-t border-gray-100 pt-20 scroll-mt-24">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-4 space-y-6">
                                <h2 className="text-3xl font-bold text-secondary leading-tight">
                                    Size Nasıl <br />
                                    <span className="text-primary">Yardımcı Olabiliriz?</span>
                                </h2>
                                <p className="text-gray-500 leading-relaxed text-lg">
                                    Uzman kadromuzla Ar-Ge ve Tasarım süreçlerinizde global standartlarda danışmanlık sunuyoruz.
                                </p>
                                <div className="bg-gray-50 p-6 rounded-2xl">
                                    <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-1">Hemen Arayın</p>
                                    <a href="tel:+902127090850" className="text-xl font-bold block hover:text-primary transition-colors text-secondary">+90 212 709 08 50</a>
                                </div>
                            </div>
                            <div className="lg:col-span-8">
                                <FormSection isFull={true} />
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}

export default ServicePageLayout
