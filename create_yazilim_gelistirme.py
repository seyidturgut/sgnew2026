import json
import os

page_data = {
    "slug": "yazilim-gelistirme-hizmetleri",
    "title": "Yazılım Geliştirme Hizmetleri",
    "title_highlighted": "Dijital Dönüşümün Mimarları",
    "category": "Yazılım: Proje ve Ürün Çözümleri",
    "breadcrumb": [
        {"name": "Anasayfa", "link": "/"},
        {"name": "Servisler", "link": "/servisler"},
        {"name": "Yazılım: Proje ve Ürün Çözümleri", "link": "/servisler/yazilim-proje-urun-cozumleri"},
        {"name": "Yazılım Geliştirme Hizmetleri", "link": "/servisler/yazilim-proje-urun-cozumleri/yazilim-gelistirme-hizmetleri"}
    ],
    "hero": {
        "title": "Geleceği Kodluyoruz",
        "description": "Sektör bağımsız; iş süreçlerini dijitalleştiren, ölçeklenebilir ve güvenli özel yazılım çözümleri geliştiriyoruz.",
        "image": "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80",
        "buttons": [
            {"text": "Bize Ulaşın", "link": "/iletisim", "variant": "primary"},
            {"text": "Çözümlerimiz", "link": "#services", "variant": "outline"}
        ],
        "marks": [
            "Ölçeklenebilir Mimari",
            "Güvenli Altyapı",
            "Yapay Zeka Destekli",
            "Uçtan Uca Çözüm"
        ]
    },
    "layout_density": "compact",
    "sections": [
        {
            "id": "intro",
            "type": "intro_text",
            "title": "Vizyonumuz",
            "content": """
                <p>İhtiyaca özel kurgulanan bu çözümler, kurumların bugününü iyileştirirken yarının ihtiyaçlarına da uyum sağlar.</p>
                <p>Sadece yazılım geliştirmiyoruz; ihtiyacı anlayan, doğru çözüme dönüştüren ve uzun vadede yanında duran bir iş ortağı oluyoruz.</p>
            """
        },
        {
            "id": "services",
            "type": "tabs_content",
            "title": "Uzmanlık Alanlarımız",
            "layout": "side_nav",
            "description": "Her biri kendi alanında uzmanlaşmış ekiplerimizle uçtan uca dijital çözümler sunuyoruz.",
            "items": [
                {
                    "label": "Yazılım Geliştirme",
                    "title": "1. Yazılım Geliştirme",
                    "content": """
                        <div class="space-y-6">
                            <h4 className="text-xl font-bold text-secondary">Süreçlerinizi Dijitalleştirin</h4>
                            <p>Müşterilerimizin iş süreçlerini iyileştirmek, verimliliği artırmak ve yenilikçi teknolojilerle entegre çözümler sağlamak için yazılım projelerini sıfırdan veya istediğiniz aşamadan devralarak tasarlayıp geliştiriyoruz.</p>
                            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80" alt="Yazılım Geliştirme" class="w-full h-48 object-cover rounded-xl shadow-sm mb-4" />
                            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h5 class="font-bold text-secondary mb-4">Süreç Adımları</h5>
                                <ul class="space-y-3">
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> İhtiyacı Anlama & Analiz</li>
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> Planlama & Tasarım</li>
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> Geliştirme & Kodlama</li>
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> Test & Güvenlik</li>
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> Yayın Alma & Destek</li>
                                </ul>
                            </div>
                        </div>
                    """
                },
                {
                    "label": "Web & Mobil",
                    "title": "2. Web ve Mobil Uygulama Geliştirme",
                    "content": """
                        <div class="space-y-6">
                            <h4 className="text-xl font-bold text-secondary">Her Platformda Kusursuz Deneyim</h4>
                            <p>Kullanıcı deneyimini merkeze alan, performanslı ve modern web ve mobil uygulamalar geliştiriyoruz.</p>
                            <div class="grid grid-cols-2 gap-4">
                                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80" alt="Mobil Uygulama" class="w-full h-32 object-cover rounded-lg" />
                                <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80" alt="Web Tasarım" class="w-full h-32 object-cover rounded-lg" />
                            </div>
                            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h5 class="font-bold text-secondary mb-4">Çözümler</h5>
                                <ul class="space-y-3">
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> Web tabanlı uygulamalar</li>
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> iOS & Android uyumlu mobil çözümler</li>
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> Responsive ve kullanıcı dostu arayüzler</li>
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> Yüksek trafikli sistemler için optimize yapı</li>
                                </ul>
                            </div>
                        </div>
                    """
                },
                {
                    "label": "Yapay Zeka",
                    "title": "3. Yapay Zeka Çözümleri",
                    "content": """
                        <div class="space-y-6">
                            <h4 className="text-xl font-bold text-secondary">Veriden Değere</h4>
                            <p>Veri odaklı karar alma süreçlerini destekleyen, operasyonel yükü azaltan yapay zeka çözümleri sunuyoruz. Makine öğrenimi, doğal dil işleme (NLP), görüntü işleme gibi alanlarda geliştirdiğimiz akıllı algoritmalar ile müşterilerimizin dijital dönüşümüne katkı sağlıyoruz.</p>
                            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80" alt="AI Solutions" class="w-full h-48 object-cover rounded-xl shadow-sm mb-4" />
                            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h5 class="font-bold text-secondary mb-4">Yetkinlikler</h5>
                                <ul class="space-y-3">
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> Yapay zeka destekli asistanlar</li>
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> Akıllı raporlama ve analiz</li>
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> Veri sınıflandırma ve tahminleme</li>
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> Otomasyon ve karar destek sistemleri</li>
                                </ul>
                            </div>
                        </div>
                    """
                },
                {
                    "label": "Entegrasyonlar",
                    "title": "4. Özel Entegrasyonlar",
                    "content": """
                        <div class="space-y-6">
                            <h4 className="text-xl font-bold text-secondary">Sistemler Konuşsun, İşiniz Aksamasın</h4>
                            <p>Farklı yazılımlar arasında güvenli ve sürdürülebilir entegrasyonlar geliştiriyoruz.</p>
                            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h5 class="font-bold text-secondary mb-4">Entegrasyon Alanları</h5>
                                <ul class="space-y-3">
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> ERP, CRM ve üçüncü parti sistem entegrasyonları</li>
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> API geliştirme ve entegrasyon</li>
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> Kamu ve özel sistemlerle bağlantılar</li>
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> Veri senkronizasyonu ve otomasyon</li>
                                </ul>
                            </div>
                        </div>
                    """
                },
                {
                    "label": "Özel Hizmetler",
                    "title": "5. Özel Hizmet Çözümleri",
                    "content": """
                        <div class="space-y-6">
                            <h4 className="text-xl font-bold text-secondary">Size Özel Yaklaşımlar</h4>
                            <p>Her kurumun ihtiyacı farklıdır. Bu nedenle, yazılımın ötesine geçen özel hizmet çözümleri sunuyoruz.</p>
                            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h5 class="font-bold text-secondary mb-4">Hizmet Kapsamı</h5>
                                <ul class="space-y-3">
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> Dijital dönüşüm danışmanlığı</li>
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> Süreç analizi ve iyileştirme</li>
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> Teknik danışmanlık ve mimari destek</li>
                                    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-primary"></span> Uzun vadeli bakım ve geliştirme</li>
                                </ul>
                            </div>
                        </div>
                    """
                }
            ]
        },
        {
            "id": "cta",
            "type": "cta_box",
            "title": "Projenizi Hayata Geçirelim",
            "description": "Fikrinizi ürüne, sürecinizi dijitale dönüştürmek için hazırız. Hemen tanışalım.",
            "button_text": "Bize Ulaşın",
            "url": "/iletisim"
        }
    ]
}

# Ensure directory exists
os.makedirs('public/data', exist_ok=True)

# Write to file
output_path = 'public/data/yazilim-proje-urun-cozumleri__yazilim-gelistirme-hizmetleri.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(page_data, f, ensure_ascii=False, indent=2)

print(f"✅ Success: {output_path} has been created.")
