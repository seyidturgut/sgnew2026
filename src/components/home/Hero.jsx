import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import InteractiveCark from './InteractiveCark'

const Hero = () => {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    })

    const rotate = useTransform(scrollYProgress, [0, 1], [0, -60]) // Rotate counter-clockwise

    const handleSectionClick = (sectionId) => {
        console.log(`Clicked section: ${sectionId}`);
        // You can add logic here to open modals or navigate
    };

    return (
        <section ref={targetRef} className="relative w-full pt-4 pb-12 lg:pt-10 lg:pb-24 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/header-bg-v2.webp')" }}>
            <div className="container mx-auto px-4">

                {/* AI Search Bar - Centered Top */}
                <div className="w-full flex justify-center mb-4 lg:mb-6">
                    <div className="ai-search-bar !max-w-[800px] !bg-white/90 !backdrop-blur-md shadow-sm">
                        <div className="ai-icon bg-gradient-to-br from-[#ff8400] to-[#ffb347]" aria-hidden="true">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                                <path d="M12 2.5 9.9 8.1 4.3 10.2 9.9 12.3 12 17.9 14.1 12.3 19.7 10.2 14.1 8.1 12 2.5zM6.2 17.1 5.3 19.7 2.7 20.6 5.3 21.5 6.2 24.1 7.1 21.5 9.7 20.6 7.1 19.7 6.2 17.1zm11.6-2.5-.9 2.6-2.6.9 2.6.9.9 2.6.9-2.6 2.6-.9-2.6-.9-.9-2.6z" />
                            </svg>
                        </div>
                        <div className="ai-placeholder text-gray-400 font-medium">Yapay zeka destekli danışmana sorun...</div>
                        <div className="ai-badge bg-gray-100 text-gray-500 font-bold">AI</div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center min-h-[600px] lg:min-h-[700px]">

                    {/* Left Column */}
                    <div className="w-full lg:w-5/12 flex flex-col gap-6 z-10 pl-4 lg:pl-0">
                        {/* Heading */}
                        <div className="elementor-widget-heading">
                            <h1 className="font-serif text-[42px] leading-[1.1] lg:text-[72px] font-medium text-[#111111] tracking-tight">
                                Yeni pazarlara <br />
                                açılın, daha çok <br />
                                <span className="font-medium">ihracat yapın</span>
                            </h1>
                        </div>

                        {/* Content Paragraph */}
                        <div className="text-gray-600 text-[16px] leading-[1.6] max-w-md font-sans">
                            <p>Ar-Ge projelerinizin planlanmasından yönetimine kadar her aşamada rehberlik ediyoruz. Sistem Global ile yolculuğunuz daha güçlü, daha emin adımlarla ilerler.</p>
                        </div>

                        {/* Button */}
                        <div className="pt-4">
                            <a href="#" className="inline-flex items-center justify-center px-8 py-3.5 bg-[#F37021] text-white rounded-md hover:bg-[#e06010] transition-colors duration-300 font-medium text-sm shadow-md">
                                <span className="">Size Ulaşalım</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column (Image) */}
                    <div className="w-full lg:w-7/12 relative flex justify-center lg:justify-start lg:pl-16">
                        <motion.div
                            style={{ rotate }}
                            className="relative w-full max-w-[750px] mt-8 lg:mt-0 drop-shadow-2xl"
                        >
                            <InteractiveCark onSectionClick={handleSectionClick} />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
