<?php
// Hataları görebilmek için
ini_set('display_errors', 1);
error_reporting(E_ALL);

// MAMP MySQL Bağlantı Bilgileri
$host = '127.0.0.1;port=8889';
$db = 'sg2026webDB';
$user = 'root';
$pass = 'root';

try {
     $dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";
     $options = [
          PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
          PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
          PDO::ATTR_EMULATE_PREPARES => false,
     ];
     $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
     header('Content-Type: application/json');
     echo json_encode([
          'error' => 'Veritabanı bağlantı hatası',
          'technical' => $e->getMessage()
     ]);
     exit;
}
?>