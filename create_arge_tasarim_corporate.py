import json
import re
import os

# Load extracted content
with open('icerik/output-ar-ge-ve-tasarim-indirimi-raporu.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# PARSE FLAT CONTENT TO SECTIONS
parsed_sections = {}
current_title = ""
current_content = []

for item in data['content']:
    if item['tag'] == 'H2':
        if current_title:
            parsed_sections[current_title] = "".join(current_content)
        current_title = item['text']
        current_content = []
    elif item['tag'] in ['P', 'LI']:
        tag_start = f"<{item['tag'].lower()}>"
        tag_end = f"</{item['tag'].lower()}>"
        current_content.append(f"{tag_start}{item['text']}{tag_end}")

if current_title:
    parsed_sections[current_title] = "".join(current_content)

def get_content(title_keyword):
    for title, content in parsed_sections.items():
        if title_keyword.lower() in title.lower():
            return content
    return ""

def get_pure_text(title_keyword):
    content = get_content(title_keyword)
    return re.sub(r'<[^>]+>', '', content).strip()

# Build "Transfer Pricing Style" content structure (High-Conversion UI)
page_data = {
    "slug": "ar-ge-ve-tasarim-indirimi-raporu",
    "title": "Ar-Ge ve Tasarım",
    "title_highlighted": "İndirimi Raporu",
    "category": "Vergi",
    "youtube_id": "",
    "breadcrumb": [
        {'name': 'Anasayfa', 'link': '/'},
        {'name': 'Servisler', 'link': '/servisler'},
        {'name': 'Vergi & Finans', 'link': '/servisler/vergi-finans'},
        {'name': 'Vergi', 'link': '/servisler/vergi-finans/vergi'},
        {'name': 'Ar-Ge ve Tasarım İndirimi Raporu', 'link': '/servisler/vergi-finans/vergi/ar-ge-ve-tasarim-indirimi-raporu'}
    ],
    "hero": {
        "title": "Ar-Ge ve Tasarım İndirimi Raporu",
        "description": "Teknoloji ve inovasyon yatırımlarınızı %100 vergi indirimine dönüştüren uzman danışmanlık çözümleri.",
        "image": "/images/arge-tasarim/hero.webp",
        "buttons": [
            { "text": "Ücretsiz Ön Analiz", "link": "#contact", "variant": "primary" },
            { "text": "Teşvikleri İnceleyin", "link": "#services", "variant": "outline" }
        ]
    },
    "sections": [
        {
            "type": "content_with_image",
            "title": "Ar-Ge ve Tasarım Harcamalarınızda %100 Vergi Avantajı",
            "content": f"""
                <p>{get_pure_text("Arge ve Tasarım İndirimi Nedir")}</p>
                <p>Ar-Ge veya Tasarım Merkezi olan firmaların yazdırması zorunlu olan ve yıllık olarak düzenlenen bu rapor ile tüm haklarınızı güvence altına alıyoruz. Harcamalarınızın amortisman yoluyla ikinci kez gider yazılmasını sağlayarak çifte vergi avantajı elde etmenize destek oluyoruz.</p>
            """,
            "image": "/images/arge-tasarim/team.webp",
            "image_position": "right"
        },
        {
            "type": "icon_grid",
            "title": "Kimler Yararlanabilir?",
            "items": [
                {
                    "title": "Ar-Ge Merkezleri",
                    "desc": "En az 15 tam zamanlı personel ile sürekli inovasyon yapan kurumsal yapılar.",
                    "icon": "Target"
                },
                {
                    "title": "Tasarım Merkezleri",
                    "desc": "En az 10 tam zamanlı tasarım personeli ile estetik ve fonksiyon geliştiren merkezler.",
                    "icon": "Cpu"
                },
                {
                    "title": "Proje Bazlı İşletmeler",
                    "desc": "TÜBİTAK, KOSGEB veya Teknopark projeleri yürüten KOBİ ve büyük ölçekli firmalar.",
                    "icon": "Briefcase"
                }
            ]
        },
        {
            "type": "benefits_grid",
            "title": "Ne Kazandırır?",
            "benefits": [
                {
                    "title": "Maksimum Vergi İndirimi",
                    "desc": "Ar-Ge/Tasarım harcamalarının %100'ünün kurum kazancından düşülmesi.",
                    "icon": "TrendingUp"
                },
                {
                    "title": "Personel Teşvikleri",
                    "desc": "Çalışan ücretlerinde damga vergisi, gelir vergisi ve SGK işveren hissesi desteği.",
                    "icon": "Users"
                },
                {
                    "title": "Double Matrah İndirimi",
                    "desc": "Harcamaların hem doğrudan hem de amortisman yoluyla iki kez gider yazılması.",
                    "icon": "BarChart"
                },
                {
                    "title": "Mevzuat Uyumu",
                    "desc": "Sanayi ve Teknoloji Bakanlığı ile Hazine ve Maliye Bakanlığı denetimlerine tam uyum.",
                    "icon": "Shield"
                },
                {
                    "title": "Süresiz Devir Hakkı",
                    "desc": "Kazanç yetersizliği durumunda indirim hakkının sonraki yıllara faiziyle devredilmesi.",
                    "icon": "CheckCircle"
                }
            ]
        },
        {
            "type": "service_cards",
            "title": "SG Öne Çıkanlar",
            "cards": [
                {
                    "title": "Eksiksiz Raporlama",
                    "desc": "Zorunlu olan Ar-Ge ve Tasarım İndirimi Raporlarının hatasız ve hızlı hazırlanması.",
                    "icon": "Search",
                    "color": "blue"
                },
                {
                    "title": "Proaktif Danışmanlık",
                    "desc": "Harcamaların kapsam dışı kalmaması için süreçlerin en başından doğru kurgulanması.",
                    "icon": "Compass",
                    "color": "green"
                },
                {
                    "title": "Hibe ve Fon İlişkisi",
                    "desc": "TÜBİTAK ve KOSGEB fonları ile vergi teşviklerinin entegre yönetimi.",
                    "icon": "Percent",
                    "color": "purple"
                },
                {
                    "title": "Dijital Takip",
                    "desc": "ARTES otomasyon sistemi süreçlerinin profesyonel ekiplerle uçtan uca yönetimi.",
                    "icon": "RefreshCw",
                    "color": "orange"
                }
            ]
        },
        {
            "type": "cta_box",
            "title": "Teşviklerinizi Nakit Akışına Dönüştürelim",
            "description": "Şirketinizin Ar-Ge ve Tasarım potansiyelini analiz etmek ve maksimum indirimden yararlanmak için uzmanlarımıza danışın.",
            "button_text": "Ücretsiz Analiz İsteyin",
            "secondary_button": "Hizmetlerimiz"
        }
    ]
}

# Write output
os.makedirs('public/data', exist_ok=True)
with open('public/data/ar-ge-ve-tasarim-indirimi-raporu.json', 'w', encoding='utf-8') as f:
    json.dump(page_data, f, ensure_ascii=False, indent=2)

print("✅ Ar-Ge Tasarim content updated with Transfer Pricing UI Style!")
