-- Proje Gelişim Logları

CREATE TABLE IF NOT EXISTS `project_logs` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `task_name` VARCHAR(255) NOT NULL,
  `status` ENUM('TAMAMLANDI', 'DEVAM_EDIYOR', 'BEKLEMEDE') DEFAULT 'BEKLEMEDE',
  `description` TEXT,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bugüne kadar yapılanlar
INSERT INTO `project_logs` (task_name, status, description) VALUES 
('Yüksek Sadakatli Sayfaların Kurtarılması', 'TAMAMLANDI', 'Veritabanı yedeklerinden (SQL/JSON) 61 benzersiz servis sayfası .jsx olarak geri yüklendi.'),
('App.jsx Statik Rotalama', 'TAMAMLANDI', 'Dinamik rotalardan statik sayfa importlarına geçildi, çakışmalar giderildi.'),
('Git Entegrasyonu', 'TAMAMLANDI', 'Proje git ile ilklendirildi ve sgnew2026 reposu bağlandı.'),
('Dizin Yapılandırması', 'TAMAMLANDI', 'Hizmet sayfaları kategorilerine göre (Vergi, Mevzuat vb.) klasörlendi.');

-- Gelecek hedefler
INSERT INTO `project_logs` (task_name, status, description) VALUES 
('Eksik İçerik Tamamlama', 'DEVAM_EDIYOR', 'Bazı sayfalardaki "Henüz içerik eklenmedi" kısımlarının dokümanlardan güncellenmesi.'),
('GitHub Senkronizasyonu', 'DEVAM_EDIYOR', 'Kodun yeni repoya düzenli olarak pushlanması.');
