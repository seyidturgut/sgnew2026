import re
import quopri
import json
import html

def extract_content():
    try:
        with open('icerik/vergi.mhtml', 'rb') as f:
            content = f.read()

        # Find the first text/html part
        # MHTML usually has parts separated by boundaries.
        # Let's find "Content-Type: text/html" and take until the next boundary
        
        parts = content.split(b'------MultipartBoundary')
        html_part = None
        for p in parts:
            if b'Content-Type: text/html' in p:
                html_part = p
                break
        
        if not html_part:
            print("No HTML part found.")
            return

        # Header ends at \r\n\r\n
        body_start = html_part.find(b'\r\n\r\n') + 4
        body = html_part[body_start:]
        
        # Decode quoted-printable
        decoded_html = quopri.decodestring(body).decode('utf-8', errors='ignore')
        
        # Extract YouTube ID
        # Look for youtube embed links
        yt_match = re.search(r'youtube\.com/(?:embed/|watch\?v=)([a-zA-Z0-9_-]{11})', decoded_html)
        youtube_id = yt_match.group(1) if yt_match else ""

        # Extracting headings and sections
        # In Elementor/WPBakery, headings are usually <h2> or <h3>
        
        # Strategy: Find all <h2> tags as section headers
        h2_matches = list(re.finditer(r'<h2.*?>\s*(.*?)\s*</h2>', decoded_html, re.DOTALL | re.IGNORECASE))
        
        sections = []
        for i in range(len(h2_matches)):
            title = re.sub(r'<[^>]+>', '', h2_matches[i].group(1)).strip()
            title = html.unescape(title)
            
            start = h2_matches[i].end()
            end = h2_matches[i+1].start() if i+1 < len(h2_matches) else len(decoded_html)
            
            section_content = decoded_html[start:end]
            
            # Basic cleaning: remove scripts, styles, and extra tags
            section_content = re.sub(r'<script.*?>.*?</script>', '', section_content, flags=re.DOTALL)
            section_content = re.sub(r'<style.*?>.*?</style>', '', section_content, flags=re.DOTALL)
            
            # Keep basic formatting tags for React rendering
            # Remove all tags except p, ul, li, strong, b, br
            clean_content = re.sub(r'<(?!p|ul|li|strong|b|br|/p|/ul|/li|/strong|/b|/br)[^>]+>', ' ', section_content)
            clean_content = html.unescape(clean_content).strip()
            
            # Normalize whitespace
            clean_content = re.sub(r'\s+', ' ', clean_content)
            clean_content = clean_content.replace(' </p>', '</p>').replace('<p> ', '<p>')
            
            if title and clean_content:
                sections.append({
                    "title": title,
                    "content": clean_content
                })

        # Save to JSON
        result = {
            "youtube_id": youtube_id,
            "sections": sections
        }
        
        with open('extracted_vergi_content.json', 'w', encoding='utf-8') as out:
            json.dump(result, out, ensure_ascii=False, indent=2)
            
        print(f"Success: Extracted {len(sections)} sections and YouTube ID: {youtube_id}")

    except Exception as e:
        print(f"Error: {str(e)}")

if __name__ == "__main__":
    extract_content()
