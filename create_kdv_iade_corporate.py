import json
import re
import os

# Load extracted content from the original JSON file
# Note: The file path in user's workspace was mentioned as icerik/output-kdv-iade.json
# but that directory appears empty. We'll work with what we have in the existing data.

# For now, let's create the Transfer Pricing style template directly
# based on the content already in kdv-iade.json

page_data = {
    "slug": "kdv-iade",
    "title": "KDV",
    "title_highlighted": "İade",
    "category": "Vergi",
    "youtube_id": "",
    "breadcrumb": [
        {'name': 'Anasayfa', 'link': '/'},
        {'name': 'Servisler', 'link': '/servisler'},
        {'name': 'Vergi & Finans', 'link': '/servisler/vergi-finans'},
        {'name': 'Vergi', 'link': '/servisler/vergi-finans/vergi'},
        {'name': 'KDV İade', 'link': '/servisler/vergi-finans/vergi/kdv-iade'}
    ],
    "hero": {
        "title": "KDV İade Hizmetleri",
        "description": "YMM raporları ile KDV iadelerinizi hızlı ve güvenli şekilde alın. Vergisel haklarınızı tam olarak kullanın.",
        "image": "/images/kdv-iade/hero-tax.webp",
        "buttons": [
            { "text": "Ücretsiz Ön Değerlendirme", "link": "#contact", "variant": "primary" },
            { "text": "İade Türlerini İnceleyin", "link": "#services", "variant": "outline" }
        ]
    },
    "sections": [
        {
            "type": "content_with_image",
            "title": "KDV İade Süreçlerinizi Profesyonelce Yönetelim",
            "content": """
                <p>Türkiye'de yapılan mal ve hizmet teslimleri katma değer vergisine tabiidir. Ancak birtakım faaliyetlerin KDV'ye tabi olmadığından veya genel orandan daha düşük oranda KDV'ye tabi olmasından dolayı bu faaliyetlerde ticaret yapanların Türkiye'de ödediği KDV'yi Yeminli Mali Müşavir tarafından düzenlenen YMM raporu ile iade edilmesi mümkündür.</p>
                <p>İşletmeler ihracatlarda KDV iadesi, tevkifatlı işlemleri ve indirimli oranlara tabi teslimler gibi işlemlerde devlet adına tüketiciden KDV vergisini alırken KDV iadesi ile bunun bir kısmını devletten geri alabilirler. SG-YMM olarak tüm süreçlerinizi başından sonuna kadar yönetiyor, iadelerinizin zamanında ve eksiksiz alınmasını sağlıyoruz.</p>
            """,
            "image": "/images/kdv-iade/hero-tax.webp",
            "image_position": "right"
        },
        {
            "type": "icon_grid",
            "title": "Kimler KDV İadesi Alabilir?",
            "items": [
                {
                    "title": "İhracatçılar",
                    "desc": "Mal ve hizmet ihracatı yapan firmalar, yüklendikleri KDV'yi YMM raporu ile iade alabilirler.",
                    "icon": "Ship"
                },
                {
                    "title": "İmalatçılar ve Üreticiler",
                    "desc": "İndirimli orana tabi işlemler yapan üretim işletmeleri iade hakkına sahiptir.",
                    "icon": "Factory"
                },
                {
                    "title": "Kamu Tedarikçileri",
                    "desc": "Kamu kurumlarına iş yapan ve tevkifata tabi firmalar iade talep edebilir.",
                    "icon": "Building"
                }
            ]
        },
        {
            "type": "benefits_grid",
            "title": "Ne Kazandırır?",
            "benefits": [
                {
                    "title": "Nakit Akışı Güçlendirme",
                    "desc": "İadelerin zamanında alınmasıyla işletme nakit akışının optimize edilmesi.",
                    "icon": "TrendingUp"
                },
                {
                    "title": "Mevzuat Uyumu",
                    "desc": "KDV Kanunu ve ilgili mevzuata tam uyumlu süreç yönetimi.",
                    "icon": "Shield"
                },
                {
                    "title": "Risk Minimizasyonu",
                    "desc": "Olası inceleme risklerinin önceden tespiti ve proaktif çözümler.",
                    "icon": "CheckCircle"
                },
                {
                    "title": "Hızlı Sonuç",
                    "desc": "Bürokratik süreçlerin uzman kadromuzla hızlı ve etkin yönetilmesi.",
                    "icon": "Zap"
                },
                {
                    "title": "Eksiksiz Raporlama",
                    "desc": "YMM raporlarının mevzuata tam uyumlu ve eksiksiz hazırlanması.",
                    "icon": "Award"
                }
            ]
        },
        {
            "type": "service_cards",
            "title": "KDV İade Türleri",
            "cards": [
                {
                    "title": "İhracat İstisnası",
                    "desc": "Mal ve hizmet ihracatından doğan KDV iadelerinin nakden veya mahsuben alınması.",
                    "icon": "Globe",
                    "color": "blue"
                },
                {
                    "title": "Tevkifatlı İade",
                    "desc": "Kısmi tevkifat uygulanan işlemlerde satıcının tahsil edemediği KDV'nin iadesi.",
                    "icon": "Percent",
                    "color": "green"
                },
                {
                    "title": "İndirimli Oran",
                    "desc": "Gıda, eğitim, sağlık gibi %1 veya %10 KDV oranına tabi sektörlerdeki iade işlemleri.",
                    "icon": "BarChart",
                    "color": "purple"
                },
                {
                    "title": "Yatırım Teşvik",
                    "desc": "Yatırım Teşvik Belgesi kapsamında alınan makine ve teçhizatlar için KDV iadesi.",
                    "icon": "Target",
                    "color": "orange"
                }
            ]
        },
        {
            "type": "cta_box",
            "title": "KDV İadelerinizi Hızla ve Güvenle Alın",
            "description": "Uzman YMM kadromuzla KDV iade süreçlerinizi uçtan uca yönetiyor, vergisel haklarınızı tam olarak kullanmanızı sağlıyoruz.",
            "button_text": "Ücretsiz Danışmanlık Alın",
            "secondary_button": "Detaylı Bilgi"
        }
    ]
}

# Write output
os.makedirs('public/data', exist_ok=True)
with open('public/data/kdv-iade.json', 'w', encoding='utf-8') as f:
    json.dump(page_data, f, ensure_ascii=False, indent=2)

print("✅ KDV İade updated with Transfer Pricing UI Style!")
