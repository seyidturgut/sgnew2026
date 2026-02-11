import json
import os

# Create the new structure following the Transfer Fiyatlandırması template
final_data = {
    "slug": "vergi-yonetim-danismanligi",
    "title": "Vergi Yönetim",
    "title_highlighted": "Danışmanlığı",
    "category": "Vergi",
    "youtube_id": "",
    "breadcrumb": [
        {
            "name": "Anasayfa",
            "link": "/"
        },
        {
            "name": "Servisler",
            "link": "/servisler"
        },
        {
            "name": "Vergi & Finans",
            "link": "/servisler/vergi-finans"
        },
        {
            "name": "Vergi",
            "link": "/servisler/vergi-finans/vergi"
        },
        {
            "name": "Vergi Yönetim Danışmanlığı",
            "link": "/servisler/vergi-finans/vergi/vergi-yonetim-danismanligi"
        }
    ],
    "hero": {
        "title": "Vergi Yönetim Danışmanlığı",
        "description": "Profesyonel Vergi Danışmanlığı ile İşletmenizi Güvence Altına Alın",
        "image": "/images/vergi-yonetim-hero.webp",
        "buttons": [
            {
                "text": "Detaylı Bilgi Alın",
                "link": "#contact",
                "variant": "primary"
            },
            {
                "text": "Hizmetlerimiz",
                "link": "#services",
                "variant": "outline"
            }
        ]
    },
    "sections": [
        {
            "type": "content_with_image",
            "title": "Vergi Yönetim Danışmanlığı Nedir?",
            "content": "<p>Vergi mevzuatı, gerçek ve tüzel kişilerin vergi yükümlülüklerini belirleyen ve bu yasal süreci düzenleyen kuralların bütününe denir. <strong>Vergi Usul Kanunu, Gelir Vergisi ve Kurumlar Vergisi Kanunu ile Harcama Üzerinden Alınan Vergiler</strong> bu mevzuatın temelini oluşturmaktadır.</p>\n            <p>Türkiye Cumhuriyeti içerisinde Gelir Vergisi Kanunda sayılan 7 gelir unsurunu kapsayan gerçek kişileri ve Kurumlar Vergisi Kanunundaki tüzel kişileri kapsayan mevzuat, tam ve dar mükellef olarak sınıflandırılmaktadır.</p>\n            <p>Vergi yönetim danışmanlığı, işletmelerin ve bireylerin vergi yükümlülüklerini en etkin şekilde yerine getirmelerini sağlarken, yasal çerçeve içinde vergi yükünü optimize etmeyi hedefler. Profesyonel danışmanlık desteği ile hem mevzuata uyum sağlanır hem de mali sürdürülebilirlik güçlendirilir.</p>",
            "image": "/images/vergi-yonetim-intro.webp",
            "image_position": "right"
        },
        {
            "type": "icon_grid",
            "title": "Kimler İçindir?",
            "items": [
                {
                    "title": "Şirket Sahipleri",
                    "desc": "Kurumsal şirketler ve KOBİ'ler için kapsamlı vergi planlaması ve mevzuata uyum desteği.",
                    "icon": "Building"
                },
                {
                    "title": "Girişimciler",
                    "desc": "Yeni kurulan işletmeler ve startup'lar için vergi avantajları ve teşvik danışmanlığı.",
                    "icon": "Rocket"
                },
                {
                    "title": "Serbest Meslek Sahipleri",
                    "desc": "Serbest meslek erbabı için gelir vergisi optimizasyonu ve beyanname danışmanlığı.",
                    "icon": "Briefcase"
                },
                {
                    "title": "Uluslararası Ticaret",
                    "desc": "Yurt dışı operasyonları olan firmalar için çifte vergilendirme önleme ve transfer fiyatlandırması.",
                    "icon": "Globe"
                },
                {
                    "title": "Yatırımcılar",
                    "desc": "Portföy yönetimi ve yatırım gelirlerinin vergisel optimizasyonu.",
                    "icon": "TrendingUp"
                },
                {
                    "title": "Yüksek Gelirli Bireyler",
                    "desc": "Karmaşık gelir yapısına sahip bireyler için özel vergi planlaması.",
                    "icon": "Users"
                }
            ]
        },
        {
            "type": "benefits_grid",
            "title": "Ne Kazandırır?",
            "benefits": [
                {
                    "title": "Mali Tasarruf",
                    "desc": "Vergi teşvikleri, indirimler ve istisnalardan maksimum yararlanarak işletme bütçenizi optimize ediyoruz.",
                    "icon": "Coins"
                },
                {
                    "title": "Risk Minimizasyonu",
                    "desc": "Cezai yaptırımlardan korunma ve yasal güvenlik sağlayarak işletmenizi olası risklere karşı koruyoruz.",
                    "icon": "ShieldCheck"
                },
                {
                    "title": "Stratejik Planlama",
                    "desc": "Uzun vadeli mali sürdürülebilirlik için stratejik vergi planlaması ve danışmanlık hizmeti sunuyoruz.",
                    "icon": "Target"
                },
                {
                    "title": "Uluslararası Uyum",
                    "desc": "Çifte vergilendirme önleme ve OECD standartlarına uyum ile global pazarlarda güvenle faaliyet göstermenizi sağlıyoruz.",
                    "icon": "Globe"
                },
                {
                    "title": "Mevzuata Uyum",
                    "desc": "Güncel vergi mevzuatına tam uyum sağlayarak yasal riskleri ortadan kaldırıyoruz.",
                    "icon": "CheckCircle"
                }
            ]
        },
        {
            "type": "service_cards",
            "title": "SG Öne Çıkanlar",
            "cards": [
                {
                    "title": "Vergi Planlaması",
                    "desc": "Gelir, gider ve yatırım kalemlerinizi en avantajlı şekilde yapılandırarak vergi yükünüzü optimize ediyoruz.",
                    "icon": "Target",
                    "color": "blue"
                },
                {
                    "title": "Mevzuata Uyum",
                    "desc": "Güncel vergi mevzuatı sürecine uyum sağlayarak risk minimizasyonu gerçekleştiriyor, cezai yaptırımlardan koruyoruz.",
                    "icon": "CheckCircle",
                    "color": "green"
                },
                {
                    "title": "Risk Yönetimi",
                    "desc": "İnceleme riski taşıyan işlemler tespit edilerek gerekli önlemler alınır ve savunma stratejileri oluşturulur.",
                    "icon": "ShieldCheck",
                    "color": "red"
                },
                {
                    "title": "Transfer Fiyatlandırması",
                    "desc": "OECD standartlarına uygun fiyat politikası ve raporlama desteği ile uluslararası işlemlerinizi güvence altına alıyoruz.",
                    "icon": "Globe",
                    "color": "purple"
                },
                {
                    "title": "Çifte Vergilendirme",
                    "desc": "Yurt dışında gelir elde edenler için çifte vergilendirmeyi önleme anlaşmalarından maksimum fayda sağlıyoruz.",
                    "icon": "Award",
                    "color": "orange"
                },
                {
                    "title": "Vergi Optimizasyonu",
                    "desc": "Yasal sınırlar içinde vergi avantajlarından en üst düzeyde yararlanmanızı sağlayan stratejiler geliştiriyoruz.",
                    "icon": "Zap",
                    "color": "indigo"
                }
            ]
        },
        {
            "type": "cta_box",
            "title": "Vergi Yükünüzü Azaltmaya Hazır mısınız?",
            "description": "Uzman ekibimizle tanışın ve işletmeniz için en uygun vergi stratejisini belirleyin. Ücretsiz ön görüşme için hemen iletişime geçin.",
            "button_text": "Ücretsiz Danışmanlık Alın",
            "secondary_button": "Hizmetlerimiz"
        }
    ]
}

# Write to database/imports for import to DB
os.makedirs('database/imports', exist_ok=True)
with open('database/imports/vergi-yonetim-danismanligi.json', 'w', encoding='utf-8') as f:
    json.dump(final_data, f, ensure_ascii=False, indent=2)

# Also write to public/data for local development without DB
os.makedirs('public/data', exist_ok=True)
with open('public/data/vergi-yonetim-danismanligi.json', 'w', encoding='utf-8') as f:
    json.dump(final_data, f, ensure_ascii=False, indent=2)

print("✅ Vergi Yönetim Danışmanlığı updated with latest template!")
print("📁 Files created:")
print("   - database/imports/vergi-yonetim-danismanligi.json")
print("   - public/data/vergi-yonetim-danismanligi.json")
print(f"\n📊 Total sections: {len(final_data['sections'])}")
print("\nSection types:")
for i, section in enumerate(final_data['sections'], 1):
    print(f"  {i}. {section['type']}")
