<?php
// Set working directory to the script's directory
chdir(__DIR__);

require_once 'db.php';

$jsons_path = __DIR__ . '/../database/imports/';

// imports klasöründeki tüm JSON dosyalarını listele
$files = glob($jsons_path . '*.json');
$imported_count = 0;

if (empty($files)) {
    echo "Hata: JSON dosyaları bulunamadı. Path: $jsons_path\n";
    exit;
}

foreach ($files as $file) {
    echo "İşleniyor: " . basename($file) . "\n";
    $raw_content = file_get_contents($file);
    $content = json_decode($raw_content, true);

    if (!$content) {
        echo "Hata: " . basename($file) . " dosyası okunamadı veya JSON geçersiz.\n";
        continue;
    }

    if (!isset($content['slug']) || !isset($content['title'])) {
        echo "Hata: " . basename($file) . " dosyasında slug veya title eksik.\n";
        continue;
    }

    $slug = $content['slug'];
    $title = $content['title'];
    $hero_image = isset($content['hero_image']) ? $content['hero_image'] : null;
    $content_json = $raw_content; // Veritabanına raw string olarak yazıyoruz, json_encode gerekmez çünkü zaten string

    // Veritabanında güncelleme veya ekleme yap
    try {
        // Önce var mı kontrol et
        $stmt = $pdo->prepare("SELECT id FROM services_content WHERE slug = ?");
        $stmt->execute([$slug]);
        $exists = $stmt->fetch();

        if ($exists) {
            // Güncelle
            $stmt = $pdo->prepare("UPDATE services_content SET title = ?, hero_image = ?, content_json = ?, updated_at = NOW() WHERE slug = ?");
            $success = $stmt->execute([$title, $hero_image, $content_json, $slug]);
            if ($success)
                echo "✅ GÜNCELLENDİ: $slug\n";
            else
                echo "❌ GÜNCELLEME HATASI: $slug\n";
        } else {
            // Ekle
            $stmt = $pdo->prepare("INSERT INTO services_content (slug, title, hero_image, content_json, created_at, updated_at) VALUES (?, ?, ?, ?, NOW(), NOW())");
            $success = $stmt->execute([$slug, $title, $hero_image, $content_json]);
            if ($success)
                echo "✅ EKLENDİ: $slug\n";
            else
                echo "❌ EKLEME HATASI: $slug\n";
        }
        $imported_count++;

    } catch (PDOException $e) {
        echo "❌ SQL HATASI ($slug): " . $e->getMessage() . "\n";
    }
}

echo "\nToplam $imported_count dosya işlendi.\n";
?>