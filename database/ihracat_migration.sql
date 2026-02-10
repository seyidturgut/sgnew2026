-- GLOBALLEŞME & İHRACAT CONTENT MIGRATION
-- 1. İhracat Danışmanlığı ve İhracata Başlangıç
INSERT INTO `services_content` (slug, category_slug, category_name, title, title_highlighted, hero_image, youtube_id, content_json, seo_title) 
VALUES (
    'ihracat-danismanligi-ve-ihracata-baslangic', 'globallesme-ve-ihracat', 'Globalleşme & İhracat', 'İhracat Danışmanlığı ve', 'İhracata Başlangıç', '/shipping-port.webp', 'em4NHl-qjK4',
    '{
        "sections": [
            {
                "type": "hero_intro", "icon": "Rocket", "badge": "İlk Adımı Güçlü Atın",
                "title": "İhracat Danışmanlığı ve", "title_highlight": "İhracata Başlangıç",
                "description": "Henüz ihracat yapmamış şirketler için tasarlanmış, ihracat kapasitesini artıran ve ilk satışı hedefleyen 6 aylık kapsamlı bir yol haritası.",
                "features": ["Hedef pazar tespiti", "6 Aylık danışmanlık programı", "Ticaret Bakanlığı destek yönetimi"]
            },
            {
                "type": "rich_text", "title": "İhracata Başlangıç Danışmanlığı Nedir?",
                "html": "<p>Henüz ihracat yapmamış şirketlerin, gelişim alanlarını belirleyerek ihracat kapasitelerini artırmak ve uluslararası ticarete başlamalarını sağlamak amacıyla geliştirilmiş <b>6 aylık</b> bir programdır.</p>"
            },
            {
                "type": "process_steps", "title": "6 Aylık Yol Haritası", "description": "Adım adım globale açılma süreci.",
                "steps": [
                    {"title": "Analiz & Hazırlık", "desc": "Firmanın ihracat olgunluk seviyesinin analizi ve tanıtım materyallerinin hazırlanması."},
                    {"title": "Pazar Araştırması", "desc": "Ürünleriniz için en doğru hedef pazarların tespiti ve rekabet analizi."},
                    {"title": "Müşteri Erişimi", "desc": "Potansiyel alıcıların listelenmesi ve ilk temasların kurulması."},
                    {"title": "Destek Yönetimi", "desc": "Ticaret Bakanlığı ihracat desteklerine başvuruların yönetilmesi."}
                ]
            },
            {
                "type": "cta_box", "title": "İhracata Şimdi Başlayın", 
                "description": "Amerika’dan Asya-Pasifik’e uzanan geniş network ağımızla sizi dünyaya açıyoruz.",
                "button_text": "Hemen Başlayın"
            }
        ]
    }', 'İhracat Danışmanlığı | Sistem Global'
);

-- 2. Pazar Analizi ve Hedef Pazar Tespiti
INSERT INTO `services_content` (slug, category_slug, category_name, title, title_highlighted, hero_image, youtube_id, content_json, seo_title) 
VALUES (
    'pazar-analizi-ve-hedef-pazar-tespiti', 'globallesme-ve-ihracat', 'Globalleşme & İhracat', 'Pazar Analizi ve', 'Hedef Pazar Tespiti', '/market-research-data.webp', 'jTOU40ZGvHA',
    '{
        "sections": [
            {
                "type": "hero_intro", "icon": "Target", "badge": "Doğru Pazar Hedeflemesi",
                "title": "Pazar Analizi ve", "title_highlight": "Hedef Pazar Tespiti",
                "description": "Ürünleriniz için en yüksek potansiyele sahip pazarları veriye dayalı stratejilerle belirliyor, ihracat risklerinizi minimize ediyoruz.",
                "features": ["Doğru ürün-pazar eşleştirmesi", "Engel ve fırsat analizleri", "Veriye dayalı strateji"]
            },
            {
                "type": "icon_grid", "title": "Neden Pazar Analizi?",
                "items": [
                    {"icon": "TrendingUp", "title": "İhracata Başlayanlar", "desc": "Global ölçekte en yüksek potansiyele ve talebe sahip pazarları belirlemek."},
                    {"icon": "BarChart", "title": "Pazar Payını Artıranlar", "desc": "Mevcut pazarlardaki konjonktürü anlayarak rekabette öne geçmek."},
                    {"icon": "Globe", "title": "Yeni Pazarlar Arayanlar", "desc": "Risk dağılımı için alternatif ve yeni pazarlara açılmak."}
                ]
            },
            {
                "type": "rich_text", "title": "Sistem Global Metodolojisi",
                "html": "<p>Çeyrek asrı aşan tecrübemiz ve yerel ofislerimizden gelen saha bilgileriyle ürününüze özel analizler gerçekleştiriyoruz.</p><ul><li>Ürün bazlı özelleştirme</li><li>Çok katmanlı analiz</li><li>Saha istihbaratı</li></ul>"
            }
        ]
    }', 'Hedef Pazar Tespiti | Sistem Global'
);
