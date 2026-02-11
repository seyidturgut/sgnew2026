import json
import os

page_data = {
    "slug": "yatirim-fizibilitesi-hizmetleri",
    "title": "Yatırım Fizibilitesi",
    "title_highlighted": "Hizmetleri",
    "category": "Finansmana Erişim ve Sürdürülebilirlik",
    "breadcrumb": [
        {"name": "Anasayfa", "link": "/"},
        {"name": "Servisler", "link": "/servisler"},
        {"name": "Finansmana Erişim ve Sürdürülebilirlik", "link": "/servisler/finansmana-erisim-ve-surdurulebilirlik"},
        {"name": "Birleşme ve Satın Alma (M&A)", "link": "/servisler/finansmana-erisim-ve-surdurulebilirlik/birlesme-ve-satin-alma-ma"},
        {"name": "Yatırım Fizibilitesi Hizmetleri", "link": "/servisler/finansmana-erisim-ve-surdurulebilirlik/birlesme-ve-satin-alma-ma/yatirim-fizibilitesi-hizmetleri"}
    ],
    "hero": {
        "title": "Stratejik Sermaye Kararları İçin Üst Düzey Analitik Derinlik",
        "description": "Uluslararası standartlarda, bankalarca finanse edilebilir ve yatırımcıya hazır fizibilite raporları ile stratejik kararlarınızı sağlam temellere oturtun.",
        "image": "/images/servisler/fizibilite-hero.webp",
        "buttons": [
            {"text": "Fizibilite Talebi", "link": "#contact", "variant": "primary"},
            {"text": "Metodolojimizi İnceleyin", "link": "#sections", "variant": "outline"}
        ],
        "marks": [
            "Bankable (Finanse Edilebilir)",
            "Investor-Ready",
            "Denetlenebilir Veri Seti",
            "Teşvik Uyumluluk"
        ]
    },
    "sections": [
        {
            "id": "intro",
            "type": "content_with_image",
            "title": "Analitik Derinlik ve Metodolojik Standartlar",
            "content": """
                <p>Sistem Global, kurumsal şirketlerin stratejik yatırım kararlarını güçlü analitik temellere dayandırabilmeleri için kapsamlı Yatırım Fizibilitesi analizleri sunar.</p>
                <p>Çalışmalarımız, uluslararası yatırım bankaları ve global danışmanlık şirketlerinin uyguladığı metodolojik standartlara uygun olarak hazırlanır. Her çalışma üç temel eksende yapılandırılır: Finansal Fizibilite, Ticari (Pazar) Fizibilitesi ve Teknik Fizibilite.</p>
            """,
            "image": "/images/servisler/fizibilite-intro.webp",
            "image_position": "right"
        },
        {
            "id": "financial",
            "type": "content_with_image",
            "title": "I - Finansal Fizibilite",
            "subtitle": "Finansal Derinliği Net Yatırım Kararlarına Dönüştürüyoruz",
            "content": """
                <p>Projenin ekonomik uygulanabilirliğini ve sermaye verimliliğini ölçülebilir hale getiriyoruz. Tam entegre üçlü finansal modeller geliştirerek projeyi yatırımcı ve kredi veren perspektifinden değerlendiriyoruz.</p>
                <ul>
                    <li><strong>Entegre Finansal Modelleme:</strong> CAPEX/OPEX ayrıştırması ve nakit akışı odaklı şeffaf yapılar.</li>
                    <li><strong>ROI Metrikleri:</strong> NPV, IRR ve Geri Ödeme Süresi analizleri.</li>
                    <li><strong>Borç Servis Kapasitesi:</strong> DSCR ve LLCR analizleri ile finanse edilebilirlik doğrulaması.</li>
                    <li><strong>Stres Testleri:</strong> Duyarlılık ve senaryo analizleri ile dayanıklılık ölçümü.</li>
                </ul>
            """,
            "image": "/images/servisler/fizibilite-financial.webp",
            "image_position": "left"
        },
        {
            "id": "commercial",
            "type": "benefits_grid",
            "title": "II - Ticari Fizibilite",
            "description": "Gelir varsayımlarınızı stratejik pazar gerçekliğiyle temellendiriyoruz.",
            "benefits": [
                {
                    "title": "Pazar Talep Analizi",
                    "desc": "Top-down ve bottom-up yaklaşımlarla gerçekçi pazar büyüklüğü ve talep tahmini.",
                    "icon": "BarChart"
                },
                {
                    "title": "Sektör & Makro Çevre",
                    "desc": "PESTEL ve Porter’ın Beş Gücü çerçevesi ile risk ve bariyer analizi.",
                    "icon": "Globe"
                },
                {
                    "title": "Rekabetçi Konumlandırma",
                    "desc": "Rakip analizleri, pazar payı karşılaştırmaları ve fiyatlama benchmark çalışmaları.",
                    "icon": "Trophy"
                },
                {
                    "title": "Gelir Dayanıklılığı",
                    "desc": "Hacim ve penetrasyon projeksiyonlarının senaryo bazlı stres testleri.",
                    "icon": "ShieldCheck"
                }
            ]
        },
        {
            "id": "technical",
            "type": "icon_grid",
            "title": "III - Teknik Fizibilite",
            "items": [
                {
                    "title": "Teknoloji Değerlendirmesi",
                    "desc": "Proses akışları, TRL seviyesi ve referans proje incelemeleri.",
                    "icon": "Cpu"
                },
                {
                    "title": "Maliyet Validasyonu",
                    "desc": "CAPEX ve OPEX kalemlerinin sektör benchmarkları ile doğrulanması.",
                    "icon": "CheckCircle"
                },
                {
                    "title": "Uygulama & Operasyon",
                    "desc": "Kritik yol analizi, zaman çizelgesi ve ramp-up süreç testi.",
                    "icon": "Settings"
                },
                {
                    "title": "Teknik Risk Mitigasyonu",
                    "desc": "İnşaat ve operasyon riskleri için somut azaltım stratejileri.",
                    "icon": "AlertTriangle"
                }
            ]
        },
        {
            "type": "content_with_image",
            "title": "Neden Sistem Global?",
            "content": """
                <p>Sistem Global’in çok disiplinli yaklaşımı; finansal, ticari ve teknik analizleri entegre bir karar destek dokümanında birleştirir. Uluslararası yatırım bankaları seviyesinde standartlara bağlı kalırız.</p>
                <p>Çalışmalarımız Yatırım Teşvik Belgesi başvurularından, proje finansmanı görüşmelerine kadar her aşamada güvenilir bir temel sunar.</p>
            """,
            "image": "/images/servisler/fizibilite-why.webp",
            "image_position": "left"
        },
        {
            "type": "cta_box",
            "title": "Projenizi Stratejik Bir Zemine Taşıyın",
            "description": "Yatırımınızı yatırımcıya hazır, bankalarca finanse edilebilir ve uluslararası standartlarda konumlandırmak için bizimle iletişime geçin.",
            "button_text": "Hemen Başlayın",
            "secondary_button": "Detaylı Bilgi Alın"
        }
    ]
}

# Write to file
output_path = 'public/data/finansmana-erisim-ve-surdurulebilirlik__birlesme-ve-satin-alma-ma__yatirim-fizibilitesi-hizmetleri.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(page_data, f, ensure_ascii=False, indent=2)

print(f"✅ Success: {output_path} has been updated.")
