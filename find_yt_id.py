import re
import quopri

with open('icerik/vergi.mhtml', 'rb') as f:
    content = f.read()

parts = content.split(b'------MultipartBoundary')
decoded_html = ""
for p in parts:
    if b'Content-Type: text/html' in p:
        body_start = p.find(b'\r\n\r\n') + 4
        decoded_html = quopri.decodestring(p[body_start:]).decode('utf-8', errors='ignore')
        break

# Look for any sequence that looks like a YouTube ID
# Videos are often in data-video-id or inside iframe src
matches = re.findall(r'([a-zA-Z0-9_-]{11})', decoded_html)
# This might find too many things. Let's look for "yt" or "video" or "id" nearby
# Usually Sistem Global uses a specific element or class for videos.

# Let's search for "v=" or "embed/" or "be_video"
video_urls = re.findall(r'https://(?:www\.)?youtube\.com/watch\?v=([a-zA-Z0-9_-]{11})', decoded_html)
video_urls += re.findall(r'https://(?:www\.)?youtube\.com/embed/([a-zA-Z0-9_-]{11})', decoded_html)
video_urls += re.findall(r'data-id="([a-zA-Z0-9_-]{11})"', decoded_html)

print("Potential YouTube IDs:", list(set(video_urls)))
