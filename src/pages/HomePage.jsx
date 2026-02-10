import React from 'react'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import DigitalInvestments from '../components/home/DigitalInvestments'
import SuccessStories from '../components/home/SuccessStories'
import AnalysisLoop from '../components/home/AnalysisLoop'
import BlogSlider from '../components/home/BlogSlider'
import InfoGrid from '../components/home/InfoGrid'

const HomePage = () => {
    return (
        <main className="pt-20">
            <Hero />
            <Services />
            <DigitalInvestments />
            <SuccessStories />
            <AnalysisLoop />
            <BlogSlider />
            <InfoGrid />
        </main>
    )
}

export default HomePage
