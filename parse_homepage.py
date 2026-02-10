import re
import html

# MHTML dosyasını oku
with open('icerik/Anasayfa.mhtml', 'r', encoding='utf-8') as f:
    content = f.read()

# HTML kısmını bul (Content-Type: text/html sonrası)
html_match = re.search(r'Content-Type: text/html.*?\r\n\r\n(.*?)------MultipartBoundary', content, re.DOTALL)
if html_match:
    html_content = html_match.group(1)
    
    # Quoted-printable encoding'i decode et
    html_content = html_content.replace('=\r\n', '')  # Satır sonlarını kaldır
    html_content = re.sub(r'=([0-9A-F]{2})', lambda m: chr(int(m.group(1), 16)), html_content)
    html_content = html_content.replace('=3D', '=')
    html_content = html_content.replace('=C4=B1', 'ı')
    html_content = html_content.replace('=C5=9F', 'ş')
    html_content = html_content.replace('=C3=A7', 'ç')
    html_content = html_content.replace('=C3=B6', 'ö')
    html_content = html_content.replace('=C3=BC', 'ü')
    html_content = html_content.replace('=C4=9F', 'ğ')
    html_content = html_content.replace('=C3=87', 'Ç')
    html_content = html_content.replace('=C5=9E', 'Ş')
    html_content = html_content.replace('=C4=B0', 'İ')
    html_content = html_content.replace('=C3=96', 'Ö')
    html_content = html_content.replace('=C3=9C', 'Ü')
    html_content = html_content.replace('=C4=9E', 'Ğ')
    html_content = html_content.replace('=C2=BB', '»')
    html_content = html_content.replace('=C3=A9', 'é')
    html_content = html_content.replace('=C3=BC', 'ü')
    
    # Bölümleri çıkar
    sections = []
    
    # Hero Section
    hero_match = re.search(r'<h2[^>]*>Yeni pazarlara.*?ihracat yapın</h2>', html_content, re.DOTALL)
    if hero_match:
        sections.append(("HERO", hero_match.group(0)))
    
    # Services Section
    services_match = re.search(r'<h2[^>]*>Hizmet</h2>.*?<h2[^>]*>lerimiz</h2>', html_content, re.DOTALL)
    if services_match:
        sections.append(("SERVICES", services_match.group(0)))
    
    # Icon boxes (Vergi ve Finans, Finansmana Erişim, etc.)
    icon_boxes = re.findall(r'<h3[^>]*elementor-icon-box-title[^>]*>.*?</h3>.*?<p[^>]*elementor-icon-box-description[^>]*>(.*?)</p>', html_content, re.DOTALL)
    if icon_boxes:
        sections.append(("ICON_BOXES", icon_boxes))
    
    # Tüm başlıkları bul
    headings = re.findall(r'<h[1-6][^>]*>(.*?)</h[1-6]>', html_content, re.DOTALL)
    
    print("=== ANA SAYFA İÇERİK ANALİZİ ===\n")
    print(f"Toplam {len(headings)} başlık bulundu:\n")
    for i, heading in enumerate(headings[:30], 1):  # İlk 30 başlık
        clean = re.sub(r'<[^>]+>', '', heading).strip()
        if clean and len(clean) > 3:
            print(f"{i}. {clean}")
    
    print("\n\n=== BÖLÜMLER ===\n")
    for section_name, section_content in sections:
        print(f"\n--- {section_name} ---")
        if isinstance(section_content, list):
            for item in section_content[:5]:  # İlk 5 item
                clean = re.sub(r'<[^>]+>', '', item).strip()
                print(f"  • {clean}")
        else:
            clean = re.sub(r'<[^>]+>', '', section_content).strip()
            print(clean[:200] + "..." if len(clean) > 200 else clean)
    
    # Dosyaya kaydet
    with open('homepage_analysis.txt', 'w', encoding='utf-8') as out:
        out.write("ANA SAYFA İÇERİK RAPORU\n")
        out.write("=" * 50 + "\n\n")
        out.write(f"Toplam {len(headings)} başlık bulundu\n\n")
        for i, heading in enumerate(headings, 1):
            clean = re.sub(r'<[^>]+>', '', heading).strip()
            if clean:
                out.write(f"{i}. {clean}\n")
    
    print("\n\nDetaylı rapor 'homepage_analysis.txt' dosyasına kaydedildi.")
else:
    print("HTML içeriği bulunamadı!")
