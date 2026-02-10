import json
import os
# Load extracted content
with open('extracted_vergi_content.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

sections = data['sections']
yt_id = data['youtube_id']

# Construct the content_json structure
final_structure = {
    "sections": []
}

# Helper to find a section by title keyword
def find_section(keyword):
    for s in sections:
        if keyword.lower() in s['title'].lower():
            return s
    return None

# 1. Intro Section (Nedir)
s1 = find_section("Nedir")
if s1:
    final_structure["sections"].append({
        "type": "text",
        "title": s1['title'],
        "content": s1['content']
    })

# 2. Planning Section (Text + Image)
s2 = find_section("Planlaması")
if s2:
    final_structure["sections"].append({
        "type": "image_text",
        "layout": "right", 
        "title": s2['title'],
        "content": s2['content'],
        "image": "/vergi-planning.webp"
    })

# 3. Services List (Hizmetler) 
s3 = find_section("Hizmetler")
if s3:
    final_structure["sections"].append({
        "type": "text",
        "title": s3['title'],
        "content": s3['content'],
        "bg_color": "bg-gray-50"
    })

# 4. Audit Section (İnceleme) 
s4 = find_section("İncelemesi")
if s4:
    final_structure["sections"].append({
        "type": "image_text",
        "layout": "left", 
        "title": s4['title'],
        "content": s4['content'],
        "image": "/vergi-audit.webp"
    })

# 5. Add others
used_titles = [s['title'] for s in final_structure["sections"]]
for s in sections:
    if s['title'] not in used_titles and "Bültenler" not in s['title'] and "Yayınlarımız" not in s['title']:
        final_structure["sections"].append({
            "type": "text",
            "title": s['title'],
            "content": s['content']
        })

# Save JSON for PHP to read
final_data = {
    "slug": "vergi-yonetim-danismanligi",
    "category_slug": "vergi-finans",
    "category_name": "Vergi",
    "title": "Vergi Yönetim Danışmanlığı",
    "title_highlighted": "Yönetim Danışmanlığı",
    "hero_image": "/vergi-yonetim-hero.webp",
    "youtube_id": yt_id,
    "content_json": final_structure
}

with open('api/vergi_content_final.json', 'w', encoding='utf-8') as f:
    json.dump(final_data, f, ensure_ascii=False)

# Also write to public/data for local development without DB
os.makedirs('public/data', exist_ok=True)
with open('public/data/vergi-yonetim-danismanligi.json', 'w', encoding='utf-8') as f:
    json.dump(final_data, f, ensure_ascii=False)

print("JSON created: api/vergi_content_final.json and public/data/vergi-yonetim-danismanligi.json")
