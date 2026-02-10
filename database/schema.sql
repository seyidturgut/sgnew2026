-- sg2026webDB veritabanı şeması

CREATE TABLE IF NOT EXISTS `services_content` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `category_slug` VARCHAR(100) NOT NULL,
  `category_name` VARCHAR(255) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `title_highlighted` VARCHAR(255),
  `hero_image` VARCHAR(255),
  `youtube_id` VARCHAR(50),
  `content_json` LONGTEXT NOT NULL, -- Tüm sayfa bölümleri (JSON formatında)
  `seo_title` VARCHAR(255),
  `seo_description` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Örnek bir veri yapısı (KOSGEB için)
-- INSERT INTO `services_content` (slug, category_slug, category_name, title, title_highlighted, hero_image, content_json) VALUES (...);
