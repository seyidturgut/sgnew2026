
import json
import os

page_data = {
    'slug': 'transfer-fiyatlandirmasi',
    'title': 'Transfer',
    'title_highlighted': 'Fiyatlandırması',
    'category': 'Vergi',
    'youtube_id': '',
    'breadcrumb': [
        {'name': 'Anasayfa', 'link': '/'},
        {'name': 'Servisler', 'link': '/servisler'},
        {'name': 'Vergi & Finans', 'link': '/servisler/vergi-finans'},
        {'name': 'Vergi', 'link': '/servisler/vergi-finans/vergi'},
        {'name': 'Transfer Fiyatlandırması', 'link': '/servisler/vergi-finans/vergi/transfer-fiyatlandirmasi'}
    ],
    'hero': {
        'title': 'Transfer Fiyatlandırması',
        'description': 'İhtiyacınıza Uygun Transfer Fiyatlandırma Çözümleri için Sistem Global!',
        'image': '/images/transfer-pricing-hero.webp',
        'buttons': [
            {'text': 'Detaylı Bilgi Alın', 'link': '#contact', 'variant': 'primary'},
            {'text': 'Hizmetlerimiz', 'link': '#services', 'variant': 'outline'}
        ]
    },
    'sections': [
        {
            'type': 'content_with_image',
            'title': 'İhtiyacınıza Uygun Transfer Fiyatlandırma Çözümleri',
            'content': """<p>Transfer Fiyatlandırması Raporu Hazırlama hizmetimizle işletmenizin vergi kanunları ve uluslararası standartlara uyumunu sağlayarak, ilişkili kişilerle gerçekleştirdiğiniz alım, satım, imalat, inşaat, kiralama/kiraya verme, ödünç para alınması/verilmesi gibi işlemleri detaylı bir şekilde inceliyoruz.</p>
            <p>Hizmetimizle hem ilişkili kişilerle gerçekleşmiş işlemleri irdeliyor hem de gelecekte gerçekleştirecek ilişkili kişi işlemlerinde fiyatlamanın tespitine ilişkin destek oluyoruz. İşletmenizi fiyatlamaya ilişkin vergisel risklerden korumak ve optimum düzeyde vergi ödemenizi sağlamak için deneyimli ekibimizle yanınızdayız.</p>""",
            'image': '/images/transfer-pricing-audit.webp',
            'image_position': 'right'
        },
        {
            'type': 'icon_grid',
            'title': 'Kimler İçindir?',
            'items': [
                {'title': 'BMVD Şirketleri', 'desc': 'BMVD\'ne (Büyük Mükellefler Vergi Dairesi Başkanlığı) Kayıtlı Şirketler.', 'icon': 'Target'},
                {'title': 'Global Operasyonlar', 'desc': 'Yurt dışındaki ilişkili şirketleri ve yurt dışındaki şubeleri ile işlem yapan diğer kurumlar vergisi mükellefleri.', 'icon': 'Globe'},
                {'title': 'Serbest Bölgeler', 'desc': 'Serbest bölgedeki şirketler ile serbest bölgede şubesi olan şirketler.', 'icon': 'Building'}
            ]
        },
        {
            'type': 'benefits_grid',
            'title': 'Ne Kazandırır?',
            'benefits': [
                {'title': 'Mevzuat Uyumu', 'desc': 'İşletmenizin ulusal ve uluslararası transfer fiyatlandırması düzenlemelerine uyumunu sağlar.', 'icon': 'CheckCircle'},
                {'title': 'Vergi Yükü Yönetimi', 'desc': 'Kurumların efektif vergi yükünü yönetmelerine yardımcı olarak, vergisel risklerin azaltılmasına katkı sağlar.', 'icon': 'BarChart'},
                {'title': 'Şeffaflık', 'desc': 'İlişkili işlemlerde güvenilirlik ve kurumsal şeffaflık sağlanır.', 'icon': 'Shield'},
                {'title': 'İtibar Yönetimi', 'desc': 'Adil fiyatlandırma politikaları sayesinde kurumsal itibar kaygılarını azaltır.', 'icon': 'Award'},
                {'title': 'Rekabet Avantajı', 'desc': 'İşletmenin potansiyelini arttırır ve rekabet avantajı sağlayarak kurumun genel başarı stratejilerine katkıda bulunur.', 'icon': 'TrendingUp'}
            ]
        },
        {
            'type': 'service_cards',
            'title': 'SG Öne Çıkanlar',
            'cards': [
                {'title': 'Doğru Benchmark Analizi', 'desc': 'Emsallere Uygunluk İlkesinin Sağlanmasında En Doğru ve Sağlıklı Benchmark Analizlerinin Yapılması.', 'icon': 'Search', 'color': 'blue'},
                {'title': 'Gelecek Yönlendirmesi', 'desc': 'Sadece Geçmişe Etkili Değil Geleceğe Yönelik Transfer Fiyatlaması Hususunda İşletmenin Yönlendirilmesi.', 'icon': 'Compass', 'color': 'green'},
                {'title': 'Optimum Vergi Düzeyi', 'desc': 'İşletmenin ve İşletmenin İçinde Bulunduğu Grubun Optimum Vergi Düzeyinde Kalması.', 'icon': 'Percent', 'color': 'purple'},
                {'title': 'Yeniden Yapılandırma', 'desc': 'İşletmenin Gerek Yurt İçinde Gerekse Yurt Dışında Yeniden Yapılandırma İşlemlerinde Rehberliğin Sağlanması.', 'icon': 'RefreshCw', 'color': 'orange'}
            ]
        },
        {
            'type': 'cta_box',
            'title': 'Vergisel Risklerinizi Yönetelim',
            'description': 'Transfer fiyatlandırması süreçlerinizde uzman desteği almak için bizimle iletişime geçin.',
            'button_text': 'Ücretsiz Danışmanlık Alın',
            'secondary_button': 'Hizmetlerimiz'
        }
    ]
}

os.makedirs('database/imports', exist_ok=True)
with open('database/imports/transfer-fiyatlandirmasi.json', 'w', encoding='utf-8') as f:
    json.dump(page_data, f, ensure_ascii=False, indent=2)

# Also write to public/data for local development without DB
os.makedirs('public/data', exist_ok=True)
with open('public/data/transfer-fiyatlandirmasi.json', 'w', encoding='utf-8') as f:
    json.dump(page_data, f, ensure_ascii=False, indent=2)

print('✅ JSON created in database/imports and public/data')
