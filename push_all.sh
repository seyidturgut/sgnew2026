#!/bin/bash

# 1. Yerel Yedekleme (Dosyaya Kayıt)
echo "--- Yerel yedek alınıyor..."
python3 sync_manager.py

# 2. Veritabanı Dump (Opsiyonel: Eğer mysqldump kuruluysa)
# mysqldump -u root -proot sg2026webDB > database/full_db_dump.sql

# 3. GitHub'a Push
echo "--- GitHub'a gönderiliyor..."
git add .
git commit -m "sync: database backup and code update $(date +'%Y-%m-%d %H:%M:%S')"
git push origin main

echo "--- BİTTİ. Veriler hem DB'de (canlı), hem dosyada (yedek), hem de GitHub'da (bulut)."
