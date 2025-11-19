@echo off
echo 🚀 بدء رفع المشروع على GitHub...
echo.

echo 📦 تهيئة Git...
git init

echo 📁 إضافة الملفات...
git add .

echo 💾 إنشاء Commit...
git commit -m "🎉 Initial commit: TSC ERP System v1.0"

echo 🔗 ربط المشروع بـ GitHub...
git remote add origin https://github.com/ahmedrashadmoahmed-lang/tsc-erp-system.git

echo 📤 رفع الكود...
git branch -M main
git push -u origin main

echo.
echo ✅ تم رفع المشروع بنجاح!
echo 🌐 الرابط: https://github.com/ahmedrashadmoahmed-lang/tsc-erp-system
echo.
echo 🎉 مبروك! المشروع الآن على GitHub
pause
