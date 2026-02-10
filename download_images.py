#!/usr/bin/env python3
"""
Unsplash'ten görselleri indir ve WebP formatına çevir
"""
import requests
import os
from PIL import Image
from io import BytesIO

# Unsplash API (demo access key - production'da kendi key'inizi kullanın)
UNSPLASH_ACCESS_KEY = "demo"  # Gerçek key gerekli

def download_and_convert_to_webp(url, output_path, width=1920):
    """
    URL'den görsel indir ve WebP formatına çevir
    """
    try:
        print(f"📥 İndiriliyor: {url}")
        
        # Görseli indir
        response = requests.get(url, stream=True)
        response.raise_for_status()
        
        # PIL ile aç
        img = Image.open(BytesIO(response.content))
        
        # Resize (aspect ratio koru)
        if img.width > width:
            ratio = width / img.width
            new_height = int(img.height * ratio)
            img = img.resize((width, new_height), Image.Resampling.LANCZOS)
        
        # WebP olarak kaydet
        img.save(output_path, 'WEBP', quality=85, method=6)
        print(f"✅ Kaydedildi: {output_path}")
        
        return True
    except Exception as e:
        print(f"❌ Hata: {e}")
        return False

# Public directory
public_dir = "public"
os.makedirs(public_dir, exist_ok=True)

# Unsplash'ten direkt URL'ler (API key olmadan)
images = {
    "vergi-yonetim-hero.webp": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",  # Business/Finance
    "vergi-audit.webp": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"  # Business audit/documents
}

print("🚀 Görseller indiriliyor ve WebP'ye çevriliyor...\n")

for filename, url in images.items():
    output_path = os.path.join(public_dir, filename)
    download_and_convert_to_webp(url, output_path)

print("\n✅ Tüm görseller hazır!")
print(f"📁 Konum: {public_dir}/")
