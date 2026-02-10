<?php
// Database credentials
$host = 'localhost';
$dbname = 'sg2026webDB';
$username = 'root';
$password = 'root';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Read SQL file
    $sqlFile = 'database/zzz_vergi_yonetim_final.sql';
    if (!file_exists($sqlFile)) {
        die("SQL file not found: $sqlFile");
    }

    $sql = file_get_contents($sqlFile);

    // Execute SQL
    // Split by semicolon if multiple statements
    $statements = array_filter(array_map('trim', explode(';', $sql)));

    foreach ($statements as $stmt) {
        if (!empty($stmt)) {
            $pdo->exec($stmt);
            echo "Executed: " . substr($stmt, 0, 50) . "...\n";
        }
    }

    echo "Successfully imported SQL file.\n";

} catch (PDOException $e) {
    die("DB Connection failed: " . $e->getMessage());
}
?>