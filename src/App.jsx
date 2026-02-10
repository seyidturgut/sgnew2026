import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import DynamicServicePage from './pages/DynamicServicePage'

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white font-sans text-secondary antialiased">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />

                    {/* TÜM SERVİSLER DİNAMİK OLARAK DB'DEN GELİR */}
                    <Route path="/servisler/:category/:subcategory/:slug" element={<DynamicServicePage />} />
                    <Route path="/servisler/:category/:slug" element={<DynamicServicePage />} />
                    <Route path="/servisler/:slug" element={<DynamicServicePage />} />

                    {/* Fallback for deep nesting if needed */}
                    <Route path="/servisler/*" element={<DynamicServicePage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
