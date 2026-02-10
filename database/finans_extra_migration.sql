-- Geri kalan Finans sayfaları için ekleme
-- 1. YATIRIM TEŞVİK DANIŞMANLIĞI
INSERT INTO `services_content` (slug, category_slug, category_name, title, title_highlighted, hero_image, youtube_id, content_json, seo_title) 
VALUES (
    'yatirim-tesvik-danismanligi', 'finansmana-erisim', 'Finansmana Erişim', 'Yatırım Teşvik', 'Danışmanlığı', '/investment.webp', '7IDUfvKXEGY',
    '{
        "sections": [
            {
                "type": "hero_intro", "icon": "Landmark", "badge": "Devlet Destekleri",
                "title": "Yatırımlarınızı", "title_highlight": "Teşviklerle Büyütün",
                "description": "Yeni tesis, modernizasyon veya kapasite artışı yatırımlarınızda vergi indiriminden sigorta primine kadar geniş destek yelpazesi.",
                "features": ["Gümrük vergisi muafiyeti", "KDV istisnası", "%90\'\'a varan vergi indirimi"]
            },
            {
                "type": "icon_grid", "title": "Teşvik Belgesi Avantajları",
                "items": [
                    {"icon": "Zap", "title": "Vergi İndirimi", "desc": "Yatırıma katkı oranı çerçevesinde kurumlar vergisinin indirimli uygulanması."},
                    {"icon": "Award", "title": "SGK Primi Desteği", "desc": "İşçi ve işveren hisselerinin belirli sürelerle devlet tarafından karşılanması."},
                    {"icon": "Landmark", "title": "Faiz Desteği", "desc": "Yatırım kredileri için puan bazlı faiz indirimi veya hibe iadesi."}
                ]
            }
        ]
    }', 'Yatırım Teşvik Belgesi Danışmanlığı | Sistem Global'
);

-- 2. TİCARET BAKANLIĞI DESTEKLERİ
INSERT INTO `services_content` (slug, category_slug, category_name, title, title_highlighted, hero_image, youtube_id, content_json, seo_title) 
VALUES (
    'ticaret-bakanligi-destekleri', 'finansmana-erisim', 'Finansmana Erişim', 'Ticaret Bakanlığı', 'Destekleri', '/global-trade.webp', '7IDUfvKXEGY',
    '{
        "sections": [
            {
                "type": "hero_intro", "icon": "Globe", "badge": "İhracat Geliştirme",
                "title": "Küresel Pazarda", "title_highlight": "Güçlü Varlık",
                "description": "Pazar araştırmasından yurt dışı marka tesciline kadar ihracat odaklı tüm süreçlerde Bakanlık hibeleri.",
                "features": ["Yurt dışı tanıtım desteği", "Kira desteği", "Fuar katılım teşviki"]
            },
            {
                "type": "process_steps", "title": "Başvuru Süreci", "description": "Destek Yönetim Sistemi (DYS) üzerinden ilerleyen aşamalar.",
                "steps": [
                    {"title": "DYS Kayıt", "desc": "Şirket yetkilendirmesi ve sistemsel açılış."},
                    {"title": "Ön Onay", "desc": "Yurt dışı harcamalar öncesi stratejik onay."},
                    {"title": "Ödeme Talebi", "desc": "YMM onaylı belgelerle hibe tahsilatı."}
                ]
            }
        ]
    }', 'Ticaret Bakanlığı İhracat Destekleri | Sistem Global'
);

-- 3. E-TURQUALITY (BİLİŞİMİN YILDIZLARI)
INSERT INTO `services_content` (slug, category_slug, category_name, title, title_highlighted, hero_image, youtube_id, content_json, seo_title) 
VALUES (
    'e-turquality-programi', 'finansmana-erisim', 'Finansmana Erişim', 'E-Turquality', 'Programı', '/digital-economy.webp', 'KQBkoA6-RSU',
    '{
        "sections": [
            {
                "type": "hero_intro", "icon": "Cpu", "badge": "Bilişim İhracatı",
                "title": "Bilişimin Yıldızları", "title_highlight": "Programı",
                "description": "Yazılım, oyun ve fintech gibi sektörlere özel 5+5 yıllık dev destek paketi.",
                "features": ["70 Puan barajı", "Personel hibe desteği", "Bulut ve yazılım desteği"]
            },
            {
                "type": "data_table", "title": "Asgari İhracat Limitleri", "subtitle": "Yıllık Ortalama",
                "rows": [
                    {"label": "Dijital Oyun", "value": "1.000.000 $"},
                    {"label": "Yazılım ve Fintech", "value": "500.000 $"}
                ]
            }
        ]
    }', 'E-Turquality (Bilişimin Yıldızları) Danışmanlığı | Sistem Global'
);
