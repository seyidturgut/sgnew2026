import json
import os

products = [
    {"category": "ar-ge-ve-fikri-mulkiyet", "slug": "haas", "title": "HaaS"},
    {"category": "ar-ge-ve-fikri-mulkiyet", "slug": "agra", "title": "Agra"},
    {"category": "ar-ge-ve-fikri-mulkiyet", "slug": "marqby", "title": "Marqby"},
    {"category": "mevzuat-ve-uyum", "slug": "legalmatic", "title": "Legalmatic"},
    {"category": "globallesme-ve-ihracat", "slug": "jestiyon", "title": "Jestiyon"},
    {"category": "globallesme-ve-ihracat", "slug": "quandatum", "title": "Quandatum"},
    {"category": "online-danismanlik", "slug": "edanisman", "title": "eDanışman"},
]

def create_placeholder(product):
    filename = f"public/data/{product['category']}__{product['slug']}.json"
    
    # Also handle some variants for safer lookup
    variant_filename = None
    if product['category'] == 'mevzuat-ve-uyum':
        # DynamicServicePage might look for mevzuat-uyum if aliased
        pass

    data = {
        "slug": product['slug'],
        "title": product['title'],
        "title_highlighted": "",
        "category": product['category'],
        "layout_density": "compact",
        "hero_image": "/images/servisler/services-hero-business.webp",
        "content_json": {
            "hero": {
                "title": product['title'],
                "description": "Dijital Dönüşüm Yolculuğunuzda Yanınızdayız.",
                "image": "/images/servisler/services-hero-business.webp"
            },
            "sections": [
                {
                    "type": "intro_text",
                    "content": "<p><strong>Çalışmalarımız devam ediyor.</strong></p><p>Bu ürünümüzle ilgili detaylı bilgiler çok yakında burada olacak. Sistem Global olarak dijital çözümlerimizi geliştirmeye ve size en iyi kullanıcı deneyimini sunmaya devam ediyoruz.</p>"
                },
                {
                    "type": "cta_simple",
                    "title": "Detaylı Bilgi Almak İster Misiniz?",
                    "description": "Ürünümüz hakkında ön bilgi almak veya çözüm ortaklığı süreçlerimizi öğrenmek için bizimle iletişime geçebilirsiniz.",
                    "button_text": "Bize Ulaşın"
                }
            ]
        }
    }
    
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    print(f"Created: {filename}")

for p in products:
    create_placeholder(p)
