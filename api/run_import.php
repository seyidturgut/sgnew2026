<?php
header('Content-Type: application/json');
require_once 'db.php';

// Try to find the JSON file in current dir or up one level
$jsonFile = 'vergi_content_final.json';
if (!file_exists($jsonFile)) {
    // try parent directory
    $jsonFile = '../public/vergi_content_final.json';
}

if (!file_exists($jsonFile)) {
    die(json_encode(["error" => "File not found: $jsonFile"]));
}

$jsonData = file_get_contents($jsonFile);
$data = json_decode($jsonData, true);

if (!$data) {
    die(json_encode(["error" => "Invalid JSON in file: " . json_last_error_msg()]));
}

try {
    // 1. Delete existing
    $stmt = $pdo->prepare("DELETE FROM services_content WHERE slug = ?");
    $stmt->execute([$data['slug']]);

    // 2. Insert new
    // Note: 'content_json' needs to be JSON string if stored as string in DB
    $contentJson = is_array($data['content_json']) ? json_encode($data['content_json'], JSON_UNESCAPED_UNICODE) : $data['content_json'];

    $stmt = $pdo->prepare("
        INSERT INTO services_content 
        (slug, category_slug, category_name, title, title_highlighted, hero_image, youtube_id, content_json)
        VALUES (:slug, :cat_slug, :cat_name, :title, :title_h, :img, :yt_id, :content)
    ");

    $result = $stmt->execute([
        ':slug' => $data['slug'],
        ':cat_slug' => $data['category_slug'],
        ':cat_name' => $data['category_name'],
        ':title' => $data['title'],
        ':title_h' => $data['title_highlighted'],
        ':img' => $data['hero_image'],
        ':yt_id' => $data['youtube_id'],
        ':content' => $contentJson
    ]);

    if ($result) {
        echo json_encode(["success" => true, "message" => "Imported successfully for slug: " . $data['slug']]);
    } else {
        echo json_encode(["success" => false, "error" => "Insert failed"]);
    }

} catch (PDOException $e) {
    echo json_encode(["error" => "DB Error: " . $e->getMessage()]);
}
?>