import React from 'react'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import DigitalInvestments from '../components/home/DigitalInvestments'
import SuccessStories from '../components/home/SuccessStories'
import AnalysisLoop from '../components/home/AnalysisLoop'
import TrainingEvents from '../components/home/TrainingEvents'
import Newsletter from '../components/home/Newsletter'
import BlogSlider from '../components/home/BlogSlider'
import InfoGrid from '../components/home/InfoGrid'

const HomePage = () =\u003e {
    return (
\u003cmain className = "pt-20"\u003e
\u003cHero /\u003e
\u003cServices /\u003e
\u003cDigitalInvestments /\u003e
\u003cSuccessStories /\u003e
\u003cAnalysisLoop /\u003e
\u003cTrainingEvents /\u003e
\u003cNewsletter /\u003e
\u003cBlogSlider /\u003e
\u003cInfoGrid /\u003e
\u003c / main\u003e
    )
}

export default HomePage
