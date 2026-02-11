import json
import os

page_data = {
    "slug": "dijital-hizmetler",
    "title": "Dijital Hizmetler",
    "title_highlighted": "Yazılımın Değere Dönüştüğü Nokta",
    "category": "Yazılım: Proje ve Ürün Çözümleri",
    "breadcrumb": [
        {"name": "Anasayfa", "link": "/"},
        {"name": "Servisler", "link": "/servisler"},
        {"name": "Yazılım: Proje ve Ürün Çözümleri", "link": "/servisler/yazilim-proje-urun-cozumleri"},
        {"name": "Dijital Hizmetler", "link": "/servisler/yazilim-proje-urun-cozumleri/dijital-hizmetler"}
    ],
    "hero": {
        "title": "Yazılımın Değere Dönüştüğü Nokta",
        "description": "Dijital Hizmetlerimiz, geliştirilen veya kullanılan yazılımların kurum içinde gerçek fayda üretmesini sağlar. Koddan bağımsız, kullanım, verimlilik ve dönüşüm odaklı çözümler sunuyoruz.",
        "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        "buttons": [
            {"text": "Hemen Başvurun", "link": "/iletisim", "variant": "primary"},
            {"text": "Detaylı Bilgi", "link": "#details", "variant": "outline"}
        ],
        "marks": [
            "Süreç Tasarımı",
            "Verimlilik",
            "Kullanıcı Adaptasyonu",
            "Karar Destek"
        ]
    },
    "sections": [
        {
            "id": "details",
            "type": "content_with_image",
            "title": "Dijital Dönüşüm & Süreç Tasarımı",
            "subtitle": "Sistemi Kurmak Yetmez, Doğru Kurgulamak Gerekir",
            "content": """
                <p>Mevcut iş süreçlerinin analiz edilmesi, manuel adımların dijitalleştirilmesi, süreç sadeleştirme ve otomasyon ile kuruma özel dijital yol haritası oluşturuyoruz.</p>
                <div class="mt-4 bg-orange-50 p-4 rounded-lg">
                    <h5 class="font-bold text-[#F37021] mb-2 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        Kazanımlar
                    </h5>
                    <ul class="space-y-2 text-sm text-gray-700">
                        <li>• Mevcut iş süreçlerinin analiz edilmesi</li>
                        <li>• Manuel adımların dijitalleştirilmesi</li>
                        <li>• Süreç sadeleştirme ve otomasyon</li>
                        <li>• Kuruma özel dijital yol haritası</li>
                    </ul>
                    <div class="mt-3 text-sm font-semibold text-gray-900 border-t border-orange-200 pt-2">
                        👉 Yazılım öncesi veya sonrası uygulanabilir.
                    </div>
                </div>
            """,
            "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
            "image_position": "right"
        },
        {
            "id": "services-grid",
            "type": "icon_grid",
            "title": "Hizmet Kapsamımız",
            "description": "Kurumunuzun dijital potansiyelini ortaya çıkaran bütüncül çözümler.",
            "cols": 3,
            "items": [
                {
                    "title": "Raporlama & Karar Destek",
                    "desc": "Veriyi Okunur ve Anlamlı Hale Getirir. Yönetim ve operasyon raporlarının kurgulanması, dashboardlar ve performans analizleri.",
                    "icon": "LineChart",
                    "features": ["Dashboard Tasarımı", "Performans Analizi", "Karar Destek Mekanizmaları"],
                    "note": "👉 “Verimiz var ama okuyamıyoruz” diyen kurumlar için."
                },
                {
                    "title": "Otomasyon & Verimlilik",
                    "desc": "Tekrarlayan İşleri Sistemlere Bırakın. Operasyonel otomasyon senaryoları, veri aktarım ve senkronizasyon kurguları.",
                    "icon": "Zap",
                    "features": ["Operasyonel Otomasyon", "Veri Senkronizasyonu", "İş Gücü Tasarrufu"],
                    "note": "👉 İnsan hatasını azaltır, hız kazandırır."
                },
                {
                    "title": "Eğitim & Adaptasyon",
                    "desc": "Kullanılmayan Yazılım, Değer Üretmez. Kullanıcı eğitimleri, rol bazlı senaryolar ve adaptasyon çalışmaları.",
                    "icon": "Users",
                    "features": ["Kullanıcı Eğitimleri", "Rol Bazlı Senaryolar", "Dijital Yetkinlik Artışı"],
                    "note": ""
                }
            ]
        },
        {
            "id": "cta",
            "type": "cta_box",
            "title": "Dijital Geleceğinizi Şekillendirin",
            "description": "İş süreçlerinizi optimize etmek ve teknolojiden maksimum verim almak için uzman ekibimizle tanışın.",
            "button_text": "Hemen İletişime Geçin",
            "url": "/iletisim"
        }
    ]
}

# Ensure directory exists
os.makedirs('public/data', exist_ok=True)

# Write to file
output_path = 'public/data/yazilim-proje-urun-cozumleri__dijital-hizmetler.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(page_data, f, ensure_ascii=False, indent=2)

print(f"✅ Success: {output_path} has been created.")
