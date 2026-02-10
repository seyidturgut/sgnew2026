import re
import html
import json

def decode_quoted_printable(text):
    text = text.replace('=\r\n', '')
    text = re.sub(r'=([0-9A-F]{2})', lambda m: chr(int(m.group(1), 16)), text)
    return text

with open('icerik/vergi.mhtml', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the HTML part
html_match = re.search(r'Content-Type: text/html.*?\r\n\r\n(.*?)------MultipartBoundary', content, re.DOTALL)
if html_match:
    html_content = decode_quoted_printable(html_match.group(1))
    
    # Remove script tags and style tags for cleaner parsing
    html_content = re.sub(r'<script.*?>.*?</script>', '', html_content, flags=re.DOTALL)
    html_content = re.sub(r'<style.*?>.*?</style>', '', html_content, flags=re.DOTALL)
    
    # Find headers and sections
    # Typical structure in Sistem Global: h1, h2, h3, h4 for titles
    
    # Identify YouTube Video ID
    video_match = re.search(r'youtube\.com/(?:embed/|watch\?v=)([a-zA-Z0-9_-]{11})', html_content)
    youtube_id = video_match.group(1) if video_match else ""
    
    # Extract all headings to identify sections
    headings = re.findall(r'<(h[1-6]).*?>(.*?)</\1>', html_content, re.IGNORECASE | re.DOTALL)
    
    extracted_data = {
        "youtube_id": youtube_id,
        "sections": []
    }
    
    # Simple strategy: everything between two H2 tags is a section
    parts = re.split(r'<h2.*?>.*?</h2>', html_content, flags=re.IGNORECASE | re.DOTALL)
    section_titles = re.findall(r'<h2.*?>(.*?)</h2>', html_content, flags=re.IGNORECASE | re.DOTALL)
    
    # Also look for content within specific divs if possible, but let's stick to text extraction
    for i, title in enumerate(section_titles):
        clean_title = re.sub(r'<[^>]+>', '', title).strip()
        if i+1 < len(parts):
            body = parts[i+1]
            # Clean body - remove tags but keep structure like <p>, <li>
            # Actually, let's keep some semantic tags for DynamicServicePage
            clean_body = re.sub(r'<(?!p|ul|li|br|strong|b|i|em)[^>]+>', '', body)
            clean_body = html.unescape(clean_body).strip()
            
            extracted_data["sections"].append({
                "title": clean_body.split('\n')[0] if not clean_title else clean_title,
                "content": clean_body
            })

    with open('extracted_vergi_content.json', 'w', encoding='utf-8') as out:
        json.dump(extracted_data, out, ensure_ascii=False, indent=2)

    print(f"Extracted YouTube ID: {youtube_id}")
    print(f"Extracted {len(extracted_data['sections'])} sections.")
else:
    print("HTML content not found in MHTML.")
