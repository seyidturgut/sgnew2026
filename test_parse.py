import re
import json

sql = """
INSERT INTO services_content (slug, category_slug, category_name, title, title_highlighted, hero_image, youtube_id, content_json, meta_title)
VALUES (
    'kosgeb-destekleri', 'finansmana-erisim', 'Finansmana Erişim', 'KOSGEB', 'Destekleri', '/entrepreneurship.webp', 'KQBkoA6-RSU',
    '{
        "sections": [
            {
                "type": "hero_intro", "icon": "Zap", "badge": "Sürdürülebilir Büyüme"
            }
        ]
    }', 'KOSGEB | Sistem Global'
);
"""

statements = sql.split("INSERT INTO services_content")
for stmt in statements[1:]:
    val_match = re.search(r"VALUES\s*\((.*)\);", stmt, re.DOTALL)
    if val_match:
        vals_str = val_match.group(1).strip()
        print(f"Found values string: {vals_str[:100]}...")
        
        vals = []
        current_pos = 0
        while current_pos < len(vals_str):
            start = vals_str.find("'", current_pos)
            if start == -1: break
            end = start + 1
            while True:
                end = vals_str.find("'", end)
                if end == -1: break
                if end + 1 < len(vals_str) and vals_str[end+1] == "'":
                    end += 2
                else:
                    break
            val = vals_str[start+1:end].replace("''", "'")
            vals.append(val)
            current_pos = end + 1
        print(f"Number of values: {len(vals)}")
        if len(vals) >= 8:
            print(f"Slug: {vals[0]}")
            try:
                data = json.loads(vals[7])
                print("JSON parsed successfully")
            except Exception as e:
                print(f"JSON parse error: {e}")
