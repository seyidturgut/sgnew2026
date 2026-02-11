import json
import os

def create_json(slug, title, title_highlighted, category_path, category_name):
    page_data = {
        "slug": slug,
        "title": title,
        "title_highlighted": title_highlighted,
        "category": category_name,
        "breadcrumb": [
            {"name": "Anasayfa", "link": "/"},
            {"name": "Servisler", "link": "/servisler"},
            {"name": "Finansmana Erişim ve Sürdürülebilirlik", "link": "/servisler/finansmana-erisim-ve-surdurulebilirlik"},
            {"name": "Birleşme ve Satın Alma (M&A)", "link": "/servisler/finansmana-erisim-ve-surdurulebilirlik/birlesme-ve-satin-alma-ma"},
            {"name": title + " " + title_highlighted, "link": f"/servisler/finansmana-erisim-ve-surdurulebilirlik/birlesme-ve-satin-alma-ma/{slug}"}
        ],
        "hero": {
            "title": f"{title} {title_highlighted}",
            "description": f"{title} süreçlerinde stratejik analizler ve uzman danışmanlık ile yatırımlarınızın değerini maksimize edin.",
            "image": "/images/servisler/generic-hero.jpg",
            "buttons": [
                {"text": "Bilgi Alın", "link": "#contact", "variant": "primary"},
                {"text": "Hizmet Detayları", "link": "#details", "variant": "outline"}
            ]
        },
        "sections": [
            {
                "id": "details",
                "type": "content_with_image",
                "title": f"Neden {title} {title_highlighted}?",
                "content": f"<p>{title} {title_highlighted} süreçleri, işletmelerin büyüme stratejilerinde kritik bir rol oynar. Doğru analiz ve planlama ile riskler minimize edilirken, fırsatlar en verimli şekilde değerlendirilir.</p><p>Sistem Global olarak, teknik ve finansal uzmanlığımızı birleştirerek size özel çözümler sunuyoruz.</p>",
                "image": "/images/servisler/generic-intro.jpg",
                "image_position": "right"
            },
            {
                "type": "icon_grid",
                "title": "Temel Avantajlar",
                "items": [
                    {"title": "Stratejik Analiz", "desc": "Pazar ve rekabet koşullarının detaylı incelenmesi.", "icon": "BarChart3"},
                    {"title": "Risk Yönetimi", "desc": "Potansiyel risklerin önceden tespiti ve önlem planları.", "icon": "ShieldCheck"},
                    {"title": "Finansal Optimizasyon", "desc": "Kaynakların en verimli şekilde kullanılması için planlama.", "icon": "TrendingUp"},
                    {"title": "Uzman Desteği", "desc": "Alanında deneyimli danışman kadrosuyla profesyonel rehberlik.", "icon": "Users"}
                ]
            },
            {
                "type": "cta_box",
                "title": "Daha Fazla Bilgi İçin",
                "description": "Uzman ekibimizle iletişime geçerek size özel çözümlerimizi keşfedin.",
                "button_text": "İletişime Geçin",
                "secondary_button": "Detaylı Bilgi"
            }
        ]
    }
    
    filename = f"finansmana-erisim-ve-surdurulebilirlik__birlesme-ve-satin-alma-ma__{slug}.json"
    filepath = os.path.join('public/data', filename)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(page_data, f, ensure_ascii=False, indent=2)
    print(f"Created {filepath}")

# Create the two new JSON files
create_json("yatirim-fizibilitesi-hizmetleri", "Yatırım Fizibilitesi", "Hizmetleri", "finansmana-erisim-ve-surdurulebilirlik__birlesme-ve-satin-alma-ma", "Finansmana Erişim ve Sürdürülebilirlik")
create_json("yonetim-danismanligi-hizmetleri", "Yönetim Danışmanlığı", "Hizmetleri", "finansmana-erisim-ve-surdurulebilirlik__birlesme-ve-satin-alma-ma", "Finansmana Erişim ve Sürdürülebilirlik")
