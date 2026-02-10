import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import DynamicServicePage from './pages/DynamicServicePage'

// RECONSTRUCTED STATIC IMPORTS (DEDUPLICATED)
import AileAnayasasi from './pages/mevzuat-ve-uyum/AileAnayasasi'
import AileAnayasasiVeKurumsallasmaHizmetleri from './pages/mevzuat-ve-uyum/AileAnayasasiVeKurumsallasmaHizmetleri'
import ArGeTasarimRaporu from './pages/mevzuat-ve-uyum/ArGeTasarimRaporu'
import ArGeVeTasarimIndirimiRaporu from './pages/vergi-finans/vergi/ArGeVeTasarimIndirimiRaporu'
import ArGeVeyasalCerceve from './pages/mevzuat-ve-uyum/ArGeVeyasalCerceve'
import ArGeYonetimiVeYasalCerceveyeUyumDanismanligi from './pages/mevzuat-ve-uyum/ArGeYonetimiVeYasalCerceveyeUyumDanismanligi'
import BirlesmeVeDevralmaMaDanismanligi from './pages/mevzuat-ve-uyum/BirlesmeVeDevralmaMaDanismanligi'
import Birlesmevedevralma from './pages/mevzuat-ve-uyum/Birlesmevedevralma'
import Bordrooutsource from './pages/mevzuat-ve-uyum/Bordrooutsource'
import DahildeIslemeRejimiDanismanligi from './pages/finansmana-erisim-ve-surdurulebilirlik/finansmana-erisim/DahildeIslemeRejimiDanismanligi'
import DueDiligence from './pages/vergi-finans/vergi/DueDiligence'
import ETurquality from './pages/mevzuat-ve-uyum/ETurquality'
import ETurqualityProgrami from './pages/globallesme-ve-ihracat/ETurqualityProgrami'
import FinansalDanismanliklar from './pages/vergi-finans/kurumsal-finansman/FinansalDanismanliklar'
import GenelKurul from './pages/mevzuat-ve-uyum/GenelKurul'
import GenelKurulDanismanligi from './pages/mevzuat-ve-uyum/GenelKurulDanismanligi'
import HalkaArzDanismanligi from './pages/vergi-finans/kurumsal-finansman/HalkaArzDanismanligi'
import IhaleBedeliTespiti from './pages/vergi-finans/kurumsal-finansman/IhaleBedeliTespiti'
import IhracatDanismanligiVeIhracataBaslangic from './pages/globallesme-ve-ihracat/IhracatDanismanligiVeIhracataBaslangic'
import IhracatGelistirme from './pages/globallesme-ve-ihracat/IhracatGelistirme'
import Ihracatdanismanligi from './pages/mevzuat-ve-uyum/Ihracatdanismanligi'
import IsSurecleriVeUyumDanismanligi from './pages/mevzuat-ve-uyum/IsSurecleriVeUyumDanismanligi'
import Issurecleriuyum from './pages/mevzuat-ve-uyum/Issurecleriuyum'
import KdvIade from './pages/vergi-finans/vergi/KdvIade'
import KisiselVeriYonetimiVeUyumDanismanligi from './pages/mevzuat-ve-uyum/KisiselVeriYonetimiVeUyumDanismanligi'
import Kisiselveriyonetimi from './pages/mevzuat-ve-uyum/Kisiselveriyonetimi'
import KosgebDestekleri from './pages/finansmana-erisim-ve-surdurulebilirlik/finansmana-erisim/KosgebDestekleri'
import KurumlarGelirVergisiTasdiki from './pages/mevzuat-ve-uyum/KurumlarGelirVergisiTasdiki'
import KurumlarVeGelirVergisiTasdiki from './pages/vergi-finans/vergi/KurumlarVeGelirVergisiTasdiki'
import MarkaDegerleme from './pages/vergi-finans/kurumsal-finansman/MarkaDegerleme'
import OutsourceBordroYonetimi from './pages/vergi-finans/vergi/OutsourceBordroYonetimi'
import OzelHakVeLisansDegerleme from './pages/vergi-finans/kurumsal-finansman/OzelHakVeLisansDegerleme'
import OzelHakveLisans from './pages/mevzuat-ve-uyum/OzelHakveLisans'
import PayDevri from './pages/mevzuat-ve-uyum/PayDevri'
import PayDevriVePaySahipligiSozlesmeleriDanismanligi from './pages/mevzuat-ve-uyum/PayDevriVePaySahipligiSozlesmeleriDanismanligi'
import PazarAnaliziVeHedefPazarTespiti from './pages/globallesme-ve-ihracat/PazarAnaliziVeHedefPazarTespiti'
import PazaraGirisProjeleriDestegi from './pages/globallesme-ve-ihracat/PazaraGirisProjeleriDestegi'
import Pazaragiris from './pages/mevzuat-ve-uyum/Pazaragiris'
import Pazaranalizi from './pages/mevzuat-ve-uyum/Pazaranalizi'
import RekabetUyum from './pages/mevzuat-ve-uyum/RekabetUyum'
import RekabetUyumVeStratejiDanismanligi from './pages/mevzuat-ve-uyum/RekabetUyumVeStratejiDanismanligi'
import SektorAnalizRaporlari from './pages/vergi-finans/kurumsal-finansman/SektorAnalizRaporlari'
import SgkTesvik from './pages/mevzuat-ve-uyum/SgkTesvik'
import SgkTesvikDanismanligi from './pages/vergi-finans/vergi/SgkTesvikDanismanligi'
import SirketDegerleme from './pages/vergi-finans/kurumsal-finansman/SirketDegerleme'
import SirketKurmaTtkUygulamaVeSicilIsleriDanismanligi from './pages/mevzuat-ve-uyum/SirketKurmaTtkUygulamaVeSicilIsleriDanismanligi'
import SirketKurulusu from './pages/mevzuat-ve-uyum/SirketKurulusu'
import SirketKurulusuDanismanligi from './pages/vergi-finans/vergi/SirketKurulusuDanismanligi'
import SozlesmeRiskYonetimi from './pages/mevzuat-ve-uyum/SozlesmeRiskYonetimi'
import StartupDestek from './pages/mevzuat-ve-uyum/StartupDestek'
import StartupDestekVeUyumDanismanligi from './pages/mevzuat-ve-uyum/StartupDestekVeUyumDanismanligi'
import TeknolojiOdakliSanayiHamlesi from './pages/finansmana-erisim-ve-surdurulebilirlik/finansmana-erisim/TeknolojiOdakliSanayiHamlesi'
import TicaretBakanligiDestekleri from './pages/finansmana-erisim-ve-surdurulebilirlik/finansmana-erisim/TicaretBakanligiDestekleri'
import TicaretBakanligiIhracatDestekleri from './pages/globallesme-ve-ihracat/TicaretBakanligiIhracatDestekleri'
import TransferFiyatlandirmasi from './pages/vergi-finans/vergi/TransferFiyatlandirmasi'
import TubitakDestekleri from './pages/finansmana-erisim-ve-surdurulebilirlik/finansmana-erisim/TubitakDestekleri'
import VergiYonetimDanismanligi from './pages/vergi-finans/vergi/VergiYonetimDanismanligi'
import YatirimTesvikDanismanligi from './pages/finansmana-erisim-ve-surdurulebilirlik/finansmana-erisim/YatirimTesvikDanismanligi'
import YazilimVeTeknoloji from './pages/mevzuat-ve-uyum/YazilimVeTeknoloji'
import YazilimVeTeknolojiDegerleme from './pages/vergi-finans/kurumsal-finansman/YazilimVeTeknolojiDegerleme'
import YurtdisiSirketKurma from './pages/globallesme-ve-ihracat/YurtdisiSirketKurma'

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white font-sans text-secondary antialiased">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />

                    <Route path="/servisler/finansmana-erisim-ve-surdurulebilirlik/finansmana-erisim/ticaret-bakanligi-destekleri" element={<TicaretBakanligiDestekleri />} />
                    <Route path="/servisler/finansmana-erisim-ve-surdurulebilirlik/finansmana-erisim/dahilde-isleme-rejimi-danismanligi" element={<DahildeIslemeRejimiDanismanligi />} />
                    <Route path="/servisler/finansmana-erisim-ve-surdurulebilirlik/finansmana-erisim/kosgeb-destekleri" element={<KosgebDestekleri />} />
                    <Route path="/servisler/finansmana-erisim-ve-surdurulebilirlik/finansmana-erisim/teknoloji-odakli-sanayi-hamlesi" element={<TeknolojiOdakliSanayiHamlesi />} />
                    <Route path="/servisler/finansmana-erisim-ve-surdurulebilirlik/finansmana-erisim/yatirim-tesvik-danismanligi" element={<YatirimTesvikDanismanligi />} />
                    <Route path="/servisler/finansmana-erisim-ve-surdurulebilirlik/finansmana-erisim/tubitak-destekleri" element={<TubitakDestekleri />} />
                    <Route path="/servisler/mevzuat-ve-uyum/rekabet-uyum" element={<RekabetUyum />} />
                    <Route path="/servisler/mevzuat-ve-uyum/is-surecleri-ve-uyum-danismanligi" element={<IsSurecleriVeUyumDanismanligi />} />
                    <Route path="/servisler/mevzuat-ve-uyum/birlesme-ve-devralma-ma-danismanligi" element={<BirlesmeVeDevralmaMaDanismanligi />} />
                    <Route path="/servisler/mevzuat-ve-uyum/e-turquality" element={<ETurquality />} />
                    <Route path="/servisler/mevzuat-ve-uyum/pay-devri-ve-pay-sahipligi-sozlesmeleri-danismanligi" element={<PayDevriVePaySahipligiSozlesmeleriDanismanligi />} />
                    <Route path="/servisler/mevzuat-ve-uyum/kurumlar-gelir-vergisi-tasdiki" element={<KurumlarGelirVergisiTasdiki />} />
                    <Route path="/servisler/mevzuat-ve-uyum/genel-kurul-danismanligi" element={<GenelKurulDanismanligi />} />
                    <Route path="/servisler/mevzuat-ve-uyum/sgk-tesvik" element={<SgkTesvik />} />
                    <Route path="/servisler/mevzuat-ve-uyum/sozlesme-risk-yonetimi" element={<SozlesmeRiskYonetimi />} />
                    <Route path="/servisler/mevzuat-ve-uyum/pazaranalizi" element={<Pazaranalizi />} />
                    <Route path="/servisler/mevzuat-ve-uyum/yazilim-ve-teknoloji" element={<YazilimVeTeknoloji />} />
                    <Route path="/servisler/mevzuat-ve-uyum/ozel-hakve-lisans" element={<OzelHakveLisans />} />
                    <Route path="/servisler/mevzuat-ve-uyum/ar-ge-yonetimi-ve-yasal-cerceveye-uyum-danismanligi" element={<ArGeYonetimiVeYasalCerceveyeUyumDanismanligi />} />
                    <Route path="/servisler/mevzuat-ve-uyum/startup-destek" element={<StartupDestek />} />
                    <Route path="/servisler/mevzuat-ve-uyum/aile-anayasasi-ve-kurumsallasma-hizmetleri" element={<AileAnayasasiVeKurumsallasmaHizmetleri />} />
                    <Route path="/servisler/mevzuat-ve-uyum/sirket-kurma-ttk-uygulama-ve-sicil-isleri-danismanligi" element={<SirketKurmaTtkUygulamaVeSicilIsleriDanismanligi />} />
                    <Route path="/servisler/mevzuat-ve-uyum/startup-destek-ve-uyum-danismanligi" element={<StartupDestekVeUyumDanismanligi />} />
                    <Route path="/servisler/mevzuat-ve-uyum/rekabet-uyum-ve-strateji-danismanligi" element={<RekabetUyumVeStratejiDanismanligi />} />
                    <Route path="/servisler/mevzuat-ve-uyum/kisisel-veri-yonetimi-ve-uyum-danismanligi" element={<KisiselVeriYonetimiVeUyumDanismanligi />} />
                    <Route path="/servisler/mevzuat-ve-uyum/sirket-kurulusu" element={<SirketKurulusu />} />
                    <Route path="/servisler/mevzuat-ve-uyum/ar-ge-veyasal-cerceve" element={<ArGeVeyasalCerceve />} />
                    <Route path="/servisler/mevzuat-ve-uyum/kisiselveriyonetimi" element={<Kisiselveriyonetimi />} />
                    <Route path="/servisler/mevzuat-ve-uyum/pay-devri" element={<PayDevri />} />
                    <Route path="/servisler/mevzuat-ve-uyum/ihracatdanismanligi" element={<Ihracatdanismanligi />} />
                    <Route path="/servisler/mevzuat-ve-uyum/ar-ge-tasarim-raporu" element={<ArGeTasarimRaporu />} />
                    <Route path="/servisler/mevzuat-ve-uyum/birlesmevedevralma" element={<Birlesmevedevralma />} />
                    <Route path="/servisler/mevzuat-ve-uyum/pazaragiris" element={<Pazaragiris />} />
                    <Route path="/servisler/mevzuat-ve-uyum/genel-kurul" element={<GenelKurul />} />
                    <Route path="/servisler/mevzuat-ve-uyum/issurecleriuyum" element={<Issurecleriuyum />} />
                    <Route path="/servisler/mevzuat-ve-uyum/aile-anayasasi" element={<AileAnayasasi />} />
                    <Route path="/servisler/mevzuat-ve-uyum/bordrooutsource" element={<Bordrooutsource />} />
                    <Route path="/servisler/vergi-finans/vergi/kurumlar-ve-gelir-vergisi-tasdiki" element={<KurumlarVeGelirVergisiTasdiki />} />
                    <Route path="/servisler/vergi-finans/vergi/sgk-tesvik-danismanligi" element={<SgkTesvikDanismanligi />} />
                    <Route path="/servisler/vergi-finans/vergi/transfer-fiyatlandirmasi" element={<TransferFiyatlandirmasi />} />
                    <Route path="/servisler/vergi-finans/vergi/sirket-kurulusu-danismanligi" element={<SirketKurulusuDanismanligi />} />
                    <Route path="/servisler/vergi-finans/vergi/ar-ge-ve-tasarim-indirimi-raporu" element={<ArGeVeTasarimIndirimiRaporu />} />
                    <Route path="/servisler/vergi-finans/vergi/kdv-iade" element={<KdvIade />} />
                    <Route path="/servisler/vergi-finans/vergi/vergi-yonetim-danismanligi" element={<VergiYonetimDanismanligi />} />
                    <Route path="/servisler/vergi-finans/vergi/outsource-bordro-yonetimi" element={<OutsourceBordroYonetimi />} />
                    <Route path="/servisler/vergi-finans/vergi/due-diligence" element={<DueDiligence />} />
                    <Route path="/servisler/vergi-finans/kurumsal-finansman/yazilim-ve-teknoloji-degerleme" element={<YazilimVeTeknolojiDegerleme />} />
                    <Route path="/servisler/vergi-finans/kurumsal-finansman/ozel-hak-ve-lisans-degerleme" element={<OzelHakVeLisansDegerleme />} />
                    <Route path="/servisler/vergi-finans/kurumsal-finansman/marka-degerleme" element={<MarkaDegerleme />} />
                    <Route path="/servisler/vergi-finans/kurumsal-finansman/sektor-analiz-raporlari" element={<SektorAnalizRaporlari />} />
                    <Route path="/servisler/vergi-finans/kurumsal-finansman/finansal-danismanliklar" element={<FinansalDanismanliklar />} />
                    <Route path="/servisler/vergi-finans/kurumsal-finansman/ihale-bedeli-tespiti" element={<IhaleBedeliTespiti />} />
                    <Route path="/servisler/vergi-finans/kurumsal-finansman/halka-arz-danismanligi" element={<HalkaArzDanismanligi />} />
                    <Route path="/servisler/vergi-finans/kurumsal-finansman/sirket-degerleme" element={<SirketDegerleme />} />
                    <Route path="/servisler/globallesme-ve-ihracat/ihracat-gelistirme" element={<IhracatGelistirme />} />
                    <Route path="/servisler/globallesme-ve-ihracat/ihracat-danismanligi-ve-ihracata-baslangic" element={<IhracatDanismanligiVeIhracataBaslangic />} />
                    <Route path="/servisler/globallesme-ve-ihracat/ticaret-bakanligi-ihracat-destekleri" element={<TicaretBakanligiIhracatDestekleri />} />
                    <Route path="/servisler/globallesme-ve-ihracat/pazara-giris-projeleri-destegi" element={<PazaraGirisProjeleriDestegi />} />
                    <Route path="/servisler/globallesme-ve-ihracat/yurtdisi-sirket-kurma" element={<YurtdisiSirketKurma />} />
                    <Route path="/servisler/globallesme-ve-ihracat/pazar-analizi-ve-hedef-pazar-tespiti" element={<PazarAnaliziVeHedefPazarTespiti />} />
                    <Route path="/servisler/globallesme-ve-ihracat/e-turquality-programi" element={<ETurqualityProgrami />} />

                    {/* DİNAMİK FALLBACK */}
                    <Route path="/servisler/:category/:subcategory/:slug" element={<DynamicServicePage />} />
                    <Route path="/servisler/:category/:slug" element={<DynamicServicePage />} />
                    <Route path="/servisler/:slug" element={<DynamicServicePage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
