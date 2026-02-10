import json
import re
import os

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

# Build CORPORATE PREMIUM content structure
content_structure = {
    "sections": []
}

# 1. INTRO - What is Tax Management (Large, readable text)
content_structure["sections"].append({
    "type": "intro_text",
    "content": """
        <p class="lead">Vergi mevzuatı, gerçek ve tüzel kişilerin vergi yükümlülüklerini belirleyen ve bu yasal süreci düzenleyen kuralların bütününe denir. Vergi Usul Kanunu, Gelir Vergisi ve Kurumlar Vergisi Kanunu ile Harcama Üzerinden Alınan Vergiler bu mevzuatın temelini oluşturmaktadır.</p>
        
        <p>Türkiye Cumhuriyeti içerisinde Gelir Vergisi Kanunda sayılan 7 gelir unsurunu kapsayan gerçek kişileri ve Kurumlar Vergisi Kanunundaki tüzel kişileri kapsayan mevzuat, tam ve dar mükellef olarak sınıflandırılmaktadır.</p>
        
        <p>Vergi yönetim danışmanlığı, işletmelerin ve bireylerin vergi yükümlülüklerini en etkin şekilde yerine getirmelerini sağlarken, yasal çerçeve içinde vergi yükünü optimize etmeyi hedefler. Profesyonel danışmanlık desteği ile hem mevzuata uyum sağlanır hem de mali sürdürülebilirlik güçlendirilir.</p>
    """
})

# 2. TRUST BADGES - Show credibility
content_structure["sections"].append({
    "type": "trust_badges"
})

# 3. STATS SECTION - Animated counters
content_structure["sections"].append({
    "type": "stats_section"
})

# 4. PLANNING PROCESS - Clean numbered steps
content_structure["sections"].append({
    "type": "process_grid",
    "title": "Vergi Planlama Süreci",
    "description": "Etkin vergi yönetimi için izlediğimiz sistematik yaklaşım",
    "steps": [
        {
            "number": "01",
            "title": "Mükellef Türü Tespiti",
            "desc": "Her grubun vergi oranları farklıdır. Doğru mükellefiyetin belirlenmesi kritiktir. İşletmenizin yapısı, gelir kaynakları ve faaliyet alanı detaylı olarak incelenir."
        },
        {
            "number": "02",
            "title": "Gelir-Gider Analizi",
            "desc": "Hangi vergiye tabi olduğunuz belirlenir ve güncel mevzuat değerlendirilir. Tüm gelir kalemleri ve gider unsurları detaylıca analiz edilir."
        },
        {
            "number": "03",
            "title": "Avantajların Kullanımı",
            "desc": "Teşvikler, vergi indirimleri ve istisnalar planlamaya dahil edilir. Yasal sınırlar içinde maksimum tasarruf sağlanır."
        },
        {
            "number": "04",
            "title": "Beyanname Planlaması",
            "desc": "Ödeme tarihlerine uygun beyannameler hazırlanarak ceza riskleri ortadan kaldırılır. Tüm süreç dijital ortamda takip edilir."
        }
    ]
})

# 3. RECENT CHANGES - Simple list
content_structure["sections"].append({
    "type": "info_list",
    "title": "Son Yıllarda Yapılan Önemli Değişiklikler",
    "items": [
        {
            "title": "Yeni Vergi Dilimleri",
            "desc": "%15'ten başlayıp yüksek gelir grupları için %40'a kadar kademelendirilen yeni tarifeler uygulanmaya başlandı."
        },
        {
            "title": "Asgari Ücret Muafiyeti",
            "desc": "2022 yılı itibarıyla asgari ücret gelir ve damga vergisinden muaf tutularak çalışanların net geliri artırıldı."
        },
        {
            "title": "Beyanname Genişlemesi",
            "desc": "Birden fazla gelire sahip olanların beyanname verme yükümlülüğü genişletilerek vergi tabanı güçlendirildi."
        },
        {
            "title": "CRS Uygulaması",
            "desc": "Yurt dışı finansal bilgilerin Türkiye ile karşılıklı paylaşımı (Common Reporting Standard) düzenlendi."
        },
        {
            "title": "Genç Girişimci Teşviki",
            "desc": "29 yaş altı girişimciler için 3 yıl süreyle gelir vergisi muafiyeti sağlanarak genç girişimcilik destekleniyor."
        },
        {
            "title": "E-Dönüşüm Zorunluluğu",
            "desc": "E-fatura, e-arşiv ve e-defter uygulamaları yaygınlaştırılarak dijital dönüşüm hızlandırıldı."
        }
    ]
})

# 4. SERVICES - Two column professional list
content_structure["sections"].append({
    "type": "services_list",
    "title": "Sunduğumuz Hizmetler",
    "services": [
        {
            "title": "Vergi Planlaması",
            "desc": "Gelir, gider ve yatırım kalemlerinizi en avantajlı şekilde yapılandırarak vergi yükünüzü optimize ediyoruz."
        },
        {
            "title": "Mevzuata Uyum",
            "desc": "Güncel vergi mevzuatı sürecine uyum sağlayarak risk minimizasyonu gerçekleştiriyor, cezai yaptırımlardan koruyoruz."
        },
        {
            "title": "Risk Yönetimi",
            "desc": "İnceleme riski taşıyan işlemler tespit edilerek gerekli önlemler alınır ve savunma stratejileri oluşturulur."
        },
        {
            "title": "Transfer Fiyatlandırması",
            "desc": "OECD standartlarına uygun fiyat politikası ve raporlama desteği ile uluslararası işlemlerinizi güvence altına alıyoruz."
        },
        {
            "title": "Çifte Vergilendirme",
            "desc": "Yurt dışında gelir elde edenler için çifte vergilendirmeyi önleme anlaşmalarından maksimum fayda sağlıyoruz."
        },
        {
            "title": "Vergi Optimizasyonu",
            "desc": "Yasal sınırlar içinde vergi avantajlarından en üst düzeyde yararlanmanızı sağlayan stratejiler geliştiriyoruz."
        }
    ]
})

# 5. BENEFITS - Simple grid
content_structure["sections"].append({
    "type": "benefits_simple",
    "title": "İşletmenize Kazandırdıklarımız",
    "benefits": [
        {
            "title": "Mali Tasarruf",
            "desc": "Vergi teşvikleri, indirimler ve istisnalardan maksimum yararlanarak işletme bütçenizi optimize ediyoruz."
        },
        {
            "title": "Risk Minimizasyonu",
            "desc": "Cezai yaptırımlardan korunma ve yasal güvenlik sağlayarak işletmenizi olası risklere karşı koruyoruz."
        },
        {
            "title": "Stratejik Planlama",
            "desc": "Uzun vadeli mali sürdürülebilirlik için stratejik vergi planlaması ve danışmanlık hizmeti sunuyoruz."
        },
        {
            "title": "Uluslararası Uyum",
            "desc": "Çifte vergilendirme önleme ve OECD standartlarına uyum ile global pazarlarda güvenle faaliyet göstermenizi sağlıyoruz."
        }
    ]
})

# 6. TAX AUDIT - Text with side image
content_structure["sections"].append({
    "type": "content_with_image",
    "title": "Vergi İncelemesi Sürecinde Yanınızdayız",
    "content": """
        <p>Vergi incelemesi, mükelleflerin vergi yükümlülüklerini doğru yerine getirip getirmediğini denetleyen resmi bir süreçtir. Bu süreç, işletmeler için stresli ve karmaşık olabilir.</p>
        
        <p>Uzman danışmanlarımız bu süreçte sizinle birlikte hareket ederek tüm haklarınızı korur, gerekli belgeleri hazırlar ve süreci en şeffaf şekilde yönetiriz. İnceleme öncesi hazırlıktan, inceleme sırasındaki temsile, sonrasındaki itiraz süreçlerine kadar her aşamada yanınızdayız.</p>
        
        <ul>
            <li>Ön inceleme ve hazırlık</li>
            <li>Süreç boyunca profesyonel temsil</li>
            <li>İtiraz ve savunma stratejisi</li>
            <li>Uzlaşma görüşmeleri</li>
        </ul>
    """,
    "image": "/vergi-audit.webp",
    "image_position": "right"
})

# 7. FAQ - Clean accordion
content_structure["sections"].append({
    "type": "faq_clean",
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

# 8. CTA - Simple, professional
content_structure["sections"].append({
    "type": "cta_simple",
    "title": "Profesyonel Vergi Danışmanlığı İçin Bizimle İletişime Geçin",
    "description": "Uzman ekibimiz, işletmeniz için en uygun vergi stratejisini belirlemek üzere hazır.",
    "button_text": "İletişime Geçin"
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

# Also write to public/data for local development without DB
os.makedirs('public/data', exist_ok=True)
with open('public/data/vergi-yonetim-danismanligi.json', 'w', encoding='utf-8') as f:
    json.dump(final_data, f, ensure_ascii=False, indent=2)

print("✅ Corporate Premium content created: api/vergi_content_final.json and public/data/vergi-yonetim-danismanligi.json")
print(f"📊 Total sections: {len(content_structure['sections'])}")
