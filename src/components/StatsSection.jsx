import React, { useState, useEffect } from 'react'

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        if (hasAnimated) return

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setHasAnimated(true)

                    const startTime = Date.now()
                    const endTime = startTime + duration

                    const updateCount = () => {
                        const now = Date.now()
                        const progress = Math.min((now - startTime) / duration, 1)
                        const currentCount = Math.floor(progress * end)

                        setCount(currentCount)

                        if (now < endTime) {
                            requestAnimationFrame(updateCount)
                        } else {
                            setCount(end)
                        }
                    }

                    requestAnimationFrame(updateCount)
                }
            },
            { threshold: 0.5 }
        )

        const element = document.getElementById(`counter-${end}`)
        if (element) observer.observe(element)

        return () => observer.disconnect()
    }, [end, duration, hasAnimated])

    return (
        <span id={`counter-${end}`} className="tabular-nums">
            {count}{suffix}
        </span>
    )
}

const StatsSection = () => {
    const stats = [
        { value: 15, suffix: "+", label: "Yıl Deneyim" },
        { value: 500, suffix: "+", label: "Başarılı Proje" },
        { value: 98, suffix: "%", label: "Müşteri Memnuniyeti" },
        { value: 50, suffix: "+", label: "Uzman Kadro" }
    ]

    return (
        <div className="bg-gradient-to-br from-secondary via-blue-900 to-secondary py-16 -mx-4 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl lg:text-5xl font-black text-white mb-2">
                                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-white/80 text-sm font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export { AnimatedCounter, StatsSection }
export default StatsSection
