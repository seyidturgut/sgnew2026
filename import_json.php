<?php
$host = 'localhost';
$port = '8889';
$user = 'root';
$pass = 'root';
$dbname = 'sg2026webDB';

if ($argc < 2) {
    die("Usage: php import_json.php <json_file>\n");
}

$file = $argv[1];
if (!file_exists($file)) {
    die("File not found: $file\n");
}

$json = file_get_contents($file);
$data = json_decode($json, true);

if (!$data) {
    die("Invalid JSON\n");
}

// Map database schema
$slug = $data['slug'];
$title = $data['title'];
$title_highlighted = $data['title_highlighted'] ?? $title;
$category_name = $data['category'] ?? 'Vergi';
$category_slug = strtolower($category_name) == 'vergi' ? 'vergi' : 'genel';
$hero_image = $data['hero']['image'] ?? '';
$youtube_id = $data['youtube_id'] ?? '';
$content_json = json_encode($data, JSON_UNESCAPED_UNICODE);

$conn = new mysqli($host, $user, $pass, $dbname, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error . "\n");
}

$stmt = $conn->prepare("SELECT id FROM services_content WHERE slug = ?");
$stmt->bind_param("s", $slug);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $stmt = $conn->prepare("UPDATE services_content SET category_slug = ?, category_name = ?, title = ?, title_highlighted = ?, hero_image = ?, youtube_id = ?, content_json = ? WHERE slug = ?");
    $stmt->bind_param("ssssssss", $category_slug, $category_name, $title, $title_highlighted, $hero_image, $youtube_id, $content_json, $slug);
    echo "Updating existing service content: $slug\n";
} else {
    $stmt = $conn->prepare("INSERT INTO services_content (slug, category_slug, category_name, title, title_highlighted, hero_image, youtube_id, content_json) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $slug, $category_slug, $category_name, $title, $title_highlighted, $hero_image, $youtube_id, $content_json);
    echo "Inserting new service content: $slug\n";
}

if ($stmt->execute()) {
    echo "✅ Success!\n";
} else {
    echo "❌ Error: " . $stmt->error . "\n";
}

$stmt->close();
$conn->close();
?>