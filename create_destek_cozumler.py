import json
import os

page_data = {
    "slug": "destek-cozumler",
    "title": "Destek Çözümler",
    "title_highlighted": "Sürdürülebilir Başarı İçin",
    "category": "Yazılım: Proje ve Ürün Çözümleri",
    "breadcrumb": [
        {"name": "Anasayfa", "link": "/"},
        {"name": "Servisler", "link": "/servisler"},
        {"name": "Yazılım: Proje ve Ürün Çözümleri", "link": "/servisler/yazilim-proje-urun-cozumleri"},
        {"name": "Destek Çözümler", "link": "/servisler/yazilim-proje-urun-cozumleri/destek-cozumler"}
    ],
    "hero": {
        "title": "Teknik Sorunları Değil, İşinizi Çözüyoruz",
        "description": "Solvera olarak sunduğumuz destek çözümleri, yalnızca teknik sorunları gidermeyi değil; sistemlerin doğru, verimli ve sürdürülebilir şekilde çalışmasını hedefler.",
        "image": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80",
        "buttons": [
            {"text": "Destek Alın", "link": "/iletisim", "variant": "primary"},
            {"text": "Hizmetlerimiz", "link": "#services", "variant": "outline"}
        ],
        "marks": [
            "Kesintisiz Destek",
            "Süreç Analizi",
            "Performans Takibi",
            "Veri Güvenliği"
        ]
    },
    "layout_density": "compact",
    "sections": [
        {
            "id": "intro",
            "type": "intro_text",
            "title": "Çözüm Ortaklığı Yaklaşımımız",
            "content": """
                <p>Kurumsal danışmanlık ve bakım & destek hizmetlerimizle, yazılım süreçlerinizin her aşamasında yanınızdayız.</p>
                <p>Amacımız sadece anlık problemleri çözmek değil, sistemlerinizin uzun vadeli sağlığını ve verimliliğini garanti altına almaktır.</p>
            """
        },
        {
            "id": "services",
            "type": "tabs_content",
            "title": "Hizmet Detayları",
            "layout": "side_nav",
            "items": [
                {
                    "label": "Kurumsal Danışmanlık",
                    "title": "1. Kurumsal Danışmanlık",
                    "content": """
                        <div class="space-y-6">
                            <h4 className="text-xl font-bold text-secondary">Doğru Yapı, Sağlam Süreç, Sürdürülebilir Dijitalleşme</h4>
                            <p>Kurumların dijitalleşme yolculuğunda ihtiyaç duyduğu stratejik ve teknik rehberliği sağlıyoruz. Mevcut sistemleri, iş süreçlerini ve hedefleri birlikte değerlendirerek en doğru dijital kurguyu oluşturuyoruz.</p>
                            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h5 class="font-bold text-secondary mb-4">Kapsam</h5>
                                <ul class="space-y-3">
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> Süreç analizi ve iyileştirme çalışmaları</li>
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> Dijital dönüşüm ve yol haritası danışmanlığı</li>
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> Mevcut sistemlerin değerlendirilmesi</li>
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> Yazılım ve teknoloji seçimlerinde rehberlik</li>
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> Mevzuat ve operasyon uyumunun sağlanması</li>
                                </ul>
                            </div>
                        </div>
                    """
                },
                {
                    "label": "Bakım & Destek",
                    "title": "2. Bakım & Destek Hizmeti",
                    "content": """
                        <div class="space-y-6">
                            <h4 className="text-xl font-bold text-secondary">Canlı Sistemler İçin Kesintisiz Destek</h4>
                            <p>Canlı ortamda kullanılan yazılımların sorunsuz çalışması için sürekli bakım ve destek hizmeti sunuyoruz. Sistemlerinizin performansını, güvenliğini ve sürekliliğini güvence altına alıyoruz.</p>
                            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h5 class="font-bold text-secondary mb-4">Hizmetlerimiz</h5>
                                <ul class="space-y-3">
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> Teknik destek ve kullanıcı talepleri yönetimi</li>
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> Sistem izleme ve performans takibi</li>
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> Hata giderme ve iyileştirme çalışmaları</li>
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> Güncelleme ve versiyon yönetimi</li>
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> Uzun vadeli destek ve SLA bazlı hizmet modelleri</li>
                                </ul>
                            </div>
                        </div>
                    """
                },
                {
                    "label": "Proje Yönetimi",
                    "title": "3. Proje Yönetimi",
                    "content": """
                        <div class="space-y-6">
                            <p>Projelerinizi planlama aşamasından tamamlanmasına kadar tek merkezden, şeffaf ve izlenebilir şekilde yönetin. Görev, zaman, kaynak ve ilerleme takibini dijital ortamda kolayca sağlayın.</p>
                            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h5 class="font-bold text-secondary mb-4">Özellikler</h5>
                                <ul class="space-y-3">
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> Proje ve görev bazlı takip</li>
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> İş paketi ve sorumluluk yönetimi</li>
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> Zaman ve performans izleme</li>
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> Raporlama ve ilerleme analizleri</li>
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> Kuruma özel süreç kurguları</li>
                                </ul>
                            </div>
                        </div>
                    """
                },
                {
                    "label": "Veri Tabanı Yönetimi",
                    "title": "4. Veri Tabanı Yönetimi",
                    "content": """
                        <div class="space-y-6">
                            <p>Verilerinizi güvenli, performanslı ve sürdürülebilir bir altyapı ile yönetin. Farklı sistemlerden gelen verilerin düzenli, doğru ve erişilebilir olmasını sağlayın.</p>
                            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h5 class="font-bold text-secondary mb-4">Çözümlerimiz</h5>
                                <ul class="space-y-3">
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> Veri tabanı tasarımı ve optimizasyon</li>
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> Performans ve güvenlik iyileştirmeleri</li>
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> Veri bütünlüğü ve yedekleme çözümleri</li>
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> Büyük veri ve yüksek hacimli sistemler</li>
                                    <li class="flex items-start gap-3"><span class="text-primary mt-1">●</span> Entegrasyon ve veri senkronizasyonu</li>
                                </ul>
                            </div>
                        </div>
                    """
                }
            ]
        },
        {
            "id": "cta",
            "type": "cta_box",
            "title": "Süreçlerinizi Birlikte İyileştirelim",
            "description": "Riskleri minimize etmek, verimliliği artırmak ve sistemlerinizi geleceğe hazırlamak için uzman ekibimizle görüşün.",
            "button_text": "İletişime Geçin",
            "url": "/iletisim"
        }
    ]
}

# Ensure directory exists
os.makedirs('public/data', exist_ok=True)

# Write to file
output_path = 'public/data/yazilim-proje-urun-cozumleri__destek-cozumler.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(page_data, f, ensure_ascii=False, indent=2)

print(f"✅ Success: {output_path} has been created.")
