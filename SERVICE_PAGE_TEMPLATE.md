# Service Page Template - Corporate Premium Design

Bu template, tüm servis sayfaları için kullanılacak standart yapıyı tanımlar.

## 📐 Sayfa Yapısı

### **1. Hero Section**
- **Sol:** Başlık + Açıklama + 2 CTA Buton
- **Sağ:** Kompakt Form (Desktop only)
  - 3 alan: Ad Soyad, Email, Telefon
  - Gradient buton
  - Güvenlik notu

### **2. İçerik Bölümleri (Sırayla)**

#### **A. Intro Text** (intro_text)
```python
{
    "type": "intro_text",
    "content": """
        <p class="lead">İlk paragraf - büyük, vurgulu</p>
        <p>Normal paragraf</p>
        <p>Strong kelimeler <strong>turuncu</strong> renkte</p>
    """
}
```
**Özellikler:**
- Gradient arka plan (mavi → beyaz → turuncu)
- Üst dekorasyon: Gradient çizgi + "HİZMET DETAYLARI"
- Alt özellikler: 3 badge (Profesyonel, Uzman, Hızlı)

#### **B. Trust Badges** (trust_badges)
```python
{
    "type": "trust_badges"
}
```
**Özellikler:**
- 4 badge: ISO 9001, 4.9/5, 15+ Yıl, 500+ Proje
- Hover efektleri
- Gradient iconlar

#### **C. Stats Section** (stats_section)
```python
{
    "type": "stats_section"
}
```
**Özellikler:**
- Animasyonlu sayaçlar (scroll'da)
- 4 istatistik
- Koyu gradient arka plan

#### **D. Process Grid** (process_grid)
```python
{
    "type": "process_grid",
    "title": "Süreç Başlığı",
    "description": "Açıklama",
    "steps": [
        {
            "number": "01",
            "title": "Adım Başlığı",
            "desc": "Açıklama"
        }
    ]
}
```
**Özellikler:**
- 2x2 grid
- Gradient underline
- Numbered badges
- Hover efektleri

#### **E. Info List** (info_list)
```python
{
    "type": "info_list",
    "title": "Liste Başlığı",
    "items": [
        {
            "title": "Başlık",
            "desc": "Açıklama"
        }
    ]
}
```
**Özellikler:**
- 2 kolon
- Sol border (turuncu)
- Hover efektleri

#### **F. Services List** (services_list)
```python
{
    "type": "services_list",
    "title": "Hizmetler",
    "services": [
        {
            "title": "Hizmet",
            "desc": "Açıklama"
        }
    ]
}
```
**Özellikler:**
- 2 kolon
- Gradient arka plan
- Turuncu bullet'ler

#### **G. Benefits Simple** (benefits_simple)
```python
{
    "type": "benefits_simple",
    "title": "Faydalar",
    "benefits": [
        {
            "title": "Fayda",
            "desc": "Açıklama"
        }
    ]
}
```
**Özellikler:**
- Koyu gradient arka plan
- Beyaz kartlar
- Glassmorphism

#### **H. Content with Image** (content_with_image)
```python
{
    "type": "content_with_image",
    "title": "Başlık",
    "content": "<p>HTML içerik</p>",
    "image": "/image.webp",
    "image_position": "right"  # veya "left"
}
```
**Özellikler:**
- Gradient underline
- Döndürülmüş gradient dekorasyon
- Responsive

#### **I. FAQ Clean** (faq_clean)
```python
{
    "type": "faq_clean",
    "title": "SSS",
    "faqs": [
        {
            "q": "Soru?",
            "a": "Cevap"
        }
    ]
}
```
**Özellikler:**
- Accordion
- Turuncu border
- Chevron icon

#### **J. CTA Simple** (cta_simple)
```python
{
    "type": "cta_simple",
    "title": "CTA Başlığı",
    "description": "Açıklama",
    "button_text": "Buton"
}
```
**Özellikler:**
- Gradient arka plan
- Grid pattern
- Gradient buton

---

## 🎨 Tasarım Sistemi

### **Renkler:**
- **Primary:** Turuncu (#FF6B35)
- **Secondary:** Lacivert (#1E3A8A)
- **Gradient:** primary → orange-400

### **Tipografi:**
- **Başlıklar:** font-light, text-secondary
- **Vurgular:** text-primary, font-semibold
- **Paragraflar:** text-gray-700, leading-relaxed

### **Spacing:**
- **Section arası:** space-y-12 (48px)
- **İçerik padding:** p-8 lg:p-12

### **Efektler:**
- **Hover:** scale-105, shadow-xl
- **Transition:** duration-300
- **Border radius:** rounded-xl, rounded-2xl, rounded-3xl

---

## 🎯 Lead Capture Sistemi

### **Desktop:**
1. **Hero Form** (sağda, fold'da)
2. **Chat Bubble** (sağ alt)
3. **Exit-Intent Popup** (çıkışta)

### **Mobile:**
1. **Chat Bubble** (sağ alt)
2. **Exit-Intent Popup** (çıkışta)

---

## 📸 Görseller

### **Gerekli Görseller:**
1. **Hero Image:** `/[service]-hero.webp` (1920x1080)
2. **Content Image:** `/[service]-content.webp` (1200x800)

### **Format:**
- WebP
- Quality: 85%
- Unsplash'ten indir

---

## 🚀 Yeni Sayfa Oluşturma

### **1. Python Script Oluştur:**
```python
# create_[service]_corporate.py
import json

content_structure = {
    "sections": []
}

# 1. Intro Text
content_structure["sections"].append({
    "type": "intro_text",
    "content": "..."
})

# 2. Trust Badges
content_structure["sections"].append({
    "type": "trust_badges"
})

# 3. Stats Section
content_structure["sections"].append({
    "type": "stats_section"
})

# 4-10. Diğer section'lar...

# Final Output
final_data = {
    "slug": "service-slug",
    "category_slug": "category",
    "category_name": "Category",
    "title": "Service",
    "title_highlighted": "Title",
    "hero_image": "/service-hero.webp",
    "youtube_id": "",
    "content_json": content_structure
}

with open('api/service_content_final.json', 'w', encoding='utf-8') as f:
    json.dump(final_data, f, ensure_ascii=False, indent=2)
```

### **2. Görselleri İndir:**
```bash
python3 download_images.py
```

### **3. Import Et:**
```bash
python3 create_[service]_corporate.py
curl -X POST http://localhost:8888/api/run_import.php
```

---

## 📋 Checklist

- [ ] Python script oluştur
- [ ] İçeriği yaz (intro, process, services, benefits, faq, cta)
- [ ] Görselleri indir (hero, content)
- [ ] Script'i çalıştır
- [ ] Import et
- [ ] Test et (desktop + mobile)
- [ ] Exit-intent test et
- [ ] Chat bubble test et

---

## 🎯 Standart Section Sırası

1. **intro_text** - Giriş
2. **trust_badges** - Güven
3. **stats_section** - İstatistikler
4. **process_grid** - Süreç (4 adım)
5. **info_list** - Bilgi listesi
6. **services_list** - Hizmetler (6 item)
7. **benefits_simple** - Faydalar (4 item)
8. **content_with_image** - Detaylı içerik
9. **faq_clean** - SSS (5 soru)
10. **cta_simple** - CTA

---

## 💡 İpuçları

- **Intro:** İlk paragraf büyük ve vurgulu olmalı
- **Process:** 4 adım ideal
- **Services:** 6 hizmet, 2 kolon
- **Benefits:** 4 fayda, 2x2 grid
- **FAQ:** 5 soru yeterli
- **CTA:** Kısa ve net

---

**Template hazır!** Bundan sonra tüm servis sayfaları bu yapıyı kullanacak! 🚀
