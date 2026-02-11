import json
import os

page_data = {
    "slug": "yonetim-danismanligi-hizmetleri",
    "title": "Yönetim Danışmanlığı",
    "title_highlighted": "Hizmetleri",
    "category": "Finansmana Erişim ve Sürdürülebilirlik",
    "breadcrumb": [
        {"name": "Anasayfa", "link": "/"},
        {"name": "Servisler", "link": "/servisler"},
        {"name": "Finansmana Erişim ve Sürdürülebilirlik", "link": "/servisler/finansmana-erisim-ve-surdurulebilirlik"},
        {"name": "Birleşme ve Satın Alma (M&A)", "link": "/servisler/finansmana-erisim-ve-surdurulebilirlik/birlesme-ve-satin-alma-ma"},
        {"name": "Yönetim Danışmanlığı Hizmetleri", "link": "/servisler/finansmana-erisim-ve-surdurulebilirlik/birlesme-ve-satin-alma-ma/yonetim-danismanligi-hizmetleri"}
    ],
    "hero": {
        "title": "Stratejik Netlik. Operasyonel Disiplin ve Sürdürülebilir İş Sonuçları",
        "description": "Sistem Global, kurumsal liderlerle birlikte stratejik fırsatları sürdürülebilir rekabet avantajına dönüştürmek, performans potansiyelini açığa çıkarmak ve dayanıklı, geleceğe hazır organizasyonlar inşa etmek üzere çalışıyoruz.",
        "image": "/images/servisler/yonetim-danismanligi-hero.webp",
        "buttons": [
            {"text": "İşleminizi Başlatın", "link": "#contact", "variant": "primary"},
            {"text": "Yaklaşımımızı İnceleyin", "link": "#approach", "variant": "outline"}
        ],
        "marks": [
            "Strateji ve Finans Entegrasyonu",
            "Uygulama Odaklı Danışmanlık",
            "Kurumsal Seviye Analitik Titizlik",
            "Sektörler Arası Perspektif"
        ]
    },
    "sections": [
        {
            "id": "intro",
            "type": "content_with_image",
            "title": "Stratejiyi Ölçülebilir Değere Dönüştürüyoruz",
            "content": """
                <p>Günümüz iş ortamında; büyüme hedefleri, operasyonel verimlilik, regülasyon gereklilikleri, dijital dönüşüm ve sürdürülebilirlik öncelikleri eş zamanlı olarak yönetilmek zorundadır. Bu nedenle yönetim danışmanlığı yalnızca stratejik içgörü sunmakla sınırlı kalmamalı; stratejiyi disiplinli uygulamaya ve ölçülebilir değer yaratımına dönüştürmelidir.</p>
                <p>Yönetim Danışmanlığı Hizmetlerimiz; stratejik yönlendirme, finansal disiplin, operasyonel mükemmeliyet, dijital yetkinlik, yönetişim disiplini ve dönüşüm yönetimini bütüncül bir hizmet çerçevesinde entegre eder.</p>
            """,
            "image": "/images/servisler/yonetim-danismanligi-intro.webp",
            "image_position": "right"
        },
        {
            "id": "principles",
            "type": "icon_grid",
            "title": "Danışmanlık İlkelerimiz",
            "description": "Projelerimiz; analitik titizlik, disiplinli uygulama ve uzun vadeli etkiyi güvence altına alan beş temel ilkeye dayanır.",
            "items": [
                {
                    "title": "Veri Temelli Karar Destek",
                    "desc": "Finansal modelleme ve veri odaklı analizlerle şeffaf bir analitik temel oluşturur; yönetici kararlarının objektif kanıtlara dayanmasını sağlarız.",
                    "icon": "LineChart"
                },
                {
                    "title": "Uygulama Odaklı Tasarım",
                    "desc": "Stratejiyi; sıralı inisiyatiflere, net sorumluluk tanımlarına, ölçülebilir KPI’lara ve yapılandırılmış yol haritalarına dönüştürürüz.",
                    "icon": "Zap"
                },
                {
                    "title": "Yönetişim ve Risk Disiplini",
                    "desc": "PMO/TMO çerçeveleri ve değer izleme mekanizmaları kurgular; uygulama riskini azaltır ve hesap verebilirliği güçlendiririz.",
                    "icon": "ShieldCheck"
                },
                {
                    "title": "Entegre Kurumsal Perspektif",
                    "desc": "Strateji, finans, operasyon ve teknoloji; tek bir kurumsal sistemin birbirine bağlı bileşenleri olarak ele alınır.",
                    "icon": "Layers"
                },
                {
                    "title": "Yetkinlik Transferi",
                    "desc": "Bilgi transferi yapar, kurum içi yetkinlikleri güçlendirir ve iyileştirmeleri kurumsallaştırırız.",
                    "icon": "Users"
                }
            ]
        },
        {
            "id": "services",
            "type": "tabs_content",
            "title": "Hizmet Alanlarımız",
            "layout": "side_nav",
            "items": [
                {
                    "label": "Stratejik Planlama",
                    "title": "1. Stratejik Planlama ve Kurumsal Gelişim",
                    "content": """
                        <div class="space-y-6">
                            <p>Üst yönetimi; kurumsal stratejik yönün belirlenmesi, stratejik önceliklerle belirlenmiş sermaye dağılım modelinin oluşturulması ve uzun vadeli hissedar değeri ile pazar konumunu güçlendirecek inisiyatiflerin tasarlanması konularında destekleriz.</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h5 class="font-bold text-secondary mb-2 uppercase text-xs tracking-wider">Kapsam</h5>
                                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                        <li>Kurumsal ve iş birimi stratejisi</li>
                                        <li>Büyüme stratejisi ve pazar genişleme</li>
                                        <li>Portföy ve sermaye dağılım modeli</li>
                                        <li>Senaryo planlama ve risk bazlı stratejik analiz</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="font-bold text-secondary mb-2 uppercase text-xs tracking-wider">Kurumsal Değer</h5>
                                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                        <li>Kurum genelinde net stratejik hizalanma</li>
                                        <li>Disiplinli yatırım önceliklendirmesi</li>
                                        <li>Strateji ile finansal performans arasında güçlü bağ</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    """
                },
                {
                    "label": "Operasyonel Mükemmellik",
                    "title": "2. Operasyonel Mükemmellik ve Performans İyileştirme",
                    "content": """
                        <div class="space-y-6">
                            <p>Üst yönetimle birlikte çalışarak uzun vadeli stratejik yönü belirler, sermaye tahsisini optimize eder ve giderek karmaşıklaşan pazarlarda sürdürülebilir rekabet avantajını güçlendiririz.</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h5 class="font-bold text-secondary mb-2 uppercase text-xs tracking-wider">Kapsam</h5>
                                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                        <li>Kurum genelinde operasyonel teşhis</li>
                                        <li>Tedarik zinciri ve satın alma optimizasyonu</li>
                                        <li>Maliyet dönüşümü ve marj iyileştirme</li>
                                        <li>İşletme sermayesi ve nakit akışı optimizasyonu</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="font-bold text-secondary mb-2 uppercase text-xs tracking-wider">Kurumsal Değer</h5>
                                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                        <li>Sürdürülebilir maliyet verimliliği</li>
                                        <li>Artan operasyonel şeffaflık</li>
                                        <li>Güçlenen marj ve nakit performansı</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    """
                },
                {
                    "label": "Yönetişim & Organizasyon",
                    "title": "3. Organizasyon, Yönetişim ve İnsan Sermayesi",
                    "content": """
                        <div class="space-y-6">
                            <p>Organizasyon tasarımı, yönetişim mimarisi ve liderlik yetkinliklerini uzun vadeli stratejik hedeflerle hizalayarak uygulama mükemmeliyeti ve sürdürülebilir kurumsal değer yaratımını destekleriz.</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h5 class="font-bold text-secondary mb-2 uppercase text-xs tracking-wider">Kapsam</h5>
                                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                        <li>Organizasyon tasarımı ve yeniden yapılandırma</li>
                                        <li>Yönetişim ve karar yetki çerçeveleri</li>
                                        <li>Rol netliği ve hesap verebilirlik modelleri</li>
                                        <li>Değişim yönetimi ve adaptasyon stratejisi</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="font-bold text-secondary mb-2 uppercase text-xs tracking-wider">Kurumsal Değer</h5>
                                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                        <li>Daha hızlı karar alma</li>
                                        <li>Azaltılmış organizasyonel karmaşıklık</li>
                                        <li>Güçlendirilmiş uygulama kapasitesi</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    """
                },
                {
                    "label": "Dijital Strateji",
                    "title": "4. Dijital Strateji ve Teknoloji Yetkinliği",
                    "content": """
                        <div class="space-y-6">
                            <p>Kurumların dijital vizyonunu; disiplinli, kurumsal ölçekli dönüşüm programlarına dönüştürerek sürdürülebilir değer yaratımı ve rekabet avantajı sağlar.</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h5 class="font-bold text-secondary mb-2 uppercase text-xs tracking-wider">Kapsam</h5>
                                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                        <li>Dijital strateji ve dönüşüm yol haritası</li>
                                        <li>Kurumsal mimari tasarımı</li>
                                        <li>Veri ve analitik stratejisi</li>
                                        <li>BT operasyon modeli tasarımı</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="font-bold text-secondary mb-2 uppercase text-xs tracking-wider">Kurumsal Değer</h5>
                                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                        <li>Ölçülebilir dijital değer yaratımı</li>
                                        <li>İş ve BT arasında güçlü hizalanma</li>
                                        <li>Ölçeklenebilir teknoloji altyapısı</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    """
                },
                {
                    "label": "M&A Değer Üretimi",
                    "title": "5. Birleşme ve Satınalmalar (M&A) ve Değer Üretimi",
                    "content": """
                        <div class="space-y-6">
                            <p>İşlem disiplinini güçlendiren, uygulama riskini azaltan ve sürdürülebilir değer gerçekleşmesini hızlandıran uçtan uca işlem danışmanlığı sunarız.</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h5 class="font-bold text-secondary mb-2 uppercase text-xs tracking-wider">Kapsam</h5>
                                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                        <li>İşlem stratejisi ve yatırım tezi</li>
                                        <li>Ticari, operasyonel ve finansal durum tespiti</li>
                                        <li>Birleşme sonrası entegrasyon (PMI)</li>
                                        <li>Carve-out ve ayrıştırma danışmanlığı</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="font-bold text-secondary mb-2 uppercase text-xs tracking-wider">Kurumsal Değer</h5>
                                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                        <li>Artan işlem kalitesi ve disiplin</li>
                                        <li>Azaltılmış entegrasyon riski</li>
                                        <li>Sinerjilerin daha hızlı gerçekleşmesi</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    """
                },
                {
                    "label": "Dönüşüm Yönetimi",
                    "title": "6. Kurumsal Dönüşüm ve Program Yönetişimi",
                    "content": """
                        <div class="space-y-6">
                            <p>Karmaşık ve çok fonksiyonlu dönüşüm programlarını harekete geçirir, yapılandırır ve yönetiriz.</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h5 class="font-bold text-secondary mb-2 uppercase text-xs tracking-wider">Kapsam</h5>
                                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                        <li>Dönüşüm Ofisi (PMO/TMO) kurulumu</li>
                                        <li>İnisiyatif önceliklendirme ve sıralama</li>
                                        <li>Değer izleme ve fayda gerçekleşmesi</li>
                                        <li>Fonksiyonlar arası koordinasyon</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="font-bold text-secondary mb-2 uppercase text-xs tracking-wider">Kurumsal Değer</h5>
                                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                        <li>Artan dönüşüm başarı oranı</li>
                                        <li>Hızlandırılmış değer yakalama</li>
                                        <li>Güçlü paydaş hizalanması</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    """
                },
                {
                    "label": "Risk & Uyum",
                    "title": "7. Kurumsal Risk Yönetimi ve Uyum Danışmanlığı",
                    "content": """
                        <div class="space-y-6">
                            <p>Yönetişim çerçevelerini güçlendirir, iç kontrol ortamlarını sağlamlaştırır ve kurumsal dayanıklılığı artırırız.</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h5 class="font-bold text-secondary mb-2 uppercase text-xs tracking-wider">Kapsam</h5>
                                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                        <li>Kurumsal risk yönetimi çerçeveleri</li>
                                        <li>İç kontrol sistemi tasarımı</li>
                                        <li>Regülasyon uyum programları</li>
                                        <li>Siber güvenlik ve veri yönetişimi</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="font-bold text-secondary mb-2 uppercase text-xs tracking-wider">Kurumsal Değer</h5>
                                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                        <li>Azaltılmış regülasyon riski</li>
                                        <li>Artan şeffaflık ve gözetim</li>
                                        <li>Güçlü kurumsal dayanıklılık</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    """
                }
            ]
        },
        {
            "id": "approach",
            "type": "process_grid",
            "title": "Hizmet Sunum Yaklaşımımız",
            "description": "Sistem Global; veri temelli teşhis, çözüm tasarımı, uygulama yönetişimi ve yetkinlik transferini birleştiren yapılandırılmış, uçtan uca bir metodoloji uygular.",
            "steps": [
                {"title": "Align", "desc": "Hedeflerin, kapsamın ve KPI’ların netleştirilmesi.", "icon": "Target"},
                {"title": "Diagnose", "desc": "Finansal ve operasyonel boyutlarda sağlam veri temeli oluşturulması.", "icon": "Search"},
                {"title": "Design", "desc": "Hedef durum ve detaylı uygulama yol haritasının tanımlanması.", "icon": "Zap"},
                {"title": "Deliver", "desc": "Yapılandırılmış yönetişim ile uygulamanın mobilize edilmesi.", "icon": "TrendingUp"},
                {"title": "Embed", "desc": "İyileştirmelerin kurumsallaştırılması ve yetkinlik transferi.", "icon": "ShieldCheck"}
            ]
        },
        {
            "id": "models",
            "type": "info_list",
            "title": "Çalışma Modellerimiz",
            "items": [
                {"title": "Stratejik Projeler", "desc": "Belirli bir hedef odaklı stratejik danışmanlık projeleri."},
                {"title": "Uygulama Desteği", "desc": "Uçtan uca uygulama ve saha desteği sunan modeller."},
                {"title": "Karma Ekipler", "desc": "Müşteri ekipleriyle ortak teslim modelleri."},
                {"title": "Retainer Yapıları", "desc": "Uzun vadeli danışmanlık ve gözetim mandatları."}
            ]
        },
        {
            "id": "standards",
            "type": "benefits_grid",
            "title": "Profesyonel Standartlarımız",
            "benefits": [
                {"title": "Yönetişim Disiplini", "desc": "Yapılandırılmış yürütme komitesi yönetişimi ve net hesap verebilirlik.", "icon": "Briefcase"},
                {"title": "Performans Takibi", "desc": "KPI bazlı performans ve fayda gerçekleşme takibi.", "icon": "LineChart"},
                {"title": "Risk Yönetimi", "desc": "Entegre risk ve bağımlılık yönetimi ile güvenli uygulama.", "icon": "Shield"},
                {"title": "Veri Gizliliği", "desc": "Güvenli ve gizli veri işleme protokolleri ile tam uyum.", "icon": "Lock"}
            ]
        },
        {
            "id": "why",
            "type": "content_with_image",
            "title": "Neden Sistem Global?",
            "content": """
                <p>Uluslararası yatırım bankaları ve üst düzey danışmanlık firmalarının uyguladığı analitik standartlara bağlıyız. Önerilerimiz sadece raporlarla sınırlı kalmaz; somut performans artışı yaratmak üzere sahada uygulanabilir kurgular içerir.</p>
                <p>Çok disiplinli kadromuz; stratejik vizyonu finansal disiplinle birleştirerek kurumsal değerinizi maksimize eder.</p>
            """,
            "image": "/images/servisler/yonetim-danismanligi-why.webp",
            "image_position": "left"
        },
        {
            "type": "cta_box",
            "title": "Yönetim Kapasitenizi bir Üst Seviyeye Taşıyın",
            "description": "Riskleri erken aşamada görünür kılmak, pazarlık gücü kazanmak ve kapanış sonrası değeri maksimize etmek için uzman ekibimizle görüşün.",
            "button_text": "Uzman Görüşü Alın",
            "secondary_button": "Detaylı Bilgi"
        }
    ]
}

# Ensure directory exists
os.makedirs('public/data', exist_ok=True)

# Write to file
output_path = 'public/data/finansmana-erisim-ve-surdurulebilirlik__birlesme-ve-satin-alma-ma__yonetim-danismanligi-hizmetleri.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(page_data, f, ensure_ascii=False, indent=2)

print(f"✅ Success: {output_path} has been updated with premium UI structure.")
