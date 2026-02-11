import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PasswordProtection from './components/PasswordProtection'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import SubCategoryPage from './pages/SubCategoryPage'
import DynamicServicePage from './pages/DynamicServicePage'
import ServiceDispatcher from './components/ServiceDispatcher'
import ProductDispatcher from './components/ProductDispatcher'
import EcosystemPage from './pages/EcosystemPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import MediaPage from './pages/MediaPage'
import MediaCategoryPage from './pages/MediaCategoryPage'

function App() {
    return (
        <Router>
            <PasswordProtection>
                <div className="min-h-screen bg-white font-sans text-secondary antialiased">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/ekosistemimiz" element={<EcosystemPage />} />
                        <Route path="/hakkimizda" element={<AboutPage />} />
                        <Route path="/medya" element={<MediaPage />} />
                        <Route path="/medya/:category" element={<MediaCategoryPage />} />
                        <Route path="/medya/:category/:reportSlug" element={<MediaCategoryPage />} />
                        <Route path="/iletisim" element={<ContactPage />} />
                        <Route path="/servisler" element={<ServicesPage />} />
                        <Route path="/servisler/:category/:subcategory" element={<ServiceDispatcher />} />
                        <Route path="/servisler/:category/:subcategory/:slug" element={<ServiceDispatcher />} />
                        <Route path="/servisler/:category/:slug" element={<ServiceDispatcher />} />
                        <Route path="/servisler/:slug" element={<ServiceDispatcher />} />
                        <Route path="/servisler/*" element={<ServiceDispatcher />} />

                        {/* Digital Products Routes */}
                        <Route path="/dijital-urunler/:category/:subcategory/:slug" element={<ProductDispatcher />} />
                        <Route path="/dijital-urunler/:category/:slug" element={<ProductDispatcher />} />
                        <Route path="/dijital-urunler/:slug" element={<ProductDispatcher />} />
                        <Route path="/dijital-urunler/*" element={<ProductDispatcher />} />
                    </Routes>
                    <Footer />
                </div>
            </PasswordProtection>
        </Router>
    )
}

export default App
