import os
import re
import json

def get_all_service_data():
    all_pages = {}
    
    # Check all files in database directory
    for f in os.listdir('database'):
        # Parse SQL files (ignoring logs)
        if f.endswith('.sql') and 'log' not in f and 'schema' not in f:
            print(f"Parsing SQL: {f}")
            with open(os.path.join('database', f), 'r') as file:
                content = file.read()
                # Split by INSERT statements (case insensitive)
                statements = re.split(r'INSERT INTO `?services_content`?', content, flags=re.IGNORECASE)
                for stmt in statements[1:]:
                    val_match = re.search(r"VALUES\s*\((.*)\);", stmt, re.DOTALL | re.IGNORECASE)
                    if not val_match: continue
                    vals_str = val_match.group(1).strip()
                    vals = []
                    cp = 0
                    while cp < len(vals_str):
                        start = vals_str.find("'", cp)
                        if start == -1: break
                        end = start + 1
                        while True:
                            end = vals_str.find("'", end)
                            if end == -1: break
                            # Handle escaped quotes ''
                            if (end + 1 < len(vals_str) and vals_str[end+1] == "'"): end += 2
                            else: break
                        val = vals_str[start+1:end].replace("''", "'")
                        vals.append(val)
                        cp = end + 1
                    
                    if len(vals) >= 7: # Minimum required fields
                        # Search for content_json which is usually near the end
                        # For master_migration.sql, it's index 7 or 8 based on cols
                        # Let's be smart: it's the one starting with {
                        c_json = "{}"
                        for v in vals:
                            if v.strip().startswith('{') and v.strip().endswith('}'):
                                c_json = v
                                break
                        
                        slug = vals[0].strip()
                        try:
                            all_pages[slug] = {
                                'slug': slug,
                                'category_slug': vals[1] if len(vals) > 1 else "",
                                'category_name': vals[2] if len(vals) > 2 else "",
                                'title': vals[3] if len(vals) > 3 else slug,
                                'title_highlighted': vals[4] if len(vals) > 4 else "",
                                'hero_image': vals[5] if len(vals) > 5 else "",
                                'content_json': json.loads(c_json)
                            }
                        except: pass

        # Parse JSON files (ignoring logs/backups)
        elif f.endswith('.json') and 'log' not in f and 'backup' not in f:
            print(f"Parsing JSON: {f}")
            with open(os.path.join('database', f), 'r') as file:
                try:
                    data = json.load(file)
                    items = []
                    if isinstance(data, dict):
                        if 'slug' in data: items = [data]
                        else: items = list(data.values())
                    elif isinstance(data, list): items = data
                    
                    for item in items:
                        if isinstance(item, dict) and 'slug' in item:
                            slug = item['slug']
                            if slug not in all_pages:
                                all_pages[slug] = item
                            else:
                                # Merge/Update
                                if item.get('content_json', {}).get('sections'):
                                    all_pages[slug].update(item)
                except: pass

    return all_pages

def save_master_backup():
    data = get_all_service_data()
    backup_path = 'database/master_db_backup.json'
    with open(backup_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    print(f"TOTAL RECOVERED SERVICES: {len(data)}")
    print(f"Master backup created at: {backup_path}")

if __name__ == "__main__":
    save_master_backup()
