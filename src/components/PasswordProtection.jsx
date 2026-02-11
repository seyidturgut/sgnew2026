import React, { useState, useEffect } from 'react';

const PasswordProtection = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [shake, setShake] = useState(false);

    useEffect(() => {
        // Localhost'ta şifre sorma (Geliştirme ortamı)
        // Kullanıcı "sadece github için" dediği için, localhost hariç her yerde soruyoruz.
        const hostname = window.location.hostname;
        if (hostname === 'localhost' || hostname === '127.0.0.1') {
            setIsAuthenticated(true);
            return;
        }

        const auth = localStorage.getItem('sg_gh_auth');
        if (auth === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === 'Sg**2026') {
            localStorage.setItem('sg_gh_auth', 'true');
            setIsAuthenticated(true);
        } else {
            setError('Senin ne işin var bakıyorsun? 👀');
            setShake(true);
            setTimeout(() => setShake(false), 500);
            setPassword('');
        }
    };

    if (isAuthenticated) return children;

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-4 font-sans">
            <div className={`bg-[#1a1a1a] p-8 md:p-12 rounded-3xl shadow-2xl max-w-md w-full border border-gray-800 relative overflow-hidden ${shake ? 'animate-shake' : ''}`}>

                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                <div className="text-center mb-10 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#F37021] to-orange-600 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-3">Güvenli Erişim</h1>
                    <p className="text-gray-500 text-sm">Görüntülemek için erişim kodunu giriniz.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setError('');
                            }}
                            className="w-full bg-[#0d0d0d] border border-gray-700 rounded-xl px-4 py-4 text-white text-lg focus:ring-2 focus:ring-[#F37021] focus:border-transparent outline-none transition-all text-center tracking-widest placeholder-gray-600"
                            placeholder="••••••••"
                            autoFocus
                        />
                    </div>

                    {error && (
                        <div className="bg-red-500/10 text-red-500 p-3 rounded-lg text-center text-sm font-bold border border-red-500/20 animate-pulse">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#F37021] to-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-[1.02] transition-all duration-200"
                    >
                        Giriş Yap
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest font-semibold">Sistem Global Danışmanlık</p>
                </div>
            </div>
            <style>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
                    20%, 40%, 60%, 80% { transform: translateX(4px); }
                }
                .animate-shake {
                    animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
                }
            `}</style>
        </div>
    );
};

export default PasswordProtection;
