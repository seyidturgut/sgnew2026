
import sys
import os
import requests
from PIL import Image
from io import BytesIO

def download_image(query, output_path, width=1920):
    # Unsplash Source API (deprecated but works for random topic search somewhat, or use specific clean URLs)
    # Using specific high quality finance/business URLs based on query keywords mapping
    
    url_map = {
        "transfer pricing": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80", # Financial analysis
        "business tax audit": "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=80", # Audit documents
        "tax management": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80", # Charts/Graphs
        "financial meeting": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80", # Meeting
        "global business": "https://images.unsplash.com/photo-1526304640152-d4619684e484?w=1920&q=80" # Globe/Business
    }
    
    # Try to find best match from map, fallback to tax management one
    image_url = url_map.get(query, url_map["tax management"])
    
    if "audit" in query.lower():
        image_url = url_map["business tax audit"]
    elif "meeting" in query.lower():
        image_url = url_map["financial meeting"]
    elif "global" in query.lower():
        image_url = url_map["global business"]
    
    print(f"Downloading from: {image_url}")
    
    try:
        response = requests.get(image_url)
        response.raise_for_status()
        
        img = Image.open(BytesIO(response.content))
        
        # Resize logic
        if img.width > width:
            ratio = width / img.width
            new_height = int(img.height * ratio)
            img = img.resize((width, new_height), Image.Resampling.LANCZOS)
            
        # Ensure dir exists
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
            
        img.save(output_path, "WEBP", quality=85)
        print(f"Saved to: {output_path}")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python smart_download.py <query> <output_path> [width]")
        sys.exit(1)
        
    query = sys.argv[1]
    output_path = sys.argv[2]
    width = int(sys.argv[3]) if len(sys.argv) > 3 else 1920
    
    download_image(query, output_path, width)
