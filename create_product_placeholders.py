import json
import os

products = [
    {"category": "ar-ge-ve-fikri-mulkiyet", "slug": "haas", "title": "HaaS"},
    {"category": "ar-ge-ve-fikri-mulkiyet", "slug": "sparks", "title": "Sparks", "logo": "/images/dijital-urunler/sparkslogo.png"},
    {"category": "ar-ge-ve-fikri-mulkiyet", "slug": "agra", "title": "Agra", "logo": "/images/dijital-urunler/argesa.webp"},
    {"category": "ar-ge-ve-fikri-mulkiyet", "slug": "argera", "title": "Argera", "logo": "/images/dijital-urunler/argera.webp"},
    {"category": "ar-ge-ve-fikri-mulkiyet", "slug": "marqby", "title": "Marqby", "logo": "/images/dijital-urunler/wecover.webp"},
    {"category": "vergi-ve-finans", "slug": "rating-value", "title": "Rating Value", "logo": "/images/dijital-urunler/ratingvalue.webp"},
    {"category": "mevzuat-ve-uyum", "slug": "legalmatic", "title": "Legalmatic", "logo": "/images/dijital-urunler/legalmatic.png"},
    {"category": "globallesme-ve-ihracat", "slug": "jestiyon", "title": "Jestiyon"},
    {"category": "globallesme-ve-ihracat", "slug": "quandatum", "title": "Quandatum"},
    {"category": "online-danismanlik", "slug": "edanisman", "title": "eDanışman", "logo": "/images/dijital-urunler/xe-danisman-logo.png"},
]

def create_placeholder(product):
    filename = f"public/data/{product['category']}__{product['slug']}.json"
    
    logo_html = ""
    if product.get('logo'):
        logo_html = f'<div class="mb-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm inline-block"><img src="{product["logo"]}" alt="{product["title"]} Logo" class="h-16 w-auto object-contain" /></div>'

    cat_names = {
        "ar-ge-ve-fikri-mulkiyet": "Ar-Ge ve Fikri Mülkiyet",
        "vergi-ve-finans": "Vergi ve Finans",
        "mevzuat-ve-uyum": "Mevzuat ve Uyum",
        "globallesme-ve-ihracat": "Globalleşme ve İhracat",
        "online-danismanlik": "Online Danışmanlık"
    }

    subcat_names = {
        "ar-ge-ve-fikri-mulkiyet": "Dijital Çözümler",
        "vergi-ve-finans": "Finansal Araçlar",
        "mevzuat-ve-uyum": "Yasal Uyum",
        "globallesme-ve-ihracat": "İhracat Yazılımları",
        "online-danismanlik": "Eğitim Platformları"
    }

    cat_name = cat_names.get(product['category'], product['category'])
    subcat_name = subcat_names.get(product['category'], "Dijital Çözümler")

    data = {
        "slug": product['slug'],
        "title": product['title'],
        "title_highlighted": "",
        "category": product['category'],
        "layout_density": "compact",
        "breadcrumb": [
            {"name": "Anasayfa", "link": "/"},
            {"name": "Servisler", "link": "/servisler"},
            {"name": subcat_name, "link": "#"},
            {"name": cat_name, "link": f"/servisler/{product['category']}/dijital-cozumler" if product['category'] == 'ar-ge-ve-fikri-mulkiyet' else f"/servisler/{product['category']}/{product['category']}"},
            {"name": product['title']}
        ],
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
                    "content": f"{logo_html}<p><strong>Çalışmalarımız devam ediyor.</strong></p><p>Bu ürünümüzle ilgili detaylı bilgiler çok yakında burada olacak. Sistem Global olarak dijital çözümlerimizi geliştirmeye ve size en iyi kullanıcı deneyimini sunmaya devam ediyoruz.</p>"
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
