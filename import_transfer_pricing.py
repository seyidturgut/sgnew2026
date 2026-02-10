
import json
import os

# Sayfa Verisi
page_data = {
    "slug": "transfer-fiyatlandirmasi",
    "title": "Transfer Fiyatlandırması",
    "title_highlighted": "Transfer Fiyatlandırması",
    "category": "Vergi",
    "breadcrumb": [
        {"name": "Anasayfa", "link": "/"},
        {"name": "Servisler", "link": "/servisler"},
        {"name": "Vergi & Finans", "link": "/servisler/vergi-finans"},
        {"name": "Vergi", "link": "/servisler/vergi-finans/vergi"},
        {"name": "Transfer Fiyatlandırması", "link": "/servisler/vergi-finans/vergi/transfer-fiyatlandirmasi"}
    ],
    "hero": {
        "title": "Transfer Fiyatlandırması",
        "description": "İşletmenizin ilişkili kişilerle gerçekleştirdiği işlemlerin uluslararası standartlara ve vergi kanunlarına uyumunu sağlıyoruz.",
        "image": "/images/transfer-pricing-hero.webp",
        "buttons": [
            {"text": "Detaylı Bilgi Alın", "link": "#contact", "variant": "primary"},
            {"text": "Hizmetlerimiz", "link": "#services", "variant": "outline"}
        ]
    },
    "sections": [
        {
            "type": "intro_text",
            "content": """
                <h4>\"İhtiyacınıza Uygun Transfer Fiyatlandırma Çözümleri için Sistem Global!\"</h4>
                <p>Transfer Fiyatlandırması Raporu Hazırlama hizmetimizle işletmenizin vergi kanunları ve uluslararası standartlara uyumunu sağlayarak, ilişkili kişilerle gerçekleştirdiğiniz alım, satım, imalat, inşaat, kiralama/kiraya verme, ödünç para alınması/verilmesi gibi işlemleri detaylı bir şekilde inceliyoruz.</p>
                <p>Hizmetimizle hem ilişkili kişilerle gerçekleşmiş işlemleri irdeliyor hem de gelecekte gerçekleştirecek ilişkili kişi işlemlerinde fiyatlamanın tespitine ilişkin destek oluyoruz. İşletmenizi fiyatlamaya ilişkin vergisel risklerden korumak ve optimum düzeyde vergi ödemenizi sağlamak için deneyimli ekibimizle yanınızdayız.</p>
            """
        },
        {
            "type": "info_cards",
            "title": "Kimler İçindir?",
            "cards": [
                {
                    "title": "BMVD Şirketleri",
                    "description": "Büyük Mükellefler Vergi Dairesi Başkanlığına kayıtlı şirketler için zorunlu uyum süreçleri.",
                    "icon": "Users"
                },
                {
                    "title": "Global Operasyonlar",
                    "description": "Yurt dışındaki ilişkili şirketleri ve şubeleri ile işlem yapan kurumlar vergisi mükellefleri.",
                    "icon": "Globe"
                },
                {
                    "title": "Serbest Bölgeler",
                    "description": "Serbest bölgelerdeki şirketler veya serbest bölgelerde şubesi bulunan işletmeler.",
                    "icon": "Building"
                }
            ]
        },
        {
            "type": "benefits",
            "title": "İşletmenize Ne Kazandırır?",
            "items": [
                {
                    "title": "Mevzuat Uyumu",
                    "description": "Ulusal ve uluslararası transfer fiyatlandırması düzenlemelerine tam uyum sağlayarak cezai riskleri minimize eder.",
                    "icon": "CheckCircle"
                },
                {
                    "title": "Vergi Yükü Yönetimi",
                    "description": "Efektif vergi yükünün yönetilmesine yardımcı olur ve vergisel risklerin azaltılmasına katkı sağlar.",
                    "icon": "BarChart"
                },
                {
                    "title": "Kurumsal Şeffaflık",
                    "description": "İlişkili işlemlerde güvenilirlik sağlayarak kurumsal itibarınızı korur ve şeffaflığı artırır.",
                    "icon": "Shield"
                },
                {
                    "title": "Stratejik Avantaj",
                    "description": "Adil fiyatlandırma politikaları ile işletme potansiyelini artırır ve rekabet avantajı sağlar.",
                    "icon": "Target"
                }
            ]
        },
        {
            "type": "services_grid",
            "title": "Sistem Global Öne Çıkanlar",
            "services": [
                {
                    "title": "Doğru Benchmark Analizi",
                    "description": "Emsallere uygunluk ilkesinin sağlanmasında en doğru ve sağlıklı karşılaştırmalı analizlerin yapılması.",
                    "icon": "Search"
                },
                {
                    "title": "Gelecek Yönlendirmesi",
                    "description": "Sadece geçmişe yönelik değil, gelecekteki transfer fiyatlandırması hususunda rehberlik.",
                    "icon": "TrendingUp"
                },
                {
                    "title": "Grup İçi Optimizasyon",
                    "description": "İşletmenizin ve içinde bulunduğu grubun optimum vergi düzeyinde kalmasının sağlanması.",
                    "icon": "Grid"
                },
                {
                    "title": "Yeniden Yapılandırma Rehberliği",
                    "description": "Gerek yurt içinde gerekse yurt dışındaki yeniden yapılandırma işlemlerinde profesyonel rehberlik.",
                    "icon": "Anchor"
                }
            ]
        },
        {
            "type": "content_image",
            "title": "Uluslararası Standartlarda Raporlama",
            "text": "Dünya genelinde transfer fiyatlandırması kuralları giderek sertleşirken, Sistem Global olarak yerel mevzuat ile OECD rehberliği arasındaki köprüyü kuruyoruz. Raporlarımız sadece birer yasal yükümlülük değil, aynı zamanda vergi otoriteleri karşısında en güçlü savunma mekanizmanızdır.",
            "image": "/images/transfer-pricing-audit.webp",
            "imagePosition": "right"
        },
        {
            "type": "cta",
            "title": "Vergisel Risklerinizi Yönetelim",
            "description": "Transfer fiyatlandırması süreçlerinizde uzman desteği almak ve risk analizi yaptırmak için bizimle iletişime geçin.",
            "buttonText": "Ücretsiz Danışmanlık Alın",
            "buttonLink": "#contact"
        }
    ]
}

# Veritabanına kaydetme (db_import simülasyonu)
try:
    import mysql.connector
    conn = mysql.connector.connect(host='localhost', port=8889, user='root', password='root', database='sg2026webDB')
    cursor = conn.cursor()
    
    query = "UPDATE services SET content = %s, category = %s WHERE slug = %s"
    values = (json.dumps(page_data, ensure_ascii=False), page_data['category'], page_data['slug'])
    cursor.execute(query, values)
    
    if cursor.rowcount == 0:
        query = "INSERT INTO services (slug, title, category, content) VALUES (%s, %s, %s, %s)"
        values = (page_data['slug'], page_data['title'], page_data['category'], json.dumps(page_data, ensure_ascii=False))
        cursor.execute(query, values)
        
    conn.commit()
    print(f"✅ Service page created/updated: {page_data['slug']}")
    
    cursor.close()
    conn.close()
except Exception as e:
    print(f"❌ Error: {e}")
    # Local JSON backup
    with open(f"database/imports/{page_data['slug']}.json", 'w', encoding='utf-8') as f:
        json.dump(page_data, f, ensure_ascii=False, indent=2)
