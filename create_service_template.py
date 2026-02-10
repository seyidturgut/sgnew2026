#!/usr/bin/env python3
"""
Yeni Servis Sayfası Oluşturma Template Script
Bu script'i kopyalayıp içeriği değiştirerek yeni sayfa oluşturun
"""
import json

# ============================================
# BURADAN BAŞLAYIN - İÇERİĞİ DEĞİŞTİRİN
# ============================================

# Sayfa bilgileri
PAGE_INFO = {
    "slug": "service-slug",  # URL'de görünecek
    "category_slug": "category",  # Kategori slug
    "category_name": "Category Name",  # Kategori adı
    "title": "Service",  # Hero başlık 1
    "title_highlighted": "Title",  # Hero başlık 2 (vurgulu)
    "hero_image": "/service-hero.webp",  # Hero arka plan
    "youtube_id": ""  # Varsa YouTube ID
}

# İçerik yapısı
content_structure = {
    "sections": []
}

# 1. INTRO TEXT - Giriş metni
content_structure["sections"].append({
    "type": "intro_text",
    "content": """
        <p class="lead">İlk paragraf büyük ve vurgulu olmalı. Hizmetin özünü anlatın.</p>
        
        <p>İkinci paragraf normal boyutta. Detayları ekleyin.</p>
        
        <p>Üçüncü paragraf. <strong>Vurgulu kelimeler</strong> turuncu renkte görünür.</p>
    """
})

# 2. TRUST BADGES - Otomatik
content_structure["sections"].append({
    "type": "trust_badges"
})

# 3. STATS SECTION - Otomatik
content_structure["sections"].append({
    "type": "stats_section"
})

# 4. PROCESS GRID - Süreç adımları (4 adım)
content_structure["sections"].append({
    "type": "process_grid",
    "title": "Süreç Başlığı",
    "description": "Süreç açıklaması",
    "steps": [
        {
            "number": "01",
            "title": "Birinci Adım",
            "desc": "Adım açıklaması"
        },
        {
            "number": "02",
            "title": "İkinci Adım",
            "desc": "Adım açıklaması"
        },
        {
            "number": "03",
            "title": "Üçüncü Adım",
            "desc": "Adım açıklaması"
        },
        {
            "number": "04",
            "title": "Dördüncü Adım",
            "desc": "Adım açıklaması"
        }
    ]
})

# 5. INFO LIST - Bilgi listesi
content_structure["sections"].append({
    "type": "info_list",
    "title": "Liste Başlığı",
    "items": [
        {
            "title": "Başlık 1",
            "desc": "Açıklama 1"
        },
        {
            "title": "Başlık 2",
            "desc": "Açıklama 2"
        },
        {
            "title": "Başlık 3",
            "desc": "Açıklama 3"
        }
    ]
})

# 6. SERVICES LIST - Hizmetler (6 item ideal)
content_structure["sections"].append({
    "type": "services_list",
    "title": "Sunduğumuz Hizmetler",
    "services": [
        {
            "title": "Hizmet 1",
            "desc": "Hizmet açıklaması"
        },
        {
            "title": "Hizmet 2",
            "desc": "Hizmet açıklaması"
        },
        {
            "title": "Hizmet 3",
            "desc": "Hizmet açıklaması"
        },
        {
            "title": "Hizmet 4",
            "desc": "Hizmet açıklaması"
        },
        {
            "title": "Hizmet 5",
            "desc": "Hizmet açıklaması"
        },
        {
            "title": "Hizmet 6",
            "desc": "Hizmet açıklaması"
        }
    ]
})

# 7. BENEFITS - Faydalar (4 item ideal)
content_structure["sections"].append({
    "type": "benefits_simple",
    "title": "İşletmenize Kazandırdıklarımız",
    "benefits": [
        {
            "title": "Fayda 1",
            "desc": "Fayda açıklaması"
        },
        {
            "title": "Fayda 2",
            "desc": "Fayda açıklaması"
        },
        {
            "title": "Fayda 3",
            "desc": "Fayda açıklaması"
        },
        {
            "title": "Fayda 4",
            "desc": "Fayda açıklaması"
        }
    ]
})

# 8. CONTENT WITH IMAGE - Görsel içerik
content_structure["sections"].append({
    "type": "content_with_image",
    "title": "Detaylı Başlık",
    "content": """
        <p>Paragraf 1</p>
        <p>Paragraf 2</p>
        <ul>
            <li>Liste item 1</li>
            <li>Liste item 2</li>
            <li>Liste item 3</li>
        </ul>
    """,
    "image": "/service-content.webp",
    "image_position": "right"  # veya "left"
})

# 9. FAQ - Sıkça sorulan sorular (5 soru ideal)
content_structure["sections"].append({
    "type": "faq_clean",
    "title": "Sıkça Sorulan Sorular",
    "faqs": [
        {
            "q": "Soru 1?",
            "a": "Cevap 1"
        },
        {
            "q": "Soru 2?",
            "a": "Cevap 2"
        },
        {
            "q": "Soru 3?",
            "a": "Cevap 3"
        },
        {
            "q": "Soru 4?",
            "a": "Cevap 4"
        },
        {
            "q": "Soru 5?",
            "a": "Cevap 5"
        }
    ]
})

# 10. CTA - Call to action
content_structure["sections"].append({
    "type": "cta_simple",
    "title": "CTA Başlığı",
    "description": "CTA açıklaması",
    "button_text": "İletişime Geçin"
})

# ============================================
# BURAYA KADAR - AŞAĞIYI DEĞİŞTİRMEYİN
# ============================================

# Final Output
final_data = {
    "slug": PAGE_INFO["slug"],
    "category_slug": PAGE_INFO["category_slug"],
    "category_name": PAGE_INFO["category_name"],
    "title": PAGE_INFO["title"],
    "title_highlighted": PAGE_INFO["title_highlighted"],
    "hero_image": PAGE_INFO["hero_image"],
    "youtube_id": PAGE_INFO["youtube_id"],
    "content_json": content_structure
}

# Kaydet
output_file = f'api/{PAGE_INFO["slug"]}_content_final.json'
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(final_data, f, ensure_ascii=False, indent=2)

print(f"✅ Corporate Premium content created: {output_file}")
print(f"📊 Total sections: {len(content_structure['sections'])}")
print(f"\n🚀 Next steps:")
print(f"1. python3 download_images.py  # Görselleri indir")
print(f"2. curl -X POST http://localhost:8888/api/run_import.php  # Import et")
