# 📤 رفع المشروع على GitHub

## 🎯 الرابط المستهدف
```
https://github.com/ahmedrashadmoahmed-lang/tsc-erp-system.git
```

---

## 🚀 الطريقة 1: الرفع السريع (موصى به)

### الخطوة 1: تهيئة Git

```bash
# انتقل لمجلد المشروع
cd tsc-erp-complete

# تهيئة Git
git init

# إضافة كل الملفات
git add .

# أول Commit
git commit -m "🎉 Initial commit: TSC ERP System v1.0 - Foundation Complete"
```

### الخطوة 2: ربط المشروع بـ GitHub

```bash
# ربط المشروع بالـ Repository
git remote add origin https://github.com/ahmedrashadmoahmed-lang/tsc-erp-system.git

# رفع الكود
git branch -M main
git push -u origin main
```

✅ **تم! المشروع الآن على GitHub**

---

## 🛠️ الطريقة 2: باستخدام GitHub Desktop

### 1. افتح GitHub Desktop
### 2. File → Add Local Repository
### 3. اختر مجلد `tsc-erp-complete`
### 4. Publish Repository
### 5. اختر الحساب واسم الـ Repo: `tsc-erp-system`
### 6. اضغط Publish

---

## 🔐 إذا طُلب منك تسجيل الدخول

### الطريقة 1: Personal Access Token (موصى به)

```bash
# 1. اذهب إلى GitHub → Settings → Developer settings → Personal access tokens
# 2. Generate new token (classic)
# 3. اختر الصلاحيات: repo, workflow
# 4. احفظ الـ Token

# استخدم الـ Token كـ Password عند الـ Push
git push -u origin main
# Username: ahmedrashadmoahmed-lang
# Password: [الصق الـ Token هنا]
```

### الطريقة 2: GitHub CLI

```bash
# تثبيت GitHub CLI
# Windows: winget install GitHub.cli
# Mac: brew install gh
# Linux: sudo apt install gh

# تسجيل الدخول
gh auth login

# رفع المشروع
git push -u origin main
```

---

## 📋 التحقق من الرفع

بعد الرفع، تحقق من:

1. **الكود موجود:** https://github.com/ahmedrashadmoahmed-lang/tsc-erp-system
2. **الملفات كاملة:** يجب أن ترى 25+ ملف
3. **README يظهر:** الصفحة الرئيسية تعرض README.md

---

## 🎨 تحسينات إضافية (اختياري)

### إضافة Description للـ Repo

```bash
gh repo edit --description "نظام ERP/CRM/محاسبة شامل للشركات المصرية - Next.js 14 + TypeScript + Prisma"
gh repo edit --add-topic erp,crm,accounting,nextjs,typescript,prisma,egypt
```

### إضافة About Section

في GitHub:
1. اذهب للـ Repo
2. Settings → General
3. About → Edit
   - Description: "نظام ERP شامل مصري"
   - Website: https://tsc-erp-system.vercel.app (إذا نشرته)
   - Topics: erp, crm, accounting, nextjs

---

## 🌿 Branches المقترحة

```bash
# إنشاء branch للتطوير
git checkout -b develop
git push -u origin develop

# إنشاء branch للـ features الجديدة
git checkout -b feature/customers-crud
git checkout -b feature/rfq-system
git checkout -b feature/accounting
```

---

## 📝 Git Workflow الموصى به

### للـ Features الجديدة:

```bash
# 1. إنشاء branch جديد
git checkout -b feature/feature-name

# 2. العمل على الـ Feature
# ... تعديل الملفات ...

# 3. Commit
git add .
git commit -m "✨ feat: add feature description"

# 4. Push
git push origin feature/feature-name

# 5. إنشاء Pull Request على GitHub
```

### للـ Bug Fixes:

```bash
git checkout -b fix/bug-description
# ... fix the bug ...
git commit -m "🐛 fix: bug description"
git push origin fix/bug-description
```

### Commit Message Standards:

```
✨ feat: ميزة جديدة
🐛 fix: إصلاح خطأ
📝 docs: تحديث التوثيق
💄 style: تحسين UI
♻️ refactor: إعادة هيكلة الكود
⚡ perf: تحسين الأداء
✅ test: إضافة اختبارات
🔧 chore: مهام صيانة
```

---

## 🚨 ملاحظات مهمة

### ✅ يجب رفعها:
- ✅ كل ملفات المشروع
- ✅ README.md و SETUP.md
- ✅ prisma/schema.prisma
- ✅ src/ folder
- ✅ .github/ workflows

### ❌ لا ترفع:
- ❌ `.env` (استخدم .env.example فقط)
- ❌ `node_modules/` (في .gitignore)
- ❌ `.next/` (في .gitignore)
- ❌ بيانات قاعدة البيانات

---

## 🎯 التحقق من .gitignore

تأكد من أن `.gitignore` يحتوي على:

```
node_modules/
.next/
.env
.env*.local
*.log
.DS_Store
```

---

## 📱 الخطوة التالية: النشر

بعد رفع الكود على GitHub، يمكنك نشره على:

### 1. Vercel (موصى به - مجاني)
```bash
npm i -g vercel
vercel --prod
```

### 2. Railway (PostgreSQL مجاني)
- ربط GitHub Repo
- إضافة PostgreSQL
- Deploy تلقائي

### 3. DigitalOcean App Platform
- Import من GitHub
- إضافة Database
- Deploy

---

## ✅ Checklist النهائي

قبل الرفع، تأكد من:

- [ ] `.env` غير موجود في الـ Repo
- [ ] `.gitignore` موجود وصحيح
- [ ] `README.md` محدّث
- [ ] كل الملفات المهمة موجودة
- [ ] الـ Code يعمل محلياً
- [ ] لا يوجد معلومات حساسة في الكود

---

## 🎉 مبروك!

بعد الرفع، المشروع سيكون متاح على:
**https://github.com/ahmedrashadmoahmed-lang/tsc-erp-system**

وسيمكن للآخرين:
- 👀 مشاهدة الكود
- 📥 Clone المشروع
- 🤝 المساهمة (إذا أردت)
- ⭐ إضافة Star

---

**🚀 ابدأ الآن!**

```bash
cd tsc-erp-complete
git init
git add .
git commit -m "🎉 Initial commit: TSC ERP System"
git remote add origin https://github.com/ahmedrashadmoahmed-lang/tsc-erp-system.git
git branch -M main
git push -u origin main
```
