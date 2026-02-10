import React from 'react'

const SuccessStories = () => {
    // Placeholder for now, typically this would be a complex swiper customized
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">Başarı <span className="text-primary">Hikayeleri</span></h2>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-xl relative">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/3 text-center">
                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-orange-100 mb-4">
                                <img src="https://sg2026.ey08.co.uk/wp-content/uploads/2-150x150.jpeg" alt="Seyid Turgut" className="w-full h-full object-cover" />
                            </div>
                            <h4 className="font-bold text-lg">Seyid Turgut</h4>
                            <p className="text-gray-500 text-sm">EY08</p>
                        </div>
                        <div className="md:w-2/3 relative">
                            <svg className="absolute -top-6 -left-6 w-12 h-12 text-orange-200 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.054 15.393 14.7393 16.516 13.9113C17.756 12.9813 18.064 12.0163 17.589 11.2333C17.202 10.5973 16.299 10.4203 15.823 10.4573C14.869 10.5363 13.528 10.5283 12.592 9.59332C11.554 8.55432 11.603 7.02932 12.552 6.08832C13.298 5.34032 14.832 5.09332 16.643 6.90832C19.799 10.0633 22.028 15.7083 20.027 20.7393L20.017 21L14.017 21ZM6.01699 21L6.01699 18C6.01699 16.054 7.39299 14.7393 8.51599 13.9113C9.75599 12.9813 10.064 12.0163 9.58899 11.2333C9.20199 10.5973 8.29899 10.4203 7.82299 10.4573C6.86899 10.5363 5.52799 10.5283 4.59199 9.59332C3.55399 8.55432 3.60299 7.02932 4.55199 6.08832C5.29799 5.34032 6.83299 5.09332 8.64399 6.90832C11.799 10.0633 14.028 15.7083 12.027 20.7393L12.017 21L6.01699 21Z" /></svg>
                            <p className="text-xl italic text-gray-700 leading-relaxed font-medium">
                                "Hamle başvurumuz, Sistem Global'in program gereksinim ve dinamiklerine hakimiyeti sayesinde bakanlıkça onaylandı."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuccessStories
