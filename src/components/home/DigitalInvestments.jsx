import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const DigitalInvestments = () => {
    const logos = [
        "/assets/images/dijital-urunler/argera.webp",
        "/assets/images/dijital-urunler/xe-danisman-logo.png",
        "/assets/images/dijital-urunler/legalmatic.png",
        "/assets/images/dijital-urunler/siba.webp",
        "/assets/images/dijital-urunler/sparkslogo.png",
        "/assets/images/dijital-urunler/wecover.webp",
        "/assets/images/dijital-urunler/ratingvalue.webp",
        "/assets/images/dijital-urunler/Regtech_Logo2.svg"
    ]

    return (
        <section className="py-20 overflow-hidden">
            <div className="container mx-auto px-4 mb-12">
                <h2 className="text-4xl font-bold text-gray-900">Dijital <span className="text-primary">Yatırımlar</span></h2>
            </div>

            <div className="relative">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={2}
                    loop={true}
                    speed={3000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                    }}
                    className="py-10"
                >
                    {/* Clean infinite loop by duplicating data */}
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <img
                                src={logo}
                                alt="Partner Logo"
                                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 hover:scale-110 transform duration-300"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    )
}

export default DigitalInvestments
