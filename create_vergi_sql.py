import json

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
        "layout": "right", # Image on right
        "title": s2['title'],
        "content": s2['content'],
        "image": "/vergi-planning.webp"
    })

# 3. Services List (Hizmetler) -> Maybe convert to cards or list
s3 = find_section("Hizmetler")
if s3:
    # This section has subtitles which could be cards, but keeping as text for now to ensure fidelity
    final_structure["sections"].append({
        "type": "text",
        "title": s3['title'],
        "content": s3['content'],
        "bg_color": "bg-gray-50"
    })

# 4. Audit Section (İnceleme) (Text + Image)
s4 = find_section("İncelemesi")
if s4:
    final_structure["sections"].append({
        "type": "image_text",
        "layout": "left", # Image on left
        "title": s4['title'],
        "content": s4['content'],
        "image": "/vergi-audit.webp"
    })

# 5. Add the rest as text blocks, skipping the ones used
used_titles = [s['title'] for s in final_structure["sections"]]

for s in sections:
    if s['title'] not in used_titles and "Bültenler" not in s['title'] and "Yayınlarımız" not in s['title']:
        final_structure["sections"].append({
            "type": "text",
            "title": s['title'],
            "content": s['content']
        })

# Create SQL
json_str = json.dumps(final_structure, ensure_ascii=False).replace("'", "''") # Escape single quotes for SQL

sql = f"""
DELETE FROM services_content WHERE slug = 'vergi-yonetim-danismanligi';
INSERT INTO services_content (slug, category_slug, category_name, title, title_highlighted, hero_image, youtube_id, content_json)
VALUES (
    'vergi-yonetim-danismanligi',
    'vergi-finans',
    'Vergi',
    'Vergi Yönetim Danışmanlığı',
    'Yönetim Danışmanlığı',
    '/vergi-yonetim-hero.webp',
    '{yt_id}',
    '{json_str}'
);
"""

with open('database/vergi_yonetim_insert.sql', 'w', encoding='utf-8') as f:
    f.write(sql)

print("SQL created: database/vergi_yonetim_insert.sql")
