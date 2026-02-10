import json
import re

# Load extracted content
with open('extracted_vergi_content.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

sections = data['sections']

def clean_html(html):
    """Remove forms, scripts, and excessive markup"""
    html = re.sub(r'<form.*?</form>', '', html, flags=re.DOTALL | re.IGNORECASE)
    html = re.sub(r'<button.*?</button>', '', html, flags=re.DOTALL | re.IGNORECASE)
    html = re.sub(r'<input.*?>', '', html, flags=re.IGNORECASE)
    html = re.sub(r'<select.*?</select>', '', html, flags=re.DOTALL | re.IGNORECASE)
    html = re.sub(r'\s+', ' ', html)
    return html.strip()

def find_section(keyword):
    for s in sections:
        if keyword.lower() in s['title'].lower():
            return s
    return None

# Build modern content structure
content_structure = {
    "sections": []
}

# 1. STATS HIGHLIGHT - Key Metrics
content_structure["sections"].append({
    "type": "stats_highlight",
    "stats": [
        {"number": "15+", "label": "Yıllık Tecrübe", "icon": "Award"},
        {"number": "500+", "label": "Başarılı Proje", "icon": "Briefcase"},
        {"number": "%98", "label": "Müşteri Memnuniyeti", "icon": "Star"},
        {"number": "7/24", "label": "Destek Hizmeti", "icon": "Zap"}
    ]
})

# 2. INTRO - What is Tax Management Consulting
s_nedir = find_section("Nedir")
if s_nedir:
    content_structure["sections"].append({
        "type": "feature_showcase",
        "layout": "right",
        "title": "Vergi Yönetim Danışmanlığı Nedir?",
        "subtitle": "Profesyonel Vergi Danışmanlığı ile İşletmenizi Güvence Altına Alın",
        "content": """
            <p>Vergi mevzuatı, gerçek ve tüzel kişilerin vergi yükümlülüklerini belirleyen ve bu yasal süreci düzenleyen kuralların bütününe denir. <strong>Vergi Usul Kanunu, Gelir Vergisi ve Kurumlar Vergisi Kanunu ve Harcama Üzerinden Alınan Vergiler</strong> bu mevzuatın temelini oluşturmaktadır.</p>
            <p>Türkiye Cumhuriyeti içerisinde Gelir Vergisi Kanunda sayılan 7 gelir unsurunu kapsayan gerçek kişileri ve kurumlar vergisi kanunundaki tüzel kişileri kapsayan mevzuat, tam ve dar mükellef olarak sınıflandırılmaktadır.</p>
        """,
        "image": "/vergi-yonetim-hero.webp",
        "highlights": [
            "Mevzuata Tam Uyum",
            "Risk Minimizasyonu",
            "Mali Avantajlar",
            "Stratejik Planlama"
        ]
    })

# 3. TIMELINE - Tax Planning Process
content_structure["sections"].append({
    "type": "timeline_vertical",
    "title": "Vergi Planlaması Süreci",
    "description": "Profesyonel vergi planlaması ile vergi yükünüzü azaltın ve yasal güvenliğinizi artırın.",
    "steps": [
        {
            "phase": "Analiz",
            "title": "Mükellef Türü Tespiti",
            "desc": "Her grubun vergi oranları farklıdır. Doğru mükellefiyetin belirlenmesi kritiktir. İşletmenizin yapısı, gelir kaynakları ve faaliyet alanı detaylı olarak incelenir.",
            "duration": "1-2 Gün",
            "icon": "Target"
        },
        {
            "phase": "Değerlendirme",
            "title": "Gelir-Gider Analizi",
            "desc": "Hangi vergiye tabi olduğunuz belirlenir ve güncel mevzuat değerlendirilir. Tüm gelir kalemleri ve gider unsurları detaylıca analiz edilir.",
            "duration": "3-5 Gün",
            "icon": "PieChart"
        },
        {
            "phase": "Optimizasyon",
            "title": "Avantajların Kullanımı",
            "desc": "Teşvikler, vergi indirimleri ve istisnalar planlamaya dahil edilir. Yasal sınırlar içinde maksimum tasarruf sağlanır.",
            "duration": "1 Hafta",
            "icon": "TrendingUp"
        },
        {
            "phase": "Uygulama",
            "title": "Beyanname Planlaması",
            "desc": "Ödeme tarihlerine uygun beyannameler hazırlanarak ceza riskleri ortadan kaldırılır. Tüm süreç dijital ortamda takip edilir.",
            "duration": "Sürekli",
            "icon": "CheckCircle2"
        }
    ]
})

# 4. RECENT CHANGES - Icon Grid
content_structure["sections"].append({
    "type": "icon_grid",
    "title": "Son Yıllarda Yapılan Önemli Değişiklikler",
    "subtitle": "Güncel mevzuat değişikliklerini takip ederek işletmenizi risklere karşı koruyoruz",
    "items": [
        {
            "icon": "TrendingUp",
            "title": "Yeni Vergi Dilimleri",
            "desc": "%15'ten başlayıp yüksek gelir grupları için %40'a kadar kademelendirilen yeni tarifeler uygulanmaya başlandı."
        },
        {
            "icon": "ShieldCheck",
            "title": "Asgari Ücret Muafiyeti",
            "desc": "2022 yılı itibarıyla asgari ücret gelir ve damga vergisinden muaf tutularak çalışanların net geliri artırıldı."
        },
        {
            "icon": "BookOpen",
            "title": "Beyanname Genişlemesi",
            "desc": "Birden fazla gelire sahip olanların beyanname verme yükümlülüğü genişletilerek vergi tabanı güçlendirildi."
        },
        {
            "icon": "Globe",
            "title": "CRS Uygulaması",
            "desc": "Yurt dışı finansal bilgilerin Türkiye ile karşılıklı paylaşımı (Common Reporting Standard) düzenlendi."
        },
        {
            "icon": "Users",
            "title": "Genç Girişimci Teşviki",
            "desc": "29 yaş altı girişimciler için 3 yıl süreyle gelir vergisi muafiyeti sağlanarak genç girişimcilik destekleniyor."
        },
        {
            "icon": "Zap",
            "title": "E-Dönüşüm Zorunluluğu",
            "desc": "E-fatura, e-arşiv ve e-defter uygulamaları yaygınlaştırılarak dijital dönüşüm hızlandırıldı."
        }
    ]
})

# 5. SERVICES - Enhanced Service Cards
content_structure["sections"].append({
    "type": "service_cards",
    "title": "Sunduğumuz Hizmetler",
    "subtitle": "Kapsamlı vergi danışmanlığı ile işletmenizi geleceğe taşıyoruz",
    "cards": [
        {
            "icon": "Target",
            "title": "Vergi Planlaması",
            "desc": "Gelir, gider ve yatırım kalemlerinizi en avantajlı şekilde yapılandırarak vergi yükünüzü optimize ediyoruz.",
            "color": "blue"
        },
        {
            "icon": "CheckCircle2",
            "title": "Mevzuata Uyum",
            "desc": "Güncel vergi mevzuatı sürecine uyum sağlayarak risk minimizasyonu gerçekleştiriyor, cezai yaptırımlardan koruyoruz.",
            "color": "green"
        },
        {
            "icon": "ShieldCheck",
            "title": "Risk Yönetimi",
            "desc": "İnceleme riski taşıyan işlemler tespit edilerek gerekli önlemler alınır ve savunma stratejileri oluşturulur.",
            "color": "red"
        },
        {
            "icon": "Globe",
            "title": "Transfer Fiyatlandırması",
            "desc": "OECD standartlarına uygun fiyat politikası ve raporlama desteği ile uluslararası işlemlerinizi güvence altına alıyoruz.",
            "color": "purple"
        },
        {
            "icon": "Award",
            "title": "Çifte Vergilendirme",
            "desc": "Yurt dışında gelir elde edenler için çifte vergilendirmeyi önleme anlaşmalarından maksimum fayda sağlıyoruz.",
            "color": "orange"
        },
        {
            "icon": "Zap",
            "title": "Vergi Optimizasyonu",
            "desc": "Yasal sınırlar içinde vergi avantajlarından en üst düzeyde yararlanmanızı sağlayan stratejiler geliştiriyoruz.",
            "color": "indigo"
        }
    ]
})

# 6. BENEFITS - What We Bring
content_structure["sections"].append({
    "type": "benefits_grid",
    "title": "İşletmenize Kazandırdıklarımız",
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
        }
    ]
})

# 7. TAX AUDIT - Feature Showcase with Image
content_structure["sections"].append({
    "type": "feature_showcase",
    "layout": "left",
    "title": "Vergi İncelemesi Sürecinde Yanınızdayız",
    "subtitle": "Profesyonel destek ile inceleme sürecini güvenle yönetin",
    "content": """
        <p>Vergi incelemesi, mükelleflerin vergi yükümlülüklerini doğru yerine getirip getirmediğini denetleyen resmi bir süreçtir. Bu süreç, işletmeler için stresli ve karmaşık olabilir.</p>
        <p>Uzman danışmanlarımız bu süreçte sizinle birlikte hareket ederek tüm haklarınızı korur, gerekli belgeleri hazırlar ve süreci en şeffaf şekilde yönetiriz. İnceleme öncesi hazırlıktan, inceleme sırasındaki temsile, sonrasındaki itiraz süreçlerine kadar her aşamada yanınızdayız.</p>
    """,
    "image": "/vergi-audit.webp",
    "highlights": [
        "Ön İnceleme ve Hazırlık",
        "Süreç Boyunca Temsil",
        "İtiraz ve Savunma Stratejisi",
        "Uzlaşma Görüşmeleri"
    ]
})

# 8. FAQ - Frequently Asked Questions
content_structure["sections"].append({
    "type": "faq_section",
    "title": "Sıkça Sorulan Sorular",
    "faqs": [
        {
            "q": "Vergi danışmanlığı almak zorunlu mudur?",
            "a": "Yasal bir zorunluluk yoktur ancak karmaşık vergi süreçlerini sağlıklı yönetmek, riskleri minimize etmek ve vergi avantajlarından maksimum faydalanmak için uzman desteği önerilir. Özellikle kurumsal şirketler ve yüksek gelirli bireyler için profesyonel danışmanlık büyük önem taşır."
        },
        {
            "q": "Vergi danışmanlığı ne kadar sürede sonuç verir?",
            "a": "Hizmetin kapsamına göre değişir. Basit bir vergi planlaması birkaç hafta sürebilirken, kapsamlı bir inceleme süreci veya transfer fiyatlandırması çalışması birkaç ay alabilir. İlk görüşmede size özel bir zaman planı sunuyoruz."
        },
        {
            "q": "Kimler vergi danışmanlığı almalı?",
            "a": "Şirket sahipleri, girişimciler, e-ticaret yapanlar, serbest meslek sahipleri, uluslararası faaliyet gösterenler, yatırımcılar ve yüksek gelirli bireyler vergi danışmanlığından faydalanabilir. Özellikle karmaşık gelir yapısına sahip olanlar için kritik öneme sahiptir."
        },
        {
            "q": "Vergi incelemesi durumunda ne yapmalıyım?",
            "a": "İnceleme bildirimi aldığınızda hemen uzman desteği almanız önerilir. Tüm mali belgeleri hazırlamalı, eksiklikleri tamamlamalı ve profesyonel bir danışman eşliğinde süreci yönetmelisiniz. Erken müdahale, olası cezaları minimize eder."
        },
        {
            "q": "Transfer fiyatlandırması nedir ve kimler için gereklidir?",
            "a": "Transfer fiyatlandırması, ilişkili şirketler arasındaki ticari işlemlerin piyasa koşullarına uygun fiyatlarla yapılmasını sağlayan bir düzenlemedir. Grup şirketleri, uluslararası ticaret yapan firmalar ve yurt dışı ortaklığı olan şirketler için zorunludur."
        }
    ]
})

# 9. CTA - Final Call to Action
content_structure["sections"].append({
    "type": "cta_box",
    "title": "Vergi Yükünüzü Azaltmaya Hazır mısınız?",
    "description": "Uzman ekibimizle tanışın ve işletmeniz için en uygun vergi stratejisini belirleyin. Ücretsiz ön görüşme için hemen iletişime geçin.",
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

print("✅ Modern content structure created: api/vergi_content_final.json")
print(f"📊 Total sections: {len(content_structure['sections'])}")
