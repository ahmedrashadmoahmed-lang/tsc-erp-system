#!/bin/bash

echo "🚀 بدء رفع المشروع على GitHub..."
echo ""

# تهيئة Git
echo "📦 تهيئة Git..."
git init

# إضافة الملفات
echo "📁 إضافة الملفات..."
git add .

# Commit
echo "💾 إنشاء Commit..."
git commit -m "🎉 Initial commit: TSC ERP System v1.0

✅ Foundation Complete (Phase 1):
- 50+ Database Tables
- Authentication & Authorization System
- Egyptian Tax & Business Requirements
- Dashboard & Layout
- Complete Documentation

🔧 Tech Stack:
- Next.js 14 + TypeScript
- Prisma + PostgreSQL
- Tailwind CSS
- JWT Authentication

📚 Documentation:
- README.md
- SETUP.md
- START_HERE.md
- PROJECT_STATUS.md"

# ربط بـ GitHub
echo "🔗 ربط المشروع بـ GitHub..."
git remote add origin https://github.com/ahmedrashadmoahmed-lang/tsc-erp-system.git

# رفع الكود
echo "📤 رفع الكود..."
git branch -M main
git push -u origin main

echo ""
echo "✅ تم رفع المشروع بنجاح!"
echo "🌐 الرابط: https://github.com/ahmedrashadmoahmed-lang/tsc-erp-system"
echo ""
echo "🎉 مبروك! المشروع الآن على GitHub"
