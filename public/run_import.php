<?php
header('Content-Type: application/json');

$host = 'localhost';
$dbname = 'sg2026webDB';
$username = 'root';
$password = 'root';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Read JSON file
    $jsonFile = 'vergi_content_final.json';
    if (!file_exists($jsonFile)) {
        die(json_encode(["error" => "File not found: $jsonFile"]));
    }

    $jsonData = file_get_contents($jsonFile);
    $data = json_decode($jsonData, true);

    if (!$data) {
        die(json_encode(["error" => "Invalid JSON in file"]));
    }

    // 1. Delete existing
    $stmt = $pdo->prepare("DELETE FROM services_content WHERE slug = ?");
    $stmt->execute([$data['slug']]);

    // 2. Insert new
    $stmt = $pdo->prepare("
        INSERT INTO services_content 
        (slug, category_slug, category_name, title, title_highlighted, hero_image, youtube_id, content_json)
        VALUES (:slug, :cat_slug, :cat_name, :title, :title_h, :img, :yt_id, :content)
    ");

    $stmt->execute([
        ':slug' => $data['slug'],
        ':cat_slug' => $data['category_slug'],
        ':cat_name' => $data['category_name'],
        ':title' => $data['title'],
        ':title_h' => $data['title_highlighted'],
        ':img' => $data['hero_image'],
        ':yt_id' => $data['youtube_id'],
        ':content' => json_encode($data['content_json'], JSON_UNESCAPED_UNICODE)
    ]);

    echo json_encode(["success" => true, "message" => "Imported successfully for slug: " . $data['slug']]);

} catch (PDOException $e) {
    echo json_encode(["error" => "DB Error: " . $e->getMessage()]);
}
?>