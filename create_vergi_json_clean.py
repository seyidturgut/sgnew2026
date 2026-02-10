import json
import re

# Load extracted content
with open('extracted_vergi_content.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

sections = data['sections']

def clean_html(html):
    """Remove forms, scripts, and excessive markup"""
    # Remove forms
    html = re.sub(r'<form.*?</form>', '', html, flags=re.DOTALL | re.IGNORECASE)
    # Remove buttons
    html = re.sub(r'<button.*?</button>', '', html, flags=re.DOTALL | re.IGNORECASE)
    # Remove inputs
    html = re.sub(r'<input.*?>', '', html, flags=re.IGNORECASE)
    # Remove select
    html = re.sub(r'<select.*?</select>', '', html, flags=re.DOTALL | re.IGNORECASE)
    # Remove excessive divs
    html = re.sub(r'<div[^>]*class="[^"]*(?:ff-|wpb|vc_)[^"]*"[^>]*>.*?</div>', '', html, flags=re.DOTALL)
    # Clean up multiple spaces/newlines
    html = re.sub(r'\s+', ' ', html)
    return html.strip()

def find_section(keyword):
    for s in sections:
        if keyword.lower() in s['title'].lower():
            return s
    return None

# Build structured content
content_structure = {
    "sections": []
}

# 1. INTRO - Nedir?
s_nedir = find_section("Nedir")
if s_nedir:
    content_structure["sections"].append({
        "type": "intro_block",
        "title": "Vergi Yönetim Danışmanlığı",
        "subtitle": "Profesyonel Vergi Danışmanlığı ile İşletmenizi Güvence Altına Alın",
        "content": clean_html(s_nedir['content']),
        "highlights": [
            "Mevzuata Tam Uyum",
            "Risk Minimizasyonu", 
            "Mali Avantajlar"
        ]
    })

# 2. PLANLAMA - Nasıl Yapılır
s_plan = find_section("Planlaması")
if s_plan:
    clean_content = clean_html(s_plan['content'])
    content_structure["sections"].append({
        "type": "planning_steps",
        "title": "Vergi Planlaması Süreci",
        "description": "Profesyonel vergi planlaması ile vergi yükünüzü azaltın ve yasal güvenliğinizi artırın.",
        "steps": [
            {"title": "Mükellef Türü Tespiti", "desc": "Her grubun vergi oranları farklıdır. Doğru mükellefiyetin belirlenmesi kritiktir."},
            {"title": "Gelir-Gider Analizi", "desc": "Hangi vergiye tabi olduğunuz belirlenir ve güncel mevzuat değerlendirilir."},
            {"title": "Avantajların Kullanımı", "desc": "Teşvikler ve vergi indirimleri planlamaya dahil edilir."},
            {"title": "Beyanname Planlaması", "desc": "Ödeme tarihlerine uygun beyannameler hazırlanarak ceza riskleri ortadan kaldırılır."}
        ]
    })

# 3. DEĞİŞİKLİKLER - Icon Grid
s_degisiklik = find_section("Değişikliklere")
if s_degisiklik:
    content_structure["sections"].append({
        "type": "icon_grid",
        "title": "Son Yıllarda Yapılan Önemli Değişiklikler",
        "items": [
            {
                "icon": "TrendingUp",
                "title": "Yeni Vergi Dilimleri",
                "desc": "%15'ten başlayan vergi oranı %20, %27, %35 ve yüksek gelir grupları için %40'a kadar kademelendirildi."
            },
            {
                "icon": "ShieldCheck", 
                "title": "Asgari Ücret Muafiyeti",
                "desc": "2022 yılında asgari ücret gelir ve damga vergisinden muaf tutuldu."
            },
            {
                "icon": "FileText",
                "title": "Beyanname Genişlemesi",
                "desc": "Birden fazla gelire sahip olanların beyanname verme yükümlülüğü genişletildi."
            },
            {
                "icon": "Globe",
                "title": "CRS Uygulaması",
                "desc": "Yurt dışı finansal bilgilerin Türkiye ile paylaşılması düzenlendi."
            },
            {
                "icon": "Users",
                "title": "Genç Girişimci Teşviki",
                "desc": "29 yaş altı girişimciler için 3 yıl süreyle gelir vergisi muafiyeti getirildi."
            }
        ]
    })

# 4. HİZMETLER - Service Cards
s_hizmet = find_section("Hizmetler")
if s_hizmet:
    content_structure["sections"].append({
        "type": "service_cards",
        "title": "Sunduğumuz Hizmetler",
        "cards": [
            {
                "icon": "Target",
                "title": "Vergi Planlaması",
                "desc": "Gelir, gider ve yatırım kalemlerinizi en avantajlı şekilde yapılandırıyoruz."
            },
            {
                "icon": "CheckCircle2",
                "title": "Mevzuata Uyum",
                "desc": "Güncel vergi mevzuatı sürecine uyum sağlayarak risk minimizasyonu gerçekleştiriyoruz."
            },
            {
                "icon": "Shield",
                "title": "Risk Yönetimi", 
                "desc": "İnceleme riski taşıyan işlemler tespit edilerek gerekli önlemler alınır."
            },
            {
                "icon": "Globe",
                "title": "Transfer Fiyatlandırması",
                "desc": "OECD standartlarına uygun fiyat politikası ve raporlama desteği."
            },
            {
                "icon": "Award",
                "title": "Çifte Vergilendirme",
                "desc": "Yurt dışında gelir elde edenler için çifte vergilendirmeyi önleme anlaşmaları."
            },
            {
                "icon": "Zap",
                "title": "Vergi Optimizasyonu",
                "desc": "Yasal sınırlar içinde vergi avantajlarından en üst düzeyde yararlanma."
            }
        ]
    })

# 5. KAZANIMLAR - Benefits
content_structure["sections"].append({
    "type": "benefits_grid",
    "title": "İşletmenize Kazandırdıklarımız",
    "benefits": [
        {"title": "Mali Tasarruf", "desc": "Vergi teşvikleri ve indirimlerden maksimum yararlanma"},
        {"title": "Risk Minimizasyonu", "desc": "Cezai yaptırımlardan korunma ve yasal güvenlik"},
        {"title": "Stratejik Planlama", "desc": "Uzun vadeli mali sürdürülebilirlik"},
        {"title": "Uluslararası Uyum", "desc": "Çifte vergilendirme önleme ve OECD standartları"}
    ]
})

# 6. İNCELEME - Audit Info (with image)
s_inceleme = find_section("İncelemesi Nedir")
if s_inceleme:
    content_structure["sections"].append({
        "type": "image_text",
        "layout": "left",
        "title": "Vergi İncelemesi Sürecinde Yanınızdayız",
        "content": "<p>Vergi incelemesi, mükelleflerin vergi yükümlülüklerini doğru yerine getirip getirmediğini denetleyen resmi bir süreçtir. Uzman danışmanlarımız bu süreçte sizinle birlikte hareket ederek tüm hakları korur ve süreci en şeffaf şekilde yönetiriz.</p>",
        "image": "/vergi-audit.webp"
    })

# 7. FAQ - Accordion
content_structure["sections"].append({
    "type": "faq_section",
    "title": "Sıkça Sorulan Sorular",
    "faqs": [
        {
            "q": "Vergi danışmanlığı almak zorunlu mudur?",
            "a": "Yasal bir zorunluluk yoktur ancak karmaşık vergi süreçlerini sağlıklı yönetmek için uzman desteği önerilir."
        },
        {
            "q": "Vergi danışmanlığı ne kadar sürede sonuç verir?",
            "a": "Hizmetin kapsamına göre değişir. Vergi planlaması birkaç hafta, inceleme süreçleri ise daha uzun sürebilir."
        },
        {
            "q": "Kimler vergi danışmanlığı almalı?",
            "a": "Şirket sahipleri, girişimciler, e-ticaret yapanlar, serbest meslek sahipleri, uluslararası faaliyet gösterenler ve yatırımcılar."
        }
    ]
})

# 8. CTA - Final Call to Action
content_structure["sections"].append({
    "type": "cta_box",
    "title": "Vergi Yükünüzü Azaltmaya Hazır mısınız?",
    "description": "Uzman ekibimizle tanışın ve işletmeniz için en uygun vergi stratejisini belirleyin.",
    "button_text": "Ücretsiz Danışmanlık Alın",
    "secondary_button": "İletişime Geçin"
})

# Final Output
final_data = {
    "slug": "vergi-yonetim-danismanligi",
    "category_slug": "vergi-finans",
    "category_name": "Vergi",
    "title": "Vergi Yönetim",
    "title_highlighted": "Danışmanlığı",
    "hero_image": "/vergi-yonetim-hero.webp",
    "youtube_id": "",
    "content_json": content_structure
}

with open('api/vergi_content_final.json', 'w', encoding='utf-8') as f:
    json.dump(final_data, f, ensure_ascii=False, indent=2)

print("✅ Clean JSON created: api/vergi_content_final.json")
