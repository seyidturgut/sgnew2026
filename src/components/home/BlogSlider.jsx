import React from 'react'

const BlogSlider = () => {
    const posts = [
        {
            title: "Dijital Dönüşüm Nedir? Temel Unsurları Nelerdir?",
            date: "25 Kasım 2025",
            img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Dış Ticarette Sağlanan Teşvikler Nelerdir?",
            date: "13 Kasım 2025",
            img: "https://sg2026.ey08.co.uk/wp-content/uploads/Vergi-Levhasi-Nasil-Alinir-1024x561.webp"
        },
        {
            title: "Vergi Levhası Nasıl Alınır?",
            date: "11 Kasım 2025",
            img: "https://sg2026.ey08.co.uk/wp-content/uploads/Vergi-Levhasi-Nasil-Alinir-1024x561.webp"
        }
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog</h2>
                        <p className="text-gray-600 max-w-xl">
                            İş dünyası, teknoloji, Ar-Ge, mevzuat ve finans alanlarında uzman içerikler sunan Sistem Global Akademi, profesyoneller için eğitim ve bilgi paylaşım platformudur.
                        </p>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-primary uppercase font-bold text-xs tracking-wider border px-4 py-2 rounded-lg border-gray-200 hover:border-primary transition-colors">
                        Tümünü İncele
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                            <div className="relative overflow-hidden h-56">
                                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-medium text-gray-400 mb-2 block">{post.date}</span>
                                <h3 className="font-bold text-lg text-gray-900 leading-snug hover:text-primary transition-colors">
                                    <a href="#">{post.title}</a>
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogSlider
