-- MASTER CONTENT MIGRATION (Finans Bölümü)
-- Tüm içerikleri temizleyip yeniden ekleyelim (Test amaçlı)
TRUNCATE TABLE `services_content`;

-- 1. KOSGEB DESTEKLERİ
INSERT INTO `services_content` (slug, category_slug, category_name, title, title_highlighted, hero_image, youtube_id, content_json, seo_title) 
VALUES (
    'kosgeb-destekleri', 'finansmana-erisim', 'Finansmana Erişim', 'KOSGEB', 'Destekleri', '/entrepreneurship.webp', 'KQBkoA6-RSU',
    '{
        "sections": [
            {
                "type": "hero_intro", "icon": "Zap", "badge": "Sürdürülebilir Büyüme",
                "title": "Sürdürülebilir Büyümenin Anahtarı:", "title_highlight": "KOSGEB Destekleri",
                "description": "Türkiye’de girişimciliğin güçlendirilmesi ve KOBİ’lerin rekabet gücünün artırılması için stratejik destekler.",
                "features": ["Hızlı finansman erişimi", "Proje bazlı yönetim", "Hibe ve faizsiz kredi"]
            },
            {
                "type": "icon_grid", "title": "Destek Programlarımız",
                "items": [
                    {"icon": "Target", "title": "Ar-Ge, Ür-Ge ve İnovasyon", "desc": "Yeni ürün geliştirme ve teknolojik iyileştirme süreçlerine tam hibe."},
                    {"icon": "Briefcase", "title": "KOBİGEL - Gelişim Destek", "desc": "İmalatçı KOBİ\'\'lerin dijitalleşme ve verimlilik projelerine odaklanan program."},
                    {"icon": "Globe", "title": "Yurt Dışı Pazar Desteği", "desc": "İhracata yeni başlayacak veya pazarını genişletecek KOBİ\'\'lere 300.000 TL hibe."}
                ]
            },
            {
                "type": "cta_box", "title": "KOSGEB Uzmanımızla Görüşün", 
                "description": "Firmanızın puanını hesaplayalım ve uygun projeyi kurgulayalım.",
                "button_text": "Anında Analiz"
            }
        ]
    }', 'KOSGEB Destekleri | Sistem Global'
);

-- 2. TÜBİTAK DESTEKLERİ
INSERT INTO `services_content` (slug, category_slug, category_name, title, title_highlighted, hero_image, youtube_id, content_json, seo_title) 
VALUES (
    'tubitak-destekleri', 'finansmana-erisim', 'Finansmana Erişim', 'TÜBİTAK', 'Destekleri', '/innovation-lab.webp', '7IDUfvKXEGY',
    '{
        "sections": [
            {
                "type": "hero_intro", "icon": "Cpu", "badge": "İnovasyon & Ar-Ge",
                "title": "Teknolojide Liderliğin Yolu:", "title_highlight": "TÜBİTAK TEYDEB",
                "description": "Ar-Ge harcamalarınızı nakit hibeye dönüştüren, akademik iş birlikleri ve sanayi ortaklıklarını teşvik eden programlar.",
                "features": ["%75\'\'e varan nakit hibe", "Geri ödemesiz destekler", "Yüksek teknoloji üretimi"]
            },
            {
                "type": "icon_grid", "title": "Popüler TEYDEB Programları",
                "items": [
                    {"icon": "Zap", "title": "1501 Sanayi Ar-Ge", "desc": "Yıllık bütçe sınırı olmaksızın Ar-Ge harcamalarının %75\'\'ine destek."},
                     {"icon": "Award", "title": "1507 KOBİ Ar-Ge", "desc": "KOBİ\'\'ler için daha basit başvuru ve hızlı sonuç mekanizması."},
                     {"icon": "Globe", "title": "1509 Uluslararası İş Birliği", "desc": "Eureka ve Eurostars gibi küresel projeler için özel kurgulanmış hibe."}
                ]
            },
            {
                "type": "cta_box", "title": "TÜBİTAK Proje Hazırlığı", "description": "Teknik raporların yazımı ve mali denetim süreçlerinde yanınızdayız.", "button_text": "Süreç Hakkında Bilgi Al"
            }
        ]
    }', 'TÜBİTAK Destekleri Danışmanlığı | Sistem Global'
);

-- 3. TEKNOLOJİ ODAKLI SANAYİ HAMLESİ
INSERT INTO `services_content` (slug, category_slug, category_name, title, title_highlighted, hero_image, youtube_id, content_json, seo_title) 
VALUES (
    'teknoloji-odakli-sanayi-hamlesi', 'finansmana-erisim', 'Finansmana Erişim', 'Teknoloji Odaklı', 'Sanayi Hamlesi', '/industrial-tech.webp', '7IDUfvKXEGY',
    '{
        "sections": [
            {
                "type": "hero_intro", "icon": "Factory", "badge": "Milli Teknoloji",
                "title": "Stratejik Yatırımlarda", "title_highlight": "HAMLE Dönemi",
                "description": "Yüksek katma değerli ürünlerin yerli üretimi için tasarlanan uçtan uca destek programı.",
                "features": ["30M TL Proje alt limiti", "KDV muafiyeti", "Vergi indirimi"]
            },
            {
                "type": "data_table", "title": "Program Proje Limitleri", "subtitle": "Milyon TL Cinsinden",
                "rows": [
                    {"label": "Genel Sektörler", "value": "30.000.000 TL"},
                    {"label": "Yazılım Geliştirme", "value": "10.000.000 TL"}
                ]
            },
            {
                "type": "icon_grid", "title": "Destek Paketleri",
                "items": [
                    {"icon": "PieChart", "title": "Yatırım Teşviği", "desc": "SGK primi, vergi indirimi ve faiz desteği entegrasyonu."},
                    {"icon": "Target", "title": "KOSGEB & TÜBİTAK", "desc": "Ar-Ge ve üretim aşamalarında eş zamanlı hibeler."}
                ]
            }
        ]
    }', 'Hamle Programı Danışmanlığı | Sistem Global'
);

-- 4. DAHİLDE İŞLEME REJİMİ
INSERT INTO `services_content` (slug, category_slug, category_name, title, title_highlighted, hero_image, youtube_id, content_json, seo_title) 
VALUES (
    'dahilde-isleme-rejimi-danismanligi', 'finansmana-erisim', 'Finansmana Erişim', 'Dahilde İşleme Rejimi', 'Danışmanlığı', '/global-trade.webp', '7IDUfvKXEGY',
    '{
        "sections": [
            {
                "type": "hero_intro", "icon": "Ship", "badge": "Gümrük & İthalat",
                "title": "Gümrük Vergisi Olmadan", "title_highlight": "Üretin ve İhraç Edin",
                "description": "DİR ile ithal ettiğiniz hammaddeyi Türkiye\'\'de işleyip ihraç ederken maliyetlerinizi minimize edin.",
                "features": ["Vergi muafiyeti", "Maliyet yönetimi", "KDV iadesi hızı"]
            },
            {
                "type": "process_steps", "title": "D.İ.İ.B. Süreci", "description": "6 Adımda Belge Yönetimi",
                "steps": [
                    {"title": "Ön Analiz", "desc": "Kapasite raporu ve sarfiyat analizi."},
                    {"title": "DYS Başvuru", "desc": "Bakanlık sistemine proje girişi."},
                    {"title": "Belge İthali", "desc": "Vergisiz hammadde alım süreci."},
                    {"title": "Kapatma (Taahhüt)", "desc": "İhracat sonrası dosya kapanışı."}
                ]
            }
        ]
    }', 'Dahilde İşleme Rejimi (DİR) | Sistem Global'
);
