<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

require_once 'db.php';

$slug = isset($_GET['slug']) ? $_GET['slug'] : null;

if (!$slug) {
    echo json_encode(['error' => 'Slug parametresi eksik.']);
    exit;
}

try {
    $stmt = $pdo->prepare("SELECT * FROM services_content WHERE slug = ?");
    $stmt->execute([$slug]);
    $service = $stmt->fetch();

    if ($service) {
        // content_json'ı string'den array'e çeviriyoruz
        $service['content_json'] = json_decode($service['content_json']);
        echo json_encode($service);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'İçerik bulunamadı.']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Sunucu hatası: ' . $e->getMessage()]);
}
?>