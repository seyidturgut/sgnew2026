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

function App() {
    return (
        <Router>
            <PasswordProtection>
                <div className="min-h-screen bg-white font-sans text-secondary antialiased">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/servisler" element={<ServicesPage />} />
                        <Route path="/servisler/:category/:subcategory" element={<ServiceDispatcher />} />
                        <Route path="/servisler/:category/:subcategory/:slug" element={<ServiceDispatcher />} />
                        <Route path="/servisler/:category/:slug" element={<ServiceDispatcher />} />
                        <Route path="/servisler/:slug" element={<ServiceDispatcher />} />

                        {/* Fallback for deep nesting if needed */}
                        <Route path="/servisler/*" element={<ServiceDispatcher />} />
                    </Routes>
                    <Footer />
                </div>
            </PasswordProtection>
        </Router>
    )
}

export default App
